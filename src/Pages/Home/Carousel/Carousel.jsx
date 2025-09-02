// Carousel.jsx

import React, {
  useContext,
  useEffect,
  useMemo,
  lazy,
  Suspense,
  memo,
} from "react";
import { Helmet } from "react-helmet-async";
import { styled } from "@mui/system";
import { Box, Typography } from "@mui/material";
import carouselStyle from "./Carousel.Style.module.css";
import { DataContext } from "../../../Components/Context/DataContext";
import { useTranslation } from "react-i18next";

// Preload the chicken icon for LCP
import iconPng from "../../../assets/images/11.png";

// Lazy‐load the slider and its CSS in one chunk
const Slider = lazy(async () => {
  await Promise.all([
    import("slick-carousel/slick/slick.css"),
    import("slick-carousel/slick/slick-theme.css"),
  ]);
  return import("react-slick");
});

const LogoItem = styled(Box)({
  display: "flex !important",
  alignItems: "center !important",
  justifyContent: "space-around !important",
  margin: "0 10px",
  width: "100%",
});

const IconImage = styled("img")({
  width: 48,
  height: 48,
  flexShrink: 0,
});

function Carousel() {
  const { locale } = useContext(DataContext);
  const { t, i18n } = useTranslation();

  // Sync i18n with the site locale
  useEffect(() => {
    i18n.changeLanguage(locale);
  }, [i18n, locale]);

  // Carousel slides text
  const slides = useMemo(
    () => [
      t("Al-Fadal Poultry"),
      t("Al-Fadal Poultry"),
      t("Al-Fadal Poultry"),
      t("Al-Fadal Poultry"),
    ],
    [t]
  );

  // Slider settings (memoized to avoid re-creations)
  const settings = useMemo(
    () => ({
      dots: true,
      infinite: true,
      slidesToShow: 3,
      slidesToScroll: 1,
      autoplay: true,
      speed: 5000,
      autoplaySpeed: 2000,
      cssEase: "linear",
      pauseOnHover: false,
      rtl: locale === "ar",
      responsive: [
        { breakpoint: 768, settings: { slidesToShow: 2 } },
        { breakpoint: 480, settings: { slidesToShow: 1 } },
      ],
    }),
    [locale]
  );

  return (
    <>
      <Box
        component="section"
        aria-labelledby="carousel-heading"
        sx={{ mt: 2 }}
        className={carouselStyle.custom_slider}>
        <Suspense
          fallback={<div style={{ textAlign: "center" }}>{t("Loading…")}</div>}>
          <Slider {...settings}>
            {slides.map((label, idx) => (
              <LogoItem key={idx}>
                <Typography
                  component="span"
                  sx={{
                    fontFamily: locale === "en" ? "Orbitron" : "Marhey",
                    fontSize: locale === "en" ? "2.2vw" : "3vw",
                    fontWeight: 900,
                    color: locale === "en" ? "#efb443" : "#255946",
                    whiteSpace: "nowrap",
                  }}>
                  {label}
                </Typography>
                <IconImage
                  crossOrigin="anonymous"
                  src={iconPng}
                  alt={t("Chicken icon")}
                  loading="lazy"
                  decoding="async"
                />
              </LogoItem>
            ))}
          </Slider>
        </Suspense>
      </Box>
    </>
  );
}

export default memo(Carousel);
