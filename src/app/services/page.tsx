export default function Services() {
  const services = [
    {
      title: 'Standard Turnover Cleaning',
      description: 'Complete reset between guests with our proven Airbnb checklist',
      icon: '🏠',
      features: ['Full kitchen & bathroom sanitization', 'Fresh linens & towels', 'Floors vacuumed & mopped', 'Trash removal & restocking'],
      details: 'Our standard turnover is designed for Airbnb hosts with regular bookings. We follow the 5-step enhanced cleaning protocol and complete most properties in 2-4 hours.',
      pricing: '$80-$150 per turnover'
    },
    {
      title: 'Deep Cleaning',
      description: 'Monthly or seasonal deep cleans to maintain 5-star standards',
      icon: '✨',
      features: ['Baseboards & window sills', 'Inside appliances & cabinets', 'Light fixtures & ceiling fans', 'Grout & tile deep clean'],
      details: 'Recommended monthly or quarterly to keep your property in top condition. Perfect for maintaining Superhost status and preventing negative reviews.',
      pricing: '$150-$300 per service'
    },
    {
      title: 'Same-Day Turnovers',
      description: 'Back-to-back bookings handled with priority scheduling',
      icon: '⚡',
      features: ['Priority scheduling', 'Dedicated team assignment', 'Real-time status updates', 'Photo confirmation'],
      details: 'When you have guests checking out at 11am and new guests arriving at 3pm, we make it happen. Guaranteed 2-3 hour turnaround for standard properties.',
      pricing: 'Standard rate + $20 rush fee'
    },
    {
      title: 'Linen Service',
      description: 'Hotel-quality linens delivered, laundered, and restocked',
      icon: '🛏️',
      features: ['Premium quality linens', 'Professional laundering', 'Delivery & pickup included', 'Inventory management'],
      details: 'Never worry about laundry again. We provide fresh, hotel-quality linens for every turnover and handle all washing. Perfect for hosts with multiple properties.',
      pricing: '$25-$50 per turnover'
    },
    {
      title: 'Restocking Service',
      description: 'Never run out of essentials - we handle the shopping',
      icon: '🧴',
      features: ['Toiletries & paper products', 'Coffee & tea supplies', 'Cleaning supplies', 'Custom shopping lists'],
      details: 'We monitor your inventory and restock essentials automatically. Customize your list to match your guest amenities and brand standards.',
      pricing: 'Cost of items + $15 service fee'
    },
    {
      title: 'Inspection & Documentation',
      description: 'Protect yourself with detailed photo reports',
      icon: '📸',
      features: ['Before/after photos', 'Damage documentation', 'Maintenance issue reporting', 'Guest dispute protection'],
      details: 'Included FREE with every turnover. Photos sent before each guest arrival give you peace of mind and protect you from false damage claims.',
      pricing: 'Included FREE'
    }
  ]

  return (
    <main className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-block px-4 py-2 bg-orange-100 text-orange-700 rounded-full text-sm font-semibold mb-4">
            AIRBNB CLEANING SERVICES
          </div>
          <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Services Built for Short-Term Rental Success
          </h1>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            From standard turnovers to full-service property management, we handle everything 
            so you can focus on maximizing bookings and revenue. All services include our 
            satisfaction guarantee and photo documentation.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-white rounded-xl p-8 shadow-sm hover:shadow-lg transition-all duration-200 border-2 border-gray-100 hover:border-blue-200">
                <div className="flex items-start justify-between mb-4">
                  <div className="text-5xl">{service.icon}</div>
                  <span className="text-xs font-bold text-orange-600 bg-orange-50 px-3 py-1 rounded-full">
                    {service.pricing}
                  </span>
                </div>
                <h3 className="text-2xl font-semibold text-gray-900 mb-4">{service.title}</h3>
                <p className="text-gray-700 mb-6">{service.description}</p>
                
                <div className="mb-6">
                  <h4 className="font-semibold text-gray-900 mb-3">What&apos;s Included:</h4>
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
                
                <p className="text-gray-700 text-sm leading-relaxed border-t border-gray-200 pt-4">
                  {service.details}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Add-On Services */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Popular Add-On Services
            </h2>
            <p className="text-xl text-gray-700">
              Customize your cleaning package with these popular extras
            </p>
          </div>
          
          <div className="grid md:grid-cols-4 gap-6">
            <div className="bg-blue-50 rounded-lg p-6 text-center border-2 border-blue-100">
              <div className="text-3xl mb-3">🪟</div>
              <h3 className="font-semibold text-gray-900 mb-2">Window Cleaning</h3>
              <p className="text-sm text-gray-700 mb-2">Interior & exterior</p>
              <p className="text-blue-600 font-bold">+$30-$60</p>
            </div>
            
            <div className="bg-green-50 rounded-lg p-6 text-center border-2 border-green-100">
              <div className="text-3xl mb-3">🌿</div>
              <h3 className="font-semibold text-gray-900 mb-2">Outdoor Spaces</h3>
              <p className="text-sm text-gray-700 mb-2">Patio, deck cleaning</p>
              <p className="text-green-600 font-bold">+$40-$80</p>
            </div>
            
            <div className="bg-purple-50 rounded-lg p-6 text-center border-2 border-purple-100">
              <div className="text-3xl mb-3">🧺</div>
              <h3 className="font-semibold text-gray-900 mb-2">Laundry Service</h3>
              <p className="text-sm text-gray-700 mb-2">Wash, dry, fold</p>
              <p className="text-purple-600 font-bold">+$25/load</p>
            </div>
            
            <div className="bg-orange-50 rounded-lg p-6 text-center border-2 border-orange-100">
              <div className="text-3xl mb-3">🔧</div>
              <h3 className="font-semibold text-gray-900 mb-2">Maintenance Check</h3>
              <p className="text-sm text-gray-700 mb-2">Light bulbs, filters</p>
              <p className="text-orange-600 font-bold">+$20</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-blue-700">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Ready to Automate Your Airbnb Cleaning?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Get a custom quote based on your property size, location, and booking frequency. 
            Most hosts save 10+ hours per month and see their ratings improve.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contact"
              className="inline-flex items-center justify-center px-8 py-4 bg-orange-500 text-white font-bold rounded-lg hover:bg-orange-600 transition-colors duration-200 shadow-lg"
            >
              Get Custom Quote →
            </a>
            <a
              href="tel:978-312-7711"
              className="inline-flex items-center justify-center px-8 py-4 bg-white text-blue-600 font-bold rounded-lg hover:bg-gray-50 transition-colors duration-200 shadow-lg"
            >
              📞 Call 978-312-7711
            </a>
          </div>
          <p className="text-sm text-blue-100 mt-6">
            💬 <strong>Text us your property address</strong> for an instant ballpark estimate
          </p>
        </div>
      </section>
    </main>
  )
}