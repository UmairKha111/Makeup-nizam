import { ServiceItem } from '../types';

export const services: ServiceItem[] = [
  {
    id: "bride-hd-makeup",
    name: "Bride HD Makeup",
    price: 18000,
    description: "Flawless, camera-ready HD makeup designed specifically to look natural yet stunning in high-definition photography and video. Tailored to your skin type and tone.",
    includes: [
      "Premium HD Bridal Makeup",
      "Hairstyling & Hair Extensions Styling",
      "Saree Draping / Lehenga Pleating",
      "Bridal Accessories & Jewelry Setting",
      "Waterproof & Sweat-proof Formula",
      "Premium Mink Eyelashes",
      "Completing Final Draping and Touch-ups"
    ],
    category: "bridal",
    isPopular: true
  },
  {
    id: "airbrush-makeup",
    name: "Airbrush Makeup",
    price: 25000,
    description: "The ultimate luxury bridal experience. Airbrush technique sprays a fine mist of makeup for an ultra-lightweight, flawless second-skin finish with unmatched durability.",
    includes: [
      "Premium Airbrush Base & Makeup",
      "Lightweight, 24-Hour Budge-proof Finish",
      "Flawless HD Matte or Dewy Complexion",
      "Hairstyling (Classic/Modern Bridal Styles)",
      "Saree Draping / Outfit Setting",
      "Premium HD Eyelashes & Brow Grooming",
      "Luxury Skin Prep & Priming Session"
    ],
    category: "airbrush"
  },
  {
    id: "groom-makeup-hd",
    name: "Groom Makeup HD",
    price: 13000,
    description: "Subtle, completely natural, matte HD finish styling for the groom. Designed to minimize shine, balance skin tone, and look impeccable under flash photography.",
    includes: [
      "HD Matte Skin Refining & Correction",
      "Professional Hair Grooming & Styling",
      "Subtle Beard & Mustache Detailing",
      "Under-eye Dark Circle Correction",
      "Anti-shine, Sweat-proof Sealant",
      "Natural Lip Hydration & Skin Prep"
    ],
    category: "groom"
  }
];
