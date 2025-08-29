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
    caption: "After Rain (Jeshu John - designerspics.com)",
  },
  {
    src: imageTwo,
    original: imageTwo,
    width: 320,
    height: 212,
    caption: "Boats (Jeshu John - designerspics.com)",
  },
  {
    src: imageThree,
    original: imageThree,
    width: 320,
    height: 212,
    caption: "Color Pencils (Jeshu John - designerspics.com)",
  },
  {
    src: imageFour,
    original: imageFour,
    width: 320,
    height: 213,
    caption: "Red Apples with other Red Fruit (foodiesfeed.com)",
  },
  {
    src: imageFive,
    original: imageFive,
    width: 320,
    height: 183,
    caption: "37H (gratispgraphy.com)",
  },
  {
    src: imageSix,
    original: imageSix,
    width: 240,
    height: 320,
    tags: [{ value: "Nature", title: "Nature" }],
    caption: "8H (gratisography.com)",
  },
  {
    src: imageSeven,
    original: imageSeven,
    width: 320,
    height: 190,
    caption: "286H (gratisography.com)",
  },
  {
    src: imageEight,
    original: imageEight,
    width: 320,
    height: 148,
    tags: [{ value: "People", title: "People" }],
    caption: "315H (gratisography.com)",
  },
];

export default function MyGallery() {
  const [openIndex, setOpenIndex] = useState(null);
  const theme = useTheme();
  const isXs = useMediaQuery(theme.breakpoints.down("sm"));
  const isSm = useMediaQuery(theme.breakpoints.between("sm", "md"));
  const cols = isXs ? 2 : isSm ? 3 : 4;

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
    <Box my={10}>
      <Divider component={"h5"} sx={{ mb: 7, width: "80%", mx: "auto" }} />
      <Header
        firstText={"Our gallery"}
        secondText={"Get to know our farm"}
        thirdText={""}
      />
      {/* Thumbnail grid */}
      <ImageList cols={cols} gap={8}>
        {images.map((img, idx) => (
          <ImageListItem key={img.src} onClick={() => handleOpen(idx)}>
            <img
              src={img.src}
              alt={img.alt || img.caption}
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
                alt={currentImage.alt || currentImage.caption}
                sx={{
                  maxWidth: "100%",
                  maxHeight: `calc(100vh - ${theme.spacing(10)})`,
                }}
              />
            </DialogContent>

            {/* Caption */}
            {currentImage.caption && (
              <Typography
                variant="caption"
                sx={{ color: "common.white", textAlign: "center", mt: 1 }}>
                {currentImage.caption}
              </Typography>
            )}
          </>
        )}
      </Dialog>
    </Box>
  );
}
