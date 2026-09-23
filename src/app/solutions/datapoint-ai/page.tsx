import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "The Data Point - No-Code Agentic Workflow Platform | Ageniqs",
  description:
    "The Data Point is a no-code AI orchestration platform that automates complex business workflows across Microsoft Teams, Slack, SMS, email, and enterprise systems.",
  alternates: {
    canonical: "https://www.ageniqs.com/solutions/the-data-point",
  },
  openGraph: {
    url: "https://www.ageniqs.com/solutions/the-data-point",
    type: "website",
    title: "The Data Point - No-Code Agentic Workflow Platform",
    description:
      "Build AI-powered workflows without code and orchestrate business processes directly inside Microsoft Teams, Slack, SMS, email, and your enterprise systems.",
  },
};

export default function DataPointPage() {
  const problems = [
    { area: "HR", issue: "Onboarding buried in spreadsheets." },
    { area: "Finance", issue: "Approvals stuck in an inbox for days." },
    { area: "Operations", issue: "Knowledge trapped in one person's head." },
  ];

  const steps = [
    {
      number: "01",
      title: "We Consult",
      description:
        "We map your real workflows: the overhead, the bottlenecks, the pain points costing you time and money.",
    },
    {
      number: "02",
      title: "We Model",
      description:
        "We build the automation inside our own admin layer - your team never has to touch it.",
    },
    {
      number: "03",
      title: "You Benefit",
      description:
        "Your people start working immediately - inside Microsoft Teams, with a Data Point consultant on call right there in the channel for help and advice.",
    },
  ];

  const pricing = [
    {
      title: "Pay for What You Use",
      description:
        "No bloated licenses or idle seats - you only pay for automation that's actually running for you.",
    },
    {
      title: "Consulting That Pays You Back",
      description:
        "Your setup spend converts into usage credit, so getting started never feels like a sunk cost.",
    },
    {
      title: "Every Project Gets You More",
      description:
        "Our shared library means faster rollouts and lower cost for you as we automate more of your business.",
    },
  ];

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

            <div className="inline-flex items-center rounded-full bg-brand-blue-500/10 px-4 py-2 text-sm font-semibold text-brand-blue-400 mb-6">
              ⚡ No-Code Agentic Workflow Platform
            </div>

            <h1 className="text-4xl sm:text-6xl font-display font-bold tracking-tight text-white mb-6">
              We don't sell software.
              <br />
              <span className="text-gradient">We deliver outcomes.</span>
            </h1>

            <p className="mt-6 text-lg leading-8 text-gray-400">
              An AI workflow platform that models any business process and automates it
              end to end - no builder, no admin console, delivered where your people already
              work: Microsoft Teams.
            </p>

            <div className="mt-10 flex items-center justify-center gap-x-6">
              <a
                href="/contact"
                className="rounded-lg bg-gradient-brand px-6 py-3 text-sm font-semibold text-white shadow-lg hover:shadow-glow transition-all"
              >
                Schedule a Demo
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-gray-900">
        <div className="mx-auto max-w-7xl px-6">
          <h2 className="text-3xl font-display font-bold text-white text-center mb-6">
            The Problem
          </h2>
          <p className="text-lg text-gray-400 text-center mb-12 max-w-4xl mx-auto">
            Every business runs on manual workflows nobody has time to fix - onboarding buried in email threads, approvals
            stuck in an inbox, institutional knowledge trapped in one person's head. The fix exists, but it's built for engineers
            to configure. Most companies don't have engineers to spare.
          </p>

          <div className="grid gap-8 md:grid-cols-3 max-w-5xl mx-auto">
            {problems.map((problem) => (
              <div
                key={problem.area}
                className="rounded-2xl border border-gray-800 bg-gray-950/50 p-8"
              >
                <h3 className="text-xl font-semibold text-white mb-3">
                  {problem.area}
                </h3>
                <p className="text-gray-400">{problem.issue}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24">
        <div className="mx-auto max-w-7xl px-6">
          <h2 className="text-3xl font-display font-bold text-white text-center mb-12">
            How It Works
          </h2>

          <div className="grid gap-8 md:grid-cols-3 max-w-5xl mx-auto">
            {steps.map((step) => (
              <div
                key={step.number}
                className="rounded-2xl border border-gray-800 bg-gray-900/50 p-8"
              >
                <div className="inline-flex items-center justify-center rounded-lg bg-brand-blue-500/10 p-3 mb-4">
                  <span className="text-2xl font-bold text-brand-blue-400">
                    {step.number}
                  </span>
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">
                  {step.title}
                </h3>
                <p className="text-gray-400">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-gray-900">
        <div className="mx-auto max-w-5xl px-6">
          <div className="rounded-3xl border-2 border-brand-blue-500/30 bg-gradient-to-br from-gray-950 to-gray-900 p-10">
            <div className="inline-flex items-center rounded-full bg-brand-blue-500/10 px-4 py-2 text-sm font-semibold text-brand-blue-400 mb-4">
              PROVEN FIRST IN HR
            </div>
            <h2 className="text-3xl font-display font-bold text-white mb-4">
              HRtBeat
            </h2>
            <p className="text-lg text-gray-400">
              Hiring, onboarding, payroll, benefits, and every other HR question or workflow - automated entirely inside
              Microsoft Teams, built on The Data Point platform. HR is the proof. Loan processing, real estate appraisals,
              manufacturing, facilities, and IT are your opportunities.
            </p>
          </div>
        </div>
      </section>

      <section className="py-24">
        <div className="mx-auto max-w-7xl px-6">
          <h2 className="text-3xl font-display font-bold text-center text-white mb-12">
            Pricing That Works for You
          </h2>

          <div className="grid gap-8 md:grid-cols-3 max-w-5xl mx-auto">
            {pricing.map((item) => (
              <div
                key={item.title}
                className="rounded-2xl border border-gray-800 bg-gray-900/50 p-8"
              >
                <h3 className="text-xl font-semibold text-white mb-3">
                  {item.title}
                </h3>
                <p className="text-gray-400">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-gray-900">
        <div className="mx-auto max-w-3xl px-6 text-center">
          <a
            href="/contact"
            className="inline-block rounded-lg bg-gradient-brand px-8 py-4 text-base font-semibold text-white shadow-lg hover:shadow-glow transition-all"
          >
            Let's map your first workflow
          </a>
        </div>
      </section>
    </div>
  );
}