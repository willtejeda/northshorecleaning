'use client'

import { useState } from 'react'

export default function Hero() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    propertyType: ''
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('Lead submitted:', formData)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-br from-slate-50 via-blue-50/30 to-cyan-50/50">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-400/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-cyan-400/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-blue-400/5 to-cyan-400/5 rounded-full blur-3xl"></div>
      </div>

      {/* Grid Pattern Overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:24px_24px]"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Column - Content */}
          <div className="space-y-10 animate-fade-in">
            {/* Trust Badges */}
            <div className="flex flex-wrap gap-3">
              <div className="group relative">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-cyan-500 rounded-full blur-md opacity-50 group-hover:opacity-75 transition-opacity"></div>
                <div className="relative inline-flex items-center px-5 py-2.5 bg-gradient-to-r from-blue-600 to-cyan-500 text-white rounded-full text-sm font-semibold shadow-lg">
                  <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  Airbnb Certified
                </div>
              </div>
              <div className="group relative">
                <div className="absolute inset-0 bg-gradient-to-r from-orange-500 to-pink-500 rounded-full blur-md opacity-50 group-hover:opacity-75 transition-opacity"></div>
                <div className="relative inline-flex items-center px-5 py-2.5 bg-gradient-to-r from-orange-500 to-pink-500 text-white rounded-full text-sm font-semibold shadow-lg">
                  <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                  </svg>
                  Same-Day Service
                </div>
              </div>
            </div>

            {/* Headline */}
            <div className="space-y-6">
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black leading-[1.1] tracking-tight">
                <span className="block text-gray-900">Maximize Your</span>
                <span className="block bg-gradient-to-r from-blue-600 via-cyan-500 to-blue-600 bg-clip-text text-transparent animate-gradient">
                  5-Star Reviews
                </span>
                <span className="block text-gray-900">Every Time</span>
              </h1>
              <p className="text-xl sm:text-2xl text-gray-600 leading-relaxed max-w-xl">
                Professional Airbnb turnover cleaning for Greater Boston & North Shore hosts.
                <span className="font-semibold text-gray-900"> Photo-documented perfection</span> with every clean.
              </p>
            </div>

            {/* Value Props */}
            <div className="space-y-4">
              {[
                { icon: '⚡', text: '2-4 hour turnarounds', subtext: 'for back-to-back bookings' },
                { icon: '📸', text: 'Photo documentation', subtext: 'sent before every guest arrival' },
                { icon: '🛡️', text: 'Backup cleaner network', subtext: 'never worry about no-shows' }
              ].map((item, idx) => (
                <div key={idx} className="flex items-start gap-4 group">
                  <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-green-400 to-emerald-500 rounded-xl flex items-center justify-center text-2xl shadow-lg group-hover:scale-110 transition-transform">
                    {item.icon}
                  </div>
                  <div className="flex-1 pt-1">
                    <p className="text-lg font-bold text-gray-900">{item.text}</p>
                    <p className="text-gray-600">{item.subtext}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column - Form Card */}
          <div className="relative lg:pl-8">
            {/* Glow Effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-cyan-500/20 rounded-3xl blur-3xl"></div>
            
            {/* Form Card */}
            <div className="relative bg-white/80 backdrop-blur-xl p-8 sm:p-10 rounded-3xl shadow-2xl border border-white/20">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-600 via-cyan-500 to-blue-600 rounded-t-3xl"></div>
              
              <div className="space-y-6">
                <div className="text-center space-y-2">
                  <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-green-50 to-emerald-50 rounded-full border border-green-200">
                    <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
                    <span className="text-sm font-semibold text-green-700">3 slots left this week</span>
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-bold text-gray-900">
                    Get Your Free Quote
                  </h3>
                  <p className="text-gray-600">Response in under 60 seconds</p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="relative group">
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Your name"
                      className="w-full px-5 py-4 bg-white border-2 border-gray-200 rounded-xl focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 transition-all outline-none font-medium"
                      required
                    />
                  </div>
                  <div className="relative group">
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="Phone number"
                      className="w-full px-5 py-4 bg-white border-2 border-gray-200 rounded-xl focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 transition-all outline-none font-medium"
                      required
                    />
                  </div>
                  <div className="relative group">
                    <select
                      name="propertyType"
                      value={formData.propertyType}
                      onChange={handleChange}
                      className="w-full px-5 py-4 bg-white border-2 border-gray-200 rounded-xl focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 transition-all outline-none font-medium appearance-none cursor-pointer"
                      required
                    >
                      <option value="">Select property type...</option>
                      <option value="studio">Studio / 1 Bedroom</option>
                      <option value="2-3br">2-3 Bedrooms</option>
                      <option value="4plus">4+ Bedrooms</option>
                      <option value="multi">Multiple Properties</option>
                    </select>
                    <svg className="absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400 pointer-events-none" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </div>
                  
                  <button
                    type="submit"
                    className="group relative w-full overflow-hidden bg-gradient-to-r from-blue-600 to-cyan-500 text-white px-8 py-5 rounded-xl font-bold text-lg shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-[1.02]"
                  >
                    <span className="relative z-10 flex items-center justify-center gap-2">
                      Get Instant Quote
                      <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                      </svg>
                    </span>
                    <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                  </button>
                </form>

                <div className="relative">
                  <div className="absolute inset-0 flex items-center">
                    <div className="w-full border-t border-gray-200"></div>
                  </div>
                  <div className="relative flex justify-center text-sm">
                    <span className="px-4 bg-white text-gray-500">or</span>
                  </div>
                </div>

                <a
                  href="tel:978-312-7711"
                  className="flex items-center justify-center gap-3 w-full px-6 py-4 bg-gray-50 hover:bg-gray-100 border-2 border-gray-200 rounded-xl font-semibold text-gray-900 transition-all hover:scale-[1.02]"
                >
                  <svg className="w-5 h-5 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                  </svg>
                  Call 978-312-7711
                </a>

                {/* Trust Indicators */}
                <div className="grid grid-cols-2 gap-4 pt-4 border-t border-gray-200">
                  <div className="text-center">
                    <p className="text-2xl font-bold text-gray-900">500+</p>
                    <p className="text-xs text-gray-600">Properties/Month</p>
                  </div>
                  <div className="text-center">
                    <p className="text-2xl font-bold text-gray-900">4.9★</p>
                    <p className="text-xs text-gray-600">Airbnb Hosts</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}