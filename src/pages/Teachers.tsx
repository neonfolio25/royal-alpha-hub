import React from "react";
import { Award, BookOpen, Users, Star } from "lucide-react";

const Teachers = () => {
  const teachers = [
    {
      name: "Dr. Priya Sharma",
      subject: "Mathematics",
      experience: "15+ Years",
      qualifications: "Ph.D. Mathematics, IIT Delhi",
      achievements: "Author of 3 textbooks"
    },
    {
      name: "Prof. Rajesh Kumar", 
      subject: "Physics",
      experience: "12+ Years",
      qualifications: "M.Sc. Physics, University of Delhi",
      achievements: "National Science Award"
    },
    {
      name: "Dr. Meera Patel",
      subject: "Chemistry", 
      experience: "18+ Years",
      qualifications: "Ph.D. Chemistry, Mumbai University",
      achievements: "Research publications: 25+"
    }
  ];

  return (
    <div className="min-h-screen">
      <section className="py-20 bg-gradient-hero text-white">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-playfair font-bold mb-6">Our Faculty</h1>
          <p className="text-xl">Meet our dedicated team of expert educators</p>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {teachers.map((teacher, index) => (
              <div key={index} className="glass-card rounded-xl p-6 text-center">
                <div className="w-24 h-24 bg-primary rounded-full mx-auto mb-4 flex items-center justify-center">
                  <span className="text-2xl font-bold text-white">{teacher.name.split(' ').map(n => n[0]).join('')}</span>
                </div>
                <h3 className="text-xl font-semibold mb-2">{teacher.name}</h3>
                <p className="text-primary font-medium">{teacher.subject}</p>
                <p className="text-muted-foreground text-sm">{teacher.experience}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Teachers;