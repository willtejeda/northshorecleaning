'use client'

import { useState } from 'react'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
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
    <main className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-blue-50 via-white to-orange-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-block px-4 py-2 bg-orange-100 text-orange-700 rounded-full text-sm font-semibold mb-4">
            GET STARTED TODAY
          </div>
          <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Get Your Custom Airbnb Cleaning Quote
          </h1>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            Join 500+ North Shore hosts who trust us with their properties. Get a personalized 
            quote in under 2 minutes - no commitment required.
          </p>
        </div>
      </section>

      {/* Contact Content */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="bg-white rounded-xl p-8 shadow-lg border-2 border-blue-100">
              <h2 className="text-2xl font-semibold text-gray-900 mb-6">
                📋 Property Information
              </h2>
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
                      className="form-input"
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
                      className="form-input"
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
                    className="form-input"
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
                    className="form-input"
                    placeholder="123 Main St, Newburyport, MA"
                  />
                  <p className="text-xs text-gray-600 mt-1">💬 Or text this to 978-312-7711 for instant pricing</p>
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
                      className="form-input"
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
                      className="form-input"
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
                    className="form-textarea"
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
                  We typically respond within 30 minutes during business hours
                </p>
              </form>
            </div>

            {/* Contact Information */}
            <div className="space-y-8">
              <div>
                <h2 className="text-2xl font-semibold text-gray-900 mb-6">
                  📞 Get in Touch
                </h2>
                <div className="space-y-6">
                  <div className="flex items-start bg-blue-50 rounded-lg p-6 border-2 border-blue-100">
                    <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                      <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-1">Call or Text</h3>
                      <a href="tel:978-312-7711" className="text-blue-700 hover:text-blue-800 text-lg font-bold">
                        978-312-7711
                      </a>
                      <p className="text-sm text-gray-600 mt-1">Text-friendly! Send your property address for instant pricing</p>
                    </div>
                  </div>

                  <div className="flex items-start bg-gray-50 rounded-lg p-6 border-2 border-gray-200">
                    <div className="w-12 h-12 bg-gray-600 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                      <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                        <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-1">Email</h3>
                      <a href="mailto:info.northshorecleaningpros@gmail.com" className="text-blue-700 hover:text-blue-800 break-all">
                        info.northshorecleaningpros@gmail.com
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start bg-green-50 rounded-lg p-6 border-2 border-green-100">
                    <div className="w-12 h-12 bg-green-600 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                      <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-1">Service Area</h3>
                      <p className="text-gray-700 font-medium">
                        Greater Boston & North Shore MA
                      </p>
                      <p className="text-sm text-gray-600 mt-1">
                        Newburyport • Salem • Beverly • Gloucester • Rockport • Danvers • North Andover • West Newbury & surrounding areas
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start bg-orange-50 rounded-lg p-6 border-2 border-orange-100">
                    <div className="w-12 h-12 bg-orange-500 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                      <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-1">Response Time</h3>
                      <p className="text-gray-700 font-medium">
                        Usually within 30 minutes
                      </p>
                      <p className="text-sm text-gray-600 mt-1">
                        Monday-Sunday, 8am-8pm
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Why Choose Us */}
              <div className="bg-gradient-to-br from-blue-600 to-blue-700 rounded-xl p-8 text-white">
                <h3 className="font-semibold text-xl mb-4">✨ Why Hosts Choose Us</h3>
                <ul className="space-y-3 text-blue-50">
                  <li className="flex items-start">
                    <span className="mr-2">✓</span>
                    <span>Same-day turnovers (2-4 hours guaranteed)</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2">✓</span>
                    <span>Photo documentation before every check-in</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2">✓</span>
                    <span>Backup cleaner network (no more no-shows)</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2">✓</span>
                    <span>Calendar integration available</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2">✓</span>
                    <span>Trusted by 500+ North Shore hosts</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}