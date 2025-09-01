# 🚀 Netlify Deployment Guide

## 📋 Prerequisites

- GitHub account with your portfolio repository
- Netlify account (free tier available)

## 🔧 Setup Steps

### 1. **Build Your Project Locally**
```bash
npm run build
```

### 2. **Deploy to Netlify**

#### Option A: Drag & Drop (Quick Deploy)
1. Go to [netlify.com](https://netlify.com) and sign in
2. Drag and drop your `.next` folder (created after build) to the Netlify dashboard
3. Your site will be deployed instantly!

#### Option B: Connect GitHub Repository (Recommended)
1. Go to [netlify.com](https://netlify.com) and sign in
2. Click "New site from Git"
3. Choose "GitHub" and authorize Netlify
4. Select your repository: `seiftd/potfiloi`
5. Configure build settings:
   - **Build command**: `npm run build`
   - **Publish directory**: `.next`
   - **Node version**: `18`
6. Click "Deploy site"

### 3. **Environment Variables (Optional)**
If you need environment variables, add them in Netlify:
- Go to Site settings → Environment variables
- Add any required variables

### 4. **Custom Domain (Optional)**
1. Go to Site settings → Domain management
2. Click "Add custom domain"
3. Follow the DNS configuration instructions

## ⚙️ Configuration Files

### `netlify.toml`
- Build settings and redirects
- Security headers
- Cache optimization
- Next.js routing support

### `next.config.js`
- Standard Next.js configuration
- Image optimization enabled
- Security headers configured
- Performance optimizations

## 🔄 Automatic Deployments

Once connected to GitHub:
- Every push to `main` branch triggers automatic deployment
- Preview deployments for pull requests
- Rollback to previous versions available

## 📱 Performance Optimization

- Static files are served from CDN
- Images are cached for 1 year
- JavaScript bundles are optimized
- Security headers are configured
- Next.js App Router optimizations

## 🚨 Troubleshooting

### Build Fails
- Check Node.js version (18+ required)
- Ensure all dependencies are installed
- Check for TypeScript/ESLint errors

### 404 Errors
- Verify `netlify.toml` redirects are correct
- Check that API routes are properly configured
- Ensure Next.js routing is working

### Images Not Loading
- Ensure images are in `public/images/` folder
- Check image paths in components
- Verify image optimization settings

## 🌐 Your Live Site

After deployment, your portfolio will be available at:
- **Netlify URL**: `https://your-site-name.netlify.app`
- **Custom Domain**: `https://yourdomain.com` (if configured)

## 📊 Monitoring

- Netlify provides analytics and performance metrics
- Check site performance in the Netlify dashboard
- Monitor build times and deployment status

## 🔧 Advanced Configuration

### API Routes
Your portfolio includes API routes for:
- `/api/projects/[slug]` - Serve project demos
- `/api/dashboards/[slug]` - Serve dashboard demos

These are automatically handled by Netlify's Next.js support.

### Static Generation
- Home page and static pages are pre-rendered
- API routes are server-rendered on demand
- Images are optimized and cached

---

**Happy Deploying! 🎉**
