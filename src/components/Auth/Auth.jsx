import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faEnvelope, faLock } from "@fortawesome/free-solid-svg-icons";
import Logo from "../../assets/images/logo.jpg"; 
import "./Auth.scss";

const Auth = ({ isSignup }) => {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(isSignup ? "Signing up..." : "Logging in...", formData);
  };

  return (
    <div className="auth-page">
      <div className="auth-container">
        {/* Logo */}
        <img src={Logo} alt="Logo" className="auth-logo" />

        <h2>{isSignup ? "Sign Up" : "Login"}</h2>
        <form onSubmit={handleSubmit}>
          {isSignup && (
            <div className="form-group">
              <FontAwesomeIcon icon={faUser} className="icon" />
              <input
                type="text"
                name="username"
                placeholder="Username"
                value={formData.username}
                onChange={handleChange}
                required
              />
            </div>
          )}
          <div className="form-group">
            <FontAwesomeIcon icon={faEnvelope} className="icon" />
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <FontAwesomeIcon icon={faLock} className="icon" />
            <input
              type="password"
              name="password"
              placeholder="Password"
              value={formData.password}
              onChange={handleChange}
              required
            />
          </div>
          {isSignup && (
            <div className="form-group">
              <FontAwesomeIcon icon={faLock} className="icon" />
              <input
                type="password"
                name="confirmPassword"
                placeholder="Confirm Password"
                value={formData.confirmPassword}
                onChange={handleChange}
                required
              />
            </div>
          )}
          <button type="submit" className="auth-btn">
            {isSignup ? "Sign Up" : "Login"}
          </button>
        </form>
        <div className="auth-link">
          {isSignup ? (
            <p>
              Already have an account? <Link to="/login">Login</Link>
            </p>
          ) : (
            <p>
              Don't have an account? <Link to="/signup">Sign Up</Link>
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Auth;
