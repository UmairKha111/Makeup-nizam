import { useEffect } from 'react';
import { motion } from 'motion/react';
import { Sparkles, CalendarRange, Clock, Sparkle, HeartHandshake } from 'lucide-react';
import Services from '../components/Services';

export default function ServicesPage() {
  useEffect(() => {
    document.title = "Bridal Makeup Services | Makeover By Nizam";
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  const steps = [
    {
      num: "01",
      icon: <CalendarRange className="w-5 h-5 text-[#D4AF37]" />,
      title: "Skincare Consultation",
      desc: "Detailed virtual or in-person analysis of your skin texture, tone, outfit palette, and traditional wedding theme."
    },
    {
      num: "02",
      icon: <Sparkle className="w-5 h-5 text-[#D4AF37]" />,
      title: "Pre-wedding Skin Prep",
      desc: "Intensive luxury hydration masks, pore refining, and high-performance base primers tailored to lock moisture."
    },
    {
      num: "03",
      icon: <Clock className="w-5 h-5 text-[#D4AF37]" />,
      title: "Signature Application",
      desc: "Executing your chosen HD or Airbrush makeup styling, including customized eye designs and hand-tied mink lashes."
    },
    {
      num: "04",
      icon: <HeartHandshake className="w-5 h-5 text-[#D4AF37]" />,
      title: "Couture Hair &amp; Draping",
      desc: "Complete hair styling secured with fresh orchids or jasmine, and neat saree / lehenga pleating and jewelry setting."
    }
  ];

  return (
    <div className="bg-[#050505] min-h-screen pt-32 text-[#FAF9F6]">
      {/* Page Header */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 text-center max-w-3xl mx-auto mb-12">
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="inline-flex items-center gap-2 px-3 py-1 bg-[#D4AF37]/10 border border-[#D4AF37]/30 rounded-full mb-4"
        >
          <Sparkles className="w-3.5 h-3.5 text-[#D4AF37]" />
          <span className="text-[10px] tracking-[0.3em] uppercase text-[#D4AF37]">
            COUTURE PACKAGES
          </span>
        </motion.div>
        
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="font-serif text-4xl md:text-6xl font-normal tracking-tight mb-4"
        >
          Our Bridal Menu
        </motion.h1>
        <p className="text-sm tracking-widest uppercase text-[#FAF9F6]/60 font-sans font-light">
          Exquisite Makeup &amp; Styling Curated For Your Wedding Day
        </p>
      </div>

      {/* Render the reusable Services packages component */}
      <Services />

      {/* Dynamic Workflow Timeline */}
      <section className="py-24 bg-[#0a0a0a] border-t border-[#FAF9F6]/5">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-xs font-semibold tracking-[0.4em] uppercase text-[#D4AF37] block mb-3">
              THE WORKFLOW
            </span>
            <h2 className="font-serif text-3xl md:text-5xl font-normal tracking-tight">
              Our Bridal Beauty Process
            </h2>
            <div className="h-[1px] bg-[#D4AF37] w-20 mx-auto mt-6" />
          </div>

          {/* Timeline Process Steps */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <motion.div
                key={step.num}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.15 }}
                className="bg-[#050505] border border-[#FAF9F6]/5 p-8 relative flex flex-col justify-between group hover:border-[#D4AF37]/40 transition-all duration-300"
              >
                <div>
                  {/* Step index */}
                  <div className="flex items-center justify-between mb-6">
                    <span className="font-serif text-4xl text-[#D4AF37]/20 group-hover:text-[#D4AF37]/40 transition-colors">
                      {step.num}
                    </span>
                    <div className="w-10 h-10 rounded-full bg-[#D4AF37]/10 flex items-center justify-center">
                      {step.icon}
                    </div>
                  </div>

                  <h3 className="font-serif text-lg font-normal mb-3 text-[#FAF9F6] group-hover:text-[#D4AF37] transition-colors">
                    {step.title}
                  </h3>
                  <p className="text-xs text-[#FAF9F6]/60 leading-relaxed font-sans font-light">
                    {step.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </section>

    </div>
  );
}
