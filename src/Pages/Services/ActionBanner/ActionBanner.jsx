import React from "react";
import { Box, Typography, Button } from "@mui/material";

export default function ActionBanner({ heading }) {
  return (
    <Box
      component="section"
      sx={{
        py: 1,
        textAlign: "center",
        // backgroundColor: "#ebd43aff",
        background: "linear-gradient(90deg, #7e22ce 0%, #ec4899 100%)",
        color: "common.white",
      }}>
      <Typography
        component="h2"
        variant="h2"
        sx={{
          fontWeight: "bold",
        }}
        gutterBottom>
        {heading}
      </Typography>
      <Typography component="h3" variant="h5">
        FPF For Poultry Production
      </Typography>
    </Box>
  );
}
