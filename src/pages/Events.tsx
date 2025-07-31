import React from "react";
import { Calendar, Trophy, Star } from "lucide-react";

const Events = () => {
  return (
    <div className="min-h-screen">
      <section className="py-20 bg-gradient-hero text-white">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-playfair font-bold mb-6">Events & Achievements</h1>
          <p className="text-xl">Celebrating success and memorable moments</p>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Annual Sports Day */}
            <div className="glass-card rounded-xl p-6 hover:shadow-xl transition-all duration-300">
              <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mb-4">
                <Trophy className="h-8 w-8 text-gold" />
              </div>
              <h3 className="text-xl font-playfair font-bold mb-3">Annual Sports Day 2024</h3>
              <p className="text-muted-foreground mb-4">Our students showcased exceptional talent in athletics, bringing home multiple district championships.</p>
              <div className="text-sm text-primary">March 15, 2024</div>
            </div>

            {/* Science Exhibition */}
            <div className="glass-card rounded-xl p-6 hover:shadow-xl transition-all duration-300">
              <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mb-4">
                <Star className="h-8 w-8 text-gold" />
              </div>
              <h3 className="text-xl font-playfair font-bold mb-3">Science Exhibition</h3>
              <p className="text-muted-foreground mb-4">Students presented innovative projects on renewable energy and artificial intelligence.</p>
              <div className="text-sm text-primary">February 20, 2024</div>
            </div>

            {/* Cultural Fest */}
            <div className="glass-card rounded-xl p-6 hover:shadow-xl transition-all duration-300">
              <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mb-4">
                <Calendar className="h-8 w-8 text-gold" />
              </div>
              <h3 className="text-xl font-playfair font-bold mb-3">Cultural Fest 2024</h3>
              <p className="text-muted-foreground mb-4">A vibrant celebration of arts, music, and cultural diversity with performances by our talented students.</p>
              <div className="text-sm text-primary">January 18, 2024</div>
            </div>

            {/* Academic Excellence Awards */}
            <div className="glass-card rounded-xl p-6 hover:shadow-xl transition-all duration-300">
              <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mb-4">
                <Trophy className="h-8 w-8 text-gold" />
              </div>
              <h3 className="text-xl font-playfair font-bold mb-3">Academic Excellence Awards</h3>
              <p className="text-muted-foreground mb-4">Recognizing outstanding academic achievements in IIT and Medical entrance preparation.</p>
              <div className="text-sm text-primary">December 10, 2023</div>
            </div>

            {/* Inter-School Competition */}
            <div className="glass-card rounded-xl p-6 hover:shadow-xl transition-all duration-300">
              <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mb-4">
                <Star className="h-8 w-8 text-gold" />
              </div>
              <h3 className="text-xl font-playfair font-bold mb-3">Inter-School Debate</h3>
              <p className="text-muted-foreground mb-4">Our debate team won the regional championship, demonstrating exceptional communication skills.</p>
              <div className="text-sm text-primary">November 25, 2023</div>
            </div>

            {/* Community Service */}
            <div className="glass-card rounded-xl p-6 hover:shadow-xl transition-all duration-300">
              <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mb-4">
                <Calendar className="h-8 w-8 text-gold" />
              </div>
              <h3 className="text-xl font-playfair font-bold mb-3">Community Service Day</h3>
              <p className="text-muted-foreground mb-4">Students participated in environmental cleanup and educational outreach programs.</p>
              <div className="text-sm text-primary">October 15, 2023</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Events;