export default function About() {
  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            About North Shore Cleaning Pros
          </h1>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            Committed to Keeping Your Home Squeaky Clean
          </p>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none">
            <p className="text-gray-700 text-lg leading-relaxed mb-6">
              Welcome to North Shore Cleaning Pros, your trusted partner for exceptional residential and commercial cleaning services in Newburyport, MA, and the surrounding communities.
            </p>
            
            <p className="text-gray-700 text-lg leading-relaxed mb-6">
              Founded on the principles of integrity, reliability, and attention to detail, we are a locally owned and operated business dedicated to creating cleaner, healthier, and more enjoyable spaces for our clients. Our team is comprised of experienced and passionate cleaning professionals who take pride in their work and are committed to delivering consistent, high-quality results.
            </p>
            
            <p className="text-gray-700 text-lg leading-relaxed mb-6">
              Whether you&apos;re a homeowner looking for reliable house cleaning, deep cleaning, or move-in/move-out services—or a business owner in need of spotless office or retail cleaning—we&apos;ve got you covered. Our experienced, fully-insured team is dedicated to delivering sparkling results with eco-friendly products, personalized service, and flexible scheduling to fit your lifestyle or work hours.
            </p>
            
            <p className="text-gray-700 text-lg leading-relaxed mb-6">
              With a reputation built on trust, consistency, and attention to detail, North Shore Cleaning Pros is here to help you enjoy a cleaner, healthier space. We understand that every home and business is unique, which is why we tailor our cleaning services to your specific needs.
            </p>
            
            <p className="text-gray-700 text-lg leading-relaxed mb-6">
              Serving the North Shore and Southern New Hampshire communities, we&apos;re more than just a cleaning company—we&apos;re your local cleaning partner.
            </p>
            
            <p className="text-gray-700 text-lg leading-relaxed font-semibold">
              Clean home. Clean business. Clean start. Contact us today for a free estimate!
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-blue-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Ready to Experience the Difference?
          </h2>
          <p className="text-xl text-white mb-8">
            Join hundreds of satisfied customers who trust North Shore Cleaning Pros for their cleaning needs.
          </p>
          <a
            href="tel:978-312-7711"
            className="inline-flex items-center px-8 py-3 bg-white text-blue-600 font-semibold rounded-lg hover:bg-gray-50 transition-colors duration-200"
          >
            Call 978-312-7711
          </a>
        </div>
      </section>
    </main>
  )
}