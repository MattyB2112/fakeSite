import "./profilePage.css";
import { useNavigate } from "react-router-dom";
import { UserContext } from "./UserContext";
import { useContext } from "react";

export default function ProfilePage({ signedInUser }) {
  const navigate = useNavigate();
  const { setSignedInUser } = useContext(UserContext);

  const Logout = () => {
    localStorage.clear();
    navigate("/login");
    setSignedInUser({});
  };
  return (
    <div className="profile-page-container">
      <div className="profile-greeting">
        Hello {signedInUser.userfirstname}!
      </div>
      <br />
      <div className="profile-user-info">
        <div>
          Name: {signedInUser.userfirstname} {signedInUser.userlastname}
        </div>
        <div>
          Address: {signedInUser.useraddress1}
          <br />
          {signedInUser.useraddress2}
          <br />
          {signedInUser.useraddress3}
          <br />
          {signedInUser.userpostcode}
        </div>
      </div>
      <div className="profile-info"></div>
      <button className="profile-logout-button" onClick={Logout}>
        Log Out
      </button>
    </div>
  );
}
