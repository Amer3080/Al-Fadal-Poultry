import React, { useContext, useEffect, useState } from "react";
import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  Avatar,
  Rating,
  Modal,
  styled,
  IconButton,
  Tooltip,
  Divider,
} from "@mui/material";
import {
  FaQuoteLeft,
  FaQuoteRight,
  FaBuilding,
  FaWhatsapp,
  FaEnvelope,
} from "react-icons/fa";
import Header from "../../../Hooks/Header";
import { DataContext } from "../../../Components/Context/DataContext";
import { useTranslation } from "react-i18next";

const TestimonialCard = styled(Card)(({ theme }) => ({
  height: "100%",
  transition: "transform 0.3s ease-in-out",
  "&:hover": {
    transform: "translateY(-5px)",
    boxShadow: theme.shadows[10],
  },
}));

const testimonials = [
  {
    id: 1,
    clientName: "Mohamed Ahmed",
    clientDesignation: "Local Resident",
    testimonialText:
      "The municipal corporation's new online service portal has made it incredibly easy to pay property taxes and access public services. The digital transformation is truly commendable.",
    profileImage:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e",
    rating: 5,
    date: "2024-01-15",
    whatsapp: "+1234567890",
    email: "robert.johnson@email.com",
  },
  {
    id: 2,
    clientName: "Mona Ali",
    clientDesignation: "Small Business Owner",
    testimonialText:
      "The corporation's business licensing department has streamlined their processes significantly. Their support for local businesses during challenging times has been exceptional.",
    profileImage:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330",
    rating: 4,
    date: "2024-01-10",
    whatsapp: "+1987654321",
    email: "emily.williams@email.com",
  },
  {
    id: 3,
    clientName: "Ahmed Fathy",
    clientDesignation: "Community Leader",
    testimonialText:
      "The public works department's responsiveness to community needs has improved dramatically. Their new complaint resolution system is efficient and citizen-friendly.",
    profileImage:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e",
    rating: 5,
    date: "2024-01-05",
    whatsapp: "+1122334455",
    email: "david.chang@email.com",
  },
];

const Testimonials = () => {
  const [selectedTestimonial, setSelectedTestimonial] = useState(null);
  const [open, setOpen] = useState(false);

  const handleOpen = (testimonial) => {
    setSelectedTestimonial(testimonial);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const { locale } = useContext(DataContext);
  const { t, i18n } = useTranslation();

  useEffect(() => {
    i18n.changeLanguage(locale);
  }, [i18n, locale]);

  return (
    <Container
      maxWidth="lg"
      sx={{ my: 12, direction: locale === "en" ? "ltr" : "rtl" }}>
      <Box textAlign="center" mb={6}>
        <Box display="flex" justifyContent="center" alignItems="center" mb={2}>
          <Header
            firstText={"Testimonial"}
            secondText={"What Client Say Our Poultry Farm"}
            thirdText={""}
          />
        </Box>
      </Box>
      <Grid container spacing={4}>
        {testimonials.map((testimonial) => (
          <Grid item size={{ xs: 12, md: 4 }} key={testimonial.id}>
            <TestimonialCard onClick={() => handleOpen(testimonial)}>
              <CardContent sx={{ p: 4 }}>
                <Box display="flex" alignItems="center" mb={3}>
                  <Avatar
                    src={testimonial.profileImage}
                    alt={testimonial.clientName}
                    sx={{ width: 64, height: 64, mr: 2 }}
                  />
                  <Box>
                    <Typography
                      variant="h6"
                      sx={{
                        fontFamily: locale === "en" ? "Roboto" : "El Messiri",
                        mr: 2,
                      }}>
                      {t(testimonial.clientName)}
                    </Typography>
                    <Typography
                      variant="subtitle2"
                      color="text.secondary"
                      sx={{
                        fontFamily: locale === "en" ? "Roboto" : "Marhey",
                        mr: 3,
                      }}>
                      {t(testimonial.clientDesignation)}
                    </Typography>
                  </Box>
                </Box>
                <Box sx={{ position: "relative", mb: 2 }}>
                  {locale === "en" ? (
                    <FaQuoteLeft
                      size={24}
                      style={{ color: "#ddd", marginBottom: "8px" }}
                    />
                  ) : (
                     <FaQuoteRight
                    size={24}
                    style={{ color: "#ddd", marginBottom: "8px" }}
                  />
                  )}
                  <Typography variant="body1">
                    {t(testimonial.testimonialText)}
                  </Typography>
                </Box>
                <Box
                  display="flex"
                  justifyContent="space-between"
                  alignItems="center">
                  <Rating value={testimonial.rating} readOnly />
                </Box>
              </CardContent>
            </TestimonialCard>
          </Grid>
        ))}
      </Grid>

      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="testimonial-modal"
        aria-describedby="testimonial-description">
        <Box
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: { xs: "90%", sm: 600 },
            bgcolor: "background.paper",
            boxShadow: 24,
            p: 4,
            borderRadius: 2,
          }}>
          {selectedTestimonial && (
            <>
              <Box display="flex" alignItems="center" mb={3}>
                <Avatar
                  src={selectedTestimonial.profileImage}
                  alt={selectedTestimonial.clientName}
                  sx={{ width: 80, height: 80, mr: 2 }}
                />
                <Box>
                  <Typography variant="h5">
                    {selectedTestimonial.clientName}
                  </Typography>
                  <Typography variant="subtitle1" color="text.secondary">
                    {selectedTestimonial.clientDesignation}
                  </Typography>
                </Box>
              </Box>
              <Typography variant="body1" sx={{ mb: 2 }}>
                {selectedTestimonial.testimonialText}
              </Typography>
              <Box
                display="flex"
                justifyContent="space-between"
                alignItems="center">
                <Rating
                  value={selectedTestimonial.rating}
                  readOnly
                  size="large"
                />
                <Typography variant="body2" color="text.secondary">
                  {new Date(selectedTestimonial.date).toLocaleDateString()}
                </Typography>
              </Box>
            </>
          )}
        </Box>
      </Modal>
    </Container>
  );
};

export default Testimonials;
