import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: 'AI Solutions for Enterprise | Ageniqs',
  description: 'Discover enterprise AI solutions from Ageniqs. From HRTBeat AI to custom agentic systems, we help businesses operationalize AI for measurable results.',
};

export default function SolutionsPage() {
  return (
    <div className="min-h-screen">
      <section className="relative overflow-hidden bg-gradient-to-br from-gray-900 via-gray-950 to-gray-900 py-20 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="text-4xl font-display font-bold tracking-tight text-white sm:text-6xl">
              AI Solutions That <span className="text-gradient">Drive Results</span>
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-400">
              From packaged AI products to custom agentic systems, we deliver enterprise-ready solutions designed for real operational environments.
            </p>
          </div>
        </div>
      </section>

      <section className="py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center mb-16">
            <h2 className="text-3xl font-display font-bold tracking-tight text-white sm:text-4xl">
              Our Solutions
            </h2>
            <p className="mt-4 text-lg leading-8 text-gray-400">
              Choose the AI solution that fits your needs
            </p>
          </div>

          <div className="mx-auto max-w-5xl">
            <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
              <Link href="/solutions/hrtbeat-ai" className="group relative overflow-hidden rounded-3xl border-2 border-gray-800 bg-gray-950 p-10 hover:border-brand-blue-400 hover:shadow-2xl transition-all duration-300">
                <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-brand opacity-10 rounded-bl-full"></div>
                <div className="relative">
                  <div className="inline-flex items-center justify-center rounded-xl bg-brand-blue-500/10 p-4 mb-6">
                    <svg className="h-8 w-8 text-brand-blue-400" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 0 0 3.741-.479 3 3 0 0 0-4.682-2.72m.94 3.198.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0 1 12 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 0 1 6 18.719m12 0a5.971 5.971 0 0 0-.941-3.197m0 0A5.995 5.995 0 0 0 12 12.75a5.995 5.995 0 0 0-5.058 2.772m0 0a3 3 0 0 0-4.681 2.72 8.986 8.986 0 0 0 3.74.477m.94-3.197a5.971 5.971 0 0 0-.94 3.197M15 6.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm6 3a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Zm-13.5 0a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Z" />
                    </svg>
                  </div>
                  <h3 className="text-3xl font-display font-bold text-white mb-4 group-hover:text-gradient transition-all">
                    HRTBeat AI
                  </h3>
                  <p className="text-gray-400 mb-6 text-lg">
                    Transform HR operations with AI-powered insights, automation, and intelligent workflows designed specifically for modern enterprises.
                  </p>
                  <div className="space-y-3 mb-8">
                    <div className="flex items-center text-gray-300">
                      <svg className="h-5 w-5 text-brand-blue-400 mr-3" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                      </svg>
                      AI-powered HR analytics
                    </div>
                    <div className="flex items-center text-gray-300">
                      <svg className="h-5 w-5 text-brand-blue-400 mr-3" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                      </svg>
                      Automated workflows
                    </div>
                    <div className="flex items-center text-gray-300">
                      <svg className="h-5 w-5 text-brand-blue-400 mr-3" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                      </svg>
                      Enterprise integration
                    </div>
                  </div>
                  <span className="inline-flex items-center text-brand-blue-400 font-semibold text-lg group-hover:gap-2 transition-all">
                    Explore HRTBeat AI
                    <svg className="ml-2 h-6 w-6 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                    </svg>
                  </span>
                </div>
              </Link>

              <Link href="/solutions/custom-ai" className="group relative overflow-hidden rounded-3xl border-2 border-gray-800 bg-gray-950 p-10 hover:border-brand-purple-400 hover:shadow-2xl transition-all duration-300">
                <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-br from-brand-purple-400 to-brand-blue-400 opacity-10 rounded-bl-full"></div>
                <div className="relative">
                  <div className="inline-flex items-center justify-center rounded-xl bg-brand-purple-500/10 p-4 mb-6">
                    <svg className="h-8 w-8 text-brand-purple-400" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.325.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 0 1 1.37.49l1.296 2.247a1.125 1.125 0 0 1-.26 1.431l-1.003.827c-.293.241-.438.613-.43.992a7.723 7.723 0 0 1 0 .255c-.008.378.137.75.43.991l1.004.827c.424.35.534.955.26 1.43l-1.298 2.247a1.125 1.125 0 0 1-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.47 6.47 0 0 1-.22.128c-.331.183-.581.495-.644.869l-.213 1.281c-.09.543-.56.94-1.11.94h-2.594c-.55 0-1.019-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 0 1-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 0 1-1.369-.49l-1.297-2.247a1.125 1.125 0 0 1 .26-1.431l1.004-.827c.292-.24.437-.613.43-.991a6.932 6.932 0 0 1 0-.255c.007-.38-.138-.751-.43-.992l-1.004-.827a1.125 1.125 0 0 1-.26-1.43l1.297-2.247a1.125 1.125 0 0 1 1.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.086.22-.128.332-.183.582-.495.644-.869l.214-1.28Z" />
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                    </svg>
                  </div>
                  <h3 className="text-3xl font-display font-bold text-white mb-4 group-hover:text-gradient transition-all">
                    Custom AI Solutions
                  </h3>
                  <p className="text-gray-400 mb-6 text-lg">
                    Bespoke agentic AI systems engineered for your unique business challenges, combining automation and intelligent decision-making.
                  </p>
                  <div className="space-y-3 mb-8">
                    <div className="flex items-center text-gray-300">
                      <svg className="h-5 w-5 text-brand-purple-400 mr-3" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                      </svg>
                      Tailored to your needs
                    </div>
                    <div className="flex items-center text-gray-300">
                      <svg className="h-5 w-5 text-brand-purple-400 mr-3" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                      </svg>
                      Agentic AI capabilities
                    </div>
                    <div className="flex items-center text-gray-300">
                      <svg className="h-5 w-5 text-brand-purple-400 mr-3" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                      </svg>
                      Full engineering support
                    </div>
                  </div>
                  <span className="inline-flex items-center text-brand-purple-400 font-semibold text-lg group-hover:gap-2 transition-all">
                    Start Your Project
                    <svg className="ml-2 h-6 w-6 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                    </svg>
                  </span>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 sm:py-32 bg-gray-900">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-display font-bold tracking-tight text-white mb-4">
              Not Sure Which Solution Is Right For You?
            </h2>
            <p className="text-lg text-gray-400 mb-8">
              Let's discuss your specific needs and help you choose the best approach.
            </p>
            <a
              href="/contact"
              className="inline-block rounded-lg bg-gradient-brand px-8 py-4 text-base font-semibold text-white shadow-lg hover:shadow-glow transition-all duration-200"
            >
              Schedule a Consultation
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
