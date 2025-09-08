import React, { useContext } from "react";
import { Box, Typography, Grid } from "@mui/material";
import { DataContext } from "../../../Components/Context/DataContext";

export default function FeatureSections({ features }) {
  const { locale } = useContext(DataContext);

  return features.map(({ imageUrl, heading, text }, i) => (
    <Box
      component="section"
      key={i}
      sx={{ py: 8, direction: locale === "en" ? "ltr" : "rtl" }}>
      <Grid
        container
        spacing={4}
        alignItems="start"
        direction={i % 2 ? "row-reverse" : "row"}>
        <Grid size={{ xs: 12, md: 6 }}>
          <Box
            component="img"
            src={imageUrl}
            alt={heading}
            width="100%"
            height="auto"
            loading="lazy"
          />
        </Grid>
        <Grid size={{ xs: 12, md: 6 }} sx={{ px: 4 }}>
          <Typography
            component="h3"
            variant="h4"
            gutterBottom
            sx={{
              fontSize: { xs: "20px", md: "35px" },
              fontWeight: "900",
              color: "#255946",
              fontFamily: "Marhey",
              textAlign: {
                xs: "center",
                md: locale === "en" ? "end" : "start",
              },
            }}>
            {heading}
          </Typography>
          <Typography
            sx={{
              mt: 4,
              fontSize: "18px",
              lineHeight: 2,
              textAlign: {
                xs: "center",
                md: locale === "en" ? "end" : "start",
              },
            }}>
            {text}
          </Typography>
        </Grid>
      </Grid>
    </Box>
  ));
}
