import React from "react";
import Carousel from "react-bootstrap/Carousel";
import items from "../Data/Items.json";
import Footer from "./Footer";
import HeroSection from "./HeroSection";
import FeaturesSection from "./FeaturesSection";

const Home = () => {
  return (
    <>
      {/* Hero Section with Gradient */}
      <HeroSection />

      {/* Features Section */}
      <FeaturesSection />

      {/* Products Carousel Section */}
      <div className="container my-5">
        <h2 className="text-center fw-bold mb-4">Our Products</h2>
        <div className="mx-auto" style={{ maxWidth: "500px" }}>
          <Carousel
            controls={false}
            indicators={false}
            interval={2000}
            pause={false}
            className="shadow rounded overflow-hidden"
          >
            {items.map((item) => (
              <Carousel.Item key={item.id}>
                <div
                  style={{
                    background: "#f8f9fa",
                    borderRadius: "1rem",
                    boxShadow: "0 2px 12px rgba(0,0,0,0.08)",
                    padding: 16,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    height: 300,
                  }}
                >
                  <img
                    src={item.imgUrl}
                    alt={item.name}
                    style={{
                      maxHeight: 260,
                      maxWidth: "100%",
                      objectFit: "contain",
                      borderRadius: "0.75rem",
                      background: "#f8f9fa",
                      boxShadow: "none",
                      display: "block",
                      margin: "0 auto",
                    }}
                  />
                </div>
                <Carousel.Caption className="bg-dark bg-opacity-50 rounded p-2">
                  <h5 className="mb-0 text-white">{item.name}</h5>
                </Carousel.Caption>
              </Carousel.Item>
            ))}
          </Carousel>
        </div>
      </div>
      <Footer />
      <style>{`
        .home-hero-gradient {
          background: linear-gradient(120deg, #0d6efd 0%, #343a40 100%);
        }
      `}</style>
    </>
  );
};

export default Home;
