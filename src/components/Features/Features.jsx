

import React from "react";
import { useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Features.scss";
import serviceProviders from "../Features/serviceProvider"; // Assuming this is where your service provider data is stored

const Features = ({ selectedCategory }) => {
  const navigate = useNavigate();

  // Filter the service providers based on the selected category
  const filteredProviders = selectedCategory
    ? serviceProviders.filter((provider) => provider.category === selectedCategory)
    : serviceProviders;

  return (
    <section className="featured-section">
      <div className="container">
        <h2 className="text-center mb-4">
          {selectedCategory ? `Services for ${selectedCategory}` : "All Service Providers"}
        </h2>
        <div className="row">
          {filteredProviders.length > 0 ? (
            filteredProviders.map((provider) => (
              <div key={provider.id} className="col-lg-3 col-md-4 col-sm-6 col-12 mb-4">
                <div className="card custom-card">
                  <img
                    src={provider.image}
                    alt={provider.name}
                    className="card-img-top"
                  />
                  <div className="card-body">
                    <h5 className="card-title d-flex justify-content-between">
                      {provider.name}
                      <span className="text-muted small">({provider.category})</span>
                    </h5>
                    <p className="d-flex justify-content-between">
                      <span><strong>Location:</strong> {provider.location}</span>
                      <span>⭐ {provider.rating} / 5</span>
                    </p>
                    <button
                      className="btn btn-custom w-100"
                      onClick={() => navigate(`/profile/${provider.id}`)}
                    >
                      View Profile
                    </button>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <p className="text-center">No services available for this category.</p>
          )}
        </div>
      </div>
    </section>
  );
};

export default Features;
