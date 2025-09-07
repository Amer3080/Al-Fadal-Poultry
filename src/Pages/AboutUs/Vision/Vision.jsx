import { Box, Typography } from "@mui/material";
import imageTwo from "../../../assets/images/v1.jpg";

function Vision() {
  return (
    <>
      <Box
        sx={{
          mb: 4,
          position: "relative",
          backgroundImage: `url(${imageTwo})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          minHeight: "30vh", // or any height you need
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          "&::before": {
            content: '""',
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            backgroundColor: "rgba(0, 0, 0, 0.5)", // transparent black overlay
            zIndex: 1,
          },
        }}>
        <Box
          sx={{
            position: "relative",
            zIndex: 2,
            my: 5,
            textAlign: "center",
          }}>
          <Typography
            variant="h4"
            gutterBottom
            sx={{
              color: "white",
              fontSize: { xs: "50px", md: "60px", lg: "70px" },
              fontWeight: 900,
              fontFamily: "El Messiri",
              mb: 5,
            }}>
            Our Vision
          </Typography>
          <Typography
            color="white"
            sx={{
              maxWidth: 1200,
              mx: "auto",
              lineHeight: 1.5,
              fontSize: "25px",
            }}>
            To be the global leader in innovative solutions, setting new
            standards for excellence and sustainability in our industry.
          </Typography>
        </Box>
      </Box>
    </>
  );
}

export default Vision;
