import React, { useContext, useEffect } from "react";
import AnimatedNumbers from "react-animated-numbers";
import { Box, Grid, Typography, Divider, Paper } from "@mui/material";
import Header from "../../../Hooks/Header";
import { useInView } from "react-intersection-observer";
import icon from "../../../assets/images/icon.png";
import { DataContext } from "../../../Components/Context/DataContext";
import { useTranslation } from "react-i18next";

const data = [
  { num: 46, sym: "K", text: "Areas" },
  { num: 24, sym: "+", text: "Experience" },
  { num: 30, sym: "T", text: "Products" },
  { num: 10, sym: "K", text: "Customers" },
];

export default function NumberCounters() {
  const { ref, inView } = useInView({
    threshold: 0.2,
    triggerOnce: false,
  });
  const { locale } = useContext(DataContext);
  const { t, i18n } = useTranslation();

  useEffect(() => {
    i18n.changeLanguage(locale);
  }, [i18n, locale]);

  return (
    <Box p={4}>
      <Header
        firstText="High-quality Chickens"
        secondText="Our numbers prove the constant improvement in the quality"
        thirdText="Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo."
      />

      <Grid container spacing={4} justifyContent="center" ref={ref}>
        {data.map((item, idx) => (
          <Grid
            item
            size={{ xs: 12, md: 6, lg: 3 }}
            key={idx}
            textAlign="center">
            <Box
              sx={{
                position: "relative",
                width: 300,
                height: 300,
                mx: "auto",
                backgroundImage: `url(${icon})`,
                backgroundSize: "contain",
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center",
              }}>
              <Typography
                variant="h4"
                component="div"
                sx={{
                  position: "absolute",
                  top: "50%",
                  left: "50%",
                  transform: "translate(-50%, -50%)",
                  fontSize: "4.5rem",
                  fontWeight: 700,
                  color: "white",
                  fontFamily: "Merienda",
                  lineHeight: 1,
                }}>
                <AnimatedNumbers
                  includeComma
                  animateToNumber={inView ? item.num : 0}
                  fontStyle={{}}
                  configs={(n) => ({
                    mass: 1,
                    tension: 230 + n * 5,
                    friction: 140,
                  })}
                  animationType="wobbly"
                />
                <span
                  style={{
                    fontWeight: 700,
                    fontSize: "3rem",
                    fontFamily: "Robot",
                  }}>
                  {t(item.sym)}
                </span>
              </Typography>
            </Box>

            {/* Wrap item.text in a Paper */}

            <Typography
              variant="subtitle1"
              sx={{
                color: "#255946",
                fontSize: "3rem",
                fontWeight: 600,
                fontFamily: locale === "en" ? "Roboto" : "El Messiri",
              }}>
              {t(item.text)}
            </Typography>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
