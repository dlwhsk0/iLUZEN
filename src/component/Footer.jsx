import React from "react";
import footerlogo from "../image/jhsystem.png";

export default function Footer() {
  return (
    <footer>
      <div className="footer-wrap">
        <img
          className="img"
          style={{ width: "55px", height: "60px" }}
          src={footerlogo}
          alt="로고"
        />
        <p style={{ height: "20px" }}></p>
        <div>
          <ul className="footer-list">
            <li>회사명: JH시스템</li>
            <li>대표자: 최재호</li>
            <li>이메일 : jhsystem@jhsystem.by-works.com</li>
            <li>전화 : 010-5762-1829</li>
            <li>사업자등록번호 : 192-35-01294</li>
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
