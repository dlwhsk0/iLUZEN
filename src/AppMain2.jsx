import React from "react";
import "./AppMain2.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ScrollToTop from "./component/ScrollToTop";
import HeaderNoMove from "./component/HeaderNoMove";
import HomeMain from "./pages/HomeMain";
import Footer from "./component/Footer";
import Quate from "./pages/Quate";

export default function AppMain2() {
  return (
    <div>
      <BrowserRouter>
        <ScrollToTop />
        <HeaderNoMove />
        <Routes>
          <Route path="/" element={<HomeMain />}></Route>
          <Route path="/pages/quate" element={<Quate />}></Route>
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}
