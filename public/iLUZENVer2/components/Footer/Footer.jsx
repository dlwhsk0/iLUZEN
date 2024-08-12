import React from "react";
import footerlogo from "../../images/iluzen/iluzen-logo.png";
import "./Footer.css";
import config from "../../config/config";

// export default function Footer() {
//   return (
//     <footer>
//       <div className="footer-wrap">
//         <img src={footerlogo} alt="로고" />
//         <div>
//           <ul className="footer-list">
//             <li>
//               <a href="#회사소개">회사소개</a>
//             </li>
//             <li>
//               <a href="#업무소개">업무소개</a>
//             </li>
//             <li>
//               <a href="#설계품목">설계품목</a>
//             </li>
//             <li>
//               <a href="#고객지원">고객지원</a>
//             </li>
//           </ul>
//         </div>
//         <div>
//           <ul className="footer-list">
//             <li>회사명: {config.companyName}</li>
//             <li>대표자: 이은지</li>
//             <li>이메일 : iLuzen@iLuzen.com</li>
//             <li>전화 : 010-1234-5678</li>
//             <li>사업자등록번호 : 190-12-34567</li>
//           </ul>
//         </div>
//       </div>
//     </footer>
//   );
// }

export default function Footer() {
  return (
      <footer>
          <div className="footer-wrap">
              <div className="nav">
                  <div className="nav-list">
                      <span><a href="#회사소개">회사소개</a></span>
                      <span><a href="#업무소개">업무소개</a></span>
                      <span><a href="#설계품목">설계품목</a></span>
                      <span><a href="#고객지원">고객지원</a></span>
                  </div>
                  <div className="logo"></div>
              </div>
              <div className="info">
                  <div className="info-list">
                      <span>회사명| {config.companyName}</span>
                      <span>대표자| {config.contactInfo.representative}</span>
                      <span>이메일| {config.contactInfo.email}</span>
                      <span>전화| {config.contactInfo.phone}</span>
                      <span>사업자등록번호| {config.contactInfo.businessNumber}</span>
                  </div>
                  <div className="cont">
                      <span>call</span>
                      <span>email</span>
                      <span>kakao</span>
                  </div>
              </div>
          </div>
      </footer>
  );
}