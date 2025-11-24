import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import HeroSection from "@/components/home/HeroSection";
import ServicesSection from "@/components/home/ServicesSection";
import GalleryPreview from "@/components/home/GalleryPreview";
import AboutPreview from "@/components/home/AboutPreview";
import TestimonialsSection from "@/components/home/TestimonialsSection";
import CTASection from "@/components/home/CTASection";
// 1. On importe le nouveau composant
import BounceCards from "@/components/BounceCards";

const Index = () => {
  // 2. On définit les images et les positions ici
  const bounceImages = [
    "https://picsum.photos/400/400?grayscale",
    "https://picsum.photos/500/500?grayscale",
    "https://picsum.photos/600/600?grayscale",
    "https://picsum.photos/700/700?grayscale",
    "https://picsum.photos/300/300?grayscale"
  ];

  const bounceTransforms = [
    "rotate(5deg) translate(-150px)",
    "rotate(0deg) translate(-70px)",
    "rotate(-5deg)",
    "rotate(5deg) translate(70px)",
    "rotate(-5deg) translate(150px)"
  ];

  return (
    <div className="min-h-screen">
      <Navigation />
      <HeroSection />
      <ServicesSection />

      {/* --- DEBUT AJOUT : BOUNCE CARDS --- */}
      {/* J'ai ajouté un padding (py-16) pour que ça respire bien */}
      <section className="w-full py-16 flex items-center justify-center overflow-hidden bg-background">
        <BounceCards
          className="custom-bounceCards"
          images={bounceImages}
          containerWidth={500}
          containerHeight={250}
          animationDelay={1}
          animationStagger={0.08}
          easeType="elastic.out(1, 0.5)"
          transformStyles={bounceTransforms}
          enableHover={true}
        />
      </section>
      {/* --- FIN AJOUT --- */}

      <GalleryPreview />
      <AboutPreview />
      <TestimonialsSection />
      <CTASection />
      <Footer />
    </div>
  );
};

export default Index;
