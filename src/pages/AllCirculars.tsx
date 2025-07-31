import React from "react";
import { Link } from "react-router-dom";
import { Calendar, Download, ExternalLink, ArrowLeft } from "lucide-react";
import { EnhancedButton } from "@/components/ui/enhanced-button";

const AllCirculars = () => {
  const circulars = [
    {
      id: 1,
      title: "Admission Guidelines for Academic Year 2024-25",
      description: "Complete information about admission process, eligibility criteria, and important dates.",
      date: "2024-07-20",
      type: "PDF",
      urgent: true,
      downloadUrl: "data:text/plain;charset=utf-8,Admission Guidelines for Academic Year 2024-25%0A%0AThis is a sample document containing admission guidelines.%0A%0A1. Eligibility Criteria%0A2. Application Process%0A3. Important Dates%0A4. Fee Structure%0A5. Contact Information"
    },
    {
      id: 2,
      title: "Holiday Schedule - Monsoon Break",
      description: "Official holiday schedule for the monsoon break period with school closure and reopening dates.",
      date: "2024-07-18",
      type: "PDF",
      downloadUrl: "data:text/plain;charset=utf-8,Holiday Schedule - Monsoon Break%0A%0ASchool will remain closed from July 25 to August 5, 2024.%0A%0ARegular classes will resume on August 6, 2024."
    },
    {
      id: 3,
      title: "Uniform Guidelines and Dress Code",
      description: "Updated uniform specifications and dress code requirements for all students.",
      date: "2024-07-15",
      type: "PDF",
      downloadUrl: "data:text/plain;charset=utf-8,Uniform Guidelines and Dress Code%0A%0A1. Boys Uniform%0A2. Girls Uniform%0A3. Sports Dress%0A4. General Guidelines"
    },
    {
      id: 4,
      title: "Fee Structure - Academic Year 2024-25",
      description: "Detailed fee structure including tuition, development, and examination fees.",
      date: "2024-07-12",
      type: "PDF",
      downloadUrl: "data:text/plain;charset=utf-8,Fee Structure - Academic Year 2024-25%0A%0A1. Tuition Fees%0A2. Development Fees%0A3. Examination Fees%0A4. Transportation Fees"
    },
    {
      id: 5,
      title: "COVID-19 Safety Protocols Update",
      description: "Latest safety guidelines and health protocols to be followed on school premises.",
      date: "2024-07-08",
      type: "PDF",
      downloadUrl: "data:text/plain;charset=utf-8,COVID-19 Safety Protocols Update%0A%0A1. Health Screening%0A2. Sanitization Guidelines%0A3. Social Distancing%0A4. Emergency Procedures"
    },
    {
      id: 6,
      title: "Academic Calendar 2024-25",
      description: "Complete academic calendar with examination dates, holidays, and important events.",
      date: "2024-07-05",
      type: "PDF",
      downloadUrl: "data:text/plain;charset=utf-8,Academic Calendar 2024-25%0A%0A1. Term Dates%0A2. Examination Schedule%0A3. Holiday Calendar%0A4. Important Events"
    }
  ];

  const handleDownload = (circular: any) => {
    const link = document.createElement('a');
    link.href = circular.downloadUrl;
    link.download = `${circular.title}.txt`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

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
            All Circulars & Documents
          </h1>
          <p className="text-xl text-muted-foreground">
            Access important circulars, guidelines, and official documents
          </p>
        </div>

        {/* Circulars List */}
        <div className="max-w-4xl mx-auto space-y-6">
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
                      <span>{new Date(circular.date).toLocaleDateString('en-IN', {
                        day: 'numeric',
                        month: 'long',
                        year: 'numeric'
                      })}</span>
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
                    onClick={() => handleDownload(circular)}
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
      </div>
    </div>
  );
};

export default AllCirculars;