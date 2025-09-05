import React from 'react';
import Slider from 'react-slick';
import { Box, Typography, Avatar } from '@mui/material';

export default function TestimonialsCarousel({ testimonials }) {
  const settings = {
    arrows: false,
    dots: true,
    autoplay: true,
    autoplaySpeed: 5000,
    adaptiveHeight: true,
    accessibility: true
  };

  return (
    <Box component="section" aria-label="Client Testimonials" sx={{ py: 6 }}>
      <Slider {...settings}>
        {testimonials.map(({ quote, author }, idx) => (
          <Box key={idx} sx={{ textAlign: 'center', px: 4 }}>
            <Avatar sx={{ mx: 'auto', mb: 2 }}>{author.charAt(0)}</Avatar>
            <Typography component="blockquote" variant="h6" gutterBottom>
              “{quote}”
            </Typography>
            <Typography component="cite" display="block">
              — {author}
            </Typography>
          </Box>
        ))}
      </Slider>
    </Box>
  );
}
