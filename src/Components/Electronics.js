import { useEffect, useState } from "react";
import { fetchElectronics } from "../Hooks/fetchItems";
import { Card, Button } from "react-bootstrap";
import ItemsList from "./ItemsList";
import { fetchElectronicsDetails } from "../Hooks/fetchDetails";

const Electronics = () => {
  const [electronicsItems, setElectronicsItems] = useState([]);
  const [electronicsDetails, setElectronicsDetails] = useState([]);
  const [isOpen, setIsOpen] = useState(false);
  useEffect(() => {
    fetchElectronics().then((data) => setElectronicsItems(data));
  }, []);

  const displayDescription = (id) => {
    fetchElectronicsDetails(id).then((data) => setElectronicsDetails(data));
    setIsOpen(true);
  };
  const hideModal = () => {
    setIsOpen(false);
  };
  return (
    <>
      {electronicsItems.map((eitem, key) => {
        return (
          <>
            <Card
              style={{ width: "18rem", display: "inline-block", margin: "3%" }}
              key={key}
            >
              <Card.Img
                variant="top"
                src={eitem.image}
                style={{ height: "150px", width: "150px" }}
              />
              <Card.Body>
                <Card.Text>Id: {eitem.id}</Card.Text>
                <Card.Title>{eitem.title}</Card.Title>
                <Card.Text>Price: ${eitem.price}</Card.Text>
                <Button
                  variant="primary"
                  onClick={() => displayDescription(eitem.id)}
                >
                  Know More
                </Button>
                <ItemsList
                  electronicsDetails={electronicsDetails}
                  hideModal={hideModal}
                  isOpen={isOpen}
                  setIsOpen={setIsOpen}
                />
              </Card.Body>
            </Card>
          </>
        );
      })}
    </>
  );
};

export default Electronics;
