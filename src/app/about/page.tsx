import type { Metadata } from "next";

export const metadata: Metadata = {
  title: 'About Ageniqs - Enterprise AI Leaders | The Data Point',
  description: 'Learn about Ageniqs, the U.S. growth arm of The Data Point, specializing in enterprise AI commercialization and custom agentic solutions.',
};

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      <section className="relative overflow-hidden bg-gradient-to-br from-brand-blue-50 via-white to-brand-purple-50 py-20 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="text-4xl font-display font-bold tracking-tight text-gray-900 sm:text-6xl">
              About <span className="text-gradient">Ageniqs</span>
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              We are the U.S. growth and commercialization arm of The Data Point, dedicated to transforming advanced AI capabilities into deployable business solutions.
            </p>
          </div>
        </div>
      </section>

      <section className="py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-3xl">
            <h2 className="text-3xl font-display font-bold tracking-tight text-gray-900 mb-6">
              Our Mission
            </h2>
            <p className="text-lg text-gray-600 mb-6">
              Ageniqs bridges the gap between advanced AI engineering and real-world business adoption. Rather than acting as a traditional agency or reseller, we operate as the strategic bridge between cutting-edge AI technology and practical enterprise implementation.
            </p>
            <p className="text-lg text-gray-600 mb-6">
              Powered by the product and engineering capabilities of <a href="https://www.thedatapoint.ai/" target="_blank" rel="noopener noreferrer" className="text-brand-blue-600 hover:text-brand-blue-700 font-semibold">The Data Point</a>, we help organizations identify high-impact AI opportunities, implement intelligent automation, and deploy production-ready AI systems that drive measurable operational and revenue outcomes.
            </p>
          </div>
        </div>
      </section>

      <section className="py-24 sm:py-32 bg-gray-50">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-3xl">
            <h2 className="text-3xl font-display font-bold tracking-tight text-gray-900 mb-12">
              What We Do
            </h2>
            <div className="space-y-8">
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">AI Solution Consulting & Discovery</h3>
                <p className="text-gray-600">
                  We work with enterprises to identify and prioritize AI opportunities that align with strategic business objectives.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Enterprise Sales & Partnerships</h3>
                <p className="text-gray-600">
                  Building strategic relationships with organizations ready to adopt enterprise-grade AI solutions.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Go-to-Market Execution</h3>
                <p className="text-gray-600">
                  Commercializing proprietary AI platforms like HRTBeat AI and bringing them to U.S. markets.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Client Strategy & Account Growth</h3>
                <p className="text-gray-600">
                  Ongoing support, onboarding, and expansion of AI capabilities within customer organizations.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Custom AI Development</h3>
                <p className="text-gray-600">
                  Building bespoke agentic AI systems combining automation, intelligent workflows, and data systems for real operational environments.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-3xl">
            <h2 className="text-3xl font-display font-bold tracking-tight text-gray-900 mb-6">
              Our Approach
            </h2>
            <p className="text-lg text-gray-600 mb-6">
              We focus on practical, deployable AI — not experimental demos. Our solutions combine automation, intelligent workflows, data systems, and agentic AI capabilities into systems designed for real operational environments.
            </p>
            <p className="text-lg text-gray-600">
              Every solution we deliver is backed by The Data Point's deep engineering expertise, ensuring that what we promise is what gets deployed, maintained, and scaled.
            </p>
          </div>
        </div>
      </section>

      <section className="py-24 sm:py-32 bg-gradient-to-br from-brand-blue-50 to-brand-purple-50">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-display font-bold tracking-tight text-gray-900 mb-4">
              Ready to Get Started?
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              Let's discuss how we can help your organization operationalize AI.
            </p>
            <a
              href="/contact"
              className="inline-block rounded-lg bg-gradient-brand px-8 py-4 text-base font-semibold text-white shadow-lg hover:shadow-glow transition-all duration-200"
            >
              Contact Us Today
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
