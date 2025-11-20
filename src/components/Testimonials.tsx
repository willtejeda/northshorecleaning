export default function Testimonials() {
  const testimonials = [
    {
      name: "Jessica P.",
      location: "Newburyport, MA",
      propertyType: "3BR Beach House",
      rating: 5,
      text: "I manage 4 Airbnb properties and North Shore Cleaning Pros has been a lifesaver! They handle same-day turnovers flawlessly, send me photos before each guest arrives, and I haven't had a single cleanliness complaint in 8 months. My 5-star rating went from 4.6 to 4.9!",
      service: "Standard Turnover + Photo Documentation"
    },
    {
      name: "Michael R.",
      location: "Salem, MA",
      propertyType: "Downtown Condo",
      rating: 5,
      text: "As a Superhost with back-to-back bookings, I need reliability. Their backup cleaner network saved me twice when my regular cleaner was sick. The calendar integration is seamless - they just show up when needed. Worth every penny.",
      service: "Same-Day Turnovers"
    },
    {
      name: "Amanda K.",
      location: "Gloucester, MA",
      propertyType: "Waterfront Cottage",
      rating: 5,
      text: "The linen service is a game-changer! No more laundry runs between guests. They deliver fresh, hotel-quality linens and handle all the washing. My guests constantly comment on how crisp and clean everything smells. Highly recommend!",
      service: "Turnover + Linen Service"
    },
    {
      name: "David & Sarah T.",
      location: "Rockport, MA",
      propertyType: "2 Properties",
      rating: 5,
      text: "We were nervous about trusting someone with our vacation rental, but the photo documentation gives us complete peace of mind. They even caught a broken dishwasher before our next guest arrived. Professional, thorough, and communicative.",
      service: "Deep Cleaning + Inspection Reports"
    }
  ]

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-2 bg-green-100 text-green-700 rounded-full text-sm font-semibold mb-4">
            TRUSTED BY AIRBNB HOSTS
          </div>
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            What North Shore Hosts Are Saying
          </h2>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            Join hundreds of successful Airbnb hosts who&apos;ve discovered the secret to maintaining
            5-star reviews while scaling their rental business.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-gradient-to-br from-gray-50 to-white rounded-xl p-8 border-2 border-gray-100 hover:border-blue-200 transition-colors duration-200">
              {/* Rating */}
              <div className="flex items-center mb-4">
                <div className="flex mr-3">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <svg key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <span className="text-sm font-semibold text-blue-600 bg-blue-50 px-3 py-1 rounded-full">
                  {testimonial.propertyType}
                </span>
              </div>

              {/* Quote */}
              <blockquote className="text-gray-700 mb-6 leading-relaxed">
                &ldquo;{testimonial.text}&rdquo;
              </blockquote>

              {/* Author Info */}
              <div className="flex items-center justify-between pt-6 border-t border-gray-200">
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-blue-700 rounded-full flex items-center justify-center mr-4">
                    <span className="text-white font-semibold text-lg">
                      {testimonial.name.charAt(0)}
                    </span>
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">{testimonial.name}</p>
                    <p className="text-sm text-gray-600">{testimonial.location}</p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="text-xs text-gray-500 uppercase tracking-wide">Service</p>
                  <p className="text-sm text-blue-700 font-medium">{testimonial.service}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Stats Section */}
        <div className="bg-gradient-to-r from-blue-600 to-blue-700 rounded-2xl p-8 lg:p-12 shadow-xl">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl lg:text-4xl font-bold text-white mb-2">500+</div>
              <div className="text-blue-100">Properties Serviced</div>
            </div>
            <div>
              <div className="text-3xl lg:text-4xl font-bold text-white mb-2">4.9★</div>
              <div className="text-blue-100">Average Host Rating</div>
            </div>
            <div>
              <div className="text-3xl lg:text-4xl font-bold text-white mb-2">5+</div>
              <div className="text-blue-100">Years Serving Hosts</div>
            </div>
            <div>
              <div className="text-3xl lg:text-4xl font-bold text-white mb-2">2-4hr</div>
              <div className="text-blue-100">Turnover Guarantee</div>
            </div>
          </div>
        </div>

        {/* Social Proof Banner */}
        <div className="mt-12 text-center">
          <div className="inline-flex items-center space-x-2 text-gray-600">
            <svg className="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
            <span className="text-sm">
              <strong>Trusted by Superhosts</strong> in Newburyport, Salem, Beverly, Gloucester, Rockport & surrounding areas
            </span>
          </div>
        </div>
      </div>
    </section>
  )
}