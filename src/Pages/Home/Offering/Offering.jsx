import { Box, Divider } from "@mui/material";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import CardActionArea from "@mui/material/CardActionArea";
import Grid from "@mui/material/Grid";
import img1 from "../../../assets/images/22.jpg";
import img2 from "../../../assets/images/23.jpg";
import img3 from "../../../assets/images/24.jpg";
import img4 from "../../../assets/images/25.jpg";
import { useContext, useEffect } from "react";
import { DataContext } from "../../../Components/Context/DataContext";
import Header from "../../../Hooks/Header";
import { useTranslation } from "react-i18next";

const content = [
  {
    img: img1,
    title: "Chicken Quality",
    content: "Lorem ium dolor sit ametad pisicing elit sed simply do ut.",
  },
  {
    img: img2,
    title: "Chicken Best",
    content: "Lorem ium dolor sit ametad pisicing elit sed simply do ut.",
  },
  {
    img: img3,
    title: "Chicken Healthy",
    content: "Lorem ium dolor sit ametad pisicing elit sed simply do ut.",
  },
  {
    img: img4,
    title: "The Best Poultry",
    content: "Lorem ium dolor sit ametad pisicing elit sed simply do ut.",
  },
];
function Offering() {
  const { locale } = useContext(DataContext);
  const { t, i18n } = useTranslation();

  useEffect(() => {
    i18n.changeLanguage(locale);
  }, [i18n, locale]);
  return (
    <>
      <Box
        sx={{
          my: { xs: 0, md: 5, lg: 10 },
          mt: { xs: 5, md: 0 },
          position: "relative",
          direction: locale === "en" ? "ltr" : "rtl",
        }}>
        <Header
          firstText={"What We’re Offering"}
          secondText={"Hatch to Harvest for Best Poultry Products"}
          thirdText={""}
        />
        <Grid container spacing={3}>
          {content.map((element, index) => (
            <Grid
              key={index}
              size={{ xs: 12, sm: 6, md: 3 }}
              sx={{ justifyContent: "center", display: "flex", my: 4 }}>
              <Card sx={{ maxWidth: 300, pb: 1 }}>
                <CardActionArea>
                  <CardMedia
                    component="img"
                    height="140"
                    image={element.img}
                    alt="green iguana"
                  />
                  <CardContent>
                    <Typography
                      gutterBottom
                      variant="h5"
                      component="div"
                      sx={{
                        color: "#255946",
                        fontWeight: "700",
                        my: 2,
                        fontFamily: locale === "en" ? "Roboto" : "El Messiri",
                      }}>
                      {t(element.title)}
                    </Typography>
                    <Typography
                      variant="body2"
                      sx={{ color: "text.secondary" }}>
                      {t(element.content)}
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>{" "}
            </Grid>
          ))}
        </Grid>
      </Box>
    </>
  );
}

export default Offering;
