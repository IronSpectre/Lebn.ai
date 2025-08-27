import { NextRequest, NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'
import { sendCareHomeToSheetDB } from '@/lib/sheetdb'

export async function POST(request: NextRequest) {
  try {
    const data = await request.json()
    
    const submission = await prisma.careHomeSubmission.create({
      data: {
        careHomeName: data.carHomeName,
        residentCount: data.residentCount,
        recordingMethod: data.recordingMethod,
        recordingMethodOther: data.recordingMethodOther || null,
        biggestChallenge: data.biggestChallenge || null,
        detailsLostFrequency: data.detailsLostFrequency,
        timePerShift: data.timePerShift || null,
        wouldFindEasier: data.wouldFindEasier,
        instantSummaries: data.featureRanking?.instantSummaries || 0,
        centralHistory: data.featureRanking?.centralHistory || 0,
        shiftCommunication: data.featureRanking?.shiftCommunication || 0,
        reducedAdmin: data.featureRanking?.reducedAdmin || 0,
        concerns: data.concerns || null,
        willingToTrial: data.willingToTrial,
        contactName: data.contactName || null,
        contactRole: data.contactRole || null,
        contactEmail: data.contactEmail || null,
        contactPhone: data.contactPhone || null,
      },
    })

    // Save to SheetDB (non-blocking)
    sendCareHomeToSheetDB({ ...data, id: submission.id, formType: 'care-home' }).catch(error => {
      console.error('Failed to save to SheetDB:', error)
    })

    return NextResponse.json({ 
      success: true, 
      message: 'Thank you for your interest! We will contact you soon.',
      id: submission.id 
    })
  } catch (error) {
    console.error('Error saving care home submission:', error)
    return NextResponse.json(
      { success: false, message: 'Failed to save submission' },
      { status: 500 }
    )
  }
}