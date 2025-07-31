import React, { useState } from "react";
import { Calculator, Microscope, BookOpen, Award, Clock, Users, Target, TrendingUp } from "lucide-react";
import { EnhancedButton } from "@/components/ui/enhanced-button";

const Academics = () => {
  const [activeProgram, setActiveProgram] = useState("iit");

  const programs = {
    iit: {
      title: "IIT Foundation Program",
      icon: Calculator,
      description: "Comprehensive JEE Main & Advanced preparation with proven track record",
      duration: "2 Years (Classes 11-12)",
      subjects: ["Advanced Mathematics", "Physics Mastery", "Chemistry Concepts", "Problem Solving"],
      features: [
        "Small batch sizes (25-30 students)",
        "Regular mock tests and assessments",
        "Individual doubt clearing sessions",
        "Performance tracking and analysis",
        "Parent-teacher interaction",
        "Study material and online resources"
      ],
      results: {
        selections: "250+",
        topRank: "AIR 15",
        success: "98%"
      }
    },
    medical: {
      title: "Medical Foundation Program", 
      icon: Microscope,
      description: "Dedicated NEET preparation with focus on Biology, Chemistry and Physics",
      duration: "2 Years (Classes 11-12)",
      subjects: ["Biology Excellence", "Chemistry Mastery", "Physics Applications", "Medical Aptitude"],
      features: [
        "Biology lab with advanced equipment",
        "Regular NEET pattern tests",
        "Medical entrance guidance",
        "Hospital visit programs",
        "Guest lectures by doctors",
        "Comprehensive study material"
      ],
      results: {
        selections: "180+",
        topRank: "AIR 45",
        success: "96%"
      }
    },
    board: {
      title: "State Board Excellence",
      icon: BookOpen, 
      description: "Complete State Board curriculum with emphasis on conceptual clarity",
      duration: "Classes 9-12",
      subjects: ["All Core Subjects", "Language Skills", "Arts & Humanities", "Computer Applications"],
      features: [
        "Experienced subject teachers",
        "Regular chapter tests",
        "Board exam preparation",
        "Project work guidance",
        "Skill development programs",
        "Holistic development focus"
      ],
      results: {
        selections: "99.2%",
        topRank: "State 1st",
        success: "100%"
      }
    }
  };

  const facilities = [
    {
      icon: BookOpen,
      title: "Digital Library",
      description: "Extensive collection of books, journals, and digital resources"
    },
    {
      icon: Microscope,
      title: "Advanced Labs",
      description: "State-of-the-art physics, chemistry, and biology laboratories"
    },
    {
      icon: Calculator,
      title: "Math Lab",
      description: "Interactive mathematics learning with modern tools and software"
    },
    {
      icon: Users,
      title: "Smart Classrooms",
      description: "Technology-enabled classrooms with interactive displays"
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-hero text-white">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-4xl mx-auto animate-fade-in">
            <h1 className="text-5xl md:text-6xl font-playfair font-bold mb-6">
              Academic Programs
            </h1>
            <p className="text-xl leading-relaxed">
              Comprehensive foundation programs designed to nurture academic excellence 
              and prepare students for competitive examinations and successful careers
            </p>
          </div>
        </div>
      </section>

      {/* Program Selection */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          {/* Program Tabs */}
          <div className="flex justify-center mb-16 animate-fade-in">
            <div className="glass-card p-2 rounded-2xl">
              <div className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-2">
                {Object.entries(programs).map(([key, program]) => (
                  <button
                    key={key}
                    onClick={() => setActiveProgram(key)}
                    className={`px-6 py-3 rounded-xl font-semibold transition-all duration-300 flex items-center space-x-2 ${
                      activeProgram === key
                        ? "bg-primary text-primary-foreground shadow-royal"
                        : "text-foreground hover:bg-primary/10"
                    }`}
                  >
                    <program.icon className="h-5 w-5" />
                    <span className="hidden sm:inline">{program.title}</span>
                    <span className="sm:hidden">{key.toUpperCase()}</span>
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Active Program Details */}
          <div className="max-w-6xl mx-auto">
            {Object.entries(programs).map(([key, program]) => (
              activeProgram === key && (
                <div key={key} className="animate-fade-in">
                  <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {/* Program Overview */}
                    <div className="lg:col-span-2">
                      <div className="glass-card rounded-2xl p-8 mb-8">
                        <div className="flex items-center space-x-4 mb-6">
                          <div className="w-16 h-16 bg-primary/10 rounded-xl flex items-center justify-center">
                            <program.icon className="h-8 w-8 text-primary" />
                          </div>
                          <div>
                            <h2 className="text-3xl font-playfair font-bold text-foreground">
                              {program.title}
                            </h2>
                            <p className="text-muted-foreground">{program.duration}</p>
                          </div>
                        </div>
                        
                        <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                          {program.description}
                        </p>

                        {/* Subjects */}
                        <div className="mb-6">
                          <h3 className="text-xl font-semibold text-foreground mb-4">Core Subjects</h3>
                          <div className="grid grid-cols-2 gap-3">
                            {program.subjects.map((subject, index) => (
                              <div key={index} className="flex items-center space-x-2">
                                <div className="w-2 h-2 bg-primary rounded-full"></div>
                                <span className="text-muted-foreground">{subject}</span>
                              </div>
                            ))}
                          </div>
                        </div>

                        {/* Features */}
                        <div>
                          <h3 className="text-xl font-semibold text-foreground mb-4">Program Features</h3>
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                            {program.features.map((feature, index) => (
                              <div key={index} className="flex items-center space-x-2">
                                <div className="w-2 h-2 bg-gold rounded-full"></div>
                                <span className="text-muted-foreground text-sm">{feature}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Results & Stats */}
                    <div className="space-y-6">
                      <div className="glass-card rounded-xl p-6">
                        <h3 className="text-xl font-semibold text-foreground mb-4">2024 Results</h3>
                        <div className="space-y-4">
                          <div className="text-center">
                            <div className="text-3xl font-bold text-primary mb-1">
                              {program.results.selections}
                            </div>
                            <div className="text-sm text-muted-foreground">Selections</div>
                          </div>
                          <div className="text-center">
                            <div className="text-2xl font-bold text-gold mb-1">
                              {program.results.topRank}
                            </div>
                            <div className="text-sm text-muted-foreground">Top Rank</div>
                          </div>
                          <div className="text-center">
                            <div className="text-2xl font-bold text-success mb-1">
                              {program.results.success}
                            </div>
                            <div className="text-sm text-muted-foreground">Success Rate</div>
                          </div>
                        </div>
                      </div>

                      <div className="glass-card rounded-xl p-6">
                        <h3 className="text-lg font-semibold text-foreground mb-4">Program Highlights</h3>
                        <div className="space-y-3">
                          <div className="flex items-center space-x-3">
                            <Clock className="h-5 w-5 text-primary" />
                            <span className="text-sm text-muted-foreground">Flexible timing options</span>
                          </div>
                          <div className="flex items-center space-x-3">
                            <Users className="h-5 w-5 text-gold" />
                            <span className="text-sm text-muted-foreground">Expert faculty team</span>
                          </div>
                          <div className="flex items-center space-x-3">
                            <Target className="h-5 w-5 text-success" />
                            <span className="text-sm text-muted-foreground">Goal-oriented approach</span>
                          </div>
                          <div className="flex items-center space-x-3">
                            <TrendingUp className="h-5 w-5 text-info" />
                            <span className="text-sm text-muted-foreground">Proven track record</span>
                          </div>
                        </div>
                      </div>

                      <EnhancedButton variant="royal" className="w-full">
                        Enroll Now
                      </EnhancedButton>
                    </div>
                  </div>
                </div>
              )
            ))}
          </div>
        </div>
      </section>

      {/* Academic Facilities */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-playfair font-bold heading-royal mb-6">
              Academic Facilities
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              World-class infrastructure and modern facilities to enhance the learning experience
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {facilities.map((facility, index) => (
              <div key={index} className="glass-card rounded-xl p-6 text-center hover-lift animate-slide-up" style={{ animationDelay: `${index * 0.1}s` }}>
                <div className="w-16 h-16 bg-primary/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <facility.icon className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3">{facility.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{facility.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Academics;