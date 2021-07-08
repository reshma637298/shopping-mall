import React, { useContext } from "react";
import { cartContext } from "./cartContext";

export default function Trail() {
  const context = useContext(cartContext);
  return (
    <>
      <p>Pet Name: {context?.name}</p>
      <p>Age: {context?.age}</p>
    </>
  );
}
