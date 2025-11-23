import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Phone, Mail, MapPin, Clock } from "lucide-react";

const Contact = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Form submission logic here
    alert("Merci pour votre message ! Nous vous répondrons sous 24h.");
  };

  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Hero */}
      <section className="pt-32 pb-16 bg-gradient-to-br from-secondary via-background to-secondary">
        <div className="container-custom text-center">
          <h1 className="text-5xl md:text-6xl font-display font-bold text-foreground mb-4 animate-fade-in">
            Contactez-nous
          </h1>
          <p className="text-xl text-muted-foreground font-subheading animate-fade-in">
            Nous sommes à votre écoute pour donner vie à vos projets floraux
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="section-padding bg-background">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* Form */}
            <div className="animate-fade-in-left">
              <h2 className="text-3xl font-display font-bold mb-6">
                Envoyez-nous un message
              </h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="name">Nom complet *</Label>
                    <Input id="name" required className="mt-2" />
                  </div>
                  <div>
                    <Label htmlFor="phone">Téléphone *</Label>
                    <Input id="phone" type="tel" required className="mt-2" />
                  </div>
                </div>

                <div>
                  <Label htmlFor="email">Email *</Label>
                  <Input id="email" type="email" required className="mt-2" />
                </div>

                <div>
                  <Label htmlFor="type">Type de demande *</Label>
                  <Select>
                    <SelectTrigger className="mt-2">
                      <SelectValue placeholder="Sélectionnez..." />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="mariage">Mariage/Événement</SelectItem>
                      <SelectItem value="bouquet">Commande bouquet</SelectItem>
                      <SelectItem value="abonnement">Abonnement</SelectItem>
                      <SelectItem value="autre">Autre</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="date">Date événement</Label>
                    <Input id="date" type="date" className="mt-2" />
                  </div>
                  <div>
                    <Label htmlFor="budget">Budget estimé</Label>
                    <Input id="budget" placeholder="ex: 500€" className="mt-2" />
                  </div>
                </div>

                <div>
                  <Label htmlFor="message">Votre message *</Label>
                  <Textarea
                    id="message"
                    required
                    rows={6}
                    className="mt-2"
                    placeholder="Décrivez-nous votre projet..."
                  />
                </div>

                <div className="flex items-start gap-2">
                  <input type="checkbox" id="rgpd" required className="mt-1" />
                  <Label htmlFor="rgpd" className="text-sm text-muted-foreground cursor-pointer">
                    J'accepte que mes données soient utilisées pour me recontacter *
                  </Label>
                </div>

                <Button type="submit" size="lg" className="w-full md:w-auto">
                  Envoyer le message
                </Button>
              </form>
            </div>

            {/* Info */}
            <div className="animate-fade-in-right space-y-8">
              <div>
                <h2 className="text-3xl font-display font-bold mb-6">
                  Nos coordonnées
                </h2>
                
                <div className="space-y-6">
                  <a
                    href="tel:+33123456789"
                    className="flex items-start gap-4 group hover:text-primary transition-colors"
                  >
                    <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center flex-shrink-0 group-hover:bg-accent/20 transition-colors">
                      <Phone className="h-6 w-6 text-accent" />
                    </div>
                    <div>
                      <div className="font-semibold mb-1">Téléphone</div>
                      <div className="text-muted-foreground">01 23 45 67 89</div>
                    </div>
                  </a>

                  <a
                    href="mailto:contact@lartfloral.fr"
                    className="flex items-start gap-4 group hover:text-primary transition-colors"
                  >
                    <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center flex-shrink-0 group-hover:bg-accent/20 transition-colors">
                      <Mail className="h-6 w-6 text-accent" />
                    </div>
                    <div>
                      <div className="font-semibold mb-1">Email</div>
                      <div className="text-muted-foreground">contact@lartfloral.fr</div>
                    </div>
                  </a>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center flex-shrink-0">
                      <MapPin className="h-6 w-6 text-accent" />
                    </div>
                    <div>
                      <div className="font-semibold mb-1">Adresse</div>
                      <div className="text-muted-foreground">
                        15 rue des Fleurs<br />
                        75001 Paris, France
                      </div>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center flex-shrink-0">
                      <Clock className="h-6 w-6 text-accent" />
                    </div>
                    <div>
                      <div className="font-semibold mb-4">Horaires d'ouverture</div>
                      <div className="space-y-2 text-muted-foreground">
                        <div className="flex justify-between">
                          <span>Lundi - Vendredi</span>
                          <span className="font-medium ml-4">9h - 19h</span>
                        </div>
                        <div className="flex justify-between">
                          <span>Samedi</span>
                          <span className="font-medium ml-4">9h - 18h</span>
                        </div>
                        <div className="flex justify-between">
                          <span>Dimanche</span>
                          <span className="font-medium ml-4">10h - 13h</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Map placeholder */}
              <div className="aspect-video bg-gradient-to-br from-primary/10 to-accent/10 rounded-lg flex items-center justify-center">
                <p className="text-muted-foreground">Carte Google Maps</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;
