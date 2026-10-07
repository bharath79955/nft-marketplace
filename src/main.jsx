import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";

import App from "./App";
import { ThemeProvider } from "./context/ThemeContext";
import { MarketplaceProvider } from "./context/MarketplaceContext";

import "./index.css";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <ThemeProvider>
        <MarketplaceProvider>
          <App />
        </MarketplaceProvider>
      </ThemeProvider>
    </BrowserRouter>
  </StrictMode>
);