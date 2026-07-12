import { useEffect } from 'react';
import { motion } from 'motion/react';
import { Sparkles, Star, ShieldCheck, Heart, Award, CheckCircle } from 'lucide-react';
import { siteConfig } from '../data/siteConfig';

export default function AboutPage() {
  useEffect(() => {
    document.title = "About Nizam | Premium Luxury Makeup Artist";
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  const achievements = [
    {
      icon: <Award className="w-6 h-6 text-[#D4AF37]" />,
      title: "Celebrity Trained",
      desc: "Trained under top international and celebrity artists in advanced makeup techniques."
    },
    {
      icon: <ShieldCheck className="w-6 h-6 text-[#D4AF37]" />,
      title: "100% Sweatproof Guarantee",
      desc: "Flawless matte and dewy formulations perfected to endure highly humid tropical environments of Kerala & Tamil Nadu."
    },
    {
      icon: <Heart className="w-6 h-6 text-[#D4AF37]" />,
      title: "500+ Bridal Makeovers",
      desc: "Successfully created personalized bridal transformations for diverse South Indian weddings."
    }
  ];

  return (
    <div className="bg-[#050505] min-h-screen pt-32 text-[#FAF9F6] pb-24">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        {/* Editorial Title Block */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-3 py-1 bg-[#D4AF37]/10 border border-[#D4AF37]/30 rounded-full mb-4"
          >
            <Sparkles className="w-3.5 h-3.5 text-[#D4AF37]" />
            <span className="text-[10px] tracking-[0.3em] uppercase text-[#D4AF37]">
              OUR GOLD STANDARD
            </span>
          </motion.div>
          
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="font-serif text-4xl md:text-6xl font-normal tracking-tight mb-6"
          >
            Meet Nizam
          </motion.h1>
          <p className="text-sm tracking-widest uppercase text-[#D4AF37] font-semibold">
            The Visionary Behind Makeover By Nizam
          </p>
          <div className="h-[1px] bg-[#D4AF37] w-20 mx-auto mt-6" />
        </div>

        {/* Narrative Split */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center mb-24">
          
          {/* Photo Column */}
          <div className="lg:col-span-5 relative">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1 }}
              className="aspect-[3/4] border border-[#D4AF37]/20 relative overflow-hidden"
            >
              <img
                src="/src/assets/images/traditional_kerala_bride_1783751484791.jpg"
                alt="Kerala traditional wedding look"
                className="w-full h-full object-cover object-center"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#050505]/80 to-transparent" />
            </motion.div>
          </div>

          {/* Detailed Biography Text Column */}
          <div className="lg:col-span-7 space-y-8 font-sans font-light">
            <h2 className="font-serif text-3xl md:text-4xl text-[#D4AF37] font-normal leading-tight">
              An artist dedicated to translating your inner beauty into high-definition perfection.
            </h2>
            
            <p className="text-base text-[#FAF9F6]/85 leading-relaxed">
              Based in the heart of South India, Makeover By Nizam was founded on a simple core principle: every wedding represents a historic highlight of a client's life. We believe in providing premium, uncompromised skincare preparation, and executing seamless makeup blends that look entirely skin-like, luminous, and refined.
            </p>

            <p className="text-base text-[#FAF9F6]/85 leading-relaxed">
              Unlike cookie-cutter wedding styling, Nizam meticulously analyzes individual bone structures, dress fabrics, lighting setups, and jewelry volumes before sketching a custom beauty blueprint. Our special high-end waterproof base sealants ensure that humid weather, high temperatures, tears, and long events do not affect your exquisite appearance.
            </p>

            <div className="pt-6 grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="flex items-center gap-3">
                <CheckCircle className="w-5 h-5 text-[#D4AF37] flex-shrink-0" />
                <span className="text-sm font-semibold">Dermatologist Safe bases</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle className="w-5 h-5 text-[#D4AF37] flex-shrink-0" />
                <span className="text-sm font-semibold">Elite Global Cosmetic brands</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle className="w-5 h-5 text-[#D4AF37] flex-shrink-0" />
                <span className="text-sm font-semibold">Premium Mink Eyelashes</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle className="w-5 h-5 text-[#D4AF37] flex-shrink-0" />
                <span className="text-sm font-semibold">Flawless Saree Draping</span>
              </div>
            </div>
          </div>

        </div>

        {/* Brand achievements block */}
        <div className="border-t border-[#FAF9F6]/10 pt-20 mb-20">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {achievements.map((item, idx) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.15 }}
                className="bg-[#0a0a0a] border border-[#FAF9F6]/5 p-8 flex flex-col items-center text-center space-y-4"
              >
                <div className="w-14 h-14 rounded-full bg-[#D4AF37]/10 flex items-center justify-center">
                  {item.icon}
                </div>
                <h3 className="font-serif text-xl font-normal text-[#FAF9F6]">{item.title}</h3>
                <p className="text-xs text-[#FAF9F6]/60 leading-relaxed font-sans">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}
