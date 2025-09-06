
export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
          <div>
            <h2 className="text-xl font-bold mb-4">Our Company</h2>
            <p className="text-gray-400">
              North Shore Cleaning Pros is a locally owned and operated business dedicated to providing top-quality cleaning services to our community.
            </p>
          </div>
          <div>
            <h2 className="text-xl font-bold mb-4">Contact Us</h2>
            <p className="text-gray-400">info.northshorecleaningpros@gmail.com</p>
            <p className="text-gray-400">978-312-7711</p>
          </div>
          <div>
            <h2 className="text-xl font-bold mb-4">Hours</h2>
            <p className="text-gray-400">Monday - Friday: 8am - 8pm</p>
            <p className="text-gray-400">Saturday: 9am - 7pm</p>
            <p className="text-gray-400">Sunday: 9am - 8pm</p>
          </div>
        </div>
        <div className="text-center text-gray-500 mt-10 pt-6 border-t border-gray-700">
          <p>© 2025 by North Shore Cleaning Pros</p>
        </div>
      </div>
    </footer>
  );
}
