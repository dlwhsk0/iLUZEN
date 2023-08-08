import React from "react";
import footerlogo from "../image/iluzen-logo.png";

export default function Footer() {
  return (
    <footer>
      <div className="footer-wrap">
        <img className="footer-img" src={footerlogo} alt="로고" />
        <p style={{ height: "20px" }}></p>
        <div>
          <ul className="footer-list">
            <li>회사명: JH시스템</li>
            <li>대표자: 최재호</li>
            <li>이메일 : iLuzen@iLuzen.com</li>
            <li>전화 : 010-1234-5678</li>
            <li>사업자등록번호 : 190-12-34567</li>
            <li>
              주소 : 경기 수원시 팔달구 갓매산로 51 (에스알프라자23차) 6층 601
              코스팟 (23호JH시스템)
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
