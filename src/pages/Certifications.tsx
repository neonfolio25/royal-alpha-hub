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
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            {/* State Board Affiliation */}
            <div className="glass-card rounded-xl p-8 text-center hover:shadow-xl transition-all duration-300">
              <div className="w-20 h-20 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-6">
                <Award className="h-10 w-10 text-gold" />
              </div>
              <h3 className="text-2xl font-playfair font-bold mb-4">State Board Affiliation</h3>
              <p className="text-muted-foreground mb-4">Officially affiliated with the State Board of Education, ensuring quality curriculum and standards.</p>
              <div className="text-primary font-semibold">Affiliation No: SB/2024/001</div>
            </div>

            {/* ISO Certification */}
            <div className="glass-card rounded-xl p-8 text-center hover:shadow-xl transition-all duration-300">
              <div className="w-20 h-20 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-6">
                <Shield className="h-10 w-10 text-gold" />
              </div>
              <h3 className="text-2xl font-playfair font-bold mb-4">ISO 9001:2015 Certified</h3>
              <p className="text-muted-foreground mb-4">Quality management system certification ensuring excellence in educational services.</p>
              <div className="text-primary font-semibold">Cert No: ISO/EDU/2024/789</div>
            </div>
          </div>

          {/* Additional Certifications */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="glass-card rounded-xl p-6 text-center hover:shadow-xl transition-all duration-300">
              <CheckCircle className="h-12 w-12 text-gold mx-auto mb-4" />
              <h4 className="font-playfair font-bold mb-2">CBSE Recognition</h4>
              <p className="text-muted-foreground text-sm">Recognized for educational excellence</p>
            </div>

            <div className="glass-card rounded-xl p-6 text-center hover:shadow-xl transition-all duration-300">
              <CheckCircle className="h-12 w-12 text-gold mx-auto mb-4" />
              <h4 className="font-playfair font-bold mb-2">Safety Standards</h4>
              <p className="text-muted-foreground text-sm">Meets all safety and security standards</p>
            </div>

            <div className="glass-card rounded-xl p-6 text-center hover:shadow-xl transition-all duration-300">
              <CheckCircle className="h-12 w-12 text-gold mx-auto mb-4" />
              <h4 className="font-playfair font-bold mb-2">Green School</h4>
              <p className="text-muted-foreground text-sm">Environmental sustainability certified</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Certifications;