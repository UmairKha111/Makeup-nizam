import { ServiceItem } from "../types";

export const services: ServiceItem[] = [
  // =========================
  // BRIDAL SERVICES
  // =========================
  {
    id: "bridal-hd-makeup",
    name: "Bridal HD Makeup",
    price: 18000,
    description:
      "Flawless HD bridal makeup designed for weddings and high-definition photography.",
    includes: [
      "Premium HD Bridal Makeup",
      "Professional Hairstyling",
      "Saree Draping / Lehenga Setting",
      "Jewelry Setting",
      "Waterproof Finish",
      "Premium Eyelashes",
      "Final Touch-ups"
    ],
    category: "bridal",
    isPopular: true
  },

  {
    id: "bridal-airbrush-makeup",
    name: "Bridal Airbrush Makeup",
    price: 25000,
    description:
      "Luxury airbrush bridal makeup with a lightweight, flawless finish.",
    includes: [
      "Premium Airbrush Makeup",
      "Luxury Skin Prep",
      "Professional Hairstyling",
      "Saree Draping",
      "Jewelry Setting",
      "Premium Eyelashes",
      "24-Hour Long-lasting Finish"
    ],
    category: "bridal"
  },

  {
    id: "bridal-signature-makeup",
    name: "Bridal Signature Makeup",
    price: 30000,
    description:
      "Complete premium bridal makeover using luxury international products.",
    includes: [
      "Luxury Makeup",
      "Premium Hairstyling",
      "Hair Extensions Styling",
      "Draping",
      "Jewelry Setting",
      "Touch-up Kit",
      "VIP Bridal Assistance"
    ],
    category: "bridal"
  },

  // =========================
  // GROOM SERVICES
  // =========================
  {
    id: "groom-hd-makeup",
    name: "Groom HD Makeup",
    price: 13000,
    description:
      "Natural HD grooming and makeup for a fresh, camera-ready look.",
    includes: [
      "HD Skin Correction",
      "Professional Hair Styling",
      "Beard Grooming",
      "Dark Circle Concealing",
      "Waterproof Finish",
      "Final Touch-ups"
    ],
    category: "groom"
  },

  {
    id: "groom-airbrush-makeup",
    name: "Groom Airbrush Makeup",
    price: 18000,
    description:
      "Premium airbrush makeup for a lightweight and long-lasting groom look.",
    includes: [
      "Airbrush Makeup",
      "Luxury Skin Prep",
      "Hair Styling",
      "Beard Grooming",
      "Natural Matte Finish",
      "Sweat-proof Formula",
      "Final Touch-ups"
    ],
    category: "groom"
  },

  {
    id: "groom-signature-makeup",
    name: "Groom Signature Makeup",
    price: 22000,
    description:
      "Luxury groom makeover with premium products for weddings and events.",
    includes: [
      "Premium Makeup",
      "Hair Styling",
      "Beard Detailing",
      "Luxury Skin Prep",
      "Eyebrow Grooming",
      "Long-lasting Matte Finish",
      "Touch-up Session"
    ],
    category: "groom"
  }
];