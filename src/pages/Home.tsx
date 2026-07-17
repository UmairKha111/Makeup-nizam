import { useEffect } from 'react';
import Hero from '../components/Hero';
import About from '../components/About';
import Services from '../components/Services';
import Portfolio from '../components/Portfolio';
import SocialSection from '../components/SocialSection';
import Products from '../components/Products';
import Testimonials from '../components/Testimonials';
import Contact from '../components/Contact';
import GroomClasses from '../components/GroomClasses';
 
interface HomeProps {
  onPageChange: (page: string) => void;
}
 
export default function Home({ onPageChange }: HomeProps) {
  useEffect(() => {
    document.title = "Makeover By Nizam | Premium Bridal Makeup Artist — All India";
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);
 
  return (
    <div className="bg-[#050505] min-h-screen">
      <Hero />
      <About />
      <GroomClasses onPageChange={onPageChange} />
      <Services />
      <Portfolio isHomePage={true} />
      <SocialSection />
      <Products />
      <Testimonials />
      <Contact />
    </div>
  );
}
 