import React from 'react';
import { Link } from 'react-router-dom';
import { Shield, Menu, X } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  return (
    <nav className="bg-gray-900/95 backdrop-blur-sm border-b border-gray-800 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center space-x-2">
            <Shield className="h-8 w-8 text-blue-500" />
            <span className="text-xl font-bold text-white">FakeBuster</span>
          </Link>
          
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              <Link to="/" className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors">
                Home
              </Link>
              <Link to="/fake-news" className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors">
                News Detection
              </Link>
              <Link to="/fake-emails" className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors">
                Email Detection
              </Link>
              <Link to="/fake-whatsapp" className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors">
                WhatsApp Detection
              </Link>
              <Link to="/fake-social-media" className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors">
                Social Media Detection
              </Link>
            </div>
          </div>
          
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-400 hover:text-white focus:outline-none focus:text-white"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {isMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-gray-800">
            <Link to="/" className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium">
              Home
            </Link>
            <Link to="/fake-news" className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium">
              News Detection
            </Link>
            <Link to="/fake-emails" className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium">
              Email Detection
            </Link>
            <Link to="/fake-whatsapp" className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium">
              WhatsApp Detection
            </Link>
            <Link to="/fake-social-media" className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium">
              Social Media Detection
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;