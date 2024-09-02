import "./profilePage.css";
import { useNavigate } from "react-router-dom";
import { UserContext } from "./UserContext";
import { useContext, useState, useEffect } from "react";
import { fetchUserById } from "./APICalls";

export default function ProfilePage() {
  const navigate = useNavigate();
  const { signedInUser, setSignedInUser } = useContext(UserContext);
  const [userInfo, setUserInfo] = useState({});

  const Logout = () => {
    localStorage.clear();
    setSignedInUser(2);
    navigate("/login");
  };

  useEffect(() => {
    fetchUserById(signedInUser).then((result) => {
      setUserInfo(result.data.user[0]);
    });
  });

  return (
    <div className="profile-page-container">
      <div className="profile-greeting">Hello {userInfo.userfirstname}!</div>
      <br />
      <div className="profile-user-info">
        <div>
          Name: {userInfo.userfirstname} {userInfo.userlastname}
        </div>
        <div>
          Address: {userInfo.useraddress1}
          <br />
          {userInfo.useraddress2}
          <br />
          {userInfo.useraddress3}
          <br />
          {userInfo.userpostcode}
        </div>
      </div>
      <div className="profile-info"></div>
      <button className="update-details-button">UPDATE DETAILS</button>
      <br />
      <button className="profile-logout-button" onClick={Logout}>
        Log Out
      </button>
    </div>
  );
}
