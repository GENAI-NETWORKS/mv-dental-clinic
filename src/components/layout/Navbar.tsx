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
    { name: 'About', path: '/about' },
    { name: 'Services', path: '/#services' },
    { name: 'Treatment Blogs', path: '/gallery' },
    { name: 'News & Events', path: '/news' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <>
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled || location.pathname !== '/' ? 'glass py-2 shadow-sm' : 'bg-transparent py-4'
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="shrink-0 flex items-center gap-2 md:gap-3">
            <img src={logo} alt="Mv Dental Clinic" className="h-10 md:h-12 w-auto object-contain" />
            <span className="font-display font-black text-lg sm:text-xl text-dark tracking-tight leading-tight">Mv Dental Clinic</span>
          </Link>

          {/* Right Side: Nav + CTA */}
          <div className="flex items-center gap-8">
            {/* Desktop Nav */}
            <nav className="hidden md:flex items-center space-x-1 lg:space-x-2">
              <NavLink to="/" className={({ isActive }) => `px-4 py-2 text-[15px] font-bold rounded-full transition-all duration-300 ${isActive && location.hash === '' ? 'bg-primary text-white shadow-md shadow-primary/20' : 'text-text hover:bg-gray-100/80 hover:text-primary'}`}>
                Home
              </NavLink>
              <NavLink to="/about" className={({ isActive }) => `px-4 py-2 text-[15px] font-bold rounded-full transition-all duration-300 ${isActive ? 'bg-primary text-white shadow-md shadow-primary/20' : 'text-text hover:bg-gray-100/80 hover:text-primary'}`}>
                About
              </NavLink>
              
              <Link to="/#services" className={`px-4 py-2 text-[15px] font-bold rounded-full transition-all duration-300 ${location.hash === '#services' ? 'bg-primary text-white shadow-md shadow-primary/20' : 'text-text hover:bg-gray-100/80 hover:text-primary'}`}>
                Services
              </Link>

              <NavLink to="/gallery" className={({ isActive }) => `px-4 py-2 text-[15px] font-bold rounded-full transition-all duration-300 ${isActive ? 'bg-primary text-white shadow-md shadow-primary/20' : 'text-text hover:bg-gray-100/80 hover:text-primary'}`}>
                Treatment Blogs
              </NavLink>
              <NavLink to="/news" className={({ isActive }) => `px-4 py-2 text-[15px] font-bold rounded-full transition-all duration-300 ${isActive ? 'bg-primary text-white shadow-md shadow-primary/20' : 'text-text hover:bg-gray-100/80 hover:text-primary'}`}>
                News & Events
              </NavLink>
              <NavLink to="/contact" className={({ isActive }) => `px-4 py-2 text-[15px] font-bold rounded-full transition-all duration-300 ${isActive ? 'bg-primary text-white shadow-md shadow-primary/20' : 'text-text hover:bg-gray-100/80 hover:text-primary'}`}>
                Contact
              </NavLink>
            </nav>

            {/* Desktop Book Appointment CTA */}
            <Link to="/contact" className="hidden md:block">
              <Button variant="accent" size="sm" className="shadow-md shadow-accent/20 whitespace-nowrap">
                Book Appointment
              </Button>
            </Link>

            {/* Mobile Toggle */}
            <div className="flex items-center space-x-4">
              <button 
                className="md:hidden z-50 p-2 text-dark"
                onClick={() => setMobileMenuOpen(true)}
              >
                <Menu className="w-6 h-6" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </header>

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
              className="fixed inset-0 bg-dark/40 backdrop-blur-sm z-[60] md:hidden"
              onClick={() => setMobileMenuOpen(false)}
            />
            {/* Side Drawer */}
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ duration: 0.3, type: 'tween' }}
              className="fixed top-0 right-0 h-[100dvh] w-1/2 max-w-[320px] bg-primary z-[70] flex flex-col pt-24 px-4 sm:px-6 overflow-y-auto pb-10 shadow-2xl md:hidden"
            >
              <button 
                className="absolute top-5 right-5 p-2 text-white hover:bg-white/10 rounded-full transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                <X className="w-6 h-6" />
              </button>
            <nav className="flex flex-col space-y-1">
              {navLinks.map((link) => {
                const isActive = 
                  (link.path === '/' && location.pathname === '/' && !location.hash) || 
                  (link.path.includes('#') && location.hash === link.path.replace('/', '')) || 
                  (!link.path.includes('#') && link.path !== '/' && location.pathname === link.path);
                  
                return (
                  <Link
                    key={link.name}
                    to={link.path}
                    className={`px-3 py-2 text-sm sm:text-base font-bold rounded-xl transition-all duration-300 ${isActive ? 'bg-white text-primary shadow-sm' : 'text-white/80 hover:bg-white/10 hover:text-white'}`}
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {link.name}
                  </Link>
                );
              })}
            </nav>
            <div className="mt-6">
              <Link to="/contact" onClick={() => setMobileMenuOpen(false)}>
                <Button variant="accent" size="sm" className="shadow-md shadow-accent/20 text-xs px-3 py-1.5 h-auto">
                  Book Appointment
                </Button>
              </Link>
            </div>
            <div className="mt-auto pt-8 mb-8" />
          </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};
