import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function Header() {
  const [blackHeader, setBlackHeader] = useState(false);

  // 스크롤 이벤트 핸들러
  const handleScroll = () => {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    const scrollThreshold = 100; // 헤더 스타일 변경이 시작되는 스크롤 위치

    if (scrollTop > scrollThreshold) {
      // 스크롤 위치가 지정된 임계값을 초과하면 헤더에 어두운 배경색 스타일 적용
      setBlackHeader(true);
    } else {
      // 스크롤 위치가 지정된 임계값 이하이면 원래 헤더 스타일로 복원
      setBlackHeader(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header className={blackHeader ? "header-scroll" : ""}>
      <div className="headerwrap">
        <Link to="/">
          <div className="logo"></div>
        </Link>
        <nav>
          <ul className="navlist">
            <li>
              <Link to="/pages/about">ABOUT</Link>
            </li>
            <li>
              <Link to="/pages/service">SERVICE</Link>
            </li>
            <li>
              <Link to="/pages/project">PROJECT</Link>
            </li>
            <li>
              <Link to="/pages/news">NEWS</Link>
            </li>
            <li>
              <Link to="/pages/contact">CONTACT</Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
