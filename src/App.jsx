import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import "./App.css";
import MasterLayout from "./Components/MasterLayout/MasterLayout";
import NotFound from "./Components/NotFound/NotFound";
import Home from "./Pages/Home/Home";
import AboutUs from "./Pages/AboutUs/AboutUs";
import ContactUs from "./Pages/ContactUs/ContactUs";
import Faq from "./Pages/Faq/Faq";
import Services from "./Pages/Services/Services";
import History from "./Pages/History/History";
import { useContext } from "react";
import { DataContext } from "./Components/Context/DataContext";

function App() {
  const { theme } = useContext(DataContext);
  const routes = createBrowserRouter([
    {
      path: "/",
      errorElement: <NotFound />,
      element: <MasterLayout />,
      children: [
        {
          index: true,
          element: <Home />,
        },
        {
          path: "home",
          element: <Home />,
        },
        {
          path: "about-us",
          element: <AboutUs />,
        },
        {
          path: "contact-us",
          element: <ContactUs />,
        },
        {
          path: "faq",
          element: <Faq />,
        },
        {
          path: "history",
          element: <History />,
        },
        {
          path: "services",
          element: <Services />,
        },
      ],
    },
  ]);

  const darkTheme = createTheme({
    palette: {
      mode: theme,
    },
  });

  return (
    <>
      <ThemeProvider theme={darkTheme}>
        <CssBaseline />
        <RouterProvider router={routes}></RouterProvider>
      </ThemeProvider>
    </>
  );
}

export default App;
