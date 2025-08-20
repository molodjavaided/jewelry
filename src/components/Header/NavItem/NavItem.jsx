import React from "react";
import style from "./NavItem.module.css";

function NavItem({ item }) {
  return (
    <li>
      <a className={style["nav-menu__item"]} href={item.link}>
        {item.name}
      </a>
    </li>
  );
}

export default NavItem;
