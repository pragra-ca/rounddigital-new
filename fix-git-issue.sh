#!/bin/bash

echo "========================================"
echo "🔧 Fixing Empty Frontend Folder Issue"
echo "========================================"
echo ""

# Colors
GREEN='\033[0;32m'
RED='\033[0;31m'
YELLOW='\033[1;33m'
NC='\033[0m'

cd /app

# Check if frontend exists
if [ ! -d "frontend" ]; then
    echo -e "${RED}❌ Frontend folder not found!${NC}"
    exit 1
fi

# Backup current state
echo -e "${YELLOW}📦 Creating backup...${NC}"
mkdir -p /tmp/rounddigital-backup
cp -r frontend /tmp/rounddigital-backup/ 2>/dev/null
cp -r strapi-backend /tmp/rounddigital-backup/ 2>/dev/null
echo -e "${GREEN}✅ Backup created at /tmp/rounddigital-backup/${NC}"
echo ""

# Check for nested .git
if [ -d "frontend/.git" ]; then
    echo -e "${YELLOW}🗑️  Found nested .git in frontend folder${NC}"
    read -p "Remove frontend/.git folder? (y/n): " -n 1 -r
    echo
    if [[ $REPLY =~ ^[Yy]$ ]]; then
        rm -rf frontend/.git
        echo -e "${GREEN}✅ Removed frontend/.git${NC}"
    fi
else
    echo -e "${GREEN}✅ No nested .git in frontend${NC}"
fi
echo ""

# Check strapi-backend
if [ -d "strapi-backend/.git" ]; then
    echo -e "${YELLOW}🗑️  Found nested .git in strapi-backend folder${NC}"
    read -p "Remove strapi-backend/.git folder? (y/n): " -n 1 -r
    echo
    if [[ $REPLY =~ ^[Yy]$ ]]; then
        rm -rf strapi-backend/.git
        echo -e "${GREEN}✅ Removed strapi-backend/.git${NC}"
    fi
else
    echo -e "${GREEN}✅ No nested .git in strapi-backend${NC}"
fi
echo ""

# Check .gitignore
echo "🔍 Checking .gitignore..."
if grep -q "^frontend/$" .gitignore 2>/dev/null; then
    echo -e "${YELLOW}⚠️  Found 'frontend/' in .gitignore${NC}"
    read -p "Remove from .gitignore? (y/n): " -n 1 -r
    echo
    if [[ $REPLY =~ ^[Yy]$ ]]; then
        sed -i '/^frontend\/$/d' .gitignore
        echo -e "${GREEN}✅ Removed frontend/ from .gitignore${NC}"
    fi
fi

if grep -q "^strapi-backend/$" .gitignore 2>/dev/null; then
    echo -e "${YELLOW}⚠️  Found 'strapi-backend/' in .gitignore${NC}"
    read -p "Remove from .gitignore? (y/n): " -n 1 -r
    echo
    if [[ $REPLY =~ ^[Yy]$ ]]; then
        sed -i '/^strapi-backend\/$/d' .gitignore
        echo -e "${GREEN}✅ Removed strapi-backend/ from .gitignore${NC}"
    fi
fi
echo ""

# Clear Git cache
echo "🧹 Clearing Git cache..."
git rm -r --cached . > /dev/null 2>&1
echo -e "${GREEN}✅ Git cache cleared${NC}"
echo ""

# Add files
echo "➕ Adding files to repository..."
git add .gitignore 2>/dev/null
git add frontend/ 
git add strapi-backend/ 
git add backend/ 2>/dev/null
git add DEPLOYMENT_GUIDE.md 2>/dev/null
git add QUICK_DEPLOYMENT.md 2>/dev/null
git add ENV_VARIABLES_REFERENCE.md 2>/dev/null
git add FIX_EMPTY_FRONTEND.md 2>/dev/null
git add *.sh 2>/dev/null

echo -e "${GREEN}✅ Files added${NC}"
echo ""

# Show status
echo "📊 Git status:"
git status --short | head -20
echo ""

# Commit
echo "💾 Committing changes..."
git commit -m "Fix: Include all frontend and strapi files in repository

- Removed nested .git folders to prevent submodule issues
- Added frontend source files (Next.js app)
- Added strapi-backend source files (Strapi CMS)
- Added deployment documentation and scripts
- Cleaned up .gitignore

This ensures all code is visible in GitHub repository." 2>/dev/null

if [ $? -eq 0 ]; then
    echo -e "${GREEN}✅ Changes committed${NC}"
else
    echo -e "${YELLOW}⚠️  No changes to commit or commit failed${NC}"
fi
echo ""

# Push
read -p "Push to GitHub now? (y/n): " -n 1 -r
echo
if [[ $REPLY =~ ^[Yy]$ ]]; then
    echo "🚀 Pushing to GitHub..."
    
    # Get current branch
    BRANCH=$(git rev-parse --abbrev-ref HEAD)
    
    git push origin $BRANCH
    
    if [ $? -eq 0 ]; then
        echo ""
        echo -e "${GREEN}========================================"
        echo "✅ Success! Changes pushed to GitHub"
        echo "========================================${NC}"
        echo ""
        echo "🔍 Verify on GitHub:"
        echo "1. Go to your repository on GitHub"
        echo "2. Check that frontend/ folder shows all files"
        echo "3. Check that strapi-backend/ folder shows all files"
        echo ""
        echo "📝 Next steps:"
        echo "1. Deploy frontend to Vercel"
        echo "2. Deploy Strapi to Strapi Cloud"
        echo "3. See QUICK_DEPLOYMENT.md for instructions"
    else
        echo -e "${RED}❌ Push failed. Check your Git credentials.${NC}"
    fi
else
    echo -e "${YELLOW}⚠️  Skipped push. Run 'git push' manually when ready.${NC}"
fi

echo ""
echo "========================================"
echo "🎉 Script completed!"
echo "========================================"
