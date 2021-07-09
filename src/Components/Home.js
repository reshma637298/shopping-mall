import React, { useState } from "react";
import Header from "../UI/Header";
import Category from "./Category";
import Electronics from "./Electronics";
import Jewelery from "./Jewelery";
import Mens from "./Mens";
import Womens from "./Womens";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Cart from "./Cart";
import { CartContext } from "./cart-context";
import { CartProvider } from "./cart-context";
// const value = {
//   name: "ammu",
//   age: 12,
// };

const Home = () => {
  const [cartItems, setCartItems] = useState([]);
  // const value = { cartItems, setCartItems };
  //const value = ["reshma", "ammu"];

  return (
    <CartProvider value={{ cartItems, setCartItems }}>
      <Router>
        <Header />
        <Switch>
          <Route exact path="/">
            <Category />
          </Route>
          <Route path="/electronics">
            <Electronics />
          </Route>
          <Route path="/jewelery">
            <Jewelery />
          </Route>
          <Route path="/mens">
            <Mens />
          </Route>
          <Route path="/womens">
            <Womens />
          </Route>
          <Route path="/cart">
            <Cart />
          </Route>
        </Switch>
      </Router>
    </CartProvider>
  );
};

export default Home;
