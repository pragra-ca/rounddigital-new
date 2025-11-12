# 🚀 Complete Deployment Guide - RoundDigital Website

## Overview
Your application consists of:
1. **Frontend**: Next.js application → Deploy to **Vercel**
2. **Strapi CMS**: Content Management System → Deploy to **Strapi Cloud**
3. **FastAPI Backend**: Basic API service (currently minimal usage) → **Optional deployment**

---

## 📋 Table of Contents
1. [Strapi Cloud Deployment](#1-strapi-cloud-deployment)
2. [Vercel Frontend Deployment](#2-vercel-frontend-deployment)
3. [FastAPI Backend Options](#3-fastapi-backend-deployment-options)
4. [Environment Variables Configuration](#4-environment-variables-configuration)
5. [Post-Deployment Checklist](#5-post-deployment-checklist)
6. [Troubleshooting](#6-troubleshooting)

---

## 1. 🎯 Strapi Cloud Deployment

### Step 1.1: Prepare Your Strapi Project

#### A. Update Database Configuration
Since Strapi Cloud uses PostgreSQL (not SQLite), update `/strapi-backend/config/database.ts`:

```typescript
export default ({ env }) => ({
  connection: {
    client: env('DATABASE_CLIENT', 'postgres'),
    connection: {
      host: env('DATABASE_HOST', '127.0.0.1'),
      port: env.int('DATABASE_PORT', 5432),
      database: env('DATABASE_NAME', 'strapi'),
      user: env('DATABASE_USERNAME', 'strapi'),
      password: env('DATABASE_PASSWORD', 'strapi'),
      ssl: env.bool('DATABASE_SSL', false) && {
        rejectUnauthorized: env.bool('DATABASE_SSL_SELF', false),
      },
    },
    debug: false,
  },
});
```

#### B. Update CORS Configuration
Update `/strapi-backend/config/middlewares.ts` to allow your Vercel domain:

```typescript
export default [
  'strapi::logger',
  'strapi::errors',
  'strapi::security',
  {
    name: 'strapi::cors',
    config: {
      enabled: true,
      origin: [
        'http://localhost:3000',
        'https://your-domain.vercel.app',  // Update with your actual Vercel domain
        'https://www.rounddigital.co',     // Your custom domain if any
      ],
    },
  },
  'strapi::poweredBy',
  'strapi::query',
  'strapi::body',
  'strapi::session',
  'strapi::favicon',
  'strapi::public',
];
```

### Step 1.2: Create Strapi Cloud Account & Deploy

1. **Sign up**: Go to https://cloud.strapi.io/
2. **Create New Project**: Click "Create Project"
3. **Connect Git Repository**:
   - Push your `strapi-backend` folder to a Git repository (GitHub/GitLab)
   - Connect the repository to Strapi Cloud
   - Select the branch and root directory (`/strapi-backend`)
   
4. **Configure Environment Variables** (see section 4.1)

5. **Deploy**: Strapi Cloud will automatically:
   - Set up PostgreSQL database
   - Install dependencies
   - Build and deploy your Strapi instance

6. **Note Your Strapi URL**: 
   - You'll get a URL like: `https://your-project-name.strapiapp.com`
   - Save this URL - you'll need it for frontend configuration

### Step 1.3: Configure Strapi Admin

After deployment:
1. Visit: `https://your-project-name.strapiapp.com/admin`
2. Create your admin account
3. Verify your content types are present:
   - Services
   - Job Positions
   - Contact Submissions
   - Newsletter Subscriptions
   - Job Applications
   - Team Members
   - Testimonials
   - FAQs
   - Blog Posts
   - Case Studies
   - Partners

4. **Important**: The bootstrap script will auto-seed initial data (services and job positions)

---

## 2. 🌐 Vercel Frontend Deployment

### Step 2.1: Prepare Your Frontend

#### A. Update API URLs
The frontend uses Next.js API routes that call Strapi. Update these files to use your Strapi Cloud URL:

**Files to update:**
- `/frontend/src/pages/api/contact.js` (line 17)
- `/frontend/src/pages/api/newsletter.js` (line 14)
- `/frontend/src/pages/api/apply.js` (if exists)
- `/frontend/src/pages/careers/index.js` (line 76)

**Change from:**
```javascript
const response = await fetch('http://localhost:1337/api/job-positions', {
```

**Change to:**
```javascript
const STRAPI_URL = process.env.NEXT_PUBLIC_STRAPI_URL || 'https://your-project-name.strapiapp.com';
const response = await fetch(`${STRAPI_URL}/api/job-positions`, {
```

#### B. Create/Update Environment Variables File
Create `/frontend/.env.local`:

```bash
# Strapi CMS URL (Strapi Cloud)
NEXT_PUBLIC_STRAPI_URL=https://your-project-name.strapiapp.com

# Email Configuration (for contact form)
EMAIL_USER=your-gmail@gmail.com
EMAIL_PASS=your-app-specific-password
EMAIL_RECEIVER=info@rounddigital.co

# Optional: FastAPI Backend (if using)
NEXT_PUBLIC_BACKEND_URL=https://your-backend-url.com
```

### Step 2.2: Deploy to Vercel

#### Option A: Via Vercel CLI
```bash
# Install Vercel CLI
npm i -g vercel

# Navigate to frontend folder
cd /app/frontend

# Login to Vercel
vercel login

# Deploy
vercel --prod
```

#### Option B: Via Vercel Dashboard (Recommended)

1. **Push to Git**: Push your `frontend` folder to GitHub/GitLab
2. **Import Project**: 
   - Go to https://vercel.com/
   - Click "Add New" → "Project"
   - Import your repository
   
3. **Configure Build Settings**:
   - **Framework Preset**: Next.js
   - **Root Directory**: `frontend` (if frontend is in a subfolder)
   - **Build Command**: `npm run build` or `yarn build`
   - **Output Directory**: `.next`
   - **Install Command**: `npm install` or `yarn install`

4. **Add Environment Variables** (see section 4.2)

5. **Deploy**: Click "Deploy"

6. **Custom Domain** (Optional):
   - Go to Project Settings → Domains
   - Add `rounddigital.co` and `www.rounddigital.co`
   - Update DNS records as instructed

---

## 3. 🐍 FastAPI Backend Deployment Options

### Analysis: Do You Need the FastAPI Backend?

**Current Status**: 
- Your FastAPI backend (`/app/backend/server.py`) has minimal functionality
- It only has `/api/status` endpoints for status checks
- **Your frontend currently does NOT use this backend**
- All form submissions go directly to Strapi
- Job listings come from Strapi

**Recommendation**: 
- ✅ **Skip FastAPI deployment for now** - it's not being used
- ✅ Focus on Strapi + Frontend deployment
- ⚠️ Keep the FastAPI code in your repository for future use

### If You Need to Deploy FastAPI Later

#### Option 1: Railway (Easiest)
1. Go to https://railway.app/
2. Create new project from GitHub repo
3. Select the `backend` folder
4. Add environment variables
5. Railway auto-deploys

#### Option 2: Render
1. Go to https://render.com/
2. Create new Web Service
3. Connect GitHub repository
4. Set build command: `pip install -r requirements.txt`
5. Set start command: `uvicorn server:app --host 0.0.0.0 --port $PORT`

#### Option 3: Google Cloud Run / AWS Lambda
More complex but scalable - follow their Python deployment guides.

---

## 4. 🔐 Environment Variables Configuration

### 4.1: Strapi Cloud Environment Variables

In Strapi Cloud Dashboard → Settings → Environment Variables, add:

```bash
# Database (auto-configured by Strapi Cloud, but verify)
DATABASE_CLIENT=postgres
DATABASE_HOST=<provided-by-strapi-cloud>
DATABASE_PORT=5432
DATABASE_NAME=<provided-by-strapi-cloud>
DATABASE_USERNAME=<provided-by-strapi-cloud>
DATABASE_PASSWORD=<provided-by-strapi-cloud>
DATABASE_SSL=true

# Strapi Admin
ADMIN_JWT_SECRET=<generate-random-string>
APP_KEYS=<generate-random-string>
API_TOKEN_SALT=<generate-random-string>
JWT_SECRET=<generate-random-string>

# Transfer Token
TRANSFER_TOKEN_SALT=<generate-random-string>

# Server
HOST=0.0.0.0
PORT=1337
NODE_ENV=production

# Frontend URL (for CORS)
FRONTEND_URL=https://your-domain.vercel.app
```

**Generate Random Strings**:
```bash
# Run this command 5 times to get 5 different secrets
node -e "console.log(require('crypto').randomBytes(32).toString('base64'))"
```

### 4.2: Vercel Environment Variables

In Vercel Dashboard → Project Settings → Environment Variables, add:

```bash
# Strapi CMS
NEXT_PUBLIC_STRAPI_URL=https://your-project-name.strapiapp.com

# Email Configuration (Gmail App Password)
EMAIL_USER=your-gmail@gmail.com
EMAIL_PASS=your-gmail-app-password
EMAIL_RECEIVER=info@rounddigital.co

# Optional: Analytics, etc.
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX
```

**Note**: Mark `NEXT_PUBLIC_*` variables for all environments (Production, Preview, Development)

---

## 5. ✅ Post-Deployment Checklist

### After Strapi Deployment:

- [ ] Access Strapi admin at `https://your-project.strapiapp.com/admin`
- [ ] Create admin account
- [ ] Verify content types are present
- [ ] Check if initial data (services, jobs) is seeded
- [ ] Test API endpoints:
  - [ ] `GET /api/job-positions` (should return 6 jobs)
  - [ ] `GET /api/services`
- [ ] Configure public permissions (if needed):
  - Go to Settings → Roles → Public
  - Enable find/findOne for job-positions

### After Vercel Deployment:

- [ ] Visit your live URL: `https://your-domain.vercel.app`
- [ ] Test all pages:
  - [ ] Homepage loads correctly
  - [ ] Hero section shows "100+ Projects" (not 500+)
  - [ ] Services page loads
  - [ ] Careers page displays jobs from Strapi
  - [ ] Contact page shows correct addresses
  - [ ] About page loads
- [ ] Test forms:
  - [ ] Contact form submission
  - [ ] Newsletter subscription
  - [ ] Job application (if applicable)
- [ ] Check browser console for errors
- [ ] Test on mobile devices
- [ ] Verify custom domain (if configured)

### Cross-Platform Testing:

- [ ] Verify Strapi → Vercel communication (check Network tab)
- [ ] Check CORS settings if getting errors
- [ ] Test form submissions save to Strapi
- [ ] Verify images and assets load correctly

---

## 6. 🔧 Troubleshooting

### Issue: "Failed to fetch from Strapi"

**Cause**: CORS or network configuration issue

**Fix**:
1. Check Strapi CORS settings in `config/middlewares.ts`
2. Ensure your Vercel domain is added to allowed origins
3. Verify `NEXT_PUBLIC_STRAPI_URL` is set correctly in Vercel

### Issue: "403 Forbidden" from Strapi API

**Cause**: API endpoint not public

**Fix**:
1. Go to Strapi Admin → Settings → Roles → Public
2. Enable `find` and `findOne` for the content type
3. Or keep the `auth: false` route configuration as currently set

### Issue: Contact form emails not sending

**Cause**: Email credentials not configured or incorrect

**Fix**:
1. Verify `EMAIL_USER` and `EMAIL_PASS` in Vercel environment variables
2. Use Gmail App Password, not regular password
3. Enable "Less secure app access" or use App Passwords (recommended)

### Issue: Images not loading

**Cause**: Strapi media library URLs incorrect

**Fix**:
1. Re-upload images in Strapi Cloud
2. Update image URLs in your code
3. Ensure Strapi public folder is accessible

### Issue: Build fails on Vercel

**Cause**: Dependency or configuration issue

**Fix**:
1. Check build logs in Vercel dashboard
2. Verify `package.json` has all dependencies
3. Ensure Node.js version compatibility (set in `package.json`):
   ```json
   "engines": {
     "node": "20.x"
   }
   ```

---

## 7. 📊 Cost Breakdown

### Strapi Cloud
- **Free Tier**: $0/month (1 project, 1GB storage)
- **Pro**: $99/month (unlimited projects, PostgreSQL)
- **Recommendation**: Start with Free tier for testing

### Vercel
- **Hobby**: $0/month (perfect for this project)
- **Pro**: $20/month (if you need team features)
- **Recommendation**: Hobby tier is sufficient

### FastAPI Backend (If Needed)
- **Railway**: $5-10/month
- **Render**: Free tier available, then $7/month
- **Recommendation**: Skip for now, deploy only if needed

**Total Estimated Cost**: $0-99/month (depending on Strapi plan)

---

## 8. 🎁 Bonus: Automated Deployment Script

Create `/frontend/deploy.sh`:

```bash
#!/bin/bash

echo "🚀 Deploying RoundDigital Website..."

# Update Strapi URL in files
echo "📝 Updating Strapi URLs..."
STRAPI_URL="https://your-project-name.strapiapp.com"

find src/pages/api -name "*.js" -exec sed -i "s|http://localhost:1337|$STRAPI_URL|g" {} \;

echo "✅ Updated API URLs"

# Deploy to Vercel
echo "🌐 Deploying to Vercel..."
vercel --prod

echo "✅ Deployment complete!"
```

Make it executable: `chmod +x deploy.sh`

---

## 9. 📞 Need Help?

If you encounter issues:
1. Check Vercel deployment logs
2. Check Strapi Cloud logs
3. Check browser console errors
4. Review this deployment guide
5. Contact support for platform-specific issues

---

## 10. 🔄 Future Updates

To update your deployed apps:

### Strapi:
- Push changes to Git → Strapi Cloud auto-deploys

### Frontend:
- Push changes to Git → Vercel auto-deploys
- Or run: `vercel --prod` from terminal

---

**Good luck with your deployment! 🎉**

Your site will be live at:
- Frontend: `https://your-domain.vercel.app` or `rounddigital.co`
- Strapi Admin: `https://your-project-name.strapiapp.com/admin`
