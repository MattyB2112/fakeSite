import "./login.css";
import { useState } from "react";
import { fetchUserById } from "./APICalls";

export default function Login() {
  const [userDetails, setUserDetails] = useState({
    email: "",
    password: "",
  });
  const handleChange = (e) => {
    const { id, value } = e.target;
    setUserDetails((prevUserDetails) => ({
      ...prevUserDetails,
      [id]: value,
    }));
  };
  const handleSubmitClick = (e) => {
    getUser;
    if (userDetails.password === userDetails.confirmPassword) {
      console.log(userDetails.email, userDetails.password);
    } else {
      e.preventDefault();
      console.log("Passwords do not match!");
    }
  };

  return (
    <div className="login-container">
      <form className="Auth-form">
        <div className="login-form-content">
          <h3 className="Auth-form-title">Sign In</h3>
          <p className="forgot-password-text">
            New shopper? Sign up{" "}
            <a href="/signup" className="forgot-password-link">
              here!
            </a>
          </p>
          <div className="form-group-mt-3">
            <input
              type="email"
              id="email"
              className="form-control-mt-1"
              placeholder="Enter your email"
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group-mt-3">
            <input
              type="password"
              id="password"
              className="form-control-mt-1"
              placeholder="Enter password"
              onChange={handleChange}
              required
            />
          </div>
          <div className="d-grid gap-2 mt-3">
            <button
              type="submit"
              className="submit-button"
              onClick={handleSubmitClick}
            >
              Login!
            </button>
          </div>
          <p className="forgot-password-text">
            Forgot{" "}
            <a href="#" className="forgot-password-link">
              password?
            </a>
          </p>
        </div>
      </form>
    </div>
  );
}
