import { useState, useCallback, memo, useContext, useEffect } from "react";
import { Box, ImageList, ImageListItem, Card, styled } from "@mui/material";
import image from "../../../assets/images/Frame.png";
import imageOne from "../../../assets/images/c1.jpg";
import imageTwo from "../../../assets/images/c2.jpg";
import imageThree from "../../../assets/images/c3.jpg";
import { DataContext } from "../../../Components/Context/DataContext";
import { useTranslation } from "react-i18next";
import Header from "../../../Hooks/Header";

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
const StyledCard = styled(Card)(() => ({
  transition: "transform 0.3s, box-shadow 0.3s",
  "&:hover": {
    transform: "translateY(-5px)",
    boxShadow: "0 8px 16px rgba(0,0,0,0.2)",
  },
  height: "100%",
}));

function IsoCertificates() {
  const [, setOpenIndex] = useState(null);
  const handleOpen = useCallback((idx) => setOpenIndex(idx), []);
  const { locale } = useContext(DataContext);
  const { t, i18n } = useTranslation();
  useEffect(() => {
    i18n.changeLanguage(locale);
  }, [i18n, locale]);

  return (
    <>
      <Box
        sx={{
          backgroundImage: `url(${image})`,
          py: 2,
          backgroundRepeat: "no-repeat",
        }}
        aria-labelledby="about-heading">
        <Header
          firstText={t("")}
          secondText={t("ISO CERTIFICATES")}
          thirdText={t("FPF For Poultry Production")}
        />
      </Box>
      <Box component="section" aria-label="Client Testimonials" sx={{ py: 6 }}>
        <ImageList
          gap={50}
          sx={{
            display: "flex",
            justifyContent: "space-evenly",
            flexWrap: "wrap",
          }}>
          {images.map((img, idx) => (
            <StyledCard key={img.src}>
              <ImageListItem
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
            </StyledCard>
          ))}
        </ImageList>
      </Box>
    </>
  );
}
export default memo(IsoCertificates);
