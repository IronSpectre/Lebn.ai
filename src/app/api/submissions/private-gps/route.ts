import { NextRequest, NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'
import { sendPrivateGPToSheetDB } from '@/lib/sheetdb'

export async function POST(request: NextRequest) {
  try {
    const data = await request.json()
    
    const submission = await prisma.privateGPSubmission.create({
      data: {
        practiceName: data.practiceName,
        practiceType: data.practiceType,
        practitionerCount: data.practitionerCount,
        patientsPerMonth: data.patientsPerMonth,
        biggestChallenge: data.biggestChallenge || null,
        averageConsultTime: data.averageConsultTime,
        historyGatheringTime: data.historyGatheringTime,
        patientPreparation: data.patientPreparation,
        timeEfficiency: data.interestedInFeatures?.timeEfficiency || false,
        patientSatisfaction: data.interestedInFeatures?.patientSatisfaction || false,
        clinicalQuality: data.interestedInFeatures?.clinicalQuality || false,
        whiteLabel: data.interestedInFeatures?.whiteLabel || false,
        multiLanguage: data.interestedInFeatures?.multiLanguage || false,
        lifestyleData: data.interestedInFeatures?.lifestyleData || false,
        planType: data.planType,
        concerns: data.concerns || null,
        willingToPilot: data.willingToPilot,
        contactName: data.contactName || null,
        contactRole: data.contactRole || null,
        contactEmail: data.contactEmail || null,
        contactPhone: data.contactPhone || null,
        additionalInfo: data.additionalInfo || null,
      },
    })

    // Save to SheetDB (non-blocking)
    sendPrivateGPToSheetDB({ ...data, id: submission.id, formType: 'private-gp' }).catch(error => {
      console.error('Failed to save to SheetDB:', error)
    })

    return NextResponse.json({ 
      success: true, 
      message: 'Thank you for your interest! Our team will contact you within 24 hours to discuss your practice needs.',
      id: submission.id 
    })
  } catch (error) {
    console.error('Error saving private GP submission:', error)
    return NextResponse.json(
      { success: false, message: 'Failed to save submission' },
      { status: 500 }
    )
  }
}