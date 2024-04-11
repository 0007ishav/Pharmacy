import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import ShopByCategory from "@/components/ShopByCategory";
import Staff from "@/components/Staff";
import PharmacyTestimonials from "@/components/TestimonialCards";

export default function Home() {
  return (
    <main className='min-h-screen bg-black/[0.96] antialiased bg-grid-white/[0.02]'>
      
    <HeroSection />
    <ShopByCategory />
    <PharmacyTestimonials />
    <Staff />
    <Footer />
    </main>
  );
}
