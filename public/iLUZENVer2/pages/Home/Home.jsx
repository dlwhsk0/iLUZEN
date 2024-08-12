import React, { useState } from "react";
import "./Home.css";
import config from "../../config/config";
import contact1 from "../../images/contact1.png";
import contact2 from "../../images/contact2.png";
import pipeSupport from "../../images/pipesupport.png";
import systemDongbari from "../../images/systemdongbari.png";
import ganggwanBigye from "../../images/ganggwanbigye.png";
import systemBigye from "../../images/systembigye.png";

export default function Home() {
  const init = { url: pipeSupport, name: "pipeSupport" };
  const [imageUrl, setImageUrl] = useState(init);
  const onClick = (e) => {
    // console.log("e.target:", e.target);
    // console.log("e.target.name:", e.target.name);
    setImageUrl({ url: e.target.src, name: e.target.name });
    // console.log("imageUrl.url:", imageUrl.url);
    // console.log("imageUrl.name:", imageUrl.name);
  };

  return (
      <>
        <div className="bg"/>
        <main>
          <div className="mainWrap">
            <section id="회사소개">
              <div className="sectionWrap">
                <div className="titleWrap">
                  <div className="titlelist">
                    <h1 className="mainTitle">
                      Building the reality,
                      <br/>
                      connecting the future.
                    </h1>
                    <h2 className="subTitle">
                      {config.companyName}은 건설 분야 중 하나인 가설구조물 설계 전문
                      기업입니다. 가설구조물 중 시스템 동바리, 시스템 비계를 주로
                      설계하고 있습니다.
                      <br/>
                      <br/>
                      오랜 경험과 전문성을 토대로 고객의 다양한 건설 요구에
                      부응하며, 건설 현장에서의 정확한 계획과 실행을 통해
                      프로젝트를 성공적으로 완수하고, 고객의 신뢰를 얻어내는 일에
                      헌신하고 있습니다.
                    </h2>
                  </div>
                </div>
                <div className="imageWrap">
                  <ul>
                    <li style={{"z-indx": "200", "background-color": "red"}}>
                      <span>1</span>
                    </li>
                    <li style={{"z-indx": "100", "background-color": "blue"}}>
                      <span>2</span>
                    </li>
                    <li style={{"z-indx": "0", "background-color": "green"}}>
                      <span>3</span>
                    </li>
                    <li style={{"z-indx": "-100", "background-color": "yellow"}}>
                      <span>4</span>
                    </li>
                  </ul>
                </div>
              </div>
            </section>
            <section id="업무소개">
              <div className="sectionWrap">
                <div className="sec2"></div>
              </div>
            </section>
            <section id="설계품목">
              <div className="sectionWrap">
                <div className="imageBox">
                  <div className="imageBox-img">
                    <img src={imageUrl.url} alt=""/>
                  </div>
                  <div className="imageBox-cont">
                    <h1>설계 품목</h1>
                    <div className="imageBox-cont-list">
                      <ul>
                        <li
                            className={
                              imageUrl.name !== "systemDongbari" ? "opacity05" : ""
                            }
                        >
                          <span>시스템동바리</span>
                          <img
                              onClick={onClick}
                              name="systemDongbari"
                              src={systemDongbari}
                              alt=""
                          />
                        </li>
                        <li
                            className={
                              imageUrl.name !== "systemBigye" ? "opacity05" : ""
                            }
                        >
                          <span>시스템비계</span>
                          <img
                              onClick={onClick}
                              name="systemBigye"
                              src={systemBigye}
                              alt=""
                          />
                        </li>
                        <li
                            className={
                              imageUrl.name !== "pipeSupport" ? "opacity05" : ""
                            }
                        >
                          <span>파이프써포트</span>
                          <img
                              onClick={onClick}
                              name="pipeSupport"
                              src={pipeSupport}
                              alt=""
                          />
                        </li>
                        <li
                            className={
                              imageUrl.name !== "ganggwanBigye" ? "opacity05" : ""
                            }
                        >
                          <span>강관비계</span>
                          <img
                              onClick={onClick}
                              name="ganggwanBigye"
                              src={ganggwanBigye}
                              alt=""
                          />
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            <section id="고객지원">
              <div className="sectionWrap contactWrap">
                <h1>ONLINE QUATE CONTACT</h1>
                <div className="contactBox">
                  <div className="contact">
                    <img
                        src={contact1}
                        alt="작업의뢰"
                        style={{height: "65px", margin: "0 auto"}}
                    />
                    <h1>작업의뢰</h1>
                  </div>
                  <div className="contact">
                    <img
                        src={contact2}
                        alt="채용문의"
                        style={{height: "60px", margin: "0 auto"}}
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
