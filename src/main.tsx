import { createRoot } from "react-dom/client";
import "./index.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import theme from "./theme";
import App from "./App.tsx";

createRoot(document.getElementById("root")!).render(
  <ThemeProvider theme={theme}>
    <CssBaseline />
    <App />
  </ThemeProvider>
);
