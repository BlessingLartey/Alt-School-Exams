import { useContext } from "react";
import { Context } from "../context/UserAuthContext";

const useAuth = () => {
  const {
    user,
    handleAuthLogin,
    handleAuthRegister,
    handleAuthLogout,
    refreshUser,
  } = useContext(Context);

  return {
    user,
    handleAuthLogin,
    handleAuthRegister,
    handleAuthLogout,
    refreshUser,
  };
};

export default useAuth;