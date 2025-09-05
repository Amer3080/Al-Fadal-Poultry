import React, { useEffect, useState } from "react";
import {
  AppBar,
  Toolbar,
  Button,
  Container,
  Box,
  Typography,
  Grid,
  Card,
  CardMedia,
  CardContent,
  Paper,
  IconButton,
} from "@mui/material";
import {
  Phone as PhoneIcon,
  Email as EmailIcon,
  LocationOn as LocationOnIcon,
  LinkedIn as LinkedInIcon,
  Twitter as TwitterIcon,
  Instagram as InstagramIcon,
  Facebook as FacebookIcon,
} from "@mui/icons-material";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import {
  Timeline,
  TimelineItem,
  TimelineSeparator,
  TimelineDot,
  TimelineConnector,
  TimelineContent,
} from "@mui/lab";

const sections = ["mission", "vision", "values", "team", "history"];

const teamMembers = [
  {
    name: "Sarah Johnson",
    role: "CEO & Founder",
    image:
      "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?&auto=format&fit=crop&w=400&h=400",
    bio: "Visionary leader with 15+ years of industry experience",
  },
  {
    name: "Michael Chen",
    role: "CTO",
    image:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?&auto=format&fit=crop&w=400&h=400",
    bio: "Tech innovator driving digital transformation",
  },
  {
    name: "Emily Rodriguez",
    role: "Design Director",
    image:
      "https://images.unsplash.com/photo-1580489944761-15a19d654956?&auto=format&fit=crop&w=400&h=400",
    bio: "Creative mind behind our brand identity",
  },
];

const historyEvents = [
  { year: "2010", event: "Company Founded" },
  { year: "2015", event: "Global Expansion" },
  { year: "2018", event: "Innovation Award" },
  { year: "2023", event: "Market Leadership" },
];

const fadeUp = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0 },
};

export default function AboutUs() {
  const [activeSection, setActiveSection] = useState("mission");
  const controls = useAnimation();
  const [ref, inView] = useInView({ threshold: 0.3 });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  const handleSectionClick = (section) => {
    setActiveSection(section);
    document.getElementById(section)?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  return (
    <Box sx={{ mt: 10 }}>
      <Container maxWidth="lg" sx={{ py: 6 }}>
        {/* Mission */}
        <motion.div
          id="mission"
          ref={ref}
          initial="hidden"
          animate={controls}
          variants={fadeUp}>
          <Typography variant="h3" align="center" gutterBottom>
            About Us
          </Typography>
          <Grid container spacing={4} alignItems="center">
            <Grid size={{ xs: 12, md: 6 }}>
              <Typography variant="h4" gutterBottom>
                Our Mission
              </Typography>
              <Typography color="text.secondary" paragraph>
                We strive to revolutionize industry standards through innovative
                solutions and unwavering commitment to excellence. Our mission
                is to empower businesses with cutting-edge technology while
                maintaining sustainable practices.
              </Typography>
            </Grid>
            <Grid size={{ xs: 12, md: 6 }}>
              <Box
                component="img"
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?&auto=format&fit=crop&w=800&h=500"
                alt="Team collaboration"
                loading="lazy"
                sx={{
                  width: "100%",
                  borderRadius: 2,
                  boxShadow: 3,
                }}
              />
            </Grid>
          </Grid>
        </motion.div>

        {/* Vision */}
        <motion.div
          id="vision"
          initial="hidden"
          whileInView="visible"
          variants={fadeUp}
          viewport={{ once: true }}
          sx={{ mb: 8 }}>
          <Box textAlign="center" my={8}>
            <Typography variant="h4" gutterBottom>
              Our Vision
            </Typography>
            <Typography
              color="text.secondary"
              sx={{ maxWidth: 600, mx: "auto" }}>
              To be the global leader in innovative solutions, setting new
              standards for excellence and sustainability in our industry.
            </Typography>
          </Box>
        </motion.div>

        {/* Values */}
        <motion.div
          id="values"
          initial="hidden"
          whileInView="visible"
          variants={fadeUp}
          viewport={{ once: true }}
          sx={{ mb: 8 }}>
          <Typography variant="h4" align="center" gutterBottom>
            Our Values
          </Typography>
          <Grid container spacing={4}>
            {["Innovation", "Integrity", "Excellence"].map((val) => (
              <Grid size={{ xs: 12, md: 4 }} key={val}>
                <Paper sx={{ p: 3, textAlign: "center" }} elevation={1}>
                  <Typography variant="h6" gutterBottom>
                    {val}
                  </Typography>
                  <Typography color="text.secondary">
                    Committed to maintaining the highest standards of{" "}
                    {val.toLowerCase()} in everything we do.
                  </Typography>
                </Paper>
              </Grid>
            ))}
          </Grid>
        </motion.div>

        {/* Team */}
        <motion.div
          id="team"
          initial="hidden"
          whileInView="visible"
          variants={fadeUp}
          viewport={{ once: true }}
          sx={{ mb: 8 }}>
          <Typography variant="h4" align="center" gutterBottom>
            Our Team
          </Typography>
          <Grid container spacing={4}>
            {teamMembers.map((member) => (
              <Grid size={{ xs: 12, md: 4 }} key={member.name}>
                <Card elevation={2}>
                  <CardMedia
                    component="img"
                    height="300"
                    image={member.image}
                    alt={member.name}
                  />
                  <CardContent>
                    <Typography variant="h6">{member.name}</Typography>
                    <Typography color="primary" gutterBottom>
                      {member.role}
                    </Typography>
                    <Typography color="text.secondary">{member.bio}</Typography>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </motion.div>

        {/* History */}
        <motion.div
          id="history"
          initial="hidden"
          whileInView="visible"
          variants={fadeUp}
          viewport={{ once: true }}
          sx={{ mb: 8 }}>
          <Typography variant="h4" align="center" gutterBottom>
            Our Journey
          </Typography>
          <Timeline position="alternate">
            {historyEvents.map((item, idx) => (
              <TimelineItem key={idx}>
                <TimelineSeparator>
                  <TimelineDot color="primary" />
                  {idx < historyEvents.length - 1 && <TimelineConnector />}
                </TimelineSeparator>
                <TimelineContent>
                  <Typography variant="subtitle1" color="primary">
                    {item.year}
                  </Typography>
                  <Typography color="text.secondary">{item.event}</Typography>
                </TimelineContent>
              </TimelineItem>
            ))}
          </Timeline>
        </motion.div>
      </Container>
    </Box>
  );
}
