import ServicesGrid from "./ServicesGrid/ServicesGrid.jsx";
import FeatureSections from "./FeatureSections/FeatureSections.jsx";
import ActionBanner from "./ActionBanner/ActionBanner.jsx";
import HeroSection from "../../Components/HeroSection/HeroSection.jsx";
import imageOne from "../../assets/images/s1.jpg";
import imageTwo from "../../assets/images/s4.jpg";
import imageThree from "../../assets/images/s5.jpg";
import IsoCertificates from "./IsoCertificates/IsoCertificates.jsx";
import { Helmet } from "react-helmet-async";
import { useContext, useEffect } from "react";
import { DataContext } from "../../Components/Context/DataContext.jsx";
import { useTranslation } from "react-i18next";
export default function Services() {
  const { locale } = useContext(DataContext);
  const { t, i18n } = useTranslation();
  useEffect(() => {
    i18n.changeLanguage(locale);
  }, [i18n, locale]);
  return (
    <>
      <Helmet>
        <title>{t("Services")}</title>
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
