import React, { useState, useCallback, memo } from "react";
import { Box, ImageList, ImageListItem } from "@mui/material";
import imageOne from "../../../assets/images/c1.jpg";
import imageTwo from "../../../assets/images/c2.jpg";
import imageThree from "../../../assets/images/c3.jpg";

const images = [
  {
    src: imageOne,
    original: imageOne,
    alt: "Gallery image 1",

    tags: [
      { value: "Nature", title: "Nature" },
      { value: "Flora", title: "Flora" },
    ],
  },
  {
    src: imageTwo,
    original: imageTwo,
    alt: "Gallery image 2",
  },
  {
    src: imageThree,
    original: imageThree,
    alt: "Gallery image 3",
  },
];

function TestimonialsCarousel() {
  const [openIndex, setOpenIndex] = useState(null);
  const handleOpen = useCallback((idx) => setOpenIndex(idx), []);

  return (
    <Box component="section" aria-label="Client Testimonials" sx={{ py: 6 }}>
      <ImageList
        gap={50}
        sx={{
          display: "flex",
          justifyContent: "space-evenly",
          flexWrap: "wrap",
        }}>
        {images.map((img, idx) => (
          <ImageListItem
            key={img.src}
            onClick={() => handleOpen(idx)}
            sx={{
              cursor: "pointer",
              borderRadius: 1,
              overflow: "hidden",
            }}>
            <img
              crossOrigin="anonymous"
              src={img.src}
              alt={img.alt}
              loading="lazy"
              decoding="async"
              style={{
                maxWidth: "300px",
                display: "block",
                mx: "auto",
                my: 12,
              }}
            />
          </ImageListItem>
        ))}
      </ImageList>
    </Box>
  );
}
export default memo(TestimonialsCarousel);
