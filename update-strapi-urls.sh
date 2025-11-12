#!/bin/bash

# Script to update localhost Strapi URLs to environment variable

echo "========================================"
echo "🔧 Update Strapi URLs Script"
echo "========================================"
echo ""

# Get Strapi URL from user
read -p "Enter your Strapi Cloud URL (e.g., https://your-project.strapiapp.com): " STRAPI_URL

if [ -z "$STRAPI_URL" ]; then
    echo "❌ No URL provided. Exiting."
    exit 1
fi

echo ""
echo "📝 Updating files to use: $STRAPI_URL"
echo ""

# Backup files
echo "💾 Creating backups..."
mkdir -p /app/backups/$(date +%Y%m%d_%H%M%S)
BACKUP_DIR="/app/backups/$(date +%Y%m%d_%H%M%S)"

# Update contact.js
FILE="/app/frontend/src/pages/api/contact.js"
if [ -f "$FILE" ]; then
    cp "$FILE" "$BACKUP_DIR/"
    echo "Updating $FILE..."
    
    # Add environment variable usage
    sed -i "s|'http://localhost:1337|process.env.NEXT_PUBLIC_STRAPI_URL || 'http://localhost:1337|g" "$FILE"
    echo "✅ Updated contact.js"
else
    echo "⚠️  $FILE not found"
fi

# Update newsletter.js
FILE="/app/frontend/src/pages/api/newsletter.js"
if [ -f "$FILE" ]; then
    cp "$FILE" "$BACKUP_DIR/"
    echo "Updating $FILE..."
    
    sed -i "s|'http://localhost:1337|process.env.NEXT_PUBLIC_STRAPI_URL || 'http://localhost:1337|g" "$FILE"
    echo "✅ Updated newsletter.js"
else
    echo "⚠️  $FILE not found"
fi

# Update apply.js if exists
FILE="/app/frontend/src/pages/api/apply.js"
if [ -f "$FILE" ]; then
    cp "$FILE" "$BACKUP_DIR/"
    echo "Updating $FILE..."
    
    sed -i "s|'http://localhost:1337|process.env.NEXT_PUBLIC_STRAPI_URL || 'http://localhost:1337|g" "$FILE"
    echo "✅ Updated apply.js"
fi

# Update careers/index.js
FILE="/app/frontend/src/pages/careers/index.js"
if [ -f "$FILE" ]; then
    cp "$FILE" "$BACKUP_DIR/"
    echo "Updating $FILE..."
    
    sed -i "s|'http://localhost:1337|process.env.NEXT_PUBLIC_STRAPI_URL || 'http://localhost:1337|g" "$FILE"
    echo "✅ Updated careers/index.js"
else
    echo "⚠️  $FILE not found"
fi

# Create .env.local with the URL
echo ""
echo "📝 Creating .env.local file..."
cat > /app/frontend/.env.local << EOF
# Strapi CMS URL
NEXT_PUBLIC_STRAPI_URL=$STRAPI_URL

# Email Configuration (update these with your actual values)
EMAIL_USER=your-email@gmail.com
EMAIL_PASS=your-app-password
EMAIL_RECEIVER=info@rounddigital.co

# Optional: Backend URL (if using FastAPI)
# NEXT_PUBLIC_BACKEND_URL=https://your-backend-url.com
EOF

echo "✅ Created .env.local"
echo ""
echo "========================================"
echo "✅ All files updated!"
echo "========================================"
echo ""
echo "📋 What's next:"
echo "1. Review the changes in /app/frontend/src/pages/api/"
echo "2. Update EMAIL_USER, EMAIL_PASS in .env.local"
echo "3. Test locally: npm run dev"
echo "4. Add .env.local to .gitignore (don't commit secrets!)"
echo "5. In Vercel, add these environment variables"
echo ""
echo "Backups saved to: $BACKUP_DIR"
echo "========================================"
