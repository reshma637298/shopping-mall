import React from "react";
import { useContext, useEffect, useState } from "react";
import { CartContext } from "./cart-context";
import { Card, Button } from "react-bootstrap";

const Cart = () => {
  // const { cartItems, setCartItems } = useContext(CartContext);
  // console.log(cartItems);
  // const value = useContext(CartContext);
  // console.log(value);
  const { cartItems, setCartItems } = useContext(CartContext);
  console.log(cartItems);

  const deleteFromCart = (id) => {
    const cartItemsCopy = [...cartItems];
    if (cartItemsCopy[id].quantity !== 1) {
      cartItemsCopy[id].quantity -= 1;
      setCartItems(cartItemsCopy);
    } else {
      cartItemsCopy.splice(id, 1);
      setCartItems(cartItemsCopy);
    }
  };

  return (
    <>
      <h1 style={{ alignItems: "center" }}>Your Cart</h1>
      {cartItems.map((item, key) => {
        return (
          <>
            <Card
              style={{
                width: "19rem",
                display: "inline-block",
                margin: "3%",
              }}
              key={key}
            >
              <Card.Img
                variant="top"
                src={item.product.image}
                style={{ height: "100px", width: "150px" }}
              />
              <Card.Body>
                <Card.Text>Model ID: {item.product.id}</Card.Text>
                <Card.Title style={{ height: "150px" }}>
                  {item.product.title}
                </Card.Title>
                <Card.Text>
                  <b>Quantity: {item.quantity}</b>
                  <p> Price: ${item.product.price}</p>
                </Card.Text>
                <Button variant="success" style={{ marginRight: "10px" }}>
                  BUY
                </Button>
                <Button variant="danger" onClick={() => deleteFromCart(key)}>
                  REMOVE
                </Button>
              </Card.Body>
            </Card>
          </>
        );
      })}
    </>
  );
};

export default Cart;

// export const addToCart = (props) => {
//   if (cartItems.length === 0) {
//     const newItem = [{ product: props.electronicsDetails, quantity: 1 }];
//     setCartItems(newItem);
//     console.log("first entry", cartItems);
//   } else {
//     const itemInCartIndex = cartItems.findIndex(
//       (x) => x.product.id === props.electronicsDetails.id
//     );
//     if (itemInCartIndex === -1) {
//       const newItem = [
//         ...cartItems,
//         { product: props.electronicsDetails, quantity: 1 },
//       ];
//       setCartItems(newItem);
//       console.log("no same entry", cartItems);
//     } else {
//       const itemCopy = [...cartItems];
//       itemCopy[itemInCartIndex].quantity += 1;
//       setCartItems(itemCopy);
//       console.log("already item exists", cartItems);
//     }
//   }
// };
