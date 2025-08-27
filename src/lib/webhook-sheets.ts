// Alternative: Using n8n webhook or Make (Integromat) webhook
// This is simpler than Google Apps Script and doesn't require authentication

// Option 1: Use a free webhook testing service first
export async function sendToWebhook(formType: string, data: any) {
  // You can use one of these free services:
  // 1. Webhook.site - Get a unique URL at https://webhook.site
  // 2. Pipedream - Create a workflow at https://pipedream.com
  // 3. Make.com (formerly Integromat) - Free tier available
  
  const WEBHOOK_URL = process.env.WEBHOOK_URL || '';
  
  if (!WEBHOOK_URL) {
    console.log('Webhook URL not configured');
    return { success: false, reason: 'Not configured' };
  }

  try {
    const response = await fetch(WEBHOOK_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        formType,
        timestamp: new Date().toISOString(),
        ...data
      }),
    });

    if (response.ok) {
      console.log(`Sent ${formType} data to webhook`);
      return { success: true };
    } else {
      console.error('Webhook returned error:', response.status);
      return { success: false, status: response.status };
    }
  } catch (error: any) {
    console.error('Error sending to webhook:', error);
    return { success: false, error: error.message };
  }
}