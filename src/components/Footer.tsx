import { Link } from 'react-router-dom';
import { Phone, MapPin, Heart, Globe } from 'lucide-react';
import { siteConfig } from '../data/siteConfig';
 
// ═══════════════════════════════════════════════════════════
//  REAL BRAND LOGOS — exact official SVGs, larger sizes
// ═══════════════════════════════════════════════════════════
 
function InstagramLogo({ size = 28 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 1000 1000" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <radialGradient id="footer-ig-rg" cx="30%" cy="107%" r="150%">
          <stop offset="0%"  stopColor="#fdf497" />
          <stop offset="5%"  stopColor="#fdf497" />
          <stop offset="45%" stopColor="#fd5949" />
          <stop offset="60%" stopColor="#d6249f" />
          <stop offset="90%" stopColor="#285AEB" />
        </radialGradient>
      </defs>
      {/* Rounded square background */}
      <rect width="1000" height="1000" rx="260" ry="260" fill="url(#footer-ig-rg)" />
      {/* Camera body outline */}
      <rect x="155" y="155" width="690" height="690" rx="190" ry="190"
        fill="none" stroke="white" strokeWidth="60" />
      {/* Lens circle */}
      <circle cx="500" cy="500" r="175"
        fill="none" stroke="white" strokeWidth="60" />
      {/* Flash dot */}
      <circle cx="697" cy="303" r="60" fill="white" />
    </svg>
  );
}
 
function YoutubeLogo({ size = 28 }: { size?: number }) {
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
 
function WhatsAppLogo({ size = 28 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413z"
        fill="#25D366"
      />
    </svg>
  );
}
 
function PhoneIcon({ size = 16 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" fill="#D4AF37"/>
    </svg>
  );
}
 
// ═══════════════════════════════════════════════════════════
 
export default function Footer() {
  const currentYear = new Date().getFullYear();
 
  return (
    <footer className="bg-[#050505] text-[#FAF9F6] border-t border-[#D4AF37]/20 relative z-10 pt-20 pb-10">
 
      {/* Top gold line */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-[1px] bg-gradient-to-r from-transparent via-[#D4AF37]/30 to-transparent" />
 
      <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
 
        {/* ── Brand column ──────────────────────────────────── */}
        <div className="space-y-5">
          <Link to="/" className="flex flex-col items-start">
            <span className="font-serif text-xl tracking-[0.2em] text-[#FAF9F6] hover:text-[#D4AF37] transition-colors">
              {siteConfig.brandName.toUpperCase()}
            </span>
            <span className="text-[9px] tracking-[0.4em] uppercase text-[#D4AF37] font-sans">
              {siteConfig.category}
            </span>
          </Link>
 
          <p className="text-xs text-[#FAF9F6]/60 leading-relaxed font-sans font-light">
            Luxury HD, Glass Glow & Airbrush bridal transformations with premium photo arrangements — available all over India.
          </p>
 
          {/* ── Social icon row — REAL BIG LOGOS ── */}
          <div className="flex items-center gap-4 pt-1">
 
            {/* Instagram */}
            <a
              href={siteConfig.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Follow on Instagram"
              title="Follow on Instagram"
              className="group flex flex-col items-center gap-1.5"
            >
              <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-white/5 border border-white/10 group-hover:border-[#d6249f]/60 group-hover:bg-[#d6249f]/10 transition-all duration-300 group-hover:scale-110">
                <InstagramLogo size={26} />
              </div>
              <span className="text-[9px] text-[#FAF9F6]/40 group-hover:text-[#d6249f] transition-colors tracking-wide">
                Instagram
              </span>
            </a>
 
            {/* YouTube */}
            <a
              href={siteConfig.youtubeUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Subscribe on YouTube"
              title="Subscribe on YouTube"
              className="group flex flex-col items-center gap-1.5"
            >
              <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-white/5 border border-white/10 group-hover:border-[#FF0000]/60 group-hover:bg-[#FF0000]/10 transition-all duration-300 group-hover:scale-110">
                <YoutubeLogo size={26} />
              </div>
              <span className="text-[9px] text-[#FAF9F6]/40 group-hover:text-[#FF0000] transition-colors tracking-wide">
                YouTube
              </span>
            </a>
 
            {/* WhatsApp */}
            <a
              href={`https://wa.me/${siteConfig.contact.whatsAppNumber}?text=${encodeURIComponent('Hello Makeover By Nizam, I would like to book a bridal makeup appointment.')}`}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Chat on WhatsApp"
              title="Chat on WhatsApp"
              className="group flex flex-col items-center gap-1.5"
            >
              <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-white/5 border border-white/10 group-hover:border-[#25D366]/60 group-hover:bg-[#25D366]/10 transition-all duration-300 group-hover:scale-110">
                <WhatsAppLogo size={26} />
              </div>
              <span className="text-[9px] text-[#FAF9F6]/40 group-hover:text-[#25D366] transition-colors tracking-wide">
                WhatsApp
              </span>
            </a>
 
          </div>
        </div>
 
        {/* ── Quick Links ───────────────────────────────────── */}
        <div className="space-y-4">
          <h4 className="font-serif text-sm tracking-[0.1em] text-[#D4AF37] uppercase">Quick Links</h4>
          <ul className="space-y-2 text-xs text-[#FAF9F6]/75 font-sans font-light">
            <li><Link to="/"        className="hover:text-[#D4AF37] transition-colors">Home</Link></li>
            <li><Link to="/about"   className="hover:text-[#D4AF37] transition-colors">About Nizam</Link></li>
            <li><Link to="/services"className="hover:text-[#D4AF37] transition-colors">Bridal Services</Link></li>
            <li><Link to="/gallery" className="hover:text-[#D4AF37] transition-colors">Makeup Gallery</Link></li>
            <li><Link to="/contact" className="hover:text-[#D4AF37] transition-colors">Contact / Bookings</Link></li>
            <li><a href="#instagram" className="hover:text-[#D4AF37] transition-colors">Instagram</a></li>
            <li><a href="#youtube"   className="hover:text-[#D4AF37] transition-colors">YouTube</a></li>
          </ul>
        </div>
 
        {/* ── Service Area ──────────────────────────────────── */}
        <div className="space-y-4">
          <h4 className="font-serif text-sm tracking-[0.1em] text-[#D4AF37] uppercase">Service Area</h4>
          <p className="text-xs text-[#FAF9F6]/75 leading-relaxed font-sans font-light">
            Premium on-location home and venue bridal makeover services available across all states in India.
          </p>
          <div className="flex items-start gap-2 text-xs text-[#D4AF37]">
            <Globe className="w-4 h-4 mt-0.5 flex-shrink-0" />
            <span className="font-semibold tracking-wider uppercase">All India Service Available</span>
          </div>
          <div className="flex items-start gap-2 text-xs text-[#FAF9F6]/60">
            <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0 text-[#D4AF37]" />
            <span>Home base: Kerala & Tamil Nadu</span>
          </div>
          <p className="text-[10px] text-[#FAF9F6]/40 font-sans leading-relaxed">
            {siteConfig.travelInfo}
          </p>
        </div>
 
        {/* ── Let's Connect — BIG real logo buttons ─────────── */}
        <div className="space-y-4">
          <h4 className="font-serif text-sm tracking-[0.1em] text-[#D4AF37] uppercase">Let's Connect</h4>
 
          <div className="space-y-3">
 
            {/* Phone */}
            <a
              href={`tel:${siteConfig.contact.phone}`}
              className="flex items-center gap-3 text-xs text-[#FAF9F6]/75 hover:text-[#D4AF37] transition-colors group"
            >
              <div className="w-9 h-9 flex items-center justify-center rounded-lg bg-[#D4AF37]/10 border border-[#D4AF37]/20 group-hover:border-[#D4AF37]/50 transition-all flex-shrink-0">
                <PhoneIcon size={16} />
              </div>
              <span>{siteConfig.contact.phoneFormatted}</span>
            </a>
 
            {/* Instagram — big real logo + handle */}
            <a
              href={siteConfig.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 text-xs text-[#FAF9F6]/75 hover:text-[#d6249f] transition-colors group"
            >
              <div className="w-9 h-9 flex items-center justify-center rounded-lg bg-white/5 border border-white/10 group-hover:border-[#d6249f]/50 group-hover:bg-[#d6249f]/10 transition-all flex-shrink-0">
                <InstagramLogo size={20} />
              </div>
              <span>{siteConfig.instagram}</span>
            </a>
 
            {/* YouTube — big real logo + channel name */}
            <a
              href={siteConfig.youtubeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 text-xs text-[#FAF9F6]/75 hover:text-[#FF0000] transition-colors group"
            >
              <div className="w-9 h-9 flex items-center justify-center rounded-lg bg-white/5 border border-white/10 group-hover:border-[#FF0000]/50 group-hover:bg-[#FF0000]/10 transition-all flex-shrink-0">
                <YoutubeLogo size={20} />
              </div>
              <span>{siteConfig.youtube}</span>
            </a>
 
            {/* WhatsApp — big real logo + book text */}
            <a
              href={`https://wa.me/${siteConfig.contact.whatsAppNumber}?text=${encodeURIComponent('Hello Makeover By Nizam, I would like to book a bridal makeup appointment.')}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 text-xs text-[#FAF9F6]/75 hover:text-[#25D366] transition-colors group"
            >
              <div className="w-9 h-9 flex items-center justify-center rounded-lg bg-white/5 border border-white/10 group-hover:border-[#25D366]/50 group-hover:bg-[#25D366]/10 transition-all flex-shrink-0">
                <WhatsAppLogo size={20} />
              </div>
              <span>Book via WhatsApp</span>
            </a>
 
          </div>
        </div>
 
      </div>
 
      {/* ── Bottom bar ──────────────────────────────────────── */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 pt-8 border-t border-[#FAF9F6]/10 flex flex-col md:flex-row items-center justify-between text-center gap-4">
        <p className="text-[10px] text-[#FAF9F6]/40 uppercase tracking-widest font-sans font-light">
          © {currentYear} {siteConfig.brandName}. All Rights Reserved.
        </p>
 
        {/* Bottom social icons row — real logos, small */}
        <div className="flex items-center gap-3">
          <a href={siteConfig.instagramUrl} target="_blank" rel="noopener noreferrer"
            aria-label="Instagram"
            className="opacity-40 hover:opacity-100 transition-opacity hover:scale-110 transform duration-200">
            <InstagramLogo size={18} />
          </a>
          <a href={siteConfig.youtubeUrl} target="_blank" rel="noopener noreferrer"
            aria-label="YouTube"
            className="opacity-40 hover:opacity-100 transition-opacity hover:scale-110 transform duration-200">
            <YoutubeLogo size={18} />
          </a>
          <a
            href={`https://wa.me/${siteConfig.contact.whatsAppNumber}`}
            target="_blank" rel="noopener noreferrer"
            aria-label="WhatsApp"
            className="opacity-40 hover:opacity-100 transition-opacity hover:scale-110 transform duration-200">
            <WhatsAppLogo size={18} />
          </a>
        </div>
 
        <p className="text-[10px] text-[#FAF9F6]/40 uppercase tracking-widest font-sans font-light flex items-center gap-1">
          Designed with <Heart className="w-3 h-3 text-[#D4AF37] fill-[#D4AF37]" /> for premium wedding transformations.
        </p>
      </div>
 
      {/* ── Umanz Technology credit ─────────────────────────── */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 mt-6 flex items-center justify-center">
        <a
          href="https://umanztechnology.in"
          target="_blank"
          rel="noopener noreferrer"
          className="group inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-[#FAF9F6]/8 hover:border-[#D4AF37]/30 bg-white/[0.02] hover:bg-[#D4AF37]/5 transition-all duration-300"
        >
          {/* Code brackets icon */}
          <svg
            width="13" height="13" viewBox="0 0 24 24" fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="text-[#D4AF37]/50 group-hover:text-[#D4AF37] transition-colors flex-shrink-0"
          >
            <path d="M16 18l6-6-6-6M8 6l-6 6 6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
 
          <span className="text-[10px] text-[#FAF9F6]/35 group-hover:text-[#FAF9F6]/60 tracking-[0.15em] uppercase font-sans font-light transition-colors">
            Crafted by
          </span>
 
          <span className="text-[10px] text-[#D4AF37]/60 group-hover:text-[#D4AF37] tracking-[0.12em] uppercase font-sans font-semibold transition-colors">
            Umanz Technology
          </span>
 
          {/* External link arrow */}
          <svg
            width="10" height="10" viewBox="0 0 24 24" fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="text-[#D4AF37]/30 group-hover:text-[#D4AF37]/70 transition-colors flex-shrink-0 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transform duration-200"
          >
            <path d="M7 17L17 7M17 7H7M17 7v10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </a>
      </div>
 
    </footer>
  );
}
