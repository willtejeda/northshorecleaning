export default function FAQ() {
  const faqs = [
    {
      question: "What areas do you serve?",
      answer: "We proudly serve the North Shore of Massachusetts and Southern New Hampshire, including Newburyport, Amesbury, Salisbury, West Newbury, Rowley, Georgetown, and Seabrook."
    },
    {
      question: "Are you insured and bonded?",
      answer: "Yes, we are fully insured and bonded for your peace of mind. Our team is professional, trustworthy, and committed to providing a secure and reliable service."
    },
    {
      question: "Do I need to be home for the cleaning?",
      answer: "No, you don't need to be home. Many of our clients provide us with a key or a code to access their property. We'll coordinate with you to arrange the most convenient and secure way to enter your home or business."
    },
    {
      question: "What cleaning products do you use?",
      answer: "We use high-quality, eco-friendly cleaning products that are safe for your family, pets, and the environment. If you have specific product preferences or allergies, please let us know, and we'll do our best to accommodate your needs."
    },
    {
      question: "How do you determine your rates?",
      answer: "Our rates are based on the size of your space, the type of cleaning service you require, and the frequency of cleaning. We offer free, no-obligation estimates to provide you with an accurate and transparent quote. Contact us to schedule a walkthrough or discuss your needs over the phone."
    },
    {
      question: "What is your cancellation policy?",
      answer: "We kindly request at least 24 hours' notice if you need to cancel or reschedule your appointment. Cancellations made with less than 24 hours' notice may be subject to a fee. Please refer to our full cancellation policy for more details."
    },
    {
      question: "What payment methods do you accept?",
      answer: "We accept credit and debit cards (Visa, MasterCard, American Express, Discover), Venmo or PayPal, cash or check (made payable to North Shore Cleaning Pros), and online payments via invoice. Payment is due at the time of service unless otherwise agreed upon. For recurring services, we also offer automatic billing for added convenience."
    }
  ]

  const cancellationPolicy = {
    title: "Cancellation Policy",
    content: "We understand that life happens! If you need to cancel or reschedule your appointment, we kindly ask for at least 24 hours' notice. Cancellations made with less than 24 hours' notice may be subject to a cancellation fee of up to 50% of the scheduled service. No-shows may incur the full service charge. This policy helps us respect the time of our team and other clients waiting for openings. If you're on a recurring schedule and need to pause services, just let us know—we're happy to accommodate."
  }

  const satisfactionGuarantee = {
    title: "Satisfaction Guarantee",
    content: "Your satisfaction is our top priority. If you're not completely happy with a cleaning, simply let us know within 24 hours, and we'll come back to make it right—free of charge. We stand by our work and want every homeowner and business owner to feel confident in choosing us. If something wasn't done to your expectations, we'll correct it promptly—no hassle, no stress."
  }

  return (
    <main className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Frequently Asked Questions
          </h1>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            Have questions? We've got answers! Here are some of the most common questions we receive from our clients.
          </p>
        </div>
      </section>

      {/* FAQ List */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-6 mb-12">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-white rounded-xl p-8 shadow-sm border border-gray-100">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  {faq.question}
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  {faq.answer}
                </p>
              </div>
            ))}
          </div>

          {/* Policy Sections */}
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="bg-blue-50 rounded-xl p-8 border border-blue-100">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                {cancellationPolicy.title}
              </h3>
              <p className="text-gray-700 leading-relaxed">
                {cancellationPolicy.content}
              </p>
            </div>
            
            <div className="bg-green-50 rounded-xl p-8 border border-green-100">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                {satisfactionGuarantee.title}
              </h3>
              <p className="text-gray-700 leading-relaxed">
                {satisfactionGuarantee.content}
              </p>
            </div>
          </div>

          {/* CTA */}
          <div className="text-center">
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">
              Don't see your question here?
            </h3>
            <p className="text-gray-700 mb-8">
              Feel free to contact us directly. We're always happy to help!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="inline-flex items-center px-8 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors duration-200"
              >
                Contact Us
              </a>
              <a
                href="tel:978-312-7711"
                className="inline-flex items-center px-8 py-3 bg-gray-100 text-gray-700 font-semibold rounded-lg hover:bg-gray-200 transition-colors duration-200"
              >
                Call 978-312-7711
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}