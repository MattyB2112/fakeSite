import "./profilePage.css";
import { useNavigate } from "react-router-dom";
import { UserContext } from "./UserContext";
import { useContext, useState, useEffect, useRef } from "react";
import { UpdateUser, fetchUserById } from "./APICalls";
import { Modal } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import LoadingAnimation from "./LoadingAnimation";

export default function ProfilePage() {
  const navigate = useNavigate();
  const { signedInUser, setSignedInUser } = useContext(UserContext);
  const [isLoading, setIsLoading] = useState(true);
  const [detailsChanged, setDetailsChanged] = useState(false);
  const [userInfo, setUserInfo] = useState({});
  const [show, setShow] = useState(false);
  const firstName = useRef();
  const lastName = useRef();
  const address1 = useRef();
  const address2 = useRef();
  const address3 = useRef();
  const postcode = useRef();
  const [userDetails, setUserDetails] = useState({
    userFirstName: "",
    userLastName: "",
    userAddress1: "",
    userAddress2: "",
    userAddress3: "",
    userPostcode: "",
  });

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const handleFocus = (event) => {
    event.target.select();
  };

  const handleChange = (e) => {
    const { id, value } = e.target;
    setUserDetails((prevUserDetails) => ({
      ...prevUserDetails,
      [id]: value,
    }));
  };

  const handleUpdate = () => {
    setShow(false);
    const newUserObj = {
      newFirstName: firstName.current.value,
      newSurname: lastName.current.value,
      newAddress1: address1.current.value,
      newAddress2: address2.current.value,
      newAddress3: address3.current.value,
      newPostcode: postcode.current.value,
      user_id: userInfo.user_id,
    };
    UpdateUser(newUserObj).then(() => {
      setDetailsChanged(true);
    });
  };

  const Logout = () => {
    localStorage.clear();
    setSignedInUser(2);
    navigate("/login");
  };

  useEffect(() => {
    fetchUserById(signedInUser).then((result) => {
      setUserInfo(result.data.user[0]);
      setIsLoading(false);
      setDetailsChanged(false);
    });
  }, [detailsChanged]);
  if (isLoading) {
    return <LoadingAnimation />;
  } else
    return (
      <div className="profile-page-container">
        <Modal
          style={{
            fontFamily: "Advent Pro",
            fontSize: 25,
          }}
          animation={true}
          show={show}
          onHide={handleClose}
          size={"sm"}
          centered={true}
        >
          <Modal.Header closeButton>
            <Modal.Title>Update Details</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <form>
              First Name
              <input
                type="text"
                ref={firstName}
                className="change-details-input"
                defaultValue={userInfo.userfirstname}
                onFocus={handleFocus}
                onChange={handleChange}
              ></input>
              Surname
              <input
                type="text"
                ref={lastName}
                className="change-details-input"
                defaultValue={userInfo.userlastname}
                onFocus={handleFocus}
                onChange={handleChange}
              ></input>
              Address 1
              <input
                type="text"
                ref={address1}
                className="change-details-input"
                defaultValue={userInfo.useraddress1}
                onFocus={handleFocus}
                onChange={handleChange}
              ></input>
              Address 2
              <input
                type="text"
                ref={address2}
                className="change-details-input"
                defaultValue={userInfo.useraddress2}
                onFocus={handleFocus}
                onChange={handleChange}
              ></input>
              Address 3
              <input
                type="text"
                ref={address3}
                className="change-details-input"
                defaultValue={userInfo.useraddress3}
                onFocus={handleFocus}
                onChange={handleChange}
              ></input>
              Address 4
              <input
                type="text"
                ref={postcode}
                className="change-details-input"
                defaultValue={userInfo.userpostcode}
                onFocus={handleFocus}
                onChange={handleChange}
              ></input>
            </form>
          </Modal.Body>
          <Modal.Footer>
            <button variant="secondary" onClick={handleClose}>
              Close
            </button>
            <button variant="primary" onClick={handleUpdate}>
              Update
            </button>
          </Modal.Footer>
        </Modal>
        <div className="profile-greeting">Hello {userInfo.userfirstname}!</div>
        <br />
        <div className="profile-user-info">
          <div>
            {userInfo.userfirstname} {userInfo.userlastname}
          </div>
          <div>
            {userInfo.useraddress1}
            <br />
            {userInfo.useraddress2}
            <br />
            {userInfo.useraddress3}
            <br />
            {userInfo.userpostcode}
          </div>
        </div>
        <div className="profile-info"></div>
        <button className="update-details-button" onClick={handleShow}>
          Update Details
        </button>
        <br />
        <button className="profile-logout-button" onClick={Logout}>
          Log Out
        </button>
      </div>
    );
}
