import React from "react";
import { Award, Shield, CheckCircle } from "lucide-react";

const Certifications = () => {
  return (
    <div className="min-h-screen">
      <section className="py-20 bg-gradient-hero text-white">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-playfair font-bold mb-6">Certifications & Affiliations</h1>
          <p className="text-xl">Recognized excellence and trusted partnerships</p>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4 text-center">
          <div className="glass-card rounded-xl p-12">
            <Award className="h-16 w-16 text-gold mx-auto mb-6" />
            <h2 className="text-3xl font-playfair font-bold mb-4">Accreditations</h2>
            <p className="text-muted-foreground">Our official certifications and affiliations showcase coming soon!</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Certifications;