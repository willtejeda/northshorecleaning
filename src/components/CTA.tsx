'use client'

import { useState } from 'react'

export default function CTA() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    propertyAddress: '',
    propertyType: '',
    bookingFrequency: '',
    message: ''
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission
    console.log('Host inquiry submitted:', formData)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  return (
    <section className="py-20 bg-gradient-to-br from-blue-600 to-blue-700">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="inline-block px-4 py-2 bg-white/20 text-white rounded-full text-sm font-semibold mb-4">
            🚀 START MAXIMIZING YOUR REVENUE
          </div>
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
            Ready to Automate Your Airbnb Cleaning?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Join 500+ North Shore hosts who trust us with their properties. Get a custom quote 
            in under 2 minutes - no commitment required.
          </p>
        </div>

        <div className="bg-white rounded-2xl p-8 lg:p-12 shadow-2xl">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                  Your Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="John Smith"
                />
              </div>
              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                  Phone Number *
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="978-555-0123"
                />
              </div>
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                Email Address
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="host@example.com"
              />
            </div>

            <div>
              <label htmlFor="propertyAddress" className="block text-sm font-medium text-gray-700 mb-2">
                Property Address *
              </label>
              <input
                type="text"
                id="propertyAddress"
                name="propertyAddress"
                value={formData.propertyAddress}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="123 Main St, Newburyport, MA"
              />
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="propertyType" className="block text-sm font-medium text-gray-700 mb-2">
                  Property Type *
                </label>
                <select
                  id="propertyType"
                  name="propertyType"
                  value={formData.propertyType}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                >
                  <option value="">Select property type...</option>
                  <option value="studio">Studio/1 Bedroom</option>
                  <option value="2-3br">2-3 Bedrooms</option>
                  <option value="4plus">4+ Bedrooms</option>
                  <option value="multi-unit">Multi-Unit Property</option>
                </select>
              </div>
              <div>
                <label htmlFor="bookingFrequency" className="block text-sm font-medium text-gray-700 mb-2">
                  Booking Frequency
                </label>
                <select
                  id="bookingFrequency"
                  name="bookingFrequency"
                  value={formData.bookingFrequency}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                >
                  <option value="">How often do you book?</option>
                  <option value="daily">Daily/Back-to-back</option>
                  <option value="weekly">2-3 times per week</option>
                  <option value="monthly">Few times per month</option>
                  <option value="seasonal">Seasonal only</option>
                </select>
              </div>
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                Additional Details (Optional)
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={4}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="Tell us about your property, special requirements, or preferred schedule..."
              />
            </div>

            <button
              type="submit"
              className="w-full bg-orange-500 text-white px-6 py-4 rounded-lg font-bold text-lg hover:bg-orange-600 transition-colors duration-200 shadow-lg"
            >
              GET MY CUSTOM QUOTE →
            </button>

            <p className="text-sm text-gray-600 text-center">
              💬 Prefer to text? Send your property address to <a href="sms:978-312-7711" className="text-blue-600 font-semibold hover:underline">978-312-7711</a> for instant pricing
            </p>
          </form>

          {/* Contact Info */}
          <div className="mt-8 pt-8 border-t border-gray-200">
            <div className="text-center">
              <p className="text-gray-600 mb-4 font-medium">Or reach out directly:</p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="tel:978-312-7711"
                  className="inline-flex items-center justify-center px-6 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors duration-200"
                >
                  <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                  </svg>
                  📞 978-312-7711
                </a>
                <a
                  href="mailto:info.northshorecleaningpros@gmail.com"
                  className="inline-flex items-center justify-center px-6 py-3 bg-gray-100 text-gray-700 font-medium rounded-lg hover:bg-gray-200 transition-colors duration-200"
                >
                  <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                    <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                  </svg>
                  Email Us
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Guarantee Badges */}
        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <div className="inline-flex items-center px-6 py-3 bg-white rounded-full shadow-lg">
            <svg className="w-5 h-5 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
            <span className="text-gray-900 font-medium">Same-Day Turnovers</span>
          </div>
          <div className="inline-flex items-center px-6 py-3 bg-white rounded-full shadow-lg">
            <svg className="w-5 h-5 text-blue-600 mr-2" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z" clipRule="evenodd" />
            </svg>
            <span className="text-gray-900 font-medium">Photo Documentation</span>
          </div>
          <div className="inline-flex items-center px-6 py-3 bg-white rounded-full shadow-lg">
            <svg className="w-5 h-5 text-orange-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
            <span className="text-gray-900 font-medium">Backup Coverage</span>
          </div>
        </div>
      </div>
    </section>
  )
}