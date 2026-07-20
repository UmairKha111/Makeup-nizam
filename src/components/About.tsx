import { motion } from 'motion/react';
import { Check, Star, Award, Shield } from 'lucide-react';
import { siteConfig } from '../data/siteConfig';
import traditionalKeralaBride from '../assets/images/ownernizam.png';

export default function About() {
  const iconMap = [
    <Shield className="w-5 h-5 text-[#D4AF37]" />,
    <Star className="w-5 h-5 text-[#D4AF37]" />,
    <Award className="w-5 h-5 text-[#D4AF37]" />,
    <Check className="w-5 h-5 text-[#D4AF37]" />,
    <Check className="w-5 h-5 text-[#D4AF37]" />
  ];

  return (
    <section id="about" className="py-24 bg-[#0a0a0a] text-[#FAF9F6] relative overflow-hidden">
      {/* Decorative background subtle glow */}
      <div className="absolute top-1/4 left-0 w-96 h-96 bg-[#D4AF37]/5 rounded-full filter blur-[100px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-[#FAF9F6]/5 rounded-full filter blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          
          {/* Image Column */}
          <div className="lg:col-span-5 relative">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
              className="relative aspect-[3/4] w-full rounded-none overflow-hidden border border-[#D4AF37]/30"
            >
              <img
                src={traditionalKeralaBride}
                alt="Flawless Bridal Styling"
                className="w-full h-full object-cover object-center transform hover:scale-105 transition-transform duration-700"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-transparent to-transparent opacity-60" />
            </motion.div>

            {/* Float Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="absolute -bottom-6 -right-6 md:right-4 bg-[#050505] border border-[#D4AF37] p-6 text-center shadow-2xl max-w-[180px]"
            >
              <p className="font-serif text-3xl font-bold text-[#D4AF37]">100%</p>
              <p className="text-[10px] tracking-widest uppercase text-[#FAF9F6] mt-1 font-sans">
                Waterproof &amp; Sweatproof Guaranteed
              </p>
            </motion.div>
          </div>

          {/* Content Column */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            {/* Section Subheading */}
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-xs font-semibold tracking-[0.4em] uppercase text-[#D4AF37] mb-3"
            >
              MEET THE ARTIST
            </motion.p>

            {/* Section Main Heading */}
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="font-serif text-3xl md:text-5xl font-normal tracking-tight text-[#FAF9F6] mb-8"
            >
              Redefining Elegance, One Bride At A Time
            </motion.h2>

            {/* Narrative text */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-base text-[#FAF9F6]/80 font-light leading-relaxed mb-10 font-sans"
            >
              {siteConfig.aboutDetails}
            </motion.p>

            {/* Luxury Bullet Features Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {siteConfig.features.map((feature, idx) => (
                <motion.div
                  key={feature}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.3 + idx * 0.1 }}
                  className="flex items-center gap-4 p-4 bg-[#050505]/60 border border-[#FAF9F6]/5 hover:border-[#D4AF37]/30 transition-all duration-300"
                >
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-[#D4AF37]/10 flex items-center justify-center">
                    {iconMap[idx % iconMap.length]}
                  </div>
                  <span className="text-sm font-semibold tracking-wide text-[#FAF9F6]">
                    {feature}
                  </span>
                </motion.div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
