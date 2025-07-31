import React from "react";
import { BookOpen, Microscope, Trophy, Wifi } from "lucide-react";

const Facilities = () => {
  const facilities = [
    { icon: BookOpen, title: "Digital Library", description: "Modern library with vast collection" },
    { icon: Microscope, title: "Science Labs", description: "Advanced laboratory facilities" },
    { icon: Trophy, title: "Sports Complex", description: "Complete sports infrastructure" },
    { icon: Wifi, title: "Smart Classrooms", description: "Technology-enabled learning" }
  ];

  return (
    <div className="min-h-screen">
      <section className="py-20 bg-gradient-hero text-white">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-playfair font-bold mb-6">Our Facilities</h1>
          <p className="text-xl">World-class infrastructure for holistic education</p>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {facilities.map((facility, index) => (
              <div key={index} className="glass-card rounded-xl p-6 text-center">
                <facility.icon className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">{facility.title}</h3>
                <p className="text-muted-foreground">{facility.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Facilities;