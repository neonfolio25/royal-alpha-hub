import React from "react";
import HeroSection from "@/components/home/HeroSection";
import NewsSection from "@/components/home/NewsSection";
import ProgramsSection from "@/components/home/ProgramsSection";
import AchievementsSection from "@/components/home/AchievementsSection";

const Index = () => {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <ProgramsSection />
      <AchievementsSection />
      <NewsSection />
    </div>
  );
};

export default Index;
