import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Code } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const navLinks = [
    { title: 'Home', path: '/' },
    { title: 'Our Developers', path: '/developers' },
    { title: 'Job Openings', path: '/jobs' },
    { title: 'Apply Now', path: '/apply' },
    { title: 'Resources', path: '/resources' },
  ];

  return (
    <header
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'
      }`}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center space-x-2">
            <Code size={32} className="text-blue-700" />
            <span className="text-xl font-bold text-gray-900">Hot Beans</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.title}
                to={link.path}
                className={`font-medium transition-colors hover:text-blue-700 ${
                  location.pathname === link.path
                    ? 'text-blue-700 border-b-2 border-blue-700'
                    : 'text-gray-700'
                }`}
              >
                {link.title}
              </Link>
            ))}
          </nav>

          {/* Apply Button (Desktop) */}
          <div className="hidden md:block">
            <Link
              to="/apply"
              className="bg-blue-700 hover:bg-blue-800 text-white font-medium px-6 py-2 rounded-full transition-all transform hover:scale-105"
            >
              Join Our Team
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-gray-700 focus:outline-none"
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden bg-white absolute left-0 right-0 top-full shadow-md">
            <div className="flex flex-col space-y-4 px-4 py-6">
              {navLinks.map((link) => (
                <Link
                  key={link.title}
                  to={link.path}
                  className={`font-medium text-gray-700 hover:text-blue-700 ${
                    location.pathname === link.path ? 'text-blue-700' : ''
                  }`}
                  onClick={() => setIsOpen(false)}
                >
                  {link.title}
                </Link>
              ))}
              <Link
                to="/apply"
                className="bg-blue-700 hover:bg-blue-800 text-white font-medium px-6 py-2 rounded-full text-center"
                onClick={() => setIsOpen(false)}
              >
                Join Our Team
              </Link>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Navbar;