export interface SiteConfig {
  brandName: string;
  category: string;
  instagram: string;
  instagramUrl: string;
  youtube: string;
  youtubeUrl: string;
  contact: {
    phone: string;
    phoneFormatted: string;
    whatsAppNumber: string;
  };
  serviceArea: string;
  brandDescription: string;
  aboutDetails: string;
  features: string[];
  travelInfo: string;
  notIncludedInfo: string[];
  availableInfo: string;
}

export interface ServiceItem {
  id: string;
  name: string;
  price: number;
  description: string;
  includes: string[];
  category: 'bridal' | 'groom' | 'airbrush' | 'party';
  isPopular?: boolean;
}

export interface GalleryItem {
  id: string;
  title: string;
  category: 'Bridal Makeup' | 'Groom Makeup' | 'HD Makeup' | 'Airbrush Makeup' | 'Hair Styling' | 'Wedding Looks';
  imageUrl: string;
  description: string;
}

export interface TestimonialItem {
  id: string;
  name: string;
  review: string;
  rating: number;
  weddingType: string;
  location: string;
}

export interface ProductBrand {
  name: string;
  description: string;
  accent: string;
}
