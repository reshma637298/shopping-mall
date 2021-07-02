import { fetchElectronicsDetails } from "../Hooks/fetchDetails";
import { Button, Modal } from "react-bootstrap";
import { useState } from "react";
import Cart from "./Cart";

const ItemsList = (props) => {
  const [electronicsDetails, setElectronicsDetails] = useState([]);
  const [isOpen, setIsOpen] = useState(false);

  fetchElectronicsDetails(props.key).then((data) =>
    setElectronicsDetails(data)
  );
  console.log(electronicsDetails);
  const displayDescription = () => {
    setIsOpen(true);
  };

  const hideModal = () => {
    setIsOpen(false);
  };

  return (
    <>
      <Button variant="primary" onClick={() => displayDescription()}>
        Know More
      </Button>
      <Modal
        show={isOpen}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        animation={false}
        centered
        onHide={hideModal}
      >
        <Modal.Header>
          <Modal.Title id="contained-modal-title-vcenter">
            {props.title}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>
            <b>Features And Details:-</b> {props.description}
          </p>
          <h3>Price:- ${props.price}</h3>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={hideModal} variant="danger">
            Close
          </Button>
          <Button variant="success">Add to Cart</Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default ItemsList;
