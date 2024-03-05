// import React, { useState } from "react";
// import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";
// import axios from "axios";
// import './checkout-form.sass'

// const CARD_OPTIONS = {
//   iconStyle: "solid",
//   style: {
//     base: {
//       iconColor: "#c4f0ff",
//       color: "#fff",
//       fontWeight: 500,
//       fontFamily: "Roboto, Open Sans, Segoe UI, sans-serif",
//       fontSize: "16px",
//       fontSmoothing: "antiallased",
//       ":-webkit-autofill": {color: "#fce883"},
//       "::placeholder": { color: "#87bbfd" }
//     },
//     invalid: {
//       iconColor: "#ffc7ee",
//       color: "#ffc7ee"
//     }
//   }
// }

// const WrappedCheckoutForm = () => {
//   const [success, setSuccess] = useState(false)
//   const stripe = useStripe()
//   const elements = useElements()



//   const handleSubmit = async (event) => {
//     event.preventDefault()
//     const [error, paymentMethod] = await stripe.createPaymentMethod({
//       type: "card",
//       card: elements.getElement(CardElement)
//     })

//     if (!error) {
//       try {
//         const { id } = paymentMethod
//         const response = await axios.post("http://localhost:8000/checkout", {
//           amount: 10000,
//           id
//         })
//         if (response.data.success) {
//           console.log("successed payment")
//           setSuccess(true)
//         }
//       } catch (error) {
//         console.log("Error" + error)
//       }
//     } else {
//       console.log(error.message)
//     }
//   }

//   return (
//       <>
//       <div className="input-wrapper">
//         <span>Name</span>
//         <input/>
//       </div>
//       {
//         !success ? <form onSubmit={handleSubmit}>
//           <fieldset>
//             <div className="">
//               <CardElement options={CARD_OPTIONS}></CardElement>
//             </div>
//           </fieldset>
//           <button>Pay</button>
//         </form> 
//         : <div><h2>you just bought a sweet spatula</h2></div>
//       }
//       </>
//     );
// };

// export default WrappedCheckoutForm;



// Import necessary dependencies from React and other components
import React, { useState } from "react";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import { CheckoutForm } from "./CheckoutForm";
import TopPath from '../../../top-path/TopPath'
import { Steps } from "../../steps/Steps";
import { Details } from "../details/Details";
import "../Checkout.scss";
import Input from "./input/Input";
import Button from "./button/Button";

const stripePromise = loadStripe("pk_live_51O0AFHIPurxpWPx3EJ4DZtJvnLe0Zag2inN7nTFzB4maLGzhEPqzQIuRb0aCZvXomPl6JR8kOLzLJYtldArLNpJh00Ce2F6eP1");

const WrappedCheckoutForm = () => {
  const [isActive, setIsActive] = useState(false);

  const pathL = [
    {
      id: 1,
      name: "Home",
      path: "/",
    },
  ];

  const steps = [
    {
      id: 1,
      name: "Cart",
      active: true,
      completed: true,
    },
    {
      id: 2,
      name: "Checkout",
      active: true,
      completed: false,
    },
    {
      id: 3,
      name: "Order",
      active: false,
      completed: false,
    },
  ];

  return (
    <section className="checkout-page">
      <TopPath
        path={pathL}
        productName="Checkout"
        pageName="Checkout"
      />
      <section className="checkout-page__container">
        <Steps steps={steps} />
        <section className="checkout-page-container__coup">
          <p>
            Have a coupon?{" "}
            <span onClick={() => setIsActive(prev => !prev)}>
              Click to enter code
            </span>
          </p>
        </section>
        <form
          className={`checkout-page-container__write-coup ${
            isActive ? "checkout-page-container__write-coup-active" : ""
          }`}
        >
          <p className="checkout-page-container-write__title">
            If you have a coupon code, enter it below.
          </p>
          <Input placeholderText="Код купона"/>
          <Button>Применить купон</Button>
          <Elements stripe={stripePromise}>
            <button type="submit">Apply Coupon</button>
          </Elements>
        </form>
        <section className="checkout-page__content">
          <section className="checkout-page__payment-details">
            <h1 className="checkout-page__payment-title">Детали оплаты</h1>
            <form className="checkout-page__form">
              <div className='checkout-page__person-info'>
                <Input placeholder="Имя*"/>
                <Input placeholder="Фамилия*"/>
              </div>
              <div className='checkout-page__addres'>
                <Input placeholder="Адрес*" placeholderText="Номер дома и название улицы"/>
                <Input placeholderText="Крыло, подъезд, этаж и т.д. (необязательно)"/>
              </div>
              <Input placeholder="Населённый пункт *"/>
              <Input placeholder="Область / район *"/>
              <Input placeholder="Почтовый индекс *"/>
              <Input placeholder="Телефон *"/>
              <Input type="email" placeholder="Email *"/>
            </form>
          </section>
          <Elements stripe={stripePromise}>
            <CheckoutForm />
          </Elements>
           <Details /> 
        </section>
      </section>
    </section>
  );
};

// Export the Checkout component
export default WrappedCheckoutForm;