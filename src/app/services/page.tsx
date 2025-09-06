export default function ServicesPage() {
  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <h1 className="text-4xl font-bold text-center mb-12">Our Services</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="border p-8 rounded-lg flex items-start">
          <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" class="mr-6 text-blue-600 flex-shrink-0"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path><polyline points="9 22 9 12 15 12 15 22"></polyline></svg>
          <div>
            <h2 className="text-2xl font-semibold mb-4">Home Cleaning</h2>
            <p className="text-gray-600">Our home cleaning services are designed to give you the peace of mind you deserve and the time you need to enjoy your life and your family. We offer weekly, bi-weekly, and monthly cleaning services.</p>
          </div>
        </div>
        <div className="border p-8 rounded-lg flex items-start">
          <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" class="mr-6 text-blue-600 flex-shrink-0"><path d="M22 12h-4l-3 9L9 3l-3 9H2"></path></svg>
          <div>
            <h2 className="text-2xl font-semibold mb-4">Commercial Cleaning</h2>
            <p className="text-gray-600">A clean and healthy office is a productive office. We provide commercial cleaning services to all types of businesses, from small offices to large corporate buildings. We will work with you to create a customized cleaning plan that fits your business's needs.</p>
          </div>
        </div>
        <div className="border p-8 rounded-lg flex items-start">
          <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" class="mr-6 text-blue-600 flex-shrink-0"><rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect><line x1="8" y1="21" x2="16" y2="21"></line><line x1="12" y1="17" x2="12" y2="21"></line></svg>
          <div>
            <h2 className="text-2xl font-semibold mb-4">Window Washing</h2>
            <p className="text-gray-600">Let the sun shine in with our professional window washing services. We clean interior and exterior windows, leaving them sparkling clean.</p>
          </div>
        </div>
        <div className="border p-8 rounded-lg flex items-start">
          <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" class="mr-6 text-blue-600 flex-shrink-0"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>
          <div>
            <h2 className="text-2xl font-semibold mb-4">Move-In/Move-Out Cleaning</h2>
            <p className="text-gray-600">Whether you're moving in or out, we can help make the process easier with our move-in/move-out cleaning services. We will leave your old home in pristine condition and make sure your new home is ready for you to move in.</p>
          </div>
        </div>
      </div>
    </div>
  );
}