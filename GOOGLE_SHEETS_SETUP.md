# Google Sheets Integration Setup Guide

## Step 1: Create a Google Service Account

1. Go to [Google Cloud Console](https://console.cloud.google.com/)
2. Create a new project or select an existing one
3. Enable the Google Sheets API:
   - Go to "APIs & Services" > "Library"
   - Search for "Google Sheets API"
   - Click on it and press "Enable"

## Step 2: Create Service Account Credentials

1. Go to "APIs & Services" > "Credentials"
2. Click "Create Credentials" > "Service Account"
3. Fill in the service account details:
   - Name: `lebn-sheets-writer`
   - Description: `Service account for Lebn.ai form submissions`
4. Click "Create and Continue"
5. Skip the optional steps and click "Done"

## Step 3: Generate Service Account Key

1. Click on the service account you just created
2. Go to the "Keys" tab
3. Click "Add Key" > "Create new key"
4. Choose "JSON" format
5. Download the key file (keep this secure!)

## Step 4: Set Up Your Google Sheets

1. Create a new Google Sheet for your form submissions
2. Create separate sheets (tabs) for each form type:
   - `Care Homes`
   - `Patients`
   - `Private GPs`
   - `NHS GPs`
   - `Contact Messages`

3. Add headers to each sheet:

### Care Homes Sheet Headers:
```
Submission ID | Date | Care Home Name | Contact Name | Email | Phone | Residents | Recording Method | Willing to Trial | Biggest Challenge | Details Lost Frequency | Time Per Shift | Would Find Easier | Features Ranking | Concerns
```

### Patients Sheet Headers:
```
Submission ID | Date | Name | Email | Phone | Age Range | Healthcare Type | Chronic Conditions | Biggest Frustration | Forgotten Details | Appointment Prep | Likely to Use | Features Ranking | Concerns | Monthly Price | Willing to Test
```

### Private GPs Sheet Headers:
```
Submission ID | Date | Practice Name | Contact Name | Email | Phone | Practice Type | Practitioner Count | Patients/Month | Biggest Challenge | Avg Consult Time | History Gathering Time | Patient Preparation | Features Selected | Plan Type | Concerns | Willing to Pilot
```

### NHS GPs Sheet Headers:
```
Submission ID | Date | Contact Name | Email | Role | Practice Size | History Taking Time | Missing Info Frequency | Would Improve Efficiency | Features Ranking | Concerns | Willing to Trial
```

### Contact Messages Sheet Headers:
```
Submission ID | Date | Name | Email | Phone | Company | User Type | Subject | Message
```

## Step 5: Share the Google Sheet with Service Account

1. Open your Google Sheet
2. Copy the spreadsheet ID from the URL:
   - URL format: `https://docs.google.com/spreadsheets/d/SPREADSHEET_ID/edit`
3. Click "Share" button
4. Add the service account email (found in your JSON key file, looks like: `service-account-name@project-id.iam.gserviceaccount.com`)
5. Give it "Editor" permissions
6. Click "Send"

## Step 6: Configure Environment Variables

Add these to your `.env` file:

```env
# Google Sheets Configuration
GOOGLE_SHEETS_ID=your-spreadsheet-id-here
GOOGLE_SERVICE_ACCOUNT_EMAIL=your-service-account-email@project.iam.gserviceaccount.com
GOOGLE_PRIVATE_KEY="-----BEGIN PRIVATE KEY-----\nYour-Private-Key-Here\n-----END PRIVATE KEY-----\n"

# Or store the entire credentials JSON
GOOGLE_APPLICATION_CREDENTIALS_JSON='{"type":"service_account","project_id":"...","private_key":"...","client_email":"..."}'
```

## Important Security Notes:

1. **Never commit the service account key file to git**
2. Add the key file to `.gitignore`
3. Keep the private key secure
4. Use environment variables for production
5. Consider using secret management services in production

## Testing the Integration

1. Submit a form on your website
2. Check your Google Sheet - data should appear immediately
3. Data is also saved to the database as backup
4. Check `/admin/submissions` to verify both systems are working

## Troubleshooting

### Common Issues:

1. **"Permission denied" error**: Make sure you've shared the sheet with the service account email
2. **"API not enabled" error**: Enable Google Sheets API in Cloud Console
3. **"Invalid credentials" error**: Check that your private key is properly formatted in the .env file
4. **"Spreadsheet not found" error**: Verify the GOOGLE_SHEETS_ID is correct

### Rate Limits:

- Google Sheets API has quotas: 500 requests per 100 seconds per project
- Our implementation includes automatic retry logic for rate limit errors