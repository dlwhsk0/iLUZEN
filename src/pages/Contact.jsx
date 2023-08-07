import React from "react";
import call from "../image/call.png";
import email from "../image/email.png";
import kakaotalk from "../image/kakaotalk.png";

export default function Contact() {
  return (
    <div className="contactWrap">
      <div className="contactbox">
        <div className="subtitle">
          <p className="category">CONTACT</p>
          <div className="contact-list">{/* TODO */}</div>
        </div>
        <p style={{ height: "60px" }}></p>
        <div className="snsbox">
          <p
            style={{
              width: "400px",
              fontSize: "20px",
              fontWeight: "600",
              lineHeight: "150%",
            }}
          >
            견적 문의를 위한 상세 도면은
            <br />
            아래에서 제출 가능합니다.
          </p>
          <ul>
            <li>
              <img src={call} alt="" />
              <p style={{ height: "20px" }}></p>
              <p>전화번호: </p>
            </li>
            <li>
              <img src={email} alt="" />
              <p style={{ height: "20px" }}></p>
              <p>이메일: </p>
            </li>
            <li>
              <img src={kakaotalk} alt="" />
              <p style={{ height: "20px" }}></p>
              <p>카카오톡: </p>
            </li>
          </ul>
        </div>
        <p style={{ height: "120px" }}></p>
        <p className="title">견적 문의</p>
        <p style={{ height: "60px" }}></p>
        <div className="askbox">
          <ul className="askbox-list">
            <li className="askbox-list-child">
              <ul className="user">
                <li className="user-child">
                  <span>이름</span>
                  <input type="text" />
                </li>
                <p style={{ width: "60px" }}></p>
                <li className="user-child">
                  <span>이메일</span>
                  <input type="text" />
                </li>
              </ul>
            </li>
            <li className="askbox-list-child">
              <span>제목</span>
              <input type="text" />
            </li>
            <li className="askbox-list-child">
              <span>상담 내용</span>
              <input id="askcontent" type="text" />
            </li>
            <li className="askbox-list-child">
              <span>첨부 파일</span>
              <input type="file" />
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
