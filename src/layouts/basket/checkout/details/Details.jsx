import React, { useEffect, useState } from "react";
import { Input } from "./input/Input";
import { useSelector } from "react-redux";
import StripeCheckout from "react-stripe-checkout";
import { loadStripe } from "@stripe/stripe-js";
import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import axios from "axios";
import "./Details.sass";

export const Details = () => {
  const publishKey = process.env.STRIPE_PUBLIC_KEY;
  const stripePromise = loadStripe(publishKey);
  const stripe = useStripe();
  const elements = useElements();

  const [data, setData] = useState({
    name: "",
    currentName: "",
    country: "",
    addres: "",
    hz: "",
    punkt: "",
    pocht: "",
    phone: "",
    email: "",
    primech: "",
  });
  const state = useSelector(state => state.basketPrice);
  useEffect(() => {
    if (Object.values(data).includes("")) {
      console.log("Есть не заполненные поля");
    }
  }, [data]);

  const handleData = (event) => {
    console.log(event.target);
    setData((prev) => {
      return {
        ...prev,
        [event.target.name]: event.target.value,
      };
    });
  };

  const onToken = (token) => {
    const body = {
      amount: this.amount, //возьми из redux
      token: token,
    };
    axios
      .post("http://localhost:8000/checkout", body)
      .then(response => {
        console.log(response);
        alert("Payment Success");
      })
      .catch(error => {
        console.log("Payment Error: " + error);
        alert("Payment Error");
      });
  };

  return (
    <>
      <section className="checkout-page-content__left">
        <p className="checkout-page-content-left__title">Детали оплаты</p>
        <form className="checkout-page-content-left__form">
          <section className="checkout-page-content-left__person">
            <Input
              name={"name"}
              handleData={handleData}
              topPlaceholder={"Имя*"}
            />
            <Input
              name={"currentName"}
              handleData={handleData}
              topPlaceholder={"Фамилия*"}
            />
          </section>
          <Input
            name={"country"}
            handleData={handleData}
            list={["Россия", "Казахстан"]}
            defaultCity={"Россия"}
            topPlaceholder={"Страна/регион *"}
          />
          <Input
            name={"addres"}
            handleData={handleData}
            topPlaceholder={"Адрес*"}
            placeholder={"Номер дома и название улицы"}
          />
          <Input
            name={"hz"}
            handleData={handleData}
            placeholder={"Крыло, подъезд, этаж и т.д. (необязательно)"}
          />
          <Input
            name={"punkt"}
            handleData={handleData}
            topPlaceholder={"Населённый пункт *"}
          />
          <Input
            name={"pocht"}
            handleData={handleData}
            topPlaceholder={"Почтовый индекс *"}
          />
          <Input
            name={"phone"}
            handleData={handleData}
            topPlaceholder={"Телефон *"}
          />
          <Input
            name={"email"}
            handleData={handleData}
            topPlaceholder={"Email *"}
            type="email"
          />
          <Input
            name={"primech"}
            handleData={handleData}
            topPlaceholder={"Примечание к заказу (необязательно)"}
            placeholder={
              "Примечания к вашему заказу, например, особые пожелания отделу доставки."
            }
            type="email"
            textarea
          />
        </form>
        <p>{state}</p>
        <section className="checkout-page-content-left__button">
          <StripeCheckout
            label="Get Product"
            name="lescontes"
            description="get product"
            panelLabel="get product"
            amount={null} //возьми из редакса
            token={onToken}
            stripeKey={publishKey}
            image="" //сюда вставить лого
            billingAdress={false}
            className="checkout-page-content-left__stripe-btn"
          />
        </section>
      </section>
      <div className="checkout-page-content__right"></div>
    </>
  );
};
