#!/bin/bash

# Commands to push all 3 repositories to GitHub
# Username: roundprep

echo "========================================"
echo "🚀 Push Commands for roundprep"
echo "========================================"
echo ""

echo "Copy and paste these commands one by one:"
echo ""

echo "# ============================================"
echo "# 1. FRONTEND REPOSITORY"
echo "# ============================================"
echo "cd /app/repos/rounddigital-frontend"
echo "git remote remove origin 2>/dev/null"
echo "git remote add origin https://github.com/roundprep/rounddigital-frontend.git"
echo "git branch -M main"
echo "git push -u origin main"
echo ""

echo "# ============================================"
echo "# 2. STRAPI REPOSITORY"
echo "# ============================================"
echo "cd /app/repos/rounddigital-strapi"
echo "git remote remove origin 2>/dev/null"
echo "git remote add origin https://github.com/roundprep/rounddigital-strapi.git"
echo "git branch -M main"
echo "git push -u origin main"
echo ""

echo "# ============================================"
echo "# 3. BACKEND REPOSITORY (Optional)"
echo "# ============================================"
echo "cd /app/repos/rounddigital-backend"
echo "git remote remove origin 2>/dev/null"
echo "git remote add origin https://github.com/roundprep/rounddigital-backend.git"
echo "git branch -M main"
echo "git push -u origin main"
echo ""

echo "========================================"
echo "✅ After pushing, verify on GitHub:"
echo "========================================"
echo ""
echo "Frontend: https://github.com/roundprep/rounddigital-frontend"
echo "Strapi:   https://github.com/roundprep/rounddigital-strapi"
echo "Backend:  https://github.com/roundprep/rounddigital-backend"
