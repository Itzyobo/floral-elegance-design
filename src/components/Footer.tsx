import { Link } from "react-router-dom";
import { Phone, Mail, MapPin, Instagram, Facebook } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-secondary border-t border-border">
      <div className="container-custom py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <h3 className="text-2xl font-display font-semibold">
              <span className="text-primary">L'Art</span>
              <span className="text-accent"> Floral</span>
            </h3>
            <p className="text-sm text-muted-foreground">
              Créations florales sur-mesure depuis 1998. 
              Passion, élégance et savoir-faire artisanal.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-accent transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-accent transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="font-semibold mb-4 text-foreground">Navigation</h4>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/creations"
                  className="text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  Nos créations
                </Link>
              </li>
              <li>
                <Link
                  to="/mariages"
                  className="text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  Mariages & Événements
                </Link>
              </li>
              <li>
                <Link
                  to="/boutique"
                  className="text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  Boutique
                </Link>
              </li>
              <li>
                <Link
                  to="/blog"
                  className="text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  Blog & Conseils
                </Link>
              </li>
            </ul>
          </div>

          {/* Horaires */}
          <div>
            <h4 className="font-semibold mb-4 text-foreground">Horaires</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li className="flex justify-between">
                <span>Lundi - Vendredi</span>
                <span className="font-medium">9h - 19h</span>
              </li>
              <li className="flex justify-between">
                <span>Samedi</span>
                <span className="font-medium">9h - 18h</span>
              </li>
              <li className="flex justify-between">
                <span>Dimanche</span>
                <span className="font-medium">10h - 13h</span>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold mb-4 text-foreground">Contact</h4>
            <ul className="space-y-3">
              <li>
                <a
                  href="tel:+33123456789"
                  className="flex items-center space-x-2 text-sm text-muted-foreground hover:text-primary transition-colors group"
                >
                  <Phone className="h-4 w-4 group-hover:text-accent transition-colors" />
                  <span>01 23 45 67 89</span>
                </a>
              </li>
              <li>
                <a
                  href="mailto:contact@lartfloral.fr"
                  className="flex items-center space-x-2 text-sm text-muted-foreground hover:text-primary transition-colors group"
                >
                  <Mail className="h-4 w-4 group-hover:text-accent transition-colors" />
                  <span>contact@lartfloral.fr</span>
                </a>
              </li>
              <li>
                <div className="flex items-start space-x-2 text-sm text-muted-foreground">
                  <MapPin className="h-4 w-4 mt-1 flex-shrink-0" />
                  <span>15 rue des Fleurs<br />75001 Paris</span>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <p className="text-sm text-muted-foreground">
            © {currentYear} L'Art Floral. Tous droits réservés.
          </p>
          <div className="flex space-x-6 text-sm">
            <Link
              to="/mentions-legales"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              Mentions légales
            </Link>
            <Link
              to="/confidentialite"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              Confidentialité
            </Link>
            <Link
              to="/cgv"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              CGV
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
