#!/bin/bash

echo "========================================"
echo "🚀 Push All Files to Git - Complete"
echo "========================================"
echo ""

# Colors
GREEN='\033[0;32m'
RED='\033[0;31m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m'

cd /app

echo -e "${BLUE}📊 Current Repository Status:${NC}"
echo ""

# Check if .git exists
if [ ! -d ".git" ]; then
    echo -e "${RED}❌ No Git repository found!${NC}"
    echo "Run: git init"
    exit 1
fi

# Get current branch
BRANCH=$(git rev-parse --abbrev-ref HEAD 2>/dev/null)
echo -e "${GREEN}Branch: $BRANCH${NC}"
echo ""

# Step 1: Remove nested .git folders
echo -e "${YELLOW}Step 1: Checking for nested .git folders...${NC}"

if [ -d "frontend/.git" ]; then
    echo -e "${YELLOW}⚠️  Found nested .git in frontend/${NC}"
    echo "   This prevents frontend files from being tracked"
    read -p "   Remove frontend/.git? (y/n): " -n 1 -r
    echo
    if [[ $REPLY =~ ^[Yy]$ ]]; then
        rm -rf frontend/.git
        echo -e "${GREEN}   ✅ Removed frontend/.git${NC}"
    fi
else
    echo -e "${GREEN}✅ No nested .git in frontend${NC}"
fi

if [ -d "strapi-backend/.git" ]; then
    echo -e "${YELLOW}⚠️  Found nested .git in strapi-backend/${NC}"
    read -p "   Remove strapi-backend/.git? (y/n): " -n 1 -r
    echo
    if [[ $REPLY =~ ^[Yy]$ ]]; then
        rm -rf strapi-backend/.git
        echo -e "${GREEN}   ✅ Removed strapi-backend/.git${NC}"
    fi
else
    echo -e "${GREEN}✅ No nested .git in strapi-backend${NC}"
fi

if [ -d "frontend_old/temp_repo/.git" ]; then
    rm -rf frontend_old/temp_repo/.git
    echo -e "${GREEN}✅ Cleaned frontend_old/temp_repo/.git${NC}"
fi

echo ""

# Step 2: Update .gitignore
echo -e "${YELLOW}Step 2: Updating .gitignore...${NC}"

# Create/update .gitignore
cat > .gitignore << 'EOF'
# Dependencies
node_modules/
*/node_modules/
**/node_modules/

# Build outputs
.next/
*/.next/
dist/
build/
*.tsbuildinfo

# Environment variables
.env
.env.local
.env.*.local
**/.env
**/.env.local

# Logs
*.log
npm-debug.log*
yarn-debug.log*
yarn-error.log*
logs/

# OS files
.DS_Store
Thumbs.db
*.swp
*.swo

# IDE
.vscode/
.idea/
*.sublime-*

# Testing
coverage/
.nyc_output/

# Strapi
strapi-backend/.cache/
strapi-backend/.tmp/
strapi-backend/build/
strapi-backend/dist/
strapi-backend/public/uploads/*
!strapi-backend/public/uploads/.gitkeep

# Misc
*.pem
.pnp.*

# Backups
/tmp/
backups/
EOF

echo -e "${GREEN}✅ .gitignore updated${NC}"
echo ""

# Step 3: Clear Git cache
echo -e "${YELLOW}Step 3: Clearing Git cache...${NC}"
git rm -r --cached . > /dev/null 2>&1
echo -e "${GREEN}✅ Git cache cleared${NC}"
echo ""

# Step 4: Add all files
echo -e "${YELLOW}Step 4: Adding files to Git...${NC}"

# Add everything
git add .

# Show what will be committed
echo ""
echo -e "${BLUE}📋 Files to be committed:${NC}"
git status --short | head -50

TOTAL_FILES=$(git status --short | wc -l)
echo ""
echo -e "${GREEN}Total files: $TOTAL_FILES${NC}"
echo ""

# Step 5: Verify important directories
echo -e "${YELLOW}Step 5: Verifying important directories...${NC}"

DIRS_TO_CHECK=(
    "frontend/src/pages"
    "frontend/src/components"
    "frontend/public"
    "strapi-backend/src/api"
    "strapi-backend/config"
)

for dir in "${DIRS_TO_CHECK[@]}"; do
    if git ls-files "$dir" | grep -q .; then
        FILE_COUNT=$(git ls-files "$dir" | wc -l)
        echo -e "${GREEN}✅${NC} $dir ($FILE_COUNT files)"
    else
        echo -e "${RED}❌${NC} $dir (no files tracked!)"
    fi
done
echo ""

# Step 6: Commit
echo -e "${YELLOW}Step 6: Creating commit...${NC}"
echo ""

read -p "Enter commit message (or press Enter for default): " COMMIT_MSG

if [ -z "$COMMIT_MSG" ]; then
    COMMIT_MSG="Complete project with frontend and Strapi CMS

- Added Next.js frontend with all pages and components
- Added Strapi CMS backend with content types
- Added deployment documentation and scripts
- Fixed Git submodule issues
- Ready for deployment to Vercel and Strapi Cloud"
fi

git commit -m "$COMMIT_MSG"

if [ $? -eq 0 ]; then
    echo -e "${GREEN}✅ Changes committed successfully${NC}"
else
    echo -e "${YELLOW}⚠️  No changes to commit or commit failed${NC}"
    exit 1
fi
echo ""

# Step 7: Show remote info
echo -e "${YELLOW}Step 7: Checking Git remote...${NC}"

REMOTE=$(git remote get-url origin 2>/dev/null)
if [ -z "$REMOTE" ]; then
    echo -e "${RED}❌ No Git remote configured${NC}"
    echo ""
    echo "Add a remote with:"
    echo "  git remote add origin https://github.com/YOUR-USERNAME/YOUR-REPO.git"
    exit 1
else
    echo -e "${GREEN}✅ Remote: $REMOTE${NC}"
fi
echo ""

# Step 8: Push to Git
echo -e "${YELLOW}Step 8: Pushing to GitHub...${NC}"
echo ""

read -p "Push to GitHub now? (y/n): " -n 1 -r
echo
echo ""

if [[ $REPLY =~ ^[Yy]$ ]]; then
    echo "🚀 Pushing to origin/$BRANCH..."
    
    git push origin $BRANCH
    
    if [ $? -eq 0 ]; then
        echo ""
        echo -e "${GREEN}========================================"
        echo "✅ SUCCESS! All files pushed to GitHub"
        echo "========================================${NC}"
        echo ""
        echo -e "${BLUE}📂 What was pushed:${NC}"
        echo "  ✅ Frontend (Next.js) - All files"
        echo "  ✅ Strapi Backend - All files"
        echo "  ✅ Deployment Documentation"
        echo "  ✅ Helper Scripts"
        echo ""
        echo -e "${BLUE}🔗 Repository:${NC} $REMOTE"
        echo ""
        echo -e "${BLUE}🎯 Next Steps:${NC}"
        echo "  1. Visit your GitHub repository"
        echo "  2. Verify frontend/ folder shows all files"
        echo "  3. Verify strapi-backend/ folder shows all files"
        echo "  4. Follow QUICK_DEPLOYMENT.md to deploy"
        echo ""
        echo -e "${GREEN}Ready for deployment! 🎉${NC}"
    else
        echo ""
        echo -e "${RED}========================================"
        echo "❌ Push failed"
        echo "========================================${NC}"
        echo ""
        echo "Common fixes:"
        echo "  1. Check Git credentials: git config --list"
        echo "  2. Try: git push -u origin $BRANCH"
        echo "  3. Check if remote exists: git remote -v"
        echo ""
    fi
else
    echo -e "${YELLOW}⚠️  Skipped push${NC}"
    echo ""
    echo "To push manually later:"
    echo "  git push origin $BRANCH"
fi

echo ""
echo "========================================"
echo "🎉 Script Complete"
echo "========================================"
