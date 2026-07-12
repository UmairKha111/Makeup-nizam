import { motion } from 'motion/react';
import { Star, Quote, MessageCircle } from 'lucide-react';
import { testimonials } from '../data/testimonials';

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-24 bg-[#0a0a0a] text-[#FAF9F6] relative overflow-hidden">
      {/* Background gradients */}
      <div className="absolute top-0 left-0 w-80 h-80 bg-[#D4AF37]/5 rounded-full filter blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <p className="text-xs font-semibold tracking-[0.4em] uppercase text-[#D4AF37] mb-3">
            CLIENT LOVE
          </p>
          <h2 className="font-serif text-3xl md:text-5xl font-normal tracking-tight">
            Loved By Brides
          </h2>
          <div className="h-[1px] bg-[#D4AF37] w-20 mx-auto mt-6" />
        </div>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((test, idx) => (
            <motion.div
              key={test.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: idx * 0.15 }}
              className="bg-[#050505] border border-[#FAF9F6]/5 hover:border-[#D4AF37]/30 p-8 flex flex-col justify-between relative group transition-all duration-500"
            >
              {/* Quote Mark ornament */}
              <div className="absolute top-6 right-8 text-[#D4AF37]/10 group-hover:text-[#D4AF37]/20 transition-colors pointer-events-none">
                <Quote className="w-12 h-12" />
              </div>

              <div>
                {/* Stars */}
                <div className="flex items-center gap-1 mb-6">
                  {[...Array(test.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-[#D4AF37] text-[#D4AF37]" />
                  ))}
                </div>

                {/* Review Message */}
                <p className="text-sm text-[#FAF9F6]/85 font-sans font-light leading-relaxed mb-8 italic">
                  "{test.review}"
                </p>
              </div>

              {/* Client Profile Details */}
              <div className="border-t border-[#FAF9F6]/10 pt-6 flex items-start justify-between">
                <div>
                  <h4 className="font-serif text-lg font-normal text-[#FAF9F6]">
                    {test.name}
                  </h4>
                  <p className="text-[10px] tracking-wider uppercase text-[#D4AF37] mt-1 font-semibold">
                    {test.weddingType}
                  </p>
                  <p className="text-[9px] text-[#FAF9F6]/50 uppercase tracking-widest mt-0.5">
                    {test.location}
                  </p>
                </div>
                
                {/* Little heart or wedding tag indicator */}
                <div className="w-8 h-8 rounded-full bg-[#FAF9F6]/5 flex items-center justify-center">
                  <MessageCircle className="w-3.5 h-3.5 text-[#D4AF37]/60" />
                </div>
              </div>

            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
