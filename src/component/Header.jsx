import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function Header() {
  const [whiteHeader, setWhiteHeader] = useState(false);

  // 스크롤 이벤트 핸들러
  const handleScroll = () => {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    const scrollThreshold = 200; // 헤더 스타일 변경이 시작되는 스크롤 위치

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
          <Link to="/">
            <div className="logo"></div>
          </Link>
          <div>
            <button className="menubtn"></button>
          </div>
        </div>
      </header>
    </>
  );
}
