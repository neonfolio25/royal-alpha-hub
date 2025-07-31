import React, { useState } from "react";
import { MessageCircle, X, Phone, Mail } from "lucide-react";

const WhatsAppFloat: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const contactOptions = [
    {
      icon: MessageCircle,
      label: "WhatsApp Chat",
      action: () => window.open("https://wa.me/+911234567890?text=Hello! I'm interested in Alpha High School.", "_blank"),
      color: "bg-green-500 hover:bg-green-600"
    },
    {
      icon: Phone,
      label: "Call Us",
      action: () => window.open("tel:+911234567890", "_self"),
      color: "bg-blue-500 hover:bg-blue-600"
    },
    {
      icon: Mail,
      label: "Email Us",
      action: () => window.open("mailto:info@alphahighschool.edu.in", "_self"),
      color: "bg-purple-500 hover:bg-purple-600"
    }
  ];

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {/* Contact Options */}
      {isOpen && (
        <div className="flex flex-col space-y-3 mb-4 animate-slide-up">
          {contactOptions.map((option, index) => (
            <button
              key={index}
              onClick={option.action}
              className={`
                flex items-center space-x-3 px-4 py-3 rounded-full text-white font-medium
                shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300
                glass backdrop-blur-xl border border-white/20
                ${option.color}
              `}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <option.icon className="h-5 w-5" />
              <span className="hidden sm:block">{option.label}</span>
            </button>
          ))}
        </div>
      )}

      {/* Main Toggle Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`
          w-14 h-14 rounded-full shadow-lg hover:shadow-xl transform hover:-translate-y-1 
          transition-all duration-300 flex items-center justify-center animate-float
          ${isOpen 
            ? "bg-red-500 hover:bg-red-600 rotate-180" 
            : "bg-green-500 hover:bg-green-600 animate-glow"
          }
        `}
      >
        {isOpen ? (
          <X className="h-6 w-6 text-white" />
        ) : (
          <MessageCircle className="h-6 w-6 text-white" />
        )}
      </button>

      {/* Floating Pulse Effect */}
      {!isOpen && (
        <div className="absolute inset-0 rounded-full bg-green-500 animate-ping opacity-20 pointer-events-none"></div>
      )}
    </div>
  );
};

export default WhatsAppFloat;