// Google Apps Script Code for Organization Deployment
// This version works with Google Workspace organizations

function doPost(e) {
  try {
    // Allow CORS for all origins
    return handleRequest(e);
  } catch(error) {
    return createResponse({
      success: false,
      error: error.toString()
    });
  }
}

function doGet(e) {
  // Handle preflight requests for CORS
  if (e.parameter.test) {
    return createResponse({
      success: true,
      message: 'Google Apps Script is working. Use POST to submit data.',
      deployment: 'Organization deployment with public access'
    });
  }
  
  return createResponse({
    success: true,
    message: 'Google Apps Script is ready'
  });
}

function handleRequest(e) {
  try {
    // Parse the incoming data
    const data = JSON.parse(e.postData.contents);
    
    // Get the spreadsheet
    const spreadsheetId = '1RIcRHp4MdztQegVdPkIGA36iuO8LgOT0dD9UU1VzMdA';
    const spreadsheet = SpreadsheetApp.openById(spreadsheetId);
    
    // Determine which sheet to use based on form type
    let sheetName;
    switch(data.formType) {
      case 'care-home':
        sheetName = 'Care Homes';
        break;
      case 'patient':
        sheetName = 'Patients';
        break;
      case 'private-gp':
        sheetName = 'Private GPs';
        break;
      case 'nhs-gp':
        sheetName = 'NHS GPs';
        break;
      case 'contact':
        sheetName = 'Contact Messages';
        break;
      default:
        sheetName = 'Other';
    }
    
    // Get or create the sheet
    let sheet;
    try {
      sheet = spreadsheet.getSheetByName(sheetName);
    } catch(err) {
      sheet = spreadsheet.insertSheet(sheetName);
    }
    
    // Check if headers exist, if not create them
    if (sheet.getLastRow() === 0) {
      const headers = [
        'Timestamp',
        'Form Type',
        'ID',
        'Name',
        'Email',
        'Phone',
        'Organization',
        'Role',
        'Full Data'
      ];
      sheet.appendRow(headers);
    }
    
    // Prepare the row data
    const rowData = [
      new Date().toISOString(),
      data.formType || '',
      data.id || '',
      data.contactName || data.name || '',
      data.contactEmail || data.email || '',
      data.contactPhone || data.phone || '',
      data.carHomeName || data.practiceName || data.company || '',
      data.contactRole || data.role || '',
      JSON.stringify(data)
    ];
    
    // Append the data
    sheet.appendRow(rowData);
    
    // Return success response
    return createResponse({
      success: true,
      message: 'Data saved successfully',
      sheet: sheetName,
      row: sheet.getLastRow()
    });
    
  } catch(error) {
    return createResponse({
      success: false,
      error: error.toString()
    });
  }
}

function createResponse(data) {
  return ContentService
    .createTextOutput(JSON.stringify(data))
    .setMimeType(ContentService.MimeType.JSON);
}

// Test function to verify spreadsheet access
function testSpreadsheetAccess() {
  const spreadsheetId = '1RIcRHp4MdztQegVdPkIGA36iuO8LgOT0dD9UU1VzMdA';
  const spreadsheet = SpreadsheetApp.openById(spreadsheetId);
  console.log('Spreadsheet name:', spreadsheet.getName());
  console.log('Number of sheets:', spreadsheet.getNumSheets());
  
  const sheets = spreadsheet.getSheets();
  sheets.forEach(sheet => {
    console.log('Sheet:', sheet.getName(), 'Rows:', sheet.getLastRow());
  });
}

// Alternative: Create a simple proxy endpoint that accepts data with a secret key
function doPostWithKey(e) {
  const SECRET_KEY = 'your-secret-key-here-change-this'; // Change this!
  
  try {
    const data = JSON.parse(e.postData.contents);
    
    // Check for secret key
    if (data.secretKey !== SECRET_KEY) {
      return createResponse({
        success: false,
        error: 'Unauthorized'
      });
    }
    
    // Remove the secret key before processing
    delete data.secretKey;
    
    // Process the request
    return handleRequest(e);
  } catch(error) {
    return createResponse({
      success: false,
      error: error.toString()
    });
  }
}