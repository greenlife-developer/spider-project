import React from "react";
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import axios from "axios";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import Home from "./pages/website/Home/Home";
import About from "./pages/website/About/About";
import Faq from "./pages/website/faq/Faq";
import Contact from "./pages/website/contact/Contact";
import News from "./pages/website/news/News";
import Marketplace from "./pages/product/marketplace/Marketplace";

axios.defaults.withCredentials = true;

function App() {
  return (
    <BrowserRouter>
      <ToastContainer />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/faqs" element={<Faq />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/news" element={<News />} />
        <Route path="/news/:id" element={<News />} />
        <Route path="/marketplace" element={<Marketplace />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
