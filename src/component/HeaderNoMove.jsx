import React from "react";
import pipe from "../image/pipesupport.jpg";
import dong from "../image/systemdongba.jpg";
import bigae from "../image/systembigae.jpg";
import gang from "../image/ganggwan.jpg";

export default function HeaderNoMove() {
  return (
    <>
      <header>
        <div className="headerwrap">
          <div className="logo"></div>
          <div>
            <button className="menubtn"></button>
          </div>
        </div>
      </header>
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
                <div className="flex">
                  <span className="producttitle">설계 품목</span>
                  <div className="bar"></div>
                </div>
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
              <span className="quate">ONLINE QUATE CONTACT</span>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
