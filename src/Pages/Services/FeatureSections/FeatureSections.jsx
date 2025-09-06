import React, { useContext } from "react";
import { Box, Typography, Grid } from "@mui/material";
import { DataContext } from "../../../Components/Context/DataContext";

export default function FeatureSections({ features }) {
  const { locale } = useContext(DataContext);

  return features.map(({ imageUrl, heading, text }, i) => (
    <Box component="section" key={i} sx={{ py: 8 }}>
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
            component="h2"
            variant="h4"
            gutterBottom
            sx={{
              fontSize: "1.8vw",
              fontWeight: "900",
              color: "#255946",
              fontFamily: locale === "en" ? "Roboto" : "El Messiri",
            }}>
            {heading}
          </Typography>
          <Typography sx={{ mt: 4, fontSize: "1.4vW", lineHeight: 2 }}>
            {text}
          </Typography>
        </Grid>
      </Grid>
    </Box>
  ));
}
