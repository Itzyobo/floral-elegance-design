import { Button } from "@/components/ui/button";
import { Phone, Mail, MapPin } from "lucide-react";
import { Link } from "react-router-dom";

const CTASection = () => {
  return (
    <section className="relative section-padding overflow-hidden">
      {/* Background with parallax effect */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-fixed"
        style={{
          backgroundImage: "linear-gradient(135deg, hsl(100 55% 20% / 0.9), hsl(100 60% 15% / 0.85))",
        }}
      />

      {/* Content */}
      <div className="relative z-10 container-custom text-center">
        <div className="max-w-3xl mx-auto animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-6">
            Envie d'échanger sur votre projet ?
          </h2>
          <p className="text-xl text-white/90 mb-10 font-subheading">
            Prenons rendez-vous pour créer ensemble la composition florale de vos rêves
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Button
              size="lg"
              className="bg-accent hover:bg-accent-dark text-foreground font-semibold px-8 py-6 text-lg shadow-gold"
              asChild
            >
              <Link to="/contact">Prendre rendez-vous</Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-2 border-white text-white hover:bg-white hover:text-primary px-8 py-6 text-lg"
              asChild
            >
              <Link to="/contact">Demander un devis</Link>
            </Button>
          </div>

          {/* Contact Info */}
          <div className="grid md:grid-cols-3 gap-6 mt-12 pt-12 border-t border-white/20">
            <a
              href="tel:+33123456789"
              className="flex flex-col items-center space-y-2 text-white hover:text-accent transition-colors group"
            >
              <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center group-hover:bg-accent/20 transition-colors">
                <Phone className="h-6 w-6" />
              </div>
              <span className="font-medium">01 23 45 67 89</span>
              <span className="text-sm text-white/70">Lundi - Samedi</span>
            </a>

            <a
              href="mailto:contact@lartfloral.fr"
              className="flex flex-col items-center space-y-2 text-white hover:text-accent transition-colors group"
            >
              <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center group-hover:bg-accent/20 transition-colors">
                <Mail className="h-6 w-6" />
              </div>
              <span className="font-medium">contact@lartfloral.fr</span>
              <span className="text-sm text-white/70">Réponse sous 24h</span>
            </a>

            <div className="flex flex-col items-center space-y-2 text-white">
              <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center">
                <MapPin className="h-6 w-6" />
              </div>
              <span className="font-medium">15 rue des Fleurs</span>
              <span className="text-sm text-white/70">75001 Paris</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
