import React, { useContext, useEffect } from "react";
import { Box, Container, Typography } from "@mui/material";
import { styled } from "@mui/system";
import image from "../../assets/images/Hero.jpg";
import { useTranslation } from "react-i18next";
import { DataContext } from "../../Components/Context/DataContext";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import HomeIcon from "@mui/icons-material/Home";
import WhatshotIcon from "@mui/icons-material/Whatshot";
import GrainIcon from "@mui/icons-material/Grain";
import { Link } from "react-router-dom";
const StyledHeroSection = styled(Box)(({ theme }) => ({
  backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6)), url(${image})`,
  backgroundSize: "cover",
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
  color: "#fff",
  textAlign: "center",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  minHeight: "9vh", // Ensures full screen height
  padding: "120px 0",
  marginTop: "4.5rem",
  [theme.breakpoints.down("xl")]: {
    padding: "80px 0",
    marginTop: "3.96rem", // Slightly more space for mobile navbar
  },
  [theme.breakpoints.down("md")]: {
    padding: "80px 0",
    marginTop: "4rem", // Slightly more space for mobile navbar
  },

  [theme.breakpoints.down("sm")]: {
    padding: "60px 0",
    marginTop: "3.5rem", // Extra space for smaller navbar
  },
}));

function handleClick(event) {
  event.preventDefault();
  console.info("You clicked a breadcrumb.");
}

export default function HeroSection({ HeadText }) {
  const { t, i18n } = useTranslation();
  const { locale } = useContext(DataContext);
  useEffect(() => {
    i18n.changeLanguage(locale);
  }, [i18n, locale]);
  function IconBreadcrumbs({ textLink }) {
    return (
      <div
        role="presentation"
        onClick={handleClick}
        style={{
          direction: locale === "en" ? "ltr" : "rtl",
        }}>
        <Breadcrumbs
          aria-label="breadcrumb"
          sx={{ fontSize: "35px", color: "white", mx: 3 }}>
          <Link to="/" style={{ textDecoration: "none" }}>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                "&:hover .hoverable": {
                  color: "#255946",
                },
              }}>
              <HomeIcon
                className="hoverable"
                sx={{
                  fontSize: "35px",
                  color: "white",
                  fontWeight: "900",
                  transition: "color 0.3s ease",
                  mx: 1,
                }}
              />
              <Typography
                className="hoverable"
                sx={{
                  fontSize: "35px",
                  color: "white",
                  fontWeight: "900",
                  transition: "color 0.3s ease",
                  fontFamily: locale === "en" ? "Robot" : "El Messiri",
                }}>
                {t("Home")}
              </Typography>
            </Box>
          </Link>

          <Typography
            sx={{
              fontSize: "35px",
              fontWeight: "900",
              display: "flex",
              alignItems: "center",
              fontFamily: locale === "en" ? "Robot" : "El Messiri",
            }}>
            <GrainIcon sx={{ mx: 1 }} fontSize="inherit" />
            {t(textLink)}
          </Typography>
        </Breadcrumbs>
      </div>
    );
  }
  return (
    <Box sx={{ minHeight: "20rem" }}>
      <StyledHeroSection>
        <Container
          sx={{
            display: "flex",
            alignItems: "center",
            flexDirection: "column",
          }}>
          <IconBreadcrumbs textLink={HeadText} />
          <Typography
            variant="h2"
            sx={{
              mt: 5,
              fontFamily: locale === "en" ? "Robot" : "El Messiri",
              fontSize: "50px",
              fontWeight: "700",
            }}
            gutterBottom>
            {t(HeadText)}
          </Typography>
        </Container>
      </StyledHeroSection>
    </Box>
  );
}
