import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaUser, FaEnvelope, FaLock, FaEye, FaEyeSlash } from "react-icons/fa";
import axios from "axios";
import "./Signup.scss";

const Signup = () => {
  const navigate = useNavigate();
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [confirmPasswordVisible, setConfirmPasswordVisible] = useState(false);
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (formData.password !== formData.confirmPassword) {
      alert("Passwords do not match!");
      return;
    }

    try {
      const res = await axios.post("http://localhost:5001/api/signup", {
        username: formData.username,
        email: formData.email,
        password: formData.password,
      });

      // Token store & navigate to dashboard
      localStorage.setItem("token", res.data.token);
      alert("Signup successful! Redirecting to dashboard...");
      navigate("/dashboard"); // Redirect to dashboard after signup
    } catch (error) {
      console.error(error);
      alert(error.response?.data?.message || "Signup failed!");
    }
  };

  return (
    <div className="signup-container">
      <div className="signup-box">
        <h2>Sign Up</h2>
        <form onSubmit={handleSubmit}>
          <div className="input-group">
            <FaUser className="icon" />
            <input type="text" name="username" placeholder="Username" required value={formData.username} onChange={handleChange} />
          </div>

          <div className="input-group">
            <FaEnvelope className="icon" />
            <input type="email" name="email" placeholder="Email" required value={formData.email} onChange={handleChange} />
          </div>

          <div className="input-group">
            <FaLock className="icon" />
            <input type={passwordVisible ? "text" : "password"} name="password" placeholder="Password" required value={formData.password} onChange={handleChange} />
            <span className="toggle-password" onClick={() => setPasswordVisible(!passwordVisible)}>
              {passwordVisible ? <FaEyeSlash /> : <FaEye />}
            </span>
          </div>

          <div className="input-group">
            <FaLock className="icon" />
            <input type={confirmPasswordVisible ? "text" : "password"} name="confirmPassword" placeholder="Confirm Password" required value={formData.confirmPassword} onChange={handleChange} />
            <span className="toggle-password" onClick={() => setConfirmPasswordVisible(!confirmPasswordVisible)}>
              {confirmPasswordVisible ? <FaEyeSlash /> : <FaEye />}
            </span>
          </div>

          <button type="submit" className="signup-btn">Sign Up</button>

          <div className="signup-links">
            <p>Already have an account? <Link to="/login">Login</Link></p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Signup;
