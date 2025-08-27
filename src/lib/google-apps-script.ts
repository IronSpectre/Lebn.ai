// Google Apps Script integration
// This is an alternative to the service account method

const APPS_SCRIPT_URL = process.env.GOOGLE_APPS_SCRIPT_URL || '';

export async function sendToGoogleAppsScript(formType: string, data: any) {
  if (!APPS_SCRIPT_URL) {
    console.log('Google Apps Script URL not configured');
    return { success: false, reason: 'Not configured' };
  }

  try {
    console.log(`Sending ${formType} data to Apps Script:`, APPS_SCRIPT_URL);
    
    const response = await fetch(APPS_SCRIPT_URL, {
      method: 'POST',
      mode: 'no-cors', // Apps Script doesn't support CORS, so we use no-cors mode
      headers: {
        'Content-Type': 'text/plain',
      },
      body: JSON.stringify({
        formType,
        ...data
      }),
      redirect: 'follow', // Important for Apps Script
    });

    // With no-cors mode, we can't read the response
    // But if the request went through without throwing, it likely succeeded
    console.log(`Apps Script request completed for ${formType}`);
    
    // Since we can't read the response in no-cors mode, 
    // we assume success if no error was thrown
    return { 
      success: true, 
      message: 'Data sent to Apps Script (no-cors mode)',
      note: 'Response cannot be verified in no-cors mode'
    };
    
  } catch (error: any) {
    console.error('Error sending to Apps Script:', error);
    return { success: false, error: error.message };
  }
}

// Specific functions for each form type
export async function sendCareHomeToAppsScript(data: any) {
  return sendToGoogleAppsScript('care-home', data);
}

export async function sendPatientToAppsScript(data: any) {
  return sendToGoogleAppsScript('patient', data);
}

export async function sendPrivateGPToAppsScript(data: any) {
  return sendToGoogleAppsScript('private-gp', data);
}

export async function sendNHSGPToAppsScript(data: any) {
  return sendToGoogleAppsScript('nhs-gp', data);
}

export async function sendContactToAppsScript(data: any) {
  return sendToGoogleAppsScript('contact', data);
}