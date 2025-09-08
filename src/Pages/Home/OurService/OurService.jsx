import React from "react";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";

import { GiRooster, GiBarn, GiToolbox } from "react-icons/gi";
import { FaHeadset, FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";

const features = [
  {
    id: 1,
    icon: <GiRooster size={48} color="#F57C00" />,
    title: "Chickens",
    description:
      "Healthy, free-range chickens raised in optimal conditions to ensure quality meat and eggs.",
    link: "/services",
  },
  {
    id: 2,
    icon: <GiBarn size={48} color="#8D6E63" />,
    title: "Poultry Farm",
    description:
      "State-of-the-art poultry farms with advanced ventilation and feeding systems for maximum welfare.",
    link: "/services",
  },
  {
    id: 3,
    icon: <GiToolbox size={48} color="#1976D2" />,
    title: "Chicken Equipment",
    description:
      "High-quality feeding, watering, and housing equipment designed for poultry efficiency.",
    link: "/services",
  },
  {
    id: 4,
    icon: <FaHeadset size={48} color="#388E3C" />,
    title: "Technical Support",
    description:
      "24/7 technical support for farm management, equipment maintenance, and veterinary advice.",
    link: "/services",
  },
];

export default function OurService() {
  return (
    <Container sx={{ py: 8 }}>
      <Grid container spacing={4}>
        {features.map((feature) => (
          <Grid size={{ xs: 12, sm: 6, md: 3 }} key={feature.id}>
            <Card
              sx={(theme) => ({
                position: "relative",
                p: 3,
                borderRadius: 4,
                overflow: "visible",
                height: "100%",
                display: "flex",
                flexDirection: "column",
                transition: "transform 0.3s ease, background 0.3s ease",

                // default card bg
                bgcolor:
                  theme.palette.mode === "dark"
                    ? theme.palette.background.paper
                    : "#bfe3d6ff",

                "&:hover": {
                  transform: "translateY(-8px)",
                  bgcolor: "#79d2b2ff",

                  // **correct nested selector**: & .classname
                  "& .learn-more-container": {
                    bgcolor:
                      theme.palette.mode === "dark"
                        ? theme.palette.background.default
                        : theme.palette.background.default,
                  },

                  "& .learn-more-btn": {
                    bgcolor: "#255946",
                  },
                },
              })}>
              {/* Icon */}
              <Box sx={{ display: "flex", justifyContent: "center", pt: 2 }}>
                {feature.icon}
              </Box>

              {/* Title & Description */}
              <CardContent sx={{ flexGrow: 1, textAlign: "center" }}>
                <Typography
                  variant="h6"
                  sx={{ fontWeight: "800" }}
                  gutterBottom>
                  {feature.title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {feature.description}
                </Typography>
              </CardContent>

              {/* Button Container */}
              <Box
                className="learn-more-container"
                sx={(theme) => ({
                  position: "absolute",
                  bottom: "-7%",
                  right: "-5%",
                  width: 80,
                  height: 80,
                  bgcolor:
                    theme.palette.mode === "dark"
                      ? theme.palette.background.default
                      : theme.palette.background.default,
                  borderRadius: "50px 0 0 0",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  transition: "background 0.3s ease",
                })}>
                {/* Inner Circle */}
                <IconButton
                  component={Link}
                  to={feature.link}
                  className="learn-more-btn"
                  sx={{
                    width: 55,
                    height: 55,
                    bgcolor: "#49a760",
                    borderRadius: "50%",
                    color: "#fff",
                    transition: "background 0.3s ease",
                    // you can still leave its own hover if you want
                    "&:hover": {
                      bgcolor: "#255946",
                    },
                  }}>
                  <FaArrowRight />
                </IconButton>
              </Box>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}
