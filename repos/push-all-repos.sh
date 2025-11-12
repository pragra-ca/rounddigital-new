#!/bin/bash

echo "========================================"
echo "🚀 Push All 3 Repos to GitHub"
echo "========================================"
echo ""

# Colors
GREEN='\033[0;32m'
RED='\033[0;31m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m'

# Get GitHub username
read -p "Enter your GitHub username: " USERNAME

if [ -z "$USERNAME" ]; then
    echo -e "${RED}❌ Username required${NC}"
    exit 1
fi

echo ""
echo -e "${BLUE}GitHub URLs:${NC}"
echo "  Frontend: https://github.com/$USERNAME/rounddigital-frontend.git"
echo "  Strapi:   https://github.com/$USERNAME/rounddigital-strapi.git"
echo "  Backend:  https://github.com/$USERNAME/rounddigital-backend.git"
echo ""

read -p "Have you created these 3 repos on GitHub? (y/n): " -n 1 -r
echo
echo ""

if [[ ! $REPLY =~ ^[Yy]$ ]]; then
    echo -e "${YELLOW}⚠️  Please create the repositories on GitHub first${NC}"
    echo ""
    echo "Go to: https://github.com/new"
    echo "Create:"
    echo "  1. rounddigital-frontend"
    echo "  2. rounddigital-strapi"
    echo "  3. rounddigital-backend"
    echo ""
    echo "Then run this script again."
    exit 0
fi

# Push Frontend
echo -e "${YELLOW}1️⃣  Pushing Frontend...${NC}"
cd /app/repos/rounddigital-frontend

git remote remove origin 2>/dev/null
git remote add origin "https://github.com/$USERNAME/rounddigital-frontend.git"
git branch -M main

if git push -u origin main 2>&1; then
    echo -e "${GREEN}✅ Frontend pushed successfully${NC}"
else
    echo -e "${RED}❌ Frontend push failed${NC}"
    echo "   Try manually: cd /app/repos/rounddigital-frontend && git push -u origin main"
fi
echo ""

# Push Strapi
echo -e "${YELLOW}2️⃣  Pushing Strapi...${NC}"
cd /app/repos/rounddigital-strapi

git remote remove origin 2>/dev/null
git remote add origin "https://github.com/$USERNAME/rounddigital-strapi.git"
git branch -M main

if git push -u origin main 2>&1; then
    echo -e "${GREEN}✅ Strapi pushed successfully${NC}"
else
    echo -e "${RED}❌ Strapi push failed${NC}"
    echo "   Try manually: cd /app/repos/rounddigital-strapi && git push -u origin main"
fi
echo ""

# Push Backend
echo -e "${YELLOW}3️⃣  Pushing Backend (optional)...${NC}"
read -p "Push backend repo? (y/n): " -n 1 -r
echo
echo ""

if [[ $REPLY =~ ^[Yy]$ ]]; then
    cd /app/repos/rounddigital-backend
    
    git remote remove origin 2>/dev/null
    git remote add origin "https://github.com/$USERNAME/rounddigital-backend.git"
    git branch -M main
    
    if git push -u origin main 2>&1; then
        echo -e "${GREEN}✅ Backend pushed successfully${NC}"
    else
        echo -e "${RED}❌ Backend push failed${NC}"
        echo "   Try manually: cd /app/repos/rounddigital-backend && git push -u origin main"
    fi
else
    echo -e "${YELLOW}⏭️  Skipped backend${NC}"
fi

echo ""
echo -e "${GREEN}========================================"
echo "✅ Push Complete!"
echo "========================================${NC}"
echo ""

echo -e "${BLUE}🔗 Your Repositories:${NC}"
echo "  Frontend: https://github.com/$USERNAME/rounddigital-frontend"
echo "  Strapi:   https://github.com/$USERNAME/rounddigital-strapi"
echo "  Backend:  https://github.com/$USERNAME/rounddigital-backend"
echo ""

echo -e "${YELLOW}🎯 Next Steps:${NC}"
echo ""
echo "1. Verify all files are visible on GitHub"
echo ""
echo "2. Deploy Strapi:"
echo "   - Go to: https://cloud.strapi.io/"
echo "   - Connect: rounddigital-strapi repo"
echo "   - Add environment variables"
echo "   - Deploy & get Strapi URL"
echo ""
echo "3. Deploy Frontend:"
echo "   - Go to: https://vercel.com/"
echo "   - Connect: rounddigital-frontend repo"
echo "   - Add env vars (including Strapi URL)"
echo "   - Deploy"
echo ""
echo "4. (Optional) Deploy Backend:"
echo "   - Railway or Render"
echo ""

echo -e "${GREEN}🎉 All set for deployment!${NC}"
