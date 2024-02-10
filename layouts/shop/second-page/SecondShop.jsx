import TopPath from "../../top-path/TopPath";
import "../shop.sass";
import { Link } from "react-router-dom";

export const secondAromas = [
  {
    name: "Tesey",
    imgs: [require("../../../assets/img/shop/second-page/first-image.png")],
    id: 1,
    price: "8 999 ₽",
    prevPrice: "10 280 ₽",
    path: "tesey",
    text: "Фруктово-цветочный букет для настоящих мужчин, желающих быть героями в глазах своих любимых.",
    unPath: "",
    bonus: "ПРИ ПОКУПКЕ АРОМАТА — НАБОР СЕМПЛОВ В ПОДАРОК!",
    description: "",
    quantity: "9",
    articul: "LC007",
  },
  {
    name: "Pour Homme",
    imgs: [require("../../../assets/img/shop/second-page/second-image.png")],
    id: 2,
    price: "8 999 ₽",
    prevPrice: "10 280 ₽",
    path: "pour-homme",
    text: "Аромат для настоящего супергероя, в котором успешно сочетаются как романтический возлюбленный, так и смелый искатель приключений.",
    unPath: "",
    bonus: "ПРИ ПОКУПКЕ АРОМАТА — НАБОР СЕМПЛОВ В ПОДАРОК!",
    description: "",
    quantity: "9",
    articul: "",
  },
  {
    name: "Bonheur 100 мл.",
    imgs: [require("../../../assets/img/shop/second-page/third-image.png")],
    id: 3,
    price: "14 990 ₽",
    prevPrice: "16 990 ₽",
    path: "bonheur-100",
    text: "Чарующие оттенки спелых фруктов, акварельные вкрапления цветов, мускусно-древесный фон… и капля волшебства в каждом флаконе.",
    unPath: "",
    bonus: "ПРИ ПОКУПКЕ АРОМАТА — НАБОР СЕМПЛОВ В ПОДАРОК!",
    description: "",
    quantity: "9",
    articul: "LC405",
  },
  {
    name: "Pour Femme",
    imgs: [require("../../../assets/img/shop/second-page/fourth-image.png")],
    id: 4,
    price: "8 999 ₽",
    prevPrice: "10 280 ₽",
    path: "pour-femme",
    text: "Парфюмерная вода Pour Femme",
    unPath: "",
    bonus: "ПРИ ПОКУПКЕ АРОМАТА — НАБОР СЕМПЛОВ В ПОДАРОК!",
    description:
      "Необыкновенный фруктово-цветочный аромат, заставляющий влюбиться с первого раза.",
    quantity: "8",
    articul: "LC001",
  },
  {
    name: "Passion d’Ariadna",
    imgs: [require("../../../assets/img/shop/second-page/fifth-image.png")],
    id: 5,
    price: "9 999 ₽",
    prevPrice: "13 300 ₽",
    path: "passion-dariadna",
    text: "Парфюмерная вода Passion d’Ariadna",
    unPath: "",
    bonus: "ПРИ ПОКУПКЕ АРОМАТА — НАБОР СЕМПЛОВ В ПОДАРОК!",
    description: "Аромат опьяняющей страсти и предвкушения счастья.",
    quantity: "1",
    articul: "LC012",
  },
  {
    name: "Néride",
    imgs: [require("../../../assets/img/shop/second-page/sixth-image.png")],
    id: 6,
    price: "8 999 ₽",
    prevPrice: "10 980 ₽",
    path: "neride",
    text: "Парфюмернаявода  Néride",
    unPath: "",
    bonus: "ПРИ ПОКУПКЕ АРОМАТА — НАБОР СЕМПЛОВ В ПОДАРОК!",
    description:
      "Аромат, зовущий бросить повседневность и пуститься в захватывающее путешествие, полное опасностей и приключений.",
    quantity: "10",
    articul: "LC009",
  },
  {
    name: "",
    imgs: [require("../../../assets/img/shop/second-page/seventh-image.jpeg")],
    id: 7,
    price: "",
    prevPrice: "",
    path: "",
    text: "",
    unPath: "",
    bonus: "",
    description: "",
    quantity: "",
    articul: "",
  },
];

const pathL = [
  {
    id: 1,
    name: "Главная",
    path: "/",
  },
  {
    id: 2,
    name: "Магазин",
    path: "/shop",
  },
];

const SecondShop = () => {
  return (
    <div className="shop-wrapper">
      <div className="shop">
        <h1>Магазин</h1>
        <div className="info">
          <TopPath path={pathL}/>
        </div>
        <div className="aromas">
          {secondAromas.map((aroma) => (
            <div className="first-row__first-image" key={aroma.id}>
              <Link to={`/shop/${aroma.path}`}>
                <img src={aroma.imgs[0]} alt="" />
                <b>
                  <p>{aroma.name}</p>
                </b>
              </Link>
              <p>
                <strike style={{ color: "grey" }}>{aroma.prevPrice}</strike>
                <b> {aroma.price}</b>
              </p>
            </div>
          ))}
        </div>
        <div className="pages">
          <Link to="/shop">
            <button style={{ color: "black", background: "#EFEFEF" }}>1</button>
          </Link>
          <Link to="/shop/page/2">
            <button style={{ color: "white", background: "black" }}>2</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SecondShop;
