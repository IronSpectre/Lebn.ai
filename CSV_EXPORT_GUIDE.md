# CSV Export Feature

## How to Export Your Data

### 1. Go to Admin Page
Visit: http://localhost:3001/admin/submissions

### 2. Export Options

You'll see export buttons at the top of the page:

- **Export All Data** - Downloads all submissions in one CSV file
- **Care Homes** - Export only care home submissions
- **Patients** - Export only patient submissions  
- **Private GPs** - Export only private GP submissions
- **NHS GPs** - Export only NHS GP submissions
- **Contacts** - Export only contact form submissions

### 3. Click to Download

Click any button and the CSV file will download automatically to your Downloads folder.

## CSV File Features

- **Clean column headers** - Human-readable names like "Contact Name" instead of "contactName"
- **Formatted dates** - Dates are converted to readable format
- **Array handling** - Multiple selections are separated by semicolons
- **Excel compatible** - Opens perfectly in Excel, Google Sheets, or any spreadsheet app
- **Proper escaping** - Handles commas, quotes, and special characters correctly

## File Names

Files are automatically named:
- `all-submissions-2024-01-15.csv` (includes date)
- `patient-submissions.csv`
- `care-home-submissions.csv`
- etc.

## What's Included

Each CSV includes:
- All form fields
- Contact information
- Submission date/time
- All responses properly formatted

## Opening in Excel

1. Download the CSV
2. Open Excel
3. File → Open → Select the CSV
4. Data appears in organized columns
5. You can now filter, sort, create charts, etc.

## Data Privacy

- All exports are local - no data leaves your computer
- Files are downloaded directly from your database
- You control who has access to exported files