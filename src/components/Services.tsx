import { motion } from 'motion/react';
import { Check, Info, Calendar, MessageSquare } from 'lucide-react';
import { services } from '../data/services';
import { siteConfig, generateWhatsAppLink } from '../data/siteConfig';
 
export default function Services() {
  const handleBookService = (serviceName: string) => {
    // Send the visitor to the website's Contact page to fill the booking form
    window.location.href = `/#/contact?service=${encodeURIComponent(serviceName)}`;
  };
 
  return (
    <section id="services" className="py-24 bg-[#050505] text-[#FAF9F6] relative overflow-hidden">
      {/* Background Ornaments */}
      <div className="absolute top-0 right-0 w-80 h-80 bg-[#D4AF37]/5 rounded-full filter blur-[80px]" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-[#D4AF37]/5 rounded-full filter blur-[80px]" />
 
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
            SIGNATURE SERVICES
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="font-serif text-3xl md:text-5xl font-normal tracking-tight"
          >
            Bridal &amp; Groom Transformations
          </motion.h2>
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: "80px" }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="h-[1px] bg-[#D4AF37] mx-auto mt-6"
          />
        </div>
 
        {/* Services Grid */}
        <div className="grid grid-cols-3 gap-2 md:gap-8 mb-20">
          {services.map((service, idx) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: idx * 0.15 }}
              className={`relative bg-[#0a0a0a] border ${
                service.isPopular ? 'border-[#D4AF37]' : 'border-[#FAF9F6]/10'
              } p-2 sm:p-5 md:p-8 flex flex-col justify-between group hover:border-[#D4AF37] transition-all duration-500`}
            >
              {service.isPopular && (
                <span className="absolute -top-2 md:-top-3 left-1/2 -translate-x-1/2 bg-[#D4AF37] text-[#050505] text-[6px] sm:text-[10px] uppercase tracking-widest font-bold px-1.5 py-0.5 md:px-4 md:py-1">
                  Popular
                </span>
              )}
 
              <div>
                {/* Title */}
                <h3 className="font-serif text-[10px] sm:text-lg md:text-2xl font-light text-[#FAF9F6] mb-1 md:mb-2 group-hover:text-[#D4AF37] transition-colors duration-300">
                  {service.name}
                </h3>
                
                {/* Price */}
                <div className="flex flex-col sm:flex-row items-baseline gap-0.5 sm:gap-1 my-2 sm:my-4 md:my-6">
                  <div className="flex items-baseline gap-0.5">
                    <span className="text-[9px] sm:text-sm font-sans text-[#D4AF37]">₹</span>
                    <span className="text-xs sm:text-2xl md:text-4xl font-serif font-normal text-[#D4AF37]">
                      {service.price.toLocaleString('en-IN')}
                    </span>
                  </div>
                  <span className="text-[6px] sm:text-xs text-[#FAF9F6]/50 font-sans">/ Session</span>
                </div>
 
                <p className="text-[8px] sm:text-xs md:text-sm text-[#FAF9F6]/75 font-sans font-light leading-tight sm:leading-relaxed mb-3 sm:mb-6 md:mb-8 line-clamp-2 md:line-clamp-none">
                  {service.description}
                </p>
 
                {/* Separator */}
                <div className="h-[1px] bg-[#FAF9F6]/10 w-full mb-3 sm:mb-6 md:mb-8" />
 
                {/* Includes list - hidden on small mobile, visible on tablet & desktop */}
                <ul className="hidden sm:block space-y-2 md:space-y-4 mb-6 md:mb-10">
                  {service.includes.slice(0, 5).map((incl) => (
                    <li key={incl} className="flex items-start gap-2 md:gap-3">
                      <div className="flex-shrink-0 w-3.5 h-3.5 md:w-5 md:h-5 rounded-full bg-[#D4AF37]/10 flex items-center justify-center mt-0.5">
                        <Check className="w-2.5 h-2.5 text-[#D4AF37]" />
                      </div>
                      <span className="text-[10px] md:text-sm text-[#FAF9F6]/85 font-sans leading-tight">
                        {incl}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
 
              {/* Book Button */}
              <button
                onClick={() => handleBookService(service.name)}
                className={`w-full py-1.5 sm:py-3 md:py-4 text-[7px] sm:text-xs uppercase tracking-tighter sm:tracking-widest font-bold transition-all duration-300 flex items-center justify-center gap-1 md:gap-2 ${
                  service.isPopular
                    ? 'bg-[#D4AF37] hover:bg-[#D4AF37]/90 text-[#050505]'
                    : 'bg-transparent border border-[#FAF9F6]/20 hover:border-[#D4AF37] text-[#FAF9F6] hover:text-[#D4AF37]'
                }`}
              >
                <Calendar className="w-2 h-2 sm:w-4 sm:h-4 hidden xs:block" />
                <span>Book</span>
              </button>
            </motion.div>
          ))}
        </div>
 
        {/* Premium Information Banner / Guidelines */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="bg-[#0a0a0a] border border-[#D4AF37]/20 p-8 md:p-12"
        >
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Title */}
            <div className="lg:col-span-4 flex items-start gap-4">
              <div className="w-12 h-12 bg-[#D4AF37]/10 flex items-center justify-center flex-shrink-0">
                <Info className="w-6 h-6 text-[#D4AF37]" />
              </div>
              <div>
                <h4 className="font-serif text-xl tracking-tight text-[#FAF9F6]">
                  Booking Terms &amp; Conditions
                </h4>
                <p className="text-xs text-[#D4AF37] uppercase tracking-widest font-semibold mt-1">
                  Important Guidelines
                </p>
              </div>
            </div>
 
            {/* Travel / Exclusions info details */}
            <div className="lg:col-span-8 grid grid-cols-1 md:grid-cols-3 gap-6 md:border-l md:border-[#FAF9F6]/10 md:pl-8">
              
              <div>
                <span className="text-xs font-semibold tracking-widest uppercase text-[#D4AF37] block mb-2">
                  Venue Travel
                </span>
                <p className="text-xs text-[#FAF9F6]/70 leading-relaxed font-sans">
                  {siteConfig.travelInfo}
                </p>
              </div>
 
              <div>
                <span className="text-xs font-semibold tracking-widest uppercase text-red-400 block mb-2">
                  Not Included
                </span>
                <ul className="text-xs text-[#FAF9F6]/70 space-y-1 font-sans">
                  {siteConfig.notIncludedInfo.map((notIncl) => (
                    <li key={notIncl}>• {notIncl}</li>
                  ))}
                </ul>
              </div>
 
              <div>
                <span className="text-xs font-semibold tracking-widest uppercase text-[#D4AF37] block mb-2">
                  Service Availability
                </span>
                <p className="text-xs text-[#FAF9F6]/70 leading-relaxed font-sans">
                  {siteConfig.availableInfo}
                </p>
              </div>
 
            </div>
 
          </div>
        </motion.div>
 
      </div>
    </section>
  );
}
 
