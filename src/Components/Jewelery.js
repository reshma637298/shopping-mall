import { useState } from "react";
import { fetchJewelery } from "../Hooks/fetchItems";
import { Card, Button } from "react-bootstrap";

const Jewelery = () => {
  const [jeweleryItems, setJeweleryItems] = useState([]);
  fetchJewelery().then((data) => setJeweleryItems(data));
  console.log(jeweleryItems);
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

              <Button variant="primary">Next</Button>
            </Card.Body>
          </Card>
        );
      })}
    </>
  );
};

export default Jewelery;
