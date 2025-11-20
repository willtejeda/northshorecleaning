export default function Services() {
  const services = [
    {
      title: 'Home Cleaning',
      description: 'Regular maintenance cleaning to keep your home spotless and healthy',
      icon: '🏠',
      features: ['Kitchen & bathrooms', 'Dusting & vacuuming', 'Floor cleaning', 'Trash removal'],
      details: 'Our regular home cleaning service is perfect for busy families who want to maintain a clean, healthy living environment. We use eco-friendly products that are safe for children and pets.'
    },
    {
      title: 'Deep Cleaning',
      description: 'Thorough top-to-bottom cleaning for that fresh-start feeling',
      icon: '✨',
      features: ['Baseboards & trim', 'Inside appliances', 'Window sills', 'Light fixtures'],
      details: 'Our deep cleaning service goes beyond the surface to tackle built-up grime and dirt. Perfect for spring cleaning or preparing for special occasions.'
    },
    {
      title: 'Move-In/Move-Out',
      description: 'Get your deposit back or start fresh in your new home',
      icon: '📦',
      features: ['Complete cleanout', 'Cabinet interiors', 'Appliance cleaning', 'Final touch-ups'],
      details: 'Whether you\'re moving in or out, our move cleaning service ensures every corner is spotless. We help you get your security deposit back or start fresh in your new space.'
    },
    {
      title: 'Commercial Cleaning',
      description: 'Professional cleaning for offices, retail, and business spaces',
      icon: '🏢',
      features: ['Office spaces', 'Retail stores', 'Medical offices', 'After-hours service'],
      details: 'Keep your business looking professional with our commercial cleaning services. We work around your schedule to minimize disruption to your operations.'
    },
    {
      title: 'Maid Services',
      description: 'Regular scheduled cleaning to maintain your busy lifestyle',
      icon: '🧹',
      features: ['Weekly/bi-weekly', 'Monthly service', 'Custom schedules', 'Same cleaner option'],
      details: 'Our maid services provide consistent, reliable cleaning on a schedule that works for you. Choose the same cleaner for personalized service.'
    },
    {
      title: 'Window Washing',
      description: 'Crystal clear windows that let the light shine through',
      icon: '🪟',
      features: ['Interior & exterior', 'Screen cleaning', 'Track cleaning', 'Streak-free guarantee'],
      details: 'Professional window cleaning for a crystal-clear view. We clean interior and exterior windows, screens, and tracks for a complete clean.'
    }
  ]

  return (
    <main className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Our Services
          </h1>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            From weekly home cleanings to specialized commercial services, we offer a wide range of solutions to meet your needs. Our team uses eco-friendly products and proven methods to deliver a spotless finish every time.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-white rounded-xl p-8 shadow-sm border border-gray-100 card-hover">
                <div className="text-5xl mb-6">{service.icon}</div>
                <h3 className="text-2xl font-semibold text-gray-900 mb-4">{service.title}</h3>
                <p className="text-gray-700 mb-6">{service.description}</p>
                
                <div className="mb-6">
                  <h4 className="font-semibold text-gray-900 mb-3">What's Included:</h4>
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
                
                <p className="text-gray-700 text-sm leading-relaxed">{service.details}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-blue-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Not Sure Which Service is Right for You?
          </h2>
          <p className="text-xl text-white mb-8">
            We'll help you choose the perfect cleaning package during your free consultation. No obligation, just expert advice tailored to your situation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contact"
              className="inline-flex items-center justify-center px-8 py-3 bg-white text-blue-600 font-semibold rounded-lg hover:bg-gray-50 transition-colors duration-200"
            >
              Get Free Consultation
            </a>
            <a
              href="tel:978-312-7711"
              className="inline-flex items-center justify-center px-8 py-3 bg-blue-700 text-white font-semibold rounded-lg hover:bg-blue-800 transition-colors duration-200"
            >
              Call 978-312-7711
            </a>
          </div>
        </div>
      </section>
    </main>
  )
}