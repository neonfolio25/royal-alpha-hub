import React from "react";
import { Award, Users, BookOpen, Target, Eye, Heart, Star } from "lucide-react";

const About = () => {
  const values = [
    {
      icon: Target,
      title: "Excellence",
      description: "Striving for the highest standards in education and character development"
    },
    {
      icon: Heart,
      title: "Integrity",
      description: "Building trust through honesty, transparency, and ethical practices"
    },
    {
      icon: Users,
      title: "Collaboration",
      description: "Fostering teamwork and mutual respect among students, teachers, and parents"
    },
    {
      icon: Star,
      title: "Innovation",
      description: "Embracing new technologies and methodologies to enhance learning"
    }
  ];

  const milestones = [
    { year: "1995", event: "Alpha High School Established" },
    { year: "2000", event: "First IIT Selection - 5 Students" },
    { year: "2005", event: "Medical Foundation Program Launched" },
    { year: "2010", event: "Digital Classroom Initiative" },
    { year: "2015", event: "100+ IIT Selections Milestone" },
    { year: "2020", event: "Online Learning Platform Launch" },
    { year: "2024", event: "Record 250+ IIT Selections" }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-hero text-white">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-4xl mx-auto animate-fade-in">
            <h1 className="text-5xl md:text-6xl font-playfair font-bold mb-6">
              About Alpha High School
            </h1>
            <p className="text-xl leading-relaxed mb-8">
              For over 28 years, Alpha High School has been a beacon of educational excellence, 
              nurturing young minds and shaping the leaders of tomorrow through innovative teaching 
              and holistic development.
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="glass-card rounded-2xl p-8 animate-slide-up">
              <div className="flex items-center space-x-4 mb-6">
                <div className="w-16 h-16 bg-primary/10 rounded-xl flex items-center justify-center">
                  <Eye className="h-8 w-8 text-primary" />
                </div>
                <h2 className="text-3xl font-playfair font-bold heading-royal">Our Vision</h2>
              </div>
              <p className="text-lg text-muted-foreground leading-relaxed">
                To be the premier educational institution that transforms young minds into confident, 
                capable, and compassionate leaders who contribute positively to society while achieving 
                their personal and professional aspirations.
              </p>
            </div>

            <div className="glass-card rounded-2xl p-8 animate-slide-up" style={{ animationDelay: '0.2s' }}>
              <div className="flex items-center space-x-4 mb-6">
                <div className="w-16 h-16 bg-gold/10 rounded-xl flex items-center justify-center">
                  <Target className="h-8 w-8 text-gold" />
                </div>
                <h2 className="text-3xl font-playfair font-bold heading-royal">Our Mission</h2>
              </div>
              <p className="text-lg text-muted-foreground leading-relaxed">
                To provide world-class education through innovative teaching methodologies, 
                state-of-the-art facilities, and dedicated faculty, while fostering creativity, 
                critical thinking, and character development in every student.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-playfair font-bold heading-royal mb-6">
              Our Core Values
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              The fundamental principles that guide everything we do at Alpha High School
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="glass-card rounded-xl p-6 text-center hover-lift animate-slide-up" style={{ animationDelay: `${index * 0.1}s` }}>
                <div className="w-16 h-16 bg-primary/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <value.icon className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3">{value.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* History Timeline */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-playfair font-bold heading-royal mb-6">
              Our Journey
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Milestones that mark our evolution into a premier educational institution
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="relative">
              {/* Timeline Line */}
              <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-royal rounded-full"></div>

              {milestones.map((milestone, index) => (
                <div key={index} className={`relative flex items-center mb-12 animate-slide-up ${index % 2 === 0 ? 'justify-start' : 'justify-end'}`} style={{ animationDelay: `${index * 0.1}s` }}>
                  <div className={`w-5/12 ${index % 2 === 0 ? 'text-right pr-8' : 'text-left pl-8'}`}>
                    <div className="glass-card rounded-xl p-6">
                      <div className="text-2xl font-bold text-gold mb-2">{milestone.year}</div>
                      <p className="text-foreground font-medium">{milestone.event}</p>
                    </div>
                  </div>
                  
                  {/* Timeline Dot */}
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-6 h-6 bg-gold rounded-full border-4 border-background shadow-lg"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Statistics */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-playfair font-bold text-gold mb-6">
              Excellence in Numbers
            </h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center animate-slide-up">
              <div className="text-4xl md:text-6xl font-bold text-gold mb-2">28+</div>
              <div className="text-primary-foreground/80">Years of Excellence</div>
            </div>
            <div className="text-center animate-slide-up" style={{ animationDelay: '0.1s' }}>
              <div className="text-4xl md:text-6xl font-bold text-gold mb-2">2500+</div>
              <div className="text-primary-foreground/80">Alumni Worldwide</div>
            </div>
            <div className="text-center animate-slide-up" style={{ animationDelay: '0.2s' }}>
              <div className="text-4xl md:text-6xl font-bold text-gold mb-2">98%</div>
              <div className="text-primary-foreground/80">Success Rate</div>
            </div>
            <div className="text-center animate-slide-up" style={{ animationDelay: '0.3s' }}>
              <div className="text-4xl md:text-6xl font-bold text-gold mb-2">150+</div>
              <div className="text-primary-foreground/80">Expert Faculty</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;