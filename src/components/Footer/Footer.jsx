import React from "react";
import footerlogo from "../../images/iluzen/iluzen-logo.png";
import "./Footer.css";

export default function Footer() {
  return (
    <footer>
      <div className="footer-wrap">
        <img src={footerlogo} alt="로고" />
        <div>
          <ul className="footer-list">
            <li>회사명: iLuzen</li>
            <li>대표자: 이은지</li>
            <li>이메일 : iLuzen@iLuzen.com</li>
            <li>전화 : 010-1234-5678</li>
            <li>사업자등록번호 : 190-12-34567</li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
