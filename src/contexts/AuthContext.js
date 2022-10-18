import { createContext, useState } from "react";

export const AuthContext = createContext();

const AuthContextProvider = ({ children }) => {
  const [isAuthenticated, setAuthenyicated] = useState(false);

  const toggleAuth = () => {
    setAuthenyicated(!isAuthenticated);
  };

  const authContextData = {
    isAuthenticated,
    toggleAuth,
  };

  return (
    <AuthContext.Provider value={authContextData}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContextProvider;
