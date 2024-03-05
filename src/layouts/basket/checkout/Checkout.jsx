// Import necessary dependencies from React and other components
import React, { useState } from "react";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import {CheckoutForm} from "./checkout-form/CheckoutForm";
import TopPath from "../../top-path/TopPath";
import { Steps } from "../steps/Steps";
import { Details } from "./details/Details";
import "./Checkout.scss";

const stripePromise = loadStripe("pk_live_51O0AFHIPurxpWPx3EJ4DZtJvnLe0Zag2inN7nTFzB4maLGzhEPqzQIuRb0aCZvXomPl6JR8kOLzLJYtldArLNpJh00Ce2F6eP1");

const Checkout = () => {
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
            <span onClick={() => setIsActive((prev) => !prev)}>
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
          <Elements stripe={stripePromise}>
            <button type="submit">Apply Coupon</button>
          </Elements>
        </form>
        <section className="checkout-page__content">
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
export default Checkout;
