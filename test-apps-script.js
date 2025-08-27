// Test script to check Google Apps Script
const APPS_SCRIPT_URL = 'https://script.google.com/a/macros/lebn.ai/s/AKfycbz30_439xGMX_ctG2i2xtJdOxay5w3xy6gD_8jQnmgjiCxGq5jugEPLldZ7oIzoswDP/exec';

async function testAppsScript() {
  const testData = {
    formType: 'contact',
    name: 'Test User',
    email: 'test@example.com',
    phone: '123-456-7890',
    company: 'Test Company',
    userType: 'patient',
    subject: 'Test from Node.js',
    message: 'Testing Apps Script integration',
    id: 'test-' + Date.now()
  };

  try {
    console.log('Sending test data to Apps Script...');
    console.log('URL:', APPS_SCRIPT_URL);
    
    const response = await fetch(APPS_SCRIPT_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'text/plain',
      },
      body: JSON.stringify(testData),
      redirect: 'follow'
    });

    console.log('Response status:', response.status);
    console.log('Response headers:', response.headers);
    
    const text = await response.text();
    console.log('Response text:', text.substring(0, 500)); // First 500 chars
    
    // Try to parse as JSON
    try {
      const json = JSON.parse(text);
      console.log('Parsed JSON:', json);
    } catch (e) {
      console.log('Response is not JSON');
    }
  } catch (error) {
    console.error('Error:', error);
  }
}

testAppsScript();