# Velocity Advisory - 30-Day Playbooks

A fast, conversion-focused marketing site for Velocity Advisory's productised consulting packages.

## 🚀 Overview

This is a one-page Next.js 14 marketing site that sells three consulting playbook packages:

- **Essentials Playbook** — £149 (one-off)
- **Complete Playbook** — £297 (one-off) ← Primary CTA
- **Accelerator VIP** — £549 (one-off)

## 🛠️ Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS 3
- **Deployment**: Vercel (recommended)
- **Features**: SEO optimized, fully responsive

## 📦 Getting Started

### Prerequisites

- Node.js 18.x or later
- npm or yarn

### Installation

```bash
# Clone the repository
git clone https://github.com/evilgenius51/VA.git
cd VA

# Install dependencies
npm install

# Run development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## 🏗️ Build & Deploy

### Build for Production

```bash
npm run build
npm start
```

### Deploy to Vercel

1. Push your code to GitHub
2. Import your repository on [Vercel](https://vercel.com)
3. Vercel will automatically detect Next.js and configure the build
4. Your site will be live in minutes!

Alternatively, use the Vercel CLI:

```bash
npm i -g vercel
vercel
```

## 🔗 Configuration

### ⚠️ IMPORTANT: Stripe Payment Links

**Before deploying to production**, you MUST update the Stripe payment links in `app/page.tsx`:

1. Create payment links in your Stripe dashboard: https://dashboard.stripe.com/payment-links
2. Replace the placeholder URLs:

```typescript
{
  name: 'Essentials Playbook',
  stripeLink: 'https://buy.stripe.com/your-actual-essentials-link',
  // ...
}
```

The current placeholder URLs (`https://buy.stripe.com/essentials`, etc.) will result in 404 errors.

Replace the placeholder URLs with your actual Stripe payment links.

### Contact Email

The site uses `mailto:hello@velocityadvisory.com` for contact CTAs. Update this in `app/page.tsx` if needed.

### SEO Metadata

Customize SEO settings in `app/layout.tsx`:

```typescript
export const metadata: Metadata = {
  title: 'Your Title',
  description: 'Your Description',
  // ...
}
```

## 📄 Project Structure

```
VA/
├── app/
│   ├── layout.tsx       # Root layout with SEO metadata
│   ├── page.tsx         # Main landing page
│   └── globals.css      # Global styles with Tailwind
├── public/              # Static assets (add images here)
├── next.config.js       # Next.js configuration
├── tailwind.config.js   # Tailwind CSS configuration
├── tsconfig.json        # TypeScript configuration
└── package.json         # Dependencies and scripts
```

## 🎨 Features

- ✅ Responsive design (mobile, tablet, desktop)
- ✅ SEO optimized with metadata
- ✅ Fast page loads with Next.js optimization
- ✅ Three pricing tiers with clear CTAs
- ✅ FAQ section
- ✅ Problem/Solution framework
- ✅ Trust indicators
- ✅ Email contact integration
- ✅ Stripe payment link ready

## 📝 Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm start` - Start production server
- `npm run lint` - Run ESLint (note: currently has known issues with ESLint 8/9 compatibility)

## 🔒 Environment Variables

No environment variables required for basic setup. All configuration is done in the code files.

## 📱 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## 📄 License

ISC

## 👥 Contributing

This is a private project for Velocity Advisory. For questions or support, contact the repository owner.