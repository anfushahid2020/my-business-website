@echo off
REM Start the node server from the server folder
cd /d %~dp0
echo Starting WebDemics server (port uses process.env.PORT or default 5000)...
node .\index.js
echo Server stopped.
pause
