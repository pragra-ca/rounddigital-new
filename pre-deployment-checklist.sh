#!/bin/bash

echo "========================================"
echo "🔍 Pre-Deployment Checklist Script"
echo "========================================"
echo ""

# Colors for output
GREEN='\033[0;32m'
RED='\033[0;31m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

# Check 1: Frontend dependencies
echo "1️⃣  Checking frontend dependencies..."
if [ -f "/app/frontend/package.json" ]; then
    echo -e "${GREEN}✅ package.json found${NC}"
    cd /app/frontend
    if npm list next > /dev/null 2>&1; then
        echo -e "${GREEN}✅ Next.js installed${NC}"
    else
        echo -e "${RED}❌ Next.js not found. Run: npm install${NC}"
    fi
else
    echo -e "${RED}❌ package.json not found${NC}"
fi
echo ""

# Check 2: Strapi dependencies
echo "2️⃣  Checking Strapi dependencies..."
if [ -f "/app/strapi-backend/package.json" ]; then
    echo -e "${GREEN}✅ Strapi package.json found${NC}"
    cd /app/strapi-backend
    if npm list @strapi/strapi > /dev/null 2>&1; then
        echo -e "${GREEN}✅ Strapi installed${NC}"
    else
        echo -e "${YELLOW}⚠️  Strapi not installed. Run: npm install${NC}"
    fi
else
    echo -e "${RED}❌ Strapi package.json not found${NC}"
fi
echo ""

# Check 3: Environment variables
echo "3️⃣  Checking environment variables..."

# Frontend env
if [ -f "/app/frontend/.env" ] || [ -f "/app/frontend/.env.local" ]; then
    echo -e "${GREEN}✅ Frontend .env file exists${NC}"
else
    echo -e "${YELLOW}⚠️  No .env file in frontend. Create .env.local for deployment${NC}"
fi

# Strapi env
if [ -f "/app/strapi-backend/.env" ]; then
    echo -e "${GREEN}✅ Strapi .env file exists${NC}"
else
    echo -e "${RED}❌ No .env file in strapi-backend${NC}"
fi
echo ""

# Check 4: Hardcoded localhost URLs
echo "4️⃣  Checking for hardcoded localhost URLs..."
cd /app/frontend
LOCALHOST_COUNT=$(grep -r "localhost:1337" src/ 2>/dev/null | wc -l)
if [ "$LOCALHOST_COUNT" -gt 0 ]; then
    echo -e "${YELLOW}⚠️  Found $LOCALHOST_COUNT references to localhost:1337${NC}"
    echo "   Files with localhost:1337:"
    grep -r "localhost:1337" src/ 2>/dev/null | cut -d: -f1 | sort -u
    echo -e "${YELLOW}   ⚠️  Replace with environment variable NEXT_PUBLIC_STRAPI_URL${NC}"
else
    echo -e "${GREEN}✅ No hardcoded localhost URLs found${NC}"
fi
echo ""

# Check 5: Git repository
echo "5️⃣  Checking Git repository..."
if [ -d "/app/.git" ]; then
    echo -e "${GREEN}✅ Git repository initialized${NC}"
    
    # Check for uncommitted changes
    cd /app
    if [ -z "$(git status --porcelain)" ]; then
        echo -e "${GREEN}✅ All changes committed${NC}"
    else
        echo -e "${YELLOW}⚠️  Uncommitted changes detected${NC}"
        echo "   Run: git add . && git commit -m 'Prepare for deployment'"
    fi
else
    echo -e "${RED}❌ No Git repository found${NC}"
    echo "   Initialize with: git init"
fi
echo ""

# Check 6: Build test
echo "6️⃣  Testing production build..."
cd /app/frontend
echo "   Building Next.js (this may take a minute)..."
if npm run build > /tmp/build.log 2>&1; then
    echo -e "${GREEN}✅ Frontend builds successfully${NC}"
else
    echo -e "${RED}❌ Frontend build failed${NC}"
    echo "   Check build log: /tmp/build.log"
    tail -20 /tmp/build.log
fi
echo ""

# Check 7: Important files checklist
echo "7️⃣  Checking important files..."
FILES_TO_CHECK=(
    "/app/frontend/package.json"
    "/app/frontend/next.config.js"
    "/app/frontend/src/pages/index.js"
    "/app/strapi-backend/package.json"
    "/app/strapi-backend/config/database.ts"
    "/app/strapi-backend/config/server.ts"
    "/app/strapi-backend/config/middlewares.ts"
)

for file in "${FILES_TO_CHECK[@]}"; do
    if [ -f "$file" ]; then
        echo -e "${GREEN}✅${NC} $file"
    else
        echo -e "${RED}❌${NC} $file (MISSING)"
    fi
done
echo ""

# Summary
echo "========================================"
echo "📋 Pre-Deployment Summary"
echo "========================================"
echo ""
echo "Next steps:"
echo "1. Fix any ❌ or ⚠️  issues above"
echo "2. Update all localhost:1337 URLs to use environment variables"
echo "3. Commit all changes to Git"
echo "4. Push to GitHub/GitLab"
echo "5. Follow DEPLOYMENT_GUIDE.md for platform deployment"
echo ""
echo "========================================"
