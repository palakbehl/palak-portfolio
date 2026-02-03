#!/bin/bash

# Portfolio Backend Quick Start Script
# This script sets up and starts the backend server

echo "🚀 Starting Palak Behl's Portfolio Backend Setup..."

# Check if Node.js is installed
if ! command -v node &> /dev/null; then
    echo "❌ Node.js is not installed. Please install it from https://nodejs.org/"
    exit 1
fi

echo "✅ Node.js found: $(node --version)"

# Check if backend folder exists
if [ ! -d "backend" ]; then
    echo "📁 Creating backend folder..."
    mkdir backend
fi

# Check if server.js exists in backend
if [ ! -f "backend/server.js" ]; then
    echo "⚠️  server.js not found in backend folder. Please check your setup."
    exit 1
fi

# Navigate to backend
cd backend

# Check if .env exists
if [ ! -f ".env" ]; then
    echo "📝 Creating .env file from template..."
    cp .env.example .env
    echo "⚠️  Please edit backend/.env with your email credentials"
    echo "   Email service setup: https://github.com/your-repo/blob/main/BACKEND_SETUP.md"
fi

# Install dependencies if not already installed
if [ ! -d "node_modules" ]; then
    echo "📦 Installing dependencies..."
    npm install
fi

# Start the server
echo ""
echo "✨ Starting backend server..."
npm run dev
