import React from "react";
import contPhoto from "../image/about.jpg";

export default function About() {
  return (
    <div className="aboutWrap">
      <div className="contBox-1">
        <div className="contBox-1-wrap">
          <p className="category">ABOUT US</p>
          <p style={{ height: "20px" }}></p>
          <p className="title">JH시스템을 찾아주셔서 감사합니다.</p>
          <p style={{ height: "50px" }}></p>
          <div className="contBox-1-content">
            <p>
              JH시스템은 건설 분야 중 하나인 가설구조물 설계 전문 기업입니다.
              가설구조물 중 시스템 동바리, 시스템 비계를 주로 설계하고 있습니다.
              <p style={{ height: "20px" }}></p>
              첨단 기술과 엔지니어링 원칙을 활용하여 시스템 동바리와 시스템
              비계의 설계를 수행합니다. 고객의 요구와 목표를 최우선으로 두며,
              안전하고 효율적인 설계를 제공합니다. 고객들의 다양한 요구에
              부응하는 창의적인 해결책을 찾아냅니다. 최신 기술과 전문성을
              바탕으로, 우리는 항상 미래를 바라보며 발전하고 있습니다.
              <p style={{ height: "20px" }}></p>
              <p>정확하고 신속하게 고객 만족을 위해 일하겠습니다.</p>
            </p>
          </div>
        </div>
      </div>
      <div className="contBox-2">
        <div className="contBox-2-wrap">
          <div className="contBox-2-img">
            <img className="contPhoto" src={contPhoto} alt="빌딩사진" />
          </div>
          <div className="contBox-2-text">
            <p className="title2">지속 가능성</p>
            <p style={{ height: "30px" }}></p>
            <p className="contBox-2-content">
              우리는 시스템 동바리와 시스템 비계 설계 분야에서의 선도적인 역할을
              통해 건설 산업의 발전과 혁신을 선도하고자 최선을 다하고 있습니다.
              <p style={{ height: "20px" }}></p>
              고객과의 긴밀한 협력과 소통을 중요하게 여깁니다. 고객의 의견과
              요구를 적극 수용하여 함께 성공을 추구합니다. 함께하는 고객들의
              성공적인 프로젝트를 위해 언제나 노력하겠습니다.
            </p>
          </div>
        </div>
      </div>
      <div className="contBox-1">
        <div className="contBox-1-wrap">
          <p className="title">더미 멘트.</p>
          <p style={{ height: "50px" }}></p>
          <div className="contBox-1-content">
            <p>
              우리의 핵심 가치는 협력과 품질입니다. 우리는 고객과 긴밀한 관계를
              유지하며, 그들의 비즈니스 목표를 달성하기 위해 최선을 다합니다.
              우리의 팀은 다양한 분야에서 경험 많은 전문가들로 구성되어 있으며,
              그들의 노하우와 열정은 우리의 성장의 핵심 엔진입니다.
              <p style={{ height: "20px" }}></p>
              우리는 더 나은 세상을 만들기 위해 최선을 다하고 있습니다. 혁신,
              협력, 지속 가능성의 가치를 실천하며, 새로운 도약을 위한 여정을
              함께 나아가기를 기대합니다.
              <p style={{ height: "20px" }}></p>
              <p>감사합니다.</p>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
