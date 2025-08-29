import React, { useContext, useEffect } from "react";
import { Link as RouterLink } from "react-router-dom";
import {
  Box,
  Container,
  Grid,
  Typography,
  Link,
  IconButton,
  Button,
  InputAdornment,
  TextField,
} from "@mui/material";
import MailOutline from "@mui/icons-material/MailOutline";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import TelegramIcon from "@mui/icons-material/Telegram";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import EmailIcon from "@mui/icons-material/Email";
import PhoneIcon from "@mui/icons-material/Phone";
import { DataContext } from "../Context/DataContext";
import logo from "../../assets/images/Logo.png";
import { useTranslation } from "react-i18next";

export default function Footer() {
  const { locale } = useContext(DataContext);
  const { t, i18n } = useTranslation();

  useEffect(() => {
    i18n.changeLanguage(locale);
  }, [i18n, locale]);
  return (
    <Box
      component="footer"
      sx={{
        direction: locale === "en" ? "ltr" : "rtl",
        bgcolor: "#255946",
        color: "grey.100",
        pt: 6,
      }}>
      <Container maxWidth="lg">
        <Grid container spacing={4} justifyContent={"center"}>
          {/* Logo & About */}
          <Grid item size={{ xs: 12, md: 4 }}>
            <Box display="flex" alignItems="center" mb={2}>
              <Box
                component="img"
                src={logo}
                alt="Al-Fadal Poultry"
                sx={{ width: 80 }}
              />
              <Typography
                variant="h5"
                sx={{
                  fontWeight: 900,
                  ml: 1.5,
                  fontFamily: locale === "en" ? "Roboto" : "El Messiri",
                  color: "common.white",
                }}>
                {t("Al-Fadal Poultry")}
              </Typography>
            </Box>
            <Typography
              variant="body2"
              mb={2}
              sx={{ fontFamily: locale === "en" ? "Roboto" : "Marhey" }}>
              {t(
                "We’re a team of passionate individuals dedicated to making everyone's lives easier through innovative products. We create great products to solve any problem you may encounter in your work."
              )}
            </Typography>
            <Box>
              <IconButton
                component="a"
                href="https://www.facebook.com/"
                target="_blank"
                sx={{ color: "common.white" }}>
                <FacebookIcon />
              </IconButton>
              <IconButton
                component="a"
                href="https://x.com/home"
                target="_blank"
                sx={{ color: "common.white" }}>
                <TwitterIcon />
              </IconButton>
              <IconButton
                component="a"
                href="https://web.telegram.org/k/"
                target="_blank"
                sx={{ color: "common.white" }}>
                <TelegramIcon />
              </IconButton>
              <IconButton
                component="a"
                href="https://www.whatsapp.com/?lang=ar"
                target="_blank"
                sx={{ color: "common.white" }}>
                <WhatsAppIcon />
              </IconButton>
            </Box>
          </Grid>

          {/* Navigation Links */}
          <Grid item size={{ xs: 6, sm: 4, md: 2 }}>
            <Typography
              sx={{
                fontFamily: locale === "en" ? "Roboto" : "El Messiri",
                fontWeight: 800,
              }}
              variant="h6"
              color="#efb443"
              gutterBottom>
              {t("Our Links")}
            </Typography>
            {[
              { label: "Home", to: "/" },
              { label: "Services", to: "/services" },
              { label: "About Us", to: "/about-us" },
              { label: "Contact Us", to: "/contact-us" },
              { label: "History", to: "/history" },
              { label: "FAQ", to: "/fqa" },
            ].map((link) => (
              <Typography key={link.to} variant="body2" sx={{ my: 1 }}>
                <Link
                  component={RouterLink}
                  to={link.to}
                  underline="hover"
                  sx={{
                    color: "grey.100",
                    fontFamily: locale === "ar" ? "Marhey" : "Roboto",
                  }}>
                  {t(link.label)}
                </Link>
              </Typography>
            ))}
          </Grid>

          {/* Contact Info */}
          <Grid item size={{ xs: 6, sm: 4, md: 2 }}>
            <Typography
              variant="h6"
              sx={{
                fontFamily: locale === "en" ? "Roboto" : "El Messiri",
                fontWeight: 800,
              }}
              color="#efb443"
              gutterBottom>
              {t("Contact Us")}
            </Typography>
            <Box display="flex" alignItems="center" mb={1}>
              <LocationOnIcon />
              <Typography
                variant="body2"
                sx={{ fontFamily: locale === "en" ? "Roboto" : "Marhey" }}>
                {" "}
                {t("Cairo")}{" "}
              </Typography>
            </Box>
            <Box display="flex" alignItems="center" mb={1}>
              <LocationOnIcon />
              <Typography
                variant="body2"
                sx={{ fontFamily: locale === "en" ? "Roboto" : "Marhey" }}>
                {" "}
                {t("Giza , Helwan 123")}{" "}
              </Typography>
            </Box>
            <Box display="flex" alignItems="center" mb={1}>
              <PhoneIcon />
              <Typography
                variant="body2"
                sx={{ fontFamily: locale === "en" ? "Roboto" : "Marhey" }}>
                01001212121
              </Typography>
            </Box>
            <Box display="flex" alignItems="center">
              <EmailIcon />
              <Typography variant="body2">Al-Fadal@gmail.com</Typography>
            </Box>
          </Grid>

          {/* Newsletter */}
          <Grid item size={{ xs: 12, sm: 8, md: 4 }}>
            <Typography
              variant="h6"
              sx={{
                fontFamily: locale === "en" ? "Roboto" : "El Messiri",
                fontWeight: 800,
              }}
              color="#efb443"
              gutterBottom>
              {t("Newsletter")}
            </Typography>
            <Typography
              variant="body2"
              mb={1}
              my={4}
              sx={{ fontFamily: locale === "ar" ? "Marhey" : "Roboto" }}>
              {t("Receive news straight to your inbox.")}
            </Typography>
            <Box component="form" noValidate autoComplete="off" display="flex">
              <TextField
                id="outlined-suffix-shrink"
                label={t("Your email")}
                size="small"
                variant="outlined"
                // 1. Label stays white even on focus
                InputLabelProps={{
                  sx: {
                    color: "white",
                    "&.Mui-focused": { color: "white" },
                  },
                }}
                // 2. Outlined input text + border stays white
                InputProps={{
                  sx: {
                    color: "white",
                    // the outline border
                    "& .MuiOutlinedInput-notchedOutline": {
                      borderColor: "white",
                    },
                    // on hover
                    "&:hover .MuiOutlinedInput-notchedOutline": {
                      borderColor: "white",
                    },
                    // on focus
                    "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
                      borderColor: "white",
                    },
                  },

                  // 3. endAdornment hidden by default, fades in on focus
                  endAdornment: (
                    <InputAdornment
                      position="end"
                      sx={{
                        opacity: 0,
                        transition: "opacity 0.3s ease",
                        // when the parent .MuiOutlinedInput-root has .Mui-focused
                        ".MuiOutlinedInput-root.Mui-focused &": {
                          opacity: 1,
                        },
                      }}>
                      <MailOutline sx={{ color: "white" }} />
                    </InputAdornment>
                  ),
                }}
                // 4. make the blinking cursor white
                sx={{
                  "& .MuiOutlinedInput-root": {
                    "& input": { caretColor: "white" },
                  },
                }}
              />
              <Button
                size="small"
                variant="outlined"
                disableElevation
                sx={{
                  mx: 1,
                  fontFamily: locale === "en" ? "Roboto" : "El Messiri",

                  // base white styling
                  color: "white",
                  borderColor: "white",

                  // hover state: slightly tinted white background
                  "&:hover": {
                    borderColor: "white",
                    backgroundColor: "rgba(255,255,255,0.08)",
                  },

                  // focus state using native :focus pseudo-class
                  "&:focus": {
                    outline: "none",
                    borderColor: "white",
                    backgroundColor: "rgba(255,255,255,0.12)",
                  },

                  // focusVisible for keyboard navigation
                  "&.Mui-focusVisible": {
                    boxShadow: "0 0 0 3px rgba(255,255,255,0.5)",
                  },
                }}>
                {t("Send")}
              </Button>
            </Box>
          </Grid>
        </Grid>
      </Container>

      <Box
        mt={6}
        py={2}
        textAlign="center"
        sx={{ bgcolor: "rgba(0, 0, 0, 0.14)" }}>
        <Typography
          variant="body2"
          color="grey.100"
          sx={{
            fontFamily: locale === "en" ? "Roboto" : "El Messiri",
          }}>
          {t("© 2025 Al-Fadal Poultry. All rights reserved.")}
        </Typography>
      </Box>
    </Box>
  );
}
