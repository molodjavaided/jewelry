import React from "react";
import style from "./NameStudioAnimation.module.css";
import name from "../../../image/background/name.svg";

function NameStudioAnimation() {
  return (
    <div className={style.wrapper}>
      <img src={name} className={style.NameStudioAnimation} />
    </div>
  );
}

export default NameStudioAnimation;
