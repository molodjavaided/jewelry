import React from "react";
import style from "./currentPositions.module.css";
import Telegram from "../../../image/icons/Telegram2.svg";
import ButtonGoTelegram from "../../Buttons/ButtonGoTelegram/ButtonGoTelegram";
import Ring from "../../../image/Ring/Ring.png";

function CurrentPositions() {
  return (
    <div className={style["container-currentPositions"]}>
      <div className={style["wrapper-text"]}>
        <div className={style["text-top"]}>Актуальные позиции</div>
        <div className={style["text-bottom"]}>
          в онлайн каталоге в телеграме
        </div>
      </div>
      <img src={Ring} alt="Ring" className={style.ring} />
      <ButtonGoTelegram />
    </div>
  );
}

export default CurrentPositions;
