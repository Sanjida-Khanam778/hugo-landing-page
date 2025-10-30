import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import Hero from "../../components/Hero/Hero";
import FeaturedUniversities from "../../components/FeaturedUniversities/FeaturedUniversities";

export default function Home() {
  return (
    <div>
      <Hero />
      <FeaturedUniversities />
    </div>
  );
}
