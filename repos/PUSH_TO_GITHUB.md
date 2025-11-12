# 🚀 Push All 3 Repositories to GitHub

## Step-by-Step Guide

### 1️⃣ Create GitHub Repositories

Go to [GitHub](https://github.com/new) and create 3 new repositories:

1. **rounddigital-frontend** (Public or Private)
   - Description: "Next.js frontend for RoundDigital website"
   - ✅ Do NOT initialize with README (already exists)

2. **rounddigital-strapi** (Public or Private)
   - Description: "Strapi CMS for RoundDigital content management"
   - ✅ Do NOT initialize with README (already exists)

3. **rounddigital-backend** (Public or Private)
   - Description: "FastAPI backend for RoundDigital"
   - ✅ Do NOT initialize with README (already exists)

---

### 2️⃣ Push Frontend Repository

```bash
cd /app/repos/rounddigital-frontend

# Add your GitHub remote (replace YOUR-USERNAME)
git remote add origin https://github.com/YOUR-USERNAME/rounddigital-frontend.git

# Push to GitHub
git branch -M main
git push -u origin main
```

**Verify:** Go to GitHub and check that all frontend files are visible.

---

### 3️⃣ Push Strapi Repository

```bash
cd /app/repos/rounddigital-strapi

# Add your GitHub remote (replace YOUR-USERNAME)
git remote add origin https://github.com/YOUR-USERNAME/rounddigital-strapi.git

# Push to GitHub
git branch -M main
git push -u origin main
```

**Verify:** Go to GitHub and check that all Strapi files are visible.

---

### 4️⃣ Push Backend Repository (Optional)

```bash
cd /app/repos/rounddigital-backend

# Add your GitHub remote (replace YOUR-USERNAME)
git remote add origin https://github.com/YOUR-USERNAME/rounddigital-backend.git

# Push to GitHub
git branch -M main
git push -u origin main
```

---

## 🎯 Deployment Guide

### A. Deploy Strapi First

1. **Go to [Strapi Cloud](https://cloud.strapi.io/)**
2. **Create new project**
3. **Connect GitHub repo**: `rounddigital-strapi`
4. **Add environment variables** (see `/app/repos/rounddigital-strapi/README.md`)
5. **Deploy**
6. **Save your Strapi URL**: `https://your-project.strapiapp.com`

### B. Deploy Frontend to Vercel

1. **Go to [Vercel](https://vercel.com/)**
2. **Import project**: `rounddigital-frontend`
3. **Add environment variables**:
   ```
   NEXT_PUBLIC_STRAPI_URL=https://your-project.strapiapp.com
   EMAIL_USER=your-gmail@gmail.com
   EMAIL_PASS=your-gmail-app-password
   EMAIL_RECEIVER=info@rounddigital.co
   ```
4. **Deploy**

### C. Deploy Backend (Optional)

Only if you need custom API endpoints:
- **Railway**: Easy deployment
- **Render**: Free tier available
- See `/app/repos/rounddigital-backend/README.md`

---

## 📋 What's in Each Repo

### Frontend (`rounddigital-frontend`)
- ✅ Next.js 15 application
- ✅ All pages: Home, About, Services, Careers, Contact
- ✅ All components: Navbar, Footer, Hero, etc.
- ✅ Strapi CMS integration
- ✅ Contact forms, newsletter subscription
- ✅ Job application system
- ✅ Updated statistics (100+ Projects)
- ✅ Correct office addresses

### Strapi (`rounddigital-strapi`)
- ✅ Strapi v5 CMS
- ✅ 11 content types
- ✅ Job positions API (public access)
- ✅ Contact submissions
- ✅ Newsletter subscriptions
- ✅ Job applications
- ✅ Bootstrap script for data seeding

### Backend (`rounddigital-backend`)
- ✅ FastAPI application
- ✅ MongoDB integration
- ✅ Status check endpoints
- ✅ CORS configured

---

## 🔧 Quick Commands

Create all 3 repos and push at once:

```bash
# Replace YOUR-USERNAME with your GitHub username
USERNAME="YOUR-USERNAME"

# Frontend
cd /app/repos/rounddigital-frontend
git remote add origin https://github.com/$USERNAME/rounddigital-frontend.git
git branch -M main
git push -u origin main

# Strapi
cd /app/repos/rounddigital-strapi
git remote add origin https://github.com/$USERNAME/rounddigital-strapi.git
git branch -M main
git push -u origin main

# Backend (optional)
cd /app/repos/rounddigital-backend
git remote add origin https://github.com/$USERNAME/rounddigital-backend.git
git branch -M main
git push -u origin main
```

---

## ✅ Checklist

After pushing:

- [ ] All 3 repos visible on GitHub
- [ ] Frontend repo shows all files (src, public, etc.)
- [ ] Strapi repo shows all files (src, config, etc.)
- [ ] Backend repo shows all files (server.py, requirements.txt)
- [ ] No nested .git folders
- [ ] .gitignore working properly
- [ ] READMEs are clear

---

## 🆘 Troubleshooting

**Error: "remote origin already exists"**
```bash
git remote remove origin
git remote add origin <your-github-url>
```

**Error: "failed to push"**
```bash
# Check credentials
git config --global user.name "Your Name"
git config --global user.email "your@email.com"
```

**Files not showing on GitHub:**
```bash
# Check what's committed
git log --oneline
git ls-files
```

---

## 🎉 Success!

Once all pushed, you should have:
- 3 separate clean repositories on GitHub
- Each ready for independent deployment
- Professional structure for portfolio/production

**Next:** Follow deployment guides in each repo's README.md
