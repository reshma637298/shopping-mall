import { useState, useEffect } from "react";
import { fetchJewelery } from "../Hooks/fetchItems";
import { Card, Button } from "react-bootstrap";
import ItemsList from "./ItemsList";
import { fetchDetails } from "../Hooks/fetchDetails";

const Jewelery = () => {
  const [jeweleryItems, setJeweleryItems] = useState([]);

  const [jeweleryDetails, setJeweleryDetails] = useState([]);
  const [isOpen, setIsOpen] = useState(false);
  useEffect(() => {
    fetchJewelery().then((data) => setJeweleryItems(data));
  }, []);

  const displayDescription = (id) => {
    fetchDetails(id).then((data) => setJeweleryDetails(data));
    setIsOpen(true);
  };
  const hideModal = () => {
    setIsOpen(false);
  };

  return (
    <>
      {jeweleryItems.map((eitem, key) => {
        return (
          <Card
            style={{ width: "18rem", display: "inline-block", margin: "3%" }}
          >
            <Card.Img
              variant="top"
              src={eitem.image}
              style={{ height: "150px", width: "150px" }}
            />
            <Card.Body>
              <Card.Title>{eitem.title}</Card.Title>
              <Card.Text>Price: ${eitem.price}</Card.Text>
              <Button
                variant="primary"
                onClick={() => displayDescription(eitem.id)}
              >
                Know More
              </Button>
              <ItemsList
                electronicsDetails={jeweleryDetails}
                hideModal={hideModal}
                isOpen={isOpen}
                setIsOpen={setIsOpen}
              />
            </Card.Body>
          </Card>
        );
      })}
    </>
  );
};

export default Jewelery;
