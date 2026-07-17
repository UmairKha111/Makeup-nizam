import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import AboutPage from './pages/AboutPage';
import ServicesPage from './pages/ServicesPage';
import GalleryPage from './pages/GalleryPage';
import ContactPage from './pages/ContactPage';
import GroomClassesPage from './pages/GroomClassesPage';

export default function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen bg-[#050505] selection:bg-[#D4AF37]/30 selection:text-[#FAF9F6] font-sans antialiased text-[#FAF9F6]">
        {/* Sticky luxury Navigation Header */}
        <Navbar />

        {/* Primary Page Mount Area */}
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/groom-classes" element={<GroomClassesPage />} />
            <Route path="/services" element={<ServicesPage />} />
            <Route path="/gallery" element={<GalleryPage />} />
            <Route path="/contact" element={<ContactPage />} />
          </Routes>
        </main>

        {/* Global Footer Layout */}
        <Footer />
      </div>
    </Router>
  );
}
