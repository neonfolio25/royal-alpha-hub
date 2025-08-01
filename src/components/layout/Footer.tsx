import React from "react";
import { Link } from "react-router-dom";
import { 
  Phone, 
  Mail, 
  MapPin, 
  Facebook, 
  Twitter, 
  Instagram, 
  Youtube,
  Clock,
  Award,
  Users,
  BookOpen
} from "lucide-react";

const Footer: React.FC = () => {
  const quickLinks = [
    { name: "About Us", href: "/about" },
    { name: "Academic Programs", href: "/academics" },
    { name: "Admissions", href: "/contact" },
    { name: "Student Life", href: "/student-life" },
    { name: "Events", href: "/events" },
    { name: "Gallery", href: "/gallery" },
  ];

  const academics = [
    { name: "IIT Foundation", href: "/academics" },
    { name: "Medical Foundation", href: "/academics" },
    { name: "State Board Curriculum", href: "/academics" },
    { name: "Co-curricular Activities", href: "/student-life" },
    { name: "Sports & Athletics", href: "/student-life" },
    { name: "Art & Culture", href: "/student-life" },
  ];

  const stats = [
    { icon: Award, value: "28", label: "Years of Excellence" },
    { icon: Users, value: "2500+", label: "Alumni Success" },
    { icon: BookOpen, value: "98%", label: "Success Rate" },
    { icon: Users, value: "150+", label: "Expert Faculty" },
  ];

  return (
    <footer className="bg-gradient-to-br from-primary via-primary-light to-gold text-white">
      {/* Stats Section */}
      <div className="py-16 border-b border-primary-light/20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
                <div className="flex justify-center mb-4">
                  <div className="w-16 h-16 bg-gold/20 rounded-full flex items-center justify-center">
                    <stat.icon className="h-8 w-8 text-gold" />
                  </div>
                </div>
                <div className="text-3xl font-bold font-playfair text-gold mb-2">{stat.value}</div>
                <div className="text-primary-foreground/80">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* School Info */}
            <div className="space-y-6">
              <div>
                <div className="flex items-center space-x-3 mb-4">
                  <div className="w-12 h-12 bg-gold rounded-full flex items-center justify-center">
                    <span className="text-primary font-bold text-xl">A</span>
                  </div>
                  <div>
                    <h3 className="font-playfair font-bold text-xl text-gold">Alpha High School</h3>
                    <p className="text-sm text-primary-foreground/80">Excellence in Education</p>
                  </div>
                </div>
                <p className="text-primary-foreground/80 leading-relaxed">
                  Nurturing young minds with excellence in academics, character building, and holistic development for over 28 years.
                </p>
              </div>

              {/* Contact Info */}
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <MapPin className="h-5 w-5 text-gold flex-shrink-0" />
                  <span className="text-sm">123 Education Street, Knowledge City, State - 123456</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Phone className="h-5 w-5 text-gold flex-shrink-0" />
                  <span className="text-sm">+91 12345 67890</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Mail className="h-5 w-5 text-gold flex-shrink-0" />
                  <span className="text-sm">info@alphahighschool.edu.in</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Clock className="h-5 w-5 text-gold flex-shrink-0" />
                  <span className="text-sm">Mon - Sat: 8:00 AM - 4:00 PM</span>
                </div>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="font-semibold text-lg mb-6 text-gold">Quick Links</h4>
              <ul className="space-y-3">
                {quickLinks.map((link) => (
                  <li key={link.name}>
                    <Link 
                      to={link.href} 
                      className="text-primary-foreground/80 hover:text-gold transition-colors duration-300 hover:translate-x-1 inline-block"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Academic Programs */}
            <div>
              <h4 className="font-semibold text-lg mb-6 text-gold">Academic Programs</h4>
              <ul className="space-y-3">
                {academics.map((program) => (
                  <li key={program.name}>
                    <Link 
                      to={program.href} 
                      className="text-primary-foreground/80 hover:text-gold transition-colors duration-300 hover:translate-x-1 inline-block"
                    >
                      {program.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Social Media */}
            <div>
              <h4 className="font-semibold text-lg mb-6 text-gold">Follow Us</h4>
              <div className="flex space-x-3">
                <a href="#" className="w-10 h-10 bg-primary-light/20 rounded-full flex items-center justify-center hover:bg-gold hover:text-primary transition-all duration-300 hover:-translate-y-1">
                  <Facebook className="h-5 w-5" />
                </a>
                <a href="#" className="w-10 h-10 bg-primary-light/20 rounded-full flex items-center justify-center hover:bg-gold hover:text-primary transition-all duration-300 hover:-translate-y-1">
                  <Twitter className="h-5 w-5" />
                </a>
                <a href="#" className="w-10 h-10 bg-primary-light/20 rounded-full flex items-center justify-center hover:bg-gold hover:text-primary transition-all duration-300 hover:-translate-y-1">
                  <Instagram className="h-5 w-5" />
                </a>
                <a href="#" className="w-10 h-10 bg-primary-light/20 rounded-full flex items-center justify-center hover:bg-gold hover:text-primary transition-all duration-300 hover:-translate-y-1">
                  <Youtube className="h-5 w-5" />
                </a>
              </div>
            </div>

          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-primary-light/20 py-6">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-center md:text-left">
              <p className="text-primary-foreground/80">
                © 2024 Alpha High School. All rights reserved.
              </p>
            </div>
            <div className="flex space-x-6">
              <Link to="/privacy" className="text-primary-foreground/80 hover:text-gold transition-colors duration-300">
                Privacy Policy
              </Link>
              <Link to="/terms" className="text-primary-foreground/80 hover:text-gold transition-colors duration-300">
                Terms of Service
              </Link>
              <Link to="/sitemap" className="text-primary-foreground/80 hover:text-gold transition-colors duration-300">
                Sitemap
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;