# Google Apps Script Setup Instructions

## Step 1: Create a New Apps Script Project

1. Go to https://script.google.com
2. Click "New Project"
3. Delete any existing code
4. Copy ALL the code from `google-apps-script.js` file
5. Paste it into the Apps Script editor
6. Click "Save" (Ctrl+S or Cmd+S)
7. Name your project (e.g., "Lebn Form Submissions")

## Step 2: Deploy as Web App

1. Click "Deploy" button (top right)
2. Select "New Deployment"
3. Click the gear icon next to "Select type"
4. Choose "Web app"
5. Configure the deployment:
   - **Description**: "Lebn Form Submissions Handler"
   - **Execute as**: "Me" (your account)
   - **Who has access**: "Anyone" ⚠️ IMPORTANT: Must be "Anyone", not "Anyone with Google Account"
6. Click "Deploy"
7. Copy the Web app URL (it will look like: https://script.google.com/macros/s/[ID]/exec)

## Step 3: Update Your .env File

Replace the GOOGLE_APPS_SCRIPT_URL in your `.env` file with the new URL from Step 2.

```
GOOGLE_APPS_SCRIPT_URL=https://script.google.com/macros/s/YOUR_NEW_DEPLOYMENT_ID/exec
```

## Step 4: Test the Deployment

1. In your browser, visit the Apps Script URL
2. You should see: `{"success":true,"message":"Google Apps Script is working. Use POST to submit data."}`
3. If you see an error or authorization page, the deployment settings are incorrect

## Troubleshooting

### "Authorization Required" Error
- Make sure "Who has access" is set to "Anyone" (not "Anyone with Google Account")
- Redeploy with the correct settings

### 403 Forbidden Error
- This means the script is restricted to your domain
- Create a NEW Apps Script project (not linked to your organization)
- Use a personal Google account if needed

### Script Not Found Error
- Make sure you're using the `/exec` endpoint, not `/dev`
- Verify the URL is copied correctly

### Testing the Script
In the Apps Script editor, you can run the `testSpreadsheetAccess()` function to verify:
1. Click on the function dropdown
2. Select `testSpreadsheetAccess`
3. Click "Run"
4. Check the logs (View > Logs)

## Important Notes

- The spreadsheet ID is hardcoded in the script: `1RIcRHp4MdztQegVdPkIGA36iuO8LgOT0dD9UU1VzMdA`
- The script will automatically create sheets if they don't exist
- Sheet names: "Care Homes", "Patients", "Private GPs", "NHS GPs", "Contact Messages"
- All form data is saved in the "Full Data" column as JSON for complete record keeping