import { NextRequest, NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'

function convertToCSV(data: any[], type: string): string {
  if (data.length === 0) return 'No data available'

  // Define column mappings for each type
  const columnMappings: Record<string, Record<string, string>> = {
    'care-homes': {
      careHomeName: 'Care Home Name',
      residentCount: 'Resident Count',
      recordingMethod: 'Recording Method',
      biggestChallenge: 'Biggest Challenge',
      detailsLostFrequency: 'Details Lost Frequency',
      timePerShift: 'Time Per Shift',
      wouldFindEasier: 'Would Find Easier',
      willingToTrial: 'Willing to Trial',
      contactName: 'Contact Name',
      contactRole: 'Contact Role',
      contactEmail: 'Contact Email',
      contactPhone: 'Contact Phone',
      createdAt: 'Submission Date'
    },
    'patients': {
      ageRange: 'Age Range',
      currentHealthcare: 'Current Healthcare',
      chronicConditions: 'Chronic Conditions',
      biggestFrustration: 'Biggest Frustration',
      forgottenDetails: 'Forgotten Details',
      appointmentPrep: 'Appointment Prep',
      likelyToUse: 'Likely to Use',
      monthlyPrice: 'Monthly Price',
      willingToTest: 'Willing to Test',
      contactName: 'Contact Name',
      contactEmail: 'Contact Email',
      contactPhone: 'Contact Phone',
      createdAt: 'Submission Date'
    },
    'private-gps': {
      practiceName: 'Practice Name',
      practiceType: 'Practice Type',
      practitionerCount: 'Practitioner Count',
      patientsPerMonth: 'Patients Per Month',
      biggestChallenge: 'Biggest Challenge',
      averageConsultTime: 'Average Consult Time',
      historyGatheringTime: 'History Gathering Time',
      patientPreparation: 'Patient Preparation',
      planType: 'Plan Type',
      willingToPilot: 'Willing to Pilot',
      contactName: 'Contact Name',
      contactRole: 'Contact Role',
      contactEmail: 'Contact Email',
      contactPhone: 'Contact Phone',
      createdAt: 'Submission Date'
    },
    'nhs-gps': {
      role: 'Role',
      practiceSize: 'Practice Size',
      historyTakingTime: 'History Taking Time',
      missingInfoFrequency: 'Missing Info Frequency',
      wouldImproveEfficiency: 'Would Improve Efficiency',
      redFlags: 'Red Flags Score',
      timeline: 'Timeline Score',
      medicationHistory: 'Medication History Score',
      emrIntegration: 'EMR Integration Score',
      concerns: 'Concerns',
      willingToTrial: 'Willing to Trial',
      contactName: 'Contact Name',
      contactRole: 'Contact Role',
      contactEmail: 'Contact Email',
      createdAt: 'Submission Date'
    },
    'contact': {
      name: 'Name',
      email: 'Email',
      phone: 'Phone',
      company: 'Company',
      userType: 'User Type',
      subject: 'Subject',
      message: 'Message',
      emailSent: 'Email Sent',
      createdAt: 'Submission Date'
    }
  }

  const mapping = columnMappings[type] || {}
  
  // Get headers
  const headers = Object.values(mapping)
  const keys = Object.keys(mapping)
  
  // Create CSV content
  let csv = headers.join(',') + '\n'
  
  // Add data rows
  data.forEach(row => {
    const values = keys.map(key => {
      let value = row[key]
      
      // Handle null/undefined
      if (value === null || value === undefined) return ''
      
      // Handle dates
      if (key === 'createdAt' || key === 'updatedAt') {
        value = new Date(value).toLocaleString()
      }
      
      // Handle arrays
      if (Array.isArray(value)) {
        value = value.join('; ')
      }
      
      // Handle booleans
      if (typeof value === 'boolean') {
        value = value ? 'Yes' : 'No'
      }
      
      // Escape quotes and wrap in quotes if contains comma
      value = String(value).replace(/"/g, '""')
      if (value.includes(',') || value.includes('\n') || value.includes('"')) {
        value = `"${value}"`
      }
      
      return value
    })
    
    csv += values.join(',') + '\n'
  })
  
  return csv
}

export async function GET(
  request: NextRequest,
  { params }: { params: { type: string } }
) {
  try {
    const { type } = params
    let data: any[] = []
    let filename = ''

    switch (type) {
      case 'care-homes':
        data = await prisma.careHomeSubmission.findMany({
          orderBy: { createdAt: 'desc' }
        })
        filename = 'care-home-submissions.csv'
        break
      
      case 'patients':
        data = await prisma.patientSubmission.findMany({
          orderBy: { createdAt: 'desc' }
        })
        filename = 'patient-submissions.csv'
        break
      
      case 'private-gps':
        data = await prisma.privateGPSubmission.findMany({
          orderBy: { createdAt: 'desc' }
        })
        filename = 'private-gp-submissions.csv'
        break
      
      case 'nhs-gps':
        data = await prisma.nHSGPSubmission.findMany({
          orderBy: { createdAt: 'desc' }
        })
        filename = 'nhs-gp-submissions.csv'
        break
      
      case 'contact':
        data = await prisma.contactSubmission.findMany({
          orderBy: { createdAt: 'desc' }
        })
        filename = 'contact-submissions.csv'
        break
      
      case 'all':
        // Export all data in separate sections
        const allData = {
          careHomes: await prisma.careHomeSubmission.findMany({ orderBy: { createdAt: 'desc' } }),
          patients: await prisma.patientSubmission.findMany({ orderBy: { createdAt: 'desc' } }),
          privateGPs: await prisma.privateGPSubmission.findMany({ orderBy: { createdAt: 'desc' } }),
          nhsGPs: await prisma.nHSGPSubmission.findMany({ orderBy: { createdAt: 'desc' } }),
          contacts: await prisma.contactSubmission.findMany({ orderBy: { createdAt: 'desc' } })
        }
        
        let allCSV = ''
        
        if (allData.careHomes.length > 0) {
          allCSV += 'CARE HOME SUBMISSIONS\n'
          allCSV += convertToCSV(allData.careHomes, 'care-homes') + '\n\n'
        }
        
        if (allData.patients.length > 0) {
          allCSV += 'PATIENT SUBMISSIONS\n'
          allCSV += convertToCSV(allData.patients, 'patients') + '\n\n'
        }
        
        if (allData.privateGPs.length > 0) {
          allCSV += 'PRIVATE GP SUBMISSIONS\n'
          allCSV += convertToCSV(allData.privateGPs, 'private-gps') + '\n\n'
        }
        
        if (allData.nhsGPs.length > 0) {
          allCSV += 'NHS GP SUBMISSIONS\n'
          allCSV += convertToCSV(allData.nhsGPs, 'nhs-gps') + '\n\n'
        }
        
        if (allData.contacts.length > 0) {
          allCSV += 'CONTACT SUBMISSIONS\n'
          allCSV += convertToCSV(allData.contacts, 'contact') + '\n\n'
        }
        
        return new NextResponse(allCSV, {
          headers: {
            'Content-Type': 'text/csv',
            'Content-Disposition': `attachment; filename="all-submissions-${new Date().toISOString().split('T')[0]}.csv"`
          }
        })
        
      default:
        return NextResponse.json({ error: 'Invalid type' }, { status: 400 })
    }

    const csv = convertToCSV(data, type)
    
    return new NextResponse(csv, {
      headers: {
        'Content-Type': 'text/csv',
        'Content-Disposition': `attachment; filename="${filename}"`
      }
    })
    
  } catch (error) {
    console.error('Export error:', error)
    return NextResponse.json({ error: 'Export failed' }, { status: 500 })
  }
}