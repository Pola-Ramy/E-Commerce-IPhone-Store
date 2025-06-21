import React from "react";

const FeaturesSection = () => {
  return (
    <>
      <div className="container my-5">
        <div className="row g-4">
          <div className="col-md-4 text-center">
            <div className="p-4 bg-white rounded shadow-sm h-100">
              <i className="bi bi-truck fs-1 text-primary mb-3"></i>
              <h5 className="fw-bold mb-2">Fast Delivery</h5>
              <p className="mb-0">
                Get your iPhone delivered quickly and securely to your doorstep.
              </p>
            </div>
          </div>
          <div className="col-md-4 text-center">
            <div className="p-4 bg-white rounded shadow-sm h-100">
              <i className="bi bi-award fs-1 text-primary mb-3"></i>
              <h5 className="fw-bold mb-2">Genuine Products</h5>
              <p className="mb-0">
                We guarantee 100% authentic Apple products with full warranty.
              </p>
            </div>
          </div>
          <div className="col-md-4 text-center">
            <div className="p-4 bg-white rounded shadow-sm h-100">
              <i className="bi bi-headset fs-1 text-primary mb-3"></i>
              <h5 className="fw-bold mb-2">24/7 Support</h5>
              <p className="mb-0">
                Our team is here to help you anytime, anywhere.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FeaturesSection;
