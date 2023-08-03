import React from "react";
import "./AppMain.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./component/Header";
import Footer from "./component/Footer";
import About from "./pages/About";
import Service from "./pages/Service";
import Project from "./pages/Project";
import News from "./pages/News";
import Contact from "./pages/Contact";

export default function AppMain() {
  return (
    <div className="wrap">
      <BrowserRouter>
        <div className="top">
          <Header />
        </div>
        <main>
          <Routes>
            <Route path="/" element={<h1>시작 화면 입니다.</h1>}></Route>
            <Route path="/about" element={<About />}></Route>
            <Route path="/service" element={<Service />}></Route>
            <Route path="/project" element={<Project />}></Route>
            <Route path="/news" element={<News />}></Route>
            <Route path="/contact" element={<Contact />}></Route>
          </Routes>
        </main>
        <Footer />
      </BrowserRouter>
    </div>
  );
}
