import { Heart, Sparkles, Truck } from "lucide-react";
import { Link } from "react-router-dom";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const services = [
  {
    icon: Heart,
    title: "Mariages & Événements",
    description: "Compositions florales uniques pour votre jour J. De la consultation au montage, nous sublimerons votre célébration.",
    link: "/mariages",
  },
  {
    icon: Sparkles,
    title: "Bouquets sur-mesure",
    description: "Créations personnalisées selon vos goûts, l'occasion et votre budget. Chaque bouquet raconte une histoire.",
    link: "/boutique",
  },
  {
    icon: Truck,
    title: "Livraison locale",
    description: "Service de livraison rapide et soigné dans tout Paris et sa région. Fraîcheur garantie.",
    link: "/contact",
  },
];

const ServicesSection = () => {
  return (
    <section id="services" className="section-padding bg-background">
      <div className="container-custom">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-4">
            Nos services
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto font-subheading">
            Un accompagnement personnalisé pour chacune de vos envies florales
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <Link
                key={index}
                to={service.link}
                className="block group"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <Card className="h-full card-lift border-2 hover:border-accent transition-colors">
                  <CardHeader className="text-center pb-4">
                    <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-secondary flex items-center justify-center group-hover:bg-accent/10 transition-colors">
                      <Icon className="h-8 w-8 text-accent" />
                    </div>
                    <CardTitle className="text-2xl font-display mb-2">
                      {service.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-center text-base leading-relaxed">
                      {service.description}
                    </CardDescription>
                    <div className="mt-6 text-center">
                      <span className="text-accent font-medium link-elegant">
                        En savoir plus →
                      </span>
                    </div>
                  </CardContent>
                </Card>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
