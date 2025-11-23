import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Heart, Leaf, Palette, Sparkles } from "lucide-react";
import floristImage from "@/assets/florist-portrait.jpg";

const values = [
  {
    icon: Leaf,
    title: "Fleurs locales & de saison",
    description: "Nous privilégions les circuits courts et travaillons avec des producteurs locaux pour garantir fraîcheur et qualité.",
  },
  {
    icon: Heart,
    title: "Démarche éco-responsable",
    description: "Emballages recyclables, compost des déchets floraux et choix de fournisseurs engagés dans une floriculture durable.",
  },
  {
    icon: Palette,
    title: "Créativité & sur-mesure",
    description: "Chaque création est unique et pensée spécialement pour vous. Nous transformons vos envies en réalité florale.",
  },
  {
    icon: Sparkles,
    title: "Passion du métier",
    description: "Plus qu'un métier, c'est une vocation. Nous mettons tout notre cœur et notre savoir-faire dans chaque composition.",
  },
];

const timeline = [
  { year: "1998", event: "Ouverture de la boutique rue des Fleurs" },
  { year: "2005", event: "Premier mariage prestigieux au Château de Versailles" },
  { year: "2012", event: "Extension de l'atelier et agrandissement de l'équipe" },
  { year: "2018", event: "Certification agriculture biologique et locale" },
  { year: "2024", event: "Plus de 500 mariages célébrés avec passion" },
];

const About = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Hero */}
      <section className="pt-32 pb-16 bg-gradient-to-br from-secondary via-background to-secondary">
        <div className="container-custom text-center">
          <h1 className="text-5xl md:text-6xl font-display font-bold text-foreground mb-4 animate-fade-in">
            Notre histoire
          </h1>
          <p className="text-xl text-muted-foreground font-subheading animate-fade-in max-w-2xl mx-auto">
            Une passion familiale transmise depuis trois générations
          </p>
        </div>
      </section>

      {/* Story */}
      <section className="section-padding bg-background">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
            <div className="animate-fade-in-left">
              <img
                src={floristImage}
                alt="Notre atelier"
                className="rounded-lg shadow-elevated w-full"
              />
            </div>
            <div className="animate-fade-in-right space-y-6">
              <h2 className="text-4xl font-display font-bold text-foreground">
                L'Art Floral, une passion de famille
              </h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p className="text-lg">
                  Fondée en 1998 par Sophie et Martin Dubois, L'Art Floral est née d'une passion commune pour la beauté naturelle et le désir de partager l'émotion que procurent les fleurs.
                </p>
                <p>
                  Formés auprès des plus grands maîtres fleuristes européens, nous avons à cœur de perpétuer un savoir-faire artisanal tout en innovant constamment dans nos créations. Chaque composition reflète notre amour du détail et notre engagement envers l'excellence.
                </p>
                <p>
                  Aujourd'hui, notre atelier parisien accueille une équipe passionnée de cinq artisans fleuristes. Ensemble, nous créons des moments magiques pour nos clients : mariages intimes ou grandioses, événements d'entreprise, ou simplement le plaisir d'offrir.
                </p>
                <p>
                  Notre philosophie ? Écouter, créer et sublimer vos émotions à travers l'art floral.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="section-padding bg-secondary/30">
        <div className="container-custom">
          <h2 className="text-4xl font-display font-bold text-center mb-16">
            Notre parcours
          </h2>
          <div className="max-w-4xl mx-auto">
            {timeline.map((item, index) => (
              <div
                key={index}
                className="flex gap-8 mb-12 last:mb-0 animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex-shrink-0 w-24 text-right">
                  <div className="text-3xl font-display font-bold text-accent">
                    {item.year}
                  </div>
                </div>
                <div className="flex-shrink-0 w-4 relative">
                  <div className="w-4 h-4 rounded-full bg-accent absolute top-2" />
                  {index !== timeline.length - 1 && (
                    <div className="w-0.5 h-full bg-border absolute left-1.5 top-6" />
                  )}
                </div>
                <div className="flex-1 pb-12">
                  <p className="text-lg text-foreground">{item.event}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="section-padding bg-background">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-display font-bold text-foreground mb-4">
              Nos valeurs
            </h2>
            <p className="text-lg text-muted-foreground font-subheading">
              Ce qui guide notre travail au quotidien
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <div
                  key={index}
                  className="flex gap-6 animate-fade-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="flex-shrink-0 w-16 h-16 rounded-full bg-accent/10 flex items-center justify-center">
                    <Icon className="h-8 w-8 text-accent" />
                  </div>
                  <div>
                    <h3 className="text-xl font-display font-semibold mb-3">
                      {value.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {value.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
