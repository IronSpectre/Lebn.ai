// SheetDB.io integration - Simple REST API for Google Sheets
// Free tier: 500 requests/month

const SHEETDB_URL = process.env.SHEETDB_URL || '';

export async function sendToSheetDB(sheetName: string, data: any) {
  if (!SHEETDB_URL) {
    console.log('SheetDB URL not configured');
    return { success: false, reason: 'Not configured' };
  }

  try {
    // SheetDB expects data in a specific format
    const payload = {
      data: [{
        Timestamp: new Date().toISOString(),
        'Form Type': data.formType || sheetName,
        Name: data.name || data.contactName || '',
        Email: data.email || data.contactEmail || '',
        Phone: data.phone || data.contactPhone || '',
        Company: data.company || data.carHomeName || data.practiceName || '',
        Subject: data.subject || '',
        Message: data.message || data.concerns || '',
        'Full Data': JSON.stringify(data)
      }]
    };

    const response = await fetch(`${SHEETDB_URL}?sheet=${sheetName}`, {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(payload),
    });

    const result = await response.json();
    
    if (result.created) {
      console.log(`Saved to SheetDB sheet: ${sheetName}`);
      return { success: true, result };
    } else {
      console.error('SheetDB error:', result);
      return { success: false, error: result };
    }
  } catch (error: any) {
    console.error('Error sending to SheetDB:', error);
    return { success: false, error: error.message };
  }
}

// Specific functions for each form type
export async function sendCareHomeToSheetDB(data: any) {
  return sendToSheetDB('Care Homes', data);
}

export async function sendPatientToSheetDB(data: any) {
  return sendToSheetDB('Patients', data);
}

export async function sendPrivateGPToSheetDB(data: any) {
  return sendToSheetDB('Private GPs', data);
}

export async function sendNHSGPToSheetDB(data: any) {
  return sendToSheetDB('NHS GPs', data);
}

export async function sendContactToSheetDB(data: any) {
  return sendToSheetDB('Contact Messages', data);
}