import React from "react";
import "./AppMain.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ScrollToTop from "./component/ScrollToTop";
import Header from "./component/Header";
import Home from "./pages/Home";
import Footer from "./component/Footer";
import Quate from "./pages/Quate";

export default function AppMain() {
  return (
    <div>
      <BrowserRouter>
        <ScrollToTop />
        <Header />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/pages/quate" element={<Quate />}></Route>
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}
