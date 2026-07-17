import { motion } from 'motion/react';
import {
  GraduationCap,
  MapPin,
  Award,
  Calendar,
  CheckCircle2,
  MessageCircle,
} from 'lucide-react';
import {
  groomClassInfo,
  groomClassModules,
  groomClassHighlights,
  groomClassFaqs,
} from '../data/groomClasses';
import { generateWhatsAppLink } from '../data/siteConfig';
 
export default function GroomClassesPage() {
  const handleEnquire = () => {
    const text = `Hello Nizam, I'm interested in enrolling in the "${groomClassInfo.title}". Please share the next batch date and enrollment details.`;
    window.open(generateWhatsAppLink(text), '_blank');
  };
 
  return (
    <div className="bg-[#050505] text-[#FAF9F6]">
      {/* ══ HERO ══════════════════════════════════════════ */}
      <section className="py-28 relative overflow-hidden border-b border-[#D4AF37]/10">
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#D4AF37]/5 rounded-full filter blur-[120px] pointer-events-none" />
        <div className="max-w-5xl mx-auto px-6 md:px-12 text-center relative z-10">
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-xs font-semibold tracking-[0.4em] uppercase text-[#D4AF37] mb-4"
          >
            {groomClassInfo.tagline}
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="font-serif text-4xl md:text-6xl font-normal tracking-tight mb-6"
          >
            {groomClassInfo.title}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-sm md:text-base text-[#FAF9F6]/70 font-sans font-light leading-relaxed max-w-2xl mx-auto mb-10"
          >
            {groomClassInfo.description}
          </motion.p>
          <motion.button
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            onClick={handleEnquire}
            className="inline-flex items-center gap-2 px-8 py-4 bg-[#D4AF37] text-[#050505] text-xs font-bold uppercase tracking-widest hover:bg-[#D4AF37]/90 transition-colors"
          >
            <MessageCircle className="w-4 h-4" />
            Enquire on WhatsApp
          </motion.button>
        </div>
      </section>
 
      {/* ══ QUICK FACTS ═══════════════════════════════════ */}
      <section className="py-20 border-b border-[#D4AF37]/10">
        <div className="max-w-6xl mx-auto px-6 md:px-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { icon: MapPin, label: 'Mode', value: `${groomClassInfo.mode}` },
              { icon: Calendar, label: 'Duration', value: groomClassInfo.duration },
              {
                icon: GraduationCap,
                label: 'Fee',
                value: `₹${groomClassInfo.fee.toLocaleString('en-IN')}`,
              },
              {
                icon: Award,
                label: 'Certificate',
                value: groomClassInfo.certificate ? 'Included' : 'Not Included',
              },
            ].map((f, i) => (
              <motion.div
                key={f.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="bg-[#0a0a0a] border border-[#FAF9F6]/10 p-6 text-center hover:border-[#D4AF37]/40 transition-colors"
              >
                <f.icon className="w-6 h-6 text-[#D4AF37] mx-auto mb-3" />
                <span className="text-[10px] uppercase tracking-widest text-[#FAF9F6]/50 block mb-1">
                  {f.label}
                </span>
                <span className="text-sm font-serif text-[#FAF9F6]">{f.value}</span>
              </motion.div>
            ))}
          </div>
          <p className="text-center text-xs text-[#FAF9F6]/50 font-sans mt-6">
            {groomClassInfo.batchType} · {groomClassInfo.studioLocation}
          </p>
        </div>
      </section>
 
      {/* ══ CURRICULUM ════════════════════════════════════ */}
      <section className="py-24 border-b border-[#D4AF37]/10">
        <div className="max-w-5xl mx-auto px-6 md:px-12">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <p className="text-xs font-semibold tracking-[0.4em] uppercase text-[#D4AF37] mb-3">
              Curriculum
            </p>
            <h2 className="font-serif text-3xl md:text-4xl font-normal tracking-tight">
              What You'll Learn
            </h2>
            <div className="w-14 h-[1px] bg-[#D4AF37] mx-auto mt-6" />
          </div>
 
          <div className="space-y-4">
            {groomClassModules.map((mod, i) => (
              <motion.div
                key={mod.id}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.08 }}
                className="flex items-start gap-5 bg-[#0a0a0a] border border-[#FAF9F6]/10 p-6 hover:border-[#D4AF37]/30 transition-colors"
              >
                <span className="font-serif text-2xl text-[#D4AF37]/40 flex-shrink-0 w-10">
                  {String(mod.id).padStart(2, '0')}
                </span>
                <div>
                  <h3 className="font-serif text-lg text-[#FAF9F6] mb-1">{mod.title}</h3>
                  <p className="text-xs md:text-sm text-[#FAF9F6]/60 font-sans leading-relaxed">
                    {mod.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
 
      {/* ══ HIGHLIGHTS ════════════════════════════════════ */}
      <section className="py-24 border-b border-[#D4AF37]/10">
        <div className="max-w-5xl mx-auto px-6 md:px-12">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <p className="text-xs font-semibold tracking-[0.4em] uppercase text-[#D4AF37] mb-3">
              Why Join
            </p>
            <h2 className="font-serif text-3xl md:text-4xl font-normal tracking-tight">
              Course Highlights
            </h2>
            <div className="w-14 h-[1px] bg-[#D4AF37] mx-auto mt-6" />
          </div>
 
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {groomClassHighlights.map((h, i) => (
              <motion.div
                key={h}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="flex items-start gap-3 bg-[#0a0a0a] border border-[#FAF9F6]/10 p-5"
              >
                <CheckCircle2 className="w-5 h-5 text-[#D4AF37] flex-shrink-0 mt-0.5" />
                <span className="text-sm text-[#FAF9F6]/80 font-sans leading-relaxed">{h}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
 
      {/* ══ FAQ ═══════════════════════════════════════════ */}
      <section className="py-24 border-b border-[#D4AF37]/10">
        <div className="max-w-3xl mx-auto px-6 md:px-12">
          <div className="text-center mb-14">
            <p className="text-xs font-semibold tracking-[0.4em] uppercase text-[#D4AF37] mb-3">
              Questions
            </p>
            <h2 className="font-serif text-3xl md:text-4xl font-normal tracking-tight">
              Frequently Asked
            </h2>
            <div className="w-14 h-[1px] bg-[#D4AF37] mx-auto mt-6" />
          </div>
 
          <div className="space-y-4">
            {groomClassFaqs.map((faq, i) => (
              <motion.div
                key={faq.question}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="bg-[#0a0a0a] border border-[#FAF9F6]/10 p-6"
              >
                <h3 className="font-serif text-base text-[#D4AF37] mb-2">{faq.question}</h3>
                <p className="text-xs md:text-sm text-[#FAF9F6]/70 font-sans leading-relaxed">
                  {faq.answer}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
 
      {/* ══ FINAL CTA ═════════════════════════════════════ */}
      <section className="py-24">
        <div className="max-w-3xl mx-auto px-6 md:px-12 text-center">
          <h2 className="font-serif text-3xl md:text-4xl font-normal tracking-tight mb-4">
            Ready to Master Groom Grooming?
          </h2>
          <p className="text-sm text-[#FAF9F6]/60 font-sans mb-8">
            Seats are limited per batch — reach out to reserve your spot in the next intake.
          </p>
          <button
            onClick={handleEnquire}
            className="inline-flex items-center gap-2 px-8 py-4 bg-[#D4AF37] text-[#050505] text-xs font-bold uppercase tracking-widest hover:bg-[#D4AF37]/90 transition-colors"
          >
            <MessageCircle className="w-4 h-4" />
            Enquire on WhatsApp
          </button>
        </div>
      </section>
    </div>
  );
}
 