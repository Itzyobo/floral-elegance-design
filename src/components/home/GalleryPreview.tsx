import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

// Placeholder gallery items - will be replaced with real images
const galleryItems = [
  { id: 1, title: "Bouquet Romantique", price: "85€", category: "Bouquets" },
  { id: 2, title: "Décoration Mariage", price: "Sur devis", category: "Mariages" },
  { id: 3, title: "Composition Champêtre", price: "120€", category: "Compositions" },
  { id: 4, title: "Bouquet Printemps", price: "75€", category: "Bouquets" },
  { id: 5, title: "Centre de table", price: "95€", category: "Événements" },
  { id: 6, title: "Arche florale", price: "Sur devis", category: "Mariages" },
  { id: 7, title: "Bouquet Moderne", price: "90€", category: "Bouquets" },
  { id: 8, title: "Couronne murale", price: "110€", category: "Décorations" },
];

const GalleryPreview = () => {
  return (
    <section className="section-padding bg-secondary/30">
      <div className="container-custom">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-4">
            Nos dernières créations
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto font-subheading">
            Découvrez notre savoir-faire à travers une sélection de nos compositions
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mb-12">
          {galleryItems.map((item, index) => (
            <Link
              key={item.id}
              to="/creations"
              className="group relative aspect-square overflow-hidden rounded-lg shadow-soft card-lift animate-scale-in"
              style={{ animationDelay: `${index * 0.05}s` }}
            >
              {/* Placeholder gradient background */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-secondary to-accent/20" />
              
              {/* Hover Overlay */}
              <div className="absolute inset-0 bg-primary/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center p-4">
                <h3 className="text-white font-display font-semibold text-lg mb-2 text-center">
                  {item.title}
                </h3>
                <p className="text-accent font-medium text-sm mb-1">{item.category}</p>
                <p className="text-white/90 font-semibold">{item.price}</p>
                <span className="mt-4 text-accent text-sm font-medium">
                  Voir détails →
                </span>
              </div>

              {/* Image will be added here */}
              <div className="absolute inset-0 image-zoom">
                <div className="w-full h-full bg-gradient-to-br from-primary-light/30 to-accent/30" />
              </div>
            </Link>
          ))}
        </div>

        <div className="text-center animate-fade-in">
          <Button
            size="lg"
            variant="outline"
            className="border-2 border-primary text-primary hover:bg-primary hover:text-white"
            asChild
          >
            <Link to="/creations">Voir toute la galerie</Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default GalleryPreview;
