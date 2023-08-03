import React from "react";
import headerlogo from "../image/jhsystem.png";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header>
      <Link to="/">
        <img className="logo" src={headerlogo} alt="로고" />
      </Link>
      <nav className="nav">
        <Link to="/about">
          <span className="navmenu">ABOUT</span>
        </Link>
        <Link to="/service">
          <span className="navmenu">SERVICE</span>
        </Link>
        <Link to="/project">
          <span className="navmenu">PROJECT</span>
        </Link>
        <Link to="/news">
          <span className="navmenu">NEWS</span>
        </Link>
        <Link to="/contact">
          <span className="navmenu">CONTACT</span>
        </Link>
      </nav>
    </header>
  );
}
