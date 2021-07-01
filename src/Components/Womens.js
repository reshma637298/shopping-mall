import { useState } from "react";
import { fetchWomens } from "../Hooks/fetchItems";
import { Card, Button } from "react-bootstrap";

const Womens = () => {
  const [womensItems, setWomensItems] = useState([]);
  fetchWomens().then((data) => setWomensItems(data));
  console.log(womensItems);
  return (
    <>
      {womensItems.map((eitem, key) => {
        return (
          <Card
            style={{ width: "20rem", display: "inline-block", margin: "3%" }}
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

export default Womens;
