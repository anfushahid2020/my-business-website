@echo off
cd /d %~dp0
echo Restarting WebDemics server on port 5000...
for /f "tokens=5" %%a in ('netstat -ano ^| findstr :5000') do (
  echo Found PID %%a - killing...
  taskkill /PID %%a /F >nul 2>&1
)
echo Starting server...
start "WebDemics" cmd /c "node .\index.js"
echo Done. Server started in a new window.
