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
                <div className="flex flex-col justify-center">
                  <span className="font-display font-black text-xl text-white tracking-tight leading-none pb-1 border-b-[3px] border-[#3FA0E0] inline-block">Mv Dental Clinic</span>
                  <span className="font-serif italic font-medium text-[13px] text-secondary tracking-wide pt-1">Vaisha Children's Dental Center</span>
                </div>
              </div>
            </div>
            <p className="text-gray-300 text-sm leading-relaxed mb-8">
              Premium Pediatric & Family Dentistry. Delivering unmatched clinical excellence in a compassionate, anxiety-free environment since 2007.
            </p>
          </div>

          {/* Col 2: Quick Links */}
          <div className="lg:col-span-2">
            <h4 className="text-white font-display font-black text-lg mb-6 tracking-wide">Explore</h4>
            <ul className="space-y-4 text-sm font-medium">
              <li><Link to="/" className="text-gray-400 hover:text-white flex items-center group transition-colors"><ChevronRight className="w-4 h-4 mr-2 text-primary opacity-0 -ml-6 group-hover:opacity-100 group-hover:ml-0 transition-all duration-300" />Home</Link></li>
              <li><Link to="/about" className="text-gray-400 hover:text-white flex items-center group transition-colors"><ChevronRight className="w-4 h-4 mr-2 text-primary opacity-0 -ml-6 group-hover:opacity-100 group-hover:ml-0 transition-all duration-300" />About Us</Link></li>
              <li><Link to="/gallery" className="text-gray-400 hover:text-white flex items-center group transition-colors"><ChevronRight className="w-4 h-4 mr-2 text-primary opacity-0 -ml-6 group-hover:opacity-100 group-hover:ml-0 transition-all duration-300" />Treatment Blogs</Link></li>
              <li><Link to="/news" className="text-gray-400 hover:text-white flex items-center group transition-colors"><ChevronRight className="w-4 h-4 mr-2 text-primary opacity-0 -ml-6 group-hover:opacity-100 group-hover:ml-0 transition-all duration-300" />News & Events</Link></li>
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
                  <a href="tel:8870185063" className="text-gray-300 hover:text-white transition-colors">88701 85063</a>
                  <a href="tel:04273551686" className="text-gray-300 hover:text-white transition-colors">0427 3551686</a>
                  <a href="https://wa.me/918870185063?text=Hello!%20I%20would%20like%20to%20book%20an%20appointment." target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-[#25D366] transition-colors">WhatsApp Us</a>
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
