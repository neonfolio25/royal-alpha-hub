import React, { useEffect, useState } from "react";

interface LoadingScreenProps {
  onComplete: () => void;
}

const LoadingScreen: React.FC<LoadingScreenProps> = ({ onComplete }) => {
  const [progress, setProgress] = useState(0);
  const [currentText, setCurrentText] = useState(0);

  const loadingTexts = [
    "Welcome to Alpha High School",
    "Excellence in Education",
    "IIT & Medical Foundation",
    "Shaping Future Leaders"
  ];

  useEffect(() => {
    const progressInterval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(progressInterval);
          setTimeout(onComplete, 500);
          return 100;
        }
        return prev + 2;
      });
    }, 50);

    const textInterval = setInterval(() => {
      setCurrentText(prev => (prev + 1) % loadingTexts.length);
    }, 1000);

    return () => {
      clearInterval(progressInterval);
      clearInterval(textInterval);
    };
  }, [onComplete]);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-gradient-hero">
      <div className="text-center space-y-8 animate-fade-in">
        {/* School Logo */}
        <div className="relative">
          <div className="w-32 h-32 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-xl border border-white/30 shadow-elegant animate-float">
            <span className="text-6xl font-bold text-white font-playfair">A</span>
          </div>
          <div className="absolute inset-0 rounded-full border-4 border-gold/30 animate-spin"></div>
        </div>

        {/* School Name */}
        <div className="space-y-2">
          <h1 className="text-4xl md:text-6xl font-playfair font-bold text-white animate-slide-up">
            Alpha High School
          </h1>
          <p className="text-xl text-white/90 animate-slide-up" style={{ animationDelay: "0.2s" }}>
            Excellence in Education Since 1995
          </p>
        </div>

        {/* Loading Text */}
        <div className="h-8">
          <p className="text-lg text-gold font-medium animate-fade-in" key={currentText}>
            {loadingTexts[currentText]}
          </p>
        </div>

        {/* Progress Bar */}
        <div className="w-80 max-w-full mx-auto space-y-4 animate-slide-up" style={{ animationDelay: "0.4s" }}>
          <div className="relative h-2 bg-white/20 rounded-full overflow-hidden backdrop-blur-xl">
            <div 
              className="absolute left-0 top-0 h-full bg-gradient-to-r from-gold to-gold-light rounded-full transition-all duration-300 ease-out"
              style={{ width: `${progress}%` }}
            />
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent animate-pulse" />
          </div>
          <div className="text-center">
            <span className="text-white/80 text-sm font-medium">{progress}%</span>
          </div>
        </div>

        {/* Decorative Elements */}
        <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-gold rounded-full animate-ping opacity-60" />
        <div className="absolute top-1/3 right-1/4 w-3 h-3 bg-white rounded-full animate-pulse opacity-40" />
        <div className="absolute bottom-1/4 left-1/3 w-2 h-2 bg-gold-light rounded-full animate-bounce opacity-50" />
        <div className="absolute bottom-1/3 right-1/3 w-1 h-1 bg-white rounded-full animate-ping opacity-70" />
      </div>
    </div>
  );
};

export default LoadingScreen;