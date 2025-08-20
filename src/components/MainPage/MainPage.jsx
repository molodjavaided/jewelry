import React from "react";
import Header from "../Header/Header";
import VideoBackground from "./VideoBackground/VideoBackground";
import NameStudioAnimation from "./NameStudioAnimation/NameStudioAnimation";
import style from "./MainPage.module.css";
import Container from "../Container/Container";
import ButtonCatalog from "../Buttons/ButtonCatalog/ButtonCatalog";
import ButtonDesign from "../Buttons/ButtonDesign/ButtonDesign";
import SliderCatalog from "../SliderCatalog/SliderCatalog";

function MainPage() {
  return (
    <>
      <Header />
      <main>
        <VideoBackground />
        <Container>
          <NameStudioAnimation />
          <div className={style["wrapper-text"]}>
            <p className={`${style.text} ${style.top}`}>
              Создаем уникальные изделия под заказ
            </p>
            <p className={`${style.text} ${style.bottom}`}>
              Воплоти мечту в реальность
            </p>
          </div>
          <div className={style.buttons}>
            <ButtonCatalog />
            <ButtonDesign />
          </div>
        </Container>
        <Container>
          <SliderCatalog />
        </Container>
      </main>
    </>
  );
}

export default MainPage;
