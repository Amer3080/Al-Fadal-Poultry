import React, { useContext, useEffect } from "react";
import Header from "../../../Hooks/Header";
import img from "../../../assets/images/6.jpg";
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import { Typography } from "@mui/material";
import Grid from "@mui/material/Grid";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import { styled } from "@mui/material/styles";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import { useTranslation } from "react-i18next";
import { DataContext } from "../../../Components/Context/DataContext";

const Demo = styled("div")(({ theme }) => ({
  backgroundColor: (theme.vars || theme).palette.background.paper,
}));
function Welcome() {
  const { locale } = useContext(DataContext);
  const { t, i18n } = useTranslation();

  useEffect(() => {
    i18n.changeLanguage(locale);
  }, [i18n, locale]);
  return (
    <Box sx={{ my: 10 }}>
      <Header
        firstText={"Welcome to our poultry farm"}
        secondText={"We offer high-quality chicken at wholesale prices!"}
        thirdText={
          "Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo."
        }
      />
      <>
        <Box
          sx={{
            flexGrow: 1,
            // mb: 9,
            m: 2,
            mx: 5,
            direction: locale === "en" ? "ltr" : "rtl",
          }}>
          <Grid container spacing={1}>
            <Grid size={{ xs: 12, md: 12, lg: 7 }}>
              <img
                src={img}
                alt="photo"
                width={"85%"}
                style={{
                  borderRadius: "50%",
                }}
              />
            </Grid>
            <Grid
              size={{ md: 12, lg: 5 }}
              sx={{
                my: { xs: 2, md: 3, lg: "auto" },
                textAlign: { xs: "center", md: "center", lg: "start" },
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
                  fontWeight: "800",
                  my: 2,
                  fontFamily: locale === "en" ? "Roboto" : "El Messiri",
                }}>
                {t("Agriculture & Organic Product")}{" "}
              </Typography>
              <Typography
                component={"p"}
                sx={{ fontSize: "18px", color: "gray", lineHeight: 2 }}>
                {t(
                  "There are many variations of passages of lorem ipsum available but the majority have suffered alteration in some form by injected humor or random word which don't look even."
                )}
              </Typography>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-around",
                  alignItems: "center",
                  flexWrap: "wrap",
                  mx: "auto",
                  mt: 2,
                }}>
                <Box>
                  <Demo>
                    <List>
                      {[
                        t("Professional Farmers"),
                        t("Quam orance semin"),
                        t("Acinia simply free"),
                      ].map((value, index) => (
                        <ListItem key={index} sx={{ p: 0 }}>
                          <ListItemIcon sx={{ minWidth: "35px" }}>
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
                </Box>
                <Box sx={{ ml: 2 }}>
                  <Typography
                    component={"p"}
                    sx={{
                      pb: locale === "en" ? 0 : 2,
                      fontSize: "22px",
                      fontFamily:
                        locale === "en" ? "Caveat" : " Noto Nastaliq Urdu",
                      color: "#49a760",
                      textAlign: "center",
                    }}>
                    {t("Mr: Ahmed Fathy")}
                  </Typography>
                  <Typography
                    sx={{
                      textAlign: locale === "en" ? "start" : "center",
                      fontFamily: locale === "en" ? "Roboto" : "El Messiri",
                    }}>
                    {t("Co Founder & CEO")}
                  </Typography>
                </Box>
              </Box>
            </Grid>
          </Grid>
        </Box>
      </>
    </Box>
  );
}

export default Welcome;
