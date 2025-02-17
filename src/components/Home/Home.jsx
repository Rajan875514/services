import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Home.scss';
import bgImage from '/src/assets/images/home.jpg';

const Home = () => {
  return (
    <section className="hero-section">
      <div className="overlay"></div> {/* Overlay for better text visibility */}
      <div className="container text-center content">
        <h1>Find the Best Services Near You</h1>
        <p className="subtitle">Search by category and location</p>
        <div className="row justify-content-center g-3">
          <div className="col-12 col-sm-10 col-md-4">
            <select className="form-select">
              <option>Select Category</option>
              <option>Plumbing</option>
              <option>Electrician</option>
              <option>Cleaning</option>
            </select>
          </div>
          <div className="col-12 col-sm-10 col-md-4">
            <input type="text" className="form-control" placeholder="Enter Location" />
          </div>
          <div className="col-12 col-sm-10 col-md-2">
            <button className="btn btn-light w-100 btn-search">Search</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
