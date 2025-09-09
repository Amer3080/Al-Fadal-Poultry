import { useState, lazy, Suspense, useContext, useEffect } from "react";
import { format } from "date-fns";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";

import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Card from "@mui/material/Card";
import CardActionArea from "@mui/material/CardActionArea";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import Collapse from "@mui/material/Collapse";
import Skeleton from "@mui/material/Skeleton";

import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
import RocketLaunchIcon from "@mui/icons-material/RocketLaunch";
import LanguageIcon from "@mui/icons-material/Language";
import ScienceIcon from "@mui/icons-material/Science";
import ComputerIcon from "@mui/icons-material/Computer";

import Timeline from "@mui/lab/Timeline";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineOppositeContent from "@mui/lab/TimelineOppositeContent";
import TimelineDot from "@mui/lab/TimelineDot";

import imageOne from "../../assets/images/s1.jpg";
import imageTwo from "../../assets/images/s2.jpg";
import imageThree from "../../assets/images/s3.jpg";
import imageFour from "../../assets/images/s5.jpg";
import fallbackImage from "../../assets/images/1.jpg";
import { Helmet } from "react-helmet-async";
import { DataContext } from "../../Components/Context/DataContext";
import { useTranslation } from "react-i18next";

const HeroSection = lazy(() =>
  import("../../Components/HeroSection/HeroSection")
);

const LazyImage = ({ src, alt }) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    rootMargin: "200px",
  });

  return (
    <Box ref={ref}>
      {inView ? (
        <CardMedia
          component="img"
          height="200"
          image={src}
          alt={alt}
          sx={{
            filter: (theme) =>
              theme.palette.mode === "dark" ? "brightness(0.8)" : "none",
          }}
          onError={(e) => {
            e.target.src = fallbackImage;
          }}
        />
      ) : (
        <Skeleton variant="rectangular" height={200} />
      )}
    </Box>
  );
};

const History = () => {
  const [expandedId, setExpandedId] = useState(null);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  const toggleExpand = (id) => {
    setExpandedId((prev) => (prev === id ? null : id));
  };
  const { locale } = useContext(DataContext);
  const { t, i18n } = useTranslation();
  const timelineData = [
    {
      id: 1,
      title: t("First Moon Landing"),
      date: "1969-07-20",
      description:
        "Neil Armstrong becomes the first human to walk on the moon during the Apollo 11 mission.",
      image: imageOne,
      dotIcon: <RocketLaunchIcon color="primary" />,
    },
    {
      id: 2,
      title: "World Wide Web Invention",
      date: "1989-03-12",
      description:
        "Tim Berners-Lee invents the World Wide Web, revolutionizing global communication.",
      image: imageTwo,
      dotIcon: <LanguageIcon color="secondary" />,
    },
    {
      id: 3,
      title: "Discovery of DNA Structure",
      date: "1953-04-25",
      description:
        "Watson and Crick publish their groundbreaking paper on the structure of DNA.",
      image: imageThree,
      dotIcon: <ScienceIcon color="success" />,
    },
    {
      id: 4,
      title: "First Digital Computer",
      date: "1946-02-14",
      description:
        "ENIAC, the first general-purpose electronic computer, is unveiled to the public.",
      image: imageFour,
      dotIcon: <ComputerIcon color="error" />,
    },
  ];
  useEffect(() => {
    i18n.changeLanguage(locale);
  }, [i18n, locale]);

  return (
    <Box>
      <Helmet>
        <title>History</title>
        <meta
          name="description"
          content="Natural Poultry products 100% from Al Fadal Establishment, committed to quality and food safety standards."
        />
      </Helmet>
      <Suspense fallback={<Skeleton variant="rectangular" height={240} />}>
        <HeroSection HeadText="History" />
      </Suspense>
      <Box
        sx={{
          maxWidth: 900,
          mx: "auto",
          px: { xs: 2, md: 4 },
          py: { xs: 3, md: 4 },
        }}>
        <Timeline position={isMobile ? "right" : "alternate"}>
          {timelineData.map((event, idx) => (
            <TimelineItem key={event.id}>
              <TimelineOppositeContent
                sx={{
                  m: "auto 0",
                  display: { xs: "none", md: "block" },
                }}
                align={idx % 2 === 0 ? "right" : "left"}>
                <Box display="flex" alignItems="center" gap={1}>
                  <CalendarTodayIcon fontSize="small" color="action" />
                  <Typography variant="body2" color="text.secondary">
                    {format(new Date(event.date), "MMMM dd, yyyy")}
                  </Typography>
                </Box>
              </TimelineOppositeContent>

              <TimelineSeparator>
                <TimelineDot>{event.dotIcon}</TimelineDot>
                {idx < timelineData.length - 1 && <TimelineConnector />}
              </TimelineSeparator>

              <TimelineContent sx={{ py: 2, px: 1 }}>
                {isMobile && (
                  <Box display="flex" alignItems="center" gap={1} mb={1}>
                    <CalendarTodayIcon fontSize="small" color="action" />
                    <Typography variant="body2" color="text.secondary">
                      {format(new Date(event.date), "MMMM dd, yyyy")}
                    </Typography>
                  </Box>
                )}

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: idx * 0.2 }}
                  whileHover={{ scale: 1.02 }}
                  style={{ cursor: "pointer" }}
                  role="button"
                  tabIndex={0}
                  aria-expanded={expandedId === event.id}
                  onClick={() => toggleExpand(event.id)}
                  onKeyDown={(e) =>
                    e.key === "Enter" && toggleExpand(event.id)
                  }>
                  <Card elevation={3}>
                    <CardActionArea>
                      <LazyImage src={event.image} alt={event.title} />

                      <CardContent>
                        <Typography
                          variant="h6"
                          gutterBottom
                          sx={{
                            fontSize: { xs: "1.1rem", md: "1.25rem" },
                          }}>
                          {event.title}
                        </Typography>

                        <motion.div
                          layout
                          initial={{ height: 0, opacity: 0 }}
                          animate={{
                            height: expandedId === event.id ? "auto" : 0,
                            opacity: expandedId === event.id ? 1 : 0,
                          }}
                          transition={{ duration: 0.4 }}>
                          <Collapse
                            in={expandedId === event.id}
                            timeout="auto"
                            unmountOnExit>
                            <Typography
                              variant="body2"
                              color="text.secondary"
                              sx={{
                                fontSize: { xs: "0.85rem", md: "0.95rem" },
                              }}>
                              {event.description}
                            </Typography>
                          </Collapse>
                        </motion.div>
                      </CardContent>
                    </CardActionArea>
                  </Card>
                </motion.div>
              </TimelineContent>
            </TimelineItem>
          ))}
        </Timeline>
      </Box>
    </Box>
  );
};

export default History;
