import { fetchElectronicsDetails } from "../Hooks/fetchDetails";
import { Button, Modal } from "react-bootstrap";
import { useEffect, useState } from "react";

const ItemsList = (props) => {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = () => {
    const newCart = [
      ...cartItems,
      { product: props.electronicsDetails, quantity: 1 },
    ];
    setCartItems(newCart);
    console.log("cartitem is ", cartItems);
    console.log(cartItems.length);
    //else {
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
  };

  return (
    <>
      <Modal
        show={props.isOpen}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        animation={false}
        centered
        onHide={props.hideModal}
      >
        <Modal.Header>
          <Modal.Title id="contained-modal-title-vcenter">
            <p>Item id: {props.electronicsDetails.id}</p>
            {props.electronicsDetails.title}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>
            <b>Features And Details:-</b> {props.electronicsDetails.description}
          </p>
          <h3>Price:- ${props.electronicsDetails.price}</h3>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={props.hideModal} variant="danger">
            Close
          </Button>
          <Button variant="success" onClick={() => addToCart()}>
            Add to Cart
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default ItemsList;
