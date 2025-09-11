import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation, EffectFade } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/pagination";
import "swiper/css/navigation";

import imgTwo from "../../../assets/images/2.avif";
import imgThree from "../../../assets/images/1.avif";
import imgFour from "../../../assets/images/4.avif";

import styles from "./Swiper.Style.module.css";

import { Button, Typography } from "@mui/material";
import { useTranslation } from "react-i18next";
import { useContext, useEffect } from "react";
import { DataContext } from "../../../Components/Context/DataContext";
import { Link } from "react-router-dom";

export default function MySwiper() {
  const sliders = [imgFour, imgTwo, imgThree];
  const { t, i18n } = useTranslation();
  const { locale } = useContext(DataContext);

  useEffect(() => {
    i18n.changeLanguage(locale);
  }, [i18n, locale]);

  return (
    <section aria-label={t("Hero Slider")} role="region">
      <Swiper
        spaceBetween={0}
        centeredSlides
        autoplay={{ delay: 2500, disableOnInteraction: false }}
        effect="fade"
        modules={[Autoplay, Pagination, Navigation, EffectFade]}>
        {sliders.map((image, index) => (
          <SwiperSlide key={index} className={styles.slide}>
            <img
              src={image}
              srcSet={`${image}?w=400 400w, ${image}?w=800 800w`}
              sizes="(max-width: 600px) 100vw, 800px"
              alt={t(`Slide ${index + 1}`)}
              className={styles["slide-image"]}
              loading={index === 0 ? "eager" : "lazy"}
              decoding="async"
              fetchpriority={index === 0 ? "high" : "low"}
            />
            <div className={styles.text_content}>
              <Typography
                component="h3"
                variant="h5"
                color="white"
                sx={{
                  fontFamily: "Marhey",
                  fontSize: { xs: "16px", md: "24px" },
                }}>
                {t("No antibiotics, no growth stimulants!")}
              </Typography>

              <Typography
                component="h4"
                variant="h2"
                sx={{
                  fontSize: { xs: "32px", md: "48px", lg: "64px" },
                  color: "white",
                  fontWeight: locale === "en" ? "normal" : "900",
                  fontFamily: locale === "en" ? "Oleo Script" : "El Messiri",
                  py: 1,
                }}>
                {t("Fresh chickens for you every day!")}
              </Typography>

              <Typography
                component="h5"
                color="white"
                sx={{
                  fontFamily: "Marhey",
                  fontSize: { xs: "16px", md: "24px" },
                  pb: { xs: 2, md: 4, lg: 6 },
                }}>
                {t("From farm to table, our poultry is simply incredible!")}
              </Typography>

              <Button
                component={Link}
                to="/contact-us"
                variant="contained"
                color="success"
                sx={{
                  px: { lg: 3 },
                  py: { lg: 1 },
                  fontSize: { xs: "12px", md: "16px", lg: "20px" },
                  textTransform: "capitalize",
                  borderRadius: "20px",
                  fontFamily: locale === "en" ? "Archivo" : "El Messiri",
                  fontWeight: 700,
                }}>
                {t("Contact Us")}
              </Button>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
