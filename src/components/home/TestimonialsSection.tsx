import { useState, useEffect } from "react";
import { Star, ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const testimonials = [
  {
    id: 1,
    name: "Marie L.",
    event: "Mariage - Juin 2024",
    rating: 5,
    text: "Des créations florales absolument magnifiques pour notre mariage. Sophie et Martin ont parfaitement compris notre vision romantique et champêtre. Nos invités en parlent encore !",
  },
  {
    id: 2,
    name: "Thomas B.",
    event: "Anniversaire - Mai 2024",
    rating: 5,
    text: "Service impeccable et bouquet somptueux pour l'anniversaire de ma femme. La qualité des fleurs et l'attention aux détails sont exceptionnelles. Je recommande vivement !",
  },
  {
    id: 3,
    name: "Claire M.",
    event: "Événement d'entreprise - Avril 2024",
    rating: 5,
    text: "Nous faisons appel à L'Art Floral pour tous nos événements professionnels. Créativité, ponctualité et professionnalisme au rendez-vous à chaque fois. Un partenaire de confiance.",
  },
];

const TestimonialsSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  const goToNext = () => {
    setIsAutoPlaying(false);
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const goToPrev = () => {
    setIsAutoPlaying(false);
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="section-padding bg-gradient-to-br from-secondary via-secondary-dark to-secondary">
      <div className="container-custom">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-4">
            Témoignages clients
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto font-subheading">
            Ils nous ont fait confiance pour leurs moments précieux
          </p>
        </div>

        <div className="max-w-4xl mx-auto relative">
          {/* Testimonial Card */}
          <div className="bg-white rounded-2xl shadow-elevated p-8 md:p-12 mb-8 animate-fade-in">
            <div className="flex items-center justify-center mb-6">
              {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                <Star key={i} className="h-6 w-6 text-accent fill-accent" />
              ))}
            </div>

            <blockquote className="text-xl md:text-2xl text-center text-foreground/90 mb-8 font-subheading leading-relaxed italic">
              "{testimonials[currentIndex].text}"
            </blockquote>

            <div className="text-center">
              <div className="font-display font-semibold text-lg text-primary">
                {testimonials[currentIndex].name}
              </div>
              <div className="text-sm text-muted-foreground">
                {testimonials[currentIndex].event}
              </div>
            </div>
          </div>

          {/* Navigation */}
          <div className="flex items-center justify-center gap-4">
            <Button
              variant="outline"
              size="icon"
              onClick={goToPrev}
              className="rounded-full"
              aria-label="Témoignage précédent"
            >
              <ChevronLeft className="h-5 w-5" />
            </Button>

            {/* Dots */}
            <div className="flex gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => {
                    setCurrentIndex(index);
                    setIsAutoPlaying(false);
                  }}
                  className={`w-2.5 h-2.5 rounded-full transition-all ${
                    index === currentIndex
                      ? "bg-accent w-8"
                      : "bg-muted-foreground/30 hover:bg-muted-foreground/50"
                  }`}
                  aria-label={`Aller au témoignage ${index + 1}`}
                />
              ))}
            </div>

            <Button
              variant="outline"
              size="icon"
              onClick={goToNext}
              className="rounded-full"
              aria-label="Témoignage suivant"
            >
              <ChevronRight className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
