import React from "react";

export default function Quate() {
  return (
    <>
      <div className="quatepage-wrap">
        <div className="quatebox">
          <p className="quatebox-title">견적 문의</p>
          <div className="askbox">
            <ul className="askbox-list">
              <li>
                <span>제목</span>
                <input type="text" />
              </li>
              <li>
                <ul className="askbox-user-list">
                  <li>
                    <span>이름</span>
                    <input id="user-name" type="text" />
                  </li>
                  <li>
                    <span>이메일</span>
                    <input id="user-email" type="email" />
                  </li>
                </ul>
              </li>
              <li>
                <span>첨부 파일</span>
                <input id="file" type="file" />
              </li>
              <li>
                <span>상담 내용</span>
                <textarea id="askcontent" type="text" />
              </li>
              <li>
                <button id="submit">제출</button>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}
