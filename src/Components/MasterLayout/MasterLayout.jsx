import { Box, Fab, Toolbar } from "@mui/material";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import TelegramIcon from "@mui/icons-material/Telegram";
import { FaFacebookF } from "react-icons/fa";
import { Link, Outlet } from "react-router-dom";
import NavBar from "../NavBar/NavBar";
import Footer from "../Footer/Footer";

export default function MasterLayout() {
  return (
    <>
      <header>
        <NavBar />
      </header>
      <Toolbar />
      <main id="content">
        <Outlet />
        <Box sx={{ "& > :not(style)": { m: 1 } }}>
          <Fab
            component={Link}
            to="https://www.facebook.com/"
            target="blank"
            color="primary"
            aria-label="contact support"
            sx={{ position: "fixed", bottom: 160, right: 16 }}>
            <FaFacebookF fontSize="33px" />
          </Fab>
          <Fab
            component={Link}
            to="https://web.whatsapp.com/"
            target="blank"
            color="success"
            aria-label="contact support"
            sx={{ position: "fixed", bottom: 90, right: 16 }}>
            <WhatsAppIcon fontSize="large" />
          </Fab>
          <Fab
            component={Link}
            to="https://web.telegram.org/"
            target="blank"
            color="primary"
            aria-label="contact support"
            sx={{ position: "fixed", bottom: 20, right: 16 }}>
            <TelegramIcon fontSize="large" />
          </Fab>
        </Box>
      </main>
      <Footer />
    </>
  );
}
