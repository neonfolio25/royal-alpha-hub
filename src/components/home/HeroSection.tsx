import React, { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight, Play, Award, Users, TrendingUp } from "lucide-react";
import { EnhancedButton } from "@/components/ui/enhanced-button";

const HeroSection: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [typewriterText, setTypewriterText] = useState("");

  const slides = [
    {
      title: "Excellence in Education",
      subtitle: "Nurturing Young Minds for Tomorrow's Leaders",
      description: "Join Alpha High School's prestigious IIT & Medical Foundation program and unlock your potential for success.",
      image: "/placeholder-hero-1.jpg",
      cta: "Explore Programs",
      stats: { label: "Success Rate", value: "98%" }
    },
    {
      title: "IIT Foundation Program",
      subtitle: "Gateway to Engineering Excellence",
      description: "Comprehensive coaching and mentorship for JEE Main & Advanced with proven track record of success.",
      image: "/placeholder-hero-2.jpg",
      cta: "Learn More",
      stats: { label: "IIT Selections", value: "250+" }
    },
    {
      title: "Medical Foundation",
      subtitle: "Your Path to Healthcare Leadership",
      description: "Expert guidance for NEET preparation with state-of-the-art facilities and experienced faculty.",
      image: "/placeholder-hero-3.jpg",
      cta: "Join Program",
      stats: { label: "Medical Seats", value: "180+" }
    }
  ];

  const typewriterTexts = [
    "Shaping Future Engineers",
    "Creating Medical Professionals", 
    "Building Tomorrow's Leaders",
    "Excellence in Education"
  ];

  useEffect(() => {
    const slideInterval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(slideInterval);
  }, []);

  useEffect(() => {
    let textIndex = 0;
    let charIndex = 0;
    let isDeleting = false;

    const typeInterval = setInterval(() => {
      const currentText = typewriterTexts[textIndex];
      
      if (!isDeleting) {
        setTypewriterText(currentText.substring(0, charIndex + 1));
        charIndex++;
        
        if (charIndex === currentText.length) {
          setTimeout(() => isDeleting = true, 2000);
        }
      } else {
        setTypewriterText(currentText.substring(0, charIndex - 1));
        charIndex--;
        
        if (charIndex === 0) {
          isDeleting = false;
          textIndex = (textIndex + 1) % typewriterTexts.length;
        }
      }
    }, isDeleting ? 50 : 100);

    return () => clearInterval(typeInterval);
  }, []);

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background with Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-hero">
        <div className="absolute inset-0 bg-black/30" />
      </div>

      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-gold/10 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }} />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-r from-primary/5 to-gold/5 rounded-full blur-3xl animate-pulse" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center">
        <div className="max-w-5xl mx-auto">
          {/* Pre-title */}
          <div className="mb-6 animate-fade-in">
            <span className="inline-block px-6 py-2 bg-white/10 backdrop-blur-xl rounded-full text-gold font-semibold border border-white/20">
              Welcome to Alpha High School
            </span>
          </div>

          {/* Main Title */}
          <h1 className="text-5xl md:text-7xl font-playfair font-bold text-white mb-6 animate-slide-up">
            {slides[currentSlide].title}
          </h1>

          {/* Typewriter Subtitle */}
          <div className="text-2xl md:text-3xl text-gold-light mb-4 font-medium min-h-[3rem] animate-slide-up" style={{ animationDelay: '0.2s' }}>
            <span className="typewriter border-r-2 border-gold">{typewriterText}</span>
          </div>

          {/* Description */}
          <p className="text-xl text-white/90 mb-8 max-w-3xl mx-auto leading-relaxed animate-slide-up" style={{ animationDelay: '0.4s' }}>
            {slides[currentSlide].description}
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12 animate-slide-up" style={{ animationDelay: '0.6s' }}>
            <EnhancedButton variant="hero" size="xl" className="group">
              {slides[currentSlide].cta}
              <Play className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </EnhancedButton>
            <EnhancedButton variant="glass" size="xl">
              Take Virtual Tour
            </EnhancedButton>
          </div>

          {/* Achievement Stats */}
          <div className="grid grid-cols-3 gap-8 max-w-2xl mx-auto animate-slide-up" style={{ animationDelay: '0.8s' }}>
            <div className="text-center">
              <div className="text-3xl font-bold text-gold mb-2">28+</div>
              <div className="text-white/80">Years Excellence</div>
            </div>
            <div className="text-center border-x border-white/20">
              <div className="text-3xl font-bold text-gold mb-2">{slides[currentSlide].stats.value}</div>
              <div className="text-white/80">{slides[currentSlide].stats.label}</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-gold mb-2">2500+</div>
              <div className="text-white/80">Alumni Success</div>
            </div>
          </div>
        </div>
      </div>

      {/* Slide Navigation */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-3">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              currentSlide === index ? 'bg-gold w-8' : 'bg-white/40 hover:bg-white/60'
            }`}
          />
        ))}
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-6 top-1/2 transform -translate-y-1/2 w-12 h-12 glass rounded-full flex items-center justify-center hover:bg-white/20 transition-all duration-300 z-10"
        aria-label="Previous slide"
      >
        <ChevronLeft className="h-6 w-6 text-white" />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-6 top-1/2 transform -translate-y-1/2 w-12 h-12 glass rounded-full flex items-center justify-center hover:bg-white/20 transition-all duration-300 z-10"
        aria-label="Next slide"
      >
        <ChevronRight className="h-6 w-6 text-white" />
      </button>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 right-8 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/40 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/60 rounded-full mt-2 animate-pulse" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;