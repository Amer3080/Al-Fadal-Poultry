import React from "react";
import { Box, Typography, Grid } from "@mui/material";

export default function FeatureSections({ features }) {
  return features.map(({ imageUrl, heading, text }, i) => (
    <Box component="section" key={i} sx={{ py: 8 }}>
      <Grid
        container
        spacing={4}
        alignItems="center"
        direction={i % 2 ? "row-reverse" : "row"}>
        <Grid item xs={12} md={6}>
          <Box
            component="img"
            src={imageUrl}
            alt={heading}
            width="100%"
            height="auto"
            loading="lazy"
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <Typography component="h2" variant="h4" gutterBottom>
            {heading}
          </Typography>
          <Typography>{text}</Typography>
        </Grid>
      </Grid>
    </Box>
  ));
}
