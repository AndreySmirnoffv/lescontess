import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import Slide1 from "../slides/Slide1";
import Navigation from "./Navigation/Navigation";
import { aromas } from "../../shop/Shop";
import { secondAromas } from "../../shop/second-page/SecondShop";

const TovarContainer = ({ currentItem }) => {
  const [quentityTovars, setQuentityTovars] = useState(1);
  const [activeTab, setActiveTab] = useState("info");
  const [activeAroma, setActiveAroma] = useState(null);
  let [inputValue, setInputValue] = useState(0);

  const dispatch = useDispatch();
  const allAromas = aromas.concat(secondAromas);

  useEffect(() => {
    let value = inputValue;
    console.log(value);
    let quent = quentityTovars;
    console.log(value + quent);
  }, [inputValue]);

  const decrementFunc = () => {
    if (quentityTovars <= 1) {
      console.log();
    } else {
      setQuentityTovars((prev) => --prev);
    }
  };

  const incrementFunc = () => {
    if (quentityTovars >= currentItem?.quantity) {
      console.log();
    } else {
      setQuentityTovars((prev) => ++prev);
    }
  };

  useEffect(() => {
    setQuentityTovars(1);
  }, [currentItem]);

  const handleInput = (e) => {
    setInputValue(parseInt(e.target.value));
  };

  const addToBasket = () => {
    dispatch({
      type: "ADD",
      payload: {
        currentItem,
        length: quentityTovars,
        price: currentItem.price,
      },
    });
  };

  const handleTabClick = (tab, aromaId) => {
    setActiveTab(tab);
    setActiveAroma(aromaId);
  };

  const getRandomAroma = () => {
    const randomIndex = Math.floor(Math.random() * allAromas.length);
    return allAromas[randomIndex].imgs;
  };

  const getRandomAromaInfo = () => {
    const randomIndex = Math.floor(Math.random() * allAromas.length);
    const randomAroma = allAromas[randomIndex];
    return {
      name: randomAroma.name,
      price: randomAroma.price,
      prevPrice: randomAroma.prevPrice,
      path: randomAroma.path, // Добавлен путь к товару
      img: randomAroma.imgs[0], // Выбрана первая картинка
    };
  };

  const randomAromaInfo1 = getRandomAromaInfo();
  const randomAromaInfo2 = getRandomAromaInfo();
  const randomAromaInfo3 = getRandomAromaInfo();

  return (
    <div className="tovar-page__tovar">
      <div className="tovar-page-tovar__container">
        <Navigation currentItem={currentItem} />
        <article className="tovar-page__info">
          <div className="tovar-page-info__imgs">
            <div className="tovar-page-info-imgs__main">
              {currentItem?.prevPrice ? (
                <p className="tovar-page-info-imgs-main__doscount">
                  СО СКИДКОЙ
                </p>
              ) : null}
              <div className="tovar-page__slider">
                {currentItem?.imgs.map((item, index) => (
                  <React.Fragment key={index}>
                    <input name="tovar-r" type="radio" id={`r${index + 1}`} />
                    <Slide1 img={item} />
                  </React.Fragment>
                ))}
              </div>
            </div>
            <div className="tovar-page-info__navigation">
              {currentItem?.imgs.map((item, index) => (
                <label
                  className="tovar-page-navigation__slide"
                  htmlFor={`r${index + 1}`}
                  key={index}
                >
                  <img src={`${item}`} alt="" />
                </label>
              ))}
            </div>
          </div>
          <div className="tovar-page-container__right">
            <article className="tovar-page-info__content">
              <p className="tovar-page-info-content__name">
                Порфюмерная вода
                <br />
                {currentItem?.name}
              </p>
              <p className="tovar-page-info-content__bonuse">
                ПРИ ПОКУПКЕ АРОМАТА — {currentItem?.bonus}
              </p>
              <p className="tovar-page-info-content__description">
                {currentItem?.description}
              </p>
              <p className="tovar-page-info-content__price">
                {currentItem?.prevPrice ? (
                  <span className="tovar-page-info-content__price-prev">
                    {currentItem?.prevPrice}{" "}
                  </span>
                ) : null}
                {currentItem?.price}
                <span className="tovar-page-info-content__price-currency">
                  ₽
                </span>
              </p>
              <p className="in-stock">{currentItem?.quantity} в наличии</p>
            </article>
            <div className="tovar-page__adding-to-cart">
              <div className="tovar-page__quantity">
                <button
                  onClick={() => decrementFunc()}
                  className="tovar-page-quantity__decrement"
                ></button>
                <input
                  onInput={(e) => handleInput(e)}
                  type="text"
                  value={quentityTovars}
                  className="tovar-page-quentity__count"
                />
                <button
                  onClick={() => incrementFunc()}
                  className="tovar-page-quantity__increment"
                ></button>
              </div>
              <button
                onClick={() => addToBasket()}
                className="tovar-page-quantity__add"
              >
                В корзину
              </button>
            </div>
            <div className="tovar-page__product-meta">
              <p className="tovar-page__category">
                Категория:{" "}
                <Link to={currentItem?.unPath.path}>
                  {currentItem?.unPath.name}
                </Link>
              </p>
              <p className="tovar-page__articul">
                АРТИКУЛ: {currentItem?.articul}
              </p>
            </div>
          </div>
        </article>
        <span
          className={`tab ${activeTab === "info" ? "active-tab" : ""}`}
          onClick={() => handleTabClick("info", activeAroma)}
        >
          Инфо
        </span>{" "}
        <span
          className={`tab ${activeTab === "volume" ? "active-tab" : ""}`}
          onClick={() => handleTabClick("volume", activeAroma)}
        >
          Объем флакона
        </span>
      </div>
      {activeTab === "info" && (
        <div className="wrapper-text__first-block">
          {/* Блок с информацией */}
          <h1 className="info-block-header">
            ПРИ ПОКУПКЕ АРОМАТА — НАБОР СЕМПЛОВ В ПОДАРОК!
          </h1>
          <div>
            <p className="wrapper-text-first-block__bottom-text">
              {currentItem?.bottomText}
            </p>
          </div>
        </div>
      )}

      {activeTab === "volume" && (
        <div className="wrapper-text__second-block">
          {/* Блок с информацией об объеме флакона */}
          <p className="volume-block">Тут будет информация об объеме флакона</p>
        </div>
      )}
      <div className="tovars">
        <h1 className="tovars__header">Вам может понравиться</h1>
        <div className="tovars__blocks">
          <div className="tovars__first-block">
            <Link to={randomAromaInfo1.path}>
              <img
                className="tovars-first-block__image"
                src={randomAromaInfo1.img}
                alt=""
              />
            </Link>

            <p className="tovars-first-block__name">
              Парфюмерная вода {randomAromaInfo1.name}
            </p>
            <div className="tovars-first-block__info">
              <p className="tovars-first-block__prev-price">
                {randomAromaInfo1.prevPrice}
              </p>
              <p className="tovars-first-block__price">
                {randomAromaInfo1.price}
              </p>
            </div>
          </div>
          <div className="tovars__second-block">
            <Link to={randomAromaInfo2.path}>
              <img
                className="tovars-second-block__image"
                src={randomAromaInfo2.img}
                alt=""
              />
            </Link>
            <p className="tovars-second-block__name">
              Парфюмерная вода {randomAromaInfo2.name}
            </p>
            <div className="tovars-second-block__info">
              <p className="tovars-second-block__prev-price">
                {randomAromaInfo2.prevPrice}
              </p>
              <p className="tovars-second-block__price">
                {randomAromaInfo2.price}
              </p>
            </div>
          </div>
          <div className="tovars__third-block">
            <Link to={randomAromaInfo3.path}>
              <img
                className="tovars-third-block__image"
                src={randomAromaInfo3.img}
                alt=""
              />
            </Link>
            <p className="tovars-third-block__name">
              Парфюмерная вода {randomAromaInfo3.name}
            </p>
            <div className="tovars-third-block__info">
              <p className="tovars-third-block__prev-price">
                {randomAromaInfo1.prevPrice}
              </p>
              <p className="tovars-third-block__price">
                {randomAromaInfo3.price}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TovarContainer;
