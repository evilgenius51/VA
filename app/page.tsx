export default function Home() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-600 to-purple-700 text-white">
        <div className="container mx-auto px-4 py-20 md:py-32">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 text-balance">
              Transform Your Business in 30 Days
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-blue-100">
              Get a battle-tested playbook tailored to your growth goals. 
              Fast, actionable, and results-driven.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="#pricing" 
                className="inline-block bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-blue-50 transition-colors"
              >
                Choose Your Playbook
              </a>
              <a 
                href="mailto:hello@velocityadvisory.com" 
                className="inline-block bg-transparent border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-blue-600 transition-colors"
              >
                Get in Touch
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-900">
            Why Choose Velocity Advisory?
          </h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="text-4xl mb-4">⚡</div>
              <h3 className="text-xl font-semibold mb-3 text-gray-900">Fast Results</h3>
              <p className="text-gray-600">
                Get your custom playbook delivered in 30 days or less. No lengthy engagements.
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="text-4xl mb-4">🎯</div>
              <h3 className="text-xl font-semibold mb-3 text-gray-900">Actionable Strategies</h3>
              <p className="text-gray-600">
                Every recommendation is practical, tested, and ready to implement immediately.
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="text-4xl mb-4">📈</div>
              <h3 className="text-xl font-semibold mb-3 text-gray-900">Proven Track Record</h3>
              <p className="text-gray-600">
                Our playbooks have helped dozens of businesses accelerate their growth.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-gray-900">
            Choose Your Growth Path
          </h2>
          <p className="text-xl text-center mb-12 text-gray-600 max-w-2xl mx-auto">
            One-off payment. Lifetime access. 30-day delivery guarantee.
          </p>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* Essentials Playbook */}
            <div className="border-2 border-gray-200 rounded-lg p-8 hover:border-blue-500 transition-colors">
              <h3 className="text-2xl font-bold mb-2 text-gray-900">Essentials Playbook</h3>
              <div className="mb-6">
                <span className="text-4xl font-bold text-gray-900">£149</span>
                <span className="text-gray-600 ml-2">one-off</span>
              </div>
              <ul className="space-y-3 mb-8 text-gray-700">
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  <span>Core growth strategy audit</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  <span>Quick-win action plan</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  <span>30-day roadmap</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  <span>Email support</span>
                </li>
              </ul>
              <a 
                href="https://buy.stripe.com/essentials" 
                className="block w-full text-center bg-gray-900 text-white px-6 py-3 rounded-lg font-semibold hover:bg-gray-800 transition-colors"
              >
                Get Started
              </a>
            </div>

            {/* Complete Playbook - Primary CTA */}
            <div className="border-2 border-blue-600 rounded-lg p-8 relative shadow-lg transform md:scale-105">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                <span className="bg-blue-600 text-white px-4 py-1 rounded-full text-sm font-semibold">
                  MOST POPULAR
                </span>
              </div>
              <h3 className="text-2xl font-bold mb-2 text-gray-900">Complete Playbook</h3>
              <div className="mb-6">
                <span className="text-4xl font-bold text-blue-600">£297</span>
                <span className="text-gray-600 ml-2">one-off</span>
              </div>
              <ul className="space-y-3 mb-8 text-gray-700">
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  <span>Everything in Essentials</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  <span>Detailed market analysis</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  <span>Custom marketing strategy</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  <span>90-day implementation guide</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  <span>2x strategy calls</span>
                </li>
              </ul>
              <a 
                href="https://buy.stripe.com/complete" 
                className="block w-full text-center bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
              >
                Get Started
              </a>
            </div>

            {/* Accelerator VIP */}
            <div className="border-2 border-gray-200 rounded-lg p-8 hover:border-purple-500 transition-colors">
              <h3 className="text-2xl font-bold mb-2 text-gray-900">Accelerator VIP</h3>
              <div className="mb-6">
                <span className="text-4xl font-bold text-gray-900">£549</span>
                <span className="text-gray-600 ml-2">one-off</span>
              </div>
              <ul className="space-y-3 mb-8 text-gray-700">
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  <span>Everything in Complete</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  <span>Full competitive analysis</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  <span>Revenue optimization plan</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  <span>5x strategy calls</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  <span>Priority support for 90 days</span>
                </li>
              </ul>
              <a 
                href="https://buy.stripe.com/vip" 
                className="block w-full text-center bg-purple-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-purple-700 transition-colors"
              >
                Get Started
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Social Proof / Testimonials */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-900">
            What Our Clients Say
          </h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="bg-white p-8 rounded-lg shadow-md">
              <p className="text-gray-700 mb-4 italic">
                &quot;The Complete Playbook gave us clarity we&apos;d been missing for months. We implemented their recommendations and saw a 40% increase in qualified leads within 60 days.&quot;
              </p>
              <div className="font-semibold text-gray-900">Sarah Chen</div>
              <div className="text-gray-600 text-sm">Founder, TechStart Solutions</div>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-md">
              <p className="text-gray-700 mb-4 italic">
                &quot;Best investment we made this year. The Accelerator VIP package delivered ROI in weeks, not months. Highly recommend!&quot;
              </p>
              <div className="font-semibold text-gray-900">James Morrison</div>
              <div className="text-gray-600 text-sm">CEO, Growth Partners Ltd</div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-900">
            Frequently Asked Questions
          </h2>
          <div className="max-w-3xl mx-auto space-y-6">
            <div className="border-b border-gray-200 pb-6">
              <h3 className="text-xl font-semibold mb-2 text-gray-900">How long does it take to get my playbook?</h3>
              <p className="text-gray-700">
                All playbooks are delivered within 30 days of purchase. Most clients receive theirs within 2-3 weeks.
              </p>
            </div>
            <div className="border-b border-gray-200 pb-6">
              <h3 className="text-xl font-semibold mb-2 text-gray-900">What if I need help implementing?</h3>
              <p className="text-gray-700">
                The Complete and Accelerator packages include strategy calls. For Essentials, you can upgrade anytime or purchase additional support separately.
              </p>
            </div>
            <div className="border-b border-gray-200 pb-6">
              <h3 className="text-xl font-semibold mb-2 text-gray-900">Is there a refund policy?</h3>
              <p className="text-gray-700">
                Yes! If you&apos;re not satisfied with your playbook, we offer a 14-day money-back guarantee, no questions asked.
              </p>
            </div>
            <div className="pb-6">
              <h3 className="text-xl font-semibold mb-2 text-gray-900">Can I upgrade my package later?</h3>
              <p className="text-gray-700">
                Absolutely! You can upgrade to a higher tier anytime within 90 days and we&apos;ll credit your original payment.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-br from-blue-600 to-purple-700 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Ready to Accelerate Your Growth?
          </h2>
          <p className="text-xl mb-8 text-blue-100 max-w-2xl mx-auto">
            Choose your playbook and get started today. Your 30-day transformation begins now.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="#pricing" 
              className="inline-block bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-blue-50 transition-colors"
            >
              View Pricing
            </a>
            <a 
              href="mailto:hello@velocityadvisory.com" 
              className="inline-block bg-transparent border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-blue-600 transition-colors"
            >
              Contact Us
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <h3 className="text-2xl font-bold mb-2">Velocity Advisory</h3>
              <p className="text-gray-400">Fast-track your business growth</p>
            </div>
            <div className="flex flex-col items-center md:items-end">
              <a 
                href="mailto:hello@velocityadvisory.com" 
                className="text-blue-400 hover:text-blue-300 mb-2"
              >
                hello@velocityadvisory.com
              </a>
              <p className="text-gray-400 text-sm">
                © 2024 Velocity Advisory. All rights reserved.
              </p>
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}
