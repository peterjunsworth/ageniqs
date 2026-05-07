import type { Metadata } from "next";
import ContactForm from "@/components/forms/ContactForm";

export const metadata: Metadata = {
  title: 'Contact Ageniqs - Get Started with Enterprise AI Solutions',
  description: 'Ready to transform your business with AI? Contact Ageniqs for a consultation on HRTBeat AI or custom agentic solutions.',
};

export default function ContactPage() {
  return (
    <div className="min-h-screen">
      <section className="relative overflow-hidden bg-gradient-to-br from-brand-blue-50 via-white to-brand-purple-50 py-20 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h1 className="text-4xl font-display font-bold tracking-tight text-gray-900 sm:text-6xl">
              Let's Build Something <span className="text-gradient">Amazing Together</span>
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Ready to transform your business with AI? Get in touch with our team to discuss your project.
            </p>
          </div>
        </div>
      </section>

      <section className="py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-6xl">
            <div className="grid grid-cols-1 gap-12 lg:grid-cols-5">
              <div className="lg:col-span-3">
                <h2 className="text-2xl font-display font-bold text-gray-900 mb-6">
                  Send Us a Message
                </h2>
                <ContactForm />
              </div>

              <div className="lg:col-span-2">
                <div className="lg:pl-8">
                  <h2 className="text-2xl font-display font-bold text-gray-900 mb-6">
                    Contact Information
                  </h2>

                  <div className="space-y-6">
                    <div>
                      <h3 className="text-sm font-semibold text-gray-900 mb-2">Email</h3>
                      <a href="mailto:hello@ageniqs.com" className="text-brand-blue-600 hover:text-brand-blue-700 transition-colors">
                        hello@ageniqs.com
                      </a>
                    </div>

                    <div>
                      <h3 className="text-sm font-semibold text-gray-900 mb-2">Website</h3>
                      <a href="https://www.ageniqs.com" target="_blank" rel="noopener noreferrer" className="text-brand-blue-600 hover:text-brand-blue-700 transition-colors">
                        www.ageniqs.com
                      </a>
                    </div>

                    <div className="pt-6 border-t border-gray-200">
                      <h3 className="text-sm font-semibold text-gray-900 mb-4">What to Expect</h3>
                      <ul className="space-y-3">
                        <li className="flex items-start">
                          <svg className="h-6 w-6 text-brand-blue-500 mr-3 flex-shrink-0" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                          </svg>
                          <span className="text-gray-600">Response within 1-2 business days</span>
                        </li>
                        <li className="flex items-start">
                          <svg className="h-6 w-6 text-brand-blue-500 mr-3 flex-shrink-0" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                          </svg>
                          <span className="text-gray-600">Initial consultation to understand your needs</span>
                        </li>
                        <li className="flex items-start">
                          <svg className="h-6 w-6 text-brand-blue-500 mr-3 flex-shrink-0" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                          </svg>
                          <span className="text-gray-600">Tailored solution recommendations</span>
                        </li>
                        <li className="flex items-start">
                          <svg className="h-6 w-6 text-brand-blue-500 mr-3 flex-shrink-0" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                          </svg>
                          <span className="text-gray-600">No obligation, no sales pressure</span>
                        </li>
                      </ul>
                    </div>

                    <div className="pt-6 border-t border-gray-200">
                      <h3 className="text-sm font-semibold text-gray-900 mb-4">Powered By</h3>
                      <p className="text-gray-600 mb-2">
                        Ageniqs is the U.S. growth arm of{' '}
                        <a href="https://www.thedatapoint.ai/" target="_blank" rel="noopener noreferrer" className="text-brand-blue-600 hover:text-brand-blue-700 font-semibold transition-colors">
                          The Data Point
                        </a>
                        , bringing enterprise-grade AI engineering to market.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
