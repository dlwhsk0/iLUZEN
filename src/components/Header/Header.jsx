import React, { useEffect, useState } from "react";
import "./Header.css";

export default function Header() {
  const [whiteHeader, setWhiteHeader] = useState(false);

  // 스크롤 이벤트 핸들러
  const handleScroll = () => {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    const scrollThreshold = 40; // 헤더 스타일 변경이 시작되는 스크롤 위치

    if (scrollTop > scrollThreshold) {
      // 스크롤 위치가 지정된 임계값을 초과하면 헤더에 어두운 배경색 스타일 적용
      setWhiteHeader(true);
    } else {
      // 스크롤 위치가 지정된 임계값 이하이면 원래 헤더 스타일로 복원
      setWhiteHeader(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <header className={whiteHeader ? "header-scroll" : ""}>
        <div className="headerwrap">
          <div className="logo"></div>
          <nav>
            <ul className="category">
              <li>
                <a href="#회사소개">회사소개</a>
              </li>
              <li>
                <a href="#업무소개">업무소개</a>
              </li>
              <li>
                <a href="#설계품목">설계품목</a>
              </li>
              <li>
                <a href="#고객지원">고객지원</a>
              </li>
            </ul>
          </nav>
          {/* <div>
            <button className="menubtn"></button>
          </div> */}
        </div>
      </header>
    </>
  );
}
