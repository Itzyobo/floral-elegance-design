import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Check } from "lucide-react";
import { Link } from "react-router-dom";

const processSteps = [
  {
    number: "01",
    title: "Rendez-vous découverte",
    description: "Échange sur vos envies, votre thème et votre budget. Nous créons ensemble votre vision florale.",
  },
  {
    number: "02",
    title: "Création moodboard",
    description: "Proposition détaillée avec photos, palette de couleurs et échantillons de fleurs.",
  },
  {
    number: "03",
    title: "Validation & production",
    description: "Ajustements finaux puis création de vos compositions avec les plus belles fleurs.",
  },
  {
    number: "04",
    title: "Installation le Jour-J",
    description: "Livraison et mise en place soignée sur votre lieu de réception. Tout est parfait.",
  },
];

const packages = [
  {
    name: "Essentiel",
    price: "À partir de 450€",
    features: [
      "Bouquet de mariée",
      "Boutonnière marié",
      "2 corsages témoins",
      "Consultation personnalisée",
    ],
  },
  {
    name: "Harmonie",
    price: "À partir de 1 200€",
    features: [
      "Tout du package Essentiel",
      "Décoration cérémonie (10 compositions)",
      "Centre de table principal",
      "Bouquet de lancer",
      "Installation sur site",
    ],
    popular: true,
  },
  {
    name: "Prestige",
    price: "Sur devis",
    features: [
      "Tout du package Harmonie",
      "Centres de table invités (illimités)",
      "Arche ou structure florale",
      "Décoration vin d'honneur",
      "Compositions buffet",
      "Assistance complète Jour-J",
    ],
  },
];

const Mariages = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Hero */}
      <section className="relative h-[70vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/80 to-primary-dark/90" />
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto animate-fade-in">
          <h1 className="font-display text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6">
            Sublimez votre <span className="text-accent">Jour J</span>
          </h1>
          <p className="text-xl md:text-2xl text-white/90 mb-8 font-subheading">
            Des créations florales exceptionnelles pour votre mariage de rêve
          </p>
          <Button size="lg" className="bg-accent hover:bg-accent-dark text-foreground" asChild>
            <Link to="/contact">Prendre rendez-vous</Link>
          </Button>
        </div>
      </section>

      {/* Process */}
      <section className="section-padding bg-background">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-4">
              Notre processus
            </h2>
            <p className="text-lg text-muted-foreground font-subheading">
              Un accompagnement sur-mesure du premier rendez-vous jusqu'au jour J
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {processSteps.map((step, index) => (
              <div
                key={index}
                className="flex gap-6 animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex-shrink-0 w-16 h-16 rounded-full bg-accent flex items-center justify-center text-2xl font-display font-bold text-foreground">
                  {step.number}
                </div>
                <div>
                  <h3 className="text-xl font-display font-semibold mb-2">{step.title}</h3>
                  <p className="text-muted-foreground">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Packages */}
      <section className="section-padding bg-secondary/30">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-4">
              Nos formules
            </h2>
            <p className="text-lg text-muted-foreground font-subheading">
              Des packages adaptés à tous les budgets et toutes les envies
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {packages.map((pkg, index) => (
              <Card
                key={index}
                className={`card-lift ${pkg.popular ? 'border-accent border-2 shadow-gold' : ''}`}
              >
                {pkg.popular && (
                  <div className="bg-accent text-foreground text-center py-2 font-semibold">
                    Le plus choisi
                  </div>
                )}
                <CardHeader>
                  <CardTitle className="text-2xl font-display mb-2">{pkg.name}</CardTitle>
                  <CardDescription className="text-2xl font-bold text-primary">
                    {pkg.price}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {pkg.features.map((feature, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <Check className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button className="w-full mt-6" variant={pkg.popular ? "default" : "outline"} asChild>
                    <Link to="/contact">Demander un devis</Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          <p className="text-center text-muted-foreground mt-8 italic">
            Devis personnalisé gratuit sur demande
          </p>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Mariages;
