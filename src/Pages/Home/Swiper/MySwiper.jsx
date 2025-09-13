// src/Components/MySwiper/MySwiper.jsx
import React, { useContext, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/effect-fade";
import { Autoplay, EffectFade } from "swiper/modules";

import styled from "@emotion/styled";
import { keyframes } from "@emotion/react";
import { Box, Button, Typography } from "@mui/material";
import { useTranslation } from "react-i18next";
import { DataContext } from "../../../Components/Context/DataContext";
import { Link } from "react-router-dom";

import imgTwo from "../../../assets/images/2.jpg";
import imgThree from "../../../assets/images/1.jpg";
import imgFour from "../../../assets/images/4.jpg";

// 1. Define the keyframes for fade+scale
const fadeInUp = keyframes`
  0%   { transform: scale(1); }
  100% { transform: scale(1.07); }
`;

// 2. Style the Swiper container and overlay
const StyledSwiper = styled(Swiper)({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  maxHeight: 650,
  overflow: "hidden",
  position: "relative",
  // the dark gradient overlay on top of slides
  "&::after": {
    content: '""',
    position: "absolute",
    inset: 0,
    backgroundImage: "linear-gradient(180deg, #1e461600 0%, #1e4616b4 100%)",
    zIndex: 1,
    pointerEvents: "none",
  },
});

// 3. Each slide wrapper
const StyledSlide = styled(SwiperSlide)({
  position: "relative",
});

// 4. The animating image
const SlideImage = styled("img")`
  width: 100%;
  height: auto;
  transform-origin: center;
  transition: transform 0.3s;
  animation: ${fadeInUp} 7.5s ease alternate infinite;
  z-index: 0;
`;

// 5. Text and button container
const TextContent = styled("div")({
  position: "absolute",
  top: "25%",
  left: 0,
  right: 0,
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

  const slides = [imgFour, imgTwo, imgThree];

  return (
    <Box
      component="section"
      sx={{
        width: "100%",
        maxWidth: 1200,
        aspectRatio: "16/9",
      }}>
      <StyledSwiper
        spaceBetween={0}
        centeredSlides
        autoplay={{ delay: 2500, disableOnInteraction: false }}
        effect="fade"
        modules={[Autoplay, EffectFade]}>
        {slides.map((src, idx) => (
          <StyledSlide key={idx}>
            <SlideImage
              src={src}
              alt={`Slide ${idx + 1}`}
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
                  fontSize: locale === "en" ? "5vw" : "6vw",
                  color: "white",
                  fontWeight: locale === "en" ? "normal" : "900",
                  fontFamily: locale === "en" ? "Oleo Script" : "El Messiri",
                  py: 1,
                  position: "relative",
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
                  mt: 2,
                  px: { lg: "3%" },
                  py: { lg: "0.7%" },
                  fontSize: { xs: "10px", md: "12px", lg: "25px" },
                  textTransform: "capitalize",
                  borderRadius: "20px",
                  fontFamily: locale === "en" ? "Archivo" : "El Messiri",
                  fontWeight: 700,
                  position: "relative",
                  zIndex: 3,
                }}>
                {t("Contact Us")}
              </Button>
            </TextContent>
          </StyledSlide>
        ))}
      </StyledSwiper>
    </Box>
  );
}
