import React, { useState, useEffect } from "react";
import { Menu, X, Phone, MapPin } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

interface HeaderProps {
  language: string;
}

const Header: React.FC<HeaderProps> = ({ language }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    if (location.pathname !== "/") {
      // If not on home page, navigate to home first
      window.location.href = `/#${sectionId}`;
      return;
    }

    const element = document.getElementById(sectionId);
    if (element) {
      const headerHeight = 80; // Account for fixed header
      const elementPosition = element.offsetTop - headerHeight;
      window.scrollTo({
        top: elementPosition,
        behavior: "smooth",
      });
    }
    setIsMenuOpen(false);
  };

  const isHomePage = location.pathname === "/";

  const navItems =
    language === "ar"
      ? [
          { name: "الرئيسية", href: isHomePage ? "home" : "home" },
          { name: "من نحن", href: "about" },
          { name: "خدماتنا", href: "services" },
          { name: "أعمالنا", href: "portfolio" },
          { name: "اتصل بنا", href: "contact" },
        ]
      : [
          { name: "Home", href: "home" },
          { name: "About Us", href: "about" },
          { name: "Our Services", href: "services" },
          { name: "Our Work", href: "portfolio" },
          { name: "Contact Us", href: "contact" },
        ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled || !isHomePage
          ? "bg-white/95 backdrop-blur-md shadow-lg"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto padding-inline-4 sm:padding-inline-6 lg:padding-inline-8">
        <div className="flex justify-between items-center h-16 lg:h-20">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link to="/" onClick={() => scrollToSection("home")}>
              <img
                src={
                  isScrolled || !isHomePage
                    ? `/hekma/src/assets/LOGO EDIT-04.png`
                    : `/hekma/src/assets/LOGO EDIT-03.png`
                }
                alt="H-CARE"
                className={`h-12 transition-all duration-300 ${
                  isScrolled || !isHomePage ? "h-20" : "h-24"
                }`}
              />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex gap-inline-8">
            {navItems.map((item) => (
              <button
                key={item.name}
                onClick={() => scrollToSection(item.href)}
                className={`text-sm font-medium transition-colors duration-300 hover:text-hcare-primary ${
                  isScrolled || !isHomePage ? "text-gray-700" : "text-white/90"
                }`}
              >
                {item.name}
              </button>
            ))}
          </nav>

          {/* Contact Info & CTA */}
          <div className="hidden lg:flex items-center gap-inline-6">
            <div
              className={`flex items-center gap-inline-2 text-sm ${
                isScrolled || !isHomePage ? "text-gray-600" : "text-white/80"
              }`}
            >
              <Phone size={16} />
              <span>+966 11 123 4567</span>
            </div>
            <button
              onClick={() => scrollToSection("contact")}
              className="bg-hcare-primary hover:bg-hcare-secondary text-white padding-inline-6 py-2 rounded-full font-medium transition-all duration-300 transform hover:scale-105"
            >
              {language === "ar" ? "تواصل معنا" : "Contact Us"}
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className={`p-2 rounded-md transition-colors duration-300 ${
                isScrolled || !isHomePage
                  ? "text-gray-700 hover:bg-gray-100"
                  : "text-white hover:bg-white/10"
              }`}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-t border-gray-200 shadow-lg">
            <div className="padding-inline-2 pt-2 pb-3 space-y-1">
              {navItems.map((item) => (
                <button
                  key={item.name}
                  onClick={() => scrollToSection(item.href)}
                  className="block w-full padding-inline-3 py-2 text-base font-medium text-gray-700 hover:text-hcare-primary hover:bg-gray-50 rounded-md transition-colors duration-200 text-align-start"
                >
                  {item.name}
                </button>
              ))}
              <div className="border-t border-gray-200 pt-3 mt-3">
                <button className="w-full bg-hcare-primary text-white padding-inline-4 py-2 rounded-full font-medium">
                  {language === "ar" ? "احجز موعد" : "Book Appointment"}
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
