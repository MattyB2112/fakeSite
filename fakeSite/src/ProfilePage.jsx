import "./profilePage.css";
import { useNavigate } from "react-router-dom";
import { UserContext } from "./UserContext";
import { useContext } from "react";

export default function ProfilePage(signedInUser) {
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
        Hello {signedInUser.signedInUser.userfirstname}!
      </div>
      <div className="profile-info"></div>
      <button className="profile-logout-button" onClick={Logout}>
        Log Out
      </button>
    </div>
  );
}
