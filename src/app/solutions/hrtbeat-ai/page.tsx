import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: 'HRTBeat AI - Transform HR with AI-Powered Insights | Ageniqs',
  description: 'HRTBeat AI delivers enterprise-grade HR transformation through AI-powered insights, automation, and intelligent workflows. Streamline operations and drive measurable results.',
  alternates: {
    canonical: 'https://www.ageniqs.com/solutions/hrtbeat-ai',
  },
  openGraph: {
    url: 'https://www.ageniqs.com/solutions/hrtbeat-ai',
    type: 'website',
    title: 'HRTBeat AI - Transform HR with AI-Powered Insights',
    description: 'HRTBeat AI delivers enterprise-grade HR transformation through AI-powered insights, automation, and intelligent workflows.',
  },
};

export default function HRTBeatPage() {
  return (
    <div className="min-h-screen">
      <section className="relative overflow-hidden bg-gradient-to-br from-gray-900 via-gray-950 to-gray-900 py-20 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <div className="flex justify-center mb-8">
              <Image
                src="/images/logo-white.png"
                alt="Ageniqs"
                width={280}
                height={280}
                className="h-28 w-auto"
              />
            </div>
            <div className="inline-flex items-center rounded-full px-4 py-2 bg-brand-blue-500/10 text-brand-blue-700 font-semibold text-sm mb-6">
              <span className="mr-2">⚡</span> Enterprise HR Platform
            </div>
            <h1 className="text-4xl font-display font-bold tracking-tight text-white sm:text-6xl">
              <span className="text-gradient">HRTBeat AI</span>
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-400">
              Transform HR operations with AI-powered insights, automation, and intelligent workflows designed for modern enterprises.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <a
                href="/contact"
                className="rounded-lg bg-gradient-brand px-6 py-3 text-sm font-semibold text-white shadow-lg hover:shadow-glow transition-all duration-200"
              >
                Request a Demo
              </a>
              <a
                href="https://www.hrtbeat.ai/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm font-semibold leading-6 text-white border border-gray-700 px-6 py-3 rounded-lg hover:border-brand-blue-500 transition-all duration-200"
              >
                Visit HRTBeat.ai <span aria-hidden="true">→</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-3xl mb-16">
            <h2 className="text-3xl font-display font-bold tracking-tight text-white mb-6">
              The Challenge
            </h2>
            <p className="text-lg text-gray-400 mb-4">
              Modern HR teams struggle with fragmented systems, manual processes, and data silos that prevent them from making strategic, data-driven decisions. Traditional HRIS platforms weren't built for the AI era, leaving organizations unable to leverage the full potential of their people data.
            </p>
            <p className="text-lg text-gray-400">
              HRTBeat AI solves this by bringing intelligent automation and AI-powered insights directly into HR operations.
            </p>
          </div>

          <div className="mx-auto max-w-7xl">
            <h2 className="text-3xl font-display font-bold tracking-tight text-white mb-12 text-center">
              Key Features
            </h2>
            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {[
                {
                  title: "AI-Powered Analytics",
                  description: "Transform HR data into actionable insights with advanced analytics and predictive modeling.",
                  icon: (
                    <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 0 1 3 19.875v-6.75ZM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V8.625ZM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V4.125Z" />
                    </svg>
                  ),
                },
                {
                  title: "Intelligent Automation",
                  description: "Automate repetitive HR tasks and workflows, freeing up time for strategic initiatives.",
                  icon: (
                    <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 7.5l3 2.25-3 2.25m4.5 0h3m-9 8.25h13.5A2.25 2.25 0 0021 18V6a2.25 2.25 0 00-2.25-2.25H5.25A2.25 2.25 0 003 6v12a2.25 2.25 0 002.25 2.25z" />
                    </svg>
                  ),
                },
                {
                  title: "Talent Intelligence",
                  description: "AI-driven insights for recruitment, retention, and workforce planning.",
                  icon: (
                    <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 0 0 3.741-.479 3 3 0 0 0-4.682-2.72m.94 3.198.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0 1 12 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 0 1 6 18.719m12 0a5.971 5.971 0 0 0-.941-3.197m0 0A5.995 5.995 0 0 0 12 12.75a5.995 5.995 0 0 0-5.058 2.772m0 0a3 3 0 0 0-4.681 2.72 8.986 8.986 0 0 0 3.74.477m.94-3.197a5.971 5.971 0 0 0-.94 3.197M15 6.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm6 3a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Zm-13.5 0a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Z" />
                    </svg>
                  ),
                },
                {
                  title: "Employee Experience",
                  description: "Enhance employee engagement with personalized experiences and self-service capabilities.",
                  icon: (
                    <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15.182 15.182a4.5 4.5 0 0 1-6.364 0M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0ZM9.75 9.75c0 .414-.168.75-.375.75S9 10.164 9 9.75 9.168 9 9.375 9s.375.336.375.75Zm-.375 0h.008v.015h-.008V9.75Zm5.625 0c0 .414-.168.75-.375.75s-.375-.336-.375-.75.168-.75.375-.75.375.336.375.75Zm-.375 0h.008v.015h-.008V9.75Z" />
                    </svg>
                  ),
                },
                {
                  title: "Compliance & Security",
                  description: "Enterprise-grade security and compliance features built for regulated industries.",
                  icon: (
                    <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75m-3-7.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285Z" />
                    </svg>
                  ),
                },
                {
                  title: "Seamless Integration",
                  description: "Connect with your existing HR tech stack and enterprise systems effortlessly.",
                  icon: (
                    <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 16.875h3.375m0 0h3.375m-3.375 0V13.5m0 3.375v3.375M6 10.5h2.25a2.25 2.25 0 0 0 2.25-2.25V6a2.25 2.25 0 0 0-2.25-2.25H6A2.25 2.25 0 0 0 3.75 6v2.25A2.25 2.25 0 0 0 6 10.5Zm0 9.75h2.25A2.25 2.25 0 0 0 10.5 18v-2.25a2.25 2.25 0 0 0-2.25-2.25H6a2.25 2.25 0 0 0-2.25 2.25V18A2.25 2.25 0 0 0 6 20.25Zm9.75-9.75H18a2.25 2.25 0 0 0 2.25-2.25V6A2.25 2.25 0 0 0 18 3.75h-2.25A2.25 2.25 0 0 0 13.5 6v2.25a2.25 2.25 0 0 0 2.25 2.25Z" />
                    </svg>
                  ),
                },
              ].map((feature, index) => (
                <div key={index} className="rounded-2xl border border-gray-800 p-8 hover:shadow-card-hover transition-shadow duration-200">
                  <div className="inline-flex items-center justify-center rounded-lg bg-brand-blue-500/10 p-3 mb-4 text-brand-blue-400">
                    {feature.icon}
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-2">{feature.title}</h3>
                  <p className="text-gray-400">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 sm:py-32 bg-gray-900">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-3xl">
            <h2 className="text-3xl font-display font-bold tracking-tight text-white mb-12 text-center">
              Benefits & ROI
            </h2>
            <div className="space-y-6">
              <div className="flex items-start">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-12 w-12 rounded-full bg-brand-blue-500/10 text-brand-blue-400 font-bold text-lg">
                    ✓
                  </div>
                </div>
                <div className="ml-4">
                  <h3 className="text-xl font-semibold text-white mb-2">Reduce HR Operational Costs</h3>
                  <p className="text-gray-400">
                    Automate time-consuming manual tasks and streamline workflows to cut operational costs by up to 40%.
                  </p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-12 w-12 rounded-full bg-brand-blue-500/10 text-brand-blue-400 font-bold text-lg">
                    ✓
                  </div>
                </div>
                <div className="ml-4">
                  <h3 className="text-xl font-semibold text-white mb-2">Improve Decision-Making Speed</h3>
                  <p className="text-gray-400">
                    Access real-time insights and predictive analytics to make faster, data-driven HR decisions.
                  </p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-12 w-12 rounded-full bg-brand-blue-500/10 text-brand-blue-400 font-bold text-lg">
                    ✓
                  </div>
                </div>
                <div className="ml-4">
                  <h3 className="text-xl font-semibold text-white mb-2">Boost Employee Retention</h3>
                  <p className="text-gray-400">
                    Identify flight risks early and take proactive measures to retain top talent.
                  </p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-12 w-12 rounded-full bg-brand-blue-500/10 text-brand-blue-400 font-bold text-lg">
                    ✓
                  </div>
                </div>
                <div className="ml-4">
                  <h3 className="text-xl font-semibold text-white mb-2">Enhance Employee Experience</h3>
                  <p className="text-gray-400">
                    Deliver personalized, AI-powered experiences that boost engagement and satisfaction.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-display font-bold tracking-tight text-white mb-4">
              Ready to Transform Your HR Operations?
            </h2>
            <p className="text-lg text-gray-400 mb-8">
              See HRTBeat AI in action. Schedule a personalized demo with our team.
            </p>
            <a
              href="/contact"
              className="inline-block rounded-lg bg-gradient-brand px-8 py-4 text-base font-semibold text-white shadow-lg hover:shadow-glow transition-all duration-200"
            >
              Request a Demo
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
