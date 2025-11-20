export default function Testimonials() {
  const testimonials = [
    {
      name: "Sarah M.",
      location: "Newburyport, MA",
      rating: 5,
      text: "As a working mom with two kids, I was constantly stressed about keeping the house clean. North Shore Cleaning Pros has been a game-changer! They're reliable, thorough, and I love that they use eco-friendly products. My kids can play safely on the floors right after cleaning.",
      service: "Weekly Home Cleaning"
    },
    {
      name: "Jennifer T.",
      location: "Danvers, MA",
      rating: 5,
      text: "I've tried several cleaning services over the years, but none compare to North Shore Cleaning Pros. They're always on time, professional, and the quality is consistent every single visit. I finally found a service I can trust!",
      service: "Bi-weekly Cleaning"
    },
    {
      name: "Mike R.",
      location: "North Andover, MA",
      rating: 5,
      text: "We needed move-out cleaning for our rental property, and they exceeded expectations. The place looked better than when we moved in! They even helped us get our full security deposit back. Highly recommend!",
      service: "Move-Out Cleaning"
    },
    {
      name: "Lisa K.",
      location: "West Newbury, MA",
      rating: 5,
      text: "I was nervous about having strangers in my home, but the team was so professional and respectful. They work around my schedule and even accommodate my dog. The 24-hour satisfaction guarantee gave me confidence to try them, and I've been thrilled with every visit.",
      service: "Monthly Deep Cleaning"
    }
  ]

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            What Your Neighbors Are Saying
          </h2>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            Join hundreds of satisfied customers across the North Shore who&apos;ve discovered
            the peace of mind that comes with a truly reliable cleaning service.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-gray-50 rounded-xl p-8 border border-gray-100">
              {/* Rating */}
              <div className="flex mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <svg key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>

              {/* Quote */}
              <blockquote className="text-gray-700 mb-6 leading-relaxed">
                &ldquo;{testimonial.text}&rdquo;
              </blockquote>

              {/* Author Info */}
              <div className="flex items-center">
                <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center mr-4">
                  <span className="text-white font-semibold text-lg">
                    {testimonial.name.charAt(0)}
                  </span>
                </div>
                <div>
                  <p className="font-semibold text-gray-900">{testimonial.name}</p>
                  <p className="text-sm text-gray-700">{testimonial.location}</p>
                  <p className="text-sm text-blue-700 font-medium">{testimonial.service}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Stats Section */}
        <div className="bg-blue-600 rounded-2xl p-8 lg:p-12">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl lg:text-4xl font-bold text-white mb-2">500+</div>
              <div className="text-white">Happy Customers</div>
            </div>
            <div>
              <div className="text-3xl lg:text-4xl font-bold text-white mb-2">4.9/5</div>
              <div className="text-white">Average Rating</div>
            </div>
            <div>
              <div className="text-3xl lg:text-4xl font-bold text-white mb-2">5+</div>
              <div className="text-white">Years Experience</div>
            </div>
            <div>
              <div className="text-3xl lg:text-4xl font-bold text-white mb-2">24hr</div>
              <div className="text-white">Satisfaction Guarantee</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}