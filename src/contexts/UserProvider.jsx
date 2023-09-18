import React, { createContext, useContext, useState } from "react";

export const UserContext = createContext(null);

export const useUser = () => useContext(UserContext);

const UserProvider = ({ children }) => {
  const [user, setUser] = useState(() => {
    const storedUser = localStorage.getItem("user");
    return storedUser ? JSON.parse(storedUser) : null;
  });

  const setUserAndStore = (user) => {
    setUser(user);
    if(user !== undefined) localStorage.setItem("user", JSON.stringify(user));
  };

  return (
    <UserContext.Provider value={{ user, setUser: setUserAndStore }}>
      {children}
    </UserContext.Provider>
  );
};
export default UserProvider;
