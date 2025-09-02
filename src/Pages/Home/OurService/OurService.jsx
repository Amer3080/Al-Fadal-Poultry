// OurService.jsx
import React, {
  useContext,
  useEffect,
  lazy,
  Suspense,
  memo,
  useMemo,
} from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardActionArea from "@mui/material/CardActionArea";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import { useTranslation } from "react-i18next";
import { DataContext } from "../../../Components/Context/DataContext";

import imgOne from "../../../assets/images/6.jpg";
import imgTwo from "../../../assets/images/7.jpg";
import imgThree from "../../../assets/images/8.jpg";
import imgFour from "../../../assets/images/9.jpg";

// dynamic imports for icons
const ArrowRightIcon = lazy(() =>
  import("@mui/icons-material/ArrowCircleRightRounded")
);
const ArrowLeftIcon = lazy(() => import("@mui/icons-material/ArrowCircleLeft"));

// memoized style objects
const containerStyles = {
  flexGrow: 1,
  m: 2,
  my: { xs: 5, lg: 10 },
};
const gridContainerProps = { spacing: 5 };
const gridItemStyles = { display: "flex", justifyContent: "center" };
const cardStyles = { maxWidth: 350 };
const mediaStyles = {
  width: "100%",
  height: 0,
  paddingTop: "56.25%", // 16:9 aspect ratio
  objectFit: "cover",
};
const titleSX = (locale) => ({
  color: "#255946",
  fontWeight: 700,
  fontFamily: locale === "en" ? "Roboto" : "El Messiri",
});
const descriptionSX = { color: "text.secondary" };

function OurService() {
  const { locale } = useContext(DataContext);
  const { t, i18n } = useTranslation();

  // sync language
  useEffect(() => {
    i18n.changeLanguage(locale);
  }, [i18n, locale]);

  // services data
  const services = useMemo(
    () => [
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
    ],
    [t]
  );
  console.log(imgOne, imgTwo);
  return (
    <>
      <Box
        component="section"
        aria-labelledby="services-heading"
        sx={{ ...containerStyles, direction: locale === "en" ? "ltr" : "rtl" }}>
        <Grid container {...gridContainerProps}>
          {services.map(({ name, img, description }) => (
            <Grid
              key={name}
              size={{ xs: 12, sm: 6, md: 3 }}
              sx={gridItemStyles}>
              <Card sx={cardStyles}>
                <CardActionArea component="div" aria-label={name}>
                  <CardMedia
                    component="div"
                    sx={{
                      backgroundImage: `url(${img})`,
                      backgroundSize: "cover",
                      backgroundPosition: "center",
                      ...mediaStyles,
                    }}
                    role="img"
                    aria-label={name}
                  />
                  <CardContent>
                    <Typography
                      gutterBottom
                      variant="h5"
                      component="h3"
                      sx={titleSX(locale)}>
                      {name}
                    </Typography>
                    <Typography variant="body2" sx={descriptionSX}>
                      {description}
                    </Typography>
                  </CardContent>
                </CardActionArea>

                <CardActions sx={{ justifyContent: "flex-end" }}>
                  <Suspense
                    fallback={<span style={{ width: 40, height: 40 }} />}>
                    <IconButton
                      color="success"
                      aria-label={t("navigate")}
                      size="large">
                      {locale === "en" ? (
                        <ArrowRightIcon fontSize="inherit" />
                      ) : (
                        <ArrowLeftIcon fontSize="inherit" />
                      )}
                    </IconButton>
                  </Suspense>
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>
    </>
  );
}

export default memo(OurService);
