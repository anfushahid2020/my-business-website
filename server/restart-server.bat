@echo off
cd /d %~dp0
echo Restarting WebDemics server on port 5000...
for /f "tokens=5" %%a in ('netstat -ano ^| findstr :5000') do (
  echo Found PID %%a - killing...
  taskkill /PID %%a /F >nul 2>&1
)
echo Starting server...
start cmd /k node .\index.js
echo Done. A new window will show server logs.
pause
