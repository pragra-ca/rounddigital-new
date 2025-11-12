#!/bin/bash

echo "========================================"
echo "🚀 Creating 3 Separate Clean Repositories"
echo "========================================"
echo ""

# Colors
GREEN='\033[0;32m'
RED='\033[0;31m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m'

# Create base directory for repos
REPOS_DIR="/app/repos"
mkdir -p "$REPOS_DIR"

echo -e "${BLUE}Creating 3 separate repositories:${NC}"
echo "  1. rounddigital-frontend (Next.js)"
echo "  2. rounddigital-strapi (Strapi CMS)"
echo "  3. rounddigital-backend (FastAPI)"
echo ""

# ============================================
# 1. FRONTEND REPOSITORY (Next.js)
# ============================================
echo -e "${YELLOW}📦 1/3 Creating Frontend Repository...${NC}"

FRONTEND_REPO="$REPOS_DIR/rounddigital-frontend"
rm -rf "$FRONTEND_REPO"
mkdir -p "$FRONTEND_REPO"

# Copy frontend files (excluding node_modules, .next, .git)
echo "   Copying frontend files..."
rsync -av --progress \
  --exclude='node_modules' \
  --exclude='.next' \
  --exclude='.git' \
  --exclude='yarn-error.log' \
  /app/frontend/ "$FRONTEND_REPO/"

# Create frontend-specific .gitignore
cat > "$FRONTEND_REPO/.gitignore" << 'EOF'
# Dependencies
node_modules/
/.pnp
.pnp.js

# Testing
/coverage

# Next.js
/.next/
/out/
.next

# Production
/build

# Misc
.DS_Store
*.pem

# Debug
npm-debug.log*
yarn-debug.log*
yarn-error.log*

# Local env files
.env
.env*.local

# Vercel
.vercel

# TypeScript
*.tsbuildinfo
next-env.d.ts
EOF

# Create frontend README
cat > "$FRONTEND_REPO/README.md" << 'EOF'
# RoundDigital - Frontend

Next.js frontend application for RoundDigital website.

## 🚀 Quick Start

```bash
# Install dependencies
npm install
# or
yarn install

# Run development server
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000)

## 📦 Deployment

### Deploy to Vercel

1. Push this repository to GitHub
2. Connect to Vercel
3. Add environment variables:
   - `NEXT_PUBLIC_STRAPI_URL` - Your Strapi URL
   - `EMAIL_USER` - Gmail for contact form
   - `EMAIL_PASS` - Gmail app password
   - `EMAIL_RECEIVER` - Receiver email

4. Deploy!

## 🔧 Environment Variables

Create `.env.local`:

```bash
NEXT_PUBLIC_STRAPI_URL=https://your-strapi-url.com
EMAIL_USER=your-email@gmail.com
EMAIL_PASS=your-app-password
EMAIL_RECEIVER=info@rounddigital.co
```

## 📚 Tech Stack

- Next.js 15+
- React
- Tailwind CSS
- Strapi CMS (headless)

## 🎨 Features

- Homepage with hero section
- Services pages
- Careers page with job listings
- Contact form
- Blog
- Industries showcase
- Responsive design
EOF

# Initialize git
cd "$FRONTEND_REPO"
git init
git add .
git commit -m "Initial commit: Next.js frontend

- Complete Next.js application
- All pages and components
- Strapi CMS integration
- Contact forms and newsletter
- Job application system
- Responsive design
- SEO optimized"

echo -e "${GREEN}✅ Frontend repository created${NC}"
echo ""

# ============================================
# 2. STRAPI BACKEND REPOSITORY
# ============================================
echo -e "${YELLOW}📦 2/3 Creating Strapi Repository...${NC}"

STRAPI_REPO="$REPOS_DIR/rounddigital-strapi"
rm -rf "$STRAPI_REPO"
mkdir -p "$STRAPI_REPO"

# Copy strapi files
echo "   Copying Strapi files..."
rsync -av --progress \
  --exclude='node_modules' \
  --exclude='.cache' \
  --exclude='.tmp' \
  --exclude='build' \
  --exclude='dist' \
  --exclude='.git' \
  --exclude='public/uploads/*' \
  /app/strapi-backend/ "$STRAPI_REPO/"

# Create uploads directory with gitkeep
mkdir -p "$STRAPI_REPO/public/uploads"
touch "$STRAPI_REPO/public/uploads/.gitkeep"

# Create strapi-specific .gitignore
cat > "$STRAPI_REPO/.gitignore" << 'EOF'
# Dependencies
node_modules/

# Strapi
.cache/
.tmp/
build/
dist/
.env
*.db
*.db-shm
*.db-wal

# Logs
*.log
logs/
npm-debug.log*
yarn-debug.log*

# OS
.DS_Store
Thumbs.db

# IDE
.vscode/
.idea/

# Uploads (keep structure, ignore content)
public/uploads/*
!public/uploads/.gitkeep

# Misc
.env
.env.*
EOF

# Create Strapi README
cat > "$STRAPI_REPO/README.md" << 'EOF'
# RoundDigital - Strapi CMS

Headless CMS for RoundDigital website using Strapi v5.

## 🚀 Quick Start

```bash
# Install dependencies
npm install

# Run development
npm run develop
```

Admin panel: [http://localhost:1337/admin](http://localhost:1337/admin)

## 📦 Deployment to Strapi Cloud

1. Push this repository to GitHub
2. Go to [Strapi Cloud](https://cloud.strapi.io/)
3. Create new project
4. Connect GitHub repository
5. Add environment variables (see below)
6. Deploy!

## 🔧 Environment Variables

For production (Strapi Cloud):

```bash
# Database (PostgreSQL - provided by Strapi Cloud)
DATABASE_CLIENT=postgres
DATABASE_HOST=<strapi-cloud-host>
DATABASE_PORT=5432
DATABASE_NAME=<strapi-cloud-db>
DATABASE_USERNAME=<strapi-cloud-user>
DATABASE_PASSWORD=<strapi-cloud-password>
DATABASE_SSL=true

# Strapi
ADMIN_JWT_SECRET=<generate-random>
APP_KEYS=<generate-random>
API_TOKEN_SALT=<generate-random>
JWT_SECRET=<generate-random>
TRANSFER_TOKEN_SALT=<generate-random>

# Server
HOST=0.0.0.0
PORT=1337
NODE_ENV=production

# Frontend (for CORS)
FRONTEND_URL=https://your-vercel-app.vercel.app
```

Generate secrets:
```bash
node -e "console.log(require('crypto').randomBytes(32).toString('base64'))"
```

## 📚 Content Types

- Services
- Job Positions (public API)
- Contact Submissions
- Newsletter Subscriptions
- Job Applications
- Team Members
- Testimonials
- FAQs
- Blog Posts
- Case Studies
- Partners

## 🎯 API Endpoints

- `GET /api/job-positions` - List all jobs (public)
- `POST /api/contact-submissions` - Submit contact form
- `POST /api/newsletter-subscriptions` - Subscribe to newsletter
- `POST /api/job-applications` - Submit job application

## 🔐 Public Permissions

Job positions API is configured for public access.
Other endpoints require authentication.
EOF

# Initialize git
cd "$STRAPI_REPO"
git init
git add .
git commit -m "Initial commit: Strapi CMS

- Strapi v5 setup
- 11 content types configured
- Job positions with public API access
- Contact and newsletter submissions
- Job application system
- Bootstrap script for data seeding
- Production-ready configuration"

echo -e "${GREEN}✅ Strapi repository created${NC}"
echo ""

# ============================================
# 3. FASTAPI BACKEND REPOSITORY
# ============================================
echo -e "${YELLOW}📦 3/3 Creating Backend Repository...${NC}"

BACKEND_REPO="$REPOS_DIR/rounddigital-backend"
rm -rf "$BACKEND_REPO"
mkdir -p "$BACKEND_REPO"

# Copy backend files
echo "   Copying backend files..."
rsync -av --progress \
  --exclude='__pycache__' \
  --exclude='*.pyc' \
  --exclude='.env' \
  /app/backend/ "$BACKEND_REPO/"

# Create backend-specific .gitignore
cat > "$BACKEND_REPO/.gitignore" << 'EOF'
# Python
__pycache__/
*.py[cod]
*$py.class
*.so
.Python

# Virtual Environment
venv/
env/
ENV/

# Environment variables
.env
.env.local

# Logs
*.log

# OS
.DS_Store
Thumbs.db

# IDE
.vscode/
.idea/
*.swp
EOF

# Create .env.example
cat > "$BACKEND_REPO/.env.example" << 'EOF'
# MongoDB
MONGO_URL=mongodb://localhost:27017
DB_NAME=rounddigital

# CORS
CORS_ORIGINS=http://localhost:3000,https://your-domain.com
EOF

# Create Backend README
cat > "$BACKEND_REPO/README.md" << 'EOF'
# RoundDigital - Backend API

FastAPI backend service for RoundDigital.

## 🚀 Quick Start

```bash
# Create virtual environment
python -m venv venv
source venv/bin/activate  # On Windows: venv\Scripts\activate

# Install dependencies
pip install -r requirements.txt

# Run server
uvicorn server:app --reload --host 0.0.0.0 --port 8001
```

API docs: [http://localhost:8001/docs](http://localhost:8001/docs)

## 📦 Deployment Options

### Option 1: Railway
1. Push to GitHub
2. Connect Railway to repo
3. Add environment variables
4. Deploy

### Option 2: Render
1. Push to GitHub
2. Create new Web Service on Render
3. Build: `pip install -r requirements.txt`
4. Start: `uvicorn server:app --host 0.0.0.0 --port $PORT`

### Option 3: Google Cloud Run / AWS Lambda
See respective documentation.

## 🔧 Environment Variables

Create `.env`:

```bash
MONGO_URL=mongodb://localhost:27017
DB_NAME=rounddigital
CORS_ORIGINS=http://localhost:3000,https://your-frontend-url.com
```

## 📚 API Endpoints

- `GET /api/` - Health check
- `POST /api/status` - Create status check
- `GET /api/status` - Get status checks

## 🛠️ Tech Stack

- FastAPI
- MongoDB (Motor)
- Pydantic
- CORS middleware

## 📝 Note

This backend is optional. The frontend currently uses:
- Next.js API routes for forms
- Strapi CMS for content management

Deploy only if you need additional custom API endpoints.
EOF

# Initialize git
cd "$BACKEND_REPO"
git init
git add .
git commit -m "Initial commit: FastAPI backend

- FastAPI application
- MongoDB integration
- Status check endpoints
- CORS configured
- Ready for deployment"

echo -e "${GREEN}✅ Backend repository created${NC}"
echo ""

# ============================================
# SUMMARY & NEXT STEPS
# ============================================
echo -e "${GREEN}========================================"
echo "✅ All 3 Repositories Created!"
echo "========================================${NC}"
echo ""

echo -e "${BLUE}📂 Repository Locations:${NC}"
echo ""
echo "1. Frontend (Next.js):"
echo "   📁 $FRONTEND_REPO"
echo "   🔗 Deploy to: Vercel"
echo ""
echo "2. Strapi CMS:"
echo "   📁 $STRAPI_REPO"
echo "   🔗 Deploy to: Strapi Cloud"
echo ""
echo "3. Backend (FastAPI):"
echo "   📁 $BACKEND_REPO"
echo "   🔗 Deploy to: Railway/Render (optional)"
echo ""

echo -e "${YELLOW}📋 Next Steps:${NC}"
echo ""
echo "For each repository:"
echo ""
echo "1️⃣  Frontend:"
echo "   cd $FRONTEND_REPO"
echo "   git remote add origin https://github.com/YOUR-USERNAME/rounddigital-frontend.git"
echo "   git push -u origin main"
echo ""
echo "2️⃣  Strapi:"
echo "   cd $STRAPI_REPO"
echo "   git remote add origin https://github.com/YOUR-USERNAME/rounddigital-strapi.git"
echo "   git push -u origin main"
echo ""
echo "3️⃣  Backend (optional):"
echo "   cd $BACKEND_REPO"
echo "   git remote add origin https://github.com/YOUR-USERNAME/rounddigital-backend.git"
echo "   git push -u origin main"
echo ""

echo -e "${BLUE}🚀 Deployment Order:${NC}"
echo "   1. Deploy Strapi first (get Strapi URL)"
echo "   2. Update frontend env vars with Strapi URL"
echo "   3. Deploy frontend to Vercel"
echo "   4. (Optional) Deploy backend if needed"
echo ""

echo -e "${GREEN}✅ Clean structure ready!${NC}"
echo ""
