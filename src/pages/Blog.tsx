import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import { Calendar } from "lucide-react";

const articles = [
  {
    id: 1,
    title: "Comment conserver vos bouquets plus longtemps",
    category: "Conseils entretien",
    excerpt: "Découvrez nos astuces de professionnels pour prolonger la vie de vos fleurs coupées et profiter de leur beauté pendant des semaines.",
    date: "15 Juin 2024",
    readTime: "5 min",
  },
  {
    id: 2,
    title: "Tendances florales pour les mariages 2024",
    category: "Tendances mariages",
    excerpt: "Les styles champêtres, minimalistes et bohèmes dominent cette année. Explorez les couleurs et fleurs les plus demandées pour le jour J.",
    date: "10 Juin 2024",
    readTime: "8 min",
  },
  {
    id: 3,
    title: "DIY : Créer une couronne de fleurs fraîches",
    category: "DIY floral",
    excerpt: "Apprenez à réaliser vous-même une magnifique couronne florale pour décorer votre maison ou offrir en cadeau.",
    date: "5 Juin 2024",
    readTime: "10 min",
  },
  {
    id: 4,
    title: "Le langage secret des fleurs",
    category: "Langage des fleurs",
    excerpt: "Chaque fleur porte un message. Découvrez la signification cachée des roses, pivoines, tulipes et bien d'autres.",
    date: "1 Juin 2024",
    readTime: "6 min",
  },
  {
    id: 5,
    title: "Notre engagement pour une floriculture durable",
    category: "Actualités boutique",
    excerpt: "Retour sur notre certification bio et nos partenariats avec des producteurs locaux engagés dans l'éco-responsabilité.",
    date: "25 Mai 2024",
    readTime: "7 min",
  },
  {
    id: 6,
    title: "Les fleurs de saison : printemps/été",
    category: "Conseils entretien",
    excerpt: "Quelles fleurs choisir selon les saisons pour un bouquet frais, local et magnifique ? Notre guide complet.",
    date: "20 Mai 2024",
    readTime: "9 min",
  },
];

const categories = [
  "Tous",
  "Conseils entretien",
  "Tendances mariages",
  "DIY floral",
  "Langage des fleurs",
  "Actualités boutique",
];

const Blog = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Hero */}
      <section className="pt-32 pb-16 bg-gradient-to-br from-secondary via-background to-secondary">
        <div className="container-custom text-center">
          <h1 className="text-5xl md:text-6xl font-display font-bold text-foreground mb-4 animate-fade-in">
            Blog & Conseils
          </h1>
          <p className="text-xl text-muted-foreground font-subheading animate-fade-in">
            Tout savoir sur l'art floral, les tendances et nos astuces d'experts
          </p>
        </div>
      </section>

      {/* Categories */}
      <section className="sticky top-20 z-40 bg-background/95 backdrop-blur-md border-b border-border py-6 shadow-soft">
        <div className="container-custom">
          <div className="flex flex-wrap gap-3 justify-center">
            {categories.map((category) => (
              <Badge
                key={category}
                variant="outline"
                className="cursor-pointer hover:bg-primary hover:text-primary-foreground transition-colors px-4 py-2"
              >
                {category}
              </Badge>
            ))}
          </div>
        </div>
      </section>

      {/* Articles Grid */}
      <section className="section-padding bg-background">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {articles.map((article, index) => (
              <Link
                key={article.id}
                to={`/blog/${article.id}`}
                className="group animate-scale-in"
                style={{ animationDelay: `${index * 0.05}s` }}
              >
                <Card className="h-full card-lift border-2 hover:border-accent transition-colors">
                  {/* Image placeholder */}
                  <div className="aspect-video bg-gradient-to-br from-primary/10 via-secondary to-accent/10 rounded-t-lg" />
                  
                  <CardHeader>
                    <div className="flex items-center justify-between mb-3">
                      <Badge variant="secondary">{article.category}</Badge>
                      <div className="flex items-center text-sm text-muted-foreground">
                        <Calendar className="h-4 w-4 mr-1" />
                        {article.date}
                      </div>
                    </div>
                    <CardTitle className="font-display text-xl group-hover:text-primary transition-colors">
                      {article.title}
                    </CardTitle>
                  </CardHeader>
                  
                  <CardContent>
                    <CardDescription className="mb-4">{article.excerpt}</CardDescription>
                    <div className="flex items-center justify-between">
                      <span className="text-accent font-medium link-elegant">
                        Lire la suite →
                      </span>
                      <span className="text-sm text-muted-foreground">
                        {article.readTime} de lecture
                      </span>
                    </div>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Blog;
