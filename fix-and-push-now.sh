#!/bin/bash

echo "🚀 Fixing Git issues and pushing all files..."
echo ""

cd /app

# 1. Remove nested .git folders
echo "1️⃣  Removing nested .git folders..."
rm -rf frontend/.git
rm -rf strapi-backend/.git
rm -rf frontend_old/temp_repo/.git
echo "   ✅ Removed nested .git folders"
echo ""

# 2. Update .gitignore
echo "2️⃣  Updating .gitignore..."
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

# Logs
*.log
logs/

# OS files
.DS_Store
Thumbs.db

# IDE
.vscode/
.idea/

# Strapi
strapi-backend/.cache/
strapi-backend/.tmp/
strapi-backend/build/
strapi-backend/dist/
strapi-backend/public/uploads/*

# Misc
*.pem
/tmp/
backups/
EOF
echo "   ✅ .gitignore updated"
echo ""

# 3. Clear Git cache and add everything
echo "3️⃣  Adding all files to Git..."
git rm -r --cached . > /dev/null 2>&1
git add .
echo "   ✅ All files added"
echo ""

# 4. Show what's being committed
echo "📊 Files being committed:"
git status --short | head -20
TOTAL=$(git status --short | wc -l)
echo "   Total: $TOTAL files"
echo ""

# 5. Commit
echo "4️⃣  Committing changes..."
git commit -m "Complete RoundDigital website with all files

Frontend:
- Next.js application with all pages
- Components, assets, and styles
- Services pages, careers, contact, about
- Fixed 500+ to 100+ statistics
- Strapi integration for job listings

Strapi Backend:
- Content management system
- Job positions, services, contact forms
- Newsletter subscriptions
- Job applications with resume upload
- Public API access configured

Deployment:
- Comprehensive deployment guides
- Automated scripts for setup
- Environment variable documentation
- Vercel and Strapi Cloud ready

Ready for production deployment!"

echo "   ✅ Changes committed"
echo ""

# 6. Push to GitHub
echo "5️⃣  Pushing to GitHub..."
BRANCH=$(git rev-parse --abbrev-ref HEAD)
git push origin $BRANCH

if [ $? -eq 0 ]; then
    echo ""
    echo "✅ =========================================="
    echo "✅  SUCCESS! All files pushed to GitHub"
    echo "✅ =========================================="
    echo ""
    echo "🔍 Verify on GitHub:"
    REMOTE=$(git remote get-url origin 2>/dev/null)
    echo "   Repository: $REMOTE"
    echo ""
    echo "You should now see:"
    echo "   ✅ /frontend/src/ (all files)"
    echo "   ✅ /frontend/public/ (images, assets)"
    echo "   ✅ /strapi-backend/src/ (all files)"
    echo "   ✅ /strapi-backend/config/ (all files)"
    echo "   ✅ Deployment documentation"
    echo ""
    echo "🎯 Next: Follow QUICK_DEPLOYMENT.md to deploy"
    echo ""
else
    echo ""
    echo "❌ Push failed. Possible issues:"
    echo "   1. Check Git credentials"
    echo "   2. Verify remote: git remote -v"
    echo "   3. Try manual push: git push origin $BRANCH"
fi
