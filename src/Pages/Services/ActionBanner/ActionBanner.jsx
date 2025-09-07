import React from "react";
import { Box, Typography, Button } from "@mui/material";
import image from "../../../assets/images/Frame.png";
export default function ActionBanner({ heading }) {
  return (
    <Box
      component="section"
      sx={{
        py: 3,
        textAlign: "center",
        background: `url(${image})`,
        // background: "linear-gradient(90deg, #7e22ce 0%, #ec4899 100%)",
        color: "common.white",
      }}>
      <Typography
        component="h3"
        variant="h4"
        sx={{
          fontWeight: "bold",
          color: "#147242",
          fontSize: { xs: "24px", md: "34px", lg: "45px" },
        }}
        gutterBottom>
        {heading}
      </Typography>
      <Typography
        component="h3"
        variant="h6"
        sx={{
          color: "#147242",
          fontSize: { xs: "14px", md: "24px", lg: "30px" },
          fontFamily: "bold",
        }}>
        FPF For Poultry Production
      </Typography>
    </Box>
  );
}
