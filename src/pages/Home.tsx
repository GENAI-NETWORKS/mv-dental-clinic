import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { SEO } from '../components/seo/SEO';
import { HeroSection } from '../components/sections/HeroSection';
import { StatsSection } from '../components/sections/StatsSection';
import { AboutSection } from '../components/sections/AboutSection';
import { ServicesSection } from '../components/sections/ServicesSection';
import { WhyChooseUs } from '../components/sections/WhyChooseUs';
import { GallerySection } from '../components/sections/GallerySection';
import { PatientTreatmentBlog } from '../components/sections/PatientTreatmentBlog';

import { ReviewsSection } from '../components/sections/ReviewsSection';

export const Home = () => {
  const location = useLocation();

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Dentist",
    "name": "MV Dental Clinic & Vaisha Children's Dental Center",
    "image": "https://mvdentalclinic.com/logo.png",
    "@id": "",
    "url": "https://mvdentalclinic.com",
    "telephone": "+918870185063",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "32, Vidhyalaya Road, Opp. TRS Mandapam, Srirangapalayam East",
      "addressLocality": "Salem",
      "postalCode": "636007",
      "addressCountry": "IN"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 11.6643,
      "longitude": 78.1460
    },
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday"
      ],
      "opens": "10:00",
      "closes": "20:30"
    }
  };

  return (
    <>
      <SEO 
        title="MV Dental Clinic | Pediatric & Family Dentistry in Salem"
        description="Premium Pediatric & Family Dentistry in Salem. Dr. M. Gawthaman and Dr. Vaisha offer expert, pain-free dental care, from root canals to kid-friendly pediatric treatments."
      />
      <Helmet>
        <script type="application/ld+json">
          {JSON.stringify(jsonLd)}
        </script>
      </Helmet>
      
      <HeroSection />
      <StatsSection />
      <AboutSection />
      <ServicesSection />
      <PatientTreatmentBlog />
      <GallerySection />
      <WhyChooseUs />
      <ReviewsSection />
    </>
  );
};
