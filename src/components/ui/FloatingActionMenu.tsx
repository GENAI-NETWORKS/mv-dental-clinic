import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { HelpCircle, X, Calendar, MapPin, Phone } from 'lucide-react';
import { Link } from 'react-router-dom';

export const FloatingActionMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  // WhatsApp Config (for Mobile view)
  const phoneNumber = '919789144560';
  const message = 'Hello! I would like to book an appointment.';
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  const menuItems = [
    {
      icon: <Calendar className="w-5 h-5 text-primary" />,
      label: 'Book Appointment',
      href: '/contact',
      isRouterLink: true,
    },
    {
      icon: <MapPin className="w-5 h-5 text-primary" />,
      label: 'Get Directions',
      href: 'https://www.google.com/maps/search/?api=1&query=Mv+Dental+Clinic,+32,+Vidhyalaya+Road,+Seerangapalayam+E+St,+opp.+TRS+Kalyana+Mandapam,+Seerangapalayam,+Salem,+Tamil+Nadu+636007',
      isRouterLink: false,
    },
    {
      icon: <Phone className="w-5 h-5 text-primary" />,
      label: 'Call Us',
      href: 'tel:04273551686',
      isRouterLink: false,
    },
  ];

  return (
    <>
      {/* MOBILE VIEW: Sticky Bottom Bar */}
      <div className="lg:hidden fixed bottom-0 left-0 right-0 z-50 bg-white border-t border-gray-200 p-2 pb-safe shadow-[0_-10px_30px_rgba(0,0,0,0.05)]">
        <div className="flex items-center justify-center gap-2 max-w-sm mx-auto">
          <Link 
            to="/contact" 
            className="flex-[1.5] bg-primary text-white py-2.5 px-2 rounded-xl flex items-center justify-center gap-1.5 active:scale-95 transition-transform"
          >
            <Calendar className="w-4 h-4 shrink-0" />
            <span className="text-[11px] sm:text-xs font-bold whitespace-nowrap">Book Appointment</span>
          </Link>
          <a 
            href="https://www.google.com/maps/search/?api=1&query=Mv+Dental+Clinic,+32,+Vidhyalaya+Road,+Seerangapalayam+E+St,+opp.+TRS+Kalyana+Mandapam,+Seerangapalayam,+Salem,+Tamil+Nadu+636007" 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex-1 bg-primary text-white py-2.5 px-2 rounded-xl flex items-center justify-center gap-1.5 active:scale-95 transition-transform"
          >
            <MapPin className="w-4 h-4 shrink-0" />
            <span className="text-[11px] sm:text-xs font-bold">Location</span>
          </a>
          <a 
            href="tel:04273551686" 
            className="flex-1 bg-primary text-white py-2.5 px-2 rounded-xl flex items-center justify-center gap-1.5 active:scale-95 transition-transform"
          >
            <Phone className="w-4 h-4 shrink-0" />
            <span className="text-[11px] sm:text-xs font-bold">Call</span>
          </a>
        </div>
      </div>

      {/* DESKTOP VIEW: Interactive Floating Action Menu */}
      <div className="hidden lg:flex fixed bottom-8 right-8 z-50 flex-col items-end gap-4">
        
        <AnimatePresence>
          {isOpen && (
            <div className="flex flex-col items-end gap-4 mb-2">
              {menuItems.map((item, index) => {
                const ItemContent = () => (
                  <motion.div
                    key={item.label}
                    initial={{ opacity: 0, y: 20, scale: 0.8 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 20, scale: 0.8 }}
                    transition={{ duration: 0.2, delay: index * 0.05 }}
                    className="flex items-center gap-3 group cursor-pointer"
                  >
                    <span className="bg-white px-3 py-1.5 rounded-lg text-sm font-bold text-dark shadow-md opacity-0 group-hover:opacity-100 transition-opacity translate-x-2 group-hover:translate-x-0 duration-200">
                      {item.label}
                    </span>
                    <div className="w-14 h-14 bg-white rounded-full flex items-center justify-center shadow-lg border border-gray-100 hover:scale-110 transition-transform duration-200">
                      {item.icon}
                    </div>
                  </motion.div>
                );

                if (item.isRouterLink) {
                  return (
                    <Link to={item.href} key={item.label} onClick={() => setIsOpen(false)}>
                      <ItemContent />
                    </Link>
                  );
                }

                return (
                  <a href={item.href} target="_blank" rel="noopener noreferrer" key={item.label} onClick={() => setIsOpen(false)}>
                    <ItemContent />
                  </a>
                );
              })}
            </div>
          )}
        </AnimatePresence>

        <motion.button
          onClick={() => setIsOpen(!isOpen)}
          className="w-16 h-16 bg-primary text-white rounded-full flex items-center justify-center shadow-[0_10px_30px_rgba(26,123,196,0.3)] hover:scale-105 hover:shadow-[0_15px_40px_rgba(26,123,196,0.4)] transition-all z-50 border-2 border-white"
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          whileTap={{ scale: 0.95 }}
        >
          <motion.div
            initial={false}
            animate={{ rotate: isOpen ? 90 : 0 }}
            transition={{ duration: 0.2 }}
          >
            {isOpen ? <X className="w-8 h-8" strokeWidth={2.5} /> : <HelpCircle className="w-8 h-8" strokeWidth={2.5} />}
          </motion.div>
        </motion.button>
      </div>
    </>
  );
};
