import React from "react";
import HeroSection from "./HeroSection/HeroSection.jsx";
import ServicesGrid from "./ServicesGrid/ServicesGrid.jsx";
import FeatureSections from "./FeatureSections/FeatureSections.jsx";
import CallToActionBanner from "./CallToActionBanner/CallToActionBanner.jsx";
import TestimonialsCarousel from "./TestimonialsCarousel/TestimonialsCarousel.jsx";

export default function Services() {
  return (
    <main>
      <HeroSection />

      <ServicesGrid />
      {/* 
      <FeatureSections
        features={[
          {
            imageUrl: "/assets/feature-organic.jpg",
            heading: "Organic Feed Program",
            text: "Locally sourced grains for healthier livestock.",
          },
          {
            imageUrl: "/assets/feature-safety.jpg",
            heading: "Food Safety Standards",
            text: "HACCP-compliant processing facilities.",
          },
        ]}
      /> */}

      {/* <CallToActionBanner
        heading="Ready to Partner with Us?"
        buttonText="Contact Sales"
        buttonUrl="/contact-us"
      />

      <TestimonialsCarousel
        testimonials={[
          { quote: "Best poultry I’ve ever tasted!", author: "A. Khan" },
          { quote: "On-time and fresh every time.", author: "S. Patel" },
          // …more quotes
        ]}
      /> */}
    </main>
  );
}
