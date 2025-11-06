export default function Home() {
  // TODO: Replace these placeholder Stripe links with your actual Stripe payment URLs
  // Create payment links at https://dashboard.stripe.com/payment-links
  const packages = [
    {
      name: 'Essentials Playbook',
      price: '£149',
      description: 'Perfect for getting started with structured growth',
      features: [
        'Core business assessment',
        '30-day action plan',
        'Growth framework template',
        'Email support',
        'Implementation checklist',
      ],
      stripeLink: 'https://buy.stripe.com/essentials',
      featured: false,
    },
    {
      name: 'Complete Playbook',
      price: '£297',
      description: 'Our most popular package - comprehensive growth strategy',
      features: [
        'Everything in Essentials',
        'Market analysis & positioning',
        'Revenue optimization strategy',
        'Customer acquisition roadmap',
        'Priority email support',
        '1 strategy call (60 min)',
      ],
      stripeLink: 'https://buy.stripe.com/complete',
      featured: true,
    },
    {
      name: 'Accelerator VIP',
      price: '£549',
      description: 'Premium package with hands-on guidance',
      features: [
        'Everything in Complete',
        'Weekly 1-on-1 coaching calls',
        'Custom growth dashboard',
        'Direct messaging access',
        'Resource library access',
        'Implementation support',
        '90-day follow-up strategy',
      ],
      stripeLink: 'https://buy.stripe.com/accelerator',
      featured: false,
    },
  ]

  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      {/* Hero Section */}
      <section className="container mx-auto px-4 py-16 md:py-24">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-slate-900 mb-6">
            Transform Your Business in <span className="text-blue-600">30 Days</span>
          </h1>
          <p className="text-xl md:text-2xl text-slate-600 mb-8">
            Proven playbooks that deliver rapid, measurable growth. No fluff. Just actionable strategies.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <a
              href="#packages"
              className="inline-block bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-blue-700 transition-colors"
            >
              View Playbooks
            </a>
            <a
              href="mailto:hello@velocityadvisory.com"
              className="inline-block bg-white text-blue-600 border-2 border-blue-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-blue-50 transition-colors"
            >
              Get in Touch
            </a>
          </div>
        </div>

        {/* Trust Indicators */}
        <div className="max-w-4xl mx-auto mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center">
            <div className="text-4xl font-bold text-blue-600 mb-2">30</div>
            <div className="text-slate-600">Day Implementation</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-blue-600 mb-2">100%</div>
            <div className="text-slate-600">Actionable Strategies</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-blue-600 mb-2">✓</div>
            <div className="text-slate-600">Proven Framework</div>
          </div>
        </div>
      </section>

      {/* Problem/Solution Section */}
      <section className="bg-slate-100 py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-8 text-center">
              Stop Spinning Your Wheels
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-semibold text-red-600 mb-4">The Problem</h3>
                <ul className="space-y-3 text-slate-600">
                  <li className="flex items-start">
                    <span className="text-red-500 mr-2">✗</span>
                    <span>Vague strategies that never get implemented</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-500 mr-2">✗</span>
                    <span>Wasting time on tactics that don&apos;t move the needle</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-500 mr-2">✗</span>
                    <span>No clear roadmap to sustainable growth</span>
                  </li>
                </ul>
              </div>
              <div className="bg-blue-600 text-white p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-semibold mb-4">The Solution</h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <span className="mr-2">✓</span>
                    <span>Step-by-step 30-day action plans</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2">✓</span>
                    <span>Battle-tested frameworks that deliver results</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2">✓</span>
                    <span>Clear metrics and milestones to track progress</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="packages" className="container mx-auto px-4 py-16 md:py-24">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4 text-center">
            Choose Your Playbook
          </h2>
          <p className="text-xl text-slate-600 mb-12 text-center">
            One-time investment. Lifetime impact.
          </p>

          <div className="grid md:grid-cols-3 gap-8">
            {packages.map((pkg) => (
              <div
                key={pkg.name}
                className={`relative bg-white rounded-lg shadow-lg overflow-hidden flex flex-col ${
                  pkg.featured ? 'ring-2 ring-blue-600 transform md:scale-105' : ''
                }`}
              >
                {pkg.featured && (
                  <div className="absolute top-0 right-0 bg-blue-600 text-white px-4 py-1 text-sm font-semibold">
                    MOST POPULAR
                  </div>
                )}
                <div className="p-8 flex flex-col flex-grow">
                  <h3 className="text-2xl font-bold text-slate-900 mb-2">{pkg.name}</h3>
                  <div className="mb-4">
                    <span className="text-4xl font-bold text-slate-900">{pkg.price}</span>
                    <span className="text-slate-600"> one-off</span>
                  </div>
                  <p className="text-slate-600 mb-6">{pkg.description}</p>
                  <ul className="space-y-3 mb-8 flex-grow">
                    {pkg.features.map((feature) => (
                      <li key={feature} className="flex items-start">
                        <span className="text-blue-600 mr-2 flex-shrink-0">✓</span>
                        <span className="text-slate-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <a
                    href={pkg.stripeLink}
                    className={`block text-center px-6 py-4 rounded-lg font-semibold transition-colors ${
                      pkg.featured
                        ? 'bg-blue-600 text-white hover:bg-blue-700'
                        : 'bg-slate-900 text-white hover:bg-slate-800'
                    }`}
                  >
                    Get Started
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What's Included Section */}
      <section className="bg-slate-50 py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-12 text-center">
              What You&apos;ll Get
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="flex items-start">
                <div className="bg-blue-100 rounded-full p-3 mr-4 flex-shrink-0">
                  <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-slate-900 mb-2">Actionable Framework</h3>
                  <p className="text-slate-600">No theory. Just practical steps you can implement immediately.</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="bg-blue-100 rounded-full p-3 mr-4 flex-shrink-0">
                  <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-slate-900 mb-2">Rapid Results</h3>
                  <p className="text-slate-600">See measurable improvements within the first 30 days.</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="bg-blue-100 rounded-full p-3 mr-4 flex-shrink-0">
                  <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-slate-900 mb-2">Proven Methodology</h3>
                  <p className="text-slate-600">Battle-tested strategies used by successful businesses.</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="bg-blue-100 rounded-full p-3 mr-4 flex-shrink-0">
                  <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-slate-900 mb-2">Expert Support</h3>
                  <p className="text-slate-600">Get guidance from experienced business advisors.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="container mx-auto px-4 py-16">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-12 text-center">
            Frequently Asked Questions
          </h2>
          <div className="space-y-6">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold text-slate-900 mb-2">
                How quickly can I start?
              </h3>
              <p className="text-slate-600">
                Immediately! Once you purchase, you&apos;ll receive instant access to your playbook and can begin implementation right away.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold text-slate-900 mb-2">
                What if I need more help?
              </h3>
              <p className="text-slate-600">
                Each package includes support. For more intensive guidance, consider upgrading to the Accelerator VIP package with weekly coaching calls.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold text-slate-900 mb-2">
                Is this suitable for my industry?
              </h3>
              <p className="text-slate-600">
                Our frameworks are industry-agnostic and adaptable. They&apos;ve been successfully applied across tech, retail, services, and more.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold text-slate-900 mb-2">
                What&apos;s the difference between packages?
              </h3>
              <p className="text-slate-600">
                The Essentials gives you the core framework. Complete adds comprehensive strategy and a call. Accelerator VIP includes ongoing coaching and implementation support.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-blue-600 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Accelerate Your Growth?
          </h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Join businesses that have transformed their trajectory with our proven playbooks.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#packages"
              className="inline-block bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-slate-100 transition-colors"
            >
              Choose Your Playbook
            </a>
            <a
              href="mailto:hello@velocityadvisory.com"
              className="inline-block bg-blue-700 text-white border-2 border-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-blue-800 transition-colors"
            >
              Ask a Question
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h3 className="text-2xl font-bold mb-4">Velocity Advisory</h3>
            <p className="text-slate-400 mb-6">
              Accelerating business growth through proven, actionable strategies.
            </p>
            <div className="flex justify-center gap-6 mb-6">
              <a
                href="mailto:hello@velocityadvisory.com"
                className="text-slate-400 hover:text-white transition-colors"
              >
                Contact Us
              </a>
              <span className="text-slate-600">|</span>
              <a
                href="#packages"
                className="text-slate-400 hover:text-white transition-colors"
              >
                Playbooks
              </a>
            </div>
            <p className="text-slate-500 text-sm">
              © {new Date().getFullYear()} Velocity Advisory. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </main>
  )
}
