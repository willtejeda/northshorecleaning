import Link from 'next/link'

export default function Services() {
  const services = [
    {
      title: 'Home Cleaning',
      description: 'Regular maintenance cleaning to keep your home spotless and healthy',
      icon: '🏠',
      features: ['Kitchen & bathrooms', 'Dusting & vacuuming', 'Floor cleaning', 'Trash removal']
    },
    {
      title: 'Deep Cleaning',
      description: 'Thorough top-to-bottom cleaning for that fresh-start feeling',
      icon: '✨',
      features: ['Baseboards & trim', 'Inside appliances', 'Window sills', 'Light fixtures']
    },
    {
      title: 'Move-In/Move-Out',
      description: 'Get your deposit back or start fresh in your new home',
      icon: '📦',
      features: ['Complete cleanout', 'Cabinet interiors', 'Appliance cleaning', 'Final touch-ups']
    },
    {
      title: 'Commercial Cleaning',
      description: 'Professional cleaning for offices, retail, and business spaces',
      icon: '🏢',
      features: ['Office spaces', 'Retail stores', 'Medical offices', 'After-hours service']
    },
    {
      title: 'Maid Services',
      description: 'Regular scheduled cleaning to maintain your busy lifestyle',
      icon: '🧹',
      features: ['Weekly/bi-weekly', 'Monthly service', 'Custom schedules', 'Same cleaner option']
    },
    {
      title: 'Window Washing',
      description: 'Crystal clear windows that let the light shine through',
      icon: '🪟',
      features: ['Interior & exterior', 'Screen cleaning', 'Track cleaning', 'Streak-free guarantee']
    }
  ]

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Cleaning Services Tailored to Your Needs
          </h2>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            From weekly home maintenance to specialized commercial cleaning, we offer comprehensive 
            solutions that fit your schedule and budget. All services include our satisfaction guarantee.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {services.map((service, index) => (
            <div key={index} className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow duration-200 border border-gray-100">
              <div className="text-4xl mb-4">{service.icon}</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">{service.title}</h3>
              <p className="text-gray-700 mb-4">{service.description}</p>
              <ul className="space-y-2">
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center text-sm text-gray-700">
                    <svg className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="bg-blue-600 rounded-2xl p-8 lg:p-12 text-center">
          <h3 className="text-2xl lg:text-3xl font-bold text-white mb-4">
            Not Sure Which Service You Need?
          </h3>
          <p className="text-white text-lg mb-8 max-w-2xl mx-auto">
            We'll help you choose the perfect cleaning package during your free consultation. 
            No obligation, just expert advice tailored to your situation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-8 py-3 bg-white text-blue-600 font-semibold rounded-lg hover:bg-gray-50 transition-colors duration-200"
            >
              Get Free Consultation
            </Link>
            <a
              href="tel:978-312-7711"
              className="inline-flex items-center justify-center px-8 py-3 bg-blue-700 text-white font-semibold rounded-lg hover:bg-blue-800 transition-colors duration-200"
            >
              Call 978-312-7711
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}