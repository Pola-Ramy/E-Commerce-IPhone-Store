import React from "react";
import { Nav, Container, Navbar as NavbarBS, Button } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import { useShoppingCart } from "../context/ShoppingCartContext";

const Navbar = () => {
  const { openCart, cartQuantity } = useShoppingCart();
  return (
    <NavbarBS
      sticky="top"
      className="bg-white shadow-sm py-2"
      style={{ zIndex: 1030 }}
    >
      <Container className="d-flex align-items-center justify-content-between">
        {/* Logo and Brand */}
        <NavLink
          to="/"
          className="navbar-brand d-flex align-items-center gap-2 fw-bold fs-4 text-primary"
          style={{ letterSpacing: "0.03em" }}
        >
          IPhone Store
        </NavLink>
        {/* Navigation Links */}
        <Nav className="flex-grow-1 justify-content-center gap-3">
          <Nav.Link to="/" as={NavLink} className="fs-5 px-3">
            Home
          </Nav.Link>
          <Nav.Link to="/store" as={NavLink} className="fs-5 px-3">
            Store
          </Nav.Link>
          <Nav.Link to="/about" as={NavLink} className="fs-5 px-3">
            About
          </Nav.Link>
        </Nav>
        {/* Cart Button */}
        <Button
          variant="outline-primary"
          className="rounded-circle position-relative d-flex align-items-center justify-content-center"
          style={{ width: "3rem", height: "3rem" }}
          onClick={openCart}
        >
          <i className="bi bi-bag fs-4"></i>
          {cartQuantity > 0 && (
            <span
              className="position-absolute top-0 end-0 translate-middle badge rounded-pill bg-danger shadow"
              style={{
                fontSize: "0.9rem",
                minWidth: 22,
                minHeight: 22,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              {cartQuantity}
            </span>
          )}
        </Button>
      </Container>
    </NavbarBS>
  );
};

export default Navbar;
