import React, { createContext, useContext, useState } from "react";

export const UserContext = createContext(null);

export const useUser = () => useContext(UserContext);

<<<<<<< HEAD
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
=======
export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  return (
    <UserContext.Provider value={{ user, setUser }}>
>>>>>>> 559b17f (changes to header styling, userContext and userservice)
      {children}
    </UserContext.Provider>
  );
};
<<<<<<< HEAD
export default UserProvider;
=======
>>>>>>> 559b17f (changes to header styling, userContext and userservice)
