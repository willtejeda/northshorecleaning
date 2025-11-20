import Link from 'next/link'

export default function Services() {
  const services = [
    {
      title: 'Standard Turnover Cleaning',
      description: 'Complete reset between guests with our proven checklist',
      icon: '🏠',
      features: ['Full kitchen & bathroom sanitization', 'Fresh linens & towels', 'Floors vacuumed & mopped', 'Trash removal & restocking'],
      turnaround: '2-4 hours'
    },
    {
      title: 'Deep Cleaning',
      description: 'Monthly or seasonal deep cleans to maintain 5-star standards',
      icon: '✨',
      features: ['Baseboards & window sills', 'Inside appliances & cabinets', 'Light fixtures & ceiling fans', 'Grout & tile deep clean'],
      turnaround: '4-6 hours'
    },
    {
      title: 'Same-Day Turnovers',
      description: 'Back-to-back bookings? We handle the tight schedule',
      icon: '⚡',
      features: ['Priority scheduling', 'Dedicated team assignment', 'Real-time status updates', 'Photo confirmation'],
      turnaround: '2-3 hours'
    },
    {
      title: 'Linen Service',
      description: 'Hotel-quality linens delivered, laundered, and restocked',
      icon: '🛏️',
      features: ['Premium quality linens', 'Professional laundering', 'Delivery & pickup included', 'Inventory management'],
      turnaround: 'Add-on service'
    },
    {
      title: 'Restocking Service',
      description: 'Never run out of essentials - we handle the shopping',
      icon: '🧴',
      features: ['Toiletries & paper products', 'Coffee & tea supplies', 'Cleaning supplies', 'Custom shopping lists'],
      turnaround: 'Add-on service'
    },
    {
      title: 'Inspection & Documentation',
      description: 'Protect yourself with detailed photo reports',
      icon: '📸',
      features: ['Before/after photos', 'Damage documentation', 'Maintenance issue reporting', 'Guest dispute protection'],
      turnaround: 'Included free'
    }
  ]

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-semibold mb-4">
            AIRBNB TURNOVER SPECIALISTS
          </div>
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Services Built for Short-Term Rental Hosts
          </h2>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            From standard turnovers to full-service property management, we handle everything 
            so you can focus on maximizing your bookings and revenue.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {services.map((service, index) => (
            <div key={index} className="bg-white rounded-xl p-6 shadow-sm hover:shadow-lg transition-all duration-200 border border-gray-100 hover:border-blue-200">
              <div className="flex items-start justify-between mb-4">
                <div className="text-4xl">{service.icon}</div>
                <span className="text-xs font-semibold text-orange-600 bg-orange-50 px-3 py-1 rounded-full">
                  {service.turnaround}
                </span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">{service.title}</h3>
              <p className="text-gray-700 mb-4">{service.description}</p>
              <ul className="space-y-2">
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-start text-sm text-gray-700">
                    <svg className="w-4 h-4 text-green-500 mr-2 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Value Props Section */}
        <div className="bg-gradient-to-r from-blue-600 to-blue-700 rounded-2xl p-8 lg:p-12 mb-12">
          <div className="grid md:grid-cols-3 gap-8 text-white text-center">
            <div>
              <div className="text-4xl font-bold mb-2">100%</div>
              <div className="text-blue-100">On-Time Guarantee</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">24/7</div>
              <div className="text-blue-100">Emergency Coverage</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">$0</div>
              <div className="text-blue-100">Setup or Hidden Fees</div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-white rounded-2xl p-8 lg:p-12 text-center shadow-lg border-2 border-orange-100">
          <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-4">
            Ready to Automate Your Airbnb Cleaning?
          </h3>
          <p className="text-gray-700 text-lg mb-8 max-w-2xl mx-auto">
            Join 500+ North Shore hosts who trust us with their properties. Get a custom quote 
            based on your property size, location, and booking frequency.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-8 py-4 bg-orange-500 text-white font-bold rounded-lg hover:bg-orange-600 transition-colors duration-200 shadow-lg text-lg"
            >
              Get Custom Quote →
            </Link>
            <a
              href="tel:978-312-7711"
              className="inline-flex items-center justify-center px-8 py-4 bg-blue-600 text-white font-bold rounded-lg hover:bg-blue-700 transition-colors duration-200 shadow-lg text-lg"
            >
              📞 Call 978-312-7711
            </a>
          </div>
          <p className="text-sm text-gray-600 mt-6">
            💬 <strong>Text us your property address</strong> for an instant ballpark estimate
          </p>
        </div>
      </div>
    </section>
  )
}