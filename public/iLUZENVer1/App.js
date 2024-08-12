// App.js
import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

const Home = () => <h1>홈 페이지</h1>;
const About = () => <h1>소개 페이지</h1>;
const Contact = () => <h1>연락 페이지</h1>;

const App = () => (
  <Router>
    <nav>
      <ul>
        <li>
          <Link to="/">홈</Link>
        </li>
        <li>
          <Link to="/about">소개</Link>
        </li>
        <li>
          <Link to="/contact">연락</Link>
        </li>
      </ul>
    </nav>

    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
    </Routes>
  </Router>
);

export default App;
