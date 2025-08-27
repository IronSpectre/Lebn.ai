@echo off
echo Exporting all database tables to CSV...
echo.

set PGPASSWORD=Shunsui2001
set DATE=%date:~-4%-%date:~4,2%-%date:~7,2%

"C:\Program Files\PostgreSQL\16\bin\psql.exe" -U postgres -p 5433 -d lebn_db -c "\COPY (SELECT * FROM \"PatientSubmission\") TO 'patient_submissions.csv' WITH CSV HEADER"
"C:\Program Files\PostgreSQL\16\bin\psql.exe" -U postgres -p 5433 -d lebn_db -c "\COPY (SELECT * FROM \"CareHomeSubmission\") TO 'carehome_submissions.csv' WITH CSV HEADER"
"C:\Program Files\PostgreSQL\16\bin\psql.exe" -U postgres -p 5433 -d lebn_db -c "\COPY (SELECT * FROM \"PrivateGPSubmission\") TO 'privategp_submissions.csv' WITH CSV HEADER"
"C:\Program Files\PostgreSQL\16\bin\psql.exe" -U postgres -p 5433 -d lebn_db -c "\COPY (SELECT * FROM \"NHSGPSubmission\") TO 'nhsgp_submissions.csv' WITH CSV HEADER"
"C:\Program Files\PostgreSQL\16\bin\psql.exe" -U postgres -p 5433 -d lebn_db -c "\COPY (SELECT * FROM \"ContactSubmission\") TO 'contact_submissions.csv' WITH CSV HEADER"

echo.
echo Export complete! Files created:
echo - patient_submissions.csv
echo - carehome_submissions.csv
echo - privategp_submissions.csv
echo - nhsgp_submissions.csv
echo - contact_submissions.csv
echo.
pause