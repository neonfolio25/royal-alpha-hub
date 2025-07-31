import React from "react";
import { Camera, Image } from "lucide-react";

const Gallery = () => {
  return (
    <div className="min-h-screen">
      <section className="py-20 bg-gradient-hero text-white">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-playfair font-bold mb-6">Gallery</h1>
          <p className="text-xl">Capturing memories and moments of excellence</p>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* School Events */}
            <div className="glass-card rounded-xl overflow-hidden hover:shadow-xl transition-all duration-300">
              <div className="h-48 bg-gradient-to-br from-primary/20 to-gold/20 flex items-center justify-center">
                <Camera className="h-12 w-12 text-primary" />
              </div>
              <div className="p-4">
                <h3 className="font-playfair font-bold mb-2">Sports Day 2024</h3>
                <p className="text-muted-foreground text-sm">Annual athletics competition</p>
              </div>
            </div>

            <div className="glass-card rounded-xl overflow-hidden hover:shadow-xl transition-all duration-300">
              <div className="h-48 bg-gradient-to-br from-gold/20 to-primary/20 flex items-center justify-center">
                <Image className="h-12 w-12 text-gold" />
              </div>
              <div className="p-4">
                <h3 className="font-playfair font-bold mb-2">Science Exhibition</h3>
                <p className="text-muted-foreground text-sm">Student innovation showcase</p>
              </div>
            </div>

            <div className="glass-card rounded-xl overflow-hidden hover:shadow-xl transition-all duration-300">
              <div className="h-48 bg-gradient-to-br from-primary/20 to-gold/20 flex items-center justify-center">
                <Camera className="h-12 w-12 text-primary" />
              </div>
              <div className="p-4">
                <h3 className="font-playfair font-bold mb-2">Cultural Fest</h3>
                <p className="text-muted-foreground text-sm">Arts and cultural celebration</p>
              </div>
            </div>

            <div className="glass-card rounded-xl overflow-hidden hover:shadow-xl transition-all duration-300">
              <div className="h-48 bg-gradient-to-br from-gold/20 to-primary/20 flex items-center justify-center">
                <Image className="h-12 w-12 text-gold" />
              </div>
              <div className="p-4">
                <h3 className="font-playfair font-bold mb-2">Classroom Activities</h3>
                <p className="text-muted-foreground text-sm">Learning in action</p>
              </div>
            </div>

            <div className="glass-card rounded-xl overflow-hidden hover:shadow-xl transition-all duration-300">
              <div className="h-48 bg-gradient-to-br from-primary/20 to-gold/20 flex items-center justify-center">
                <Camera className="h-12 w-12 text-primary" />
              </div>
              <div className="p-4">
                <h3 className="font-playfair font-bold mb-2">Award Ceremonies</h3>
                <p className="text-muted-foreground text-sm">Celebrating achievements</p>
              </div>
            </div>

            <div className="glass-card rounded-xl overflow-hidden hover:shadow-xl transition-all duration-300">
              <div className="h-48 bg-gradient-to-br from-gold/20 to-primary/20 flex items-center justify-center">
                <Image className="h-12 w-12 text-gold" />
              </div>
              <div className="p-4">
                <h3 className="font-playfair font-bold mb-2">Campus Life</h3>
                <p className="text-muted-foreground text-sm">Daily moments of joy</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Gallery;