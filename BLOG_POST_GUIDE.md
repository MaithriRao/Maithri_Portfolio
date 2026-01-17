# 📝 Blog Post Creation Guide

## Overview
Your portfolio has a fully integrated blog system that uses markdown files with frontmatter. This guide will walk you through adding new blog posts step by step.

## 📁 File Structure
```
public/
├── blog-posts/           # Your markdown blog posts go here
│   ├── post-1.md
│   ├── post-2.md
│   └── ...
├── blog-images/          # Blog post images go here (.jpg, .png, .webp)
│   ├── image1.jpg
│   ├── mcp-cover.webp
│   └── ...
src/
├── data/
│   └── blogData.ts       # Main blog display data (for blog list)
└── utils/
    └── blogLoader.ts     # Blog metadata and loading logic
```

## 🚀 Step-by-Step Guide

### Step 1: Create Your Markdown File
1. Navigate to `public/blog-posts/`
2. Create a new `.md` file with a descriptive filename
   - Use lowercase letters and hyphens
   - Example: `implementing-ci-cd-pipeline.md`

### Step 2: Add Frontmatter
Start your markdown file with frontmatter (metadata between `---`):

```markdown
---
title: "Your Blog Post Title"
date: "2025-01-15"
tags: ["DevOps", "CI/CD", "Docker", "Automation"]
categories: ["DevOps"]
summary: "A brief summary of what this post covers. Keep it under 150 characters for best display."
readTime: "8 min read"
---

# Your Blog Post Title

Your content starts here...
```

### Step 3: Add Images (Optional)
1. Put images in `public/blog-images/` **only if you have specific images for your post**
2. Supported formats: `.jpg`, `.png`, `.webp`, `.svg`
3. Use WebP format for better performance when possible
4. Reference them in your markdown using:
   ```markdown
   ![Alt text](/blog-images/your-image.webp)
   ```

**✨ No cover image? No problem!** The system will automatically show beautiful category icons:
- **DevOps**: ⚙️ Gear icon
- **AI/Artificial Intelligence**: 🤖 Robot icon  
- **Networking**: 🌐 Globe icon
- **Linux/System Administration**: 🐧 Penguin icon
- **Other categories**: 📝 Document icon

### Step 4: Update Blog Data Files
You need to update **TWO** files to register your new blog post:

#### A. Update `src/data/blogData.ts`
**Just add your post at the TOP of the array** - IDs are auto-generated!

```typescript
const blogPostsData: BlogPostData[] = [
  // 🆕 ADD YOUR NEW POST HERE (no ID needed!)
  {
    title: "Your New Blog Post Title",
    excerpt: "A compelling excerpt that appears in the blog list (keep under 200 chars)",
    date: "2025-09-07",
    readTime: "8 min read",
    tags: ["AI", "OpenAI", "Function Calling"],
    category: "Artificial Intelligence", // Single category for display
    slug: "your-blog-post-filename", // Must match your .md filename
    image: "/blog-images/your-cover-image.webp", // ✨ OPTIONAL! Remove this line to show category icon
    featured: true // Set to true for homepage display
  },
  // ...existing posts (IDs auto-generated: new post gets ID 1, others shift down)
];
```

#### B. Update `src/utils/blogLoader.ts`
**Add your post at the TOP of the array** - IDs are auto-generated!

```typescript
const blogPostsRawData: Omit<BlogPostMetaData, 'content'>[] = [
  // 🆕 ADD YOUR NEW POST HERE (no ID needed!)
  {
    title: "Your New Blog Post Title",
    date: "2025-09-07",
    summary: "Summary from your markdown frontmatter",
    tags: ["AI", "OpenAI", "Function Calling"],
    categories: ["AI"], // Can be multiple categories as array
    slug: "your-blog-post-filename", // Must match exactly
    readTime: "8 min read"
  },
  // ...existing posts (IDs auto-generated automatically)
];
```

#### ✨ **No More ID Management!**
- ✅ **Add new posts at the TOP** of both arrays
- ✅ **IDs are automatically generated** based on position (1, 2, 3, etc.)
- ✅ **No need to reorder** or renumber existing posts
- ✅ **Newer posts automatically get lower IDs** (appear first)

### Step 5: Test Locally
```bash
# Install dependencies (if first time)
npm install

# Test the build process
npm run build

# Start development server
npm run dev

# Visit your blog at:
# http://localhost:5173/blogs (blog list)
# http://localhost:5173/blog/your-post-slug (individual post)
```

**Important**: Always test the build process with `npm run build` to catch any TypeScript or configuration errors before deploying.

### Step 6: Deploy to Production

#### Option A: Automatic Deployment (Recommended)
If your repository is connected to Vercel:

```bash
# Add all changes to git
git add .

# Commit with descriptive message
git commit -m "feat: add blog post about [topic]

- Add markdown file: your-post-filename.md
- Update blog data registry
- Add cover image: your-image.webp"

# Push to GitHub (triggers automatic deployment)
git push origin master
```

#### Option B: Manual Deployment
If you need to deploy manually to Vercel:

```bash
# Install Vercel CLI (if not installed)
npm i -g vercel

# Build the project
npm run build

# Deploy to Vercel
vercel --prod

# Or deploy to preview first
vercel
```

#### Deployment Checklist
- [ ] Build completes successfully (`npm run build`)
- [ ] No TypeScript errors
- [ ] Cover image exists in `/public/blog-images/`
- [ ] Slug matches between filename and both data files
- [ ] IDs are consistent across data files
- [ ] All commits are pushed to `master` branch

## 📝 Markdown Features Supported

### Tables
```markdown
| Column 1 | Column 2 | Column 3 |
|----------|----------|----------|
| Data 1   | Data 2   | Data 3   |
| Data 4   | Data 5   | Data 6   |
```

### Code Blocks with Syntax Highlighting
```markdown
```javascript
function example() {
  console.log("Hello World!");
}
```
```

### Images
```markdown
![Description](/blog-images/image-name.jpg)
```

### Links
```markdown
[Link text](https://example.com)
```

### Lists
```markdown
- Bullet point 1
- Bullet point 2

1. Numbered item 1
2. Numbered item 2
```

## 🎨 Styling Guidelines

### Categories
Use these predefined categories for consistent styling:
- `"DevOps"` - Shows ⚙️ icon
- `"Artificial Intelligence"` or `"AI"` - Shows 🤖 icon  
- `"Networking"` - Shows 🌐 icon
- `"System Administration"` or `"Linux"` - Shows 🐧 icon
- `"Web Development"` - Shows 💻 icon
- Other categories show 📝 icon

### Image Formats
- **Preferred**: `.webp` (best compression and quality)
- **Supported**: `.jpg`, `.jpeg`, `.png`, `.svg`
- **Naming**: Use descriptive names with hyphens (e.g., `mcp-cover.webp`)
- **Size**: Optimize images to under 500KB when possible

### Tags
Keep tags relevant and consistent:
- Use existing tags when possible
- Capitalize properly (e.g., "DevOps", "CI/CD", "Docker")
- Limit to 3-5 tags per post

### Read Time
Estimate based on:
- ~200 words per minute reading speed
- Account for code examples and images
- Common formats: "5 min read", "10 min read"

## 🔧 Troubleshooting

### Post Not Appearing?
1. Check filename matches slug in **both** `blogData.ts` and `blogLoader.ts`
2. Ensure frontmatter format is correct (valid YAML)
3. Verify file is in `public/blog-posts/`
4. Confirm IDs are consistent across both data files
5. Check browser console for errors
6. Run `npm run build` to catch TypeScript errors

### Images Not Loading?
1. Verify images are in `public/blog-images/`
2. Check image paths start with `/blog-images/`
3. Ensure image file extensions match exactly (case-sensitive)
4. Try different formats (.webp, .jpg, .png)

### Build Errors?
1. Check frontmatter syntax (proper YAML format between `---`)
2. Ensure all required fields are present in frontmatter
3. Verify no syntax errors in `blogData.ts` and `blogLoader.ts`
4. Confirm TypeScript types match the interfaces
5. Check for missing commas in array objects

## 📋 Pre-Deployment Checklist

- [ ] Markdown file created in `public/blog-posts/`
- [ ] Frontmatter includes all required fields (title, date, tags, categories, summary, readTime)
- [ ] Cover image added to `public/blog-images/` (preferably .webp format)
- [ ] Image paths use `/blog-images/` prefix
- [ ] Blog post added to `src/data/blogData.ts` with correct ID and slug
- [ ] Blog post added to `src/utils/blogLoader.ts` with matching ID and slug
- [ ] IDs are consistent between both data files
- [ ] Local testing completed successfully (`npm run dev`)
- [ ] Build runs without errors (`npm run build`)
- [ ] Blog post accessible at correct URLs
- [ ] All changes committed and pushed to `master` branch
- [ ] Automatic deployment completed (check Vercel dashboard)

## 🚀 Quick Reference: Complete Workflow

```bash
# 1. Create the blog post
touch public/blog-posts/your-new-post.md

# 2. Add your cover image  
# Copy your-image.webp to public/blog-images/

# 3. Edit the blog post with frontmatter and content
# Edit public/blog-posts/your-new-post.md

# 4. Register the blog post in both data files
# Add to TOP of src/data/blogData.ts (no ID needed!)
# Add to TOP of src/utils/blogLoader.ts (no ID needed!)

# 5. Test locally
npm run build
npm run dev

# 6. Deploy
git add .
git commit -m "feat: add blog post about [topic]"
git push origin master
```

## 🎯 **Super Simple Workflow:**

1. **Create** markdown file: `your-post.md`
2. **Add** cover image: `your-image.webp`  
3. **Add to TOP** of `blogData.ts` (no ID!)
4. **Add to TOP** of `blogLoader.ts` (no ID!)
5. **Test & Deploy** 🚀

**That's it!** No more ID management, no more reordering! ✨

## 🌐 Live URLs
After deployment, your blog will be available at:
- Blog list: `https://maithri-rao.com/blogs`
- Individual posts: `https://maithri-rao.com/blog/your-post-slug`

## 📞 Need Help?
If you encounter issues:
1. Check the browser console for errors
2. Verify all files are in correct locations
3. Ensure proper markdown syntax
4. Test locally before deploying

Happy blogging! 🎉
