import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import style from "./MultipleItems.module.css";
import Slider from "react-slick";
import EngagementRings from "../../image/catalog/sliderIcons/EngagementRings.png";
import WeddingRings from "../../image/catalog/sliderIcons/WeddingRings.png";
import WomenRings from "../../image/catalog/sliderIcons/WomensRings.png";
import Earrings from "../../image/catalog/sliderIcons/Earrings.png";
import ChainsAndBracelets from "../../image/catalog/sliderIcons/ChainsAndBracelets.png";
import NecklacesAndPendants from "../../image/catalog/sliderIcons/NecklacesAndPendants.png";
import MensJewelry from "../../image/catalog/sliderIcons/MensJewelry.png";

function MultipleItems() {
  const sliderIcons = [
    { name: "EngagementRings", link: "#", src: EngagementRings },
    { name: "WeddingRings", link: "#", src: WeddingRings },
    { name: "WomenRings", link: "#", src: WomenRings },
    { name: "Earrings", link: "#", src: Earrings },
    { name: "ChainsAndBracelets", link: "#", src: ChainsAndBracelets },
    { name: "NecklacesAndPendants", link: "#", src: NecklacesAndPendants },
    { name: "MensJewelry", link: "#", src: MensJewelry },
  ];

  const settings = {
    dots: true,
    infinite: true,
    focusOnSelect: true,
    speed: 900,
    slidesToShow: 4,
    slidesToScroll: 1,
    adaptiveHeight: true,
    swipeToSlide: true,
    arrows: false,
  };
  return (
    <div className={style["slider-container"]}>
      <Slider {...settings}>
        {sliderIcons.map((item, index) => (
          <div key={index} className={style["slider-item"]}>
            <img src={item.src} alt={item.name} />
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default MultipleItems;
