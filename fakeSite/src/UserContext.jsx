import { createContext, useState } from "react";

export const UserContext = createContext();

export default function UserProvider({ children }) {
  const [signedInUser, setSignedInUser] = useState({
    user_id: 1,
  });

  const login = (userData) => {
    setSignedInUser(userData);
  };

  return (
    <UserContext.Provider value={{ signedInUser, setSignedInUser, login }}>
      {children}
    </UserContext.Provider>
  );
}
