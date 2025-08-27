import { NextRequest, NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'
import { sendPatientToSheetDB } from '@/lib/sheetdb'

export async function POST(request: NextRequest) {
  try {
    const data = await request.json()
    
    const submission = await prisma.patientSubmission.create({
      data: {
        ageRange: data.ageRange,
        currentHealthcare: data.currentHealthcare,
        chronicConditions: data.chronicConditions || null,
        biggestFrustration: data.biggestFrustration || null,
        forgottenDetails: data.forgottenDetails,
        appointmentPrep: data.appointmentPrep || null,
        likelyToUse: data.likelyToUse,
        neverForget: data.mostValuedFeatures?.neverForget || 0,
        betterAppointments: data.mostValuedFeatures?.betterAppointments || 0,
        onePlace: data.mostValuedFeatures?.onePlace || 0,
        privacy: data.mostValuedFeatures?.privacy || 0,
        concerns: data.concerns || null,
        monthlyPrice: data.monthlyPrice || null,
        willingToTest: data.willingToTest,
        contactName: data.contactName || null,
        contactEmail: data.contactEmail || null,
        contactPhone: data.contactPhone || null,
      },
    })

    // Save to SheetDB (non-blocking)
    sendPatientToSheetDB({ ...data, id: submission.id, formType: 'patient' }).catch(error => {
      console.error('Failed to save to SheetDB:', error)
    })

    return NextResponse.json({ 
      success: true, 
      message: 'Thank you for your interest! We will contact you soon about early access.',
      id: submission.id 
    })
  } catch (error) {
    console.error('Error saving patient submission:', error)
    return NextResponse.json(
      { success: false, message: 'Failed to save submission' },
      { status: 500 }
    )
  }
}