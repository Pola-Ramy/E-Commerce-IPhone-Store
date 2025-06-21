import React from "react";

const HeroSection = () => {
  return (
    <>
      <div
        className="home-hero-gradient min-vh-100 py-5 d-flex align-items-center"
        style={{ borderRadius: "50px" }}
      >
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-6 text-center text-md-start mb-4 mb-md-0">
              <h1 className="display-3 fw-bold mb-3 text-white">
                Discover the Latest iPhones
              </h1>
              <p className="lead mb-4 text-white-50">
                Shop the newest models, enjoy exclusive deals, and experience
                Apple innovation at your fingertips.
              </p>
              <a
                href="/store"
                className="btn btn-light btn-lg shadow fw-bold px-4"
              >
                Shop Now
              </a>
            </div>
            <div className="col-md-6 text-center">
              <div
                style={{
                  background: "#f8f9fa",
                  borderRadius: "1rem",
                  display: "inline-block",
                  boxShadow: "0 2px 12px rgba(0,0,0,0.08)",
                }}
              >
                <img
                  src="/imgs/Iphone16.jpg"
                  alt="iPhone Hero"
                  className="img-fluid rounded shadow-lg border border-3 border-white"
                  style={{
                    maxHeight: "340px",
                    objectFit: "cover",
                    background: "#f8f9fa",
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HeroSection;
