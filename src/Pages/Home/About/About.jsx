import { Box, Button, Divider } from "@mui/material";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import { useContext, useEffect } from "react";
import { DataContext } from "../../../Components/Context/DataContext";
import image from "../../../assets/images/w.jpg";
import { useTranslation } from "react-i18next";
import { styled } from "@mui/material/styles";
import Header from "../../../Hooks/Header";
import KeyboardTabIcon from "@mui/icons-material/KeyboardTab";
import KeyboardReturnIcon from "@mui/icons-material/KeyboardReturn";

const Demo = styled("div")(({ theme }) => ({
  backgroundColor: (theme.vars || theme).palette.background.paper,
}));

function About() {
  const { locale } = useContext(DataContext);
  const { t, i18n } = useTranslation();

  useEffect(() => {
    i18n.changeLanguage(locale);
  }, [i18n, locale]);
  return (
    <>
      <Box
        sx={{
          flexGrow: 1,
          m: 2,
          mx: 5,
          direction: locale === "en" ? "ltr" : "rtl",
        }}>
        <Divider component={"h5"} sx={{ mb: 7, width: "80%", mx: "auto" }} />
        <Header
          firstText={"About US"}
          secondText={"We offer healthy & natural poultry such as chickens "}
          thirdText={"Attention to ensure optimal growth and well-being."}
        />
        <Grid container spacing={4}>
          <Grid
            size={{ md: 12, lg: 6 }}
            sx={{
              my: { xs: 2, md: 3 },
              textAlign: { xs: "center", md: "center", lg: "start" },
            }}>
            <Typography
              component="p"
              color="gray"
              sx={{
                my: 1,
                fontSize: "30px",
                fontFamily: "Marhey",
                textTransform: "capitalize",
                color: "#49a760",
              }}>
              {t("Providing premium poultry since 1983")}
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
              {t("We monitor agricultural products for customers & partners")}{" "}
            </Typography>
            <Typography
              component={"p"}
              sx={{ fontSize: "18px", color: "gray", lineHeight: 2 }}>
              {t(
                "Amet consectetur adipiscing elit duis tristique sollicitudin nibh. Platea dictumst vestibulum rhoncus est pellentesque."
              )}
            </Typography>
            <Typography
              component={"p"}
              sx={{ fontSize: "18px", color: "gray", lineHeight: 2, pt: 3 }}>
              {t(
                "Curabitur gravida arcu ac tortor. Non consectetur a erat nam at. Facilisis magna etiam tempor orci eu lobortis elementum nibh tellus. Sollicitudin aliquam ultrices sagittis orci a scelerisque purus."
              )}
            </Typography>
            <Box>
              <Button
                endIcon={locale === "en" ? <KeyboardTabIcon /> : ""}
                startIcon={<KeyboardTabIcon sx={{ ml: 2 }} />}
                sx={{
                  direction: locale === "en" ? "ltr" : "rtl",
                  textTransform: "capitalize",
                  my: 3,
                  borderRadius: "5%",
                  fontFamily: locale === "en" ? "Roboto" : "Marhey",
                }}
                variant="contained"
                color="success"
                size="large">
                {t("About Us")}
              </Button>
            </Box>
          </Grid>
          <Grid size={{ md: 12, lg: 6 }}>
            <img
              src={image}
              alt="photo"
              width={"100%"}
              style={{ borderRadius: "2%" }}
            />
          </Grid>
        </Grid>
      </Box>
    </>
  );
}

export default About;
