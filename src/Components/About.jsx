import React from "react";
import Footer from "./Footer";

const About = () => {
  return (
    <>
      <div className="bg-light min-vh-100 py-5">
        {/* Hero Section */}
        <div className="container mb-5">
          <div className="row align-items-center">
            <div className="col-md-6 mb-4 mb-md-0">
              <img
                src="/imgs/Iphone16.jpg"
                alt="About Our Store"
                className="img-fluid rounded shadow-lg"
                style={{
                  maxHeight: "340px",
                  objectFit: "cover",
                  background: "#f8f9fa",
                }}
              />
            </div>
            <div className="col-md-6 text-center text-md-start">
              <h1 className="display-5 fw-bold mb-3">About iPhone Store</h1>
              <p className="lead mb-4">
                We are passionate about bringing the latest and greatest iPhones
                to our customers at unbeatable prices. Our mission is to make
                premium technology accessible to everyone, with a focus on
                quality, trust, and customer satisfaction.
              </p>
              <a href="/store" className="btn btn-primary btn-lg shadow">
                Shop iPhones
              </a>
            </div>
          </div>
        </div>

        {/* Company Values & History */}
        <div className="container mb-5">
          <div className="row g-4">
            <div className="col-md-4 text-center">
              <div className="p-4 bg-white rounded shadow-sm h-100">
                <i className="bi bi-shield-check fs-1 text-primary mb-3"></i>
                <h5 className="fw-bold mb-2">Trusted Quality</h5>
                <p className="mb-0">
                  All our iPhones are sourced from verified suppliers and
                  undergo strict quality checks to ensure you get only the best.
                </p>
              </div>
            </div>
            <div className="col-md-4 text-center">
              <div className="p-4 bg-white rounded shadow-sm h-100">
                <i className="bi bi-people fs-1 text-primary mb-3"></i>
                <h5 className="fw-bold mb-2">Customer First</h5>
                <p className="mb-0">
                  Our support team is always ready to help you with any
                  questions or concerns, making your shopping experience smooth
                  and enjoyable.
                </p>
              </div>
            </div>
            <div className="col-md-4 text-center">
              <div className="p-4 bg-white rounded shadow-sm h-100">
                <i className="bi bi-lightning-charge fs-1 text-primary mb-3"></i>
                <h5 className="fw-bold mb-2">Fast & Secure</h5>
                <p className="mb-0">
                  Enjoy fast shipping and secure payment options. Your
                  satisfaction and security are our top priorities.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Brief History */}
        <div className="container mb-5">
          <div className="row justify-content-center">
            <div className="col-lg-8">
              <div className="bg-white rounded shadow-sm p-4 text-center">
                <h4 className="fw-bold mb-3">Our Story</h4>
                <p>
                  Founded in 2020, iPhone Store has quickly become a trusted
                  destination for Apple enthusiasts and new users alike. We
                  started with a simple goal: to make the latest iPhones
                  accessible to everyone, everywhere. Today, we proudly serve
                  thousands of happy customers and continue to grow, thanks to
                  our commitment to quality and service.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="container text-center">
          <div className="p-4 bg-primary text-white rounded shadow-lg">
            <h3 className="fw-bold mb-2" style={{ color: "white" }}>
              Ready to experience the best of Apple?
            </h3>
            <p className="mb-3">
              Browse our store and find your perfect iPhone today!
            </p>
            <a href="/store" className="btn btn-light btn-lg fw-bold">
              Shop Now
            </a>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default About;
