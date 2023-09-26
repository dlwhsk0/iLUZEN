import React from "react";
import "../styles/Home.css";
import contact1 from "../images/contact1.png";
import contact2 from "../images/contact2.png";

export default function Home() {
  return (
    <>
      <main>
        <div className="mainWrap">
          <section>
            <div className="sectionWrap">
              <div className="titleWrap">
                <h1 className="mainTitle">
                  Building the reality,
                  <br />
                  connecting the future.
                </h1>
                <h2 className="subTitle">
                  iLuzen은 건설 분야 중 하나인 가설구조물 설계 전문 기업입니다.
                  가설구조물 중 시스템 동바리, 시스템 비계를 주로 설계하고
                  있습니다.
                  <br />
                  <br />
                  오랜 경험과 전문성을 토대로 고객의 다양한 건설 요구에
                  부응하며, 건설 현장에서의 정확한 계획과 실행을 통해 프로젝트를
                  성공적으로 완수하고, 고객의 신뢰를 얻어내는 일에 헌신하고
                  있습니다.
                </h2>
              </div>
              <div className="imageWrap">
                <ul>
                  <li></li>
                  <li></li>
                  <li></li>
                  <li></li>
                </ul>
              </div>
            </div>
          </section>
          <section>
            <div className="sectionWrap">sec2</div>
          </section>
          <section>
            <div className="sectionWrap">
              <div className="imageBox">
                <div className="imageBox-img"></div>
                <div className="imageBox-cont">
                  <h1>설계 품목</h1>
                  <ul>
                    <li>
                      <span></span>
                      <img src="" alt="" />
                    </li>
                    <li>
                      <span></span>
                      <img src="" alt="" />
                    </li>
                    <li>
                      <span></span>
                      <img src="" alt="" />
                    </li>
                    <li>
                      <span></span>
                      <img src="" alt="" />
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </section>
          <section>
            <div className="sectionWrap contactWrap">
              <h1>ONLINE QUATE CONTACT</h1>
              <div className="contactBox">
                <div className="contact">
                  <img
                    src={contact1}
                    alt="작업의뢰"
                    style={{ width: "65px", margin: "0 auto" }}
                  />
                  <h1>작업의뢰</h1>
                </div>
                <div className="contact">
                  <img
                    src={contact2}
                    alt="채용문의"
                    style={{ width: "100px", margin: "0 auto" }}
                  />
                  <h1>채용문의</h1>
                </div>
              </div>
            </div>
          </section>
        </div>
      </main>
    </>
  );
}
