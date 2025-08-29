import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/effect-fade"; 
import { Autoplay, Pagination, Navigation, EffectFade } from "swiper/modules";
import imgTwo from "../../../assets/images/2.jpg";
import imgThree from "../../../assets/images/1.jpg";
import imgFour from "../../../assets/images/4.jpg";
import styles from "./Swiper.Style.module.css";
import { Button, Typography } from "@mui/material";
import { useTranslation } from "react-i18next";
import { useContext, useEffect } from "react";
import { DataContext } from "../../../Components/Context/DataContext";

export default function MySwiper() {
  const sliders = [imgFour, imgTwo, imgThree];
  const { t, i18n } = useTranslation();
  const { locale } = useContext(DataContext);
  useEffect(() => {
    i18n.changeLanguage(locale);
  }, [i18n, locale]);
  return (
    <div>
      <Swiper
        spaceBetween={0}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        effect="fade"
        modules={[Autoplay, Pagination, Navigation, EffectFade]}
        className="mySwiper">
        {sliders.map((image, index) => (
          <SwiperSlide key={index} className={styles.slide}>
            <img
              src={image}
              alt={`Slide ${index + 1}`}
              className={styles["slide-image"]}
            />
            <div className={styles["text_content"]}>
              <Typography
                component="h5"
                color="white"
                sx={{
                  fontFamily: "Marhey",
                  fontSize: "2vw",
                }}>
                {t("No antibiotics, no growth stimulants!")}
              </Typography>
              <Typography
                component="h2"
                sx={{
                  position: "relative",
                  fontSize: locale === "en" ? "5vw" : "6vw",
                  color: "white",
                  fontWeight: locale === "en" ? "normal" : "900",
                  fontFamily: locale === "en" ? "Oleo Script" : "El Messiri",
                  py: { xs: 1, md: 1, lg: 1 },
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
                variant="contained"
                color="success"
                sx={{
                  px: { lg: "3%" },
                  py: { lg: ".7%" },
                  fontSize: { xs: "10px", md: "12px", lg: "25px" },
                  textTransform: "capitalize",
                  borderRadius: "20px",
                  fontFamily: locale === "en" ? "Archivo" : "El Messiri",
                  fontWeight: "700",
                }}>
                {t("Contact Us")}
              </Button>{" "}
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
