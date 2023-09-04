import React from "react";
import pipe from "../image/pipesupport.jpg";
import dong from "../image/systemdongba.jpg";
import bigae from "../image/systembigae.jpg";
import gang from "../image/ganggwan.jpg";
import external from "../image/externallink.png";
import { Link } from "react-router-dom";

export default function HomeMain() {
  return (
    <>
      <main>
        <div className="section">
          <div className="sectionwrap center">
            <div className="title">
              <h1>
                Building the reality,
                <br />
                connecting the future.
              </h1>
            </div>
          </div>
        </div>
        <div className="section">
          <div className="sectionwrap">
            <div className="content">
              <h1 className="content-title">"건설 현장의 혁신과 열정"</h1>
              <p style={{ height: "15px" }}></p>
              <p>
                iLuzen은 건설 분야 중 하나인 가설구조물 설계 전문 기업입니다.
                가설구조물 중 시스템 동바리, 시스템 비계를 주로 설계하고
                있습니다.
              </p>
              <p>
                오랜 경험과 전문성을 토대로 고객의 다양한 건설 요구에 부응하며,
                건설 현장에서의 정확한 계획과 실행을 통해 프로젝트를 성공적으로
                완수하고, 고객의 신뢰를 얻어내는 일에 헌신하고 있습니다.
              </p>
            </div>
          </div>
        </div>
        <div className="section">
          <div className="sectionwrap">
            <div className="product">
              <div className="productleft">
                <span className="producttitle">설계 품목</span>
                <div className="bar"></div>
              </div>
              <div className="productright">
                <div>
                  <ul className="productlist">
                    <li className="productitem">
                      <img src={pipe} alt="파이프써포트" />
                      <p>파이프써포트</p>
                    </li>
                    <li className="productitem">
                      <img src={dong} alt="시스템동바리" />
                      <p>시스템동바리</p>
                    </li>
                    <li className="productitem">
                      <img src={bigae} alt="시스템비계" />
                      <p>시스템비계</p>
                    </li>
                    <li className="productitem">
                      <img src={gang} alt="강관비계" />
                      <p>강관비계</p>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="section">
          <div className="sectionwrap">
            <div className="quatewrap">
              <div className="quate">
                <h1 className="quate-title">ONLINE QUATE CONTACT</h1>
                <p style={{ height: "15px" }}></p>
                <p className="quate-text">
                  iLuzen은 온라인 견적 기능을 제공합니다.
                </p>
                <div>
                  <Link to="/pages/quate">
                    <div className="quate-btn">
                      <p>문의하기</p>
                      <img
                        className="quate-btn-img"
                        src={external}
                        alt="외부링크이동"
                      />
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
