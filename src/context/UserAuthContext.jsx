import React, { createContext, useState } from "react";

export const Context = createContext();
const UserAuthContext = ({ children }) => {
  const [user, setUser] = useState(null);

  const refreshUser = () => {
    const lsUser = localStorage.getItem("user")
    if (lsUser) {
      setUser(JSON.parse(lsUser))
    }
  }

  const handleAuthLogin = (username, password) => {
    let sysPass = 'password'
    let sysUsername = 'admin'
    if (password === sysPass && username === sysUsername) {
      const matchingUser = {
        firstName: 'Anna',
        lastName: 'Lartey'
      }
      setUser(matchingUser)
      localStorage.setItem("user", JSON.stringify(matchingUser));
      return { success: "successful" };
    } else {
      return { error: "Wrong credentials please try again" };
    }
  };

  const handleAuthRegister = (username, password) => {
    localStorage.setItem(username, JSON.stringify(password));
  };

  const handleAuthLogout = () => {
    localStorage.removeItem("user");
    setUser(null)
    return true
  };

  return (
    <Context.Provider
      value={{
        user,
        handleAuthLogin,
        handleAuthRegister,
        handleAuthLogout,
        refreshUser,
      }}
    >
      {children}
    </Context.Provider>
  );
};

export default UserAuthContext;