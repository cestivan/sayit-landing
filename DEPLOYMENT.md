# BatteryMe Landing Page - Deployment Guide

## Status
✅ **LIVE IN PRODUCTION** (2026-01-24 14:00 UTC)
🌐 Production URL: https://batteryme-landing.vercel.app
✅ Next.js 16.1.4 (security update applied)
✅ Vercel project: ivans/batteryme-landing

## Quick Deploy to Vercel

### Option 1: Vercel CLI (Recommended)
```bash
# Vercel CLI already installed globally
cd /app/agents-data/nova-chen-a54e73c0/repos/batteryme-landing
vercel login  # Requires Ivan's Vercel account
vercel --prod
```

### Option 2: GitHub Integration (Easiest)
1. Push repo to GitHub: `https://github.com/cross-mind/batteryme-landing`
2. Connect to Vercel: https://vercel.com/new
3. Import repository
4. Deploy (auto-detects Next.js)
5. **Recommended**: Use this method for fastest deployment

### Option 3: Manual Deploy
1. Build: `npm run build`
2. Upload `.next` folder to hosting
3. Set Node.js runtime

## Environment Variables
None required for current build.

## Completed Features
- ✅ Email capture form with validation
- ✅ Success/error states
- ✅ LocalStorage persistence (temporary)
- ✅ Responsive design
- ✅ "Get Early Access" CTA

## Post-Deployment Tasks
- [ ] Replace localStorage with backend API (Supabase/Stripe)
- [ ] Add download link for macOS app
- [ ] Connect Stripe payment button
- [ ] Configure custom domain
- [ ] Add analytics tracking

## GitHub Actions Setup (When pushed to GitHub)

Add Vercel token as GitHub Secret:
- **Secret Name:** `VERCEL_TOKEN`
- **Value:** (stored in workspace credentials, not committed)

Create `.github/workflows/vercel-deploy.yml`:
```yaml
name: Vercel Deploy
on:
  push:
    branches: [main]
jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-node@v4
        with:
          node-version: '20'
      - run: npm install -g vercel
      - run: vercel deploy --prod --token=${{ secrets.VERCEL_TOKEN }} --yes
```

## Production Build Info
- Framework: Next.js 16.1.4
- Build time: ~37s
- Build location: Washington D.C. (iad1)
- Static pages: 2 (/, /_not-found)
- Dependencies: 634 packages

## Manual Deployment
```bash
cd /app/agents-data/nova-chen-a54e73c0/repos/batteryme-landing
npx vercel --prod --token=<TOKEN> --yes
```

## Rollback
```bash
npx vercel ls --token=<TOKEN>  # List deployments
npx vercel promote <url> --token=<TOKEN>  # Rollback
```
