import React from "react";
import { Link } from "react-router-dom";
import { Calendar, Clock, ArrowRight, ArrowLeft } from "lucide-react";
import { EnhancedButton } from "@/components/ui/enhanced-button";

const AllNews = () => {
  const newsItems = [
    {
      id: 1,
      title: "IIT Selections 2024: Record Breaking Results",
      excerpt: "Alpha High School achieves unprecedented success with 85 students qualifying for IIT JEE Advanced 2024.",
      date: "2024-07-15",
      time: "10:30 AM",
      category: "Achievement"
    },
    {
      id: 2,
      title: "New Science Laboratory Inauguration",
      excerpt: "State-of-the-art physics and chemistry labs equipped with advanced equipment for enhanced learning.",
      date: "2024-07-10",
      time: "2:00 PM",
      category: "Infrastructure"
    },
    {
      id: 3,
      title: "Annual Sports Day 2024 - Registrations Open",
      excerpt: "Join us for the most exciting sports extravaganza featuring various athletic competitions and cultural events.",
      date: "2024-07-05",
      time: "9:15 AM",
      category: "Events"
    },
    {
      id: 4,
      title: "Parent-Teacher Conference Scheduled",
      excerpt: "Important meeting to discuss student progress and upcoming academic plans for the new semester.",
      date: "2024-07-01",
      time: "4:00 PM",
      category: "Academic"
    },
    {
      id: 5,
      title: "Academic Excellence Awards Ceremony",
      excerpt: "Recognizing outstanding achievements of our students in various academic competitions and examinations.",
      date: "2024-06-25",
      time: "11:00 AM",
      category: "Achievement"
    },
    {
      id: 6,
      title: "Summer Vacation Guidelines",
      excerpt: "Important information regarding summer vacation homework, reading assignments, and safety guidelines.",
      date: "2024-06-20",
      time: "3:30 PM",
      category: "Academic"
    }
  ];

  return (
    <div className="min-h-screen py-20">
      <div className="container mx-auto px-4">
        {/* Back Button */}
        <div className="mb-8">
          <Link to="/" className="inline-flex items-center text-primary hover:text-primary-light transition-colors">
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Home
          </Link>
        </div>

        {/* Page Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-playfair font-bold heading-royal mb-6">
            All News
          </h1>
          <p className="text-xl text-muted-foreground">
            Stay updated with the latest news and announcements from Alpha High School
          </p>
        </div>

        {/* News Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {newsItems.map((news, index) => (
            <div key={news.id} className="glass-card hover-lift rounded-xl p-6 animate-slide-up" style={{ animationDelay: `${index * 0.1}s` }}>
              <div className="flex items-center space-x-3 text-sm text-muted-foreground mb-4">
                <span className="bg-primary/10 text-primary px-3 py-1 rounded-full font-medium">
                  {news.category}
                </span>
                <div className="flex items-center space-x-1">
                  <Calendar className="h-4 w-4" />
                  <span>{new Date(news.date).toLocaleDateString('en-IN', {
                    day: 'numeric',
                    month: 'short',
                    year: 'numeric'
                  })}</span>
                </div>
              </div>
              
              <h3 className="text-xl font-playfair font-bold text-foreground mb-3">
                {news.title}
              </h3>
              
              <p className="text-muted-foreground leading-relaxed mb-4">
                {news.excerpt}
              </p>
              
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-1 text-sm text-muted-foreground">
                  <Clock className="h-4 w-4" />
                  <span>{news.time}</span>
                </div>
                
                <Link to={`/news/${news.id}`}>
                  <EnhancedButton variant="outline" size="sm">
                    Read More
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </EnhancedButton>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AllNews;