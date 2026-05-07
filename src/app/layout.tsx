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
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'https://ageniqs.com'),
  title: {
    default: 'Ageniqs - Enterprise AI Solutions & Commercialization',
    template: '%s | Ageniqs',
  },
  description: 'Leading AI commercialization company specializing in enterprise solutions. Discover HRTBeat AI and custom agentic systems from the U.S. growth arm of The Data Point.',
  keywords: ['enterprise AI', 'AI commercialization', 'HRTBeat AI', 'agentic AI', 'custom AI solutions', 'The Data Point'],
  authors: [{ name: 'Ageniqs' }],
  creator: 'Ageniqs',
  publisher: 'Ageniqs',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://ageniqs.com',
    siteName: 'Ageniqs',
    title: 'Ageniqs - Enterprise AI Solutions & Commercialization',
    description: 'Leading AI commercialization company specializing in enterprise solutions.',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Ageniqs - Enterprise AI Solutions & Commercialization',
    description: 'Leading AI commercialization company specializing in enterprise solutions.',
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
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={geist.variable}>
      <body className="font-sans">
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
