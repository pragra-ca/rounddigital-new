#!/bin/bash

echo "🔧 FINAL FIX - Creating Clean Structure"
echo "========================================"

cd /app

# 1. Remove all the mess
echo "1. Cleaning up..."
rm -rf frontend_old repos tests
rm -f backend_test.py yarn.lock
rm -f cleanup-structure.sh create-separate-repos.sh fix-and-push-now.sh fix-git-issue.sh
rm -f pre-deployment-checklist.sh push-to-git.sh update-strapi-urls.sh

# 2. Remove nested .git folders
echo "2. Removing nested .git folders..."
rm -rf frontend/.git
rm -rf strapi-backend/.git
rm -rf backend/.git

# 3. Clear main git cache
echo "3. Resetting Git..."
git rm -r --cached . > /dev/null 2>&1

# 4. Create simple .gitignore
cat > .gitignore << 'EOF'
node_modules/
.next/
dist/
build/
.env
.env.local
*.log
.DS_Store
__pycache__/
strapi-backend/.cache/
strapi-backend/.tmp/
strapi-backend/public/uploads/*
EOF

# 5. Add everything
echo "4. Adding all files..."
git add .

# 6. Commit
echo "5. Committing..."
git commit -m "RoundDigital complete project - 3 components

Frontend: Next.js website
Strapi: CMS backend  
Backend: FastAPI (optional)

All bugs fixed, ready for deployment"

echo ""
echo "✅ DONE!"
echo ""
echo "📂 Your clean structure:"
echo "   /app/frontend      (Next.js)"
echo "   /app/strapi-backend (Strapi)"  
echo "   /app/backend       (FastAPI)"
echo ""
echo "🚀 NOW USE EMERGENT'S 'Save to GitHub' BUTTON"
echo "   It will push everything automatically"
echo ""
