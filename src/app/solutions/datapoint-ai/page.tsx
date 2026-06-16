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
  const features = [
    {
      title: "No-Code Workflow Builder",
      description:
        "Design sophisticated AI-powered workflows visually without writing a single line of code.",
    },
    {
      title: "Agentic AI Orchestration",
      description:
        "AI agents gather information, coordinate stakeholders, trigger actions, and keep work moving automatically.",
    },
    {
      title: "Microsoft Teams & Slack Native",
      description:
        "Operate directly inside Teams and Slack while supporting SMS, email, and a secure web portal.",
    },
    {
      title: "Human-in-the-Loop",
      description:
        "Humans stay in control of approvals and critical decisions while AI automates coordination and administration.",
    },
    {
      title: "Enterprise Integrations",
      description:
        "Connect seamlessly with HR systems, CRMs, ERPs, document repositories, APIs, and line-of-business applications.",
    },
    {
      title: "Compliance & Audit Trails",
      description:
        "Every AI action is transparent, traceable, and auditable for regulated industries and enterprise governance.",
    },
  ];

  const useCases = [
    {
      title: "AI Recruitment",
      description:
        "Generate job descriptions, screen resumes, schedule interviews, and automate onboarding while recruiters remain in control.",
    },
    {
      title: "Loan Processing",
      description:
        "Automate document collection, validation, applicant communication, routing, and approvals to reduce processing time from weeks to hours.",
    },
    {
      title: "Manufacturing",
      description:
        "Coordinate procurement, inventory, production scheduling, quality assurance, and logistics across connected systems.",
    },
    {
      title: "Real Estate Appraisal",
      description:
        "Automate onboarding, compliance document collection, folder creation, data synchronization, and approvals.",
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

            <h1 className="text-4xl sm:text-6xl font-display font-bold tracking-tight text-white">
              <span className="text-gradient">The Data Point</span>
            </h1>

            <p className="mt-6 text-lg leading-8 text-gray-400">
              Automate complex business workflows with AI agents that work
              directly inside Microsoft Teams, Slack, SMS, email, and your web
              portal. Build intelligent automations without code while keeping
              humans in control of critical business decisions.
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

      <section className="py-24">
        <div className="mx-auto max-w-4xl px-6">
          <h2 className="text-3xl font-display font-bold text-white mb-6">
            The Challenge
          </h2>

          <p className="text-lg text-gray-400 mb-6">
            Organizations have invested heavily in enterprise software, yet
            employees still spend countless hours manually coordinating work
            between disconnected systems. Teams chase approvals, send follow-up
            emails, move information between applications, and perform
            repetitive administrative tasks that add little business value.
          </p>

          <p className="text-lg text-gray-400">
            The Data Point eliminates this friction by providing an AI-powered
            orchestration layer that automates communication, coordination, data
            collection, routing, and process execution while allowing humans to
            retain control over key business decisions.
          </p>
        </div>
      </section>

      <section className="py-24 bg-gray-900">
        <div className="mx-auto max-w-7xl px-6">
          <h2 className="text-3xl font-display font-bold text-white text-center mb-12">
            Key Features
          </h2>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {features.map((feature) => (
              <div
                key={feature.title}
                className="rounded-2xl border border-gray-800 p-8"
              >
                <h3 className="text-xl font-semibold text-white mb-3">
                  {feature.title}
                </h3>

                <p className="text-gray-400">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24">
        <div className="mx-auto max-w-7xl px-6">
          <h2 className="text-3xl font-display font-bold text-white text-center mb-12">
            Example Use Cases
          </h2>

          <div className="grid gap-8 md:grid-cols-2">
            {useCases.map((item) => (
              <div
                key={item.title}
                className="rounded-2xl border border-gray-800 p-8"
              >
                <h3 className="text-2xl font-semibold text-white mb-4">
                  {item.title}
                </h3>

                <p className="text-gray-400">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-gray-900">
        <div className="mx-auto max-w-5xl px-6">
          <h2 className="text-3xl font-display font-bold text-center text-white mb-12">
            Business Benefits
          </h2>

          <div className="space-y-8">
            <div>
              <h3 className="text-xl font-semibold text-white mb-2">
                Reduce Administrative Work
              </h3>
              <p className="text-gray-400">
                Eliminate repetitive coordination tasks and allow employees to
                focus on high-value work instead of manual administration.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-white mb-2">
                Accelerate Operations
              </h3>
              <p className="text-gray-400">
                Compress workflows that traditionally take weeks into hours by
                automating communication, routing, and execution.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-white mb-2">
                No-Code Configuration
              </h3>
              <p className="text-gray-400">
                Business users can design and deploy sophisticated AI workflows
                without engineering resources.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-white mb-2">
                Human Oversight Built In
              </h3>
              <p className="text-gray-400">
                AI performs orchestration while configurable approval points
                ensure humans remain accountable for critical decisions.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-white mb-2">
                Enterprise Ready
              </h3>
              <p className="text-gray-400">
                Integrate with existing business systems while maintaining
                transparency, compliance, and complete auditability.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24">
        <div className="mx-auto max-w-3xl px-6 text-center">
          <h2 className="text-4xl font-display font-bold text-white mb-6">
            The Future of Enterprise Software Isn't Another App
          </h2>

          <p className="text-lg text-gray-400 mb-10">
            It's an intelligent orchestration layer that works across all of
            your existing applications, coordinating people, AI agents, and
            systems to automate complex business workflows.
          </p>

          <a
            href="/contact"
            className="inline-block rounded-lg bg-gradient-brand px-8 py-4 text-base font-semibold text-white shadow-lg hover:shadow-glow transition-all"
          >
            Request a Personalized Demo
          </a>
        </div>
      </section>
    </div>
  );
}