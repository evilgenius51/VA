# Velocity Advisory — 30-Day Playbooks

A fast, conversion-focused one-page marketing site built with Next.js 14, TypeScript, and Tailwind CSS.

## Features

- **Three Productised Consulting Packages:**
  - Essentials Playbook — £149 (one-off)
  - Complete Playbook — £297 (one-off) ← primary CTA
  - Accelerator VIP — £549 (one-off)

- **Technology Stack:**
  - Next.js 14 (App Router)
  - TypeScript
  - Tailwind CSS
  - SEO metadata
  - Responsive design
  - Vercel deployment ready

- **Conversion-Focused:**
  - Clear CTAs with Stripe payment links
  - Email contact via mailto links
  - No backend required

## Getting Started

### Prerequisites

- Node.js 18+ installed
- npm or yarn package manager

### Installation

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

Open [http://localhost:3000](http://localhost:3000) to view the site in your browser.

## Deployment

This site is configured for deployment on Vercel:

1. Push your code to GitHub
2. Import the project in Vercel
3. Deploy with one click

The `vercel.json` configuration is already set up for optimal deployment.

## Project Structure

```
/
├── app/
│   ├── layout.tsx      # Root layout with SEO metadata
│   ├── page.tsx        # Main landing page
│   └── globals.css     # Global styles
├── public/             # Static assets (if needed)
├── next.config.js      # Next.js configuration
├── tailwind.config.ts  # Tailwind CSS configuration
└── tsconfig.json       # TypeScript configuration
```

## Customization

### Update Stripe Payment Links

Edit the payment links in `app/page.tsx`:

```tsx
// Line numbers may vary - search for "buy.stripe.com"
href="https://buy.stripe.com/essentials"
href="https://buy.stripe.com/complete"
href="https://buy.stripe.com/vip"
```

### Update Contact Email

Replace `hello@velocityadvisory.com` with your actual email address in `app/page.tsx`.

### Modify Pricing

Update the pricing tiers, features, and descriptions in `app/page.tsx`.

## License

© 2024 Velocity Advisory. All rights reserved.