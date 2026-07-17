import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, MessageSquare } from 'lucide-react';
import { siteConfig, generateWhatsAppLink } from '../data/siteConfig';
 
// ─── Real brand SVG logos ────────────────────────────────────
 
function InstagramLogo({ size = 18 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 1000 1000" xmlns="http://www.w3.org/2000/svg">
      <defs>
        {/* Exact Instagram official background gradient */}
        <radialGradient id="ig-rg1" cx="30%" cy="107%" r="150%">
          <stop offset="0%"   stopColor="#fdf497" />
          <stop offset="5%"   stopColor="#fdf497" />
          <stop offset="45%"  stopColor="#fd5949" />
          <stop offset="60%"  stopColor="#d6249f" />
          <stop offset="90%"  stopColor="#285AEB" />
        </radialGradient>
        {/* Mask so gradient only fills the icon shape */}
        <clipPath id="ig-clip">
          <rect width="1000" height="1000" rx="260" ry="260" />
        </clipPath>
      </defs>
 
      {/* Rounded square background */}
      <rect width="1000" height="1000" rx="260" ry="260" fill="url(#ig-rg1)" />
 
      {/* Outer border square (camera body outline) */}
      <rect
        x="155" y="155" width="690" height="690"
        rx="190" ry="190"
        fill="none"
        stroke="white"
        strokeWidth="60"
      />
 
      {/* Centre circle (lens) */}
      <circle
        cx="500" cy="500" r="175"
        fill="none"
        stroke="white"
        strokeWidth="60"
      />
 
      {/* Top-right dot (flash) */}
      <circle cx="697" cy="303" r="60" fill="white" />
    </svg>
  );
}
 
function YoutubeLogo({ size = 18 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814z"
        fill="#FF0000"
      />
      <polygon points="9.545,15.568 15.818,12 9.545,8.432" fill="white" />
    </svg>
  );
}
 
function WhatsAppLogo({ size = 18 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413z"
        fill="#25D366"
      />
    </svg>
  );
}
 
// ────────────────────────────────────────────────────────────
 
export default function Navbar() {
  const [isOpen, setIsOpen]       = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location                  = useLocation();
 
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
    { name: 'Home',     path: '/' },
    { name: 'About',    path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Gallery',  path: '/gallery' },
    { name: 'Contact',  path: '/contact' },
  ];
 
  const handleBookAppointment = () => {
    window.open(
      generateWhatsAppLink('Hello Nizam, I would like to book an appointment for bridal makeup styling.'),
      '_blank'
    );
  };
 
  const isActive = (path: string) => location.pathname === path;
 
  // Shared icon button base classes
  const iconBtnBase =
    'w-9 h-9 flex items-center justify-center rounded-sm border transition-all duration-300';
 
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
 
        {/* ── Logo ── */}
        <Link to="/" className="flex flex-col items-start group">
          <span className="font-serif text-xl md:text-2xl tracking-[0.2em] text-[#FAF9F6] group-hover:text-[#D4AF37] transition-colors duration-300">
            {siteConfig.brandName.toUpperCase()}
          </span>
          <span className="text-[9px] tracking-[0.4em] uppercase text-[#D4AF37] font-sans">
            {siteConfig.category}
          </span>
        </Link>
 
        {/* ── Desktop nav links ── */}
        <nav className="hidden lg:flex items-center space-x-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              className="relative text-sm tracking-widest uppercase py-2 transition-colors duration-300 group"
              style={{ color: isActive(link.path) ? '#D4AF37' : '#FAF9F6' }}
            >
              <span className="group-hover:text-[#D4AF37] transition-colors duration-300">
                {link.name}
              </span>
              <span
                className={`absolute bottom-0 left-0 w-full h-[1px] bg-[#D4AF37] transform origin-left transition-transform duration-300 ${
                  isActive(link.path) ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'
                }`}
              />
            </Link>
          ))}
        </nav>
 
        {/* ── Desktop right actions ── */}
        <div className="hidden lg:flex items-center gap-2.5">
 
          {/* Instagram — real logo */}
          <a
            href={siteConfig.instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Follow on Instagram"
            title="Follow on Instagram"
            className={`${iconBtnBase} border-white/10 hover:border-[#d6249f]/60 hover:bg-[#d6249f]/10`}
          >
            <InstagramLogo size={17} />
          </a>
 
          {/* YouTube — real logo */}
          <a
            href={siteConfig.youtubeUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Subscribe on YouTube"
            title="Subscribe on YouTube"
            className={`${iconBtnBase} border-white/10 hover:border-[#FF0000]/60 hover:bg-[#FF0000]/10`}
          >
            <YoutubeLogo size={17} />
          </a>
 
          {/* WhatsApp — real logo */}
          <a
            href={`https://wa.me/${siteConfig.contact.whatsAppNumber}`}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Chat on WhatsApp"
            title="Chat on WhatsApp"
            className={`${iconBtnBase} border-white/10 hover:border-[#25D366]/60 hover:bg-[#25D366]/10`}
          >
            <WhatsAppLogo size={17} />
          </a>
 
          {/* Book button */}
          <button
            onClick={handleBookAppointment}
            className="relative overflow-hidden group bg-transparent border border-[#D4AF37] text-[#FAF9F6] px-6 py-2.5 text-xs uppercase tracking-widest font-semibold hover:text-[#050505] transition-colors duration-500 ml-1"
          >
            <span className="absolute inset-0 w-full h-full bg-[#D4AF37] -translate-x-full group-hover:translate-x-0 transition-transform duration-500 ease-out z-0" />
            <span className="relative z-10 flex items-center gap-2">
              <MessageSquare className="w-3.5 h-3.5" />
              Book Appointment
            </span>
          </button>
        </div>
 
        {/* ── Mobile hamburger ── */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="lg:hidden text-[#FAF9F6] hover:text-[#D4AF37] transition-colors duration-300 focus:outline-none"
          aria-label="Toggle menu"
        >
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>
 
      {/* ── Mobile drawer ── */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="absolute top-full left-0 right-0 bg-[#050505]/98 border-b border-[#D4AF37]/20 backdrop-blur-lg lg:hidden flex flex-col px-6 py-8 space-y-6 shadow-2xl"
          >
            {/* Nav links */}
            <div className="flex flex-col space-y-1">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  className="text-base tracking-widest uppercase font-sans text-center py-3 border-b border-[#FAF9F6]/5 transition-colors"
                  style={{ color: isActive(link.path) ? '#D4AF37' : '#FAF9F6' }}
                >
                  {link.name}
                </Link>
              ))}
            </div>
 
            {/* Mobile social buttons — real logos + brand name */}
            <div className="flex justify-center gap-3 flex-wrap">
 
              <a
                href={siteConfig.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2.5 border border-white/10 hover:border-[#d6249f]/50 hover:bg-[#d6249f]/10 text-[#FAF9F6]/80 text-xs tracking-wide transition-all duration-300 rounded-sm"
              >
                <InstagramLogo size={16} />
                <span>Instagram</span>
              </a>
 
              <a
                href={siteConfig.youtubeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2.5 border border-white/10 hover:border-[#FF0000]/50 hover:bg-[#FF0000]/10 text-[#FAF9F6]/80 text-xs tracking-wide transition-all duration-300 rounded-sm"
              >
                <YoutubeLogo size={16} />
                <span>YouTube</span>
              </a>
 
              <a
                href={`https://wa.me/${siteConfig.contact.whatsAppNumber}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2.5 border border-white/10 hover:border-[#25D366]/50 hover:bg-[#25D366]/10 text-[#FAF9F6]/80 text-xs tracking-wide transition-all duration-300 rounded-sm"
              >
                <WhatsAppLogo size={16} />
                <span>WhatsApp</span>
              </a>
            </div>
 
            {/* Book CTA */}
            <button
              onClick={handleBookAppointment}
              className="w-full bg-[#D4AF37] hover:bg-[#D4AF37]/90 active:scale-[0.98] text-[#050505] py-3.5 text-xs uppercase tracking-widest font-bold flex items-center justify-center gap-2 transition-all duration-300 shadow-lg shadow-[#D4AF37]/10"
            >
              <WhatsAppLogo size={16} />
              Book Appointment
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}