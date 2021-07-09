import { useContext, useEffect, useState } from "react";
import CartContext from "./cart-context";
import { Button, Modal } from "react-bootstrap";

export const addToCart = (props) => {
  const { cartItems, setCartItems } = useContext(CartContext);
  if (cartItems.length === 0) {
    const newItem = [{ product: props.electronicsDetails, quantity: 1 }];
    setCartItems(newItem);
    console.log("first entry", cartItems);
  } else {
    const itemInCartIndex = cartItems.findIndex(
      (x) => x.product.id === props.electronicsDetails.id
    );
    if (itemInCartIndex === -1) {
      const newItem = [
        ...cartItems,
        { product: props.electronicsDetails, quantity: 1 },
      ];
      setCartItems(newItem);
      console.log("no same entry", cartItems);
    } else {
      const itemCopy = [...cartItems];
      itemCopy[itemInCartIndex].quantity += 1;
      setCartItems(itemCopy);
      console.log("already item exists", cartItems);
    }
  }
  //console.log(cartItems);
};
