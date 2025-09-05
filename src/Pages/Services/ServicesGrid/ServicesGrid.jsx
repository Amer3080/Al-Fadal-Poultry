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
import { FaRocket, FaCog, FaChartLine, FaUsers } from "react-icons/fa";

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
      title: "Digital Strategy",
      icon: <FaRocket />,
      description: "Transform your business with our digital strategies",
    },
    {
      title: "Tech Solutions",
      icon: <FaCog />,
      description: "Cutting-edge technical solutions for modern problems",
    },
    {
      title: "Data Analytics",
      icon: <FaChartLine />,
      description: "Data-driven insights to power your decisions",
    },
    {
      title: "Consulting",
      icon: <FaUsers />,
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
                <Box sx={{ fontSize: 50, mb: 2, color: "primary.main" }}>
                  {service.icon}
                </Box>
                <Typography variant="h5" gutterBottom>
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
