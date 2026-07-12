import { motion } from 'motion/react';
import { Instagram, Youtube, ExternalLink, Play, Heart, Eye } from 'lucide-react';
import { siteConfig } from '../data/siteConfig';
 
// ── Highlight categories (mirrors Instagram story highlights) ──
const IG_HIGHLIGHTS = [
  { emoji: '👰', label: 'Bridal' },
  { emoji: '✨', label: 'Glass Glow' },
  { emoji: '📸', label: 'Photo Shoots' },
  { emoji: '💍', label: 'Engagement' },
  { emoji: '🎬', label: 'HD Looks' },
  { emoji: '✈️', label: 'Destination' },
];
 
// ── Instagram post tiles ──
// Replace the `image` URL for each post with your real photo link.
const IG_POSTS = [
  { image: 'https://i.ibb.co/N6tY9gxN/image.png', likes: '1.2k', views: '8.4k', label: 'Bridal HD Look' },
  { image: 'https://i.ibb.co/TqkbPm16/image.png', likes: '980',  views: '6.1k', label: 'Glass Glow' },
  { image: 'https://i.ibb.co/qLHYgvqh/image.png', likes: '2.1k', views: '11k',  label: 'Reception Glam' },
  { image: 'https://i.ibb.co/spcGs6gB/image.png', likes: '760',  views: '5.2k', label: 'Airbrush Look' },
  { image: 'https://i.ibb.co/PZP0Lh5T/image.png', likes: '1.5k', views: '9.7k', label: 'Photo Shoot' },
  { image: 'https://i.ibb.co/2XMzQMZ/image.png', likes: '890',  views: '6.8k', label: 'Engagement' },
];
 
// ── YouTube videos ──────────────────────────────────────────
const YT_VIDEOS = [
  { gradient: 'linear-gradient(135deg,#1A0000,#5A0000,#D4AF37)', title: 'Full Bridal Transformation', duration: '12:34', views: '24K' },
  { gradient: 'linear-gradient(135deg,#0A0800,#3A2A00,#D4AF37)', title: 'Glass Glow Makeup Tutorial', duration: '08:17', views: '18K' },
  { gradient: 'linear-gradient(135deg,#000A1A,#00204A,#D4AF37)', title: 'HD Airbrush Full Look', duration: '15:02', views: '31K' },
];
 
export default function SocialSection() {
  return (
    <>
      {/* ══ INSTAGRAM SECTION ══════════════════════════════════ */}
      <section id="instagram" className="py-24 bg-[#050505] text-[#FAF9F6] relative overflow-hidden">
        {/* Ambient glow */}
        <div className="absolute top-1/3 right-0 w-96 h-96 bg-[#D4AF37]/5 rounded-full filter blur-[120px] pointer-events-none" />
 
        <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
 
          {/* Header */}
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 mb-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <p className="text-xs font-semibold tracking-[0.4em] uppercase text-[#D4AF37] mb-2">
                Follow Our Work
              </p>
              <h2 className="font-serif text-3xl md:text-5xl font-normal tracking-tight">
                Our <em className="text-[#D4AF37] not-italic">Instagram</em>
              </h2>
              <div className="w-14 h-[1px] bg-gradient-to-r from-[#D4AF37] to-transparent mt-4" />
            </motion.div>
 
            <motion.a
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              href={siteConfig.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 px-6 py-3 bg-gradient-to-br from-[#833ab4] via-[#fd1d1d] to-[#fcb045] text-white font-semibold text-xs tracking-widest uppercase hover:opacity-90 transition-opacity"
            >
              <Instagram className="w-4 h-4" />
              {siteConfig.instagram}
              <ExternalLink className="w-3.5 h-3.5" />
            </motion.a>
          </div>
 
          {/* Instagram Highlights row */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex gap-5 overflow-x-auto pb-4 mb-10 scrollbar-hide"
          >
            {IG_HIGHLIGHTS.map((h, i) => (
              <motion.a
                key={h.label}
                href={siteConfig.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, scale: 0.85 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.07 }}
                className="flex flex-col items-center gap-2 flex-shrink-0 group"
              >
                {/* Ring gradient — like IG story ring */}
                <div className="w-[70px] h-[70px] rounded-full p-[2.5px] bg-gradient-to-br from-[#f09433] via-[#e6683c] to-[#bc1888]">
                  <div className="w-full h-full rounded-full bg-[#111] border-2 border-[#050505] flex items-center justify-center text-2xl group-hover:scale-105 transition-transform duration-300">
                    {h.emoji}
                  </div>
                </div>
                <span className="text-[10px] text-[#FAF9F6]/70 tracking-wide group-hover:text-[#D4AF37] transition-colors">
                  {h.label}
                </span>
              </motion.a>
            ))}
          </motion.div>
 
          {/* 6-post grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-1.5 mb-10">
            {IG_POSTS.map((p, i) => (
              <motion.a
                key={i}
                href={siteConfig.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.07 }}
                className="relative aspect-square overflow-hidden group cursor-pointer bg-[#111]"
              >
                {/* Real image — swap `image` in IG_POSTS with your photo URL */}
                <img
                  src={p.image}
                  alt={p.label}
                  referrerPolicy="no-referrer"
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
 
                {/* Hover overlay */}
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/65 transition-all duration-300 flex flex-col items-center justify-center gap-2 opacity-0 group-hover:opacity-100">
                  <span className="font-serif text-sm text-white font-semibold text-center px-2">{p.label}</span>
                  <div className="flex items-center gap-4 text-[11px] text-white/80">
                    <span className="flex items-center gap-1"><Heart className="w-3 h-3 fill-[#D4AF37] text-[#D4AF37]" />{p.likes}</span>
                    <span className="flex items-center gap-1"><Eye className="w-3 h-3 text-[#D4AF37]" />{p.views}</span>
                  </div>
                </div>
                {/* Gold corner accent */}
                <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-[#D4AF37] via-transparent to-[#D4AF37] opacity-0 group-hover:opacity-100 transition-opacity" />
              </motion.a>
            ))}
          </div>
 
          {/* Follow CTA */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <p className="text-sm text-[#FAF9F6]/60 mb-4 font-sans font-light">
              Follow us for daily bridal transformations, Glass Glow looks & behind-the-scenes
            </p>
            <a
              href={siteConfig.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-3 border border-[#D4AF37]/40 text-[#D4AF37] text-xs font-semibold tracking-widest uppercase hover:bg-[#D4AF37]/10 hover:border-[#D4AF37] transition-all duration-300"
            >
              <Instagram className="w-4 h-4" />
              Follow {siteConfig.instagram} on Instagram
            </a>
          </motion.div>
        </div>
      </section>
 
      {/* ══ YOUTUBE SECTION ════════════════════════════════════ */}
      <section id="youtube" className="py-24 bg-[#0a0a0a] text-[#FAF9F6] relative overflow-hidden border-t border-[#D4AF37]/10">
        <div className="absolute bottom-1/4 left-0 w-96 h-96 bg-red-900/5 rounded-full filter blur-[120px] pointer-events-none" />
 
        <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
 
          {/* Header */}
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 mb-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <p className="text-xs font-semibold tracking-[0.4em] uppercase text-[#D4AF37] mb-2">
                Watch Our Tutorials
              </p>
              <h2 className="font-serif text-3xl md:text-5xl font-normal tracking-tight">
                Our <em className="text-red-500 not-italic">YouTube</em> Channel
              </h2>
              <div className="w-14 h-[1px] bg-gradient-to-r from-red-500 to-transparent mt-4" />
            </motion.div>
 
            <motion.a
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              href={siteConfig.youtubeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 px-6 py-3 bg-[#FF0000] hover:bg-[#cc0000] text-white font-semibold text-xs tracking-widest uppercase transition-colors"
            >
              <Youtube className="w-4 h-4" />
              {siteConfig.youtube}
              <ExternalLink className="w-3.5 h-3.5" />
            </motion.a>
          </div>
 
          {/* YouTube video cards */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 mb-10">
            {YT_VIDEOS.map((v, i) => (
              <motion.a
                key={i}
                href={siteConfig.youtubeUrl}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.55, delay: i * 0.1 }}
                className="group block border border-[#D4AF37]/10 hover:border-[#D4AF37]/40 transition-all duration-300 overflow-hidden"
              >
                {/* Thumbnail */}
                <div
                  className="relative aspect-video overflow-hidden"
                  style={{ background: v.gradient }}
                >
                  {/* Play button */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-14 h-14 rounded-full bg-[#FF0000]/90 flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg">
                      <Play className="w-6 h-6 text-white fill-white ml-1" />
                    </div>
                  </div>
                  {/* Duration badge */}
                  <div className="absolute bottom-2 right-2 bg-black/80 text-white text-[10px] px-1.5 py-0.5 font-mono">
                    {v.duration}
                  </div>
                  {/* Views */}
                  <div className="absolute top-2 left-2 bg-black/70 text-[#D4AF37] text-[10px] px-2 py-0.5 flex items-center gap-1">
                    <Eye className="w-3 h-3" /> {v.views} views
                  </div>
                </div>
                {/* Title */}
                <div className="p-4 bg-[#050505]">
                  <p className="font-serif text-sm text-[#FAF9F6] group-hover:text-[#D4AF37] transition-colors leading-snug">
                    {v.title}
                  </p>
                  <p className="text-[10px] text-[#FAF9F6]/40 mt-1 tracking-wide uppercase">
                    {siteConfig.youtube}
                  </p>
                </div>
              </motion.a>
            ))}
          </div>
 
          {/* Subscribe CTA */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <p className="text-sm text-[#FAF9F6]/60 mb-4 font-sans font-light">
              Subscribe for full bridal transformations, Glass Glow tutorials & makeup masterclasses
            </p>
            <a
              href={siteConfig.youtubeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-3 border border-red-500/50 text-red-400 text-xs font-semibold tracking-widest uppercase hover:bg-red-500/10 hover:border-red-400 transition-all duration-300"
            >
              <Youtube className="w-4 h-4" />
              Subscribe to {siteConfig.youtube}
            </a>
          </motion.div>
        </div>
      </section>
    </>
  );
}
