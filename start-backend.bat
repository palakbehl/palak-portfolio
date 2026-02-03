@echo off
REM Portfolio Backend Quick Start Script for Windows
REM This script sets up and starts the backend server

echo 🚀 Starting Palak Behl's Portfolio Backend Setup...

REM Check if Node.js is installed
where node >nul 2>nul
if %errorlevel% neq 0 (
    echo ❌ Node.js is not installed. Please install it from https://nodejs.org/
    pause
    exit /b 1
)

for /f "tokens=*" %%i in ('node --version') do set NODE_VERSION=%%i
echo ✅ Node.js found: %NODE_VERSION%

REM Check if backend folder exists
if not exist "backend" (
    echo 📁 Creating backend folder...
    mkdir backend
)

REM Check if server.js exists
if not exist "backend\server.js" (
    echo ⚠️  server.js not found in backend folder. Please check your setup.
    pause
    exit /b 1
)

REM Change to backend directory
cd /d backend

REM Check if .env exists
if not exist ".env" (
    echo 📝 Creating .env file from template...
    copy .env.example .env >nul
    echo ⚠️  Please edit backend\.env with your email credentials
    echo    Email service setup: https://github.com/your-repo/blob/main/BACKEND_SETUP.md
)

REM Install dependencies if not already installed
if not exist "node_modules" (
    echo 📦 Installing dependencies...
    call npm install
)

REM Start the server
echo.
echo ✨ Starting backend server...
call npm run dev

pause
