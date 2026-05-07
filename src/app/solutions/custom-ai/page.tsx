import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: 'Custom Agentic AI Solutions for Enterprise | Ageniqs',
  description: 'Build bespoke agentic AI systems tailored to your unique business challenges. Powered by The Data Point, our custom solutions combine automation and intelligent decision-making.',
  alternates: {
    canonical: 'https://www.ageniqs.com/solutions/custom-ai',
  },
  openGraph: {
    url: 'https://www.ageniqs.com/solutions/custom-ai',
    type: 'website',
    title: 'Custom Agentic AI Solutions for Enterprise',
    description: 'Build bespoke agentic AI systems tailored to your unique business challenges. Powered by The Data Point engineering expertise.',
  },
};

export default function CustomAIPage() {
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
            <div className="inline-flex items-center rounded-full px-4 py-2 bg-brand-purple-500/10 text-brand-purple-700 font-semibold text-sm mb-6">
              <span className="mr-2">🚀</span> Bespoke AI Development
            </div>
            <h1 className="text-4xl font-display font-bold tracking-tight text-white sm:text-6xl">
              <span className="text-gradient">Custom AI Solutions</span>
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-400">
              Bespoke agentic AI systems engineered for your unique business challenges, combining automation, data intelligence, and adaptive decision-making.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <a
                href="/contact"
                className="rounded-lg bg-gradient-brand px-6 py-3 text-sm font-semibold text-white shadow-lg hover:shadow-glow transition-all duration-200"
              >
                Start Your Project
              </a>
              <a
                href="/about"
                className="text-sm font-semibold leading-6 text-white border border-gray-700 px-6 py-3 rounded-lg hover:border-brand-purple-500 transition-all duration-200"
              >
                Learn About Us <span aria-hidden="true">→</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-3xl mb-16">
            <h2 className="text-3xl font-display font-bold tracking-tight text-white mb-6">
              What Are Agentic AI Solutions?
            </h2>
            <p className="text-lg text-gray-400 mb-4">
              Agentic AI systems go beyond traditional automation. They combine intelligent workflows, adaptive decision-making, and autonomous operations to solve complex business problems that require contextual understanding and dynamic responses.
            </p>
            <p className="text-lg text-gray-400">
              Built by The Data Point's engineering team and commercialized by Ageniqs, our custom AI solutions are designed for production environments where reliability, scalability, and measurable outcomes matter.
            </p>
          </div>

          <div className="mx-auto max-w-7xl">
            <h2 className="text-3xl font-display font-bold tracking-tight text-white mb-12 text-center">
              When to Choose Custom AI
            </h2>
            <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
              <div className="rounded-2xl border border-gray-800 p-8 hover:shadow-card-hover transition-shadow duration-200">
                <h3 className="text-xl font-semibold text-white mb-4">Your Challenge Is Unique</h3>
                <p className="text-gray-400">
                  Off-the-shelf solutions don't fit your specific workflows, industry requirements, or operational constraints. You need a system built around your business, not the other way around.
                </p>
              </div>
              <div className="rounded-2xl border border-gray-800 p-8 hover:shadow-card-hover transition-shadow duration-200">
                <h3 className="text-xl font-semibold text-white mb-4">You Need Competitive Advantage</h3>
                <p className="text-gray-400">
                  Generic tools won't differentiate you in your market. Custom AI becomes a strategic asset that competitors can't replicate.
                </p>
              </div>
              <div className="rounded-2xl border border-gray-800 p-8 hover:shadow-card-hover transition-shadow duration-200">
                <h3 className="text-xl font-semibold text-white mb-4">Integration Is Complex</h3>
                <p className="text-gray-400">
                  Your existing systems, data sources, and workflows require deep integration that packaged products can't provide.
                </p>
              </div>
              <div className="rounded-2xl border border-gray-800 p-8 hover:shadow-card-hover transition-shadow duration-200">
                <h3 className="text-xl font-semibold text-white mb-4">Scale Requires Intelligence</h3>
                <p className="text-gray-400">
                  As you grow, manual processes and simple automation break down. You need systems that learn, adapt, and make intelligent decisions at scale.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 sm:py-32 bg-gray-900">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <h2 className="text-3xl font-display font-bold tracking-tight text-white mb-12 text-center">
            Our Development Process
          </h2>
          <div className="mx-auto max-w-5xl">
            <div className="space-y-8">
              {[
                {
                  step: "01",
                  title: "Discovery & Requirements",
                  description: "We work closely with your team to understand business objectives, technical constraints, and success criteria. No generic templates — every engagement starts with deep discovery."
                },
                {
                  step: "02",
                  title: "Architecture & Design",
                  description: "The Data Point's engineering team designs the system architecture, data pipelines, AI models, and integration strategy tailored to your infrastructure."
                },
                {
                  step: "03",
                  title: "Iterative Development",
                  description: "We build in phases with regular check-ins, demonstrations, and feedback loops. You see progress, not just promises, and we adjust based on real-world testing."
                },
                {
                  step: "04",
                  title: "Testing & Validation",
                  description: "Rigorous testing in staging environments that mirror production. We validate performance, accuracy, edge cases, and failure modes before any production deployment."
                },
                {
                  step: "05",
                  title: "Deployment & Scaling",
                  description: "Controlled rollout with monitoring, alerting, and fallback mechanisms. We deploy with confidence because we've prepared for what can go wrong."
                },
                {
                  step: "06",
                  title: "Support & Evolution",
                  description: "Ongoing support, monitoring, and enhancement. AI systems improve over time — we help you capture that value and adapt as your business evolves."
                },
              ].map((phase, index) => (
                <div key={index} className="flex items-start">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-16 w-16 rounded-xl bg-gradient-brand text-white font-bold text-xl">
                      {phase.step}
                    </div>
                  </div>
                  <div className="ml-6">
                    <h3 className="text-xl font-semibold text-white mb-2">{phase.title}</h3>
                    <p className="text-gray-400">{phase.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <h2 className="text-3xl font-display font-bold tracking-tight text-white mb-12 text-center">
            Technology Capabilities
          </h2>
          <div className="mx-auto max-w-5xl">
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {[
                "Large Language Models (LLMs)",
                "Computer Vision & Image Analysis",
                "Natural Language Processing",
                "Predictive Analytics & ML",
                "Autonomous Agents & Workflows",
                "Real-Time Data Processing",
                "API Development & Integration",
                "Cloud Infrastructure (AWS, Azure, GCP)",
                "Data Pipeline Engineering",
                "Model Training & Fine-Tuning",
                "Retrieval-Augmented Generation (RAG)",
                "Multi-Agent Systems",
              ].map((capability, index) => (
                <div key={index} className="flex items-center rounded-lg border border-gray-800 px-4 py-3 bg-gray-950 hover:border-brand-purple-400 transition-colors duration-200">
                  <svg className="h-5 w-5 text-brand-purple-400 mr-3 flex-shrink-0" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                  </svg>
                  <span className="text-gray-300 font-medium">{capability}</span>
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
              Industry-Specific Examples
            </h2>
            <div className="space-y-8">
              <div className="rounded-2xl border border-gray-800 p-8 bg-gray-950">
                <h3 className="text-xl font-semibold text-white mb-3">Healthcare & Life Sciences</h3>
                <p className="text-gray-400">
                  Clinical documentation automation, medical imaging analysis, patient triage systems, drug discovery workflows, and regulatory compliance automation.
                </p>
              </div>
              <div className="rounded-2xl border border-gray-800 p-8 bg-gray-950">
                <h3 className="text-xl font-semibold text-white mb-3">Financial Services</h3>
                <p className="text-gray-400">
                  Fraud detection systems, automated risk assessment, document processing for loans and claims, customer service automation, and market intelligence platforms.
                </p>
              </div>
              <div className="rounded-2xl border border-gray-800 p-8 bg-gray-950">
                <h3 className="text-xl font-semibold text-white mb-3">Manufacturing & Supply Chain</h3>
                <p className="text-gray-400">
                  Predictive maintenance, quality control automation, demand forecasting, supply chain optimization, and autonomous operations monitoring.
                </p>
              </div>
              <div className="rounded-2xl border border-gray-800 p-8 bg-gray-950">
                <h3 className="text-xl font-semibold text-white mb-3">Retail & E-Commerce</h3>
                <p className="text-gray-400">
                  Personalization engines, inventory optimization, customer service chatbots, demand prediction, and dynamic pricing systems.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-display font-bold tracking-tight text-white mb-4">
              Ready to Build Your Custom AI Solution?
            </h2>
            <p className="text-lg text-gray-400 mb-8">
              Let's discuss your specific challenges and design a system that delivers measurable results.
            </p>
            <a
              href="/contact"
              className="inline-block rounded-lg bg-gradient-brand px-8 py-4 text-base font-semibold text-white shadow-lg hover:shadow-glow transition-all duration-200"
            >
              Start Your Project
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
