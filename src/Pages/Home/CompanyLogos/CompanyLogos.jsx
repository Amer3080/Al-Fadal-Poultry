import React, { useContext } from "react";
import Slider from "react-slick";
import { styled } from "@mui/system";
import { Box, Typography } from "@mui/material";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import logo1 from "../../../assets/images/logos/1.png";
import logo2 from "../../../assets/images/logos/2.png";
import logo3 from "../../../assets/images/logos/3.png";
import logo4 from "../../../assets/images/logos/4.png";
import logo5 from "../../../assets/images/logos/5.png";
import logo6 from "../../../assets/images/logos/6.png";
import logo7 from "../../../assets/images/logos/7.png";
import logo8 from "../../../assets/images/logos/8.png";
import logo9 from "../../../assets/images/logos/9.png";
import logo10 from "../../../assets/images/logos/10.png";
import logo11 from "../../../assets/images/logos/11.png";
import logo12 from "../../../assets/images/logos/12.png";
import { DataContext } from "../../../Components/Context/DataContext";
import companyStyle from "./CompanyLogos.Style.module.css";

const logos = [
  logo1,
  logo2,
  logo3,
  logo4,
  logo5,
  logo6,
  logo7,
  logo8,
  logo9,
  logo10,
  logo11,
  logo12,
];

const LogoItem = styled(Box)({
  display: "flex !important",
  alignItems: "center !important",
  justifyContent: "space-around !important",
  margin: "0 10px",
  width: "100%",
});

const Image = styled("img")({
  marginRight: "10px",
});

function CompanyLogos() {
  const { locale } = useContext(DataContext);

  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    speed: 5000,
    autoplaySpeed: 0,
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
          my: 4,
        }}
        className={`${companyStyle.custom_slider}`}>
        <Slider {...settings}>
          {logos.map((ele, index) => (
            <LogoItem key={index}>
              <Image
                src={ele}
                sx={{
                  width: { xs: "60px", md: "150px", lg: "250px" },
                  height: { xs: "60px", md: "100px", lg: "150px" },
                }}
                alt={`Logo ${index + 1}`}
              />
            </LogoItem>
          ))}
        </Slider>
      </Box>
    </>
  );
}

export default CompanyLogos;
