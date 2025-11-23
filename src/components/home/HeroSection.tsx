import { Button } from "@/components/ui/button";
import { ChevronDown } from "lucide-react";
import { Link } from "react-router-dom";
import heroImage from "@/assets/hero-florals.jpg";

const HeroSection = () => {
  const scrollToServices = () => {
    const servicesSection = document.getElementById("services");
    servicesSection?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Parallax */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url(${heroImage})`,
          transform: "scale(1.1)",
        }}
      />

      {/* Overlay */}
      <div className="absolute inset-0 hero-overlay" />

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto animate-fade-in">
        <div className="mb-6 inline-block">
          <div className="text-sm tracking-widest text-accent uppercase font-medium mb-2">
            Depuis 1998
          </div>
        </div>

        <h1 className="font-display text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
          L'art floral au service
          <br />
          <span className="text-accent">de vos émotions</span>
        </h1>

        <p className="text-xl md:text-2xl text-white/90 mb-10 font-light font-subheading">
          Créations florales sur-mesure pour sublimer vos moments précieux
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button
            size="lg"
            className="bg-accent hover:bg-accent-dark text-foreground font-semibold px-8 py-6 text-lg shadow-gold"
            asChild
          >
            <Link to="/creations">Découvrir nos créations</Link>
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="border-2 border-white text-white hover:bg-white hover:text-primary px-8 py-6 text-lg"
            asChild
          >
            <Link to="/contact">Prendre rendez-vous</Link>
          </Button>
        </div>
      </div>

      {/* Scroll Indicator */}
      <button
        onClick={scrollToServices}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-white/80 hover:text-white transition-colors animate-bounce-subtle cursor-pointer"
        aria-label="Défiler vers le bas"
      >
        <ChevronDown size={32} />
      </button>
    </section>
  );
};

export default HeroSection;
