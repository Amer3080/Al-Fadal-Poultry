import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";
import App from "./App.jsx";
import "./i18n";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import DataContextProvider from "./Components/Context/DataContext.jsx";

createRoot(document.getElementById("root")).render(
  <DataContextProvider>
    <StrictMode>
      <App />
    </StrictMode>
  </DataContextProvider>
);
