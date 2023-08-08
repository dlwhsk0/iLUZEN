import React from "react";
import "./AppMain.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Footer from "./component/Footer";
import About from "./pages/About";
import Service from "./pages/Service";
import Project from "./pages/Project";
import News from "./pages/News";
import Contact from "./pages/Contact";
import Home from "./pages/Home";

export default function AppMain() {
  return (
    <div className="wrap">
      <BrowserRouter>
        <main>
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/pages/about" element={<About />}></Route>
            <Route path="/pages/service" element={<Service />}></Route>
            <Route path="/pages/project" element={<Project />}></Route>
            <Route path="/pages/news" element={<News />}></Route>
            <Route path="/pages/contact" element={<Contact />}></Route>
          </Routes>
        </main>
        <Footer />
      </BrowserRouter>
    </div>
  );
}
