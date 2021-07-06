import React, { useState } from "react";
import { fetchElectronicsDetails } from "../Hooks/fetchDetails";

export const addToCart = (electronicsDetails) => {
  // const [items, setItems] = useState([]);
  // if (items.length === 0) {
  //   const newItem = [{ cartItem: electronicsDetails, quantity: 1 }];
  //   setItems(newItem);
  // } else {
  //   const itemInCartIndex = items.findIndex(
  //     (x) => x.cartItem.id === electronicsDetails.id
  //   );
  //   if (itemInCartIndex === -1) {
  //     const newItem = [{ cartItem: electronicsDetails, quantity: 1 }];
  //     setItems(newItem);
  //   } else {
  //     const itemCopy = [...items];
  //     itemCopy[itemInCartIndex].quantity += 1;
  //     setItems(itemCopy);
  //   }
  // }
  // return <p>Cart</p>;
};
