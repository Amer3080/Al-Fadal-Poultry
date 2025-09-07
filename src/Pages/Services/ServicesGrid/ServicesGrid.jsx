import React from "react";
import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
} from "@mui/material";
import { styled } from "@mui/system";
import { FaShippingFast } from "react-icons/fa";
import { GiChicken } from "react-icons/gi";
import { PiFarmLight } from "react-icons/pi";
import { MdOutlineSupportAgent } from "react-icons/md";
const ServiceCard = styled(Card)({
  height: "100%",
  transition: "transform 0.3s",
  "&:hover": {
    transform: "translateY(-10px)",
  },
});
export default function ServicesGrid() {
  const services = [
    {
      title: "Health Chicken",
      icon: <GiChicken />,
      description: "Transform your business with our digital strategies",
    },
    {
      title: "Chicken Equipment",
      icon: <PiFarmLight />,
      description: "Cutting-edge technical solutions for modern problems",
    },
    {
      title: "Tech Solutions",
      icon: <MdOutlineSupportAgent />,
      description: "Data-driven insights to power your decisions",
    },
    {
      title: "Free Shipping",
      icon: <FaShippingFast />,
      description: "Expert consulting to guide your business growth",
    },
  ];
  return (
    <Container sx={{ py: 8 }}>
      <Grid container spacing={4}>
        {services.map((service, index) => (
          <Grid size={{ xs: 12, sm: 6, md: 3 }} key={index}>
            <ServiceCard>
              <CardContent sx={{ textAlign: "center" }}>
                <Box sx={{ fontSize: 50, mb: 2, color: "#255946" }}>
                  {service.icon}
                </Box>
                <Typography
                  variant="h5"
                  sx={{ fontWeight: "bold", color: "#255946" }}
                  gutterBottom>
                  {service.title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {service.description}
                </Typography>
              </CardContent>
            </ServiceCard>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}
