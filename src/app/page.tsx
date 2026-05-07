import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  alternates: {
    canonical: 'https://www.ageniqs.com',
  },
  openGraph: {
    url: 'https://www.ageniqs.com',
    type: 'website',
  },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'Ageniqs',
  url: 'https://www.ageniqs.com',
  logo: 'https://www.ageniqs.com/images/logo-white.png',
  description: 'Ageniqs is the U.S. growth arm of The Data Point, specializing in enterprise AI commercialization, HRTBeat AI, and custom agentic solutions.',
  foundingDate: '2024',
  sameAs: [
    'https://www.thedatapoint.ai',
  ],
  address: {
    '@type': 'PostalAddress',
    addressCountry: 'US',
  },
  contactPoint: {
    '@type': 'ContactPoint',
    contactType: 'Sales',
    email: 'hello@ageniqs.com',
  },
  parentOrganization: {
    '@type': 'Organization',
    name: 'The Data Point',
    url: 'https://www.thedatapoint.ai',
  },
  knowsAbout: [
    'Enterprise AI',
    'AI Commercialization',
    'HRTBeat AI',
    'Agentic AI',
    'Custom AI Solutions',
    'AI Automation',
  ],
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <div className="min-h-screen">
      <section className="relative overflow-hidden bg-gradient-to-br from-gray-900 via-gray-950 to-gray-900 py-20 sm:py-32">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-brand-blue-900/20 via-transparent to-transparent"></div>
        <div className="mx-auto max-w-7xl px-6 lg:px-8 relative">
          <div className="mx-auto max-w-2xl text-center">
            <div className="flex justify-center mb-8">
              <Image
                src="/images/logo-white.png"
                alt="Ageniqs"
                width={280}
                height={280}
                className="h-32 w-auto"
                priority
              />
            </div>
            <h1 className="text-4xl font-display font-bold tracking-tight text-white sm:text-6xl">
              Transform Your Enterprise with{' '}
              <span className="text-gradient">AI That Delivers Results</span>
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-400">
              Ageniqs is the U.S. growth arm of The Data Point, specializing in enterprise AI commercialization and custom agentic solutions.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <a
                href="/solutions"
                className="rounded-lg bg-gradient-brand px-6 py-3 text-sm font-semibold text-white shadow-lg hover:shadow-glow transition-all duration-200"
              >
                Explore Our Solutions
              </a>
              <a
                href="/contact"
                className="text-sm font-semibold leading-6 text-white border border-gray-700 px-6 py-3 rounded-lg hover:border-brand-blue-500 hover:bg-gray-800/50 transition-all duration-200"
              >
                Contact Us <span aria-hidden="true">→</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 sm:py-32 bg-gray-950">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-display font-bold tracking-tight text-white sm:text-4xl">
              Why Choose Ageniqs
            </h2>
            <p className="mt-4 text-lg leading-8 text-gray-400">
              We bridge the gap between advanced AI engineering and real-world business adoption
            </p>
          </div>
          <div className="mx-auto mt-16 max-w-7xl">
            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
              <div className="rounded-2xl border border-gray-800 bg-gray-900/50 p-8 hover:shadow-card-hover hover:border-gray-700 transition-all duration-200">
                <div className="inline-flex items-center justify-center rounded-lg bg-brand-blue-500/10 p-3 mb-4">
                  <svg className="h-6 w-6 text-brand-blue-400" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75m-3-7.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285Z" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">Enterprise-Grade AI</h3>
                <p className="text-gray-400">Production-ready AI systems designed for real operational environments</p>
              </div>

              <div className="rounded-2xl border border-gray-800 bg-gray-900/50 p-8 hover:shadow-card-hover hover:border-gray-700 transition-all duration-200">
                <div className="inline-flex items-center justify-center rounded-lg bg-brand-purple-500/10 p-3 mb-4">
                  <svg className="h-6 w-6 text-brand-purple-400" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.325.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 0 1 1.37.49l1.296 2.247a1.125 1.125 0 0 1-.26 1.431l-1.003.827c-.293.241-.438.613-.43.992a7.723 7.723 0 0 1 0 .255c-.008.378.137.75.43.991l1.004.827c.424.35.534.955.26 1.43l-1.298 2.247a1.125 1.125 0 0 1-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.47 6.47 0 0 1-.22.128c-.331.183-.581.495-.644.869l-.213 1.281c-.09.543-.56.94-1.11.94h-2.594c-.55 0-1.019-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 0 1-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 0 1-1.369-.49l-1.297-2.247a1.125 1.125 0 0 1 .26-1.431l1.004-.827c.292-.24.437-.613.43-.991a6.932 6.932 0 0 1 0-.255c.007-.38-.138-.751-.43-.992l-1.004-.827a1.125 1.125 0 0 1-.26-1.43l1.297-2.247a1.125 1.125 0 0 1 1.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.086.22-.128.332-.183.582-.495.644-.869l.214-1.28Z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">Custom Solutions</h3>
                <p className="text-gray-400">Bespoke agentic AI systems tailored to your specific business needs</p>
              </div>

              <div className="rounded-2xl border border-gray-800 bg-gray-900/50 p-8 hover:shadow-card-hover hover:border-gray-700 transition-all duration-200">
                <div className="inline-flex items-center justify-center rounded-lg bg-brand-blue-500/10 p-3 mb-4">
                  <svg className="h-6 w-6 text-brand-blue-400" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 0 1 3 19.875v-6.75ZM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V8.625ZM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V4.125Z" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">Proven ROI</h3>
                <p className="text-gray-400">Measurable operational and revenue outcomes that drive business growth</p>
              </div>

              <div className="rounded-2xl border border-gray-800 bg-gray-900/50 p-8 hover:shadow-card-hover hover:border-gray-700 transition-all duration-200">
                <div className="inline-flex items-center justify-center rounded-lg bg-brand-purple-500/10 p-3 mb-4">
                  <svg className="h-6 w-6 text-brand-purple-400" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 0 0 3.741-.479 3 3 0 0 0-4.682-2.72m.94 3.198.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0 1 12 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 0 1 6 18.719m12 0a5.971 5.971 0 0 0-.941-3.197m0 0A5.995 5.995 0 0 0 12 12.75a5.995 5.995 0 0 0-5.058 2.772m0 0a3 3 0 0 0-4.681 2.72 8.986 8.986 0 0 0 3.74.477m.94-3.197a5.971 5.971 0 0 0-.94 3.197M15 6.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm6 3a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Zm-13.5 0a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Z" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">Expert Support</h3>
                <p className="text-gray-400">Backed by The Data Point's engineering expertise and global reach</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 sm:py-32 bg-gray-900">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center mb-16">
            <h2 className="text-3xl font-display font-bold tracking-tight text-white sm:text-4xl">
              Our Solutions
            </h2>
            <p className="mt-4 text-lg leading-8 text-gray-400">
              From packaged AI products to custom agentic systems
            </p>
          </div>

          <div className="mx-auto max-w-5xl">
            <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
              <a href="/solutions/hrtbeat-ai" className="group relative overflow-hidden rounded-2xl border border-gray-800 bg-gray-950/50 p-8 hover:border-brand-blue-500 hover:shadow-2xl hover:shadow-brand-blue-500/10 transition-all duration-300">
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-brand opacity-10 rounded-bl-full"></div>
                <h3 className="text-2xl font-display font-bold text-white mb-4 group-hover:text-gradient transition-all">
                  HRTBeat AI
                </h3>
                <p className="text-gray-400 mb-6">
                  Transform HR operations with AI-powered insights, automation, and intelligent workflows designed for modern enterprises.
                </p>
                <span className="inline-flex items-center text-brand-blue-400 font-semibold group-hover:gap-2 transition-all">
                  Learn More
                  <svg className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                  </svg>
                </span>
              </a>

              <a href="/solutions/custom-ai" className="group relative overflow-hidden rounded-2xl border border-gray-800 bg-gray-950/50 p-8 hover:border-brand-purple-500 hover:shadow-2xl hover:shadow-brand-purple-500/10 transition-all duration-300">
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-brand-purple-400 to-brand-blue-400 opacity-10 rounded-bl-full"></div>
                <h3 className="text-2xl font-display font-bold text-white mb-4 group-hover:text-gradient transition-all">
                  Custom AI Solutions
                </h3>
                <p className="text-gray-400 mb-6">
                  Bespoke agentic AI systems engineered for your unique business challenges, combining automation and intelligent decision-making.
                </p>
                <span className="inline-flex items-center text-brand-purple-400 font-semibold group-hover:gap-2 transition-all">
                  Start Your Project
                  <svg className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                  </svg>
                </span>
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 sm:py-32 bg-gray-950">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-display font-bold tracking-tight text-white sm:text-4xl mb-4">
              Ready to Transform Your Business?
            </h2>
            <p className="text-lg leading-8 text-gray-400 mb-10">
              Let's discuss how Ageniqs can help you operationalize AI and drive measurable results.
            </p>
            <a
              href="/contact"
              className="inline-block rounded-lg bg-gradient-brand px-8 py-4 text-base font-semibold text-white shadow-lg hover:shadow-glow transition-all duration-200"
            >
              Get Started Today
            </a>
          </div>
        </div>
      </section>
    </div>
    </>
  );
}
