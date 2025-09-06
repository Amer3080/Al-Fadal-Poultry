import React from "react";
import ServicesGrid from "./ServicesGrid/ServicesGrid.jsx";
import FeatureSections from "./FeatureSections/FeatureSections.jsx";
import CallToActionBanner from "./CallToActionBanner/CallToActionBanner.jsx";
import TestimonialsCarousel from "./TestimonialsCarousel/TestimonialsCarousel.jsx";
import HeroSection from "../../Components/HeroSection/HeroSection.jsx";
import imageOne from "../../assets/images/4.jpg";
export default function Services() {
  return (
    <main>
      <HeroSection HeadText={"خـدماتنـــــــا"} />

      <ServicesGrid />

      <FeatureSections
        features={[
          {
            imageUrl: imageOne,
            heading: "ORGANIC POULTRY FARMING",
            text: `Nulla suscipit quam id risus placerat consectetur. Mauris faucibus sapien sollicitudin porttitor feugiat.
             Suspendisse fringilla commodo.Nulla suscipit quam id risus placerat consectetur. Mauris faucibus sapien sollicitudin porttitor
              feugiat. Suspendisse fringilla commodo.Nulla suscipit quam id risus placerat consectetur.
               Mauris faucibus sapien sollicitudin porttitor feugiat. Suspendisse fringilla commodo.`,
          },
          {
            imageUrl: imageOne,
            heading: "ORGANIC POULTRY FARMING",
            text: `Nulla suscipit quam id risus placerat consectetur. Mauris faucibus sapien sollicitudin porttitor feugiat.
             Suspendisse fringilla commodo.Nulla suscipit quam id risus placerat consectetur. Mauris faucibus sapien sollicitudin porttitor
              feugiat. Suspendisse fringilla commodo.Nulla suscipit quam id risus placerat consectetur.
               Mauris faucibus sapien sollicitudin porttitor feugiat. Suspendisse fringilla commodo.`,
          },
        ]}
      />

      <CallToActionBanner
        heading="Ready to Get Started?"
        buttonText="Contact Sales"
        buttonUrl="/contact-us"
      />

      <TestimonialsCarousel
        testimonials={[
          { quote: "Best poultry I’ve ever tasted!", author: "A. Khan" },
          { quote: "On-time and fresh every time.", author: "S. Patel" },
          { quote: "Best poultry I’ve ever tasted!", author: "A. Khan" },
          { quote: "On-time and fresh every time.", author: "S. Patel" },
        ]}
      />
    </main>
  );
}
