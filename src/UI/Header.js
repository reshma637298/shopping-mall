import React, { useEffect, useState } from "react";
import { Navbar, Nav, Button, NavDropdown } from "react-bootstrap";
import fetchCategory from "../Hooks/fetchcategory";
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";

const Header = () => {
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    fetchCategory().then((data) => setCategories(data));
  });

  const history = useHistory();

  const displayCart = () => {
    history.push("/cart");
  };
  return (
    <>
      <Navbar bg="primary" variant="dark">
        <Navbar.Brand href="/">R-SHOPPY</Navbar.Brand>
        <Nav className="mr-auto">
          <NavDropdown title="Categories" id="basic-nav-dropdown">
            {categories.map((c, key) => {
              return (
                <NavDropdown.Item href="#action/3.2" key={key}>
                  {c}
                </NavDropdown.Item>
              );
            })}
          </NavDropdown>
          <Link to="/" className="nav-link"></Link>
          <Link to="/electronics" className="nav-link">
            Electronics
          </Link>
          <Link to="/jewelery" className="nav-link">
            Jewelery
          </Link>
          <Link to="/mens" className="nav-link">
            Mens
          </Link>
          <Link to="/womens" className="nav-link">
            Womens
          </Link>
        </Nav>
        <Button
          variant="primary"
          style={{ position: "absolute", right: "20px" }}
        >
          Cart
        </Button>
      </Navbar>
    </>
  );
};

export default Header;
