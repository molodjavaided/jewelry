import React from "react";
import style from "./Header.module.css";

import NavItem from "./NavItem/NavItem";
import Logo from "./Logo/Logo";
import SocialIcon from "./SocialIcon/SocialIcon";

import whatsapIcon from "../../image/icons/Whatsapp.svg";
import VKIcon from "../../image/icons/VK.svg";
import TelegramIcon from "../../image/icons/Telegram.svg";
import InstagramIcon from "../../image/icons/Instagram.svg";
import Container from "../Container/Container";

function Header() {
  const navItems = [
    { name: "Каталог", link: "#" },
    { name: "О бренде", link: "#" },
    { name: "Индивидуальный заказ", link: "#" },
    { name: "Оплата и доставка", link: "#" },
    { name: "Сервис", link: "#" },
    { name: "Команда", link: "#" },
    { name: "Контакты", link: "#" },
  ];

  const socialIcons = [
    { name: "Whatsapp", link: "#", src: whatsapIcon },
    { name: "VK", link: "#", src: VKIcon },
    { name: "Telegram", link: "#", src: TelegramIcon },
    { name: "Instagram", link: "#", src: InstagramIcon },
  ];
  return (
    <header className={style.header}>
      <Container>
        <div className={style["header-content"]}>
          <Logo />

          <nav>
            <ul className={style["nav-menu"]}>
              {navItems.map((item, index) => (
                <NavItem item={item} key={index} />
              ))}
            </ul>
          </nav>

          <div className={style["social-icons"]}>
            {socialIcons.map((item, index) => (
              <SocialIcon item={item} key={index} />
            ))}
          </div>
        </div>
      </Container>
    </header>
  );
}

export default Header;
