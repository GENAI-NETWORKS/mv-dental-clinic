import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Navbar } from './components/layout/Navbar';
import { Footer } from './components/layout/Footer';
import ScrollToTop from './components/ScrollToTop';
import { FloatingActionMenu } from './components/ui/FloatingActionMenu';

import { Home } from './pages/Home';
import { About } from './pages/About';
import { PediatricServices } from './pages/PediatricServices';
import { GeneralServices } from './pages/GeneralServices';
import { Gallery } from './pages/Gallery';
import { Contact } from './pages/Contact';
import { News } from './pages/News';

import { HelmetProvider } from 'react-helmet-async';

function App() {
  return (
    <HelmetProvider>
      <Router>
        <ScrollToTop />
        <div className="flex flex-col min-h-screen pb-16 lg:pb-0">
          <Navbar />
          <main className="flex-grow">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/services/pediatric" element={<PediatricServices />} />
              <Route path="/services/general" element={<GeneralServices />} />
              <Route path="/gallery" element={<Gallery />} />
              <Route path="/news" element={<News />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
          </main>
          <Footer />
          <FloatingActionMenu />
        </div>
      </Router>
    </HelmetProvider>
  );
}

export default App;
