import React from "react";
import { Box, Typography, Button } from "@mui/material";

export default function CallToActionBanner({ heading, buttonText, buttonUrl }) {
  return (
    <Box
      component="section"
      sx={{
        py: 6,
        textAlign: "center",
        backgroundColor: "#255946",
        color: "common.white",
      }}>
      <Typography component="h2" variant="h3" gutterBottom>
        {heading}
      </Typography>

      <Button
        variant="contained"
        disableElevation
        sx={{
          background: "linear-gradient(90deg, #7e22ce 0%, #ec4899 100%)", // from-purple-600 → to-pink-600
          px: 4, // equivalent to Tailwind’s px-8 (32px)
          py: 1.5, // equivalent to Tailwind’s py-3 (12px)
          borderRadius: "9999px",
          fontSize: "1.125rem", // text-lg
          fontWeight: 600, // font-semibold
          textTransform: "none",
          transition: "transform 0.2s ease-in-out",
          "&:hover": {
            background: "linear-gradient(90deg, #6b21a8 0%, #db2777 100%)", // hover:from-purple-700 → hover:to-pink-700
            transform: "scale(1.05)",
          },
          mt: 3,
        }}>
        {buttonText}
      </Button>
    </Box>
  );
}
