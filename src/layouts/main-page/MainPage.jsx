import React from "react";
import Slider from "./slider/Slider";
import ProductsSlider from "./products-slider/ProductsSlider.jsx"
import AboutUs from "./about-us/AboutUs";
import Aroma from "./aroma/Aroma";
import Partners from "./partners/Partners";

const MainPage = () => {
  const images = [
    "//shop.lescontes.ru/wp-content/uploads/2021/09/new-1-scaled.jpg",
    "//shop.lescontes.ru/wp-content/uploads/2021/08/серебряный-эльф-разворот-new.jpg",
  ];
  
  return (
    <div className="main-page">
      <Slider images={images} interval={3000} />
      <ProductsSlider/>
      <AboutUs/>
      <Aroma/>
      <Partners/>
    </div>
  );
};
export default MainPage;
