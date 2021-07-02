import { useState } from "react";
import { fetchElectronics } from "../Hooks/fetchItems";
import { Card, Button } from "react-bootstrap";
import { fetchElectronicsDetails } from "../Hooks/fetchDetails";
import ItemsList from "./ItemsList";

const Electronics = () => {
  const [electronicsItems, setElectronicsItems] = useState([]);
  fetchElectronics().then((data) => setElectronicsItems(data));

  return (
    <>
      {electronicsItems.map((eitem, key) => {
        return (
          <Card
            style={
              ({ width: "18rem", display: "inline-block", margin: "3%" },
              (key = { key }))
            }
          >
            <Card.Img
              variant="top"
              src={eitem.image}
              style={{ height: "150px", width: "150px" }}
            />
            <Card.Body>
              <Card.Title>{eitem.title}</Card.Title>
              <Card.Text>Price: ${eitem.price}</Card.Text>
              <ItemsList
                key={eitem.id}
                title={eitem.title}
                price={eitem.price}
                description={eitem.description}
              />
            </Card.Body>
          </Card>
        );
      })}
    </>
  );
};

export default Electronics;
