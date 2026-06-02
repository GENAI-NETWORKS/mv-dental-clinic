import { motion } from 'framer-motion';
import beforeImg1 from '../../assets/image.png';
import afterImg1 from '../../assets/image copy.png';
import beforeImg2 from '../../assets/image copy 2.png';
import afterImg2 from '../../assets/image copy 3.png';
import afterImg3 from '../../assets/image copy 5.png';
import implantImg1 from '../../assets/MR.SRINIVASAN 39 YRS 02_page-0001.jpg';
import implantImg2 from '../../assets/MR.SRINIVASAN 40Y M OPG IMAGE 2_page-0001.jpg';

const cases = [
  {
    title: "Case 1: Anterior esthetic restoration",
    description: "Witness the transformation. We utilize advanced esthetic techniques to restore both the function and natural beauty of your smile.",
    images: [
      { src: beforeImg1, text: "Pre treatment - anterior caries teeth", badge: "Before", color: "bg-red-500/90", delay: 0 },
      { src: afterImg1, text: "Esthetic Restored teeth", badge: "After", color: "bg-green-500/90", delay: 0.2 },
    ]
  },
  {
    title: "Case 2: Extraction of anterior teeth",
    description: "Careful and precise extraction procedures ensuring optimal care and minimal discomfort for our patients.",
    images: [
      { src: beforeImg2, text: "OPG - Before extraction of anterior teeth", badge: "Before", color: "bg-red-500/90", delay: 0 },
      { src: afterImg2, text: "Just after extraction", badge: "Before", color: "bg-red-500/90", delay: 0.1 },
      { src: implantImg1, text: "After placement of implants", badge: "Implants", color: "bg-blue-500/90", delay: 0.2 },
      { src: implantImg2, text: "After final fixed Prosthesis", badge: "Prosthesis", color: "bg-blue-500/90", delay: 0.3 },
      { src: afterImg3, text: "Post treatment anterior teeth", badge: "Post Treatment", color: "bg-green-500/90", delay: 0.4 },
    ]
  }
];

export const BeforeAfterSection = () => {
  return (
    <section className="pt-8 pb-12 md:pt-10 md:pb-16 bg-white relative overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-16">
          <h2 className="text-sm font-bold text-primary uppercase tracking-widest mb-3">Clinical Results</h2>
          <h3 className="text-3xl md:text-4xl font-display font-black text-dark mb-4">Before & After Transformations</h3>
        </div>

        <div className="space-y-24">
          {cases.map((clinicalCase, idx) => (
            <div key={idx} className="flex flex-col items-center">
              <div className="text-center mb-10">
                <h4 className="text-2xl font-display font-bold text-dark mb-3">{clinicalCase.title}</h4>
                {clinicalCase.description && (
                  <p className="text-muted max-w-2xl mx-auto">
                    {clinicalCase.description}
                  </p>
                )}
              </div>

              {/* Dynamic Grid: 2 cols if 2 images, 3 cols if 3 images, 5 cols if 5 images */}
              <div className={`w-full mx-auto grid grid-cols-1 sm:grid-cols-2 ${
                clinicalCase.images.length === 2 ? 'md:grid-cols-2 max-w-5xl' : 
                clinicalCase.images.length === 3 ? 'md:grid-cols-3 max-w-6xl' : 
                'md:grid-cols-3 lg:grid-cols-5 max-w-[100%] xl:max-w-[95rem]'
              } gap-6 md:gap-8 lg:gap-8`}>
                {clinicalCase.images.map((img, imgIdx) => (
                  <motion.div
                    key={imgIdx}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: img.delay }}
                    className="flex flex-col items-center"
                  >
                    <div className="w-full relative rounded-3xl overflow-hidden shadow-xl border-8 border-surface bg-surface mb-6 group">
                      <div className={`absolute top-4 ${imgIdx === 0 ? 'left-4' : 'right-4'} ${img.color} backdrop-blur-md text-white text-xs font-bold uppercase tracking-wider px-3 py-1.5 rounded-full z-10 shadow-md`}>
                        {img.badge}
                      </div>
                      <div className="aspect-[4/3] w-full relative">
                        <img
                          src={img.src}
                          alt={img.text}
                          className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                        />
                      </div>
                    </div>
                    <h4 className="text-lg font-bold text-dark text-center leading-tight">{img.text}</h4>
                  </motion.div>
                ))}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
