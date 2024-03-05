import React from "react";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import WrappedCheckoutForm from './WrappedCheckoutForm'

const stripePromise = loadStripe(process.env.STRIPE_PUBLIC_KEY)

export const CheckoutForm = () => {
  return(
    <Elements stripe={stripePromise}>
      <WrappedCheckoutForm/>
    </Elements>
  )
}