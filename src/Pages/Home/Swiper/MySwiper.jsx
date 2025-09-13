// src/Components/MySwiper/MySwiper.jsx
import React, { useContext, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/effect-fade";

import { Autoplay, Pagination, Navigation, EffectFade } from "swiper/modules";

import { styled } from "@mui/system";
import { keyframes } from "@emotion/react";
import { Button, Typography } from "@mui/material";
import { useTranslation } from "react-i18next";
import { DataContext } from "../../../Components/Context/DataContext";
import { Link } from "react-router-dom";

// Your slide images
import imgTwo from "../../../assets/images/2.jpg";
import imgThree from "../../../assets/images/1.jpg";
import imgFour from "../../../assets/images/4.jpg";

// Fade-in & up keyframes
const fadeInUp = keyframes`
  0%   { transform: scale(1); }
  100% { transform: scale(1.07); }
`;

// Styled Swiper wrapper with overlay
const StyledSwiper = styled(Swiper)({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  maxHeight: 650,
  overflow: "hidden",
  position: "relative",
  "&::after": {
    content: '""',
    position: "absolute",
    inset: 0,
    backgroundImage: "linear-gradient(180deg, #1e461600 0%, #1e4616b4 100%)",
    zIndex: 1,
    pointerEvents: "none",
  },
});

// Optional: If you need to style the SwiperSlide container
const StyledSlide = styled(SwiperSlide)({
  position: "relative",
});

// Image styling and animation
const SlideImage = styled("img")({
  width: "100%",
  position: "relative",
  transition: "0.3s",
  animation: `${fadeInUp} 7500ms ease alternate infinite`,
  zIndex: 0,
});

// Text overlay container
const TextContent = styled("div")({
  position: "absolute",
  inset: 0,
  top: "25%",
  height: "65%",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  zIndex: 2,
});

export default function MySwiper() {
  const { t, i18n } = useTranslation();
  const { locale } = useContext(DataContext);

  useEffect(() => {
    i18n.changeLanguage(locale);
  }, [i18n, locale]);

  const sliders = [imgFour, imgTwo, imgThree];

  return (
    <StyledSwiper
      spaceBetween={0}
      centeredSlides
      autoplay={{ delay: 2500, disableOnInteraction: false }}
      effect="fade"
      modules={[Autoplay, Pagination, Navigation, EffectFade]}
      pagination={{ clickable: true }}
      navigation>
      {sliders.map((image, index) => (
        <StyledSlide key={index}>
          <SlideImage
            src={image}
            alt={`Slide ${index + 1}`}
            crossOrigin="anonymous"
          />

          <TextContent>
            <Typography
              component="h3"
              variant="h5"
              color="white"
              sx={{ fontFamily: "Marhey", fontSize: "2vw" }}>
              {t("No antibiotics, no growth stimulants!")}
            </Typography>

            <Typography
              component="h4"
              variant="h2"
              sx={{
                position: "relative",
                fontSize: locale === "en" ? "5vw" : "6vw",
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
                fontSize: "2vw",
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
                position: "relative",
                zIndex: 3,
                px: { lg: "3%" },
                py: { lg: "0.7%" },
                fontSize: { xs: "10px", md: "12px", lg: "25px" },
                textTransform: "capitalize",
                borderRadius: "20px",
                fontFamily: locale === "en" ? "Archivo" : "El Messiri",
                fontWeight: 700,
              }}>
              {t("Contact Us")}
            </Button>
          </TextContent>
        </StyledSlide>
      ))}
    </StyledSwiper>
  );
}
