import { useState } from "react";
import style from "./CustomJewelry.module.css";
import customFileIcon from "../../../image/icons/customFileIcon.svg";

function CustomJewelry() {
  const [formData, setFormData] = useState({
    jewelryType: "",
    material: "",
    insert: "",
    reference: null,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Форма отправлена:", formData);
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setFormData((prevData) => ({ ...prevData, reference: file }));
  };

  return (
    <div className={style["container-customJewelry"]}>
      <div className={style.title}>
        <p>Ваше желание и вкус являются основой нашего творчества</p>
        <h2>
          Хотите ювелирное изделие по
          <br />
          индивидуальному дизайну?
        </h2>
      </div>
      <form onSubmit={handleSubmit}>
        <div className={style["form-group"]}>
          <label className={style.label}>Тип украшения</label>
          <select
            className={style.select}
            name="jewelryType"
            value={formData.jewelryType}
            onChange={handleChange}
            required
          >
            <option value="">Выберите тип украшения</option>
            <option value="Кольцо">Кольцо</option>
            <option value="Серьги">Серьги</option>
            <option value="Браслет">Браслет</option>
            <option value="Подвеска">Подвеска</option>
            <option value="Колье">Колье</option>
          </select>
        </div>
        <div className={style["form-group"]}>
          <label className={style.label}>Материал</label>
          <select
            name="material"
            value={formData.material}
            onChange={handleChange}
            required
            className={style.select}
          >
            <option value="">Выберите материал</option>
            <option value="Золото">Золото</option>
            <option value="Серебро">Серебро</option>
            <option value="Платина">Платина</option>
            <option value="Белое золото">Белое золото</option>
          </select>
        </div>
        <div className={style["form-group"]}>
          <label className={style.label}>Вставка</label>
          <select
            name="insert"
            value={formData.insert}
            onChange={handleChange}
            required
            className={style.select}
          >
            <option value="">Выберите вставку</option>
            <option value="Бриллиант">Бриллиант</option>
            <option value="Фианит">Фианит</option>
            <option value="Изумруд">Изумруд</option>
            <option value="Без Вставки">Без Вставки</option>
          </select>
        </div>

        <div className={style["form-group"]}>
          <input
            id="reference"
            className={style.input}
            type="file"
            accept="image/*"
            onChange={handleFileChange}
          />
          <label htmlFor="reference" className={style["custom-file-label"]}>
            <img
              src={customFileIcon}
              alt="custom-file-icon"
              className={style["custom-file-icon"]}
            />
            <span className={style["custom-file-text"]}>
              Прикрепить референс
            </span>
          </label>
          {formData.reference && (
            <p className={style["custom-file-name"]}>
              Выбран файл: {formData.reference.name}
            </p>
          )}
        </div>
        <div className={style["buttons"]}>
          <button className={style["button-submit"]} type="submit">
            Получить консультацию
          </button>
          <a className={style["link-details"]}>Подробнее</a>
        </div>
      </form>
    </div>
  );
}

export default CustomJewelry;
