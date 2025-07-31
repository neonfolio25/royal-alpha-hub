import React from "react";
import { Quote, Target, TrendingUp, Users, Lightbulb } from "lucide-react";

const DirectorMessage = () => {
  const visionPoints = [
    "Global leadership in educational innovation",
    "Technology-integrated learning ecosystem", 
    "Character-based holistic development",
    "Industry-academia collaboration",
    "Sustainable and inclusive education"
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-hero text-white">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-4xl mx-auto animate-fade-in">
            <h1 className="text-5xl md:text-6xl font-playfair font-bold mb-6">
              Director's Message
            </h1>
            <p className="text-xl leading-relaxed">
              Strategic vision and leadership insights from our Director on shaping 
              the future of education at Alpha High School
            </p>
          </div>
        </div>
      </section>

      {/* Director Info & Message */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
              {/* Director Photo & Info */}
              <div className="lg:col-span-1 animate-slide-up">
                <div className="glass-card rounded-2xl p-8 text-center">
                  <div className="w-48 h-48 bg-gradient-to-r from-gold to-gold-light rounded-full mx-auto mb-6 flex items-center justify-center">
                    <span className="text-6xl font-bold text-primary">RS</span>
                  </div>
                  <h2 className="text-2xl font-playfair font-bold text-foreground mb-2">
                    Mr. Rajesh Sharma
                  </h2>
                  <p className="text-gold font-semibold mb-4">Founder & Director</p>
                  <div className="space-y-2 text-sm text-muted-foreground">
                    <p>MBA - Strategic Management, IIM Bangalore</p>
                    <p>B.Tech - Computer Science Engineering</p>
                    <p>30+ Years in Education & Technology</p>
                  </div>

                  {/* Vision Areas */}
                  <div className="mt-6 pt-6 border-t border-border">
                    <h3 className="font-semibold text-foreground mb-3">Focus Areas</h3>
                    <div className="space-y-2 text-sm">
                      <div className="flex items-center space-x-2">
                        <Target className="h-4 w-4 text-gold" />
                        <span>Strategic Vision</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <TrendingUp className="h-4 w-4 text-primary" />
                        <span>Innovation & Growth</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Lightbulb className="h-4 w-4 text-success" />
                        <span>Technology Integration</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Message Content */}
              <div className="lg:col-span-2 animate-slide-up" style={{ animationDelay: '0.2s' }}>
                <div className="glass-card rounded-2xl p-8">
                  <div className="flex items-center space-x-4 mb-6">
                    <div className="w-16 h-16 bg-gold/10 rounded-xl flex items-center justify-center">
                      <Quote className="h-8 w-8 text-gold" />
                    </div>
                    <h2 className="text-3xl font-playfair font-bold heading-royal">
                      Visionary Leadership & Future Focus
                    </h2>
                  </div>

                  <div className="prose prose-lg max-w-none text-muted-foreground leading-relaxed space-y-6">
                    <p className="text-xl text-foreground font-medium mb-6">
                      "Dear Alpha High School Community,"
                    </p>

                    <p>
                      When I established Alpha High School in 1995, it was with a dream to create 
                      an educational institution that would not just impart knowledge, but transform 
                      lives and shape the leaders of tomorrow. Today, as I reflect on our remarkable 
                      journey spanning nearly three decades, I am filled with immense pride and 
                      gratitude for what we have achieved together.
                    </p>

                    <p>
                      Our vision has always been clear: to build an institution that combines academic 
                      rigor with character development, traditional values with modern innovation, and 
                      local relevance with global perspective. This holistic approach has enabled us 
                      to produce not just successful professionals, but responsible citizens who are 
                      making their mark across the world.
                    </p>

                    <p>
                      The phenomenal growth we have witnessed - from a modest beginning to becoming 
                      one of the most respected educational institutions in the region - is a testament 
                      to our unwavering commitment to excellence. Our students' achievements in IIT JEE, 
                      NEET, and other competitive examinations are certainly noteworthy, but what truly 
                      defines our success is the values they carry and the positive impact they create 
                      in their chosen fields.
                    </p>

                    <p>
                      As we stand at the threshold of a new era marked by rapid technological advancement 
                      and changing global dynamics, I am excited about the opportunities that lie ahead. 
                      We are continuously investing in cutting-edge infrastructure, adopting innovative 
                      teaching methodologies, and building strategic partnerships to ensure our students 
                      are well-prepared for the challenges of the 21st century.
                    </p>

                    <p>
                      Our commitment to excellence extends beyond academics. We believe in nurturing 
                      well-rounded individuals who possess not only intellectual capabilities but also 
                      emotional intelligence, creative thinking, and social responsibility. Our comprehensive 
                      co-curricular programs, community service initiatives, and leadership development 
                      activities are designed to foster these essential qualities.
                    </p>

                    <p>
                      I am particularly proud of our dedicated faculty members who bring passion, 
                      expertise, and innovation to the classroom every day. Their commitment to student 
                      success and their continuous pursuit of professional development have been 
                      instrumental in maintaining our high standards of education.
                    </p>

                    <p className="text-foreground font-medium">
                      As we look to the future, our mission remains unchanged: to provide world-class 
                      education that empowers students to achieve their dreams while contributing 
                      meaningfully to society. Together, we will continue to set new benchmarks of 
                      excellence and create a legacy that future generations will be proud of.
                    </p>

                    <div className="border-l-4 border-gold pl-6 my-8 bg-gold/5 py-4 rounded-r-xl">
                      <p className="text-foreground font-medium italic">
                        "Success is not just about what you accomplish in your life, it's about what 
                        you inspire others to do. At Alpha High School, we inspire excellence in every student."
                      </p>
                    </div>

                    <div className="text-right mt-8">
                      <p className="text-foreground font-semibold">Best wishes for your success,</p>
                      <p className="text-2xl font-playfair text-gold mt-2">Rajesh Sharma</p>
                      <p className="text-muted-foreground">Founder & Director, Alpha High School</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Vision 2030 */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center animate-fade-in">
            <h3 className="text-3xl font-playfair font-bold text-gold mb-8">
              Vision 2030: Building Tomorrow Today
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {visionPoints.map((point, index) => (
                <div key={index} className="glass-card rounded-xl p-6 text-center animate-slide-up" style={{ animationDelay: `${index * 0.1}s` }}>
                  <div className="w-12 h-12 bg-gold/20 rounded-xl flex items-center justify-center mx-auto mb-4">
                    <div className="w-3 h-3 bg-gold rounded-full"></div>
                  </div>
                  <p className="text-primary-foreground font-medium">{point}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default DirectorMessage;