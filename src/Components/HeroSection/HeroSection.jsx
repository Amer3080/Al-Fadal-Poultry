import React, { useContext, useEffect } from "react";
import { Box, Container, Typography } from "@mui/material";
import { styled } from "@mui/system";
import image from "../../assets/images/Hero.jpg";
import { useTranslation } from "react-i18next";
import { DataContext } from "../../Components/Context/DataContext";

const StyledHeroSection = styled(Box)(() => ({
  backgroundImage: `linear-gradient(180deg, rgba(65, 156, 47, 0.68) 2%, #1e461696 100%), url(${image})`,
  backgroundSize: "cover",
  backgroundPosition: "center",
  padding: "120px 0",
  color: "#fff",
  textAlign: "center",
  minHeight: "28rem",
  display: "flex",
  alignItems: "center",
}));

export default function HeroSection({ HeadText }) {
  const { t, i18n } = useTranslation();
  const { locale } = useContext(DataContext);
  useEffect(() => {
    i18n.changeLanguage(locale);
  }, [i18n, locale]);
  return (
    <Box>
      <StyledHeroSection>
        <Container>
          <Typography
            variant="h2"
            sx={{
              fontFamily: locale === "en" ? "Oleo Script" : "El Messiri",
              fontSize: locale === "en" ? "5vw" : "6vw",
              color: "white",
              fontWeight: locale === "en" ? "normal" : "900",
            }}
            gutterBottom>
            {t(HeadText)}
          </Typography>
        </Container>
      </StyledHeroSection>
    </Box>
  );
}
