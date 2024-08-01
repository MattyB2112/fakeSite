import "./signup.css";
import { useEffect, useState } from "react";
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
  const [userExists, setUserExists] = useState(false);
  const [emailValid, setEmailValid] = useState(true);

  useEffect(() => {
    fetchAllUsers().then((result) => {
      setAllUsers(result.data.user);
    });
  });

  const handleChange = (e) => {
    const { id, value } = e.target;
    setUserDetails((prevUserDetails) => ({
      ...prevUserDetails,
      [id]: value,
    }));
  };

  const handleEmailBlur = () => {
    const inputEmail = userDetails.email;
    allUsers.map((user, i) => {
      if (user.useremail === inputEmail) {
        console.log("user with that email already exists!");
        setUserExists(true);
        setEmailValid(false);
      }
    });
  };

  const handlePasswordBlur = () => {
    if (userDetails.password !== userDetails.confirmPassword) {
      console.log("passwords do not match");
    }
  };

  const handleSubmitClick = (e) => {
    if (userDetails.password !== userDetails.confirmPassword) {
      console.log("Passwords do not match!");
    } else {
      fetchAllUsers().then((result) => {
        setAllUsers(result.data.user);
        console.log(allUsers);
      });
    }
    if (userExists === false) {
      createNewUser(
        userDetails.firstName,
        userDetails.surname,
        userDetails.email,
        userDetails.password
      );
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
              className="inputfield"
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
              className="inputfield"
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
              className={emailValid ? "inputfield" : "invalid"}
              placeholder="Enter your email"
              value={userDetails.userName}
              onChange={handleChange}
              required
              onBlur={handleEmailBlur}
            />
          </div>
          <div className="form-group-mt-3">
            <input
              type="password"
              id="password"
              className="inputfield"
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
              className="inputfield"
              placeholder="Confirm your password"
              value={userDetails.userName}
              onChange={handleChange}
              onBlur={handlePasswordBlur}
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
