import { motion } from 'motion/react';
import { useNavigate } from 'react-router-dom';
import { GraduationCap, MapPin, ArrowRight } from 'lucide-react';
import { groomClassInfo } from '../data/groomClasses';
 
export default function GroomClasses() {
  const navigate = useNavigate();
 
  const handleViewClasses = () => {
    navigate('/groom-classes');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };
 
  return (
    <section className="py-24 bg-[#0a0a0a] text-[#FAF9F6] relative overflow-hidden border-t border-[#D4AF37]/10">
      {/* Ambient glow */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#D4AF37]/5 rounded-full filter blur-[120px] pointer-events-none" />
 
      <div className="max-w-4xl mx-auto px-6 md:px-12 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <p className="text-xs font-semibold tracking-[0.4em] uppercase text-[#D4AF37] mb-3 flex items-center justify-center gap-2">
            <GraduationCap className="w-4 h-4" />
            Now Enrolling — All Over India
          </p>
          <h2 className="font-serif text-3xl md:text-5xl font-normal tracking-tight mb-4">
            {groomClassInfo.title}
          </h2>
          <p className="text-sm md:text-base text-[#FAF9F6]/70 font-sans font-light leading-relaxed max-w-2xl mx-auto mb-6">
            {groomClassInfo.description}
          </p>
 
          <p className="flex items-center justify-center gap-2 text-xs text-[#FAF9F6]/60 font-sans mb-10">
            <MapPin className="w-3.5 h-3.5 text-[#D4AF37]" />
            {groomClassInfo.mode} · {groomClassInfo.duration} · {groomClassInfo.batchType}
          </p>
 
          <button
            onClick={handleViewClasses}
            className="inline-flex items-center gap-2 px-8 py-4 bg-[#D4AF37] text-[#050505] text-xs font-bold uppercase tracking-widest hover:bg-[#D4AF37]/90 transition-colors"
          >
            Know More
            <ArrowRight className="w-4 h-4" />
          </button>
        </motion.div>
      </div>
    </section>
  );
}
