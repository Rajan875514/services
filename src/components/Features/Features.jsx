import React from "react";
import { useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Features.scss";
import serviceProviders from "../Features/serviceProvider";

const Features = () => {
  const navigate = useNavigate();

  return (
    <section className="featured-section">
      <div className="container">
        <h2 className="text-center mb-4">Featured Service Providers</h2>
        <div className="row justify-content-center">
          {serviceProviders.map((provider) => (
            <div key={provider.id} className="col-lg-3 col-md-6 col-sm-12 mb-4">
              <div className="card custom-card">
                <img src={provider.image} alt={provider.name} className="card-img-top" />
                <div className="card-body">
                  <h5 className="card-title d-flex justify-content-between">
                    {provider.name} 
                    <span className="text-muted small">({provider.category})</span>
                  </h5>
                  <p className="d-flex justify-content-between">
                    <span><strong>Location:</strong> {provider.location}</span>
                    <span>⭐ {provider.rating} / 5</span>
                  </p>
                  <button className="btn btn-custom w-100" onClick={() => navigate(`/profile/${provider.id}`)}>
                    View Profile
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
