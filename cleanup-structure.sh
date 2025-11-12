#!/bin/bash

echo "========================================"
echo "🧹 Cleaning Up Folder Structure"
echo "========================================"
echo ""

cd /app

# Colors
GREEN='\033[0;32m'
RED='\033[0;31m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m'

echo -e "${BLUE}Current structure:${NC}"
ls -d */ 2>/dev/null
echo ""

echo -e "${YELLOW}Proposed clean structure:${NC}"
echo "  ✅ Keep: backend/ (FastAPI)"
echo "  ✅ Keep: frontend/ (Next.js - redesigned site)"
echo "  🗑️  Remove: frontend_old/ (backup - no longer needed)"
echo "  🗑️  Remove: strapi-backend/ (will be separate repo)"
echo "  🗑️  Remove: tests/ (if empty)"
echo ""

read -p "Proceed with cleanup? (y/n): " -n 1 -r
echo
echo ""

if [[ ! $REPLY =~ ^[Yy]$ ]]; then
    echo "❌ Cleanup cancelled"
    exit 0
fi

# Create backup first
echo "📦 Creating backup..."
BACKUP_DIR="/tmp/rounddigital-backup-$(date +%Y%m%d_%H%M%S)"
mkdir -p "$BACKUP_DIR"
cp -r frontend_old "$BACKUP_DIR/" 2>/dev/null
cp -r strapi-backend "$BACKUP_DIR/" 2>/dev/null
echo -e "${GREEN}✅ Backup created at: $BACKUP_DIR${NC}"
echo ""

# Remove frontend_old
if [ -d "frontend_old" ]; then
    echo "🗑️  Removing frontend_old..."
    rm -rf frontend_old
    echo -e "${GREEN}✅ Removed frontend_old${NC}"
fi

# Remove strapi-backend (we'll create separate repo)
if [ -d "strapi-backend" ]; then
    echo "🗑️  Removing strapi-backend from main repo..."
    rm -rf strapi-backend
    echo -e "${GREEN}✅ Removed strapi-backend${NC}"
fi

# Remove empty tests folder if exists
if [ -d "tests" ] && [ -z "$(ls -A tests)" ]; then
    rm -rf tests
    echo -e "${GREEN}✅ Removed empty tests folder${NC}"
fi

# Remove unnecessary files
rm -f yarn.lock 2>/dev/null
rm -f backend_test.py 2>/dev/null

echo ""
echo -e "${BLUE}📂 New structure:${NC}"
ls -d */ 2>/dev/null
echo ""

# Update .gitignore
echo "📝 Updating .gitignore..."
cat > .gitignore << 'EOF'
# Dependencies
node_modules/
*/node_modules/

# Build outputs
.next/
*/.next/
dist/
build/
__pycache__/

# Environment variables
.env
.env.local
.env.*.local
**/.env.local

# Logs
*.log

# OS files
.DS_Store
Thumbs.db

# IDE
.vscode/
.idea/

# Python
*.pyc
__pycache__/

# Misc
*.pem
/tmp/
EOF

echo -e "${GREEN}✅ .gitignore updated${NC}"
echo ""

echo -e "${GREEN}========================================"
echo "✅ Cleanup Complete!"
echo "========================================${NC}"
echo ""
echo -e "${BLUE}Final structure:${NC}"
echo "  /app"
echo "    ├── backend/          (FastAPI backend)"
echo "    ├── frontend/         (Next.js frontend)"
echo "    └── *.md & *.sh       (Documentation & scripts)"
echo ""
echo -e "${BLUE}Backup location:${NC} $BACKUP_DIR"
echo ""
echo -e "${YELLOW}Next steps:${NC}"
echo "  1. Review the new structure"
echo "  2. Push to Git: bash /app/fix-and-push-now.sh"
echo "  3. Create separate Strapi repo if needed (from backup)"
echo ""
