import Box from "@mui/material/Box";
import logo from "../../assets/images/Logo.png";
export default function Loader() {
  return (
    <Box
      sx={{
        position: "fixed",
        inset: 0,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        background: "#90c99eff",
        overflow: "hidden",
        zIndex: 9999,
      }}>
      <img
        src={logo}
        width={200}
        alt="logo"
        className="animate__animated animate__rotateIn"
      />
    </Box>
  );
}
