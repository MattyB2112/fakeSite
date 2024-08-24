import { createContext, useState, useEffect } from "react";

export const UserContext = createContext({});

const getInitialState = () => {
  const signedInUser = localStorage.getItem("user_id");
  return signedInUser ? JSON.parse(signedInUser) : 2;
};

export default function UserProvider({ children }) {
  const [signedInUser, setSignedInUser] = useState(getInitialState);

  useEffect(() => {
    localStorage.setItem("user_id", JSON.stringify(signedInUser));
  }, [signedInUser]);

  const Login = (userData) => {
    setSignedInUser(userData);
  };

  const Logout = () => {
    setSignedInUser(2);
  };

  return (
    <UserContext.Provider value={{ signedInUser, setSignedInUser, Login }}>
      {children}
    </UserContext.Provider>
  );
}
