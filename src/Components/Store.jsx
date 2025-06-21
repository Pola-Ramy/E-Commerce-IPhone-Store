import React from "react";
import { Col, Row } from "react-bootstrap";
import storeItem from "../Data/Items.json";
import StoreItem from "./StoreItem";
import { useShoppingCart } from "../context/ShoppingCartContext";

const Store = () => {
  const { activeCategory, filterByCategory } = useShoppingCart();

  const filteredItems = storeItem.filter((item) => {
    if (activeCategory === "all") return true;
    // Handle the trailing space in the category key from JSON
    return item["category "]?.toLowerCase() === activeCategory;
  });

  return (
    <>
      <h1>Store</h1>
      {/* Category Filter Section */}
      <div className="d-flex justify-content-center gap-4 mb-4">
        <button
          className={`category-circle-btn d-flex flex-column align-items-center justify-content-center ${
            activeCategory === "all" ? "active" : ""
          }`}
          onClick={() => filterByCategory("all")}
        >
          <span
            className={`${
              activeCategory === "all" ? "bg-primary" : "bg-secondary"
            } text-white d-flex align-items-center justify-content-center rounded-circle mb-2`}
            style={{
              width: 60,
              height: 60,
              fontSize: 32,
              transition: "background-color 0.2s",
            }}
          >
            <i className="bi bi-grid-fill"></i>
          </span>
          <span className="fw-semibold">All</span>
        </button>
        <button
          className={`category-circle-btn d-flex flex-column align-items-center justify-content-center ${
            activeCategory === "iphone" ? "active" : ""
          }`}
          onClick={() => filterByCategory("iphone")}
        >
          <span
            className={`${
              activeCategory === "iphone" ? "bg-primary" : "bg-secondary"
            } text-white d-flex align-items-center justify-content-center rounded-circle mb-2`}
            style={{
              width: 60,
              height: 60,
              fontSize: 32,
              transition: "background-color 0.2s",
            }}
          >
            <i className="bi bi-phone"></i>
          </span>
          <span className="fw-semibold">iPhone</span>
        </button>
        <button
          className={`category-circle-btn d-flex flex-column align-items-center justify-content-center ${
            activeCategory === "ipad" ? "active" : ""
          }`}
          onClick={() => filterByCategory("ipad")}
        >
          <span
            className={`${
              activeCategory === "ipad" ? "bg-primary" : "bg-secondary"
            } text-white d-flex align-items-center justify-content-center rounded-circle mb-2`}
            style={{
              width: 60,
              height: 60,
              fontSize: 32,
              transition: "background-color 0.2s",
            }}
          >
            <i className="bi bi-tablet"></i>
          </span>
          <span className="fw-semibold">iPad</span>
        </button>
        <button
          className={`category-circle-btn d-flex flex-column align-items-center justify-content-center ${
            activeCategory === "airpods" ? "active" : ""
          }`}
          onClick={() => filterByCategory("airpods")}
        >
          <span
            className={`${
              activeCategory === "airpods" ? "bg-primary" : "bg-secondary"
            } text-white d-flex align-items-center justify-content-center rounded-circle mb-2`}
            style={{
              width: 60,
              height: 60,
              fontSize: 32,
              transition: "background-color 0.2s",
            }}
          >
            <i className="bi bi-earbuds"></i>
          </span>
          <span className="fw-semibold">AirPods</span>
        </button>
      </div>
      <Row md={2} xs={1} lg={3} style={{ rowGap: "2rem" }}>
        {filteredItems.map((item) => (
          <Col key={item.id}>
            <StoreItem {...item} />
          </Col>
        ))}
      </Row>
      <style>{`
        .category-circle-btn {
          background: none;
          border: none;
          outline: none;
          cursor: pointer;
          transition: transform 0.15s, box-shadow 0.15s, opacity 0.2s;
          opacity: 0.7;
        }
        .category-circle-btn.active {
          opacity: 1;
          transform: translateY(-4px) scale(1.05);
          box-shadow: 0 4px 16px rgba(13,110,253,0.10);
        }
        .category-circle-btn:not(.active):hover {
          opacity: 1;
          transform: translateY(-2px);
        }
      `}</style>
    </>
  );
};
export default Store;
