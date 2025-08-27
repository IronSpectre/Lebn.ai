// Google Apps Script Code
// Copy this entire code to your Google Apps Script project
// Deploy as Web App with:
// - Execute as: Me (your account)
// - Who has access: Anyone

function doPost(e) {
  try {
    // Parse the incoming data
    const data = JSON.parse(e.postData.contents);
    
    // Get the spreadsheet
    const spreadsheetId = '1RIcRHp4MdztQegVdPkIGA36iuO8LgOT0dD9UU1VzMdA'; // Your spreadsheet ID
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
    return ContentService
      .createTextOutput(JSON.stringify({
        success: true,
        message: 'Data saved successfully',
        sheet: sheetName,
        row: sheet.getLastRow()
      }))
      .setMimeType(ContentService.MimeType.JSON);
      
  } catch(error) {
    // Return error response
    return ContentService
      .createTextOutput(JSON.stringify({
        success: false,
        error: error.toString()
      }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}

// Handle GET requests (for testing)
function doGet(e) {
  return ContentService
    .createTextOutput(JSON.stringify({
      success: true,
      message: 'Google Apps Script is working. Use POST to submit data.'
    }))
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