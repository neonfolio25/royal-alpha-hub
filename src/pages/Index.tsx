import React from "react";
import HeroSection from "@/components/home/HeroSection";
import NewsSection from "@/components/home/NewsSection";
import ProgramsSection from "@/components/home/ProgramsSection";
import AchievementsSection from "@/components/home/AchievementsSection";
import SchoolGallerySection from "@/components/home/SchoolGallerySection";

const Index = () => {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <ProgramsSection />
      <AchievementsSection />
      <SchoolGallerySection />
      <NewsSection />
    </div>
  );
};

export default Index;
