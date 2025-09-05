import React, { useContext, useEffect, useMemo } from "react";
import Header from "../../../Hooks/Header";
import imgJpg from "../../../assets/images/5.jpg";
import {
  Box,
  Divider,
  Typography,
  Grid,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Paper,
} from "@mui/material";
import { styled } from "@mui/material/styles";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import { useTranslation } from "react-i18next";
import { DataContext } from "../../../Components/Context/DataContext";

const Demo = styled("div")(({ theme }) => ({
  backgroundColor: (theme.vars || theme).palette.background.paper,
}));

export default function Welcome() {
  const { locale } = useContext(DataContext);
  const { t, i18n } = useTranslation();

  // sync language
  useEffect(() => {
    i18n.changeLanguage(locale);
  }, [i18n, locale]);

  // static feature list
  const features = useMemo(
    () => [
      t("Professional Farmers"),
      t("Quam orance semin"),
      t("Acinia simply free"),
    ],
    [t]
  );

  return (
    <>
      <Box
        component="section"
        aria-labelledby="welcome-heading"
        sx={{ my: 5, mx: 2, direction: locale === "en" ? "ltr" : "rtl" }}>
        <Header
          firstText={t("")}
          secondText={t("We offer high-quality chicken at wholesale prices!")}
          thirdText={t(
            "Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo."
          )}
        />

        <Box sx={{ flexGrow: 1, mx: { xs: 1, lg: 5 } }}>
          <Grid container spacing={4} alignItems="center">
            {/* Image Column */}
            <Grid size={{ xs: 12, lg: 6 }}>
              <Box
                crossOrigin="anonymous"
                component="img"
                src={imgJpg}
                alt={t("Farm welcome image")}
                loading="eager"
                decoding="async"
                width={600}
                height={600}
                sx={{
                  width: { xs: "100%", lg: "85%" },
                  height: "auto",
                  display: "block",
                  mx: "auto",
                  borderRadius: "50%",
                }}
              />
            </Grid>

            {/* Text & Features Column */}
            <Grid
              size={{ xs: 12, lg: 6 }}
              sx={{
                textAlign: {
                  xs: "center",
                  lg: locale === "en" ? "left" : "right",
                },
                my: { xs: 4, lg: 0 },
              }}>
              <Typography
                component="div"
                color="#575757"
                sx={{
                  textTransform: "uppercase",
                  my: 1,
                  fontSize: "20px",
                  fontFamily: "Marhey",
                }}>
                <Divider>{t("Our introduction")}</Divider>
              </Typography>

              <Typography
                component="h3"
                id="welcome-heading"
                sx={{
                  color: "#255946",
                  fontSize: { xs: "32px", md: "38px" },
                  fontWeight: 800,
                  my: 2,
                  fontFamily: locale === "en" ? "Roboto" : "El Messiri",
                }}>
                {t("Agriculture & Organic Product")}
              </Typography>

              <Typography
                component="p"
                sx={{
                  fontSize: "18px",
                  color: "#575757",
                  lineHeight: 1.8,
                  mb: 3,
                  fontFamily: locale === "en" ? "Roboto" : "Marhey",
                }}>
                {t(
                  "There are many variations of passages of lorem ipsum available but the majority have suffered alteration in some form by injected humor or random word which don't look even."
                )}
              </Typography>

              <Box
                sx={{
                  display: { xs: "block", sm: "flex" },
                  justifyContent: "space-between",
                  alignItems: "end",
                  flexWrap: "wrap",
                  mt: 3,
                  px: { xs: 3, lg: 0 },
                }}>
                <Paper elevation={0}>
                  <Demo>
                    <List>
                      {features.map((value, index) => (
                        <ListItem key={index} sx={{ p: 0 }}>
                          <ListItemIcon sx={{ minWidth: 35 }}>
                            <CheckCircleIcon color="warning" />
                          </ListItemIcon>
                          <ListItemText
                            disableTypography
                            primary={value}
                            sx={{
                              flexGrow: 0,
                              fontFamily:
                                locale === "en" ? "Roboto" : "El Messiri",
                            }}
                          />
                        </ListItem>
                      ))}
                    </List>
                  </Demo>
                </Paper>
                <Box
                  sx={{
                    textAlign: "end",
                  }}>
                  <Typography
                    component="p"
                    sx={{
                      fontSize: "22px",
                      fontFamily:
                        locale === "en" ? "Caveat" : "Noto Nastaliq Urdu",
                      color: "#2B643A",
                    }}>
                    {t("Mr: Ahmed Fathy")}
                  </Typography>
                  <Typography
                    sx={{
                      fontFamily: locale === "en" ? "Roboto" : "El Messiri",
                      color: "text.secondary",
                      mt: locale === "en" ? 0 : 2,
                      ml: locale === "en" ? 0 : 3,
                    }}>
                    {t("Co Founder & CEO")}
                  </Typography>
                </Box>
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </>
  );
}
