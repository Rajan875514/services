import React, { useState } from "react";
import Features from "../Features/Features";
import serviceProviders from "../Features/serviceProvider"; // Assuming the path is correct


const Home = () => {
  const [selectedCategory, setSelectedCategory] = useState("");
  const [selectedLocation, setSelectedLocation] = useState("");

  const categories = ["", ...new Set(serviceProviders.map((provider) => provider.category))];
  const locations = ["", ...new Set(serviceProviders.map((provider) => provider.location))];

  const handleCategoryChange = (e) => {
    setSelectedCategory(e.target.value); // Update category
    setSelectedLocation(""); // Reset location when category changes
  };

  const handleLocationChange = (e) => {
    setSelectedLocation(e.target.value); // Update location
  };

  return (
    <div className="home-container">
      <h1 className="text-center my-4">Find Your Service Provider</h1>

      {/* Category Dropdown */}
      <div className="d-flex justify-content-center mb-4">
        <select
          className="form-select filter-dropdown"
          value={selectedCategory}
          onChange={handleCategoryChange}
        >
          <option value="">Select Category</option>
          {categories.map((category, index) => (
            category && <option key={index} value={category}>{category}</option>
          ))}
        </select>
      </div>

      {/* Location Dropdown */}
      <div className="d-flex justify-content-center mb-5">
        <select
          className="form-select filter-dropdown"
          value={selectedLocation}
          onChange={handleLocationChange}
        >
          <option value="">Select Location</option>
          {locations.map((location, index) => (
            location && <option key={index} value={location}>{location}</option>
          ))}
        </select>
      </div>

      {/* Show Features only when both category and location are selected */}
      {selectedCategory && selectedLocation ? (
        <Features
          selectedCategory={selectedCategory}
          selectedLocation={selectedLocation}
        />
      ) : (
        <p className="text-center mt-50% mp-50px">Please select both a category and a location.</p>
      )}
    </div>
  );
};

export default Home;
