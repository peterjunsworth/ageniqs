import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="mx-auto max-w-7xl px-6 py-12 lg:px-8 lg:py-16">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-4">
          <div className="col-span-1 lg:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <span className="text-2xl font-display font-bold">ageniqs</span>
            </div>
            <p className="text-gray-400 mb-4 max-w-md">
              The U.S. growth and commercialization arm of The Data Point, specializing in enterprise AI products and custom agentic solutions.
            </p>
            <p className="text-sm text-gray-500">
              Powered by{' '}
              <a href="https://www.thedatapoint.ai/" target="_blank" rel="noopener noreferrer" className="text-brand-blue-400 hover:text-brand-blue-300 transition-colors">
                The Data Point
              </a>
            </p>
          </div>

          <div>
            <h3 className="text-sm font-semibold mb-4">Company</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/about" className="text-gray-400 hover:text-white transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link href="/solutions" className="text-gray-400 hover:text-white transition-colors">
                  Solutions
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-400 hover:text-white transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold mb-4">Solutions</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/solutions/hrtbeat-ai" className="text-gray-400 hover:text-white transition-colors">
                  HRTBeat AI
                </Link>
              </li>
              <li>
                <Link href="/solutions/custom-ai" className="text-gray-400 hover:text-white transition-colors">
                  Custom AI
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-gray-800 pt-8 flex flex-col sm:flex-row justify-between items-center">
          <p className="text-sm text-gray-400">
            &copy; {new Date().getFullYear()} Ageniqs. All rights reserved.
          </p>
          <div className="flex gap-6 mt-4 sm:mt-0">
            <a href="https://www.ageniqs.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
              <span className="sr-only">Website</span>
              <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z"/>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
