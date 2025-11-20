export default function FAQ() {
  const faqs = [
    {
      question: "Can you handle same-day turnovers for back-to-back bookings?",
      answer: "Absolutely! Same-day turnovers are our specialty. We guarantee 2-4 hour turnarounds for standard properties. Just sync your Airbnb calendar with us (or send us your booking schedule), and we'll automatically schedule cleanings between your guests. We've successfully handled thousands of same-day turnovers for North Shore hosts."
    },
    {
      question: "How do I know the cleaning was done properly before my guest arrives?",
      answer: "Every single clean includes photo documentation sent directly to you before guest check-in. You'll receive photos of key areas (kitchen, bathrooms, bedrooms, living spaces) so you can verify everything is perfect from anywhere in the world. We also report any maintenance issues we discover during cleaning, so you can address them before they become guest complaints."
    },
    {
      question: "What if my regular cleaner is sick or unavailable?",
      answer: "We have a backup cleaner network specifically for this reason. If your assigned cleaner is unavailable, we automatically dispatch a backup from our trained team. You'll never have to scramble to find last-minute coverage or cancel a booking. This is one of the biggest reasons Airbnb hosts choose us over independent cleaners."
    },
    {
      question: "How does pricing work for Airbnb turnovers?",
      answer: "Pricing is based on property size, location, and service frequency. Most 2-3 bedroom properties range from $80-$150 per turnover. We offer volume discounts for hosts with multiple properties or high booking frequency (20+ turnovers/month). Text us your property address to 978-312-7711 for an instant ballpark estimate, or schedule a walkthrough for an exact quote."
    },
    {
      question: "Do you integrate with Airbnb or VRBO calendars?",
      answer: "Yes! We can sync with your Airbnb, VRBO, or property management software calendar to automatically schedule cleanings. You can also manually send us your booking schedule via text or email. We're flexible and work with whatever system you prefer."
    },
    {
      question: "What areas do you serve?",
      answer: "We serve Greater Boston and the North Shore of Massachusetts, including Newburyport, Salem, Beverly, Gloucester, Rockport, Danvers, North Andover, West Newbury, Amesbury, and surrounding communities. If you're unsure whether we cover your area, just text us your address!"
    },
    {
      question: "Are you insured and bonded?",
      answer: "Yes, we are fully insured and bonded for your peace of mind. All team members are background-checked and trained in Airbnb's 5-step enhanced cleaning protocol. We carry comprehensive liability insurance to protect both you and your guests."
    },
    {
      question: "Do I need to provide cleaning supplies?",
      answer: "No, we bring all professional-grade cleaning supplies and equipment. We use eco-friendly products that are safe for guests and meet Airbnb's standards. If you have specific product preferences or want us to use your supplies, we're happy to accommodate."
    },
    {
      question: "What's included in the linen service?",
      answer: "Our linen service includes hotel-quality sheets, pillowcases, towels, and bath mats. We deliver fresh linens for each turnover, remove used linens, and handle all professional laundering. You'll never have to worry about laundry again. This is especially popular with hosts managing multiple properties or those with high booking frequency."
    },
    {
      question: "How do you handle damage or missing items?",
      answer: "We document the property condition with photos after every clean. If we discover damage or missing items, we report it to you immediately with photo evidence. This protects you from guest disputes and helps you file accurate damage claims with Airbnb. Many hosts have saved thousands of dollars thanks to our documentation."
    }
  ]

  const cancellationPolicy = {
    title: "Cancellation Policy for Hosts",
    content: "We understand that guest cancellations happen! If your guest cancels and you need to cancel the cleaning, just give us 4 hours notice and there's no charge. For scheduled cleanings, we ask for 24 hours notice to avoid a cancellation fee. This policy helps us manage our team's schedule and serve all our host partners fairly."
  }

  const satisfactionGuarantee = {
    title: "5-Star Guarantee",
    content: "Your guest satisfaction is our priority. If a guest complains about cleanliness and you notify us within 24 hours of their check-in, we'll come back immediately to address the issue—free of charge. We stand by our work because your 5-star reviews are our success metric too."
  }

  return (
    <main className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-block px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-semibold mb-4">
            AIRBNB HOST FAQ
          </div>
          <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Questions Airbnb Hosts Ask Us
          </h1>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            We understand the unique challenges of managing short-term rentals. Here are answers 
            to the most common questions from North Shore Airbnb hosts.
          </p>
        </div>
      </section>

      {/* FAQ List */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-6 mb-12">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-white rounded-xl p-8 shadow-sm border-2 border-gray-100 hover:border-blue-200 transition-colors duration-200">
                <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-start">
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

          {/* Policy Sections */}
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="bg-blue-50 rounded-xl p-8 border-2 border-blue-100">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                {cancellationPolicy.title}
              </h3>
              <p className="text-gray-700 leading-relaxed">
                {cancellationPolicy.content}
              </p>
            </div>
            
            <div className="bg-green-50 rounded-xl p-8 border-2 border-green-100">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                {satisfactionGuarantee.title}
              </h3>
              <p className="text-gray-700 leading-relaxed">
                {satisfactionGuarantee.content}
              </p>
            </div>
          </div>

          {/* Quick Tips Section */}
          <div className="bg-gradient-to-r from-orange-50 to-orange-100 rounded-xl p-8 mb-12 border-2 border-orange-200">
            <h3 className="text-2xl font-semibold text-gray-900 mb-6">
              💡 Pro Tips for New Airbnb Hosts
            </h3>
            <ul className="space-y-3 text-gray-700">
              <li className="flex items-start">
                <span className="text-orange-500 mr-3 flex-shrink-0">✓</span>
                <span><strong>Schedule cleanings immediately after booking confirmation</strong> - Don&apos;t wait until the last minute</span>
              </li>
              <li className="flex items-start">
                <span className="text-orange-500 mr-3 flex-shrink-0">✓</span>
                <span><strong>Review photos before guest check-in</strong> - Catch any issues early</span>
              </li>
              <li className="flex items-start">
                <span className="text-orange-500 mr-3 flex-shrink-0">✓</span>
                <span><strong>Keep a backup key in a secure location</strong> - Makes cleaner access seamless</span>
              </li>
              <li className="flex items-start">
                <span className="text-orange-500 mr-3 flex-shrink-0">✓</span>
                <span><strong>Communicate special requests in advance</strong> - Extra attention to certain areas, etc.</span>
              </li>
              <li className="flex items-start">
                <span className="text-orange-500 mr-3 flex-shrink-0">✓</span>
                <span><strong>Consider linen service for properties with 15+ bookings/month</strong> - Huge time saver</span>
              </li>
            </ul>
          </div>

          {/* CTA */}
          <div className="text-center bg-white rounded-xl p-8 shadow-lg border-2 border-blue-100">
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">
              Still Have Questions?
            </h3>
            <p className="text-gray-700 mb-8 text-lg">
              We&apos;re here to help! Text, call, or email us anytime. Most hosts get responses within 30 minutes.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:978-312-7711"
                className="inline-flex items-center justify-center px-8 py-4 bg-orange-500 text-white font-bold rounded-lg hover:bg-orange-600 transition-colors duration-200 shadow-lg"
              >
                📞 Call 978-312-7711
              </a>
              <a
                href="/contact"
                className="inline-flex items-center justify-center px-8 py-4 bg-blue-600 text-white font-bold rounded-lg hover:bg-blue-700 transition-colors duration-200 shadow-lg"
              >
                Send Us a Message
              </a>
            </div>
            <p className="text-sm text-gray-600 mt-6">
              💬 <strong>Prefer texting?</strong> Send your questions to 978-312-7711 - we respond fast!
            </p>
          </div>
        </div>
      </section>
    </main>
  )
}