import { createContext, useState } from "react";

export const UserContext = createContext();

export default function UserProvider({ children }) {
  const [signedInUser, setSignedInUser] = useState({ user_id: 0 });

  const Login = (userData) => {
    setSignedInUser(userData);
  };

  return (
    <UserContext.Provider value={{ signedInUser, setSignedInUser, Login }}>
      {children}
    </UserContext.Provider>
  );
}
