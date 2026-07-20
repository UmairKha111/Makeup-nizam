import { useNavigate } from 'react-router-dom';
import { motion } from 'motion/react';
import { Sparkles, ArrowRight, Globe } from 'lucide-react';
import { generateWhatsAppLink } from '../data/siteConfig';
import bridalMakeupHero from '../assets/images/copy.jpeg';

export default function Hero() {
  const navigate = useNavigate();

  const handleBookClick = () => {
    window.open(generateWhatsAppLink("Hello Nizam, I would like to book a luxury makeup session for my upcoming wedding."), "_blank");
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black text-[#FAF9F6] pt-16"
    >
      {/* Background Image */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <motion.div
          initial={{ scale: 1.1, opacity: 0 }}
          animate={{ scale: 1, opacity: 0.65 }}
          transition={{ duration: 2, ease: "easeOut" }}
          className="w-full h-full"
        >
          <img
            src={bridalMakeupHero}
            alt="Premium Bridal Portrait"
            className="w-full h-full object-cover object-center"
            referrerPolicy="no-referrer"
          />
        </motion.div>
        <div className="absolute inset-0 bg-gradient-to-r from-[#050505] via-[#050505]/70 to-[#050505]/50" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-transparent to-black/40" />
      </div>

      {/* Hero content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 w-full py-20 lg:py-32 flex flex-col justify-center">
        <div className="max-w-3xl">

          {/* All India badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="inline-flex items-center gap-2 px-3 py-1 bg-[#D4AF37]/15 border border-[#D4AF37]/40 rounded-full mb-3"
          >
            <Globe className="w-3.5 h-3.5 text-[#D4AF37]" />
            <span className="text-[10px] md:text-xs tracking-[0.3em] uppercase text-[#D4AF37] font-semibold">
              All India Service Available
            </span>
          </motion.div>

          {/* Artist badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="inline-flex items-center gap-2 px-3 py-1 bg-[#D4AF37]/10 border border-[#D4AF37]/30 rounded-full mb-6 ml-2"
          >
            <Sparkles className="w-3.5 h-3.5 text-[#D4AF37]" />
            <span className="text-[10px] md:text-xs tracking-[0.3em] uppercase text-[#D4AF37] font-semibold">
              Professional Bridal Makeup Artist
            </span>
          </motion.div>

          {/* Main Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="font-serif text-4xl md:text-6xl lg:text-7xl font-normal leading-[1.1] tracking-tight mb-6"
          >
            Luxury Bridal Makeup <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FAF9F6] via-[#FAF9F6] to-[#D4AF37] font-serif">
              Creates Timeless Beauty
            </span>
          </motion.h1>

          {/* Description with new services */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-base md:text-lg text-[#FAF9F6]/80 font-sans font-light leading-relaxed mb-6 max-w-xl"
          >
            Professional HD, Airbrush & Glass Glow Makeup Artist creating flawless, sweat-proof bridal transformations. Specializing in premium photo arrangements and couture styling — across all of India.
          </motion.p>

          {/* Signature services pills */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.75 }}
            className="flex flex-wrap gap-2 mb-10"
          >
            {['HD Makeup', 'Glass Glow Makeup', 'Airbrush', 'Photo Arrangements', 'All India'].map((tag) => (
              <span
                key={tag}
                className="px-3 py-1 text-[10px] tracking-widest uppercase border border-[#D4AF37]/30 text-[#D4AF37]/90 bg-[#D4AF37]/5"
              >
                {tag}
              </span>
            ))}
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="flex flex-col sm:flex-row gap-4 items-start"
          >
         <button
  onClick={() => navigate('/contact')}
  className="w-full sm:w-auto px-8 py-4 bg-[#D4AF37] hover:bg-[#D4AF37]/90 text-[#050505] font-bold text-xs uppercase tracking-widest transition-all duration-300 hover:shadow-lg hover:shadow-[#D4AF37]/20 flex items-center justify-center gap-2 group"
>
  Book Your Makeup
  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
</button>
            <button
              onClick={() => navigate('/gallery')}
              className="w-full sm:w-auto px-8 py-4 bg-transparent border border-[#FAF9F6]/20 hover:border-[#D4AF37] text-[#FAF9F6] hover:text-[#D4AF37] font-bold text-xs uppercase tracking-widest transition-all duration-300 flex items-center justify-center gap-2"
            >
              View Portfolio
            </button>
          </motion.div>
        </div>
      </div>

      {/* Scroll hint */}
      <div className="absolute right-12 bottom-12 hidden lg:flex flex-col items-center gap-4 z-10">
        <span className="text-[10px] tracking-[0.5em] uppercase text-[#D4AF37] rotate-90 origin-bottom-right translate-y-[-10px]">
          SCROLL DOWN
        </span>
        <div className="w-[1px] h-20 bg-gradient-to-t from-[#D4AF37] to-transparent animate-pulse" />
      </div>
      <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[#D4AF37]/40 to-transparent" />
    </section>
  );
}
