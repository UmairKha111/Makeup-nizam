import { useEffect } from 'react';
import { motion } from 'motion/react';
import { Sparkles, Camera, Eye } from 'lucide-react';
import Portfolio from '../components/Portfolio';

export default function GalleryPage() {
  useEffect(() => {
    document.title = "Wedding Makeup Gallery | Makeover By Nizam";
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  return (
    <div className="bg-[#050505] min-h-screen pt-32 text-[#FAF9F6]">
      {/* Page Header */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 text-center max-w-3xl mx-auto mb-6">
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="inline-flex items-center gap-2 px-3 py-1 bg-[#D4AF37]/10 border border-[#D4AF37]/30 rounded-full mb-4"
        >
          <Sparkles className="w-3.5 h-3.5 text-[#D4AF37]" />
          <span className="text-[10px] tracking-[0.3em] uppercase text-[#D4AF37]">
            VISUAL LOOKBOOK
          </span>
        </motion.div>
        
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="font-serif text-4xl md:text-6xl font-normal tracking-tight mb-4"
        >
          Signature Gallery
        </motion.h1>
        <p className="text-sm tracking-widest uppercase text-[#FAF9F6]/60 font-sans font-light">
          Real Brides. Unretouched Skin. True HD Glamour.
        </p>
      </div>

      {/* Reusable Filterable Portfolio Showcase component */}
      <Portfolio />

      {/* Authentic Photo Disclaimer Section */}
      <section className="py-20 bg-[#050505] border-t border-[#FAF9F6]/5">
        <div className="max-w-7xl mx-auto px-6 md:px-12 text-center">
          <div className="max-w-2xl mx-auto space-y-6">
            <div className="w-12 h-12 rounded-full bg-[#D4AF37]/10 flex items-center justify-center mx-auto">
              <Camera className="w-5 h-5 text-[#D4AF37]" />
            </div>
            
            <h3 className="font-serif text-2xl font-light text-[#FAF9F6]">
              Real, Raw skin-textures in 4K resolution
            </h3>
            
            <p className="text-sm text-[#FAF9F6]/60 leading-relaxed font-sans font-light">
              We take pride in the absolute authenticity of our showcase. All images represent real brides captured under high-definition wedding cameras and studio flashes. What you see is precisely what you receive on your wedding day: a flawless, poreless, lightweight matte base with zero white-cast.
            </p>

            <div className="flex items-center justify-center gap-6 pt-4 text-[10px] tracking-widest uppercase text-[#D4AF37] font-semibold">
              <span className="flex items-center gap-1">
                <Eye className="w-4 h-4" /> NO EXTREME FILTERS
              </span>
              <span>•</span>
              <span className="flex items-center gap-1">
                <Camera className="w-4 h-4" /> FLASH PHOTOGRAPHY PROOF
              </span>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
