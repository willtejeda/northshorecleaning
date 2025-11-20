import Link from 'next/link'

export default function FAQPreview() {
  const faqs = [
    {
      question: "Can you handle same-day turnovers for back-to-back bookings?",
      answer: "Absolutely! Same-day turnovers are our specialty. We guarantee 2-4 hour turnarounds for standard properties. Just sync your Airbnb calendar with us, and we'll automatically schedule cleanings between your guests."
    },
    {
      question: "How do I know the cleaning was done properly before my guest arrives?",
      answer: "Every single clean includes photo documentation sent directly to you before guest check-in. You'll receive photos of key areas (kitchen, bathrooms, bedrooms) so you can verify everything is perfect. We also report any maintenance issues we discover."
    },
    {
      question: "What if my regular cleaner is sick or unavailable?",
      answer: "We have a backup cleaner network specifically for this reason. If your assigned cleaner is unavailable, we automatically dispatch a backup from our trained team. You'll never have to scramble to find last-minute coverage."
    },
    {
      question: "How does pricing work for Airbnb turnovers?",
      answer: "Pricing is based on property size, location, and service frequency. Most 2-3 bedroom properties range from $80-$150 per turnover. We offer volume discounts for hosts with multiple properties or high booking frequency. Text us your address for an instant quote!"
    }
  ]

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-block px-4 py-2 bg-orange-100 text-orange-700 rounded-full text-sm font-semibold mb-4">
            COMMON HOST QUESTIONS
          </div>
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Questions Airbnb Hosts Ask Us
          </h2>
          <p className="text-xl text-gray-700">
            We understand the unique challenges of managing short-term rentals. Here&apos;s what hosts want to know.
          </p>
        </div>

        {/* FAQ List */}
        <div className="space-y-6 mb-12">
          {faqs.map((faq, index) => (
            <div key={index} className="bg-white rounded-xl p-6 shadow-sm border-2 border-gray-100 hover:border-blue-200 transition-colors duration-200">
              <h3 className="text-lg font-semibold text-gray-900 mb-3 flex items-start">
                <span className="text-blue-600 mr-3 flex-shrink-0">Q:</span>
                <span>{faq.question}</span>
              </h3>
              <p className="text-gray-700 leading-relaxed ml-8">
                <span className="text-green-600 font-semibold mr-2">A:</span>
                {faq.answer}
              </p>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center bg-white rounded-xl p-8 shadow-lg border-2 border-blue-100">
          <p className="text-gray-700 mb-6 text-lg">
            Have more questions about our Airbnb cleaning services?
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/faq"
              className="inline-flex items-center justify-center px-8 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors duration-200"
            >
              View All FAQs
              <svg className="w-5 h-5 ml-2" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </Link>
            <a
              href="tel:978-312-7711"
              className="inline-flex items-center justify-center px-8 py-3 bg-orange-500 text-white font-semibold rounded-lg hover:bg-orange-600 transition-colors duration-200"
            >
              📞 Call Us Now
            </a>
          </div>
          <p className="text-sm text-gray-600 mt-4">
            💬 <strong>Text-friendly:</strong> Send us your questions anytime at 978-312-7711
          </p>
        </div>
      </div>
    </section>
  )
}