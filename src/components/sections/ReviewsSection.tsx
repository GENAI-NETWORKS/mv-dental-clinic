import { motion } from 'framer-motion';
import { Star } from 'lucide-react';
import googleIcon from '../../assets/logo.png'; // Will use an icon or just text

const reviews = [
  {
    name: "Venkat Raj",
    stats: "1 review",
    time: "5 months ago",
    text: "We had an excellent experience with Dr. Gawthaman M at MV Dental Clinic for my son’s braces treatment. The doctor was professional, patient, and explained every step of the treatment clearly, which made us feel comfortable and confident. The clinic is clean, well-maintained, and the overall treatment process was smooth. I would highly recommend Dr. Gawthaman M for braces and other dental treatments.",
    reactions: "❤️ 1"
  },
  {
    name: "Ashok Kumar ATM (D Ashok Kumar)",
    stats: "Local Guide · 29 reviews · 69 photos",
    time: "5 months ago",
    text: "Dr. Gowthaman is The Best Doctor in Town. He listens patiently to whatever you have to say and gives you with to the point answers. His specialization in Paediatric Dentistry is a great asset for Kids. Further he understands his patients giving them choices with any of oath replacement. He skilfully handles Root Canal treatments.",
    reactions: "❤️ 1"
  },
  {
    name: "Adhiyamaan Shanmugam",
    stats: "2 reviews",
    time: "Edited 3 months ago",
    text: "The doctor was very kind and patient with my baby. My child feel safe and comfortable during the visit. Thank you for the excellent care.",
    reactions: "🙏 1"
  },
  {
    name: "Tamil selvi gowthaman",
    stats: "1 review",
    time: "4 months ago",
    text: "If you are looking for a dentist who combines years of clinical experience with a gentle, patient-centric approach, Dr. Gawthaman is the best choice.",
    reactions: "❤️🙏 2"
  },
  {
    name: "Yuva Barathi Venkatachalam",
    stats: "Local Guide · 8 reviews · 3 photos",
    time: "4 months ago",
    text: "Doctor was very kind, gentle, and he explain everything clearly before starting the treatment. I highly recommend them",
    reactions: "🙏 1"
  },
  {
    name: "Dhanapal K",
    stats: "1 review",
    time: "3 months ago",
    text: "Very satisfied with the care i received. The clinic was clean and well maintained. I'm happy with the results 👍",
    reactions: "🙏 1"
  },
  {
    name: "Gulshan Afsar",
    stats: "Local Guide · 4 reviews",
    time: "Edited 4 months ago",
    text: "Got my son's root canal done . My kid was happy not much painful",
    reactions: "🙏 1"
  },
  {
    name: "Prakash Raj",
    stats: "11 reviews",
    time: "4 years ago",
    text: "Very kind, able and compassionate pediatric dentist in Salem\nWish Gawthaman sir and his team all success in their endeavours",
    reactions: "🙏 1"
  },
  {
    name: "VIGNESH MANI",
    stats: "4 reviews",
    time: "4 years ago",
    text: "We supply mask to doctors clinic. He always ensures patients safety by following COVID protocols.",
    reactions: "🙏 1"
  },
  {
    name: "divya rangasamy",
    stats: "3 reviews",
    time: "2 years ago",
    text: "The best shop in world.It is amazing 🤩. The doctor is helpful. He is good. JUST FOR JOKE",
    reactions: ""
  }
];

export const ReviewsSection = () => {
  return (
    <section className="py-12 md:py-16 bg-surface overflow-hidden border-t border-gray-100">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col items-center justify-center text-center max-w-3xl mx-auto mb-12">
          {/* Google Logo / Badge */}
          <div className="flex items-center gap-2 mb-4">
            <span className="text-xl font-bold">
              <span className="text-[#4285F4]">G</span>
              <span className="text-[#EA4335]">o</span>
              <span className="text-[#FBBC05]">o</span>
              <span className="text-[#4285F4]">g</span>
              <span className="text-[#34A853]">l</span>
              <span className="text-[#EA4335]">e</span>
            </span>
            <span className="text-xl font-display font-bold text-dark">Reviews</span>
          </div>
          <h3 className="text-3xl md:text-4xl font-display font-black text-dark mb-4">What Our Patients Say</h3>
          <div className="flex items-center gap-2">
            <span className="text-xl font-bold text-dark">4.9</span>
            <div className="flex gap-1 text-[#FBBC05]">
              {[...Array(5)].map((_, index) => (
                <Star key={index} className="w-5 h-5 fill-current" />
              ))}
            </div>
            <span className="text-sm text-muted font-medium ml-2">(450+ reviews)</span>
          </div>
        </div>
      </div>

      <div className="relative w-full flex overflow-x-hidden">
        {/* Gradient Masks for smooth fading edges */}
        <div className="absolute top-0 left-0 w-16 md:w-32 h-full bg-gradient-to-r from-surface to-transparent z-10 pointer-events-none"></div>
        <div className="absolute top-0 right-0 w-16 md:w-32 h-full bg-gradient-to-l from-surface to-transparent z-10 pointer-events-none"></div>

        <motion.div
          className="flex whitespace-nowrap gap-6 py-4 px-4"
          animate={{ x: [0, -2000] }}
          transition={{
            repeat: Infinity,
            ease: "linear",
            duration: 60,
          }}
        >
          {/* Duplicate the array 3 times for a seamless infinite loop */}
          {[...reviews, ...reviews, ...reviews].map((review, i) => (
            <div 
              key={i} 
              className="w-[320px] md:w-[380px] shrink-0 bg-white rounded-2xl p-6 shadow-sm border border-gray-100 whitespace-normal flex flex-col hover:shadow-md transition-shadow"
            >
              <div className="flex items-start gap-3 mb-3">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold shrink-0">
                  {review.name.charAt(0).toUpperCase()}
                </div>
                <div className="flex-1 min-w-0">
                  <h4 className="font-bold text-dark text-sm truncate">{review.name}</h4>
                  <div className="text-[11px] text-muted truncate mt-0.5">{review.stats}</div>
                </div>
                <div className="flex shrink-0 -mt-1">
                  <span className="text-xl font-bold">
                    <span className="text-[#4285F4]">G</span>
                  </span>
                </div>
              </div>
              
              <div className="flex items-center gap-2 mb-3">
                <div className="flex gap-0.5 text-[#FBBC05]">
                  {[...Array(5)].map((_, index) => (
                    <Star key={index} className="w-3.5 h-3.5 fill-current" />
                  ))}
                </div>
                <span className="text-xs text-muted font-medium">{review.time}</span>
              </div>

              <p className="text-dark/80 leading-relaxed text-sm flex-1">
                {review.text}
              </p>

              {review.reactions && (
                <div className="mt-4 inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-gray-50 border border-gray-100 w-fit">
                  <span className="text-xs font-medium text-dark/70">{review.reactions}</span>
                </div>
              )}
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
