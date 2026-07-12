import { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { Maximize2, X, MessageSquare, ArrowRight } from 'lucide-react';
import { galleryItems } from '../data/gallery';
import { generateWhatsAppLink } from '../data/siteConfig';

type CategoryFilter = 'All' | 'Bridal Makeup' | 'Groom Makeup' | 'HD Makeup' | 'Airbrush Makeup' | 'Hair Styling' | 'Wedding Looks';

interface PortfolioProps {
  isHomePage?: boolean;
}

export default function Portfolio({ isHomePage = false }: PortfolioProps) {
  const [selectedCategory, setSelectedCategory] = useState<CategoryFilter>('All');
  const [activeLightboxImage, setActiveLightboxImage] = useState<typeof galleryItems[0] | null>(null);

  const categories: CategoryFilter[] = [
    'All',
    'Bridal Makeup',
    'Groom Makeup',
    'HD Makeup',
    'Airbrush Makeup',
    'Hair Styling',
    'Wedding Looks'
  ];

  const filteredItems = selectedCategory === 'All'
    ? galleryItems
    : galleryItems.filter(item => item.category === selectedCategory);

  const displayedItems = isHomePage ? galleryItems.slice(0, 4) : filteredItems;

  const handleInquireAboutLook = (title: string) => {
    const text = `Hello Nizam, I saw the beautiful look "${title}" in your portfolio and would like to know more about booking a similar style.`;
    window.open(generateWhatsAppLink(text), '_blank');
  };

  return (
    <section id="portfolio" className="py-24 bg-[#0a0a0a] text-[#FAF9F6] relative overflow-hidden">
      
      {/* Subtle details */}
      <div className="absolute top-1/2 left-0 w-80 h-80 bg-[#D4AF37]/5 rounded-full filter blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <p className="text-xs font-semibold tracking-[0.4em] uppercase text-[#D4AF37] mb-3">
            PORTFOLIO SHOWCASE
          </p>
          <h2 className="font-serif text-3xl md:text-5xl font-normal tracking-tight">
            Exquisite Transformations
          </h2>
          <div className="h-[1px] bg-[#D4AF37] w-20 mx-auto mt-6" />
        </div>

        {/* Filter Bar - only on full gallery page, not on home page preview */}
        {!isHomePage && (
          <div className="flex flex-wrap items-center justify-center gap-3 md:gap-4 mb-16">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-5 py-2.5 text-xs uppercase tracking-widest font-sans transition-all duration-300 border ${
                  selectedCategory === category
                    ? 'bg-[#D4AF37] border-[#D4AF37] text-[#050505] font-bold shadow-lg shadow-[#D4AF37]/10'
                    : 'bg-[#050505] border-[#FAF9F6]/10 hover:border-[#D4AF37]/50 text-[#FAF9F6]/80 hover:text-[#FAF9F6]'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        )}

        {/* Grid Showcase */}
        <motion.div
          layout
          className="grid grid-cols-2 lg:grid-cols-4 gap-3 md:gap-6"
        >
          <AnimatePresence mode="popLayout">
            {displayedItems.map((item) => (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.5 }}
                className="group relative aspect-[3/4] bg-[#050505] border border-[#FAF9F6]/5 overflow-hidden cursor-pointer"
                onClick={() => setActiveLightboxImage(item)}
              >
                {/* Photo */}
                <img
                  src={item.imageUrl}
                  alt={item.title}
                  className="w-full h-full object-cover object-center transform group-hover:scale-105 transition-transform duration-700"
                  referrerPolicy="no-referrer"
                />

                {/* Glassy hover overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/45 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-6">
                  <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                    <span className="text-[10px] uppercase tracking-widest text-[#D4AF37] font-semibold">
                      {item.category}
                    </span>
                    <h3 className="font-serif text-lg text-[#FAF9F6] mt-1 mb-2 font-normal">
                      {item.title}
                    </h3>
                    <p className="text-xs text-[#FAF9F6]/70 leading-relaxed font-sans font-light line-clamp-2">
                      {item.description}
                    </p>
                    <div className="mt-4 flex items-center justify-between">
                      <span className="flex items-center gap-1 text-[10px] text-[#D4AF37] uppercase tracking-widest font-bold">
                        <Maximize2 className="w-3.5 h-3.5" />
                        View Fullscreen
                      </span>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* "See More Portfolio" / "View Portfolio" CTA Button on Home Page */}
        {isHomePage && (
          <div className="text-center mt-12 md:mt-16">
            <Link
              to="/gallery"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-transparent border border-[#D4AF37] text-[#D4AF37] hover:bg-[#D4AF37] hover:text-[#050505] text-xs uppercase tracking-widest font-bold transition-all duration-300 shadow-lg shadow-[#D4AF37]/5 hover:shadow-[#D4AF37]/20 group"
            >
              <span>See More Portfolio</span>
              <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        )}

      </div>

      {/* Lightbox Overlay Modal */}
      <AnimatePresence>
        {activeLightboxImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/95 backdrop-blur-md"
            onClick={() => setActiveLightboxImage(null)}
          >
            <motion.div
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              transition={{ type: 'spring', damping: 25, stiffness: 180 }}
              className="relative max-w-4xl w-full bg-[#050505] border border-[#D4AF37]/30 flex flex-col md:flex-row overflow-hidden shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button
                onClick={() => setActiveLightboxImage(null)}
                className="absolute top-4 right-4 z-10 w-10 h-10 bg-black/50 border border-white/10 text-white hover:text-[#D4AF37] hover:border-[#D4AF37] flex items-center justify-center transition-colors focus:outline-none"
              >
                <X className="w-5 h-5" />
              </button>

              {/* Photo Area */}
              <div className="md:w-3/5 aspect-[3/4] md:aspect-auto md:h-[600px] overflow-hidden bg-black">
                <img
                  src={activeLightboxImage.imageUrl}
                  alt={activeLightboxImage.title}
                  className="w-full h-full object-cover object-center"
                  referrerPolicy="no-referrer"
                />
              </div>

              {/* Content / Inquiry Details */}
              <div className="md:w-2/5 p-8 md:p-10 flex flex-col justify-between bg-[#0a0a0a]">
                <div>
                  <span className="text-[10px] tracking-[0.3em] uppercase text-[#D4AF37] font-semibold block mb-2">
                    {activeLightboxImage.category}
                  </span>
                  
                  <h3 className="font-serif text-2xl md:text-3xl text-[#FAF9F6] font-normal tracking-tight mb-4 leading-snug">
                    {activeLightboxImage.title}
                  </h3>

                  <div className="h-[1px] bg-[#D4AF37]/20 w-12 mb-6" />

                  <p className="text-sm text-[#FAF9F6]/80 font-sans font-light leading-relaxed">
                    {activeLightboxImage.description}
                  </p>

                  <div className="mt-8 bg-[#050505] border border-[#FAF9F6]/5 p-4">
                    <p className="text-xs text-[#FAF9F6]/60 font-sans leading-relaxed">
                      ✓ Premium sweat-proof application<br />
                      ✓ Customizable hairstyling options<br />
                      ✓ Handcrafted lash extensions included
                    </p>
                  </div>
                </div>

                {/* Inquiry Actions */}
                <button
                  onClick={() => handleInquireAboutLook(activeLightboxImage.title)}
                  className="w-full py-4 mt-8 bg-[#D4AF37] hover:bg-[#D4AF37]/90 text-[#050505] text-xs uppercase tracking-widest font-bold flex items-center justify-center gap-2 transition-all"
                >
                  <MessageSquare className="w-4 h-4" />
                  Inquire This Look
                </button>
              </div>

            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

    </section>
  );
}
