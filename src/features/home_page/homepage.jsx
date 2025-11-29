// src/features/home_page/homepage.jsx
import React from "react";
import HeroLanding from "./components/HeroLanding";
import ParentsWishSection from "./components/ParentsWishSection";
import RoadmapSection from "./components/RoadmapSection";
import CourseFeaturesSection from "./components/CourseFeaturesSection";
import FeaturedTutorCourses from "./components/FeaturedTutorCourses";
import ClassSizeSection from "./components/ClassSizeSection";

function HomePage() {
  return (
    <div className="w-full bg-white">
      <HeroLanding />

      {/* phần dưới hero */}
      <div className="max-w-7xl mx-auto px-6 py-10 space-y-12">
        <ParentsWishSection />
        <RoadmapSection />
        <CourseFeaturesSection />
        <FeaturedTutorCourses />
        <ClassSizeSection />
      </div>
    </div>
  );
}

export default HomePage;
