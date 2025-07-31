import React, { useState } from "react";
import { Calendar, Clock, ArrowRight, Bell, Download, ExternalLink } from "lucide-react";
import { EnhancedButton } from "@/components/ui/enhanced-button";

const NewsSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState("news");

  const newsItems = [
    {
      id: 1,
      title: "IIT Selections 2024: Record Breaking Results",
      excerpt: "Alpha High School achieves unprecedented success with 85 students qualifying for IIT JEE Advanced 2024.",
      date: "2024-07-15",
      time: "10:30 AM",
      category: "Achievement",
      image: "/placeholder-news-1.jpg",
      urgent: true
    },
    {
      id: 2,
      title: "New Science Laboratory Inauguration",
      excerpt: "State-of-the-art physics and chemistry labs equipped with advanced equipment for enhanced learning.",
      date: "2024-07-10",
      time: "2:00 PM",
      category: "Infrastructure",
      image: "/placeholder-news-2.jpg"
    },
    {
      id: 3,
      title: "Annual Sports Day 2024 - Registrations Open",
      excerpt: "Join us for the most exciting sports extravaganza featuring various athletic competitions and cultural events.",
      date: "2024-07-05",
      time: "9:15 AM",
      category: "Events",
      image: "/placeholder-news-3.jpg"
    },
    {
      id: 4,
      title: "Parent-Teacher Conference Scheduled",
      excerpt: "Important meeting to discuss student progress and upcoming academic plans for the new semester.",
      date: "2024-07-01",
      time: "4:00 PM",
      category: "Academic",
      image: "/placeholder-news-4.jpg"
    }
  ];

  const circulars = [
    {
      id: 1,
      title: "Admission Guidelines for Academic Year 2024-25",
      description: "Complete information about admission process, eligibility criteria, and important dates.",
      date: "2024-07-20",
      type: "PDF",
      urgent: true,
      downloadUrl: "#"
    },
    {
      id: 2,
      title: "Holiday Schedule - Monsoon Break",
      description: "Official holiday schedule for the monsoon break period with school closure and reopening dates.",
      date: "2024-07-18",
      type: "PDF",
      downloadUrl: "#"
    },
    {
      id: 3,
      title: "Uniform Guidelines and Dress Code",
      description: "Updated uniform specifications and dress code requirements for all students.",
      date: "2024-07-15",
      type: "PDF",
      downloadUrl: "#"
    },
    {
      id: 4,
      title: "Fee Structure - Academic Year 2024-25",
      description: "Detailed fee structure including tuition, development, and examination fees.",
      date: "2024-07-12",
      type: "PDF",
      downloadUrl: "#"
    },
    {
      id: 5,
      title: "COVID-19 Safety Protocols Update",
      description: "Latest safety guidelines and health protocols to be followed on school premises.",
      date: "2024-07-08",
      type: "PDF",
      downloadUrl: "#"
    }
  ];

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-IN', {
      day: 'numeric',
      month: 'short',
      year: 'numeric'
    });
  };

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in">
          <span className="inline-block px-6 py-2 bg-primary/10 text-primary rounded-full font-semibold mb-4">
            Stay Updated
          </span>
          <h2 className="text-4xl md:text-5xl font-playfair font-bold heading-royal mb-6">
            News & Circulars
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Stay informed with the latest announcements, achievements, and important updates from Alpha High School
          </p>
        </div>

        {/* Tab Navigation */}
        <div className="flex justify-center mb-12 animate-slide-up">
          <div className="glass-card p-2 rounded-2xl">
            <div className="flex space-x-2">
              <button
                onClick={() => setActiveTab("news")}
                className={`px-8 py-3 rounded-xl font-semibold transition-all duration-300 ${
                  activeTab === "news"
                    ? "bg-primary text-primary-foreground shadow-royal"
                    : "text-foreground hover:bg-primary/10"
                }`}
              >
                Latest News
              </button>
              <button
                onClick={() => setActiveTab("circulars")}
                className={`px-8 py-3 rounded-xl font-semibold transition-all duration-300 ${
                  activeTab === "circulars"
                    ? "bg-primary text-primary-foreground shadow-royal"
                    : "text-foreground hover:bg-primary/10"
                }`}
              >
                Circulars & Documents
              </button>
            </div>
          </div>
        </div>

        {/* News Tab */}
        {activeTab === "news" && (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 animate-fade-in">
            {/* Featured News */}
            <div className="lg:col-span-2">
              <div className="glass-card hover-lift rounded-2xl overflow-hidden h-full">
                {newsItems[0].urgent && (
                  <div className="bg-red-500 text-white px-4 py-2 flex items-center space-x-2">
                    <Bell className="h-4 w-4 animate-pulse" />
                    <span className="font-semibold">URGENT NEWS</span>
                  </div>
                )}
                <div className="p-8">
                  <div className="flex items-center space-x-4 text-sm text-muted-foreground mb-4">
                    <span className="bg-primary/10 text-primary px-3 py-1 rounded-full font-medium">
                      {newsItems[0].category}
                    </span>
                    <div className="flex items-center space-x-1">
                      <Calendar className="h-4 w-4" />
                      <span>{formatDate(newsItems[0].date)}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Clock className="h-4 w-4" />
                      <span>{newsItems[0].time}</span>
                    </div>
                  </div>
                  <h3 className="text-2xl font-playfair font-bold text-foreground mb-4">
                    {newsItems[0].title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed mb-6">
                    {newsItems[0].excerpt}
                  </p>
                  <EnhancedButton 
                    variant="royal"
                    onClick={() => window.location.href = `/news/${newsItems[0].id}`}
                  >
                    Read Full Article
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </EnhancedButton>
                </div>
              </div>
            </div>

            {/* News Sidebar */}
            <div className="space-y-6">
              {newsItems.slice(1).map((news, index) => (
                <div key={news.id} className="glass-card hover-lift rounded-xl p-6 animate-slide-up" style={{ animationDelay: `${index * 0.1}s` }}>
                  <div className="flex items-center space-x-3 text-sm text-muted-foreground mb-3">
                    <span className="bg-secondary/20 text-secondary px-2 py-1 rounded font-medium">
                      {news.category}
                    </span>
                    <span>{formatDate(news.date)}</span>
                  </div>
                  <h4 className="font-semibold text-foreground mb-2 line-clamp-2">
                    {news.title}
                  </h4>
                  <p className="text-sm text-muted-foreground line-clamp-2 mb-3">
                    {news.excerpt}
                  </p>
                  <button 
                    className="text-primary font-medium text-sm hover:text-primary-light transition-colors flex items-center space-x-1"
                    onClick={() => window.location.href = `/news/${news.id}`}
                  >
                    <span>Read more</span>
                    <ArrowRight className="h-3 w-3" />
                  </button>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Circulars Tab */}
        {activeTab === "circulars" && (
          <div className="max-w-4xl mx-auto space-y-6 animate-fade-in">
            {circulars.map((circular, index) => (
              <div key={circular.id} className="glass-card hover-lift rounded-xl p-6 animate-slide-up" style={{ animationDelay: `${index * 0.1}s` }}>
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <div className="flex items-center space-x-3 mb-3">
                      {circular.urgent && (
                        <span className="bg-red-100 text-red-600 px-2 py-1 rounded text-xs font-semibold">
                          URGENT
                        </span>
                      )}
                      <span className="bg-blue-100 text-blue-600 px-2 py-1 rounded text-xs font-semibold">
                        {circular.type}
                      </span>
                      <div className="flex items-center space-x-1 text-sm text-muted-foreground">
                        <Calendar className="h-4 w-4" />
                        <span>{formatDate(circular.date)}</span>
                      </div>
                    </div>
                    <h3 className="text-lg font-semibold text-foreground mb-2">
                      {circular.title}
                    </h3>
                    <p className="text-muted-foreground">
                      {circular.description}
                    </p>
                  </div>
                  <div className="flex space-x-2 ml-6">
                    <EnhancedButton 
                      variant="outline" 
                      size="sm"
                      onClick={() => {
                        const link = document.createElement('a');
                        link.href = `data:text/plain;charset=utf-8,${encodeURIComponent(circular.title + '\n\nThis is a sample document.\n\n' + circular.description)}`;
                        link.download = `${circular.title}.txt`;
                        document.body.appendChild(link);
                        link.click();
                        document.body.removeChild(link);
                      }}
                    >
                      <Download className="h-4 w-4 mr-2" />
                      Download
                    </EnhancedButton>
                    <EnhancedButton 
                      variant="ghost" 
                      size="sm"
                      onClick={() => window.open(circular.downloadUrl, '_blank')}
                    >
                      <ExternalLink className="h-4 w-4" />
                    </EnhancedButton>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* View All Button */}
        <div className="text-center mt-12 animate-fade-in">
          <EnhancedButton 
            variant="glass" 
            size="lg"
            onClick={() => window.location.href = `/${activeTab}`}
          >
            View All {activeTab === "news" ? "News" : "Circulars"}
            <ArrowRight className="ml-2 h-5 w-5" />
          </EnhancedButton>
        </div>
      </div>
    </section>
  );
};

export default NewsSection;