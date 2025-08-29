import MySwiper from "./Swiper/MySwiper";
import Carousel from "./Carousel/Carousel";
import Welcome from "./Welcome/Welcome";
import About from "./About/About";
import Offering from "./Offering/Offering";
import Testimonials from "./Testimonials/Testimonials";
import OurService from "./OurService/OurService";
import MyGallery from "./MyGallery/MyGallery";
import Statistic from "./Statistic/Statistic";
import CompanyLogos from "./CompanyLogos/CompanyLogos";

export default function Home() {
  return (
    <>
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
    </>
  );
}
