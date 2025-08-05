import React from "react";
import { Quote, Award, BookOpen, Users, Heart } from "lucide-react";
import principalPhoto from "@/assets/principal-photo.jpg";

const PrincipalMessage = () => {
  const achievements = [
    "28 years of educational excellence",
    "250+ IIT selections in 2024",
    "180+ medical college admissions",
    "99.2% board exam success rate",
    "National recognition for academic innovation"
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-hero text-white">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-4xl mx-auto animate-fade-in">
            <h1 className="text-5xl md:text-6xl font-playfair font-bold mb-6">
              Principal's Message
            </h1>
            <p className="text-xl leading-relaxed">
              A personal message from our esteemed Principal about our vision, 
              values, and commitment to educational excellence
            </p>
          </div>
        </div>
      </section>

      {/* Principal Info & Message */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
              {/* Principal Photo & Info */}
              <div className="lg:col-span-1 animate-slide-up">
                <div className="glass-card rounded-2xl p-8 text-center">
                  <div className="w-48 h-48 rounded-full mx-auto mb-6 overflow-hidden border-4 border-primary/20">
                    <img 
                      src={principalPhoto} 
                      alt="Dr. Anita Kumari - Principal" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h2 className="text-2xl font-playfair font-bold text-foreground mb-2">
                    Mr.Reteesh T.Nair
                  </h2>
                  <p className="text-gold font-semibold mb-4">Principal</p>
                  <div className="space-y-2 text-sm text-muted-foreground">
                    <p>Ph.D. in Education, Delhi University</p>
                    <p>M.Ed., B.Ed. - First Class with Distinction</p>
                    <p>28+ Years in Educational Leadership</p>
                  </div>

                  {/* Qualifications */}
                  <div className="mt-6 pt-6 border-t border-border">
                    <h3 className="font-semibold text-foreground mb-3">Recognitions</h3>
                    <div className="space-y-2 text-sm">
                      <div className="flex items-center space-x-2">
                        <Award className="h-4 w-4 text-gold" />
                        <span>Best Principal Award 2023</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <BookOpen className="h-4 w-4 text-primary" />
                        <span>Educational Innovation Excellence</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Users className="h-4 w-4 text-success" />
                        <span>Community Leadership Recognition</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Message Content */}
              <div className="lg:col-span-2 animate-slide-up" style={{ animationDelay: '0.2s' }}>
                <div className="glass-card rounded-2xl p-8">
                  <div className="flex items-center space-x-4 mb-6">
                    <div className="w-16 h-16 bg-primary/10 rounded-xl flex items-center justify-center">
                      <Quote className="h-8 w-8 text-primary" />
                    </div>
                    <h2 className="text-3xl font-playfair font-bold heading-royal">
                      A Message of Vision & Purpose
                    </h2>
                  </div>

                  <div className="prose prose-lg max-w-none text-muted-foreground leading-relaxed space-y-6">
                    <p className="text-xl text-foreground font-medium mb-6">
                      "Dear Students, Parents, and Well-wishers,"
                    </p>

                    <p>
                      It brings me immense joy and pride to welcome you to Alpha High School, 
                      an institution that has been at the forefront of educational excellence for over 
                      two decades. As the Principal of this prestigious institution, I am honored to 
                      lead a community of dedicated educators, enthusiastic students, and supportive parents.
                    </p>

                    <p>
                      Our journey began in 1995 with a simple yet powerful vision: to create an educational 
                      environment where every child can discover their potential, pursue their passions, and 
                      prepare for a successful future. Today, as we celebrate our legacy of academic achievements 
                      and character development, I am proud to say that we have stayed true to this founding vision.
                    </p>

                    <p>
                      At Alpha High School, we believe that education is not just about academic excellence, 
                      though we take great pride in our students' outstanding performance in competitive 
                      examinations like IIT JEE and NEET. Our holistic approach to education encompasses 
                      character building, critical thinking, creativity, and compassion - the four pillars 
                      that form the foundation of our educational philosophy.
                    </p>

                    <p>
                      The remarkable achievements of our students - with over 250 IIT selections and 180 
                      medical college admissions this year alone - are a testament to the dedication of our 
                      exceptional faculty and the hard work of our students. However, what truly makes me 
                      proud is watching our alumni become responsible citizens, innovative leaders, and 
                      compassionate human beings who contribute positively to society.
                    </p>

                    <p>
                      As we embrace the future, we continue to evolve and adapt, incorporating cutting-edge 
                      technology and innovative teaching methodologies while preserving the timeless values 
                      of integrity, respect, and perseverance. Our state-of-the-art facilities, experienced 
                      faculty, and comprehensive support systems ensure that every student receives the 
                      guidance and resources they need to succeed.
                    </p>

                    <p className="text-foreground font-medium">
                      I invite you to join our Alpha family, where dreams are nurtured, potential is realized, 
                      and futures are shaped. Together, we will continue to strive for excellence and make a 
                      positive impact on the world.
                    </p>

                    <div className="border-l-4 border-primary pl-6 my-8 bg-primary/5 py-4 rounded-r-xl">
                      <p className="text-foreground font-medium italic">
                        "Education is the most powerful weapon which you can use to change the world. 
                        At Alpha High School, we are committed to empowering every student with this weapon."
                      </p>
                    </div>

                    <div className="text-right mt-8">
                      <p className="text-foreground font-semibold">With warm regards,</p>
                      <p className="text-2xl font-playfair text-gold mt-2">Mr.Reteesh T.Nair</p>
                      <p className="text-muted-foreground">Principal, Alpha High School</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Achievements Highlight */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="glass-card rounded-2xl p-8 animate-fade-in">
              <h3 className="text-2xl font-playfair font-bold text-center text-foreground mb-8">
                Under Principal's Leadership
              </h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {achievements.map((achievement, index) => (
                  <div key={index} className="flex items-center space-x-3 animate-slide-up" style={{ animationDelay: `${index * 0.1}s` }}>
                    <div className="w-2 h-2 bg-gold rounded-full"></div>
                    <span className="text-muted-foreground">{achievement}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PrincipalMessage;
