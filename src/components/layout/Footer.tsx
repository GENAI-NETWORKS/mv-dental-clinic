import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail, ChevronRight } from 'lucide-react';
import logo from '../../assets/logo.png';

export const Footer = () => {
  return (
    <footer className="relative bg-dark text-white pt-24 pb-12 overflow-hidden border-t border-white/10">
      {/* Background Decor */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-primary/10 rounded-full blur-[120px] -z-10 mix-blend-screen pointer-events-none"></div>
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-secondary/10 rounded-full blur-[120px] -z-10 mix-blend-screen pointer-events-none"></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8 mb-16">
          
          {/* Col 1: Brand */}
          <div className="lg:col-span-4 pr-0 lg:pr-8">
            <div className="bg-white/5 backdrop-blur-sm inline-block p-3 pr-6 rounded-2xl mb-6 border border-white/10 shadow-xl">
              <div className="flex items-center gap-4">
                <img src={logo} alt="Mv Dental Clinic" className="h-14 w-auto object-contain rounded-xl" />
                <span className="font-display font-black text-xl text-white tracking-tight">Mv Dental Clinic</span>
              </div>
            </div>
            <p className="text-gray-300 text-sm leading-relaxed mb-8">
              Premium Pediatric & Family Dentistry. Delivering unmatched clinical excellence in a compassionate, anxiety-free environment since 2007.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-primary hover:border-primary hover:-translate-y-1 transition-all text-white shadow-lg">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.469h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.469h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-primary hover:border-primary hover:-translate-y-1 transition-all text-white shadow-lg">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/></svg>
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-primary hover:border-primary hover:-translate-y-1 transition-all text-white shadow-lg">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/></svg>
              </a>
            </div>
          </div>

          {/* Col 2: Quick Links */}
          <div className="lg:col-span-2">
            <h4 className="text-white font-display font-black text-lg mb-6 tracking-wide">Explore</h4>
            <ul className="space-y-4 text-sm font-medium">
              <li><Link to="/" className="text-gray-400 hover:text-white flex items-center group transition-colors"><ChevronRight className="w-4 h-4 mr-2 text-primary opacity-0 -ml-6 group-hover:opacity-100 group-hover:ml-0 transition-all duration-300" />Home</Link></li>
              <li><Link to="/about" className="text-gray-400 hover:text-white flex items-center group transition-colors"><ChevronRight className="w-4 h-4 mr-2 text-primary opacity-0 -ml-6 group-hover:opacity-100 group-hover:ml-0 transition-all duration-300" />About Us</Link></li>
              <li><Link to="/gallery" className="text-gray-400 hover:text-white flex items-center group transition-colors"><ChevronRight className="w-4 h-4 mr-2 text-primary opacity-0 -ml-6 group-hover:opacity-100 group-hover:ml-0 transition-all duration-300" />Gallery</Link></li>
              <li><Link to="/contact" className="text-gray-400 hover:text-white flex items-center group transition-colors"><ChevronRight className="w-4 h-4 mr-2 text-primary opacity-0 -ml-6 group-hover:opacity-100 group-hover:ml-0 transition-all duration-300" />Contact</Link></li>
            </ul>
          </div>

          {/* Col 3: Services */}
          <div className="lg:col-span-3">
            <h4 className="text-white font-display font-black text-lg mb-6 tracking-wide">Services</h4>
            <ul className="space-y-4 text-sm font-medium">
              <li><Link to="/#services" className="text-gray-400 hover:text-white flex items-center group transition-colors"><ChevronRight className="w-4 h-4 mr-2 text-secondary opacity-0 -ml-6 group-hover:opacity-100 group-hover:ml-0 transition-all duration-300" />Pediatric Dentistry</Link></li>
              <li><Link to="/#services" className="text-gray-400 hover:text-white flex items-center group transition-colors"><ChevronRight className="w-4 h-4 mr-2 text-secondary opacity-0 -ml-6 group-hover:opacity-100 group-hover:ml-0 transition-all duration-300" />Caries Restoration</Link></li>
              <li><Link to="/#services" className="text-gray-400 hover:text-white flex items-center group transition-colors"><ChevronRight className="w-4 h-4 mr-2 text-secondary opacity-0 -ml-6 group-hover:opacity-100 group-hover:ml-0 transition-all duration-300" />Sedation Dentistry</Link></li>
              <li><Link to="/#services" className="text-gray-400 hover:text-white flex items-center group transition-colors"><ChevronRight className="w-4 h-4 mr-2 text-secondary opacity-0 -ml-6 group-hover:opacity-100 group-hover:ml-0 transition-all duration-300" />General Services</Link></li>
            </ul>
          </div>

          {/* Col 4: Contact */}
          <div className="lg:col-span-3">
            <h4 className="text-white font-display font-black text-lg mb-6 tracking-wide">Contact Info</h4>
            <ul className="space-y-5 text-sm">
              <li className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center shrink-0">
                  <MapPin className="w-5 h-5 text-primary" />
                </div>
                <span className="text-gray-300 leading-relaxed mt-0.5">
                  Mv Dental Clinic, 32, Vidhyalaya Road, Seerangapalayam E St, opp. TRS Kalyana Mandapam, Salem, Tamil Nadu 636007
                </span>
              </li>
              <li className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center shrink-0">
                  <Phone className="w-5 h-5 text-secondary" />
                </div>
                <div className="flex flex-col">
                  <a href="tel:04273551686" className="text-gray-300 hover:text-white transition-colors">0427 3551 686</a>
                  <a href="https://wa.me/919789144560" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-[#25D366] transition-colors">+91 97891 44560</a>
                </div>
              </li>
              <li className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center shrink-0">
                  <Mail className="w-5 h-5 text-accent" />
                </div>
                <a href="mailto:mvdentalpedo@gmail.com" className="text-gray-300 hover:text-white transition-colors break-all">mvdentalpedo@gmail.com</a>
              </li>
            </ul>
          </div>
          
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 mt-12 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm font-medium text-gray-500">
            © {new Date().getFullYear()} Mv Dental Clinic & Vaisha Children's Dental Center. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};
