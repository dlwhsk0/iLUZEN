import React from "react";
import headerlogo from "../image/jhsystem.png";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header>
      <div className="headerwrap">
        <Link to="/">
          <img className="logo" src={headerlogo} alt="로고" />
        </Link>
        <nav>
          <ul className="navlist">
            <li>
              <Link to="/pages/about">ABOUT</Link>
            </li>
            <li>
              <Link to="/pages/service">SERVICE</Link>
            </li>
            <li>
              <Link to="/pages/project">PROJECT</Link>
            </li>
            <li>
              <Link to="/pages/news">NEWS</Link>
            </li>
            <li>
              <Link to="/pages/contact">CONTACT</Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
