// Install dependencies:
// npm install @mui/material @mui/icons-material @mui/lab date-fns framer-motion

import React, { useState } from "react";
import { format } from "date-fns";
import { motion } from "framer-motion";

import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Card from "@mui/material/Card";
import CardActionArea from "@mui/material/CardActionArea";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import Collapse from "@mui/material/Collapse";

import CalendarTodayIcon from "@mui/icons-material/CalendarToday";

import Timeline from "@mui/lab/Timeline";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineOppositeContent from "@mui/lab/TimelineOppositeContent";
import TimelineDot from "@mui/lab/TimelineDot";
import HeroSection from "../../Components/HeroSection/HeroSection";

const History = () => {
  const [expandedId, setExpandedId] = useState(null);

  const timelineData = [
    {
      id: 1,
      title: "First Moon Landing",
      date: "1969-07-20",
      description:
        "Neil Armstrong becomes the first human to walk on the moon during the Apollo 11 mission.",
      image: "https://images.unsplash.com/photo-1541185933-ef5d8ed016c2",
    },
    {
      id: 2,
      title: "World Wide Web Invention",
      date: "1989-03-12",
      description:
        "Tim Berners-Lee invents the World Wide Web, revolutionizing global communication.",
      image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa",
    },
    {
      id: 3,
      title: "Discovery of DNA Structure",
      date: "1953-04-25",
      description:
        "Watson and Crick publish their groundbreaking paper on the structure of DNA.",
      image: "https://images.unsplash.com/photo-1583912267550-d6cc3c410051",
    },
    {
      id: 4,
      title: "First Digital Computer",
      date: "1946-02-14",
      description:
        "ENIAC, the first general-purpose electronic computer, is unveiled to the public.",
      image: "https://images.unsplash.com/photo-1518770660439-4636190af475",
    },
  ];

  const toggleExpand = (id) => {
    setExpandedId(expandedId === id ? null : id);
  };

  return (
    <Box>
      <HeroSection HeadText={"History"} />
      <Box sx={{ maxWidth: 900, mx: "auto", p: 4 }}>
        <Timeline position="alternate">
          {timelineData.map((event, idx) => (
            <TimelineItem key={event.id}>
              <TimelineOppositeContent
                sx={{ m: "auto 0" }}
                align={idx % 2 === 0 ? "right" : "left"}>
                <Box display="flex" alignItems="center" gap={1}>
                  <CalendarTodayIcon fontSize="small" color="action" />
                  <Typography variant="body2" color="textSecondary">
                    {format(new Date(event.date), "MMMM dd, yyyy")}
                  </Typography>
                </Box>
              </TimelineOppositeContent>

              <TimelineSeparator>
                <TimelineDot color="primary" />
                {idx < timelineData.length - 1 && <TimelineConnector />}
              </TimelineSeparator>

              <TimelineContent sx={{ py: "12px", px: 2 }}>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: idx * 0.2 }}
                  whileHover={{ scale: 1.02 }}
                  style={{ cursor: "pointer" }}
                  onClick={() => toggleExpand(event.id)}>
                  <Card elevation={3}>
                    <CardActionArea>
                      <CardMedia
                        component="img"
                        height="200"
                        image={event.image}
                        alt={event.title}
                        onError={(e) => {
                          e.target.src =
                            "https://images.unsplash.com/photo-1618005198919-d3d4b5a92ead";
                        }}
                      />

                      <CardContent>
                        <Typography variant="h6" gutterBottom>
                          {event.title}
                        </Typography>

                        <Collapse
                          in={expandedId === event.id}
                          timeout="auto"
                          unmountOnExit>
                          <Typography variant="body2" color="textSecondary">
                            {event.description}
                          </Typography>
                        </Collapse>
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
