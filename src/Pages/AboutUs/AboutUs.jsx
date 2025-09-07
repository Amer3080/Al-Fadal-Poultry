import { Box } from "@mui/material";
import HeroSection from "../../Components/HeroSection/HeroSection";
import Mission from "./Mission/Mission";
import Vision from "./Vision/Vision";
import Values from "./Values/Values";
import Team from "./Team/Team";

export default function AboutUs() {
  return (
    <Box sx={{ mt: 8 }}>
      <HeroSection HeadText={"About Us"} />
      <Mission />
      <Vision />
      <Values />
      <Team />
    </Box>
  );
}
