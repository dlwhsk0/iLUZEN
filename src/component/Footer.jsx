import React from "react";
import footerlogo from "../image/jhsystem.png";

export default function Footer() {
  return (
    <footer>
      <img
        className="img"
        style={{ width: "55px", height: "60px" }}
        src={footerlogo}
        alt="로고"
      />
      <div>
        <ul>
          <li>회사명: JH시스템</li>
          <li>대표자: 최재호</li>
          <li></li>
        </ul>
      </div>
    </footer>
  );
}
