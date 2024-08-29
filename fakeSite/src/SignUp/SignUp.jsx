import "./signup.css";
import { useEffect, useState, useContext } from "react";
import { UserContext } from "../UserContext";
import { createNewUser, fetchAllUsers, fetchUserByEmail } from "../APICalls";

export default function SignUp() {
  const [userDetails, setUserDetails] = useState({
    firstName: "",
    surname: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [allUsers, setAllUsers] = useState([]);
  const [userExists, setUserExists] = useState(true);
  const [emailValid, setEmailValid] = useState(true);
  const [passwordValid, setPasswordValid] = useState(true);
  const { setSignedInUser } = useContext(UserContext);

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
    for (let i = 0; i < allUsers.length; i++) {
      if (allUsers[i].useremail === inputEmail) {
        console.log("user with that email already exists!");
        setUserExists(true);
        setEmailValid(false);
        break;
      } else {
        setUserExists(false);
        setEmailValid(true);
      }
    }
  };

  const handlePasswordBlur = () => {
    if (userDetails.password !== userDetails.confirmPassword) {
      console.log("passwords do not match");
      setPasswordValid(false);
    } else {
      setPasswordValid(true);
    }
  };

  const handleSubmitClick = (e) => {
    if (userDetails.password !== userDetails.confirmPassword) {
      e.preventDefault();
      console.log("Passwords do not match");
    } else if (
      userDetails.password === userDetails.confirmPassword &&
      userExists === false
    ) {
      e.preventDefault();
      createNewUser(
        userDetails.firstName,
        userDetails.surname,
        userDetails.email,
        userDetails.password
      ).then(() => {
        fetchUserByEmail(userDetails.email).then((result) => {
          console.log(result);
          setSignedInUser(result.data.user[0].user_id);
          localStorage.setItem("auth_token", true);
        });
      });
      console.log(userDetails.email);
    } else {
      e.preventDefault();
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
              className={passwordValid ? "inputfield" : "invalid"}
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
              className={passwordValid ? "inputfield" : "invalid"}
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
      <div class="messages-container" id="center">
        <p id="name-invalid-message" role="alert"></p>
        <p id="name-valid-message" role="alert"></p>
        <p id="email-invalid-message" role="alert"></p>
        <p id="email-valid-message" role="alert"></p>
        <p id="card-invalid-message" role="alert"></p>
        <p id="card-valid-message" role="alert"></p>
      </div>
    </div>
  );
}
