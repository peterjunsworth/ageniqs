import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

const inter = Inter({
  subsets: ["latin"],
  variable: '--font-inter',
  display: 'swap',
});

const poppins = Poppins({
  subsets: ["latin"],
  weight: ['400', '500', '600', '700', '800'],
  variable: '--font-poppins',
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
    <html lang="en" className={`${inter.variable} ${poppins.variable}`}>
      <body className="font-sans">
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
