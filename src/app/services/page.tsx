
export default function ServicesPage() {
  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <h1 className="text-4xl font-bold text-center mb-12">Our Services</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="border p-8 rounded-lg">
          <h2 className="text-2xl font-semibold mb-4">Home Cleaning</h2>
          <p className="text-gray-600">Our home cleaning services are designed to give you the peace of mind you deserve and the time you need to enjoy your life and your family. We offer weekly, bi-weekly, and monthly cleaning services.</p>
        </div>
        <div className="border p-8 rounded-lg">
          <h2 className="text-2xl font-semibold mb-4">Commercial Cleaning</h2>
          <p className="text-gray-600">A clean and healthy office is a productive office. We provide commercial cleaning services to all types of businesses, from small offices to large corporate buildings. We will work with you to create a customized cleaning plan that fits your needs and budget.</p>
        </div>
        <div className="border p-8 rounded-lg">
          <h2 className="text-2xl font-semibold mb-4">Window Washing</h2>
          <p className="text-gray-600">We offer professional window washing services for both residential and commercial properties. Our team is trained to clean all types of windows, inside and out, leaving them sparkling clean.</p>
        </div>
        <div className="border p-8 rounded-lg">
          <h2 className="text-2xl font-semibold mb-4">Move-In/Move-Out Cleaning</h2>
          <p className="text-gray-600">Moving can be stressful. Let us take care of the cleaning. Our move-in/move-out cleaning services are designed to make your move as easy as possible. We will leave your old home in pristine condition and make sure your new home is ready for you to move in.</p>
        </div>
      </div>
    </div>
  );
}
