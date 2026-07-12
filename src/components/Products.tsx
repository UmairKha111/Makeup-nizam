import { motion } from 'motion/react';
import { Sparkles, CheckCircle2 } from 'lucide-react';
import { productBrands } from '../data/testimonials';

export default function Products() {
  return (
    <section id="products" className="py-24 bg-[#050505] text-[#FAF9F6] relative overflow-hidden">
      {/* Decorative details */}
      <div className="absolute top-1/2 right-0 w-80 h-80 bg-[#D4AF37]/5 rounded-full filter blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-xs font-semibold tracking-[0.4em] uppercase text-[#D4AF37] mb-3"
          >
            FLAWLESS ASSURANCE
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="font-serif text-3xl md:text-5xl font-normal tracking-tight"
          >
            Professional Products Used
          </motion.h2>
          <p className="text-sm text-[#FAF9F6]/60 font-sans mt-4 max-w-xl mx-auto font-light leading-relaxed">
            We exclusively utilize high-end, dermatologist-tested celebrity cosmetics to secure a sweatproof, lightweight finish that stands perfect in high-resolution photography.
          </p>
          <div className="h-[1px] bg-[#D4AF37] w-20 mx-auto mt-6" />
        </div>

        {/* Brands Showcase Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {productBrands.map((brand, idx) => (
            <motion.div
              key={brand.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: idx * 0.1 }}
              className="bg-[#0a0a0a] border border-[#FAF9F6]/5 hover:border-[#D4AF37]/40 p-8 flex flex-col justify-between group transition-all duration-300"
            >
              <div>
                {/* Brand title display */}
                <div className="flex items-center justify-between mb-4">
                  <span className="font-serif text-xl tracking-[0.15em] text-[#FAF9F6] font-semibold group-hover:text-[#D4AF37] transition-colors duration-300">
                    {brand.name}
                  </span>
                  <Sparkles className="w-4 h-4 text-[#D4AF37]/30 group-hover:text-[#D4AF37] transition-colors" />
                </div>
                
                {/* Brand explanation */}
                <p className="text-xs text-[#FAF9F6]/70 leading-relaxed font-sans font-light">
                  {brand.description}
                </p>
              </div>

              {/* Verified Badge */}
              <div className="mt-8 flex items-center gap-2 border-t border-[#FAF9F6]/5 pt-4">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#D4AF37]" />
                <span className="text-[10px] tracking-widest uppercase text-[#FAF9F6]/50">
                  Certified Genuine
                </span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Highlight Statement */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.5 }}
          className="mt-16 text-center border-t border-[#FAF9F6]/10 pt-10"
        >
          <p className="font-serif text-lg text-[#D4AF37] italic font-light">
            "No cheap formulations. No duplicate brands. Only pure global luxury cosmetics."
          </p>
        </motion.div>

      </div>
    </section>
  );
}
