import React from "react";
import Header from "../Header/Header";
import VideoBackground from "./VideoBackground/VideoBackground";
import NameStudioAnimation from "./NameStudioAnimation/NameStudioAnimation";
import style from "./MainPage.module.css";
import Container from "../Container/Container";
import ButtonCatalog from "../Buttons/ButtonCatalog/ButtonCatalog";
import ButtonDesign from "../Buttons/ButtonDesign/ButtonDesign";
import MultipleItems from "../SliderCatalog/MultipleItems";
import CurrentPositions from "./currentPositions/currentPositions";
import BrandInfo from "./BrandInfo/BrandInfo";
import BrandInfoVideo from "../BrandInfoVideo/BrandInfoVideo";
import CustomJewelry from "./CustomJewelry/CustomJewelry";
import bkForm from "../../image/background/background-form.png";

function MainPage() {
  return (
    <>
      <Header />
      <main>
        <section className={style["section-main"]}>
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
        </section>
        <section className={style["section-catalog"]}>
          <div className={style["container-catalog container"]}>
            <MultipleItems />
          </div>
        </section>
        <section className={style["section-currentPositions"]}>
          <CurrentPositions />
        </section>
        <section className={style["section-brandInfo"]}>
          <BrandInfo />
          <BrandInfoVideo />
        </section>
        <section className={style["section-customJewelry"]}>
          <CustomJewelry />
          <img src={bkForm} alt="jewelry" className={style.background} />
        </section>
      </main>
    </>
  );
}

export default MainPage;
