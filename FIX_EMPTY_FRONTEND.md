# 🔧 Fix Empty Frontend Folder Issue

## Problem
Your frontend folder appears empty in GitHub because it contains a nested `.git` repository, making it a Git submodule.

## Solution: Remove Nested Git & Commit Properly

### Option 1: Quick Fix (Recommended)

Run these commands to fix the issue:

```bash
# 1. Go to app directory
cd /app

# 2. Remove the nested .git folder from frontend
rm -rf frontend/.git

# 3. Add frontend files to main repository
git add frontend/

# 4. Also add strapi-backend
git add strapi-backend/

# 5. Commit everything
git commit -m "Fix: Include frontend and strapi-backend files in repository"

# 6. Push to GitHub
git push origin main
```

After this, your frontend folder will show all files on GitHub!

---

## Option 2: If You Want to Keep Frontend Separate

If you prefer to deploy frontend from its own repository:

### A. Create Separate Frontend Repository

```bash
# 1. Go to frontend folder
cd /app/frontend

# 2. Check current remote
git remote -v

# 3. Push to its own repository (if not already done)
git add .
git commit -m "Frontend code"
git push origin main
```

### B. Create Separate Strapi Repository

```bash
# 1. Initialize strapi as its own repo
cd /app/strapi-backend
git init
git add .
git commit -m "Strapi CMS"

# 2. Create new repo on GitHub and push
git remote add origin https://github.com/YOUR-USERNAME/rounddigital-strapi.git
git push -u origin main
```

### C. Update Main Repository

```bash
cd /app

# Remove submodule references
git rm --cached frontend
git rm --cached strapi-backend

# Create .gitignore to exclude them
echo "frontend/" >> .gitignore
echo "strapi-backend/" >> .gitignore

# Commit
git add .gitignore
git commit -m "Separate frontend and strapi into own repositories"
git push origin main
```

---

## 🎯 Recommended Approach for Deployment

Since you're deploying to:
- **Vercel** (Frontend)
- **Strapi Cloud** (Strapi)

### Best Practice: 3 Separate Repositories

1. **`rounddigital-frontend`** - Just Next.js frontend
2. **`rounddigital-strapi`** - Just Strapi CMS
3. **`rounddigital-main`** - Documentation, scripts, backend (optional)

This makes deployment cleaner and easier to manage.

---

## 🚀 Steps After Fixing

### If Using Option 1 (Single Repo):

**For Vercel:**
- Connect: `https://github.com/YOUR-USERNAME/rounddigital`
- Root Directory: `frontend`
- Deploy

**For Strapi Cloud:**
- Connect: `https://github.com/YOUR-USERNAME/rounddigital`
- Root Directory: `strapi-backend`
- Deploy

### If Using Option 2 (Separate Repos):

**For Vercel:**
- Connect: `https://github.com/YOUR-USERNAME/rounddigital-frontend`
- Root Directory: `/` (root)
- Deploy

**For Strapi Cloud:**
- Connect: `https://github.com/YOUR-USERNAME/rounddigital-strapi`
- Root Directory: `/` (root)
- Deploy

---

## ✅ Verification

After fixing, verify on GitHub:

```bash
# Check what will be committed
cd /app
git status

# Should show frontend files as modified/new files, NOT as submodule
```

Visit your GitHub repository and you should see:
```
/frontend
  /src
  /public
  /node_modules (ignored)
  package.json
  next.config.mjs
  etc...

/strapi-backend
  /src
  /config
  package.json
  etc...
```

---

## 🆘 Quick Fix Script

Run this automated script:

```bash
#!/bin/bash

echo "🔧 Fixing empty frontend folder issue..."

cd /app

# Backup current state
echo "📦 Creating backup..."
cp -r frontend /tmp/frontend-backup
cp -r strapi-backend /tmp/strapi-backend-backup

# Remove nested git repos
echo "🗑️  Removing nested .git folders..."
rm -rf frontend/.git
rm -rf strapi-backend/.git 2>/dev/null

# Add everything to main repo
echo "➕ Adding files to main repository..."
git add frontend/
git add strapi-backend/
git add DEPLOYMENT_GUIDE.md
git add QUICK_DEPLOYMENT.md
git add ENV_VARIABLES_REFERENCE.md
git add *.sh

# Commit
echo "💾 Committing changes..."
git commit -m "Fix: Include all frontend and strapi files in repository

- Removed nested .git folders
- Added frontend source files
- Added strapi-backend source files
- Added deployment documentation"

# Push
echo "🚀 Pushing to GitHub..."
git push origin main

echo "✅ Done! Check your GitHub repository now."
echo "Frontend folder should show all files."
```

Save as `/app/fix-git-issue.sh` and run:
```bash
chmod +x /app/fix-git-issue.sh
bash /app/fix-git-issue.sh
```

---

## 📞 Still Having Issues?

If frontend still appears empty:

1. **Check .gitignore**: Make sure frontend is not ignored
   ```bash
   cat /app/.gitignore | grep frontend
   ```

2. **Check Git status**:
   ```bash
   cd /app && git status
   ```

3. **Force add**:
   ```bash
   git add -f frontend/
   ```

4. **Clear Git cache**:
   ```bash
   git rm -r --cached .
   git add .
   git commit -m "Reset Git cache"
   ```
