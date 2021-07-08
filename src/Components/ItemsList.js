import { fetchElectronicsDetails } from "../Hooks/fetchDetails";
import { Button, Modal, Alert, Row, Col } from "react-bootstrap";
import { useEffect, useState } from "react";

const ItemsList = (props) => {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = () => {
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
