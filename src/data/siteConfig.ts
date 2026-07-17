import { SiteConfig } from '../types';

export const siteConfig: SiteConfig = {
  brandName: "Makeover By Nizam",
  category: "Professional Makeup Artist",
  instagram: "@Makeover_by_nizam",
  instagramUrl: "https://www.instagram.com/Makeover_by_nizam",
  youtube: "Makeoverbynizam",
  youtubeUrl: "https://www.youtube.com/@Makeoverbynizam",
  contact: {
    phone: "9995598986",
    phoneFormatted: "+91919995598986",
    whatsAppNumber: "919995598986",
  },
  serviceArea: "All India",
  brandDescription: "Makeover By Nizam is a professional makeup artist specializing in HD bridal makeup, Glass Glow Makeup, airbrush makeup, groom makeup, photo arrangements, hair styling and complete wedding transformations — available all across India.",
  aboutDetails: "Makeover By Nizam specializes in creating elegant bridal transformations with professional HD makeup techniques, signature Glass Glow Makeup, personalized photo arrangements and premium beauty products. Nizam focuses on flawless, long-lasting, waterproof and sweat-proof makeup looks using premium professional products — serving clients across all of India.",
  features: [
    "Waterproof Makeup",
    "Sweat Proof Makeup",
    "Glass Glow Makeup",
    "Photo Arrangements",
    "Bridal Specialist",
    "Home Service Available",
    "All India Coverage",
  ],
  travelInfo: "Available for destination weddings and bridal bookings across all states in India. Additional travel expenses applicable based on venue location.",
  notIncludedInfo: [
    "Facial Treatment",
    "Hair Cut or Hair Coloring"
  ],
  availableInfo: "Premium Home Services & Destination Wedding Services available All Over India.",
};

export const generateWhatsAppLink = (message: string = "Hello Makeover By Nizam, I would like to book an appointment for bridal makeup.") => {
  return `https://wa.me/${siteConfig.contact.whatsAppNumber}?text=${encodeURIComponent(message)}`;
};
