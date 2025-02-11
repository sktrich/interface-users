import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import Home from "./pages/Home";
import Footer from "./pages/Footer";
import Bloob from "./pages/BG";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Footer />
    <Bloob/>
    <Home />
    <Footer />
  </StrictMode>
);
