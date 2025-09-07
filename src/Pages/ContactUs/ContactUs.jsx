import React, { useState } from "react";
import {
  Container,
  Grid,
  TextField,
  Button,
  Card,
  CardContent,
  Typography,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Box,
  Breadcrumbs,
  Link,
  Snackbar,
  Alert,
  MenuItem,
  IconButton,
  Fab,
} from "@mui/material";
import {
  FaPhone,
  FaEnvelope,
  FaClock,
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaMapMarkerAlt,
} from "react-icons/fa";
import { MdExpandMore, MdHome, MdSupport } from "react-icons/md";
import HeroSection from "../../Components/HeroSection/HeroSection";

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [errors, setErrors] = useState({});
  const [showSuccess, setShowSuccess] = useState(false);

  const subjects = [
    "Booking Inquiry",
    "Schedule Information",
    "Refund Request",
    "General Support",
    "Feedback",
  ];

  const faqData = [
    {
      question: "How can I book a train ticket online?",
      answer:
        "You can book tickets through our official website or mobile app. Select your journey details, choose available seats, and complete the payment process.",
    },
    {
      question: "What is the refund policy?",
      answer:
        "Refunds are processed within 5-7 business days. Cancellation charges may apply based on how early you cancel before the journey date.",
    },
    {
      question: "How can I check my booking status?",
      answer:
        "You can check your booking status by entering your PNR number on our website or mobile app.",
    },
    {
      question: "What identification documents are required for travel?",
      answer:
        "Valid government-issued photo ID such as Passport, Driver's License, or National ID card is required.",
    },
    {
      question: "How early should I arrive at the station?",
      answer:
        "We recommend arriving at least 30 minutes before departure for domestic journeys.",
    },
  ];

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    validateField(e.target.name, e.target.value);
  };

  const validateField = (name, value) => {
    let tempErrors = { ...errors };
    switch (name) {
      case "name":
        tempErrors.name =
          value.length < 3 ? "Name must be at least 3 characters" : "";
        break;
      case "email":
        tempErrors.email = !/^\S+@\S+\.\S+$/.test(value)
          ? "Invalid email format"
          : "";
        break;
      case "subject":
        tempErrors.subject = !value ? "Please select a subject" : "";
        break;
      case "message":
        tempErrors.message =
          value.length < 10 ? "Message must be at least 10 characters" : "";
        break;
      default:
        break;
    }
    setErrors(tempErrors);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const isValid =
      Object.values(errors).every((x) => x === "") &&
      Object.values(formData).every((x) => x !== "");

    if (isValid) {
      setShowSuccess(true);
      setFormData({ name: "", email: "", subject: "", message: "" });
    }
  };

  return (
    <Box sx={{ mt: 8 }}>
      <HeroSection HeadText={"Contact Us"} />
      <Container maxWidth="lg" sx={{ py: 4 }}>
        <Grid container spacing={4}>
          <Grid item xs={12} md={6} size={{ xs: 12, md: 6 }}>
            <Typography
              variant="h4"
              component="h3"
              sx={{
                color: "#255946",
                fontSize: "40px",
                fontWeight: 900,
                fontFamily: "El Messiri",
                mb: 1,
              }}
              gutterBottom>
              Contact Us
            </Typography>
            <form onSubmit={handleSubmit}>
              <TextField
                fullWidth
                label="Name"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                error={Boolean(errors.name)}
                helperText={errors.name}
                margin="normal"
                required
              />
              <TextField
                fullWidth
                label="Email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleInputChange}
                error={Boolean(errors.email)}
                helperText={errors.email}
                margin="normal"
                required
              />
              <TextField
                fullWidth
                select
                label="Subject"
                name="subject"
                value={formData.subject}
                onChange={handleInputChange}
                error={Boolean(errors.subject)}
                helperText={errors.subject}
                margin="normal"
                required>
                {subjects.map((option) => (
                  <MenuItem key={option} value={option}>
                    {option}
                  </MenuItem>
                ))}
              </TextField>
              <TextField
                fullWidth
                label="Message"
                name="message"
                multiline
                rows={4}
                value={formData.message}
                onChange={handleInputChange}
                error={Boolean(errors.message)}
                helperText={errors.message}
                margin="normal"
                required
              />
              <Button
                type="submit"
                variant="contained"
                size="large"
                sx={{ mt: 2, backgroundColor: "#255946", color: "white" }}>
                Send Message
              </Button>
            </form>
          </Grid>

          <Grid item xs={12} md={6}>
            <Card sx={{ mb: 4 }}>
              <CardContent>
                <Typography variant="h6" gutterBottom>
                  Contact Information
                </Typography>
                <Box sx={{ display: "flex", alignItems: "center", mb: 2 }}>
                  <FaMapMarkerAlt style={{ marginRight: "8px" }} />
                  <Typography>
                    123 Railway Square, Transport City, TC 12345
                  </Typography>
                </Box>
                <Box sx={{ display: "flex", alignItems: "center", mb: 2 }}>
                  <FaPhone style={{ marginRight: "8px" }} />
                  <Typography>+1 (555) 123-4567</Typography>
                </Box>
                <Box sx={{ display: "flex", alignItems: "center", mb: 2 }}>
                  <FaEnvelope style={{ marginRight: "8px" }} />
                  <Typography>support@railwayservice.com</Typography>
                </Box>
                <Box sx={{ display: "flex", alignItems: "center", mb: 2 }}>
                  <FaClock style={{ marginRight: "8px" }} />
                  <Typography>Mon - Sat: 8:00 AM - 8:00 PM</Typography>
                </Box>
              </CardContent>
            </Card>

            <Box sx={{ mb: 4 }}>
              <img
                src="https://images.unsplash.com/photo-1581362072978-14998d01fdaa"
                alt="Railway Station Location"
                style={{ width: "100%", height: "200px", objectFit: "cover" }}
              />
              <Button
                variant="outlined"
                startIcon={<FaMapMarkerAlt />}
                sx={{ mt: 1, backgroundColor: "#255946", color: "white" }}>
                Get Directions
              </Button>
            </Box>

            <Box sx={{ mb: 4 }}>
              <Typography variant="h6" gutterBottom>
                Follow Us
              </Typography>
              <Box sx={{ display: "flex", gap: 2 }}>
                <IconButton aria-label="Facebook">
                  <FaFacebook />
                </IconButton>
                <IconButton aria-label="Twitter">
                  <FaTwitter />
                </IconButton>
                <IconButton aria-label="Instagram">
                  <FaInstagram />
                </IconButton>
              </Box>
            </Box>
          </Grid>
        </Grid>

        <Fab
          color="primary"
          aria-label="contact support"
          sx={{ position: "fixed", bottom: 16, right: 16 }}>
          <MdSupport />
        </Fab>

        <Snackbar
          open={showSuccess}
          autoHideDuration={6000}
          onClose={() => setShowSuccess(false)}>
          <Alert
            onClose={() => setShowSuccess(false)}
            severity="success"
            sx={{ width: "100%" }}>
            Message sent successfully!
          </Alert>
        </Snackbar>
      </Container>
    </Box>
  );
};

export default ContactUs;
