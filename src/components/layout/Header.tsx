import React, { useState, useEffect } from "react";
import { Menu, X, Sun, Moon, Phone, Mail } from "lucide-react";
import { EnhancedButton } from "@/components/ui/enhanced-button";
import { Link, useLocation } from "react-router-dom";
import logo from "@/assets/logo.png";

interface HeaderProps {
  darkMode: boolean;
  toggleDarkMode: () => void;
}

const Header: React.FC<HeaderProps> = ({ darkMode, toggleDarkMode }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navigation = [
    { name: "Home", href: "/" },
    { name: "About Us", href: "/about" },
    { name: "Principal's Message", href: "/principal-message" },
    { name: "Director's Message", href: "/director-message" },
    { name: "Academic Programs", href: "/academics" },
    { name: "Student Life", href: "/student-life" },
    { name: "Teachers", href: "/teachers" },
    { name: "Facilities", href: "/facilities" },
    { name: "Events", href: "/events" },
    { name: "Gallery", href: "/gallery" },
    { name: "Certifications", href: "/certifications" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <>
      {/* Top Bar */}
      <div className="bg-primary text-primary-foreground py-2 px-4 text-sm">
        <div className="container mx-auto flex justify-between items-center">
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-2">
              <Phone className="h-4 w-4" />
              <span>+91 12345 67890</span>
            </div>
            <div className="flex items-center space-x-2">
              <Mail className="h-4 w-4" />
              <span>info@alphahighschool.edu.in</span>
            </div>
          </div>
          <div className="hidden md:block">
            <span className="font-medium">Excellence in Education Since 1995</span>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <header 
        className={`fixed top-[40px] left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled || isMenuOpen ? "nav-glass shadow-lg bg-background/95 backdrop-blur-md" : "bg-background/80 backdrop-blur-sm"
        }`}
      >
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <Link to="/" className="flex items-center space-x-3 hover-lift flex-shrink-0 max-w-xs">
              <div className="w-12 h-12 rounded-full overflow-hidden shadow-royal flex-shrink-0">
                <img src={logo} alt="Alpha High School Logo" className="w-full h-full object-cover" />
              </div>
              <div className="min-w-0 overflow-hidden">
                <h1 className="font-playfair font-bold text-lg xl:text-xl heading-royal truncate">
                  Alpha High School
                </h1>
                <p className="text-xs xl:text-sm text-muted-foreground truncate">IIT & Medical Foundation</p>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-1 overflow-x-auto ml-8">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className={`px-3 py-2 rounded-lg transition-all duration-300 font-medium text-sm whitespace-nowrap ${
                    location.pathname === item.href
                      ? "bg-primary text-primary-foreground shadow-royal"
                      : "text-foreground hover:bg-primary/10 hover:text-primary"
                  }`}
                >
                  {item.name}
                </Link>
              ))}
            </nav>

            {/* Right Section */}
            <div className="flex items-center space-x-4">
              {/* Theme Toggle */}
              <EnhancedButton
                variant="glass"
                size="icon"
                onClick={toggleDarkMode}
                className="rounded-full"
              >
                {darkMode ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
              </EnhancedButton>


              {/* Mobile Menu Button */}
              <EnhancedButton
                variant="glass"
                size="icon"
                className="lg:hidden rounded-full"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
              >
                {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </EnhancedButton>
            </div>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="lg:hidden absolute top-full left-0 right-0 bg-background/98 backdrop-blur-md border border-border/50 shadow-xl m-4 rounded-2xl animate-slide-up">
              <div className="flex flex-col space-y-2 p-6">
                {navigation.map((item) => (
                  <Link
                    key={item.name}
                    to={item.href}
                    className={`px-4 py-3 rounded-lg transition-all duration-300 font-medium ${
                      location.pathname === item.href
                        ? "bg-primary text-primary-foreground"
                        : "text-foreground hover:bg-primary/10"
                    }`}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            </div>
          )}
        </div>
      </header>
    </>
  );
};

export default Header;