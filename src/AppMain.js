import React from "react";
import "./AppMain.css";
import mainlogo from "./image/jhsystem.png";

export default function AppMain() {
  return (
    <div className="wrap">
      <Header />
      <div className="content">
        <About />
      </div>
      <Footer />
    </div>
  );
}

function Header() {
  return (
    <div className="header">
      <img
        className="logo"
        style={{ width: "80px", height: "90px" }}
        src={mainlogo}
        alt="로고"
      />
      <nav className="nav">
        <span>ABOUT</span>
        <span>SERVICE</span>
        <span>PROJECT</span>
        <span>NEWS</span>
        <span>CONTACT</span>
      </nav>
    </div>
  );
}

function About() {
  return (
    <div className="aboutWrap">
      <div className="left">
        <img
          className="aboutImage"
          src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
          alt="로고"
        />
      </div>
      <div className="right">
        <p className="title">ABOUT US</p>
        <p className="subtitle">
          <span style={{ fontWeight: "900" }}>
            <span style={{ color: "blue" }}>JH시스템</span>
            을 찾아주셔서
            <br />
            감사합니다.
          </span>
        </p>
        <p style={{ height: "50px" }}> </p>
        <div style={{ color: "#808080", fontSize: "16px" }}>
          <p>
            JH시스템은 건설 분야 중 하나인
            <br />
            가설구조물 설계 전문 기업입니다.
          </p>
          <p>
            가설 구조물 중 시스템 동바리,
            <br />
            시스템 비계를 주로 설계하고 있습니다.
          </p>
          <p>
            정확하고 신속하게
            <br />
            고객 만족을 위해 일하겠습니다.
          </p>
          <p>감사합니다.</p>
        </div>
      </div>
    </div>
  );
}

function Footer() {
  return (
    <footer>
      <img
        className="img"
        style={{ width: "55px", height: "60px" }}
        src={mainlogo}
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
