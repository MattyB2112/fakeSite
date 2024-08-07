import "./login.css";
import { useState, useRef, useContext } from "react";
import { fetchUserByEmail } from "./APICalls";
import { redirect } from "react-router-dom";
import { UserContext } from "./UserContext";

export default function Login() {
  const [userDetails, setUserDetails] = useState({
    email: "",
    password: "",
  });
  const [retrievedDetails, setRetrievedDetails] = useState({});
  const { signedInUser, setSignedInUser } = useContext(UserContext);
  const inputRefEmail = useRef();
  const inputRefPassword = useRef();

  const handleChange = (e) => {
    const { id, value } = e.target;
    setUserDetails((prevUserDetails) => ({
      ...prevUserDetails,
      [id]: value,
    }));
  };
  const handleSubmit = (event) => {
    fetchUserByEmail(inputRefEmail.current.value).then((result) => {
      setRetrievedDetails(result.data.user[0]);
    });
    if (userDetails.password === retrievedDetails.userpassword) {
      localStorage.setItem("auth_token", true);
      setSignedInUser(retrievedDetails);
    } else {
      event.preventDefault();
      console.log("Incorrect password");
    }
  };

  return (
    <div className="login-container">
      <form onSubmit={handleSubmit} className="Auth-form">
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
              ref={inputRefEmail}
              className="inputfield"
              placeholder="Enter your email"
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group-mt-3">
            <input
              type="password"
              id="password"
              ref={inputRefPassword}
              className="inputfield"
              placeholder="Enter password"
              onChange={handleChange}
              required
            />
          </div>
          <div className="d-grid gap-2 mt-3">
            <button type="submit" className="submit-button">
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
