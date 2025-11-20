import Link from 'next/link'

export default function FAQPreview() {
  const faqs = [
    {
      question: "Do I need to be home during the cleaning?",
      answer: "No, you don't need to be home. Many of our clients provide us with a key or access code. We'll coordinate with you to find the most convenient arrangement."
    },
    {
      question: "Are your cleaning products safe for children and pets?",
      answer: "Absolutely! We use high-quality, eco-friendly cleaning products that are safe for your family, pets, and the environment. If you have specific preferences or allergies, just let us know."
    },
    {
      question: "How do you determine your rates?",
      answer: "Our rates are based on the size of your space, the type of cleaning service, and frequency. We offer free, no-obligation estimates to provide you with an accurate and transparent quote."
    },
    {
      question: "What is your cancellation policy?",
      answer: "We kindly request at least 24 hours' notice for cancellations or rescheduling. This helps us respect the time of our team and other clients waiting for openings."
    }
  ]

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Common Questions From Busy Parents Like You
          </h2>
          <p className="text-xl text-gray-700">
            We understand you have questions. Here are the answers to what most parents ask us.
          </p>
        </div>

        {/* FAQ List */}
        <div className="space-y-6 mb-12">
          {faqs.map((faq, index) => (
            <div key={index} className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                {faq.question}
              </h3>
              <p className="text-gray-700 leading-relaxed">
                {faq.answer}
              </p>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center">
          <p className="text-gray-700 mb-6">
            Have more questions? We've got answers!
          </p>
          <Link
            href="/faq"
            className="inline-flex items-center px-8 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors duration-200"
          >
            View All FAQs
            <svg className="w-5 h-5 ml-2" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  )
}