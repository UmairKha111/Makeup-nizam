import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Sparkles, HelpCircle, ChevronDown, ChevronUp } from 'lucide-react';
import Contact from '../components/Contact';

export default function ContactPage() {
  useEffect(() => {
    document.title = "Book Appointment | Makeover By Nizam";
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const faqs = [
    {
      q: "How far in advance should I book my bridal makeup?",
      a: "Due to high demand during peak wedding seasons in Kerala and Tamil Nadu, we highly recommend reserving your date at least 6 to 12 months in advance to guarantee Nizam's availability."
    },
    {
      q: "Do you travel to the wedding venue or home?",
      a: "Yes! We provide on-location services at your home, hotel suite, or wedding venue across Kerala and Tamil Nadu. Travel expenses are calculated based on the distance from our studio."
    },
    {
      q: "What is the difference between HD Makeup and Airbrush Makeup?",
      a: "HD Makeup uses custom manual blending techniques with high-definition pigments for a beautiful skin-like finish. Airbrush Makeup utilizes a specialized air compressor gun to spray an ultra-fine mist of cosmetic foundation, providing an incredibly light, transfer-proof, and exceptionally long-lasting matte complexion ideal for very humid weather."
    },
    {
      q: "Are hair styling and saree draping included in your package?",
      a: "Yes, both our Bride HD and Airbrush packages are fully comprehensive, including customized hair buns/braids, hair accessory placements, jewelry settings, saree draping or lehenga pleating."
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
            RESERVATIONS
          </span>
        </motion.div>
        
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="font-serif text-4xl md:text-6xl font-normal tracking-tight mb-4"
        >
          Start Your Journey
        </motion.h1>
        <p className="text-sm tracking-widest uppercase text-[#FAF9F6]/60 font-sans font-light">
          Connect directly with Nizam's booking desk to secure your luxury styling session.
        </p>
      </div>

      {/* Reusable Booking Form component */}
      <Contact />

      {/* Booking FAQ Accordion Section */}
      <section className="py-24 bg-[#0a0a0a] border-t border-[#FAF9F6]/5">
        <div className="max-w-4xl mx-auto px-6 md:px-12">
          
          <div className="text-center mb-16">
            <div className="w-12 h-12 rounded-full bg-[#D4AF37]/10 flex items-center justify-center mx-auto mb-4">
              <HelpCircle className="w-5 h-5 text-[#D4AF37]" />
            </div>
            <h2 className="font-serif text-3xl font-normal tracking-tight">Booking FAQ</h2>
            <p className="text-xs text-[#FAF9F6]/50 uppercase tracking-widest mt-1 font-semibold">Common Queries</p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, index) => {
              const isOpen = openFaq === index;
              return (
                <div
                  key={index}
                  className="bg-[#050505] border border-[#FAF9F6]/5 hover:border-[#D4AF37]/30 transition-all duration-300"
                >
                  <button
                    onClick={() => setOpenFaq(isOpen ? null : index)}
                    className="w-full text-left p-6 flex items-center justify-between text-[#FAF9F6] focus:outline-none"
                  >
                    <span className="font-serif text-base md:text-lg font-light leading-relaxed pr-6">
                      {faq.q}
                    </span>
                    {isOpen ? <ChevronUp className="w-5 h-5 text-[#D4AF37] flex-shrink-0" /> : <ChevronDown className="w-5 h-5 text-[#D4AF37] flex-shrink-0" />}
                  </button>

                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden"
                      >
                        <div className="px-6 pb-6 text-xs md:text-sm text-[#FAF9F6]/70 leading-relaxed font-sans font-light border-t border-[#FAF9F6]/5 pt-4">
                          {faq.a}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>

        </div>
      </section>

    </div>
  );
}
