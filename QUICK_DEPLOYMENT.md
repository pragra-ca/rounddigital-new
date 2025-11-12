# 🚀 Quick Deployment Guide - TL;DR

## Step-by-Step Deployment (30 minutes)

### ✅ Before You Start
```bash
# Run pre-deployment check
bash /app/pre-deployment-checklist.sh
```

---

## 🎯 Part 1: Deploy Strapi CMS (10 min)

### 1. Update Strapi for Production
```bash
cd /app/strapi-backend
```

Edit `config/database.ts` - replace with:
```typescript
export default ({ env }) => ({
  connection: {
    client: env('DATABASE_CLIENT', 'postgres'),
    connection: {
      host: env('DATABASE_HOST'),
      port: env.int('DATABASE_PORT', 5432),
      database: env('DATABASE_NAME'),
      user: env('DATABASE_USERNAME'),
      password: env('DATABASE_PASSWORD'),
      ssl: env.bool('DATABASE_SSL', false) && {
        rejectUnauthorized: env.bool('DATABASE_SSL_SELF', false),
      },
    },
  },
});
```

### 2. Deploy to Strapi Cloud
1. Go to https://cloud.strapi.io/
2. Sign up / Login
3. Click "Create Project"
4. Connect your Git repository
5. Select `strapi-backend` folder
6. Click "Deploy"
7. **Save your Strapi URL**: `https://YOUR-PROJECT.strapiapp.com`

### 3. Set Environment Variables in Strapi Cloud
Go to Settings → Environment Variables, add:
```
ADMIN_JWT_SECRET=<generate-with-command-below>
APP_KEYS=<generate-with-command-below>
API_TOKEN_SALT=<generate-with-command-below>
JWT_SECRET=<generate-with-command-below>
TRANSFER_TOKEN_SALT=<generate-with-command-below>
NODE_ENV=production
```

**Generate secrets** (run 5 times):
```bash
node -e "console.log(require('crypto').randomBytes(32).toString('base64'))"
```

### 4. Configure Strapi Admin
1. Visit: `https://YOUR-PROJECT.strapiapp.com/admin`
2. Create admin account
3. Verify content types loaded
4. Test: `https://YOUR-PROJECT.strapiapp.com/api/job-positions`

---

## 🌐 Part 2: Deploy Frontend to Vercel (10 min)

### 1. Update Strapi URLs
```bash
# Run the automated script
bash /app/update-strapi-urls.sh
# Enter your Strapi URL when prompted
```

**OR manually update these files:**

`/frontend/src/pages/api/contact.js` (line 17):
```javascript
const STRAPI_URL = process.env.NEXT_PUBLIC_STRAPI_URL || 'http://localhost:1337';
await fetch(`${STRAPI_URL}/api/contact-submissions`, {
```

`/frontend/src/pages/api/newsletter.js` (line 14):
```javascript
const STRAPI_URL = process.env.NEXT_PUBLIC_STRAPI_URL || 'http://localhost:1337';
const response = await fetch(`${STRAPI_URL}/api/newsletter-subscriptions`, {
```

`/frontend/src/pages/careers/index.js` (line 76):
```javascript
const STRAPI_URL = process.env.NEXT_PUBLIC_STRAPI_URL || 'http://localhost:1337';
const res = await fetch(`${STRAPI_URL}/api/job-positions?sort=order:asc&populate=*`);
```

### 2. Update Strapi CORS
In Strapi Cloud, edit `config/middlewares.ts`:
```typescript
origin: [
  'http://localhost:3000',
  'https://*.vercel.app',
  'https://rounddigital.co',
  'https://www.rounddigital.co',
],
```

### 3. Deploy to Vercel
1. Go to https://vercel.com/
2. Click "Add New" → "Project"
3. Import your Git repository
4. Set **Root Directory**: `frontend` (if in subfolder)
5. Framework: Next.js (auto-detected)
6. Click "Deploy"

### 4. Add Environment Variables in Vercel
Go to Project Settings → Environment Variables:
```
NEXT_PUBLIC_STRAPI_URL=https://YOUR-PROJECT.strapiapp.com
EMAIL_USER=your-gmail@gmail.com
EMAIL_PASS=your-gmail-app-password
EMAIL_RECEIVER=info@rounddigital.co
```

**To get Gmail App Password:**
1. Go to Google Account → Security
2. Enable 2FA (if not enabled)
3. Search "App passwords"
4. Generate password for "Mail"
5. Copy and use in Vercel

---

## ✅ Part 3: Test & Verify (10 min)

### 1. Test Strapi
```bash
# Test job positions API
curl https://YOUR-PROJECT.strapiapp.com/api/job-positions

# Should return 6 job positions
```

### 2. Test Vercel Site
Visit: `https://your-project.vercel.app`

Check:
- [ ] Homepage loads
- [ ] Shows "100+ Projects" (not 500+)
- [ ] Careers page displays jobs
- [ ] Contact form works
- [ ] Newsletter subscription works
- [ ] Office addresses correct

### 3. Check Browser Console
- [ ] No CORS errors
- [ ] No API errors
- [ ] Images load correctly

---

## 🎉 You're Done!

Your site is now live at:
- **Frontend**: `https://your-project.vercel.app`
- **Strapi Admin**: `https://YOUR-PROJECT.strapiapp.com/admin`

---

## 🔧 Common Issues & Fixes

### ❌ "Failed to fetch" error
**Fix**: Check CORS in Strapi `config/middlewares.ts`

### ❌ 403 Forbidden from Strapi
**Fix**: In Strapi Admin → Settings → Roles → Public
Enable `find` and `findOne` for job-positions

### ❌ Contact form not sending emails
**Fix**: Verify Gmail App Password in Vercel environment variables

### ❌ Jobs not showing on careers page
**Fix**: 
1. Check Strapi URL in environment variables
2. Verify API returns data: `curl YOUR-STRAPI-URL/api/job-positions`

---

## 📞 Need Full Details?

See: `/app/DEPLOYMENT_GUIDE.md` for comprehensive documentation

---

## 🔄 Future Updates

### Update Strapi:
```bash
git add .
git commit -m "Update content"
git push
# Auto-deploys to Strapi Cloud
```

### Update Frontend:
```bash
git add .
git commit -m "Update UI"
git push
# Auto-deploys to Vercel
```

---

## 💰 Cost: $0/month

- ✅ Vercel: Free (Hobby plan)
- ✅ Strapi Cloud: Free tier (or $99/month for Pro)
- ✅ No FastAPI deployment needed (not being used)

**Total: $0-99/month**
