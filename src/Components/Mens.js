import { useState } from "react";
import { fetchMens } from "../Hooks/fetchItems";
import { Card, Button } from "react-bootstrap";

const Mens = () => {
  const [mensItems, setMensItems] = useState([]);
  fetchMens().then((data) => setMensItems(data));
  console.log(mensItems);
  return (
    <>
      {mensItems.map((eitem, key) => {
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
              <Button variant="primary">Next</Button>
            </Card.Body>
          </Card>
        );
      })}
    </>
  );
};

export default Mens;
