#!/bin/bash

# Blog Migration Helper Script
# This script helps you prepare your blog posts for hosting

echo "🚀 Blog Migration Helper for maithri's Portfolio"
echo "================================================"

# Create directories for processed blog content
mkdir -p /home/maithri/Repo/ab-portfolio/public/blog-posts
mkdir -p /home/maithri/Repo/ab-portfolio/public/blog-images

echo "📁 Directories created:"
echo "   - /public/blog-posts/ (for processed markdown)"
echo "   - /public/blog-images/ (for blog images)"

# Copy all blog posts
echo "📄 Copying blog posts..."
cp /home/maithri/Repo/personal-blog/content/posts/*.md /home/maithri/Repo/ab-portfolio/public/blog-posts/

# Copy all images
echo "🖼️  Copying images..."
cp /home/maithri/Repo/personal-blog/static/uploads/* /home/maithri/Repo/ab-portfolio/public/blog-images/ 2>/dev/null || echo "   No additional images found"
cp /home/maithri/Repo/personal-blog/static/images/* /home/maithri/Repo/ab-portfolio/public/blog-images/ 2>/dev/null || echo "   No additional images found"

echo "✅ Migration completed!"
echo ""
echo "📝 Next Steps:"
echo "   1. Your blog posts are in: public/blog-posts/"
echo "   2. Your images are in: public/blog-images/"
echo "   3. Host your blog posts on a platform like:"
echo "      - GitHub Pages"
echo "      - Netlify"
echo "      - Vercel"
echo "      - Hugo hosting"
echo "   4. Update the blog links in BlogsSection.tsx with your hosted URLs"
echo ""
echo "🔗 Blog Posts Found:"
ls -1 /home/maithri/Repo/ab-portfolio/public/blog-posts/ | head -10
