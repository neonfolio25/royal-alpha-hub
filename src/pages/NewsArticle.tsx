import React from "react";
import { useParams, Link } from "react-router-dom";
import { Calendar, Clock, ArrowLeft, Share } from "lucide-react";
import { EnhancedButton } from "@/components/ui/enhanced-button";

const NewsArticle = () => {
  const { id } = useParams();

  const articles = {
    "1": {
      title: "IIT Selections 2024: Record Breaking Results",
      content: `Alpha High School has achieved unprecedented success in the IIT JEE Advanced 2024 examinations, with 85 of our students qualifying for admission to the prestigious Indian Institutes of Technology. This remarkable achievement represents a 40% increase from last year's results and positions Alpha High School as one of the leading educational institutions in the region.

Our comprehensive IIT Foundation program, launched in 2018, has been instrumental in this success. The program combines rigorous academic training with innovative teaching methodologies, personalized mentoring, and regular assessment to ensure students are well-prepared for the competitive examinations.

Key highlights of our IIT JEE Advanced 2024 results:
- 85 students qualified for IIT admission
- 15 students secured ranks under 1000
- 5 students achieved ranks under 100
- Overall pass percentage: 78%

The success can be attributed to our dedicated faculty, state-of-the-art facilities, and most importantly, the hard work and dedication of our students. Our faculty members, many of whom are IIT alumni themselves, bring real-world experience and deep subject knowledge to the classroom.

We are proud of all our students who have worked tirelessly to achieve these results. This success reinforces our commitment to providing quality education and nurturing future engineers and innovators.`,
      date: "2024-07-15",
      time: "10:30 AM",
      category: "Achievement",
      author: "Dr. Rajesh Kumar, Principal"
    },
    "2": {
      title: "New Science Laboratory Inauguration",
      content: `Alpha High School proudly announces the inauguration of our new state-of-the-art science laboratories, designed to enhance the learning experience for our students in physics, chemistry, and biology. The new facilities represent a significant investment in educational infrastructure and demonstrate our commitment to providing world-class learning environments.

The new laboratories feature:
- Advanced physics lab with modern equipment for experiments in mechanics, optics, and electronics
- Chemistry lab with fume hoods, digital balances, and safety equipment
- Biology lab with microscopes, specimens, and interactive learning tools
- Computer-integrated data collection systems
- Smart boards for digital presentations and analysis

These facilities will enable our students to conduct hands-on experiments, develop practical skills, and gain deeper understanding of scientific concepts. The laboratories are designed with safety as the top priority, featuring emergency safety equipment, proper ventilation, and trained laboratory assistants.

The inauguration ceremony was attended by distinguished guests including local education officials, parent representatives, and faculty members. Students demonstrated various experiments to showcase the capabilities of the new facilities.

This investment in infrastructure is part of our ongoing commitment to excellence in education and preparing students for success in competitive examinations and future careers in science and technology.`,
      date: "2024-07-10",
      time: "2:00 PM",
      category: "Infrastructure",
      author: "Mrs. Priya Sharma, Vice Principal"
    }
  };

  const article = articles[id as keyof typeof articles];

  if (!article) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Article Not Found</h1>
          <Link to="/" className="text-primary hover:underline">Return to Home</Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen py-20">
      <div className="container mx-auto px-4 max-w-4xl">
        {/* Back Button */}
        <div className="mb-8">
          <Link to="/" className="inline-flex items-center text-primary hover:text-primary-light transition-colors">
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Home
          </Link>
        </div>

        {/* Article Header */}
        <div className="glass-card rounded-xl p-8 mb-8">
          <div className="flex items-center space-x-4 text-sm text-muted-foreground mb-4">
            <span className="bg-primary/10 text-primary px-3 py-1 rounded-full font-medium">
              {article.category}
            </span>
            <div className="flex items-center space-x-1">
              <Calendar className="h-4 w-4" />
              <span>{new Date(article.date).toLocaleDateString('en-IN', {
                day: 'numeric',
                month: 'long',
                year: 'numeric'
              })}</span>
            </div>
            <div className="flex items-center space-x-1">
              <Clock className="h-4 w-4" />
              <span>{article.time}</span>
            </div>
          </div>

          <h1 className="text-3xl md:text-4xl font-playfair font-bold mb-4">
            {article.title}
          </h1>

          <div className="flex items-center justify-between">
            <p className="text-muted-foreground">By {article.author}</p>
            <EnhancedButton variant="outline" size="sm">
              <Share className="h-4 w-4 mr-2" />
              Share
            </EnhancedButton>
          </div>
        </div>

        {/* Article Content */}
        <div className="glass-card rounded-xl p-8">
          <div className="prose prose-lg max-w-none">
            {article.content.split('\n\n').map((paragraph, index) => (
              <p key={index} className="mb-6 text-foreground leading-relaxed">
                {paragraph}
              </p>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsArticle;