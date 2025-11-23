import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "react-router-dom";

const productCategories = [
  {
    name: "Bouquets signatures",
    description: "Nos créations iconiques à partir de 65€",
    link: "/boutique/bouquets",
  },
  {
    name: "Plantes d'intérieur",
    description: "Sélection de plantes vertes et fleuries",
    link: "/boutique/plantes",
  },
  {
    name: "Compositions saisonnières",
    description: "Arrangements uniques au fil des saisons",
    link: "/boutique/compositions",
  },
  {
    name: "Abonnements fleurs",
    description: "Livraison régulière de bouquets frais",
    link: "/boutique/abonnements",
  },
];

const featuredProducts = [
  {
    id: 1,
    name: "Bouquet Romantique",
    description: "Roses, pivoines et eucalyptus",
    price: "85€",
    sizes: ["Petit", "Moyen", "Grand"],
  },
  {
    id: 2,
    name: "Composition Champêtre",
    description: "Fleurs des champs et graminées",
    price: "75€",
    sizes: ["Unique"],
  },
  {
    id: 3,
    name: "Bouquet Moderne",
    description: "Lignes épurées, couleurs vives",
    price: "90€",
    sizes: ["Petit", "Grand"],
  },
  {
    id: 4,
    name: "Abonnement Découverte",
    description: "1 bouquet par semaine pendant 4 semaines",
    price: "280€",
    sizes: ["Mensuel"],
  },
];

const Boutique = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Hero */}
      <section className="pt-32 pb-16 bg-gradient-to-br from-secondary via-background to-accent/10">
        <div className="container-custom text-center">
          <h1 className="text-5xl md:text-6xl font-display font-bold text-foreground mb-4 animate-fade-in">
            Notre boutique
          </h1>
          <p className="text-xl text-muted-foreground font-subheading animate-fade-in">
            Commandez en ligne ou visitez-nous en boutique
          </p>
        </div>
      </section>

      {/* Categories */}
      <section className="section-padding bg-background">
        <div className="container-custom">
          <h2 className="text-3xl font-display font-bold text-center mb-12">
            Nos catégories
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {productCategories.map((category, index) => (
              <Link
                key={index}
                to={category.link}
                className="group"
              >
                <Card className="h-full card-lift border-2 hover:border-accent transition-colors">
                  <CardHeader className="text-center pb-4">
                    <div className="w-20 h-20 mx-auto mb-4 rounded-full bg-gradient-to-br from-primary/20 to-accent/20" />
                    <CardTitle className="text-xl font-display mb-2">
                      {category.name}
                    </CardTitle>
                    <CardDescription>{category.description}</CardDescription>
                  </CardHeader>
                  <CardContent className="text-center">
                    <span className="text-accent font-medium link-elegant">
                      Découvrir →
                    </span>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="section-padding bg-secondary/20">
        <div className="container-custom">
          <h2 className="text-3xl font-display font-bold text-center mb-12">
            Nos créations phares
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {featuredProducts.map((product, index) => (
              <Card key={product.id} className="card-lift animate-scale-in" style={{ animationDelay: `${index * 0.1}s` }}>
                <div className="aspect-[3/4] bg-gradient-to-br from-primary/10 via-secondary to-accent/10 rounded-t-lg" />
                <CardHeader>
                  <CardTitle className="font-display text-xl">{product.name}</CardTitle>
                  <CardDescription>{product.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-2xl font-bold text-primary">{product.price}</span>
                  </div>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {product.sizes.map((size) => (
                      <span key={size} className="px-3 py-1 bg-secondary rounded-full text-sm">
                        {size}
                      </span>
                    ))}
                  </div>
                  <Button className="w-full" asChild>
                    <Link to="/contact">Commander</Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Info Banner */}
      <section className="section-padding bg-primary text-white">
        <div className="container-custom text-center">
          <h2 className="text-3xl font-display font-bold mb-4">
            Livraison gratuite à Paris
          </h2>
          <p className="text-xl mb-8 text-white/90">
            Pour toute commande supérieure à 80€
          </p>
          <Button size="lg" className="bg-accent hover:bg-accent-dark text-foreground" asChild>
            <Link to="/contact">Commander maintenant</Link>
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Boutique;
