import React from "react";
import logo from "../../../image/logo/logo.svg";
import style from "./Logo.module.css";

function Logo() {
  return (
    <div className={style.logo}>
      <a href="#" className={style["logo-img"]}>
        <img src={logo} alt="Logo" width={64} height={34} />
      </a>
    </div>
  );
}

export default Logo;
