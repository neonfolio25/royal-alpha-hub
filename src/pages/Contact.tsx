import React from "react";
import { Phone, Mail, MapPin, Clock } from "lucide-react";
import { EnhancedButton } from "@/components/ui/enhanced-button";

const Contact = () => {
  return (
    <div className="min-h-screen">
      <section className="py-20 bg-gradient-hero text-white">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-playfair font-bold mb-6">Contact Us</h1>
          <p className="text-xl">Get in touch with Alpha High School</p>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="glass-card rounded-xl p-8">
              <h2 className="text-2xl font-playfair font-bold mb-6">Contact Information</h2>
              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <Phone className="h-6 w-6 text-primary" />
                  <div>
                    <p className="font-semibold">Phone</p>
                    <p className="text-muted-foreground">+91 12345 67890</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <Mail className="h-6 w-6 text-primary" />
                  <div>
                    <p className="font-semibold">Email</p>
                    <p className="text-muted-foreground">info@alphahighschool.edu.in</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <MapPin className="h-6 w-6 text-primary" />
                  <div>
                    <p className="font-semibold">Address</p>
                    <p className="text-muted-foreground">123 Education Street, Knowledge City, State - 123456</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <Clock className="h-6 w-6 text-primary" />
                  <div>
                    <p className="font-semibold">Hours</p>
                    <p className="text-muted-foreground">Mon - Sat: 8:00 AM - 4:00 PM</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="glass-card rounded-xl p-8">
              <h2 className="text-2xl font-playfair font-bold mb-6">Send Message</h2>
              <form className="space-y-4">
                <input 
                  type="text" 
                  placeholder="Your Name"
                  className="w-full p-3 border border-border rounded-lg bg-background"
                />
                <input 
                  type="email" 
                  placeholder="Your Email"
                  className="w-full p-3 border border-border rounded-lg bg-background"
                />
                <textarea 
                  placeholder="Your Message"
                  className="w-full p-3 border border-border rounded-lg bg-background h-32"
                ></textarea>
                <EnhancedButton variant="royal" className="w-full">
                  Send Message
                </EnhancedButton>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;