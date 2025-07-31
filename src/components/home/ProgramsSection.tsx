import React from "react";
import { BookOpen, Calculator, Microscope, Globe, Users, Clock, ArrowRight } from "lucide-react";
import { EnhancedButton } from "@/components/ui/enhanced-button";

const ProgramsSection: React.FC = () => {
  const programs = [
    {
      icon: Calculator,
      title: "IIT Foundation Program",
      description: "Comprehensive JEE Main & Advanced preparation with expert faculty and proven methodology.",
      features: ["Mathematics Mastery", "Physics Excellence", "Chemistry Concepts", "Problem Solving"],
      duration: "2 Years",
      success: "250+ IIT Selections",
      color: "from-blue-500 to-blue-600",
      highlight: "Most Popular"
    },
    {
      icon: Microscope,
      title: "Medical Foundation",
      description: "Dedicated NEET preparation program with focus on Biology, Chemistry and Physics.",
      features: ["Biology Intensive", "Chemistry Focus", "Physics Concepts", "Mock Tests"],
      duration: "2 Years",
      success: "180+ Medical Seats",
      color: "from-green-500 to-green-600",
      highlight: "High Success Rate"
    },
    {
      icon: BookOpen,
      title: "State Board Excellence",
      description: "Complete State Board curriculum with emphasis on conceptual clarity and application.",
      features: ["All Subjects", "Regular Assessment", "Doubt Clearing", "Exam Preparation"],
      duration: "Ongoing",
      success: "99.2% Pass Rate",
      color: "from-purple-500 to-purple-600",
      highlight: "Board Toppers"
    }
  ];

  const features = [
    {
      icon: Users,
      title: "Expert Faculty",
      description: "Experienced teachers with proven track record in competitive exam preparation"
    },
    {
      icon: Clock,
      title: "Flexible Timings",
      description: "Multiple batch timings to accommodate different student schedules"
    },
    {
      icon: Globe,
      title: "Digital Learning",
      description: "Modern digital tools and online resources for enhanced learning experience"
    },
    {
      icon: BookOpen,
      title: "Study Material",
      description: "Comprehensive study materials and practice tests designed by experts"
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in">
          <span className="inline-block px-6 py-2 bg-primary/10 text-primary rounded-full font-semibold mb-4">
            Academic Excellence
          </span>
          <h2 className="text-4xl md:text-5xl font-playfair font-bold heading-royal mb-6">
            Our Foundation Programs
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Designed to nurture young minds and prepare them for success in competitive examinations and beyond
          </p>
        </div>

        {/* Programs Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {programs.map((program, index) => (
            <div 
              key={index} 
              className="glass-card hover-lift rounded-2xl overflow-hidden animate-slide-up" 
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Program Header */}
              <div className={`bg-gradient-to-r ${program.color} p-6 text-white relative overflow-hidden`}>
                {program.highlight && (
                  <div className="absolute top-4 right-4 bg-white/20 backdrop-blur-xl px-3 py-1 rounded-full text-xs font-semibold">
                    {program.highlight}
                  </div>
                )}
                <div className="flex items-center space-x-4 mb-4">
                  <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center">
                    <program.icon className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold">{program.title}</h3>
                    <p className="text-white/80 text-sm">{program.duration}</p>
                  </div>
                </div>
                <p className="text-white/90 leading-relaxed">{program.description}</p>
              </div>

              {/* Program Content */}
              <div className="p-6">
                {/* Features */}
                <div className="mb-6">
                  <h4 className="font-semibold text-foreground mb-3">Program Features</h4>
                  <div className="grid grid-cols-2 gap-2">
                    {program.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center space-x-2 text-sm">
                        <div className="w-2 h-2 bg-primary rounded-full"></div>
                        <span className="text-muted-foreground">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Success Stats */}
                <div className="bg-muted/30 rounded-xl p-4 mb-6">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-primary mb-1">{program.success}</div>
                    <div className="text-sm text-muted-foreground">Success Stories</div>
                  </div>
                </div>

                {/* CTA */}
                <EnhancedButton variant="outline" className="w-full group">
                  Learn More
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </EnhancedButton>
              </div>
            </div>
          ))}
        </div>

        {/* Additional Features */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="glass-card rounded-xl p-6 text-center hover-lift animate-slide-up" 
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                <feature.icon className="h-6 w-6 text-primary" />
              </div>
              <h4 className="font-semibold text-foreground mb-2">{feature.title}</h4>
              <p className="text-sm text-muted-foreground leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="glass-card rounded-2xl p-8 text-center animate-fade-in">
          <h3 className="text-2xl font-playfair font-bold text-foreground mb-4">
            Ready to Begin Your Success Journey?
          </h3>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            Join thousands of successful students who have achieved their dreams with Alpha High School's proven foundation programs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <EnhancedButton variant="royal" size="lg">
              Apply Now
            </EnhancedButton>
            <EnhancedButton variant="glass" size="lg">
              Schedule Visit
            </EnhancedButton>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProgramsSection;