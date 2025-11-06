# VA

Velocity Advisory - 30-Day Playbook Landing Page

## Overview

This repository contains a production-ready landing page for Velocity Advisory's 30-day playbook service. The page is built as a single, self-contained HTML file with inline CSS and JavaScript for easy deployment.

## Features

- **Fully Responsive**: Mobile, tablet, and desktop optimized
- **Interactive Elements**: FAQ accordion, smooth scrolling navigation
- **Professional Design**: Gradient hero section, card layouts, hover effects
- **No Dependencies**: Pure HTML/CSS/JavaScript - no build process required
- **Easy Deployment**: Single file can be deployed anywhere

## Sections

1. **Hero**: Main headline, value proposition, and CTAs
2. **How It Works**: 3-step process overview
3. **What's Inside**: 4 key features of the playbook
4. **Packages & Pricing**: 3 pricing tiers (Essentials, Complete, VIP)
5. **Owner Feedback**: Customer testimonials
6. **FAQ**: Expandable frequently asked questions
7. **Contact**: Contact information and final CTAs

## Deployment

### Option 1: Static File Hosting
Simply upload `index.html` to any web server or static hosting service:
- GitHub Pages
- Netlify
- Vercel
- AWS S3
- Any web server

### Option 2: Local Testing
```bash
# Using Python
python3 -m http.server 8080

# Using Node.js
npx http-server

# Then open http://localhost:8080
```

## Configuration

Before production deployment, update the following:

1. **Stripe Payment Links**: Replace test URLs in the HTML:
   - `https://buy.stripe.com/test_essentials` → Your actual Essentials link
   - `https://buy.stripe.com/test_complete` → Your actual Complete link
   - `https://buy.stripe.com/test_vip` → Your actual VIP link

2. **Privacy/Terms Pages**: Create and link actual privacy and terms pages

## Browser Support

- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)
- Mobile browsers (iOS Safari, Chrome Android)

## License

© 2025 Velocity Advisory