import BrandInfoVideo from "../../BrandInfoVideo/BrandInfoVideo";
import style from "./BrandInfo.module.css";

function BrandInfo() {
  return (
    <div className={style["container-brandInfo"]}>
      <div className={style["brandInfo-text"]}>
        <h2>От директора</h2>
        <p>
          Наши ювелиры обладают глубокими знаниями о драгоценных и
          полудрагоценных камнях, спецификах их огранки и просчитанных шагах при
          создании украшений. Благодаря многолетнему опыту и знаниям, ювелиры
          могут воплотить любые идеи заказчиков, создавая уникальные и
          неповторимые украшения.
        </p>
        <button className={style["button-brandInfo"]}>Больше о бренде</button>
      </div>
    </div>
  );
}

export default BrandInfo;
