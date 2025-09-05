import React from "react";
import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  Button,
  Avatar,
  IconButton,
} from "@mui/material";
import { styled } from "@mui/system";
import { FaRocket, FaCog, FaChartLine, FaUsers } from "react-icons/fa";
import { BsArrowRight } from "react-icons/bs";
import image from "../../../assets/images/4.jpg";

const StyledHeroSection = styled(Box)(() => ({
  backgroundImage: ` url(${image})`,
  backgroundSize: "cover",
  backgroundPosition: "center",
  padding: "120px 0",
  color: "#fff",
  textAlign: "center",
}));

export default function HeroSection() {
  return (
    <Box>
      <StyledHeroSection>
        <Container>
          <Typography variant="h2" gutterBottom>
            Transform Your Business
          </Typography>
          <Typography variant="h5" sx={{ mb: 4 }}>
            Innovative Solutions for Tomorrow's Challenges
          </Typography>
          <Button variant="contained" size="large" endIcon={<BsArrowRight />}>
            Get Started
          </Button>
        </Container>
      </StyledHeroSection>
    </Box>
  );
}
