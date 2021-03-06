import React, { useEffect, useState } from "react";
import { Card, Button } from "react-bootstrap";
import Electronics from "./Electronics";
import fetchCategory from "../Hooks/fetchcategory";
import { useHistory } from "react-router-dom";
import CategoryImage1 from "../Assets/category1.jpg";
import CategoryImage2 from "../Assets/category2.jpg";
import CategoryImage3 from "../Assets/category3.jpg";
import CategoryImage4 from "../Assets/category4.jpg";

const Category = () => {
  const [categories, setCategories] = useState([]);
  const history = useHistory();
  useEffect(() => {
    fetchCategory().then((data) => setCategories(data));
  }, []);

  const displayElectronics = () => {
    history.push("/electronics");
  };

  const displayJewelery = () => {
    history.push("/jewelery");
  };
  return (
    <>
      <div style={{ marginTop: "6%" }}>
        <Card style={{ width: "18rem", display: "inline-block", margin: "3%" }}>
          <Card.Img variant="top" src={CategoryImage1} />
          <Card.Body>
            <Card.Title>{categories[0]}</Card.Title>
            <Card.Text>
              Every electronic items with high performance and top quality.
            </Card.Text>

            <Button variant="primary" onClick={displayElectronics}>
              Next
            </Button>
          </Card.Body>
        </Card>

        <Card style={{ width: "18rem", display: "inline-block", margin: "3%" }}>
          <Card.Img variant="top" src={CategoryImage2} />
          <Card.Body>
            <Card.Title>{categories[1]}</Card.Title>
            <Card.Text>ISO Certified, BIS, Hallmark, 916 Jewellery</Card.Text>
            <Button variant="primary" onClick={displayJewelery}>
              Next
            </Button>
          </Card.Body>
        </Card>

        <Card style={{ width: "18rem", display: "inline-block", margin: "3%" }}>
          <Card.Img variant="top" src={CategoryImage3} />
          <Card.Body>
            <Card.Title>{categories[2]}</Card.Title>
            <Card.Text>Mens Casuals wear at reasonable rate.</Card.Text>
            <Button variant="primary">Next</Button>
          </Card.Body>
        </Card>

        <Card
          style={{
            width: "18rem",
            display: "inline-block",
            margin: "3%",
          }}
        >
          <Card.Img variant="top" src={CategoryImage4} />
          <Card.Body>
            <Card.Title>{categories[3]}</Card.Title>
            <Card.Text>
              Top trending womens fashion at discountable rates.
            </Card.Text>
            <Button variant="primary">Next</Button>
          </Card.Body>
        </Card>
      </div>
    </>
  );
};

export default Category;
