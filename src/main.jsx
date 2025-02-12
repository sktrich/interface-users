import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import Home from "./pages/Home";
import Footer from "./pages/Footer";
import Bloob from "./pages/BG";
import Header from "./pages/Header";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Bloob/>
    <Home />
    <Footer />
  </StrictMode>
);
