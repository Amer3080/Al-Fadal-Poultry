// src/components/.../MySwiper.jsx
import React, { useContext, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation, EffectFade } from "swiper/modules"; // ← correct for v11+

// core Swiper styles
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/pagination";
import "swiper/css/navigation";

import imgTwo from "../../../assets/images/2.avif";
import imgThree from "../../../assets/images/1.avif";
import imgFour from "../../../assets/images/4.avif";

import styles from "./Swiper.Style.module.css"; // exact casing on disk

import { Button, Typography } from "@mui/material";
import { useTranslation } from "react-i18next";
import { DataContext } from "../../../Components/Context/DataContext";
import { Link } from "react-router-dom";

export default function MySwiper() {
  const { t, i18n } = useTranslation();
  const { locale } = useContext(DataContext);

  useEffect(() => {
    i18n.changeLanguage(locale);
  }, [i18n, locale]);

  // only render on client
  if (typeof window === "undefined") return null;

  const slides = [imgFour, imgTwo, imgThree];

  return (
    <section role="region" aria-label={t("Hero Slider")}>
      <Swiper
        modules={[Autoplay, Pagination, Navigation, EffectFade]}
        spaceBetween={0}
        centeredSlides
        effect="fade"
        autoplay={{ delay: 2500, disableOnInteraction: false }}
        pagination={{ clickable: true }}
        navigation
        className={styles.swiperContainer}>
        {slides.map((src, idx) => (
          <SwiperSlide key={idx} className={styles.slide}>
            <img
              src={src}
              srcSet={`${src}?w=400 400w, ${src}?w=800 800w`}
              sizes="(max-width: 600px) 100vw, 800px"
              alt={t(`Slide ${idx + 1}`)}
              className={styles["slide-image"]}
              loading={idx === 0 ? "eager" : "lazy"}
              decoding="async"
              fetchpriority={idx === 0 ? "high" : "low"}
            />
            <div className={styles.text_content}>
              <Typography
                component="h3"
                variant="h5"
                color="white"
                sx={{
                  fontFamily: "Marhey",
                  fontSize: { xs: 16, md: 24 },
                }}>
                {t("No antibiotics, no growth stimulants!")}
              </Typography>

              <Typography
                component="h4"
                variant="h2"
                sx={{
                  fontSize: { xs: 32, md: 48, lg: 64 },
                  color: "white",
                  fontWeight: locale === "en" ? "normal" : 900,
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
                  fontSize: { xs: 16, md: 24 },
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
                  fontSize: { xs: 12, md: 16, lg: 20 },
                  textTransform: "capitalize",
                  borderRadius: 2,
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
