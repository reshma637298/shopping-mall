import { useState } from "react";
import { fetchElectronics } from "../Hooks/fetchItems";
import { Card, Button } from "react-bootstrap";

const Electronics = () => {
  const [electronicsItems, setElectronicsItems] = useState([]);
  fetchElectronics().then((data) => setElectronicsItems(data));
  console.log(electronicsItems);
  return (
    <>
      {electronicsItems.map((eitem, key) => {
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

              <a href={Electronics}>
                <Button variant="primary">Next</Button>
              </a>
            </Card.Body>
          </Card>
        );
      })}
    </>
  );
};

export default Electronics;
