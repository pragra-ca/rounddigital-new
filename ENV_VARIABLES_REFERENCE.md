# 🔐 Environment Variables Reference

Complete list of environment variables needed for deployment.

---

## 🎯 Strapi Cloud Environment Variables

**Location**: Strapi Cloud Dashboard → Settings → Environment Variables

### Required Variables:

```bash
# Database (provided by Strapi Cloud, verify values)
DATABASE_CLIENT=postgres
DATABASE_HOST=<provided-by-strapi-cloud>
DATABASE_PORT=5432
DATABASE_NAME=<provided-by-strapi-cloud>
DATABASE_USERNAME=<provided-by-strapi-cloud>
DATABASE_PASSWORD=<provided-by-strapi-cloud>
DATABASE_SSL=true

# Strapi Security Keys (generate new for each project)
ADMIN_JWT_SECRET=<generate-random-32-bytes>
APP_KEYS=<generate-random-32-bytes>
API_TOKEN_SALT=<generate-random-32-bytes>
JWT_SECRET=<generate-random-32-bytes>
TRANSFER_TOKEN_SALT=<generate-random-32-bytes>

# Server Configuration
HOST=0.0.0.0
PORT=1337
NODE_ENV=production

# Frontend URL (for CORS)
FRONTEND_URL=https://your-domain.vercel.app
```

### How to Generate Random Secrets:

```bash
# Run this command 5 times to generate 5 different secrets
node -e "console.log(require('crypto').randomBytes(32).toString('base64'))"
```

**Example output:**
```
wK8mN3+vLxQz9rF2pY7hJ5sE6tB4nD1oU0cA8xW==
```

Copy each generated string for:
1. ADMIN_JWT_SECRET
2. APP_KEYS
3. API_TOKEN_SALT
4. JWT_SECRET
5. TRANSFER_TOKEN_SALT

---

## 🌐 Vercel Environment Variables

**Location**: Vercel Dashboard → Project Settings → Environment Variables

### Required Variables:

```bash
# Strapi CMS URL
NEXT_PUBLIC_STRAPI_URL=https://your-project-name.strapiapp.com

# Email Configuration (for contact form)
EMAIL_USER=your-gmail@gmail.com
EMAIL_PASS=your-gmail-app-password
EMAIL_RECEIVER=info@rounddigital.co
```

### Optional Variables:

```bash
# Google Analytics (if using)
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX

# FastAPI Backend (if deploying it later)
NEXT_PUBLIC_BACKEND_URL=https://your-backend-url.com

# Custom API Keys (if needed)
NEXT_PUBLIC_API_KEY=your-api-key
```

---

## 📧 Gmail App Password Setup

### Step-by-Step:

1. **Enable 2-Factor Authentication**:
   - Go to: https://myaccount.google.com/security
   - Enable "2-Step Verification"

2. **Generate App Password**:
   - Go to: https://myaccount.google.com/apppasswords
   - Select app: "Mail"
   - Select device: "Other (Custom name)"
   - Enter: "RoundDigital Website"
   - Click "Generate"

3. **Copy the 16-character password** (e.g., `abcd efgh ijkl mnop`)

4. **Use in Vercel**:
   - Variable name: `EMAIL_PASS`
   - Value: `abcdefghijklmnop` (no spaces)

---

## 🔍 Environment Variable Checklist

### Before Deploying Strapi:

- [ ] Generated 5 unique random secrets
- [ ] Copied secrets to Strapi Cloud dashboard
- [ ] Set `NODE_ENV=production`
- [ ] Set `DATABASE_CLIENT=postgres`
- [ ] Verified database credentials from Strapi Cloud

### Before Deploying Frontend:

- [ ] Set `NEXT_PUBLIC_STRAPI_URL` with Strapi Cloud URL
- [ ] Set `EMAIL_USER` with Gmail address
- [ ] Generated Gmail App Password
- [ ] Set `EMAIL_PASS` with App Password
- [ ] Set `EMAIL_RECEIVER` with recipient email

### After Initial Deployment:

- [ ] Tested Strapi API endpoints
- [ ] Verified frontend can connect to Strapi
- [ ] Tested contact form email delivery
- [ ] Checked browser console for errors

---

## 🛡️ Security Best Practices

### ✅ DO:
- ✅ Generate unique secrets for production
- ✅ Use environment variables (never hardcode)
- ✅ Add `.env` and `.env.local` to `.gitignore`
- ✅ Use different secrets for dev/staging/prod
- ✅ Rotate secrets periodically
- ✅ Use Gmail App Passwords (not regular password)

### ❌ DON'T:
- ❌ Commit secrets to Git
- ❌ Share secrets in public channels
- ❌ Reuse secrets across projects
- ❌ Use weak or predictable secrets
- ❌ Store secrets in frontend code

---

## 🔄 Updating Environment Variables

### For Strapi Cloud:
1. Go to Dashboard → Your Project → Settings
2. Click "Environment Variables"
3. Update variable
4. Redeploy if needed

### For Vercel:
1. Go to Dashboard → Your Project → Settings
2. Click "Environment Variables"
3. Update variable
4. Redeploy (automatic or manual)

**Note**: Changes to env vars require redeployment to take effect.

---

## 📋 Quick Copy Template

### For Strapi Cloud (.env format):
```bash
DATABASE_CLIENT=postgres
DATABASE_HOST=
DATABASE_PORT=5432
DATABASE_NAME=
DATABASE_USERNAME=
DATABASE_PASSWORD=
DATABASE_SSL=true

ADMIN_JWT_SECRET=
APP_KEYS=
API_TOKEN_SALT=
JWT_SECRET=
TRANSFER_TOKEN_SALT=

HOST=0.0.0.0
PORT=1337
NODE_ENV=production

FRONTEND_URL=https://your-domain.vercel.app
```

### For Vercel (.env.local format):
```bash
NEXT_PUBLIC_STRAPI_URL=https://your-project-name.strapiapp.com
EMAIL_USER=your-gmail@gmail.com
EMAIL_PASS=your-gmail-app-password
EMAIL_RECEIVER=info@rounddigital.co
```

---

## 🧪 Testing Environment Variables

### Test Strapi Connection:
```bash
# From your terminal
curl -X GET https://your-project.strapiapp.com/api/job-positions

# Should return JSON with job positions
```

### Test Frontend API Route:
```bash
# Test contact API endpoint
curl -X POST https://your-domain.vercel.app/api/contact \
  -H "Content-Type: application/json" \
  -d '{"name":"Test","email":"test@example.com","message":"Test message"}'

# Should return success message
```

### Check Vercel Logs:
1. Go to Vercel Dashboard → Your Project
2. Click "Deployments"
3. Click latest deployment
4. View "Functions" logs for API routes

---

## 📞 Troubleshooting

### "Environment variable not found"
**Fix**: Check spelling and that variable is set for correct environment (Production/Preview/Development)

### "CORS error when calling Strapi"
**Fix**: Update `FRONTEND_URL` in Strapi and add Vercel domain to `middlewares.ts`

### "Email sending failed"
**Fix**: 
1. Verify Gmail App Password (not regular password)
2. Check `EMAIL_USER` format: `your-email@gmail.com`
3. Remove spaces from `EMAIL_PASS`

### "Cannot read property of undefined"
**Fix**: Ensure all required env vars are set in Vercel for all environments

---

## ✅ Final Verification

After setting all variables:

```bash
# In Strapi Cloud
✅ 11 environment variables set
✅ Database connected
✅ Admin panel accessible
✅ API endpoints working

# In Vercel
✅ 4 environment variables set (minimum)
✅ Site builds successfully
✅ API routes working
✅ Forms submitting to Strapi
```

**All green? You're ready to deploy! 🚀**
