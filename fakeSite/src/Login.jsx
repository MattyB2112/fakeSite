import "./login.css";
import { useState, useRef, useContext, useEffect } from "react";
import { fetchUserByEmail } from "./APICalls";
import { UserContext } from "./UserContext";

export default function Login() {
  const [userDetails, setUserDetails] = useState({
    email: "",
    password: "",
  });
  const [retrievedDetails, setRetrievedDetails] = useState({});
  const { setSignedInUser } = useContext(UserContext);
  const [emailFound, setEmailFound] = useState(true);
  const [passwordCorrect, setPasswordCorrect] = useState(true);
  const inputRefEmail = useRef();
  const inputRefPassword = useRef();

  const handleChange = (e) => {
    const { id, value } = e.target;
    setUserDetails((prevUserDetails) => ({
      ...prevUserDetails,
      [id]: value,
    }));
  };

  const handleEmailBlur = () => {
    fetchUserByEmail(userDetails.email).then((result) => {
      if (result.response?.status === 404) {
        setEmailFound(false);
      } else {
        setEmailFound(true);
        setRetrievedDetails(result.data.user);
      }
    });
  };

  const handlePasswordBlur = () => {
    if (emailFound) {
      if (userDetails.password !== retrievedDetails[0].userpassword) {
        setPasswordCorrect(false);
      } else {
        setPasswordCorrect(true);
      }
    }
  };

  const handleSubmit = (event) => {
    if (!emailFound || !passwordCorrect) {
      event.preventDefault();
    } else {
      setSignedInUser(retrievedDetails[0].user_id);
      localStorage.setItem("auth_token", true);
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
              className={emailFound ? "inputfield" : "invalid"}
              placeholder="Enter your email"
              onChange={handleChange}
              onBlur={handleEmailBlur}
              required
            />
          </div>
          <div className="form-group-mt-3">
            <input
              type="password"
              id="password"
              ref={inputRefPassword}
              className={passwordCorrect ? "inputfield" : "invalid"}
              placeholder="Enter password"
              onChange={handleChange}
              onBlur={handlePasswordBlur}
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
      <div className="messages-container" id="center">
        <p className="message">{emailFound ? "" : "Email not found"}</p>
        <p className="message">{passwordCorrect ? "" : "Incorrect password"}</p>
      </div>
    </div>
  );
}
