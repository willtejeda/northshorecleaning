
import Link from "next/link";

export default function Header() {
  return (
    <header className="bg-white shadow-lg sticky top-0 z-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-3">
          <div className="flex items-center">
            <Link href="/">
              <img 
                src="https://static.wixstatic.com/media/e00276_381836c40ef543ca90ebf21dd5826a5f~mv2.jpg/v1/fill/w_240,h_80,al_c,q_80,usm_0.66_1.00_0.01/e00276_381836c40ef543ca90ebf21dd5826a5f~mv2.jpg" 
                alt="North Shore Cleaning Pros" 
                className="h-16 w-auto"
              />
            </Link>
          </div>
          <nav className="hidden sm:flex items-center space-x-8 text-lg">
            <Link href="/" className="text-gray-700 hover:text-blue-500 transition-colors">
              Home
            </Link>
            <Link href="/services" className="text-gray-700 hover:text-blue-500 transition-colors">
              Services
            </Link>
            <Link href="/faq" className="text-gray-700 hover:text-blue-500 transition-colors">
              FAQ
            </Link>
            <div className="text-gray-700">978-312-7711</div>
          </nav>
        </div>
      </div>
    </header>
  );
}
