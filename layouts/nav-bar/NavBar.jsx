import React, { useEffect, useState } from "react";
import s from "./nav-bar.module.scss";
import { Link, NavLink } from "react-router-dom";

const Links = ({ item, activeClassName, fixedHeader }) => {
  return (
    <NavLink
      className={({ isActive }) => {
        let returned = [s.fixed_header_link, s.nav_link];
        isActive
          ? returned.push(activeClassName ? activeClassName : s.active_link)
          : "";
        return returned.join(" ");
      }}
      to={item.path}
      key={item.id}
    >
      {item.title}
    </NavLink>
  );
};

const NavBar = () => {
  const navContainer = [
    {
      id: 1,
      title: "Главная",
      path: "/",
    },
    {
      id: 2,
      title: "Магазин",
      path: "/shop",
    },
    {
      id: 3,
      title: "Ароматы",
      path: "/duefte",
    },
    {
      id: 4,
      title: "О нас",
      path: "/about-us",
    },
    {
      id: 5,
      title: "История",
      path: "/history",
    },
    {
      id: 6,
      title: "Корзина",
      path: "/korb",
    },
  ];
  const [topScroll, setTopScroll] = useState(false);
  const [addedTop, setAddedTop] = useState(false);

  const checkPageYOffset = () => {
    setTopScroll(Math.floor(window.pageYOffset) > 60 ? true : false);
    setAddedTop(Math.floor(window.pageYOffset) > 10 ? true : false);
  };

  useEffect(() => {
    checkPageYOffset();
    console.log(navContainer.slice(3, navContainer.length));
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      checkPageYOffset();
    });
  }, [topScroll]);

  useEffect(() => {
    console.log(topScroll);
  }, [topScroll]);

  return (
    <>
      <p className={s.bumper_message}>
        Каждому покупателю в подарок гейзер для ванны и набор семплов!
      </p>
      {addedTop && (
        <header
          className={`${s.header} ${s.fixed_header} ${
            topScroll ? s.visible_header : ""
          }`}
        >
          <nav className={s.nav_bar}>
            {navContainer.slice(0, 3).map((item) => (
              <Links fixedHeader activeClassName={s.active_top} item={item} />
            ))}
            <Link className={s.logo_link} to={"/"}>
              <img
                className={s.logo}
                src={require("../../assets/img/main-page/logo.png")}
                alt="Logo"
              />
            </Link>
            {navContainer.slice(3, navContainer.length).map((item) => (
              <Links fixedHeader activeClassName={s.active_top} item={item} />
            ))}
          </nav>
        </header>
      )}
      <header className={s.header}>
        <nav className={s.nav_bar}>
          {navContainer.slice(0, 3).map((item) => (
            <Links item={item} />
          ))}
          <Link className={s.logo_link} to={"/"}>
            <img
              className={s.logo}
              src={require("../../assets/img/main-page/logo.png")}
              alt="Logo"
            />
          </Link>
          {navContainer.slice(3, navContainer.length).map((item) => (
            <Links item={item} />
          ))}
        </nav>
      </header>
    </>
  );
};

export default NavBar;
