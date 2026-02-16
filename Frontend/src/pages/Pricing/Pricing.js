import React from 'react';
import './Pricing.css';

const Pricing = () => {
  const plans = [
    {
      name: 'Starter',
      description: 'Perfect for small businesses just getting started',
      features: [
        'Designed for new and small businesses',
        'Core POS features for day-to-day operations',
        'Mobile app access for on-the-go management',
        'Email support during business hours',
        'Standard sales and transaction reporting',
      ],
      popular: false,
    },
    {
      name: 'Professional',
      description: 'Ideal for growing businesses with higher transaction volumes',
      features: [
        'Built for multi-location and higher-volume merchants',
        'Advanced POS features for complex workflows',
        'Inventory management across locations',
        'Priority support with faster response times',
        'Advanced analytics and performance insights',
        'Multi-location user and role management',
      ],
      popular: true,
    },
    {
      name: 'Enterprise',
      description: 'Tailored solutions for large and enterprise businesses',
      features: [
        'Unlimited processing volumes',
        'All advanced features included',
        'Dedicated account and implementation manager',
        '24/7 phone and priority support',
        'Custom integrations with your existing systems',
        'White-label and branding options',
        'Service level agreement (SLA) available',
      ],
      popular: false,
    },
  ];

  return (
    <div className="pricing-page">
      <section className="hero-section bg-gradient-to-br from-purple-900 via-purple-800 to-black text-white py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Simple, Transparent Pricing
            </h1>
            <p className="text-xl text-purple-100">
              Choose the plan that's right for your business. All plans include our core features.
            </p>
          </div>
        </div>
      </section>

      <section className="pricing-plans py-20 bg-black">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {plans.map((plan, index) => (
              <div
                key={index}
                className={`pricing-card bg-gray-900 border border-purple-900/30 p-8 rounded-xl shadow-lg hover:shadow-xl hover:shadow-purple-900/20 transition-all duration-300 ${
                  plan.popular ? 'ring-4 ring-purple-500 transform scale-105' : ''
                }`}
              >
                {plan.popular && (
                  <div className="bg-purple-600 text-white text-center py-2 rounded-t-lg -mt-8 -mx-8 mb-4">
                    <span className="font-semibold">Most Popular</span>
                  </div>
                )}
                <div className="text-center mb-6">
                  <h2 className="text-2xl font-bold text-white mb-2">
                    {plan.name}
                  </h2>
                  <p className="text-gray-300 text-sm">{plan.description}</p>
                </div>
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start">
                      <svg className="w-5 h-5 text-purple-600 mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <span className="text-gray-300">{feature}</span>
                    </li>
                  ))}
                </ul>
                <button
                  className={`w-full py-3 rounded-lg font-semibold transition-colors ${
                    plan.popular
                      ? 'bg-purple-600 text-white hover:bg-purple-700'
                      : 'bg-gray-100 text-gray-900 hover:bg-gray-200'
                  }`}
                >
                  Contact Sales
                </button>
              </div>
            ))}
          </div>

          <div className="mt-16 text-center">
            <p className="text-gray-300 mb-4">
              All plans include transparent terms, onboarding support, and no long-term lock-in. Cancel or change plans anytime.
            </p>
            <p className="text-sm text-gray-400">
              Transaction fees and processing rates are tailored to your business profile. Talk to our team for a custom proposal.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Pricing;
