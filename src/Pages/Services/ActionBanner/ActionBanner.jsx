import { Box, Typography } from "@mui/material";
import image from "../../../assets/images/Frame.png";
import { useContext, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { DataContext } from "../../../Components/Context/DataContext";
export default function ActionBanner({ heading }) {
  const { locale } = useContext(DataContext);
  const { t, i18n } = useTranslation();
  useEffect(() => {
    i18n.changeLanguage(locale);
  }, [i18n, locale]);
  return (
    <Box
      component="section"
      sx={{
        py: 3,
        textAlign: "center",
        background: `url(${image})`,
        color: "common.white",
      }}>
      <Typography
        component="h3"
        variant="h4"
        sx={{
          fontWeight: "bold",
          color: "#147242",
          fontSize: { xs: "24px", md: "34px", lg: "45px" },
        }}
        gutterBottom>
        {t(heading)}
      </Typography>
      <Typography
        component="h3"
        variant="h6"
        sx={{
          color: "#147242",
          fontSize: { xs: "14px", md: "24px", lg: "30px" },
          fontFamily: "bold",
        }}>
        {t("FPF For Poultry Production")}
      </Typography>
    </Box>
  );
}
