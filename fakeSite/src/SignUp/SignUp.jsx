import "./signup.css";
import { useState } from "react";
import { createNewUser, fetchAllUsers } from "../APICalls";

export default function SignUp() {
  const [userDetails, setUserDetails] = useState({
    firstName: "",
    surname: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [allUsers, setAllUsers] = useState([]);

  const handleChange = (e) => {
    const { id, value } = e.target;
    setUserDetails((prevUserDetails) => ({
      ...prevUserDetails,
      [id]: value,
    }));
  };

  const handleSubmitClick = (e) => {
    e.preventDefault();
    if (userDetails.password !== userDetails.confirmPassword) {
      console.log("Passwords do not match!");
    } else if (userDetails.password === userDetails.confirmPassword) {
      fetchAllUsers().then((result) => {
        setAllUsers(result.data.user);
      });
      allUsers.map((user, i) => {
        if (user.useremail === userDetails.email) {
          console.log("user with that email already exists!");
        } else {
          createNewUser(
            userDetails.firstName,
            userDetails.surname,
            userDetails.email,
            userDetails.password
          );
        }
      });
    } else {
      e.preventDefault();
      console.log("Passwords do not match!");
    }
  };
  return (
    <div className="signup-container">
      <form className="signup-form">
        <div className="signup-form-content">
          <h3 className="signup-form-title">Sign Up</h3>
          <div className="form-group-mt-3">
            <input
              type="text"
              id="firstName"
              className="form-control-mt-1"
              placeholder="Enter your first name"
              value={userDetails.userName}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group-mt-3">
            <input
              type="text"
              id="surname"
              className="form-control-mt-1"
              placeholder="Enter your surname"
              value={userDetails.userName}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group-mt-3">
            <input
              type="email"
              id="email"
              className="form-control-mt-1"
              placeholder="Enter your email"
              value={userDetails.userName}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group-mt-3">
            <input
              type="password"
              id="password"
              className="form-control-mt-1"
              placeholder="Enter your password"
              value={userDetails.userName}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group-mt-3">
            <input
              type="password"
              id="confirmPassword"
              className="form-control-mt-1"
              placeholder="Confirm your password"
              value={userDetails.userName}
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
              Join!
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}
