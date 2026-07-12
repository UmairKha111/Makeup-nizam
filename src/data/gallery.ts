import { GalleryItem } from '../types';
import traditionalKeralaBride from '../assets/images/traditional_kerala_bride_1783751484791.jpg';
import modernAirbrushMakeup from '../assets/images/modern_airbrush_makeup_1783751506889.jpg';
import premiumGroomStyling from '../assets/images/premium_groom_styling_1783751519975.jpg';
import bridalMakeupHero from '../assets/images/bridal_makeup_hero_1783751463019.jpg';
import receptionLook from '../assets/images/reception_look_1783759602245.jpg';
import haldiMehndiLook from '../assets/images/haldi_mehndi_look_1783759615845.jpg';
import christianBride from '../assets/images/christian_bride_1783759629484.jpg';
import engagementLook from '../assets/images/engagement_look_1783759642105.jpg';

export const galleryItems: GalleryItem[] = [
  {
    id: "gal-1",
    title: "Classic South Indian Bridal Glow",
    category: "Bridal Makeup",
    imageUrl: traditionalKeralaBride,
    description: "Flawless long-lasting traditional Kerala bridal look. Perfect sweatproof gold and bronze highlighting with elegant jasmine hair detailing."
  },
  {
    id: "gal-2",
    title: "Airbrush Dewy Skin Application",
    category: "Airbrush Makeup",
    imageUrl: modernAirbrushMakeup,
    description: "Flawless, feather-light airbrush application giving an airbrushed poreless skin texture for high-definition wedding videography."
  },
  {
    id: "gal-3",
    title: "Dignified Groom Grooming & Style",
    category: "Groom Makeup",
    imageUrl: premiumGroomStyling,
    description: "Neat, modern HD grooming designed to match the bride's grandeur while keeping a strictly natural, zero-shine masculine texture."
  },
  {
    id: "gal-4",
    title: "Timeless HD Bridal Editorial Look",
    category: "HD Makeup",
    imageUrl: bridalMakeupHero,
    description: "A gorgeous, deep champagne gold eye look with seamless contouring. Styled specifically for premium luxury destination weddings."
  },
  {
    id: "gal-5",
    title: "Vibrant Haldi & Mehndi Glam",
    category: "Wedding Looks",
    imageUrl: haldiMehndiLook,
    description: "A gorgeous dewy pastel look with matching floral accessories, customized specifically to highlight joy during pre-wedding celebrations."
  },
  {
    id: "gal-6",
    title: "Glamorous Evening Reception Sparkle",
    category: "Wedding Looks",
    imageUrl: receptionLook,
    description: "An elegant, modern smoky eyes and glossy lips aesthetic, meticulously designed to radiate confidence under rich night lights."
  },
  {
    id: "gal-7",
    title: "Christian Bridal Silk & Veil Finish",
    category: "Bridal Makeup",
    imageUrl: christianBride,
    description: "Subtle pearlescent glow styled perfectly for white lace silk drapes, bringing a modern European-inspired radiant elegance."
  },
  {
    id: "gal-8",
    title: "Modern Premium Engagement Look",
    category: "HD Makeup",
    imageUrl: engagementLook,
    description: "Soft-glam champagne gold eyes and nude satin lips, complete with an elegant designer half-up styling for a stunning engagement entry."
  }
];
