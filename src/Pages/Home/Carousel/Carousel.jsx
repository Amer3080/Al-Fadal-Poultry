import React, { useContext, useEffect } from "react";
import Slider from "react-slick";
import { styled } from "@mui/system";
import { Box, Typography } from "@mui/material";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import icon from "../../../assets/images/chicken.png";
import carouselStyle from "./Carousel.Style.module.css";
import { DataContext } from "../../../Components/Context/DataContext";
import { useTranslation } from "react-i18next";

const text = [
  "Al-Fadal Poultry",
  "Al-Fadal Poultry",
  "Al-Fadal Poultry",
  "Al-Fadal Poultry",
];

const LogoItem = styled(Box)({
  display: "flex !important",
  alignItems: "center !important",
  justifyContent: "space-around !important",
  margin: "0 10px",
  width: "100%",
});

const Image = styled("img")({
  width: "250px",
  height: "120px",
  marginRight: "20px",
});

const IconImage = styled("img")({
  width: "14%",
  height: "10%",
});

function Carousel() {
  const { locale } = useContext(DataContext);
  const { t, i18n } = useTranslation();

  useEffect(() => {
    i18n.changeLanguage(locale);
  }, [i18n, locale]);

  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    speed: 5000,
    autoplaySpeed: 2000,
    cssEase: "linear",
    pauseOnHover: false,
    rtl: locale === "ar" ? false : true,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };
  return (
    <>
      <Box
        sx={{
          mt: 4,
        }}
        className={`${carouselStyle.custom_slider}`}>
        <Slider {...settings}>
          {text.map((ele, index) => (
            <LogoItem key={index}>
              <Typography
                sx={{
                  fontFamily: locale === "en" ? "Orbitron" : "Marhey",
                  fontSize: locale === "en" ? "2.2vw" : "3vw",
                  fontWeight: "900",
                  color: locale === "en" ? "#efb443" : "#255946",
                }}>
                {t(`${ele}`)}
              </Typography>
              <IconImage src={icon} alt={`Icon`} />
            </LogoItem>
          ))}
        </Slider>
      </Box>
    </>
  );
}

export default Carousel;
