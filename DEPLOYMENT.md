# Deployment Guide

This portfolio can be easily deployed to any modern hosting platform. Here are the recommended options:

## Option 1: Vercel (Recommended)

Vercel is the creator of Next.js and offers seamless React deployment with zero-config.

### Steps:
1. Push your code to GitHub
2. Go to [vercel.com](https://vercel.com)
3. Sign in with GitHub
4. Click "New Project"
5. Select your portfolio repository
6. Vercel auto-detects Vite configuration
7. Click "Deploy"

### Result:
- Live URL like: `https://your-portfolio.vercel.app`
- Automatic deployments on every push to main
- Free SSL certificate
- Global CDN

**Cost**: Free tier available (perfect for portfolio)

---

## Option 2: Netlify

Netlify offers simple deployment with built-in CI/CD.

### Steps:
1. Push your code to GitHub
2. Go to [netlify.com](https://netlify.com)
3. Click "New site from Git"
4. Select GitHub and your repository
5. Set build command: `npm run build`
6. Set publish directory: `dist`
7. Deploy

### Result:
- Live URL like: `https://your-portfolio.netlify.app`
- Automatic deployments
- Free SSL certificate
- Split testing available

**Cost**: Free tier available

---

## Option 3: GitHub Pages

For a truly free option with GitHub Pages.

### Steps:
1. Update `vite.config.ts` to add base path:
```typescript
export default defineConfig({
  base: '/your-repo-name/', // Only if not a user/org page
  // ... rest of config
})
```

2. Add GitHub Actions workflow (`.github/workflows/deploy.yml`):
```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches: [main]

jobs:
  build-and-deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - uses: actions/setup-node@v3
        with:
          node-version: '18'
      - run: npm install
      - run: npm run build
      - uses: peaceiris/actions-gh-pages@v3
        with:
          github_token: ${{ secrets.GITHUB_TOKEN }}
          publish_dir: ./dist
```

3. In GitHub settings, enable GitHub Pages from `gh-pages` branch

### Result:
- Live URL like: `https://username.github.io` or `https://username.github.io/repo-name`
- Completely free
- GitHub Actions included

**Cost**: Free

---

## Option 4: AWS Amplify

Professional option with more features.

### Steps:
1. Go to [AWS Amplify Console](https://console.aws.amazon.com/amplify)
2. Connect your GitHub repository
3. Set build settings:
   - Build command: `npm run build`
   - Build output directory: `dist`
4. Deploy

### Result:
- Custom domain support
- HTTPS by default
- Free tier available
- Analytics included

**Cost**: Free tier + small monthly costs

---

## Custom Domain

Once deployed, you can add a custom domain:

### For Vercel:
1. Go to Project Settings
2. Domains
3. Add your custom domain
4. Follow DNS instructions

### For Netlify:
1. Domain settings
2. Custom domain
3. Follow DNS setup

### Cost:
Domain registration: $10-15/year (GoDaddy, Namecheap, etc.)

---

## Environment Setup

Before deployment, update sensitive information:

1. Contact form email (for notifications)
2. Social media links
3. Project links and repositories
4. Personal information

Update in:
- `src/data/portfolioContent.ts`
- `src/pages/Contact.tsx`
- `src/components/Footer.tsx`

---

## Deployment Checklist

- [ ] Update portfolio content with your information
- [ ] Replace placeholder links with real ones
- [ ] Test build locally: `npm run build`
- [ ] Test production build: `npm run preview`
- [ ] Push to GitHub
- [ ] Deploy to Vercel/Netlify/GitHub Pages
- [ ] Test live URL
- [ ] Add custom domain (optional)
- [ ] Set up analytics (optional)

---

## Performance Optimization After Deployment

1. **Monitor with Lighthouse**
   - Use Chrome DevTools Lighthouse tab
   - Aim for 90+ scores

2. **Enable Analytics**
   - Vercel has built-in analytics
   - Or add Google Analytics

3. **SEO Setup**
   - Update meta tags in `index.html`
   - Create `robots.txt`
   - Create `sitemap.xml`

4. **Monitor Errors**
   - Use Sentry for error tracking
   - Monitor performance

---

## Next Steps After Deployment

1. Share your portfolio URL
2. Update LinkedIn, GitHub, resume
3. Share on Twitter/social media
4. Monitor analytics
5. Keep projects updated
6. Continue learning and adding projects

Your portfolio is now live! 🚀
