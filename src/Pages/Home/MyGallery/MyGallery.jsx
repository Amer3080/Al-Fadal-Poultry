import React, { useState, useCallback, useMemo } from "react";
import {
  Box,
  ImageList,
  ImageListItem,
  Dialog,
  DialogContent,
  IconButton,
  Typography,
  useMediaQuery,
  useTheme,
  Divider,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import Header from "../../../Hooks/Header";
import imageOne from "../../../assets/images/gallery/1.jpeg";
import imageTwo from "../../../assets/images/gallery/19.jpeg";
import imageThree from "../../../assets/images/gallery/7.jpg";
import imageFour from "../../../assets/images/gallery/25.jpg";
import imageFive from "../../../assets/images/gallery/5.jpg";
import imageSix from "../../../assets/images/gallery/15.jpg";
import imageSeven from "../../../assets/images/gallery/10.jpg";
import imageEight from "../../../assets/images/gallery/12.jpg";

const images = [
  /* … your image objects here (same shape as before) … */
  {
    src: imageOne,
    original: imageOne,
    width: 320,
    height: 174,
    tags: [
      { value: "Nature", title: "Nature" },
      { value: "Flora", title: "Flora" },
    ],
  },
  {
    src: imageTwo,
    original: imageTwo,
    width: 320,
    height: 212,
  },
  {
    src: imageThree,
    original: imageThree,
    width: 320,
    height: 212,
  },
  {
    src: imageFour,
    original: imageFour,
    width: 320,
    height: 213,
  },
  {
    src: imageFive,
    original: imageFive,
    width: 320,
    height: 183,
  },
  {
    src: imageSix,
    original: imageSix,
    width: 240,
    height: 320,
    tags: [{ value: "Nature", title: "Nature" }],
  },
  {
    src: imageSeven,
    original: imageSeven,
    width: 320,
    height: 190,
  },
  {
    src: imageEight,
    original: imageEight,
    width: 320,
    height: 148,
    tags: [{ value: "People", title: "People" }],
  },
];

export default function MyGallery() {
  const [openIndex, setOpenIndex] = useState(null);
  const theme = useTheme();
  const isXs = useMediaQuery(theme.breakpoints.down("sm"));
  const isSm = useMediaQuery(theme.breakpoints.between("sm", "md"));
  const cols = isXs ? 1 : isSm ? 2 : 4;
  const handleOpen = useCallback((idx) => {
    setOpenIndex(idx);
  }, []);

  const handleClose = useCallback(() => {
    setOpenIndex(null);
  }, []);

  const handlePrev = useCallback(() => {
    if (openIndex === null) return;
    setOpenIndex((openIndex + images.length - 1) % images.length);
  }, [openIndex]);

  const handleNext = useCallback(() => {
    if (openIndex === null) return;
    setOpenIndex((openIndex + 1) % images.length);
  }, [openIndex]);

  const currentImage = useMemo(
    () => (openIndex !== null ? images[openIndex] : null),
    [openIndex]
  );

  return (
    <Box my={8}>
      <Header
        firstText={"Our gallery"}
        secondText={"Get to know our farm"}
        thirdText={""}
      />
      {/* Thumbnail grid */}
      <ImageList cols={cols} gap={6}>
        {images.map((img, idx) => (
          <ImageListItem key={img.src} onClick={() => handleOpen(idx)}>
            <img
              src={img.src}
              alt={img.alt}
              loading="lazy"
              style={{ width: "100%", cursor: "pointer", borderRadius: 4 }}
            />
          </ImageListItem>
        ))}
      </ImageList>

      {/* Lightbox dialog */}
      <Dialog
        open={openIndex !== null}
        onClose={handleClose}
        fullWidth
        maxWidth="md"
        PaperProps={{
          sx: {
            position: "relative",
            backgroundColor: "transparent",
            boxShadow: "none",
          },
        }}>
        {currentImage && (
          <>
            {/* Close button */}
            <IconButton
              onClick={handleClose}
              sx={{
                position: "absolute",
                top: 8,
                right: 8,
                color: "common.white",
                bgcolor: "rgba(0,0,0,0.4)",
                "&:hover": { bgcolor: "rgba(0,0,0,0.6)" },
              }}>
              <CloseIcon />
            </IconButton>

            {/* Previous / Next */}
            <IconButton
              onClick={handlePrev}
              sx={{
                position: "absolute",
                left: 8,
                top: "50%",
                transform: "translateY(-50%)",
                color: "common.white",
                bgcolor: "rgba(0,0,0,0.4)",
                "&:hover": { bgcolor: "rgba(0,0,0,0.6)" },
              }}>
              <ArrowBackIosNewIcon />
            </IconButton>
            <IconButton
              onClick={handleNext}
              sx={{
                position: "absolute",
                right: 8,
                top: "50%",
                transform: "translateY(-50%)",
                color: "common.white",
                bgcolor: "rgba(0,0,0,0.4)",
                "&:hover": { bgcolor: "rgba(0,0,0,0.6)" },
              }}>
              <ArrowForwardIosIcon />
            </IconButton>

            {/* Image display */}
            <DialogContent
              sx={{
                p: 0,
                display: "flex",
                justifyContent: "center",
                bgcolor: "rgba(0,0,0,0.8)",
              }}>
              <Box
                component="img"
                src={currentImage.original}
                alt={currentImage.alt}
                sx={{
                  maxWidth: "100%",
                  maxHeight: `calc(100vh - ${theme.spacing(10)})`,
                }}
              />
            </DialogContent>
          </>
        )}
      </Dialog>
    </Box>
  );
}
