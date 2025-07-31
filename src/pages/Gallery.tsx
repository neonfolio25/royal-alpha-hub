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
        <div className="container mx-auto px-4 text-center">
          <div className="glass-card rounded-xl p-12">
            <Camera className="h-16 w-16 text-primary mx-auto mb-6" />
            <h2 className="text-3xl font-playfair font-bold mb-4">Photo Gallery</h2>
            <p className="text-muted-foreground">Beautiful moments and memories coming soon!</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Gallery;