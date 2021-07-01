import React, { useState } from "react";
import { Navbar, Nav, Button, NavDropdown } from "react-bootstrap";
import useCategory from "../Hooks/fetchcategory";
import { Link } from "react-router-dom";

const Header = () => {
  const [categories, setCategories] = useState([]);
  useCategory().then((data) => setCategories(data));
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