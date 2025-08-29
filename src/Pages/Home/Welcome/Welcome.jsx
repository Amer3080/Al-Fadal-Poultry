import React, { useContext, useEffect } from "react";
import Header from "../../../Hooks/Header";
import img from "../../../assets/images/6.jpg";
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

  useEffect(() => {
    i18n.changeLanguage(locale);
  }, [i18n, locale]);

  return (
    <Box sx={{ my: 5 }}>
      <Header
        firstText="Welcome to our poultry farm"
        secondText="We offer high-quality chicken at wholesale prices!"
        thirdText="Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo."
      />

      <Box
        sx={{ flexGrow: 1, mx: 5, direction: locale === "en" ? "ltr" : "rtl" }}>
        <Grid container spacing={4} alignItems="center">
          {/* Image Column */}
          <Grid item size={{ xs: 12, md: 12, lg: 7 }}>
            <Box
              component="img"
              src={img}
              alt="Welcome"
              sx={{
                // full width on xs–md, 85% on lg+
                width: { xs: "100%", lg: "85%" },
                display: "block",
                mx: "auto",
                borderRadius: "50%",
              }}
            />
          </Grid>

          {/* Text & List Column */}
          <Grid
            item
            size={{ xs: 12, md: 12, lg: 5 }}
            sx={{
              textAlign: {
                xs: "center",
                lg: locale === "en" ? "left" : "right",
              },
              my: { xs: 4, lg: 0 },
            }}>
            <Typography
              component="p"
              color="gray"
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
              sx={{
                color: "#255946",
                fontSize: "38px",
                fontWeight: 800,
                my: 2,
                fontFamily: locale === "en" ? "Roboto" : "El Messiri",
              }}>
              {t("Agriculture & Organic Product")}
            </Typography>

            <Typography
              component="p"
              sx={{ fontSize: "18px", color: "gray", lineHeight: 2 }}>
              {t(
                "There are many variations of passages of lorem ipsum available but the majority have suffered alteration in some form by injected humor or random word which don't look even."
              )}
            </Typography>

            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                flexWrap: "wrap",
                mt: 3,
              }}>
              <Paper elevation={0}>
                <Demo>
                  <List>
                    {[
                      t("Professional Farmers"),
                      t("Quam orance semin"),
                      t("Acinia simply free"),
                    ].map((value, index) => (
                      <ListItem key={index} sx={{ p: 0 }}>
                        <ListItemIcon sx={{ minWidth: 35 }}>
                          <CheckCircleIcon color="warning" />
                        </ListItemIcon>
                        <ListItemText
                          disableTypography
                          primary={value}
                          sx={{
                            fontFamily:
                              locale === "en" ? "Roboto" : "El Messiri",
                          }}
                        />
                      </ListItem>
                    ))}
                  </List>
                </Demo>
              </Paper>

              <Box sx={{ ml: 2, mt: { xs: 3, lg: 0 } }}>
                <Typography
                  component="p"
                  sx={{
                    fontSize: "22px",
                    fontFamily:
                      locale === "en" ? "Caveat" : "Noto Nastaliq Urdu",
                    color: "#49a760",
                  }}>
                  {t("Mr: Ahmed Fathy")}
                </Typography>
                <Typography
                  sx={{
                    fontFamily: locale === "en" ? "Roboto" : "El Messiri",
                    color: "text.secondary",
                    mt: { xs: 3, lg: 0 },
                  }}>
                  {t("Co Founder & CEO")}
                </Typography>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
}
