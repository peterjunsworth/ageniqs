# Ageniqs Website

Modern, enterprise-grade marketing website for Ageniqs built with Next.js 15, TypeScript, Tailwind CSS, and Resend.

## Overview

Ageniqs is the U.S. growth and commercialization arm of [The Data Point](https://www.thedatapoint.ai/), specializing in enterprise AI commercialization and custom agentic solutions.

## Tech Stack

- **Framework**: Next.js 16 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS with custom design system
- **Email**: Resend for transactional emails
- **Validation**: Zod for form schemas
- **Email Templates**: React Email components

## Getting Started

### Prerequisites

- Node.js 18+ and npm
- A Resend API key (sign up at [resend.com](https://resend.com))

### Installation

1. Install dependencies:
```bash
npm install
```

2. Set up environment variables:
```bash
cp .env.example .env.local
```

3. Edit `.env.local` and add your Resend API key:
```env
RESEND_API_KEY=re_your_actual_api_key_here
RESEND_FROM_EMAIL=hello@ageniqs.com
RESEND_ADMIN_EMAIL=admin@ageniqs.com
NEXT_PUBLIC_SITE_URL=http://localhost:3000
```

### Development

Run the development server:
```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build for Production

```bash
npm run build
npm start
```

## Project Structure

```
src/
├── app/                          # Next.js App Router pages
│   ├── about/                    # About page
│   ├── solutions/                # Solutions pages
│   │   ├── hrtbeat-ai/          # HRTBeat AI product page
│   │   └── custom-ai/           # Custom AI solutions page
│   ├── contact/                  # Contact page with form
│   ├── api/
│   │   └── contact/             # Contact form API endpoint
│   ├── layout.tsx               # Root layout with metadata
│   ├── page.tsx                 # Home page
│   ├── sitemap.ts               # Dynamic sitemap
│   └── robots.ts                # Robots.txt
├── components/
│   ├── layout/
│   │   ├── Header.tsx           # Navigation header
│   │   └── Footer.tsx           # Site footer
│   ├── ui/
│   │   ├── Input.tsx            # Form input component
│   │   └── TextArea.tsx         # Form textarea component
│   └── forms/
│       └── ContactForm.tsx      # Contact form with validation
├── lib/
│   ├── email/
│   │   ├── resend.ts            # Resend client setup
│   │   └── templates/
│   │       ├── contact-notification.tsx  # Admin email
│   │       └── contact-confirmation.tsx  # User email
│   └── validations/
│       └── schemas.ts           # Zod validation schemas
└── types/
    └── index.ts                 # TypeScript types
```

## Features

### Pages

- **Home**: Hero section, value propositions, products preview, CTA sections
- **About**: Company story, mission, relationship with The Data Point
- **Solutions**: Overview of HRTBeat AI and Custom AI offerings
- **HRTBeat AI**: Detailed product page with features and benefits
- **Custom AI**: Bespoke AI development services
- **Contact**: Contact form with email integration

### Contact Form

The contact form includes:
- Client-side validation with Zod
- Real-time error feedback
- Email notifications via Resend (admin notification + user confirmation)
- Success/error states
- Responsive design

### SEO

- Metadata API for all pages
- OpenGraph and Twitter Card support
- Dynamic sitemap generation
- Robots.txt configuration
- Semantic HTML structure

### Design System

- Brand colors: Blue (#2E6FFF) to Purple (#A855F7) gradient
- Custom fonts: Inter (body), Poppins (headings)
- Responsive breakpoints (mobile, tablet, desktop)
- Consistent spacing and typography scales
- Hover effects and transitions

## Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Import the project in Vercel
3. Add environment variables in Vercel dashboard:
   - `RESEND_API_KEY`
   - `RESEND_FROM_EMAIL`
   - `RESEND_ADMIN_EMAIL`
   - `NEXT_PUBLIC_SITE_URL`
4. Deploy

### Other Platforms

The app can be deployed to any Node.js hosting platform that supports Next.js:
- Netlify
- AWS Amplify
- Digital Ocean App Platform
- Render
- Railway

## Configuration

### Resend Email Setup

1. Sign up at [resend.com](https://resend.com)
2. Verify your domain for production use
3. Generate an API key
4. Update `.env.local` with your credentials

For development, you can use Resend's test mode without domain verification.

### Customization

#### Brand Colors

Edit `tailwind.config.ts` to update brand colors:
```typescript
colors: {
  brand: {
    blue: { ... },
    purple: { ... },
  }
}
```

#### Contact Form Fields

Modify `src/lib/validations/schemas.ts` to add/remove fields.

#### Email Templates

Customize email templates in `src/lib/email/templates/`.

## Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm start` - Start production server
- `npm run lint` - Run ESLint

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

Copyright © 2026 Ageniqs. All rights reserved.

## Support

For questions or support:
- Email: hello@ageniqs.com
- Website: [www.ageniqs.com](https://www.ageniqs.com)
