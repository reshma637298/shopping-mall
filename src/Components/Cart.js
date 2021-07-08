import React, { useContext } from "react";
import { cartContext } from "./cartContext";
import { fetchElectronicsDetails } from "../Hooks/fetchDetails";
const Cart = () => {
  const context = useContext(cartContext);
  return (
    <>
      <p>Pet Name: {context?.name}</p>
      <p>Age: {context?.age}</p>
    </>
  );
};

export default Cart;
