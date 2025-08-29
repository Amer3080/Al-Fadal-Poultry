import React, { useContext, useEffect, useState } from "react";
import {
  AppBar,
  Box,
  Toolbar,
  IconButton,
  Typography,
  Container,
  Button,
  Tooltip,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  styled,
  alpha,
  InputBase,
  Divider,
} from "@mui/material";
import {
  Menu as MenuIcon,
  Cottage as CottageIcon,
  Search as SearchIcon,
  Language as LanguageIcon,
  LightMode as LightModeIcon,
  Mail as MailIcon,
} from "@mui/icons-material";
import MiscellaneousServicesIcon from "@mui/icons-material/MiscellaneousServices";
import ImportContactsIcon from "@mui/icons-material/ImportContacts";
import WorkHistoryIcon from "@mui/icons-material/WorkHistory";
import QuizIcon from "@mui/icons-material/Quiz";
import ContactPhoneIcon from "@mui/icons-material/ContactPhone";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import logo from "../../assets/images/Logo.png";
import { DataContext } from "../Context/DataContext";
import DarkModeIcon from "@mui/icons-material/DarkMode";
const pages = ["Home", "Services", "About", "History", "FAQ", "Contacts"];
const pageLinks = [
  "home",
  "services",
  "about-us",
  "history",
  "faq",
  "contact-us",
];
const icons = [
  <CottageIcon />,
  <MiscellaneousServicesIcon />,
  <ImportContactsIcon />,
  <WorkHistoryIcon />,
  <QuizIcon />,
  <ContactPhoneIcon />,
];
const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(1),
    width: "auto",
  },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  width: "100%",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    [theme.breakpoints.up("sm")]: {
      width: "12ch",
      "&:focus": {
        width: "20ch",
      },
    },
  },
}));

const NavBarM = () => {
  const { theme, setTheme, locale, setLocale } = useContext(DataContext);
  const { t, i18n } = useTranslation();
  const [open, setOpen] = useState(false);

  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);
  };
  const handleLanguage = () => {
    const newLocale = locale === "ar" ? "en" : "ar";
    setLocale(newLocale);
    i18n.changeLanguage(newLocale);
  };
  const handleTheme = () => {
    if (theme === "light") {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  };
  useEffect(() => {
    i18n.changeLanguage(locale);
  }, [i18n, locale]);

  //  Function Content Design For Sidebar
  const drawerList = (
    <Box
      sx={{
        width: 250,
        backgroundColor: "#255946",
        height: "100%",
        color: "white",
      }}
      role="presentation"
      onClick={toggleDrawer(false)}>
      <List>
        {/* Logo Design + Name in Sidebar */}
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            ml: 1,
          }}>
          <img src={logo} width={"45px"} alt="Logo" />
          <Typography
            variant="h6"
            noWrap
            component={Link}
            to="/"
            sx={{
              mx: 1,
              fontFamily: locale === "ar" ? "Marhey" : "Fugaz One",
              fontSize: locale === "ar" ? "20px" : "18px",
              color: "inherit",
              textDecoration: "none",
            }}>
            {t("Al-Fadal Poultry")}{" "}
          </Typography>
        </Box>
        <Divider sx={{ my: 2, borderWidth: "1px", borderColor: "white" }} />
        {pages.map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton component={Link} to={pageLinks[index]}>
              <ListItemIcon sx={{ color: "white" }}>
                {icons[index]}
              </ListItemIcon>
              <ListItemText
                disableTypography
                primary={t(text)}
                sx={{
                  fontFamily: locale === "ar" ? "Marhey" : "Roboto",
                  fontSize: "18px",
                  my: 1,
                }}
              />
            </ListItemButton>
          </ListItem>
        ))}
        <Divider sx={{ my: 3, borderWidth: "1px", borderColor: "white" }} />
        <Box>
          <Button
            sx={{
              fontFamily: locale === "ar" ? "Roboto" : "Marhey",
              marginLeft: 2,
            }}
            onClick={handleLanguage}
            variant="contained"
            color="success"
            endIcon={
              <LanguageIcon
                sx={{
                  mx: locale === "ar" ? 2 : 1,
                }}
              />
            }>
            {locale === "ar" ? "English" : "اللغـة العربيـة"}
          </Button>
          <IconButton
            variant="contained"
            sx={{ mx: 2, backgroundColor: "white" }}
            aria-label="Dark mode">
            {theme === "dark" ? (
              <LightModeIcon sx={{ color: "black" }} onClick={handleTheme} />
            ) : (
              <DarkModeIcon sx={{ color: "black" }} onClick={handleTheme} />
            )}
          </IconButton>
        </Box>
      </List>
    </Box>
  );

  return (
    <AppBar
      position="sticky"
      sx={{
        backgroundColor: "#255946",
        direction: locale === "ar" ? "rtl" : "ltr",
      }}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          {/* Logo Design + Name in Large Screen */}
          <Box
            sx={{ display: { xs: "none", md: "flex" }, alignItems: "center" }}>
            <img src={logo} width={"60px"} alt="Logo" />
            <Typography
              variant="h6"
              noWrap
              component={Link}
              to="/"
              sx={{
                mr: 2,
                fontFamily: locale === "ar" ? "Marhey" : "Fugaz One",
                fontSize: locale === "ar" ? "26px" : "25px",
                fontWeight: 800,
                color: "inherit",
                textDecoration: "none",
              }}>
              {t("Al-Fadal Poultry")}{" "}
            </Typography>
          </Box>
          {/* Logo Design + Name in Medium Screen */}
          <Box
            sx={{ display: { xs: "flex", md: "none" }, alignItems: "center" }}>
            <img src={logo} width={"60px"} alt="Logo" />
            <Typography
              variant="h6"
              noWrap
              component={Link}
              to="/"
              sx={{
                mr: 2,
                fontFamily: locale === "ar" ? "Marhey" : "Fugaz One",
                fontSize: { xs: "20px", sm: "25px" },
                fontWeight: 800,
                color: "inherit",
                textDecoration: "none",
              }}>
              {t("Al-Fadal Poultry")}
            </Typography>
          </Box>
          {/* Box For Links Of Pages */}
          <Box
            sx={{
              flexGrow: 1,
              display: { xs: "none", xl: "flex" },
              justifyContent: "center",
            }}>
            {pages.map((page, index) => (
              <Button
                component={Link}
                to={`/${pageLinks[index]}`}
                key={page}
                onClick={() => setOpen(false)}
                sx={{
                  my: 2,
                  mx: locale === "ar" ? 1 : 1,
                  color: "white",
                  display: "block",
                  textTransform: "capitalize",
                  textAlign: "center",
                  fontSize: "16px",
                  fontFamily: locale === "ar" ? "Marhey" : "Roboto",
                }}>
                {t(page)}
              </Button>
            ))}
          </Box>
          {/* Box For Feature (Button Language + Search + Button Of Dark Mode) */}
          <Box sx={{ flexGrow: 0, mx: 0, display: { xs: "none", xl: "flex" } }}>
            <Button
              sx={{ fontFamily: locale === "ar" ? "Roboto" : "Marhey" }}
              onClick={handleLanguage}
              variant="text"
              color="light"
              endIcon={
                <LanguageIcon
                  sx={{
                    mx: locale === "ar" ? 2 : 1,
                  }}
                />
              }>
              {locale === "ar" ? "English" : "اللغـة العربيـة"}
            </Button>
            <Tooltip title="Search" sx={{ direction: "ltr" }}>
              <Search>
                <SearchIconWrapper>
                  <SearchIcon />
                </SearchIconWrapper>
                <StyledInputBase
                  sx={{ fontFamily: locale === "ar" ? "Marhey" : "Roboto" }}
                  placeholder={t("Search…")}
                  inputProps={{ "aria-label": "search" }}
                />
              </Search>
            </Tooltip>

            <IconButton aria-label="Dark mode">
              {theme === "dark" ? (
                <LightModeIcon sx={{ color: "white" }} onClick={handleTheme} />
              ) : (
                <DarkModeIcon sx={{ color: "white" }} onClick={handleTheme} />
              )}
            </IconButton>
          </Box>
          {/* Icon For Sidebar */}
          <Box
            sx={{
              display: { xs: "flex", xl: "none" },
              justifyContent: "end",
              width: "100%",
            }}>
            <IconButton
              size="large"
              onClick={toggleDrawer(true)}
              color="inherit">
              <MenuIcon />
            </IconButton>
            <Drawer open={open} onClose={toggleDrawer(false)}>
              {drawerList}
            </Drawer>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default NavBarM;
