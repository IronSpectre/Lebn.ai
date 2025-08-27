# PostgreSQL Database Export Script
# This exports your database tables to CSV files

$env:PGPASSWORD = "Shunsui2001"
$PSQL = "C:\Program Files\PostgreSQL\16\bin\psql.exe"
$date = Get-Date -Format "yyyy-MM-dd"

Write-Host "==================================" -ForegroundColor Cyan
Write-Host "PostgreSQL Database Export Tool" -ForegroundColor Cyan
Write-Host "==================================" -ForegroundColor Cyan
Write-Host ""

# Create export directory
$exportDir = "database_exports_$date"
if (!(Test-Path $exportDir)) {
    New-Item -ItemType Directory -Path $exportDir | Out-Null
    Write-Host "Created export directory: $exportDir" -ForegroundColor Green
}

# Export commands for each table
$tables = @(
    @{
        Name = "PatientSubmission"
        File = "patient_submissions.csv"
        Query = "SELECT * FROM `"PatientSubmission`" ORDER BY `"createdAt`" DESC"
    },
    @{
        Name = "CareHomeSubmission"
        File = "carehome_submissions.csv"
        Query = "SELECT * FROM `"CareHomeSubmission`" ORDER BY `"createdAt`" DESC"
    },
    @{
        Name = "PrivateGPSubmission"
        File = "privategp_submissions.csv"
        Query = "SELECT * FROM `"PrivateGPSubmission`" ORDER BY `"createdAt`" DESC"
    },
    @{
        Name = "NHSGPSubmission"
        File = "nhsgp_submissions.csv"
        Query = "SELECT * FROM `"NHSGPSubmission`" ORDER BY `"createdAt`" DESC"
    },
    @{
        Name = "ContactSubmission"
        File = "contact_submissions.csv"
        Query = "SELECT * FROM `"ContactSubmission`" ORDER BY `"createdAt`" DESC"
    }
)

Write-Host "Exporting tables..." -ForegroundColor Yellow
Write-Host ""

foreach ($table in $tables) {
    Write-Host "Exporting $($table.Name)..." -NoNewline
    $outputFile = Join-Path $exportDir $table.File
    
    # Use COPY command to export to CSV
    $copyCommand = "\COPY ($($table.Query)) TO '$outputFile' WITH CSV HEADER"
    
    & $PSQL -U postgres -p 5433 -d lebn_db -c $copyCommand 2>$null
    
    if (Test-Path $outputFile) {
        $rowCount = (Get-Content $outputFile | Measure-Object -Line).Lines - 1
        Write-Host " Done! ($rowCount records)" -ForegroundColor Green
    } else {
        Write-Host " No data or error" -ForegroundColor Yellow
    }
}

Write-Host ""
Write-Host "==================================" -ForegroundColor Cyan
Write-Host "Export Complete!" -ForegroundColor Green
Write-Host "Files saved in: $exportDir" -ForegroundColor Green
Write-Host "==================================" -ForegroundColor Cyan

# Open the export directory
explorer $exportDir