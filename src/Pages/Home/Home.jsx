// Home.jsx
import React, { lazy, useEffect, memo } from "react";
import { Helmet } from "react-helmet-async";
// Lazy‐load each section to split the bundle and defer offscreen content
const MySwiper = lazy(() => import("./Swiper/MySwiper"));
const Welcome = lazy(() => import("./Welcome/Welcome"));
const OurService = lazy(() => import("./OurService/OurService"));
const About = lazy(() => import("./About/About"));
const Carousel = lazy(() => import("./Carousel/Carousel"));
const Offering = lazy(() => import("./Offering/Offering"));
const Statistic = lazy(() => import("./Statistic/Statistic"));
const CompanyLogos = lazy(() => import("./CompanyLogos/CompanyLogos"));
const MyGallery = lazy(() => import("./MyGallery/MyGallery"));
const Testimonials = lazy(() => import("./Testimonials/Testimonials"));
// images
import image_one from "../../assets/images/12.jpg";
import image_two from "../../assets/images/13.jpg";

function Home() {
  // Scroll to top on route change / mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // JSON-LD structured data for Organization and WebSite
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        name: "Al-Fadal Poultry Farm",
        url: "https://www.yourdomain.com",
        logo: "https://www.yourdomain.com/logo.png",
        sameAs: [
          "https://www.facebook.com/yourpage",
          "https://www.instagram.com/yourpage",
        ],
      },
      {
        "@type": "WebSite",
        url: "https://www.yourdomain.com",
        name: "Al-Fadal Poultry Farm",
        description:
          "Explore Al-Fadal Poultry Farm: our services, gallery, testimonials, and more—all optimized for speed and SEO.",
      },
    ],
  };

  return (
    <>
      <Helmet>
        <title>Al-Fadal Poultry | Home</title>
        <meta
          name="description"
          content="Natural Poultry products 100% from Al Fadal Establishment, committed to quality and food safety standards, reliable supply, and ISO certified."
        />

        {/* Preconnect / Prefetch for faster asset loading */}
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link rel="dns-prefetch" href="https://fonts.googleapis.com" />

        {/* Preload critical font */}
        <link
          rel="preload"
          as="font"
          type="font/woff2"
          href="/font.woff2"
          crossOrigin
        />
        {/* Preload Images */}
        <link
          rel="preload"
          as="image"
          href={image_one}
          type="image"
          crossOrigin
        />
        <link
          rel="preload"
          as="image"
          href={image_two}
          type="image"
          crossOrigin
        />

        {/* JSON-LD structured data */}
        <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
      </Helmet>

      <main aria-label="Homepage">
        <MySwiper />
        <Welcome />
        <OurService />
        <About />
        <Carousel />
        <Offering />
        <Statistic />
        <CompanyLogos />
        <MyGallery />
        <Testimonials />
      </main>
    </>
  );
}

export default memo(Home);
