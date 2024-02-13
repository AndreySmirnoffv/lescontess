// import React from "react";
// import axios from "axios";
// import { CardElement, Elements } from "@stripe/react-stripe-js";
// import { loadStripe } from "@stripe/stripe-js";

// const CheckoutForm = ({ elements, stripe }) => {
//   const stripePromise = loadStripe(process.env.STRIPE_PUBLIC_KEY)
//   const options = {}

//   const handleSubmit = async (event) => {
//     event.preventDefault();

//     if (!stripe || !elements) {
//       return;
//     }

//     const cardElement = elements.getElement(CardElement);

//     try {
//       const { token, error } = await stripe.createToken(cardElement);

//       if (error) {
//         console.error(error);
//       } else {
//         console.log(token);

//         const response = await axios.post("http://localhost:8000/checkout", {
//           token: token.id,
//           amount: 1000,
//         });

//         console.log(response.data);

//         if (response.data.success) {
//           alert("Payment successful!");
//         } else {
//           alert("Payment failed: " + response.data.error);
//         }
//       }
//     } catch (error) {
//       console.error("Error sending token to server:", error);
//     }
//   };


//   return (
//     <form onSubmit={handleSubmit}>
//       <Elements loadStripe={stripePromise} options={options}>
//         <CardElement />
//       </Elements>
//       <button type="submit" disabled={!stripe}>
//         Pay
//       </button>
//     </form>
//   );
// };

// export default CheckoutForm;


import React from "react";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import WrappedCheckoutForm from "./WrappedCheckoutForm";

const stripePromise = loadStripe(process.env.STRIPE_PUBLIC_KEY)

export const CheckoutForm = () => {
  return(
    <Elements stripe={stripePromise}>
      <WrappedCheckoutForm/>
    </Elements>
  )
}