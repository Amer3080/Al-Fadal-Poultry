import ServicesGrid from "./ServicesGrid/ServicesGrid.jsx";
import FeatureSections from "./FeatureSections/FeatureSections.jsx";
import ActionBanner from "./ActionBanner/ActionBanner.jsx";
import HeroSection from "../../Components/HeroSection/HeroSection.jsx";
import imageOne from "../../assets/images/s1.jpg";
import imageTwo from "../../assets/images/s4.jpg";
import imageThree from "../../assets/images/s5.jpg";
import IsoCertificates from "./IsoCertificates/IsoCertificates.jsx";
import { Helmet } from "react-helmet-async";
export default function Services() {
  return (
    <>
      <Helmet>
        <title>Services</title>
        <meta
          name="description"
          content="Natural Poultry products 100% from Al Fadal Establishment, committed to quality and food safety standards, reliable supply, and ISO certified."
        />
      </Helmet>
      <main>
        <HeroSection HeadText={"Services"} />
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
              imageUrl: imageTwo,
              heading: "ORGANIC POULTRY FARMING",
              text: `Nulla suscipit quam id risus placerat consectetur. Mauris faucibus sapien sollicitudin porttitor feugiat.
             Suspendisse fringilla commodo.Nulla suscipit quam id risus placerat consectetur. Mauris faucibus sapien sollicitudin porttitor
              feugiat. Suspendisse fringilla commodo.Nulla suscipit quam id risus placerat consectetur.
               Mauris faucibus sapien sollicitudin porttitor feugiat. Suspendisse fringilla commodo.`,
            },
            {
              imageUrl: imageThree,
              heading: "ORGANIC POULTRY FARMING",
              text: `Nulla suscipit quam id risus placerat consectetur. Mauris faucibus sapien sollicitudin porttitor feugiat.
             Suspendisse fringilla commodo.Nulla suscipit quam id risus placerat consectetur. Mauris faucibus sapien sollicitudin porttitor
              feugiat. Suspendisse fringilla commodo.Nulla suscipit quam id risus placerat consectetur.
               Mauris faucibus sapien sollicitudin porttitor feugiat. Suspendisse fringilla commodo.`,
            },
          ]}
        />
        <ActionBanner heading="ISO Certificates" />
        <IsoCertificates />
      </main>
    </>
  );
}
