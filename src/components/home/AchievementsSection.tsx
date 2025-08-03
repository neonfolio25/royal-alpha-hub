import React from "react";
import { Trophy, Medal, Award, Star, TrendingUp, Users } from "lucide-react";

const AchievementsSection: React.FC = () => {
  const achievements = [
    {
      icon: Trophy,
      title: "IIT JEE Success",
      description: "250+ students qualified for prestigious IIT institutions",
      stats: "Top 5%",
      color: "text-gold"
    },
    {
      icon: Medal,
      title: "NEET Achievements",
      description: "180+ medical seats secured in government colleges",
      stats: "98% Success",
      color: "text-primary"
    },
    {
      icon: Award,
      title: "Academic Excellence",
      description: "Consistently ranked among top schools in the state",
      stats: "#1 Ranking",
      color: "text-success"
    },
    {
      icon: Star,
      title: "Board Results",
      description: "99.2% pass rate in State Board examinations",
      stats: "99.2%",
      color: "text-warning"
    },
    {
      icon: TrendingUp,
      title: "Alumni Success",
      description: "2500+ successful alumni in various fields worldwide",
      stats: "2500+",
      color: "text-info"
    },
    {
      icon: Users,
      title: "Faculty Excellence",
      description: "150+ experienced educators with proven expertise",
      stats: "150+",
      color: "text-primary-light"
    }
  ];

  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in">
          <span className="inline-block px-6 py-2 bg-gold/10 text-gold rounded-full font-semibold mb-4">
            Our Pride
          </span>
          <h2 className="text-4xl md:text-5xl font-playfair font-bold heading-royal mb-6">
            Achievements & Recognition
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Celebrating our legacy of excellence with outstanding achievements and recognition in academics and beyond
          </p>
        </div>

        {/* Achievements Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {achievements.map((achievement, index) => (
            <div 
              key={index} 
              className="achievements-card animate-slide-up hover-glow" 
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex items-start space-x-4">
                <div className={`w-12 h-12 rounded-xl bg-gradient-to-r from-primary/10 to-gold/10 flex items-center justify-center ${achievement.color}`}>
                  <achievement.icon className="h-6 w-6" />
                </div>
                <div className="flex-1">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="font-semibold text-lg text-foreground">
                      {achievement.title}
                    </h3>
                    <span className={`font-bold text-sm ${achievement.color}`}>
                      {achievement.stats}
                    </span>
                  </div>
                  <p className="text-muted-foreground leading-relaxed">
                    {achievement.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Statistics Bar */}
        <div className="glass-card rounded-2xl p-8 animate-fade-in">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-gold mb-2 font-playfair">28+</div>
              <div className="text-muted-foreground">Years of Excellence</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-primary mb-2 font-playfair">2500+</div>
              <div className="text-muted-foreground">Alumni Success Stories</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-success mb-2 font-playfair">98%</div>
              <div className="text-muted-foreground">Success Rate</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-warning mb-2 font-playfair">150+</div>
              <div className="text-muted-foreground">Expert Faculty</div>
            </div>
          </div>
          
          {/* Branch Information */}
          <div className="border-t border-border/50 pt-8">
            <h3 className="text-xl font-semibold text-center mb-6 text-foreground">Our Branches</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="text-center group">
                <div className="relative mb-4 overflow-hidden rounded-xl">
                  <img 
                    src="https://images.unsplash.com/photo-1527576539890-dfa815648363?auto=format&fit=crop&w=400&h=250" 
                    alt="Cumbum Branch" 
                    className="w-full h-32 object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                </div>
                <div className="text-3xl font-bold text-primary mb-2 font-playfair">3</div>
                <div className="text-muted-foreground font-medium">Cumbum</div>
              </div>
              <div className="text-center group">
                <div className="relative mb-4 overflow-hidden rounded-xl">
                  <img 
                    src="https://images.unsplash.com/photo-1488972685288-c3fd157d7c7a?auto=format&fit=crop&w=400&h=250" 
                    alt="Bestavaripeta Branch" 
                    className="w-full h-32 object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                </div>
                <div className="text-3xl font-bold text-success mb-2 font-playfair">1</div>
                <div className="text-muted-foreground font-medium">Bestavaripeta</div>
              </div>
              <div className="text-center group">
                <div className="relative mb-4 overflow-hidden rounded-xl">
                  <img 
                    src="https://images.unsplash.com/photo-1487958449943-2429e8be8625?auto=format&fit=crop&w=400&h=250" 
                    alt="Podili Branch" 
                    className="w-full h-32 object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                </div>
                <div className="text-3xl font-bold text-warning mb-2 font-playfair">1</div>
                <div className="text-muted-foreground font-medium">Podili</div>
              </div>
              <div className="text-center group">
                <div className="relative mb-4 overflow-hidden rounded-xl">
                  <img 
                    src="https://images.unsplash.com/photo-1524230572899-a752b3835840?auto=format&fit=crop&w=400&h=250" 
                    alt="Kanigiri Branch" 
                    className="w-full h-32 object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                </div>
                <div className="text-3xl font-bold text-gold mb-2 font-playfair">1</div>
                <div className="text-muted-foreground font-medium">Kanigiri</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AchievementsSection;