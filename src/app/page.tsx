import Image from "next/image";

export default function Home() {
  return (
    <>
      <section
        className="relative bg-cover bg-center flex items-center justify-center text-white"
        style={{
          backgroundImage:
            "url(https://static.wixstatic.com/media/e00276_52cf5311640643d481338051374243e9~mv2.jpg/v1/fill/w_1920,h_720,al_c,q_90,usm_0.66_1.00_0.01/e00276_52cf5311640643d481338051374243e9~mv2.jpg)",
          minHeight: '600px',
        }}
      >
        <div className="absolute inset-0 bg-black opacity-60"></div>
        <div className="relative z-10 text-center p-4">
          <h1 className="text-5xl md:text-7xl font-bold leading-tight mb-4">
            North Shore Cleaning Pros
          </h1>
          <p className="text-xl md:text-2xl mb-8">
            Top-quality, reliable, and affordable cleaning services.
          </p>
          <a
            href="/services"
            className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 px-8 rounded-full text-xl transition-colors"
          >
            Get a Free Estimate
          </a>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-12">Why Choose Us?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
            <div>
              <h3 className="text-2xl font-semibold mb-2">Eco-Friendly</h3>
              <p className="text-gray-600">We use environmentally friendly cleaning products that are safe for your family and pets.</p>
            </div>
            <div>
              <h3 className="text-2xl font-semibold mb-2">Experienced Team</h3>
              <p className="text-gray-600">Our team is highly trained, experienced, and dedicated to providing the best service.</p>
            </div>
            <div>
              <h3 className="text-2xl font-semibold mb-2">Satisfaction Guaranteed</h3>
              <p className="text-gray-600">We stand by our work. If you're not satisfied, we'll come back and make it right.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-12">What Our Clients Say</h2>
          <div className="max-w-3xl mx-auto">
            <div className="bg-white p-8 rounded-lg shadow-md text-center">
              <p className="text-lg italic mb-4">"North Shore Cleaning Pros did an amazing job! My house has never been so clean. I highly recommend them!"</p>
              <p className="font-semibold">- Jane Doe, Newburyport</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-12">Get a Free Estimate</h2>
          <div className="max-w-lg mx-auto">
            <form className="bg-white p-8 rounded-lg shadow-md">
              <div className="mb-4">
                <label htmlFor="name" className="block text-gray-700 font-bold mb-2">Name</label>
                <input type="text" id="name" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
              </div>
              <div className="mb-4">
                <label htmlFor="email" className="block text-gray-700 font-bold mb-2">Email</label>
                <input type="email" id="email" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
              </div>
              <div className="mb-4">
                <label htmlFor="message" className="block text-gray-700 font-bold mb-2">Message</label>
                <textarea id="message" rows={4} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"></textarea>
              </div>
              <div className="text-center">
                <button type="submit" className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-full text-lg transition-colors">
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>
    </>
  );
}