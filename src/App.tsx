import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Navbar } from './components/layout/Navbar';
import { Footer } from './components/layout/Footer';
import ScrollToTop from './components/ScrollToTop';
import { WhatsAppButton } from './components/ui/WhatsAppButton';

import { Home } from './pages/Home';
import { About } from './pages/About';
import { PediatricServices } from './pages/PediatricServices';
import { GeneralServices } from './pages/GeneralServices';
import { Gallery } from './pages/Gallery';
import { Contact } from './pages/Contact';

import { HelmetProvider } from 'react-helmet-async';

function App() {
  return (
    <HelmetProvider>
      <Router>
        <ScrollToTop />
        <div className="flex flex-col min-h-screen">
          <Navbar />
          <main className="flex-grow">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/services/pediatric" element={<PediatricServices />} />
              <Route path="/services/general" element={<GeneralServices />} />
              <Route path="/gallery" element={<Gallery />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
          </main>
          <Footer />
          <WhatsAppButton />
        </div>
      </Router>
    </HelmetProvider>
  );
}

export default App;
