import React from "react";
import { Link } from "react-router-dom";

export default function HeaderNoMove() {
  return (
    <>
      <header>
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
