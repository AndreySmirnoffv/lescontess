// ProductSlider.js
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./products-slider.sass";

const aromas = [
  {
    name: "Elfe d'or 30мл",
    imgs: [require("../../../assets/img/shop/first-image.png")],
    id: 1,
    price: "8 999",
    prevPrice: "13 300 ₽",
    path: "elfe-dor-30-ml",
    text: "Яркий чувственный аромат, подчеркнутый легким \n оттенком гурманских нот, придающий загадочность и \n утончённость.",
    unPath: {
      name: "Женские ароматы Les Contes",
      path: "/женские-ароматы-les-contes",
    },
    bonus: "НАБОР СЕМПЛОВ В ПОДАРОК!",
    description:
      "Чарующие оттенки спелых фруктов, акварельные вкрапления цветов, мускусно-древесный фон… и капля волшебства в каждом флаконе.",
    quantity: 9,
    articul: "LC515",
  },
  {
    name: "Elfe d'or 30мл",
    imgs: [require("../../../assets/img/shop/second-image.png")],
    id: 2,
    price: "8 999",
    prevPrice: "13 300 ₽",
    path: "elfe-dor-30-ml",
    text: "Яркий чувственный аромат, подчеркнутый легким \n оттенком гурманских нот, придающий загадочность и \n утончённость.",
    unPath: {
      name: "Женские ароматы Les Contes",
      path: "/женские-ароматы-les-contes",
    },
    bonus: "НАБОР СЕМПЛОВ В ПОДАРОК!",
    description:
      "Чарующие оттенки спелых фруктов, акварельные вкрапления цветов, мускусно-древесный фон… и капля волшебства в каждом флаконе.",
    quantity: 9,
    articul: "LC515",
  },
  {
    name: "Elfe d'or 30мл",
    imgs: [require("../../../assets/img/shop/third-image.png")],
    id: 3,
    price: "8 999",
    prevPrice: "13 300 ₽",
    path: "elfe-dor-30-ml",
    text: "Яркий чувственный аромат, подчеркнутый легким \n оттенком гурманских нот, придающий загадочность и \n утончённость.",
    unPath: {
      name: "Женские ароматы Les Contes",
      path: "/женские-ароматы-les-contes",
    },
    bonus: "НАБОР СЕМПЛОВ В ПОДАРОК!",
    description:
      "Чарующие оттенки спелых фруктов, акварельные вкрапления цветов, мускусно-древесный фон… и капля волшебства в каждом флаконе.",
    quantity: 9,
    articul: "LC515",
  },
  {
    name: "Elfe d'or 30мл",
    imgs: [require("../../../assets/img/shop/fifth-image.png")],
    id: 4,
    price: "8 999",
    prevPrice: "13 300 ₽",
    path: "elfe-dor-30-ml",
    text: "Яркий чувственный аромат, подчеркнутый легким \n оттенком гурманских нот, придающий загадочность и \n утончённость.",
    unPath: {
      name: "Женские ароматы Les Contes",
      path: "/женские-ароматы-les-contes",
    },
    bonus: "НАБОР СЕМПЛОВ В ПОДАРОК!",
    description:
      "Чарующие оттенки спелых фруктов, акварельные вкрапления цветов, мускусно-древесный фон… и капля волшебства в каждом флаконе.",
    quantity: 9,
    articul: "LC515",
  },
];

const ProductSlider = () => {
  const [startIndex, setStartIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      // setStartIndex((prevIndex) => (prevIndex + 1) % aromas.length);
    }, 3000); // Интервал в миллисекундах между автоматической прокруткой слайдов
    return () => clearInterval(interval);
  }, []);

  const handleNextSlide = () => {
    if (!isAnimating) {
      setIsAnimating(true);
      setStartIndex((prevIndex) => (prevIndex + 1) % aromas.length);

      setTimeout(() => {
        setIsAnimating(false);
      }, 500); // Время анимации в миллисекундах
    }
  };

  const handlePrevSlide = () => {
    if (!isAnimating) {
      setIsAnimating(true);
      setStartIndex((prevIndex) => (prevIndex - 1 + aromas.length) % aromas.length);

      setTimeout(() => {
        setIsAnimating(false);
      }, 500); // Время анимации в миллисекундах
    }
  };

  const visibleSlides = [
    aromas[(startIndex - 1 + aromas.length) % aromas.length],
    aromas[startIndex],
    aromas[(startIndex + 1) % aromas.length],
  ];

  return (
    <div className="product-slider">
      <button className="prev-button" onClick={handlePrevSlide}>
        &lt;
      </button>
      <div className={`slides-container ${isAnimating ? "animating" : ""}`}>
        {visibleSlides.map((aroma, index) => (
          <Link
            to={aroma.path}
            key={index}
            className={`slide ${index === 1 ? "current" : ""}`}
          >
            <img src={aroma.imgs[0]} alt={aroma.name} />
            <div className="info-container">
              <div className="discount-text">Со Скидкой! </div>
              <div className="name-text">{aroma.name}</div>
              <div className="prices-container">
                <p className="prev-price-text">{aroma.prevPrice}</p>
                <p className="price-text">{aroma.price}</p>
              </div>
            </div>
          </Link>
        ))}
      </div>
      <button className="next-button" onClick={handleNextSlide}>
        &gt;
      </button>
    </div>
  );
};

export default ProductSlider;
