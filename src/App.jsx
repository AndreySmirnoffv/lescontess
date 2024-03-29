import "./App.css";
import "./reset-style/reset.css";
import "./reset-style/normolize.css";
import MainPage from "./layouts/main-page/MainPage";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import NavBar from "./layouts/nav-bar/NavBar";
import Shop from "./layouts/shop/Shop";
import SecondShop from "./layouts/shop/second-page/SecondShop";
import History from "./layouts/geschichte/History";
import About from "./layouts/about/About";
import Tovar from "./layouts/tovar/Tovar";
import { Basket } from "./layouts/basket/Basket";
import Checkout from "./layouts/basket/checkout/Checkout";
import Footer from "./layouts/footer/Footer";
import React from "react";
import WrappedCheckoutForm from "./layouts/basket/checkout/checkout-form/WrappedCheckoutForm";


const App = () => {
  return (
    <BrowserRouter>
      <div className="App">
        <NavBar />
        <Routes>
          <Route path="/" index element={<MainPage />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/duefte" element={<Navigate to="/shop" replace />} />
          <Route path="/shop/page/2" element={<SecondShop />} />
          <Route path="/history" element={<History />} />
          <Route path="/about-us" element={<About />} />
          <Route path="shop/:path" element={<Tovar />} />
          <Route path="korb" element={<Basket />} />
          <Route path="checkout" element={<Checkout/>} />
          <Route path="payment" element={<WrappedCheckoutForm/>}/>
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
};

export default App;