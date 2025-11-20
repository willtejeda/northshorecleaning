export default function About() {
  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-blue-50 via-white to-orange-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-block px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-semibold mb-4">
            ABOUT US
          </div>
          <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Airbnb Cleaning Specialists Serving North Shore Hosts
          </h1>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            Built by hosts, for hosts. We understand the unique challenges of managing short-term rentals.
          </p>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Story</h2>
            
            <p className="text-gray-700 text-lg leading-relaxed mb-6">
              North Shore Cleaning Pros was founded by former Airbnb hosts who experienced firsthand the stress of managing turnovers. We know what it&apos;s like to worry about cleaner no-shows, back-to-back bookings, and maintaining 5-star reviews while juggling everything else.
            </p>
            
            <p className="text-gray-700 text-lg leading-relaxed mb-6">
              That&apos;s why we built a cleaning service specifically designed for the unique needs of short-term rental hosts. We&apos;re not just another cleaning company—we&apos;re your partner in maximizing your rental revenue and guest satisfaction.
            </p>

            <h2 className="text-3xl font-bold text-gray-900 mb-6 mt-12">What Makes Us Different</h2>
            
            <div className="grid md:grid-cols-2 gap-8 mb-8">
              <div className="bg-blue-50 rounded-xl p-6 border-2 border-blue-100">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">🎯 Airbnb-Focused</h3>
                <p className="text-gray-700">
                  We follow Airbnb&apos;s 5-step enhanced cleaning protocol and understand the platform&apos;s standards. Every clean is optimized for 5-star reviews.
                </p>
              </div>
              
              <div className="bg-orange-50 rounded-xl p-6 border-2 border-orange-100">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">⚡ Same-Day Turnovers</h3>
                <p className="text-gray-700">
                  2-4 hour guaranteed turnarounds for back-to-back bookings. We work around your calendar, not the other way around.
                </p>
              </div>
              
              <div className="bg-green-50 rounded-xl p-6 border-2 border-green-100">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">📸 Photo Documentation</h3>
                <p className="text-gray-700">
                  Every clean includes photos sent before guest arrival. Protect yourself from disputes and verify quality remotely.
                </p>
              </div>
              
              <div className="bg-purple-50 rounded-xl p-6 border-2 border-purple-100">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">🛡️ Backup Network</h3>
                <p className="text-gray-700">
                  Never worry about no-shows again. Our backup cleaner network ensures your property is always ready for guests.
                </p>
              </div>
            </div>

            <h2 className="text-3xl font-bold text-gray-900 mb-6 mt-12">Our Service Area</h2>
            
            <p className="text-gray-700 text-lg leading-relaxed mb-6">
              We proudly serve Airbnb and vacation rental hosts across Greater Boston and the North Shore of Massachusetts, including:
            </p>
            
            <div className="grid md:grid-cols-3 gap-4 mb-8">
              <div className="bg-gray-50 rounded-lg p-4">
                <p className="font-semibold text-gray-900">📍 Newburyport</p>
              </div>
              <div className="bg-gray-50 rounded-lg p-4">
                <p className="font-semibold text-gray-900">📍 Salem</p>
              </div>
              <div className="bg-gray-50 rounded-lg p-4">
                <p className="font-semibold text-gray-900">📍 Beverly</p>
              </div>
              <div className="bg-gray-50 rounded-lg p-4">
                <p className="font-semibold text-gray-900">📍 Gloucester</p>
              </div>
              <div className="bg-gray-50 rounded-lg p-4">
                <p className="font-semibold text-gray-900">📍 Rockport</p>
              </div>
              <div className="bg-gray-50 rounded-lg p-4">
                <p className="font-semibold text-gray-900">📍 Danvers</p>
              </div>
              <div className="bg-gray-50 rounded-lg p-4">
                <p className="font-semibold text-gray-900">📍 North Andover</p>
              </div>
              <div className="bg-gray-50 rounded-lg p-4">
                <p className="font-semibold text-gray-900">📍 West Newbury</p>
              </div>
              <div className="bg-gray-50 rounded-lg p-4">
                <p className="font-semibold text-gray-900">📍 Surrounding Areas</p>
              </div>
            </div>

            <h2 className="text-3xl font-bold text-gray-900 mb-6 mt-12">Our Commitment to You</h2>
            
            <p className="text-gray-700 text-lg leading-relaxed mb-6">
              We&apos;re fully insured and bonded, use eco-friendly cleaning products safe for guests and the environment, and maintain the highest standards of professionalism. Our team is background-checked, trained in Airbnb cleaning protocols, and dedicated to helping you succeed as a host.
            </p>
            
            <p className="text-gray-700 text-lg leading-relaxed font-semibold">
              Ready to focus on growing your rental business instead of worrying about cleaning? Let&apos;s talk.
            </p>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-blue-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center text-white">
            <div>
              <div className="text-4xl font-bold mb-2">500+</div>
              <div className="text-blue-100">Properties Serviced</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">4.9★</div>
              <div className="text-blue-100">Average Rating</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">5+</div>
              <div className="text-blue-100">Years Experience</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">2-4hr</div>
              <div className="text-blue-100">Turnover Time</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Ready to Partner with Us?
          </h2>
          <p className="text-xl text-gray-700 mb-8">
            Join 500+ North Shore hosts who trust us with their properties. Get a custom quote today.
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
              className="inline-flex items-center justify-center px-8 py-4 bg-blue-600 text-white font-bold rounded-lg hover:bg-blue-700 transition-colors duration-200 shadow-lg"
            >
              📞 Call 978-312-7711
            </a>
          </div>
        </div>
      </section>
    </main>
  )
}