import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaUser, FaLock, FaEye, FaEyeSlash } from "react-icons/fa";
import "./Login.scss";

const Login = () => {
  const [passwordVisible, setPasswordVisible] = useState(false);

  return (
    <div className="login-container">
      <div className="login-box">
        <h2>Login</h2>
        <form>
          {/* Username Field */}
          <div className="input-group">
            <FaUser className="icon" />
            <input type="text" placeholder="Username" required />
          </div>

          {/* Password Field */}
          <div className="input-group">
            <FaLock className="icon" />
            <input
              type={passwordVisible ? "text" : "password"}
              placeholder="Password"
              required
            />
            <span
              className="toggle-password"
              onClick={() => setPasswordVisible(!passwordVisible)}
            >
              {passwordVisible ? <FaEyeSlash /> : <FaEye />}
            </span>
          </div>

          {/* Login Button */}
          <button type="submit" className="login-btn">Login</button>

          {/* Forgot & Signup Links */}
          <div className="login-links">
            <Link to="/forgot-password">Forgot Password?</Link>
            <Link to="/signup">Sign Up</Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
