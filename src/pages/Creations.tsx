import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { useState } from "react";

const categories = ["Tous", "Mariages", "Deuil", "Anniversaires", "Entreprises", "Compositions décoratives"];

const creations = [
  { id: 1, name: "Bouquet Romantique", category: "Mariages", price: "85€" },
  { id: 2, name: "Gerbe d'hommage", category: "Deuil", price: "120€" },
  { id: 3, name: "Composition Champêtre", category: "Compositions décoratives", price: "95€" },
  { id: 4, name: "Bouquet Surprise", category: "Anniversaires", price: "75€" },
  { id: 5, name: "Centre de table", category: "Entreprises", price: "110€" },
  { id: 6, name: "Arche florale", category: "Mariages", price: "Sur devis" },
  { id: 7, name: "Couronne murale", category: "Deuil", price: "95€" },
  { id: 8, name: "Bouquet Moderne", category: "Anniversaires", price: "90€" },
  { id: 9, name: "Composition Zen", category: "Entreprises", price: "130€" },
];

const Creations = () => {
  const [selectedCategory, setSelectedCategory] = useState("Tous");

  const filteredCreations = selectedCategory === "Tous"
    ? creations
    : creations.filter(c => c.category === selectedCategory);

  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Hero */}
      <section className="pt-32 pb-16 bg-gradient-to-br from-secondary via-background to-secondary">
        <div className="container-custom text-center">
          <h1 className="text-5xl md:text-6xl font-display font-bold text-foreground mb-4 animate-fade-in">
            Nos créations florales
          </h1>
          <p className="text-xl text-muted-foreground font-subheading animate-fade-in">
            Découvrez notre collection de compositions uniques
          </p>
        </div>
      </section>

      {/* Filters */}
      <section className="sticky top-20 z-40 bg-background/95 backdrop-blur-md border-b border-border py-6 shadow-soft">
        <div className="container-custom">
          <div className="flex flex-wrap gap-3 justify-center">
            {categories.map((category) => (
              <Button
                key={category}
                variant={selectedCategory === category ? "default" : "outline"}
                onClick={() => setSelectedCategory(category)}
                className="transition-all"
              >
                {category}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredCreations.map((creation, index) => (
              <div
                key={creation.id}
                className="group relative aspect-[3/4] overflow-hidden rounded-lg shadow-soft card-lift animate-scale-in"
                style={{ animationDelay: `${index * 0.05}s` }}
              >
                {/* Placeholder */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-secondary to-accent/20" />
                
                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-primary/90 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center p-6 text-center">
                  <h3 className="text-white font-display font-semibold text-2xl mb-3">
                    {creation.name}
                  </h3>
                  <p className="text-accent font-medium mb-2">{creation.category}</p>
                  <p className="text-white/90 font-semibold text-xl mb-6">{creation.price}</p>
                  <Button variant="outline" className="border-white text-white hover:bg-white hover:text-primary">
                    Commander
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Creations;
