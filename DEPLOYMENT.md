# Deployment Checklist

## Before Going Live

### 1. Configure Stripe Payment Links
- [ ] Go to https://dashboard.stripe.com/payment-links
- [ ] Create three payment links:
  - Essentials Playbook: £149
  - Complete Playbook: £297
  - Accelerator VIP: £549
- [ ] Update `app/page.tsx` lines 14, 29, and 45 with actual URLs
- [ ] Test each payment link

### 2. Verify Contact Email
- [ ] Confirm `hello@velocityadvisory.com` is the correct contact email
- [ ] If different, update in `app/page.tsx` (appears 4 times)

### 3. Deploy to Vercel
- [ ] Push final changes to GitHub
- [ ] Go to https://vercel.com
- [ ] Import the repository
- [ ] Vercel will auto-detect Next.js and deploy
- [ ] Custom domain setup (optional)

### 4. Post-Deployment Testing
- [ ] Test all three "Get Started" buttons
- [ ] Test all "Get in Touch" / "Contact Us" mailto links
- [ ] Verify responsive design on mobile
- [ ] Check page load speed
- [ ] Test SEO metadata (view page source)

### 5. Optional Enhancements
- [ ] Add Google Analytics
- [ ] Add social media meta tags (Twitter, Facebook)
- [ ] Add testimonials section
- [ ] Add case studies
- [ ] Implement A/B testing for CTAs

## Quick Deploy Commands

```bash
# Ensure all changes are committed
git status

# Deploy with Vercel CLI
npm i -g vercel
vercel

# Or push to GitHub and deploy via Vercel dashboard
git push origin main
```

## Environment Variables
None required for basic setup.

## Support
For issues, contact the repository maintainer.
