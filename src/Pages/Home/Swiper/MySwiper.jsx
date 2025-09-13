import React, { useContext, useEffect } from "react";
import Slider from "react-slick";
import styled from "@emotion/styled";
import { keyframes } from "@emotion/react";
import { Box, Button, Typography } from "@mui/material";
import { useTranslation } from "react-i18next";
import { DataContext } from "../../../Components/Context/DataContext";
import { Link } from "react-router-dom";

import img1 from "../../../assets/images/1.jpg";
import img2 from "../../../assets/images/2.jpg";
import img3 from "../../../assets/images/4.jpg";

const fadeZoom = keyframes`
  0%   { transform: scale(1); }
  100% { transform: scale(1.07); }
`;

// 1) Outer wrapper with gradient overlay
const SliderWrapper = styled(Box)({
  position: "relative",
  overflow: "hidden",
  // full-bleed if you want edge-to-edge
  width: "100%",
  mx: "calc((100% - 100vw) / 2)",

  // this pseudo-element sits on top of the images
  "&::after": {
    content: '""',
    position: "absolute",
    inset: 0,
    backgroundImage: "linear-gradient(180deg, #1e461600 0%, #1e4616b4 100%)",
    zIndex: 2,
    pointerEvents: "none",
  },
});

// 2) Slide image sits under the overlay
const SlideImage = styled("img")`
  width: 100%;
  height: 650px;
  object-fit: cover;
  animation: ${fadeZoom} 7.5s ease alternate infinite;
  z-index: 1;
`;

// 3) Text sits above the overlay
const TextOverlay = styled(Box)({
  position: "absolute",
  top: "25%",
  left: 0,
  right: 0,
  zIndex: 3,
  textAlign: "center",
  color: "#fff",
});

export default function MySlider() {
  const { t, i18n } = useTranslation();
  const { locale } = useContext(DataContext);

  useEffect(() => {
    i18n.changeLanguage(locale);
  }, [i18n, locale]);

  const settings = {
    infinite: true,
    autoplay: true,
    autoplaySpeed: 2500,
    fade: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    dots: false,
    pauseOnHover: false,
    adaptiveHeight: true,
  };

  const slides = [img3, img2, img1];

  return (
    <SliderWrapper component="section">
      <Slider {...settings}>
        {slides.map((src, idx) => (
          <Box key={idx} sx={{ position: "relative" }}>
            <SlideImage src={src} alt={`Slide ${idx + 1}`} />

            <TextOverlay>
              <Typography
                variant="h5"
                sx={{ fontFamily: "Marhey", fontSize: "2vw" }}>
                {t("No antibiotics, no growth stimulants!")}
              </Typography>
              <Typography
                variant="h2"
                sx={{
                  fontSize: locale === "en" ? "5vw" : "6vw",
                  fontFamily: locale === "en" ? "Oleo Script" : "El Messiri",
                  fontWeight: locale === "en" ? 400 : 900,
                  my: 1,
                }}>
                {t("Fresh chickens for you every day!")}
              </Typography>
              <Typography
                variant="body1"
                sx={{ fontFamily: "Marhey", fontSize: "2vw", mb: 2 }}>
                {t("From farm to table, our poultry is simply incredible!")}
              </Typography>
              <Button
                component={Link}
                to="/contact-us"
                variant="contained"
                color="success"
                sx={{
                  textTransform: "capitalize",
                  borderRadius: 2,
                  fontSize: { xs: 12, md: 25 },
                }}>
                {t("Contact Us")}
              </Button>
            </TextOverlay>
          </Box>
        ))}
      </Slider>
    </SliderWrapper>
  );
}
