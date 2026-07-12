import { Link } from 'react-router-dom';
import { MessageSquare, Instagram, Phone, MapPin, Heart, Youtube, Globe } from 'lucide-react';
import { siteConfig } from '../data/siteConfig';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#050505] text-[#FAF9F6] border-t border-[#D4AF37]/20 relative z-10 pt-20 pb-10">

      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-[1px] bg-gradient-to-r from-transparent via-[#D4AF37]/30 to-transparent" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">

        {/* Brand */}
        <div className="space-y-4">
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
          {/* Social icons row */}
          <div className="flex items-center gap-3 pt-2">
            <a
              href={siteConfig.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="w-8 h-8 flex items-center justify-center border border-[#D4AF37]/25 hover:border-[#D4AF37] hover:bg-[#D4AF37]/10 transition-all duration-300 group"
            >
              <Instagram className="w-3.5 h-3.5 text-[#D4AF37]/70 group-hover:text-[#D4AF37]" />
            </a>
            <a
              href={siteConfig.youtubeUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="YouTube"
              className="w-8 h-8 flex items-center justify-center border border-red-500/25 hover:border-red-400 hover:bg-red-500/10 transition-all duration-300 group"
            >
              <Youtube className="w-3.5 h-3.5 text-red-400/70 group-hover:text-red-400" />
            </a>
            <a
              href={`https://wa.me/${siteConfig.contact.whatsAppNumber}`}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="WhatsApp"
              className="w-8 h-8 flex items-center justify-center border border-green-500/25 hover:border-green-400 hover:bg-green-500/10 transition-all duration-300 group"
            >
              <MessageSquare className="w-3.5 h-3.5 text-green-400/70 group-hover:text-green-400" />
            </a>
          </div>
        </div>

        {/* Quick Links */}
        <div className="space-y-4">
          <h4 className="font-serif text-sm tracking-[0.1em] text-[#D4AF37] uppercase">Quick Links</h4>
          <ul className="space-y-2 text-xs text-[#FAF9F6]/75 font-sans font-light">
            <li><Link to="/" className="hover:text-[#D4AF37] transition-colors">Home</Link></li>
            <li><Link to="/about" className="hover:text-[#D4AF37] transition-colors">About Nizam</Link></li>
            <li><Link to="/services" className="hover:text-[#D4AF37] transition-colors">Bridal Services</Link></li>
            <li><Link to="/gallery" className="hover:text-[#D4AF37] transition-colors">Makeup Gallery</Link></li>
            <li><Link to="/contact" className="hover:text-[#D4AF37] transition-colors">Contact / Bookings</Link></li>
            <li>
              <a href="#instagram" className="hover:text-[#D4AF37] transition-colors">
                Instagram
              </a>
            </li>
            <li>
              <a href="#youtube" className="hover:text-[#D4AF37] transition-colors">
                YouTube
              </a>
            </li>
          </ul>
        </div>

        {/* Service Area */}
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
          <p className="text-[10px] text-[#FAF9F6]/40 font-sans leading-relaxed">{siteConfig.travelInfo}</p>
        </div>

        {/* Contact & Socials */}
        <div className="space-y-4">
          <h4 className="font-serif text-sm tracking-[0.1em] text-[#D4AF37] uppercase">Let's Connect</h4>
          <div className="space-y-3 text-xs text-[#FAF9F6]/75">
            <a href={`tel:${siteConfig.contact.phone}`} className="flex items-center gap-2 hover:text-[#D4AF37] transition-colors">
              <Phone className="w-4 h-4 text-[#D4AF37]" />
              {siteConfig.contact.phoneFormatted}
            </a>
            <a
              href={siteConfig.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 hover:text-[#D4AF37] transition-colors"
            >
              <Instagram className="w-4 h-4 text-[#D4AF37]" />
              {siteConfig.instagram}
            </a>
            <a
              href={siteConfig.youtubeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 hover:text-red-400 transition-colors"
            >
              <Youtube className="w-4 h-4 text-red-500" />
              {siteConfig.youtube}
            </a>
            <a
              href={`https://wa.me/${siteConfig.contact.whatsAppNumber}?text=${encodeURIComponent('Hello Makeover By Nizam, I would like to book a bridal makeup appointment.')}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 hover:text-green-400 transition-colors"
            >
              <MessageSquare className="w-4 h-4 text-green-500" />
              Book via WhatsApp
            </a>
          </div>
        </div>

      </div>

      {/* Bottom bar */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 pt-8 border-t border-[#FAF9F6]/10 flex flex-col md:flex-row items-center justify-between text-center gap-4">
        <p className="text-[10px] text-[#FAF9F6]/40 uppercase tracking-widest font-sans font-light">
          © {currentYear} {siteConfig.brandName}. All Rights Reserved.
        </p>
        <p className="text-[10px] text-[#FAF9F6]/40 uppercase tracking-widest font-sans font-light flex items-center gap-1">
          Designed with <Heart className="w-3 h-3 text-[#D4AF37] fill-[#D4AF37]" /> for premium wedding transformations.
        </p>
      </div>
    </footer>
  );
}
