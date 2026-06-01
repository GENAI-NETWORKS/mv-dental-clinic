import { useState, useEffect } from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ChevronDown } from 'lucide-react';
import { Button } from '../ui/Button';
import logo from '../../assets/logo.png';

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change or hash change
  useEffect(() => {
    setMobileMenuOpen(false);
    setServicesOpen(false);
  }, [location.pathname, location.hash]);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/#about' },
    { name: 'Services', path: '/#services' },
    { name: 'Gallery', path: '/#gallery' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled || location.pathname !== '/' ? 'glass py-2 shadow-sm' : 'bg-transparent py-4'
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="z-50 shrink-0 flex items-center gap-2 md:gap-3">
            <img src={logo} alt="Mv Dental Clinic" className="h-8 md:h-12 w-auto object-contain" />
            <span className="font-display font-black text-[15px] sm:text-xl text-dark tracking-tight leading-tight">Mv Dental Clinic</span>
          </Link>

          {/* Right Side: Nav + CTA */}
          <div className="flex items-center gap-8">
            {/* Desktop Nav */}
            <nav className="hidden md:flex items-center space-x-8">
              <NavLink to="/" className={({ isActive }) => `font-medium relative overflow-hidden group ${isActive && location.hash === '' ? 'text-primary' : 'text-text hover:text-primary'}`}>
                Home
                <span className="absolute bottom-0 left-0 w-full h-0.5 bg-primary transform origin-left transition-transform duration-300 scale-x-0 group-hover:scale-x-100" />
              </NavLink>
              <Link to="/#about" className="font-medium relative overflow-hidden group text-text hover:text-primary">
                About
                <span className="absolute bottom-0 left-0 w-full h-0.5 bg-primary transform origin-left transition-transform duration-300 scale-x-0 group-hover:scale-x-100" />
              </Link>
              
              <Link to="/#services" className="font-medium relative overflow-hidden group text-text hover:text-primary">
                Services
                <span className="absolute bottom-0 left-0 w-full h-0.5 bg-primary transform origin-left transition-transform duration-300 scale-x-0 group-hover:scale-x-100" />
              </Link>

              <Link to="/#gallery" className="font-medium relative overflow-hidden group text-text hover:text-primary">
                Gallery
                <span className="absolute bottom-0 left-0 w-full h-0.5 bg-primary transform origin-left transition-transform duration-300 scale-x-0 group-hover:scale-x-100" />
              </Link>
              <NavLink to="/contact" className={({ isActive }) => `font-medium relative overflow-hidden group ${isActive ? 'text-primary' : 'text-text hover:text-primary'}`}>
                Contact
                <span className="absolute bottom-0 left-0 w-full h-0.5 bg-primary transform origin-left transition-transform duration-300 scale-x-0 group-hover:scale-x-100" />
              </NavLink>
            </nav>

            {/* Mobile Toggle */}
            <div className="flex items-center space-x-4">
              <button 
                className="md:hidden z-50 p-2 text-dark"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Menu Backdrop & Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="fixed inset-0 bg-dark/40 backdrop-blur-sm z-30 md:hidden"
              onClick={() => setMobileMenuOpen(false)}
            />
            {/* Side Drawer */}
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ duration: 0.3, type: 'tween' }}
              className="fixed top-0 right-0 h-[100dvh] w-[65vw] max-w-[320px] bg-white z-40 flex flex-col pt-24 px-6 overflow-y-auto pb-10 shadow-2xl md:hidden"
            >
            <nav className="flex flex-col space-y-6">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  className="text-2xl font-display font-bold text-dark hover:text-primary"
                >
                  {link.name}
                </Link>
              ))}
              {/* Additional mobile menu items can be added here if needed */}
            </nav>
            <div className="mt-auto pt-8 mb-8" />
          </motion.div>
          </>
        )}
      </AnimatePresence>
    </header>
  );
};
