import React, { useState } from "react";
import {
  Box,
  Container,
  Typography,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Grid,
  Card,
  useTheme,
} from "@mui/material";
import { IoIosArrowDown } from "react-icons/io";
import {
  FaPlane,
  FaHotel,
  FaPassport,
  FaUmbrella,
  FaSuitcase,
  FaGlobeAmericas,
} from "react-icons/fa";
import { styled } from "@mui/material";
import HeroSection from "../../Components/HeroSection/HeroSection";

const StyledAccordion = styled(Accordion)(() => ({
  marginBottom: "16px",
  borderRadius: "8px !important",
  boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
  "&:before": {
    display: "none",
  },
  "&.Mui-expanded": {
    margin: "0 0 16px 0",
  },
}));
const IconWrapper = styled(Box)({
  marginRight: "12px",
  display: "flex",
  alignItems: "center",
  color: "#2196f3",
});
const Faq = () => {
  const [expanded, setExpanded] = useState(false);
  const theme = useTheme();
  // const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  const faqData = [
    {
      id: "panel1",
      icon: <FaSuitcase size={24} />,
      question: "What types of vacation packages do you offer?",
      answer:
        "We offer a wide range of vacation packages including all-inclusive resort stays, adventure tours, luxury cruises, and customized itineraries. Our packages can be tailored to different budgets and preferences, whether you're looking for a romantic getaway, family vacation, or solo adventure.",
    },
    {
      id: "panel2",
      icon: <FaPlane size={24} />,
      question: "How can I find the best flight deals?",
      answer:
        "To find the best flight deals, we recommend booking 3-6 months in advance, being flexible with your travel dates, and using our price alert feature. We also offer exclusive discounts and promotional fares for our registered customers.",
    },
    {
      id: "panel3",
      icon: <FaHotel size={24} />,
      question: "What's included in your hotel accommodations?",
      answer:
        "Our hotel accommodations vary by property but typically include standard amenities, daily housekeeping, and access to hotel facilities. Many of our partner hotels also offer complimentary breakfast, Wi-Fi, and airport transfers.",
    },
    {
      id: "panel4",
      icon: <FaUmbrella size={24} />,
      question: "What does your travel insurance cover?",
      answer:
        "Our comprehensive travel insurance covers trip cancellation, medical emergencies, lost baggage, flight delays, and emergency evacuation. We recommend reviewing the policy details as coverage may vary based on the plan selected.",
    },
    {
      id: "panel5",
      icon: <FaPassport size={24} />,
      question: "How can you assist with visa requirements?",
      answer:
        "We provide guidance on visa requirements for your destination, help with documentation preparation, and can refer you to trusted visa service providers. We recommend checking visa requirements at least 3 months before your planned travel date.",
    },
    {
      id: "panel6",
      icon: <FaGlobeAmericas size={24} />,
      question: "Can you recommend destinations based on my preferences?",
      answer:
        "Yes! Our travel experts can provide personalized destination recommendations based on your interests, budget, preferred travel style, and desired experiences. We consider factors like seasonal weather, local events, and current travel conditions.",
    },
  ];

  return (
    <Box sx={{ mt: 8 }}>
      <HeroSection HeadText={"FAQ"} />
      <Container maxWidth="lg" sx={{ py: 8 }}>
        <Typography
          variant="h3"
          component="h1"
          align="center"
          gutterBottom
          sx={{
            color: "#255946",
            fontSize: { xs: "36px", md: "48px", lg: "56px" },
            fontWeight: 900,
            fontFamily: "El Messiri",
            mb: 6,
          }}>
          Frequently Asked Questions
        </Typography>

        <Grid container spacing={4}>
          <Grid size={{ xs: 12, md: 7 }}>
            <Card
              elevation={3}
              sx={{
                p: 2,
                borderRadius: 2,
                height: "100%",
                bgcolor: "background.paper",
              }}>
              {faqData.map((faqs) => (
                <StyledAccordion
                  key={faqs.id}
                  expanded={expanded === faqs.id}
                  onChange={handleChange(faqs.id)}>
                  <AccordionSummary
                    expandIcon={<IoIosArrowDown />}
                    sx={{
                      "& .MuiAccordionSummary-content": {
                        display: "flex",
                        alignItems: "center",
                      },
                    }}>
                    <IconWrapper>{faqs.icon}</IconWrapper>
                    <Typography
                      variant="h6"
                      sx={{ color: "#333", fontSize: "1.1rem" }}>
                      {faqs.question}
                    </Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Typography sx={{ color: "#666", pl: 5 }}>
                      {faqs.answer}
                    </Typography>
                  </AccordionDetails>
                </StyledAccordion>
              ))}
            </Card>
          </Grid>

          <Grid
            size={{ xs: 12, md: 5 }}
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}>
            <Box
              component="img"
              src="https://images.unsplash.com/photo-1557804506-669a67965ba0"
              alt="FAQ Support Illustration"
              sx={{
                width: "100%",
                maxWidth: 500,
                height: "auto",
                borderRadius: 2,
                boxShadow: 3,
              }}
              onError={(e) => {
                e.target.src =
                  "https://images.unsplash.com/photo-1516321318423-f06f85e504b3";
              }}
            />
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Faq;
