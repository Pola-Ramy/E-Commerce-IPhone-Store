import React from "react";
import { Button, Card, CardBody, CardTitle } from "react-bootstrap";
import formatCurrency from './FormatCurrency.js';
import { useShoppingCart } from "../context/ShoppingCartContext.jsx";

const StoreItem = ({ id, imgUrl, price, name }) => {
  const {
    getItemQuantity,
    increaseCartQuantity,
    decreaseCartQuantity,
    removeFromCart,
  } = useShoppingCart();
  const quantity = getItemQuantity(id);
  return (
    <Card className="h-100">
      <div
        style={{
          height: 350,
          background: "#f8f9fa",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Card.Img
          src={imgUrl}
          variant="top"
          style={{
            maxHeight: "100%",
            maxWidth: "100%",
            objectFit: "contain",
            objectPosition: "center",
            background: "#f8f9fa",
            width: "auto",
            height: "300px",
            display: "block",
          }}
        />
      </div>
      <CardBody>
        <CardTitle className="d-flex justify-content-between align-items-baseline">
          <span className="fs-4" >{name}</span>
          <span className="text-muted me-2">{formatCurrency(price)}</span>
        </CardTitle>
        {quantity === 0 ? (
          <Button className="w-100" onClick={() => increaseCartQuantity(id)}>
            Add To Cart
          </Button>
        ) : (
          <div
            className="d-flex align-items-center flex-column"
            style={{ gap: "1rem" }}
          >
            <div
              className="d-flex align-items-center justify-content-center"
              style={{ gap: "1rem" }}
            >
              <Button onClick={() => decreaseCartQuantity(id)}>-</Button>
              <span className="fs-3">{quantity} Item</span>
              <Button onClick={() => increaseCartQuantity(id)}>+</Button>
            </div>
            <Button
              variant="danger"
              size="md"
              onClick={() => removeFromCart(id)}
            >
              Remove
            </Button>
          </div>
        )}
      </CardBody>
    </Card>
  );
};

export default StoreItem;
