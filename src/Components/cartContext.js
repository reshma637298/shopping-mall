import React, { useState } from "react";

//const [cartItems, setCartItems] = useState([]);
const user = {
  name: "ammu",
  age: 26,
};
export const cartContext = React.createContext(user);

export default function CartProvider() {
  const context = useState(user);

  return <cartContext.Provider value={context}></cartContext.Provider>;
}
