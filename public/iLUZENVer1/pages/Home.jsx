import React from "react";
import Header from "../../../src/component/Header";

export default function Home() {
  return (
    <div className="homeWrap">
      <Header />
      <div className="info-wrap">
        <div className="info">
          <p style={{ height: "20px" }}></p>
          <p className="title">iLuzen을 찾아주셔서 감사합니다.</p>
        </div>
      </div>
    </div>
  );
}
