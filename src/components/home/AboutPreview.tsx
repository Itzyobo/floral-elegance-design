import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import floristImage from "@/assets/florist-portrait.jpg";

const AboutPreview = () => {
  return (
    <section className="section-padding bg-background">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <div className="relative animate-fade-in-left">
            <div className="aspect-[4/5] rounded-lg overflow-hidden shadow-elevated">
              <img
                src={floristImage}
                alt="Notre fleuriste en atelier"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 w-32 h-32 border-4 border-accent rounded-lg -z-10" />
          </div>

          {/* Content */}
          <div className="animate-fade-in-right">
            <div className="mb-4">
              <span className="text-accent font-medium tracking-wider uppercase text-sm">
                Notre histoire
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-6">
              Passion & Savoir-faire
            </h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed mb-8">
              <p className="text-lg">
                Depuis plus de 25 ans, notre atelier floral perpétue l'art ancestral de la composition florale avec une touche de modernité et de créativité.
              </p>
              <p>
                Chaque création est le fruit d'une écoute attentive de vos envies, d'une sélection rigoureuse des plus belles fleurs de saison, et d'un savoir-faire artisanal transmis avec passion.
              </p>
              <p>
                Notre engagement : sublimer vos émotions à travers des compositions uniques qui racontent votre histoire.
              </p>
            </div>

            {/* Signature */}
            <div className="mb-8">
              <div className="text-2xl font-display italic text-primary">
                Sophie & Martin Dubois
              </div>
              <div className="text-sm text-muted-foreground">Artisans fleuristes</div>
            </div>

            <Button
              size="lg"
              variant="default"
              asChild
            >
              <Link to="/a-propos">Découvrir notre histoire</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutPreview;
