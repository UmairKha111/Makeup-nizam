import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, MessageSquare, Instagram, Youtube } from 'lucide-react';
import { siteConfig, generateWhatsAppLink } from '../data/siteConfig';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [location.pathname]);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Gallery', path: '/gallery' },
    { name: 'Contact', path: '/contact' },
  ];

  const handleBookAppointment = () => {
    window.open(generateWhatsAppLink("Hello Nizam, I would like to book an appointment for bridal makeup styling."), '_blank');
  };

  const isActive = (path: string) => location.pathname === path;

  return (
    <header
      id="main-navbar"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? 'bg-[#050505]/95 backdrop-blur-md border-b border-[#D4AF37]/20 py-4 shadow-xl'
          : 'bg-gradient-to-b from-black/80 to-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">

        {/* Logo */}
        <Link to="/" className="flex flex-col items-start group">
          <span className="font-serif text-xl md:text-2xl tracking-[0.2em] text-[#FAF9F6] group-hover:text-[#D4AF37] transition-colors duration-300">
            {siteConfig.brandName.toUpperCase()}
          </span>
          <span className="text-[9px] tracking-[0.4em] uppercase text-[#D4AF37] font-sans">
            {siteConfig.category}
          </span>
        </Link>

        {/* Desktop Links */}
        <nav className="hidden lg:flex items-center space-x-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              className="relative text-sm tracking-widest uppercase py-2 transition-colors duration-300 group"
              style={{ color: isActive(link.path) ? '#D4AF37' : '#FAF9F6' }}
            >
              <span className="group-hover:text-[#D4AF37] transition-colors duration-300">{link.name}</span>
              <span className={`absolute bottom-0 left-0 w-full h-[1px] bg-[#D4AF37] transform origin-left transition-transform duration-300 ${isActive(link.path) ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'}`} />
            </Link>
          ))}
        </nav>

        {/* Desktop right actions */}
        <div className="hidden lg:flex items-center gap-3">
          {/* Instagram icon */}
          <a
            href={siteConfig.instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
            className="w-8 h-8 flex items-center justify-center border border-[#D4AF37]/25 hover:border-[#D4AF37] hover:bg-[#D4AF37]/10 transition-all duration-300 group"
          >
            <Instagram className="w-3.5 h-3.5 text-[#D4AF37]/70 group-hover:text-[#D4AF37]" />
          </a>
          {/* YouTube icon */}
          <a
            href={siteConfig.youtubeUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="YouTube"
            className="w-8 h-8 flex items-center justify-center border border-red-500/25 hover:border-red-400 hover:bg-red-500/10 transition-all duration-300 group"
          >
            <Youtube className="w-3.5 h-3.5 text-red-400/70 group-hover:text-red-400" />
          </a>
          {/* Book button */}
          <button
            onClick={handleBookAppointment}
            className="relative overflow-hidden group bg-transparent border border-[#D4AF37] text-[#FAF9F6] px-6 py-2.5 text-xs uppercase tracking-widest font-semibold hover:text-[#050505] transition-colors duration-500"
          >
            <span className="absolute inset-0 w-full h-full bg-[#D4AF37] -translate-x-full group-hover:translate-x-0 transition-transform duration-500 ease-out z-0" />
            <span className="relative z-10 flex items-center gap-2">
              <MessageSquare className="w-3.5 h-3.5" />
              Book Appointment
            </span>
          </button>
        </div>

        {/* Mobile Hamburger */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="lg:hidden text-[#FAF9F6] hover:text-[#D4AF37] transition-colors duration-300 focus:outline-none"
          aria-label="Toggle menu"
        >
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="absolute top-full left-0 right-0 bg-[#050505]/98 border-b border-[#D4AF37]/20 backdrop-blur-lg lg:hidden flex flex-col px-6 py-8 space-y-6 shadow-2xl"
          >
            <div className="flex flex-col space-y-4">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  className="text-base tracking-widest uppercase font-sans text-center py-2 border-b border-[#FAF9F6]/5"
                  style={{ color: isActive(link.path) ? '#D4AF37' : '#FAF9F6' }}
                >
                  {link.name}
                </Link>
              ))}
            </div>

            {/* Mobile social icons */}
            <div className="flex justify-center gap-4">
              <a href={siteConfig.instagramUrl} target="_blank" rel="noopener noreferrer"
                className="flex items-center gap-2 text-xs text-[#D4AF37]/80 border border-[#D4AF37]/30 px-4 py-2 hover:bg-[#D4AF37]/10 transition-colors">
                <Instagram className="w-4 h-4" /> Instagram
              </a>
              <a href={siteConfig.youtubeUrl} target="_blank" rel="noopener noreferrer"
                className="flex items-center gap-2 text-xs text-red-400/80 border border-red-500/30 px-4 py-2 hover:bg-red-500/10 transition-colors">
                <Youtube className="w-4 h-4" /> YouTube
              </a>
            </div>

            <button
              onClick={handleBookAppointment}
              className="w-full bg-[#D4AF37] hover:bg-[#D4AF37]/90 text-[#050505] py-3 text-xs uppercase tracking-widest font-bold flex items-center justify-center gap-2 transition-all duration-300 shadow-lg shadow-[#D4AF37]/10"
            >
              <MessageSquare className="w-4 h-4" />
              Book Appointment
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
