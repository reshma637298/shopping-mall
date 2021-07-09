import "./App.css";
import Home from "./Components/Home";
import { useContext } from "react";
import { CartContext } from "./Components/cart-context";

function App() {
  const cartContext = useContext(CartContext);
  return (
    <>
      {cartContext.cartItems}
      <Home />
    </>
  );
}

export default App;
