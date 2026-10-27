import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: 'Insignal - Analytics That Build Themselves | Ageniqs',
  description: 'Insignal is the always-on data agent. Connect your data and Otto builds the warehouse, defines your metrics, and answers questions in plain English, with the SQL shown.',
  alternates: {
    canonical: 'https://www.ageniqs.com/solutions/insignal',
  },
  openGraph: {
    url: 'https://www.ageniqs.com/solutions/insignal',
    type: 'website',
    title: 'Insignal - Analytics That Build Themselves',
    description: 'The always-on data agent. Connect your data and Otto builds the warehouse, defines your metrics, and answers your team\'s questions.',
  },
};

const steps = [
  {
    title: 'Connect',
    description: 'Tell Otto where your data lives: databases like PostgreSQL, files in cloud storage, or SaaS apps like Stripe and HubSpot. Sources are queried read-only.',
  },
  {
    title: 'Otto builds',
    description: 'Otto copies the tables, builds the warehouse, and defines your metrics, then keeps improving it based on the questions your team asks.',
  },
  {
    title: 'Ask anything',
    description: 'Your team asks questions in plain English and gets answers with the SQL shown, plus charts, live dashboards, alerts, and PDF reports.',
  },
];

const features = [
  {
    title: 'Plain-English Answers',
    description: 'Ask questions the way you\'d ask an analyst. Every answer shows the SQL behind it, so results are transparent and verifiable.',
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M8.625 12a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H8.25m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H12m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0h-.375M21 12c0 4.556-4.03 8.25-9 8.25a9.764 9.764 0 0 1-2.555-.337A5.972 5.972 0 0 1 5.41 20.97a5.969 5.969 0 0 1-.474-.065 4.48 4.48 0 0 0 .978-2.025c.09-.457-.133-.901-.467-1.226C3.93 16.178 3 14.189 3 12c0-4.556 4.03-8.25 9-8.25s9 3.694 9 8.25Z" />
      </svg>
    ),
  },
  {
    title: 'Self-Building Warehouse',
    description: 'No pipelines to maintain. Otto builds and evolves your data warehouse automatically as your team\'s questions change.',
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 6.375c0 2.278-3.694 4.125-8.25 4.125S3.75 8.653 3.75 6.375m16.5 0c0-2.278-3.694-4.125-8.25-4.125S3.75 4.097 3.75 6.375m16.5 0v11.25c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125V6.375m16.5 0v3.75m-16.5-3.75v3.75m16.5 0v3.75C20.25 16.153 16.556 18 12 18s-8.25-1.847-8.25-4.125v-3.75m16.5 0c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125" />
      </svg>
    ),
  },
  {
    title: 'One Definition of Every Metric',
    description: 'A semantic layer means "revenue" means the same thing in every answer, dashboard, and report across the business.',
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 0 1 3 19.875v-6.75ZM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V8.625ZM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V4.125Z" />
      </svg>
    ),
  },
  {
    title: 'Dashboards & Alerts',
    description: 'Otto builds live dashboards, shares them, and sets alerts that notify your team when the numbers change.',
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M14.857 17.082a23.848 23.848 0 0 0 5.454-1.31A8.967 8.967 0 0 1 18 9.75V9A6 6 0 0 0 6 9v.75a8.967 8.967 0 0 1-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 0 1-5.714 0m5.714 0a3 3 0 1 1-5.714 0" />
      </svg>
    ),
  },
  {
    title: 'Governed Access',
    description: 'Grants, row filters, and column masks control who sees what. Sharing a dashboard never grants access to the underlying data.',
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75m-3-7.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285Z" />
      </svg>
    ),
  },
  {
    title: 'MCP & Self-Hosting',
    description: 'Use Insignal from Claude or any MCP client with your own permissions, or self-host on a single Linux VM with your own model keys and audit log.',
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M5.25 14.25h13.5m-13.5 0a3 3 0 0 1-3-3m3 3a3 3 0 1 0 0 6h13.5a3 3 0 1 0 0-6m-16.5-3a3 3 0 0 1 3-3h13.5a3 3 0 0 1 3 3m-19.5 0a4.5 4.5 0 0 1 .9-2.7L5.737 5.1a3.375 3.375 0 0 1 2.7-1.35h7.126c1.062 0 2.062.5 2.7 1.35l2.587 3.45a4.5 4.5 0 0 1 .9 2.7m0 0a3 3 0 0 1-3 3m0 3h.008v.008h-.008v-.008Zm0-6h.008v.008h-.008v-.008Zm-3 6h.008v.008h-.008v-.008Zm0-6h.008v.008h-.008v-.008Z" />
      </svg>
    ),
  },
];

export default function InsignalPage() {
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
            <div className="inline-flex items-center rounded-full px-4 py-2 bg-brand-blue-500/10 text-brand-blue-300 font-semibold text-sm mb-6">
              <span className="mr-2">⚡</span> The Always-On Data Agent
            </div>
            <h1 className="text-4xl font-display font-bold tracking-tight text-white sm:text-6xl">
              <span className="text-gradient">Insignal</span>
            </h1>
            <p className="mt-6 text-2xl font-display font-semibold text-white">
              Analytics that build themselves.
            </p>
            <p className="mt-4 text-lg leading-8 text-gray-400">
              Tell Otto where your data lives. It builds the warehouse, defines your metrics, and answers your team&apos;s questions in plain English, getting smarter with every question asked.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <a
                href="/contact"
                className="rounded-lg bg-gradient-brand px-6 py-3 text-sm font-semibold text-white shadow-lg hover:shadow-glow transition-all duration-200"
              >
                Request a Demo
              </a>
              <a
                href="https://insignal.ai/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm font-semibold leading-6 text-white border border-gray-700 px-6 py-3 rounded-lg hover:border-brand-blue-500 transition-all duration-200"
              >
                Visit Insignal.ai <span aria-hidden="true">→</span>
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
              Business data is scattered across databases, spreadsheets, and SaaS tools. Getting a straight answer means waiting on a data team to build pipelines, model tables, and write queries, and by the time the dashboard ships, the question has changed.
            </p>
            <p className="text-lg text-gray-400">
              Insignal replaces that backlog with an AI data agent that does the building for you, and keeps doing it.
            </p>
          </div>

          <div className="mx-auto max-w-5xl mb-24">
            <h2 className="text-3xl font-display font-bold tracking-tight text-white mb-12 text-center">
              How It Works
            </h2>
            <ol className="grid grid-cols-1 gap-8 md:grid-cols-3">
              {steps.map((step, index) => (
                <li key={step.title} className="relative rounded-2xl border border-gray-800 bg-gray-900/50 p-8">
                  <span className="font-mono text-sm text-brand-blue-400">0{index + 1}</span>
                  <h3 className="mt-2 text-xl font-semibold text-white mb-2">{step.title}</h3>
                  <p className="text-gray-400">{step.description}</p>
                </li>
              ))}
            </ol>
          </div>

          <div className="mx-auto max-w-7xl">
            <h2 className="text-3xl font-display font-bold tracking-tight text-white mb-12 text-center">
              Key Features
            </h2>
            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {features.map((feature) => (
                <div key={feature.title} className="rounded-2xl border border-gray-800 p-8 hover:shadow-card-hover transition-shadow duration-200">
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
              Why Teams Choose Insignal
            </h2>
            <div className="space-y-6">
              {[
                {
                  title: 'Answers Without the Backlog',
                  description: 'Anyone on the team can get a trusted answer on their own instead of filing a ticket with the data team.',
                },
                {
                  title: 'Trust in Every Number',
                  description: 'Shared metric definitions and visible SQL mean everyone works from the same, verifiable numbers.',
                },
                {
                  title: 'Security by Design',
                  description: 'Read-only connections, fine-grained permissions, and an optional self-hosted deployment keep you in control of your data.',
                },
                {
                  title: 'Pricing That Scales Fairly',
                  description: 'Seats are for people only. Agents don\'t take up seats, so automation grows without growing your bill.',
                },
              ].map((benefit) => (
                <div key={benefit.title} className="flex items-start">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-12 w-12 rounded-full bg-brand-blue-500/10 text-brand-blue-400 font-bold text-lg">
                      ✓
                    </div>
                  </div>
                  <div className="ml-4">
                    <h3 className="text-xl font-semibold text-white mb-2">{benefit.title}</h3>
                    <p className="text-gray-400">{benefit.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-display font-bold tracking-tight text-white mb-4">
              Ready to Meet Otto?
            </h2>
            <p className="text-lg text-gray-400 mb-8">
              See Insignal turn your scattered data into answers. Schedule a personalized demo with our team.
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
