import { NextRequest, NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'
import { sendNHSGPToAppsScript } from '@/lib/google-apps-script'

export async function POST(request: NextRequest) {
  try {
    const data = await request.json()
    
    const submission = await prisma.nHSGPSubmission.create({
      data: {
        role: data.role,
        roleOther: data.roleOther || null,
        practiceSize: data.practiceSize,
        historyTakingTime: data.historyTakingTime,
        missingInfoFrequency: data.missingInfoFrequency,
        wouldImproveEfficiency: data.wouldImproveEfficiency,
        redFlags: data.usefulFeatures?.redFlags || 0,
        timeline: data.usefulFeatures?.timeline || 0,
        medicationHistory: data.usefulFeatures?.medicationHistory || 0,
        emrIntegration: data.usefulFeatures?.emrIntegration || 0,
        concerns: data.concerns || null,
        willingToTrial: data.willingToTrial,
        contactName: data.contactName || null,
        contactRole: data.contactRole || null,
        contactEmail: data.contactEmail || null,
      },
    })

    // Save to Google Apps Script (non-blocking)
    sendNHSGPToAppsScript({ ...data, id: submission.id }).catch(error => {
      console.error('Failed to save to Google Apps Script:', error)
    })

    return NextResponse.json({ 
      success: true, 
      message: 'Thank you for your interest! Our NHS team will contact you within 48 hours to discuss the pilot program.',
      id: submission.id 
    })
  } catch (error) {
    console.error('Error saving NHS GP submission:', error)
    return NextResponse.json(
      { success: false, message: 'Failed to save submission' },
      { status: 500 }
    )
  }
}