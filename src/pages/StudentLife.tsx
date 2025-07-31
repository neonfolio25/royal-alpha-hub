import React from "react";
import { Users, Trophy, Music, Palette, Globe, Heart, Star, Camera } from "lucide-react";

const StudentLife = () => {
  const activities = [
    {
      icon: Trophy,
      title: "Sports & Athletics",
      description: "Comprehensive sports program including cricket, football, basketball, athletics, and indoor games",
      highlights: ["State level championships", "Professional coaching", "Modern sports facilities", "Inter-school competitions"]
    },
    {
      icon: Music,
      title: "Music & Dance",
      description: "Cultural programs fostering artistic expression through music, dance, and performing arts",
      highlights: ["Annual cultural fest", "Music competitions", "Dance performances", "Talent showcases"]
    },
    {
      icon: Palette,
      title: "Arts & Crafts",
      description: "Creative workshops and art programs to develop artistic skills and creative thinking",
      highlights: ["Art exhibitions", "Craft workshops", "Drawing competitions", "Creative projects"]
    },
    {
      icon: Globe,
      title: "Science Club",
      description: "Hands-on science activities, experiments, and innovation projects for curious minds",
      highlights: ["Science exhibitions", "Innovation projects", "Lab experiments", "Research activities"]
    },
    {
      icon: Users,
      title: "Leadership Programs",
      description: "Student council, leadership workshops, and community service initiatives",
      highlights: ["Student government", "Leadership training", "Community service", "Social initiatives"]
    },
    {
      icon: Heart,
      title: "Community Service",
      description: "Social responsibility programs and community outreach activities",
      highlights: ["NGO partnerships", "Volunteer programs", "Social awareness", "Charity drives"]
    }
  ];

  const clubs = [
    {
      name: "Debate & MUN",
      members: "45+",
      description: "Developing communication and critical thinking skills",
      color: "bg-blue-500"
    },
    {
      name: "Environmental Club",
      members: "60+", 
      description: "Promoting sustainability and environmental awareness",
      color: "bg-green-500"
    },
    {
      name: "Photography Club",
      members: "35+",
      description: "Capturing memories and developing visual storytelling",
      color: "bg-purple-500"
    },
    {
      name: "Drama Society",
      members: "40+",
      description: "Theatre arts and dramatic performances",
      color: "bg-red-500"
    },
    {
      name: "Technology Club",
      members: "50+",
      description: "Coding, robotics, and technology innovation",
      color: "bg-indigo-500"
    },
    {
      name: "Literary Society",
      members: "30+",
      description: "Creative writing and literature appreciation",
      color: "bg-yellow-500"
    }
  ];

  const events = [
    {
      title: "Annual Cultural Festival",
      date: "December 2024",
      description: "Three-day celebration of arts, culture, and talent showcase"
    },
    {
      title: "Sports Championship",
      date: "February 2025", 
      description: "Inter-house sports competition with various athletic events"
    },
    {
      title: "Science Exhibition",
      date: "March 2025",
      description: "Student research projects and innovative science demonstrations"
    },
    {
      title: "Leadership Summit", 
      date: "April 2025",
      description: "Student leadership development and community service awards"
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-hero text-white">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-4xl mx-auto animate-fade-in">
            <h1 className="text-5xl md:text-6xl font-playfair font-bold mb-6">
              Student Life & Co-Curriculars
            </h1>
            <p className="text-xl leading-relaxed">
              Beyond academics, we nurture well-rounded individuals through diverse 
              co-curricular activities, sports, arts, and leadership programs
            </p>
          </div>
        </div>
      </section>

      {/* Activities Overview */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-playfair font-bold heading-royal mb-6">
              Co-Curricular Activities
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Comprehensive programs designed to develop talents, build character, and foster creativity
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {activities.map((activity, index) => (
              <div key={index} className="glass-card rounded-2xl p-8 hover-lift animate-slide-up" style={{ animationDelay: `${index * 0.1}s` }}>
                <div className="flex items-center space-x-4 mb-6">
                  <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center">
                    <activity.icon className="h-7 w-7 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground">{activity.title}</h3>
                </div>
                
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {activity.description}
                </p>

                <div className="space-y-2">
                  {activity.highlights.map((highlight, idx) => (
                    <div key={idx} className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-gold rounded-full"></div>
                      <span className="text-sm text-muted-foreground">{highlight}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Student Clubs */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-playfair font-bold heading-royal mb-6">
              Student Clubs & Societies
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Join like-minded peers in pursuing your passions and developing new skills
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {clubs.map((club, index) => (
              <div key={index} className="glass-card rounded-xl p-6 hover-lift animate-slide-up" style={{ animationDelay: `${index * 0.1}s` }}>
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-lg font-semibold text-foreground">{club.name}</h3>
                  <div className={`px-3 py-1 rounded-full text-white text-sm font-medium ${club.color}`}>
                    {club.members}
                  </div>
                </div>
                <p className="text-muted-foreground text-sm leading-relaxed">{club.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Upcoming Events */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-playfair font-bold heading-royal mb-6">
              Upcoming Events
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Mark your calendars for these exciting events and celebrations
            </p>
          </div>

          <div className="max-w-4xl mx-auto space-y-6">
            {events.map((event, index) => (
              <div key={index} className="glass-card rounded-xl p-6 hover-lift animate-slide-up" style={{ animationDelay: `${index * 0.1}s` }}>
                <div className="flex flex-col md:flex-row md:items-center justify-between">
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-foreground mb-2">{event.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">{event.description}</p>
                  </div>
                  <div className="mt-4 md:mt-0 md:ml-6">
                    <div className="bg-primary/10 text-primary px-4 py-2 rounded-lg font-semibold text-sm">
                      {event.date}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Student Achievements */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-playfair font-bold text-gold mb-6">
              Student Achievements
            </h2>
            <p className="text-xl text-primary-foreground/90 max-w-3xl mx-auto">
              Celebrating our students' remarkable achievements in various fields
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center animate-slide-up">
              <div className="text-4xl md:text-6xl font-bold text-gold mb-2">25+</div>
              <div className="text-primary-foreground/80">State Championships</div>
            </div>
            <div className="text-center animate-slide-up" style={{ animationDelay: '0.1s' }}>
              <div className="text-4xl md:text-6xl font-bold text-gold mb-2">15+</div>
              <div className="text-primary-foreground/80">National Awards</div>
            </div>
            <div className="text-center animate-slide-up" style={{ animationDelay: '0.2s' }}>
              <div className="text-4xl md:text-6xl font-bold text-gold mb-2">500+</div>
              <div className="text-primary-foreground/80">Cultural Performances</div>
            </div>
            <div className="text-center animate-slide-up" style={{ animationDelay: '0.3s' }}>
              <div className="text-4xl md:text-6xl font-bold text-gold mb-2">95%</div>
              <div className="text-primary-foreground/80">Student Participation</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default StudentLife;