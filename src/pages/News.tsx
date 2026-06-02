import { motion } from 'framer-motion';
import { SEO } from '../components/seo/SEO';

import newsImg1 from '../assets/WhatsApp Image 2026-06-02 at 12.04.56 PM (1).jpeg';
import newsImg2 from '../assets/WhatsApp Image 2026-06-02 at 12.04.56 PM.jpeg';
import newsImg3 from '../assets/WhatsApp Image 2026-06-02 at 12.04.57 PM (1).jpeg';
import newsImg4 from '../assets/WhatsApp Image 2026-06-02 at 12.04.57 PM (2).jpeg';
import newsImg5 from '../assets/WhatsApp Image 2026-06-02 at 12.04.57 PM.jpeg';

const events = [
  {
    id: 1,
    image: newsImg1,
    title: 'School Dental Camp',
    date: 'June 2, 2026',
    description: 'We recently conducted a comprehensive dental awareness and check-up camp for local school students, promoting early oral hygiene habits. Our team engaged with hundreds of children, providing free screenings, interactive demonstrations, and personalized advice to ensure they build a lifelong foundation for healthy smiles.',
    category: 'Awareness'
  },
  {
    id: 5,
    image: newsImg5,
    title: 'Smiles All Around',
    date: 'April 22, 2026',
    description: 'A successful day at our community dental drive, where hundreds of children received free dental screenings and personalized oral care kits. Our dedicated team of specialists provided engaging demonstrations on proper brushing techniques and the importance of preventive treatments like sealants to ensure lifelong healthy smiles.',
    category: 'Camp'
  },
  {
    id: 3,
    image: newsImg3,
    title: 'Interactive Learning',
    date: 'May 15, 2026',
    description: 'We believe that early education is the key to preventing dental issues, so our interactive sessions are designed to be fun and memorable, empowering kids to take charge of their own dental health with confidence.our pediatric specialists teach children the daily habits needed to build a strong foundation for lifelong oral hygiene',
    category: 'Education'
  },
  {
    id: 4,
    image: newsImg4,
    title: 'Preventive Care Seminar',
    date: 'May 10, 2026',
    description: 'Dr. Gawthaman leading an insightful seminar for parents, emphasizing the critical role of preventive pediatric dentistry. The session highlighted the benefits of early intervention, proper nutrition, and routine check-ups in preventing childhood cavities and ensuring healthy dental development.',
    category: 'Seminar'
  },
  {
    id: 2,
    image: newsImg2,
    title: 'Community Outreach',
    date: 'May 28, 2026',
    description: 'Our team organizing engaging activities to spread awareness about pediatric dental care among parents and children in the community. Through interactive workshops, fun educational games, and one-on-one consultations, we empower families with the knowledge and tools needed to maintain excellent oral hygiene and prevent early childhood cavities.',
    category: 'Outreach'
  }
];

export const News = () => {
  return (
    <div className="pb-20 bg-surface min-h-screen">
      <SEO
        title="News & Events | MV Dental Clinic"
        description="Stay updated with the latest news, school dental camps, and community awareness programs organized by MV Dental Clinic."
      />

      {/* Hero Section */}
      <div className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden flex flex-col items-center justify-center min-h-[40vh]">
        <div className="absolute inset-0 z-0">
          <img src="https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80" alt="News and Events" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-primary/60 backdrop-blur-sm"></div>
          <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-dark/30 to-transparent"></div>
        </div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl lg:text-6xl font-display font-black mb-6 text-white drop-shadow-md"
          >
            News & Events
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-white/90 text-lg md:text-xl font-medium max-w-2xl mx-auto"
          >
            Discover our latest community outreach programs, school camps, and dental awareness initiatives.
          </motion.p>
        </div>
      </div>

      {/* Feed Section */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 mt-16 mb-24">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {events.map((event, idx) => (
              <motion.article
                key={event.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="flex flex-col bg-white rounded-[2rem] overflow-hidden shadow-xl border border-gray-100 group cursor-pointer hover:-translate-y-2 transition-transform duration-300"
              >
                <div className="relative overflow-hidden h-72 shrink-0 bg-white border-b border-gray-50 flex items-center justify-center p-2">
                  <img
                    src={event.image}
                    alt={event.title}
                    className="w-full h-full object-contain transform group-hover:scale-105 transition-transform duration-700"
                  />
                </div>
                <div className="p-8 flex flex-col grow">
                  <div className="flex justify-between items-center mb-4">
                    <time className="text-sm font-bold text-secondary uppercase tracking-widest">
                      {event.date}
                    </time>
                    <span className="bg-primary/10 text-primary px-3 py-1 rounded-full text-[10px] sm:text-xs font-black shadow-sm uppercase tracking-wider border border-primary/20">
                      {event.category}
                    </span>
                  </div>
                  <h3 className="text-2xl font-display font-black text-dark mb-4 group-hover:text-primary transition-colors">
                    {event.title}
                  </h3>
                  <p className="text-muted leading-relaxed text-justify">
                    {event.description}
                  </p>
                </div>
              </motion.article>
            ))}


          </div>
        </div>
      </div>

    </div>
  );
};
