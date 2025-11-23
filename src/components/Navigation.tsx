import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Phone, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const navLinks = [
  { name: "Accueil", path: "/" },
  { name: "Créations", path: "/creations" },
  { name: "Mariages", path: "/mariages" },
  { name: "Boutique", path: "/boutique" },
  { name: "À propos", path: "/a-propos" },
  { name: "Contact", path: "/contact" },
  { name: "Blog", path: "/blog" },
];

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location]);

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled
          ? "bg-background/95 backdrop-blur-md shadow-soft"
          : "bg-transparent"
      )}
    >
      <div className="container-custom">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2 group">
            <div className="text-2xl md:text-3xl font-display font-semibold">
              <span className="text-primary group-hover:text-accent transition-colors">
                L'Art
              </span>
              <span className="text-accent group-hover:text-primary transition-colors">
                {" "}Floral
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={cn(
                  "text-sm font-medium transition-colors link-elegant",
                  location.pathname === link.path
                    ? "text-primary"
                    : isScrolled
                    ? "text-foreground hover:text-primary"
                    : "text-foreground hover:text-accent"
                )}
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* Contact Info & CTA */}
          <div className="hidden lg:flex items-center space-x-4">
            <a
              href="tel:+33123456789"
              className="flex items-center space-x-2 text-sm text-muted-foreground hover:text-primary transition-colors"
            >
              <Phone className="h-4 w-4" />
              <span>01 23 45 67 89</span>
            </a>
            <Button variant="default" size="sm" asChild>
              <Link to="/contact">Prendre RDV</Link>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden p-2 text-foreground hover:text-primary transition-colors"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden bg-background border-t border-border animate-fade-in">
          <div className="container-custom py-6 space-y-4">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={cn(
                  "block py-2 text-base font-medium transition-colors",
                  location.pathname === link.path
                    ? "text-primary"
                    : "text-foreground hover:text-primary"
                )}
              >
                {link.name}
              </Link>
            ))}
            <div className="pt-4 space-y-3 border-t border-border">
              <a
                href="tel:+33123456789"
                className="flex items-center space-x-2 text-sm text-foreground hover:text-primary transition-colors"
              >
                <Phone className="h-4 w-4" />
                <span>01 23 45 67 89</span>
              </a>
              <a
                href="mailto:contact@lartfloral.fr"
                className="flex items-center space-x-2 text-sm text-foreground hover:text-primary transition-colors"
              >
                <Mail className="h-4 w-4" />
                <span>contact@lartfloral.fr</span>
              </a>
              <Button className="w-full" asChild>
                <Link to="/contact">Prendre rendez-vous</Link>
              </Button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navigation;
