import React from "react";
import footerlogo from "../image/iluzen-logo.png";

export default function Footer() {
  return (
    <footer>
      <div className="footer-wrap">
        <img className="footer-img" src={footerlogo} alt="로고" />
        <p style={{ height: "15px" }}></p>
        <div>
          <ul className="footer-list">
            <li>회사명: iLuzen</li>
            <li>대표자: 이은지</li>
            <li>이메일 : iLuzen@iLuzen.com</li>
            <li>전화 : 010-1234-5678</li>
            <li>사업자등록번호 : 190-12-34567</li>
            <li>주소 : 서초구 남부순환로 333길 10 (파이브스팟) 3층</li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
