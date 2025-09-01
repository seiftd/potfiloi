#!/bin/bash

echo "🧹 Cleaning previous build..."
rm -rf .next node_modules package-lock.json

echo "📦 Installing dependencies..."
npm install --legacy-peer-deps

echo "🔨 Building project..."
npm run build

echo "✅ Build completed!"
