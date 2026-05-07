import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

const geist = localFont({
  src: [
    {
      path: '../../node_modules/geist/dist/fonts/geist-sans/Geist-Regular.woff2',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../../node_modules/geist/dist/fonts/geist-sans/Geist-Medium.woff2',
      weight: '500',
      style: 'normal',
    },
    {
      path: '../../node_modules/geist/dist/fonts/geist-sans/Geist-SemiBold.woff2',
      weight: '600',
      style: 'normal',
    },
    {
      path: '../../node_modules/geist/dist/fonts/geist-sans/Geist-Bold.woff2',
      weight: '700',
      style: 'normal',
    },
  ],
  variable: '--font-geist',
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'https://www.ageniqs.com'),
  title: {
    default: 'Ageniqs - Enterprise AI Solutions & Commercialization',
    template: '%s | Ageniqs',
  },
  description: 'Ageniqs is the U.S. growth arm of The Data Point, specializing in enterprise AI commercialization, HRTBeat AI, and custom agentic solutions that deliver measurable results.',
  keywords: ['Enterprise AI', 'AI Solutions', 'AI Commercialization', 'HRTBeat AI', 'Agentic AI', 'Custom AI Solutions', 'The Data Point', 'AI Automation', 'Enterprise Automation', 'AI Consulting', 'HR AI', 'AI Integration', 'Machine Learning', 'AI Development', 'Business Intelligence AI', 'Workflow Automation'],
  authors: [{ name: 'Ageniqs' }],
  creator: 'Ageniqs',
  publisher: 'Ageniqs',
  applicationName: 'Ageniqs',
  category: 'Technology',
  classification: 'Enterprise AI Solutions',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://www.ageniqs.com',
    siteName: 'Ageniqs',
    title: 'Ageniqs - Enterprise AI Solutions & Commercialization',
    description: 'Transform your enterprise with AI that delivers results. From HRTBeat AI to custom agentic solutions, powered by The Data Point engineering expertise.',
    images: [
      {
        url: '/images/logo-white.png',
        width: 280,
        height: 280,
        alt: 'Ageniqs - Enterprise AI Solutions',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Ageniqs - Enterprise AI Solutions & Commercialization',
    description: 'Transform your enterprise with AI that delivers results. From HRTBeat AI to custom agentic solutions, powered by The Data Point engineering expertise.',
    images: ['/images/logo-white.png'],
    creator: '@ageniqs',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: [
      { url: '/images/favicon.png', type: 'image/png', sizes: '512x512' },
      { url: '/favicon.ico', sizes: '32x32' },
    ],
    shortcut: [{ url: '/images/favicon.png', type: 'image/png' }],
    apple: [
      { url: '/apple-touch-icon.png', sizes: '512x512', type: 'image/png' },
    ],
  },
  manifest: '/manifest.json',
  alternates: {
    canonical: 'https://www.ageniqs.com',
  },
  verification: {
    google: '',
    yandex: '',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Ageniqs',
    url: 'https://www.ageniqs.com',
    logo: 'https://www.ageniqs.com/images/logo-white.png',
    description: 'Enterprise AI solutions specializing in AI commercialization, HRTBeat AI, and custom agentic solutions.',
    address: {
      '@type': 'PostalAddress',
      addressCountry: 'US',
    },
    sameAs: [
      'https://www.thedatapoint.ai/',
    ],
    parentOrganization: {
      '@type': 'Organization',
      name: 'The Data Point',
      url: 'https://www.thedatapoint.ai/',
    },
    contactPoint: {
      '@type': 'ContactPoint',
      contactType: 'Sales',
      url: 'https://www.ageniqs.com/contact',
    },
    foundingDate: '2024',
    knowsAbout: [
      'Artificial Intelligence',
      'Machine Learning',
      'Enterprise Software',
      'AI Automation',
      'Custom AI Solutions',
      'Agentic AI',
      'HR Technology',
    ],
  };

  return (
    <html lang="en" className={geist.variable}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="font-sans">
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
