import React from "react";
import Telegram from "../../../image/icons/Telegram2.svg";
import style from "./ButtonGoTelegram.module.css";

function ButtonGoTelegram() {
  return (
    <button className={style.button}>
      <img src={Telegram} alt="Telegram" />
      <span>Перейти в каталог</span>
    </button>
  );
}

export default ButtonGoTelegram;
