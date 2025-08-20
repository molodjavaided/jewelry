import React from "react";
import style from "./SocialIcon.module.css";

function SocialIcon({ item }) {
  return (
    <a href={item.link} className={style["social-icon"]}>
      <img src={item.src} alt={item.name} />
    </a>
  );
}

export default SocialIcon;
