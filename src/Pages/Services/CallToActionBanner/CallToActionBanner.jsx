import React from "react";
import { Box, Typography, Button } from "@mui/material";

export default function CallToActionBanner({ heading, buttonText, buttonUrl }) {
  return (
    <Box
      component="section"
      sx={{
        py: 6,
        textAlign: "center",
        backgroundColor: "secondary.main",
        color: "common.white",
      }}>
      <Typography component="h2" variant="h3" gutterBottom>
        {heading}
      </Typography>
      <Button variant="contained" color="primary" href={buttonUrl}>
        {buttonText}
      </Button>
    </Box>
  );
}
