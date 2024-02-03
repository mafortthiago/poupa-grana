import { useState, useEffect } from "react";
import { createContext } from "react";

const AuthContext = createContext({});

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(() => {
    const localUser = window.localStorage.getItem("user");
    return localUser ? JSON.parse(localUser) : null;
  });

  useEffect(() => {
    if (user) {
      window.localStorage.setItem("user", JSON.stringify(user));
    } else {
      window.localStorage.removeItem("user");
    }
  }, [user]);

  return (
    <AuthContext.Provider value={[user, setUser]}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
