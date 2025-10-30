import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import Hero from "../../components/Hero/Hero";
import FeaturedUniversities from "../../components/FeaturedUniversities/FeaturedUniversities";
import OurServices from "../../components/OurServices/OurServices";
import Newsletter from "../../components/Newsletter/Newsletter";

export default function Home() {
  return (
    <div className="bg-[#F3F4F6]">
      <Hero />
      <FeaturedUniversities />
      <OurServices />
      <Newsletter />
    </div>
  );
}
