import React, { useContext, useEffect } from "react";
import {
  Typography,
  Box,
  Grid,
  Card,
  CardContent,
  CardMedia,
} from "@mui/material";
import CardActionArea from "@mui/material/CardActionArea";
import CardActions from "@mui/material/CardActions";
import IconButton from "@mui/material/IconButton";
import ArrowCircleRightRoundedIcon from "@mui/icons-material/ArrowCircleRightRounded";
import ArrowCircleLeftIcon from "@mui/icons-material/ArrowCircleLeft";
import imgOne from "../../../assets/images/22.jpg";
import imgTwo from "../../../assets/images/23.jpg";
import imgThree from "../../../assets/images/26.jpg";
import imgFour from "../../../assets/images/28.jpg";
import { useTranslation } from "react-i18next";
import { DataContext } from "../../../Components/Context/DataContext";

export default function OurService() {
  const { locale } = useContext(DataContext);

  const { t, i18n } = useTranslation();

  useEffect(() => {
    i18n.changeLanguage(locale);
  }, [i18n, locale]);
  const services = [
    {
      name: t("Chicken Equipment"),
      img: imgOne,
      description: t(
        "The wise man therefore always holds in these matters to this principlesimilique sunt in culpaqui officia deserunt"
      ),
    },
    {
      name: t("Quality Matters"),
      img: imgTwo,
      description: t(
        "The wise man therefore always holds in these matters to this principlesimilique sunt in culpaqui officia deserunt"
      ),
    },
    {
      name: t("Products Range"),
      img: imgThree,
      description: t(
        "The wise man therefore always holds in these matters to this principlesimilique sunt in culpaqui officia deserunt"
      ),
    },
    {
      name: t("Free Shipping"),
      img: imgFour,
      description: t(
        "The wise man therefore always holds in these matters to this principlesimilique sunt in culpaqui officia deserunt"
      ),
    },
  ];
  return (
    <Box
      sx={{
        flexGrow: 1,
        m: 2,
        my: { xs: 5, lg: 10 },
        direction: locale === "en" ? "ltr" : "rtl",
      }}>
      <Grid container spacing={5}>
        {services.map((service) => (
          <Grid
            item
            size={{ xs: 12, sm: 6, md: 3 }}
            key={service.name}
            sx={{
              display: "flex",
              justifyContent: "center",
            }}>
            <Card sx={{ maxWidth: 300 }}>
              <CardActionArea>
                <CardMedia
                  component="img"
                  height="140"
                  image={service.img}
                  alt="green iguana"
                />
                <CardContent>
                  <Typography
                    gutterBottom
                    variant="h5"
                    component="div"
                    sx={{
                      color: "#255946",
                      fontWeight: 700,
                      fontFamily: locale === "en" ? "Roboto" : "El Messiri",
                    }}>
                    {service.name}
                  </Typography>
                  <Typography variant="body2" sx={{ color: "text.secondary" }}>
                    {service.description}
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions sx={{ display: "flex", justifyContent: "end" }}>
                <IconButton aria-label="Arrow" color="success">
                  {locale === "en" ? (
                    <ArrowCircleRightRoundedIcon fontSize="large" />
                  ) : (
                    <ArrowCircleLeftIcon fontSize="large" />
                  )}
                </IconButton>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}

/*{


}*/
