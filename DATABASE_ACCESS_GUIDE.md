# Complete PostgreSQL Database Access Guide

## Method 1: Prisma Studio (Easiest)
**Already running at**: http://localhost:5557

### How to export from Prisma Studio:
1. Go to http://localhost:5557
2. Click on any table (e.g., PatientSubmission)
3. Click the checkbox at the top to select all rows
4. Click "Export" button
5. Choose "CSV" format
6. File downloads automatically

## Method 2: pgAdmin 4 (Professional GUI)

### Open pgAdmin:
1. Search "pgAdmin 4" in Windows Start Menu
2. Or navigate to: `C:\Program Files\PostgreSQL\16\pgAdmin 4\bin\pgAdmin4.exe`

### Connect to database:
- **Server**: localhost
- **Port**: 5433
- **Database**: lebn_db
- **Username**: postgres
- **Password**: Shunsui2001

### Export data:
1. Expand: Servers → PostgreSQL 16 → Databases → lebn_db → Schemas → public → Tables
2. Right-click any table → "View/Edit Data" → "All Rows"
3. Click "Download" icon in toolbar → Choose CSV

## Method 3: PowerShell Export Script (Bulk Export)

### Run the export script:
```powershell
cd "C:\Windows\System32\lebn-website"
powershell -ExecutionPolicy Bypass -File export-database.ps1
```

This will:
- Export ALL tables to CSV files
- Create a dated folder with all exports
- Open the folder automatically

## Method 4: Direct SQL Commands

### Connect via command line:
```bash
set PGPASSWORD=Shunsui2001
"C:\Program Files\PostgreSQL\16\bin\psql.exe" -U postgres -p 5433 -d lebn_db
```

### Useful SQL commands:
```sql
-- List all tables
\dt

-- Count records in each table
SELECT COUNT(*) FROM "PatientSubmission";
SELECT COUNT(*) FROM "CareHomeSubmission";
SELECT COUNT(*) FROM "PrivateGPSubmission";
SELECT COUNT(*) FROM "NHSGPSubmission";
SELECT COUNT(*) FROM "ContactSubmission";

-- Export to CSV
\COPY (SELECT * FROM "PatientSubmission") TO 'C:\patients.csv' WITH CSV HEADER;

-- View recent submissions
SELECT * FROM "PatientSubmission" ORDER BY "createdAt" DESC LIMIT 10;

-- Exit
\q
```

## Method 5: DBeaver (Free Universal Database Tool)

### Install DBeaver:
1. Download from https://dbeaver.io/download/
2. Install and open

### Connect:
1. New Connection → PostgreSQL
2. Host: localhost
3. Port: 5433
4. Database: lebn_db
5. Username: postgres
6. Password: Shunsui2001

### Export:
1. Right-click table → Export Data
2. Choose CSV format
3. Configure options and export

## Method 6: TablePlus (Modern Database GUI)

Free version available at https://tableplus.com/

Similar connection details as above.

## Quick Database Info

- **Server**: localhost
- **Port**: 5433 (not default 5432)
- **Database**: lebn_db
- **Username**: postgres
- **Password**: Shunsui2001
- **Tables**: 5 (PatientSubmission, CareHomeSubmission, PrivateGPSubmission, NHSGPSubmission, ContactSubmission)

## Which Method to Use?

- **Quick view/export**: Prisma Studio (http://localhost:5557)
- **Professional management**: pgAdmin 4
- **Bulk export all tables**: PowerShell script
- **Advanced queries**: Direct SQL commands
- **Modern interface**: DBeaver or TablePlus