'use client';

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-200">
      <nav className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8" aria-label="Global">
        <div className="flex lg:flex-1">
          <Link href="/" className="-m-1.5 p-1.5 flex items-center gap-3">
            <Image
              src="/images/logo.png"
              alt="Ageniqs Logo"
              width={40}
              height={40}
              className="h-10 w-auto"
            />
            <span className="text-xl font-display font-bold text-gray-900">ageniqs</span>
          </Link>
        </div>

        <div className="flex lg:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <span className="sr-only">Toggle menu</span>
            {mobileMenuOpen ? (
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
              </svg>
            )}
          </button>
        </div>

        <div className="hidden lg:flex lg:gap-x-8">
          <Link href="/about" className="text-sm font-semibold leading-6 text-gray-900 hover:text-brand-blue-600 transition-colors">
            About
          </Link>
          <Link href="/solutions" className="text-sm font-semibold leading-6 text-gray-900 hover:text-brand-blue-600 transition-colors">
            Solutions
          </Link>
          <Link href="/contact" className="text-sm font-semibold leading-6 text-gray-900 hover:text-brand-blue-600 transition-colors">
            Contact
          </Link>
        </div>

        <div className="hidden lg:flex lg:flex-1 lg:justify-end">
          <Link
            href="/contact"
            className="rounded-lg bg-gradient-brand px-4 py-2 text-sm font-semibold text-white shadow-sm hover:shadow-glow transition-all duration-200"
          >
            Get Started
          </Link>
        </div>
      </nav>

      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-gray-200">
          <div className="space-y-1 px-6 py-4">
            <Link
              href="/about"
              className="block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
              onClick={() => setMobileMenuOpen(false)}
            >
              About
            </Link>
            <Link
              href="/solutions"
              className="block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
              onClick={() => setMobileMenuOpen(false)}
            >
              Solutions
            </Link>
            <Link
              href="/contact"
              className="block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
              onClick={() => setMobileMenuOpen(false)}
            >
              Contact
            </Link>
            <Link
              href="/contact"
              className="block rounded-lg bg-gradient-brand px-3 py-2 text-base font-semibold text-white text-center mt-4"
              onClick={() => setMobileMenuOpen(false)}
            >
              Get Started
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
