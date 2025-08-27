import { google } from 'googleapis'

// Initialize Google Sheets client
let sheetsClient: any = null

function getGoogleAuth() {
  // Option 1: Use individual environment variables
  if (process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL && process.env.GOOGLE_PRIVATE_KEY) {
    return new google.auth.JWT({
      email: process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL,
      key: process.env.GOOGLE_PRIVATE_KEY.replace(/\\n/g, '\n'),
      scopes: ['https://www.googleapis.com/auth/spreadsheets'],
    })
  }
  
  // Option 2: Use full credentials JSON
  if (process.env.GOOGLE_APPLICATION_CREDENTIALS_JSON) {
    const credentials = JSON.parse(process.env.GOOGLE_APPLICATION_CREDENTIALS_JSON)
    return new google.auth.JWT({
      email: credentials.client_email,
      key: credentials.private_key,
      scopes: ['https://www.googleapis.com/auth/spreadsheets'],
    })
  }
  
  console.warn('Google Sheets credentials not configured. Data will only be saved to database.')
  return null
}

export async function getGoogleSheetsClient() {
  if (sheetsClient) return sheetsClient
  
  const auth = getGoogleAuth()
  if (!auth) return null
  
  try {
    await auth.authorize()
    sheetsClient = google.sheets({ version: 'v4', auth })
    return sheetsClient
  } catch (error) {
    console.error('Failed to initialize Google Sheets client:', error)
    return null
  }
}

export async function appendToSheet(sheetName: string, values: any[][]) {
  try {
    const sheets = await getGoogleSheetsClient()
    if (!sheets || !process.env.GOOGLE_SHEETS_ID) {
      console.log('Google Sheets not configured, skipping...')
      return { success: false, reason: 'Not configured' }
    }

    const response = await sheets.spreadsheets.values.append({
      spreadsheetId: process.env.GOOGLE_SHEETS_ID,
      range: `${sheetName}!A:Z`, // Append to the first available row
      valueInputOption: 'USER_ENTERED',
      insertDataOption: 'INSERT_ROWS',
      requestBody: {
        values: values,
      },
    })

    console.log(`Added ${values.length} row(s) to ${sheetName} sheet`)
    return { success: true, response }
  } catch (error: any) {
    console.error(`Error appending to ${sheetName} sheet:`, error.message)
    
    // Handle common errors
    if (error.code === 404) {
      console.error('Sheet not found. Make sure the sheet name matches exactly.')
    } else if (error.code === 403) {
      console.error('Permission denied. Make sure the service account has access to the sheet.')
    } else if (error.code === 429) {
      console.error('Rate limit exceeded. Will retry later.')
    }
    
    return { success: false, error: error.message }
  }
}

// Helper function to format date
export function formatDate(date: Date | string): string {
  const d = typeof date === 'string' ? new Date(date) : date
  return d.toLocaleString('en-US', {
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
    hour: '2-digit',
    minute: '2-digit',
    hour12: true,
  })
}

// Helper functions for each form type
export async function saveCareHomeToSheets(data: any) {
  const values = [[
    data.id,
    formatDate(new Date()),
    data.carHomeName || data.careHomeName,
    data.contactName || '',
    data.contactEmail || '',
    data.contactPhone || '',
    data.residentCount || '',
    data.recordingMethod || '',
    data.willingToTrial || '',
    data.biggestChallenge || '',
    data.detailsLostFrequency || '',
    data.timePerShift || '',
    data.wouldFindEasier || '',
    `Instant: ${data.featureRanking?.instantSummaries || 0}, Central: ${data.featureRanking?.centralHistory || 0}, Shift: ${data.featureRanking?.shiftCommunication || 0}, Admin: ${data.featureRanking?.reducedAdmin || 0}`,
    data.concerns || '',
  ]]
  
  return appendToSheet('Care Homes', values)
}

export async function savePatientToSheets(data: any) {
  const values = [[
    data.id,
    formatDate(new Date()),
    data.contactName || '',
    data.contactEmail || '',
    data.contactPhone || '',
    data.ageRange || '',
    data.currentHealthcare || '',
    data.chronicConditions || '',
    data.biggestFrustration || '',
    data.forgottenDetails || '',
    data.appointmentPrep || '',
    data.likelyToUse || '',
    `Never Forget: ${data.mostValuedFeatures?.neverForget || 0}, Better Appointments: ${data.mostValuedFeatures?.betterAppointments || 0}, One Place: ${data.mostValuedFeatures?.onePlace || 0}, Privacy: ${data.mostValuedFeatures?.privacy || 0}`,
    data.concerns || '',
    data.monthlyPrice || '',
    data.willingToTest || '',
  ]]
  
  return appendToSheet('Patients', values)
}

export async function savePrivateGPToSheets(data: any) {
  const features = []
  if (data.interestedInFeatures?.timeEfficiency) features.push('Time Efficiency')
  if (data.interestedInFeatures?.patientSatisfaction) features.push('Patient Satisfaction')
  if (data.interestedInFeatures?.clinicalQuality) features.push('Clinical Quality')
  if (data.interestedInFeatures?.whiteLabel) features.push('White Label')
  if (data.interestedInFeatures?.multiLanguage) features.push('Multi-Language')
  if (data.interestedInFeatures?.lifestyleData) features.push('Lifestyle Data')
  
  const values = [[
    data.id,
    formatDate(new Date()),
    data.practiceName || '',
    data.contactName || '',
    data.contactEmail || '',
    data.contactPhone || '',
    data.practiceType || '',
    data.practitionerCount || '',
    data.patientsPerMonth || '',
    data.biggestChallenge || '',
    data.averageConsultTime || '',
    data.historyGatheringTime || '',
    data.patientPreparation || '',
    features.join(', '),
    data.planType || '',
    data.concerns || '',
    data.willingToPilot || '',
  ]]
  
  return appendToSheet('Private GPs', values)
}

export async function saveNHSGPToSheets(data: any) {
  const values = [[
    data.id,
    formatDate(new Date()),
    data.contactName || '',
    data.contactEmail || '',
    data.role || '',
    data.practiceSize || '',
    data.historyTakingTime || '',
    data.missingInfoFrequency || '',
    data.wouldImproveEfficiency || '',
    `Red Flags: ${data.usefulFeatures?.redFlags || 0}, Timeline: ${data.usefulFeatures?.timeline || 0}, Medication: ${data.usefulFeatures?.medicationHistory || 0}, EMR: ${data.usefulFeatures?.emrIntegration || 0}`,
    data.concerns || '',
    data.willingToTrial || '',
  ]]
  
  return appendToSheet('NHS GPs', values)
}

export async function saveContactToSheets(data: any) {
  const values = [[
    data.id,
    formatDate(new Date()),
    data.name || '',
    data.email || '',
    data.phone || '',
    data.company || '',
    data.userType || '',
    data.subject || '',
    data.message || '',
  ]]
  
  return appendToSheet('Contact Messages', values)
}