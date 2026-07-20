import { useState, ChangeEvent, FormEvent } from 'react';
import { motion } from 'motion/react';
import { MessageSquare, MapPin, Phone, Instagram, Clock, Send } from 'lucide-react';
import { siteConfig, generateWhatsAppLink } from '../data/siteConfig';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    date: '',
    venue: '',
    service: 'bride-hd-makeup',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

 const servicesMap: { [key: string]: string } = {
  'bridal-hd-makeup': 'Bridal HD Makeup (₹18,000)',
  'bridal-airbrush-makeup': 'Bridal Airbrush Makeup (₹25,000)',
  'bridal-signature-makeup': 'Bridal Signature Makeup (₹30,000)',
  'groom-hd-makeup': 'Groom HD Makeup (₹13,000)',
  'groom-airbrush-makeup': 'Groom Airbrush Makeup (₹18,000)',
  'groom-signature-makeup': 'Groom Signature Makeup (₹22,000)',
};

  const handleInputChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    const serviceName = servicesMap[formData.service] || formData.service;
    
    // Construct premium WhatsApp structured message
    const formattedMessage = 
`✨ *NEW BRIDAL MAKEUP INQUIRY* ✨
-----------------------------------------
*Client Name:* ${formData.name}
*Contact No:* ${formData.phone}
*Wedding Date:* ${formData.date}
*Wedding Venue:* ${formData.venue}
*Package Selected:* ${serviceName}

*Client Note:* 
${formData.message || 'Hi Nizam, I would like to book my wedding styling session with you.'}
-----------------------------------------
_Sent via Makeover By Nizam Website_`;

    setTimeout(() => {
      window.open(generateWhatsAppLink(formattedMessage), '_blank');
      setIsSubmitting(false);
    }, 500);
  };

  return (
    <section id="contact" className="py-24 bg-[#050505] text-[#FAF9F6] relative overflow-hidden">
      {/* Decorative Blur */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#D4AF37]/5 rounded-full filter blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <p className="text-xs font-semibold tracking-[0.4em] uppercase text-[#D4AF37] mb-3">
            RESERVE YOUR DATE
          </p>
          <h2 className="font-serif text-3xl md:text-5xl font-normal tracking-tight">
            Book Your Dream Wedding Look
          </h2>
          <div className="h-[1px] bg-[#D4AF37] w-20 mx-auto mt-6" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          
          {/* Brand Info Panel */}
          <div className="lg:col-span-5 space-y-8">
            <div className="bg-[#0a0a0a] border border-[#FAF9F6]/5 p-8 md:p-10 space-y-8">
              <h3 className="font-serif text-2xl font-light text-[#FAF9F6]">
                Studio Details
              </h3>
              <p className="text-sm text-[#FAF9F6]/70 leading-relaxed font-sans font-light">
                Secure your booking early to guarantee Nizam's exclusive presence at your wedding venue. Now accepting bookings for the 2026 and 2027 wedding seasons.
              </p>

              <div className="h-[1px] bg-[#FAF9F6]/10 w-full" />

              {/* Info Items */}
              <div className="space-y-6">
                
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-[#D4AF37]/10 flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-4 h-4 text-[#D4AF37]" />
                  </div>
                  <div>
                    <h4 className="text-xs uppercase tracking-widest text-[#FAF9F6]/50">Coverage Area</h4>
                    <p className="text-sm text-[#FAF9F6] mt-1 font-semibold">{siteConfig.serviceArea}</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-[#D4AF37]/10 flex items-center justify-center flex-shrink-0">
                    <Phone className="w-4 h-4 text-[#D4AF37]" />
                  </div>
                  <div>
                    <h4 className="text-xs uppercase tracking-widest text-[#FAF9F6]/50">Direct Contact</h4>
                    <a href={`tel:${siteConfig.contact.phone}`} className="text-sm text-[#FAF9F6] hover:text-[#D4AF37] transition-colors mt-1 font-semibold block">
                      {siteConfig.contact.phoneFormatted}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-[#D4AF37]/10 flex items-center justify-center flex-shrink-0">
                    <Instagram className="w-4 h-4 text-[#D4AF37]" />
                  </div>
                  <div>
                    <h4 className="text-xs uppercase tracking-widest text-[#FAF9F6]/50">Official Instagram</h4>
                    <a
                      href={siteConfig.instagramUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="text-sm text-[#FAF9F6] hover:text-[#D4AF37] transition-colors mt-1 font-semibold block"
                    >
                      {siteConfig.instagram}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-[#D4AF37]/10 flex items-center justify-center flex-shrink-0">
                    <Clock className="w-4 h-4 text-[#D4AF37]" />
                  </div>
                  <div>
                    <h4 className="text-xs uppercase tracking-widest text-[#FAF9F6]/50">Response Time</h4>
                    <p className="text-sm text-[#FAF9F6] mt-1 font-semibold">Under 1 Hour (On WhatsApp)</p>
                  </div>
                </div>

              </div>

            </div>
          </div>

          {/* Interactive Form Panel */}
          <div className="lg:col-span-7">
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
              className="bg-[#0a0a0a] border border-[#D4AF37]/20 p-8 md:p-10"
            >
              <h3 className="font-serif text-2xl font-light mb-8 text-[#FAF9F6]">
                Bridal Inquiry Form
              </h3>

              <form onSubmit={handleSubmit} className="space-y-6">
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Name */}
                  <div className="flex flex-col">
                    <label htmlFor="name" className="text-xs uppercase tracking-widest text-[#FAF9F6]/60 mb-2 font-semibold">
                      Your Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      placeholder="e.g., Anjali Menon"
                      value={formData.name}
                      onChange={handleInputChange}
                      className="bg-[#050505] border border-[#FAF9F6]/10 focus:border-[#D4AF37] text-sm text-[#FAF9F6] px-4 py-3 outline-none transition-colors"
                    />
                  </div>

                  {/* Phone */}
                  <div className="flex flex-col">
                    <label htmlFor="phone" className="text-xs uppercase tracking-widest text-[#FAF9F6]/60 mb-2 font-semibold">
                      Contact Number *
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      required
                      placeholder="e.g., 9074604113"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="bg-[#050505] border border-[#FAF9F6]/10 focus:border-[#D4AF37] text-sm text-[#FAF9F6] px-4 py-3 outline-none transition-colors"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Wedding Date */}
                  <div className="flex flex-col">
                    <label htmlFor="date" className="text-xs uppercase tracking-widest text-[#FAF9F6]/60 mb-2 font-semibold">
                      Wedding / Event Date *
                    </label>
                    <input
                      type="date"
                      id="date"
                      name="date"
                      required
                      value={formData.date}
                      onChange={handleInputChange}
                      className="bg-[#050505] border border-[#FAF9F6]/10 focus:border-[#D4AF37] text-sm text-[#FAF9F6] px-4 py-3 outline-none transition-colors"
                    />
                  </div>

                  {/* Venue Location */}
                  <div className="flex flex-col">
                    <label htmlFor="venue" className="text-xs uppercase tracking-widest text-[#FAF9F6]/60 mb-2 font-semibold">
                      Venue Location / City *
                    </label>
                    <input
                      type="text"
                      id="venue"
                      name="venue"
                      required
                      placeholder="e.g., Kochi, Kerala"
                      value={formData.venue}
                      onChange={handleInputChange}
                      className="bg-[#050505] border border-[#FAF9F6]/10 focus:border-[#D4AF37] text-sm text-[#FAF9F6] px-4 py-3 outline-none transition-colors"
                    />
                  </div>
                </div>

                {/* Desired Package */}
                <div className="flex flex-col">
                  <label htmlFor="service" className="text-xs uppercase tracking-widest text-[#FAF9F6]/60 mb-2 font-semibold">
                    Desired Package *
                  </label>
               <select
  id="service"
  name="service"
  required
  value={formData.service}
  onChange={handleInputChange}
  className="bg-[#050505] border border-[#FAF9F6]/10 focus:border-[#D4AF37] text-sm text-[#FAF9F6] px-4 py-3 outline-none transition-colors"
>
  <option value="bridal-hd-makeup">
    Bridal HD Makeup (₹18,000)
  </option>

  <option value="bridal-airbrush-makeup">
    Bridal Airbrush Makeup (₹25,000)
  </option>

  <option value="bridal-signature-makeup">
    Bridal Signature Makeup (₹30,000)
  </option>

  <option value="groom-hd-makeup">
    Groom HD Makeup (₹13,000)
  </option>

  <option value="groom-airbrush-makeup">
    Groom Airbrush Makeup (₹18,000)
  </option>

  <option value="groom-signature-makeup">
    Groom Signature Makeup (₹22,000)
  </option>

  <option value="discuss-on-whatsapp">
    Something other – Discuss on WhatsApp
  </option>
</select>
                </div>

                {/* Message */}
                <div className="flex flex-col">
                  <label htmlFor="message" className="text-xs uppercase tracking-widest text-[#FAF9F6]/60 mb-2 font-semibold">
                    Personalized Message or Questions
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    placeholder="Tell us about your bridal look preference, timeline, or special requirements..."
                    value={formData.message}
                    onChange={handleInputChange}
                    className="bg-[#050505] border border-[#FAF9F6]/10 focus:border-[#D4AF37] text-sm text-[#FAF9F6] px-4 py-3 outline-none transition-colors resize-none"
                  />
                </div>

                {/* Submit button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-[#D4AF37] hover:bg-[#D4AF37]/90 text-[#050505] py-4 text-xs uppercase tracking-widest font-bold transition-all duration-300 flex items-center justify-center gap-2"
                >
                  <Send className="w-4 h-4 animate-pulse" />
                  {isSubmitting ? 'Structuring Message...' : 'Send WhatsApp Inquiry'}
                </button>

                <p className="text-[10px] text-center text-[#FAF9F6]/40 mt-4 leading-relaxed font-sans font-light">
                  * Clicking this button will format your booking details and open WhatsApp to send your inquiry directly to Nizam.
                </p>

              </form>
            </motion.div>
          </div>

        </div>

      </div>
    </section>
  );
}
