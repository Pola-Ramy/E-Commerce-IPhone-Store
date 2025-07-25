import React from "react";
import { Nav, Container, Navbar as NavbarBS, Button } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import { useShoppingCart } from "../context/ShoppingCartContext";

const Navbar = () => {
  const { openCart, cartQuantity } = useShoppingCart();
  return (
    <>
      <NavbarBS sticky="top" expand="md" className="bg-white shadow-sm mb-3">
        <Container fluid className="d-flex justify-content-between ">
          {/* Logo as bold text with gradient */}
          <NavbarBS.Brand
            as={NavLink}
            to="/"
            className="fw-bold fs-3 navbar-logo-gradient text-decoration-none"
            style={{
              background: "#0d6efd",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
              textFillColor: "transparent",
            }}
          >
            Iphone Store
          </NavbarBS.Brand>
          <NavbarBS.Toggle aria-controls="main-navbar-nav" />
          <NavbarBS.Collapse id="main-navbar-nav">
            <Nav className="ms-auto d-flex align-items-center gap-3">
              <Nav.Link
                to="/"
                as={NavLink}
                className="fw-semibold navbar-link-gradient"
                style={{ fontSize: 22 }}
              >
                Home
              </Nav.Link>
              <Nav.Link
                to="/store"
                as={NavLink}
                className="fw-semibold navbar-link-gradient"
                style={{ fontSize: 22 }}
              >
                Store
              </Nav.Link>
              <Nav.Link
                to="/about"
                as={NavLink}
                className="fw-semibold navbar-link-gradient"
                style={{ fontSize: 22 }}
              >
                About
              </Nav.Link>
            </Nav>
          </NavbarBS.Collapse>
          {cartQuantity > 0 && (
            <Button
              style={{ width: "3rem", height: "3rem", position: "relative" }}
              variant="outline-primary"
              className="rounded-circle ms-3"
              onClick={openCart}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 576 512"
                fill="currentColor"
              >
                <path d="M96 0C107.5 0 117.4 8.19 119.6 19.51L121.1 32H541.8C562.1 32 578.3 52.25 572.6 72.66L518.6 264.7C514.7 278.5 502.1 288 487.8 288H170.7L179.9 336H488C501.3 336 512 346.7 512 360C512 373.3 501.3 384 488 384H159.1C148.5 384 138.6 375.8 136.4 364.5L76.14 48H24C10.75 48 0 37.25 0 24C0 10.75 10.75 0 24 0H96zM128 464C128 437.5 149.5 416 176 416C202.5 416 224 437.5 224 464C224 490.5 202.5 512 176 512C149.5 512 128 490.5 128 464zM512 464C512 490.5 490.5 512 464 512C437.5 512 416 490.5 416 464C416 437.5 437.5 416 464 416C490.5 416 512 437.5 512 464z" />
              </svg>
              <div
                className="rounded-circle bg-danger d-flex justify-content-center align-items-center"
                style={{
                  color: "white",
                  width: "1.5rem",
                  height: "1.5rem",
                  position: "absolute",
                  bottom: 0,
                  right: 0,
                  transform: "translate(25%, 25%)",
                }}
              >
                {cartQuantity}
              </div>
            </Button>
          )}
        </Container>
      </NavbarBS>
      <style>{`
  
        .navbar-link-gradient {
          color: rgba(0,0,0,0.7);
          text-decoration: none !important;
          transition: color 0.2s;
        }
        .navbar-link-gradient:hover, .navbar-link-gradient:focus, .navbar-link-gradient.active {
          color: #0d6efd !important;
          background: none !important;
          -webkit-background-clip: initial;
          -webkit-text-fill-color: initial;
          background-clip: initial;
          text-fill-color: initial;
        }
      `}</style>
    </>
  );
};

export default Navbar;


