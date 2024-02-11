import { useState, useEffect } from "react";
import { createContext } from "react";

const AuthContext = createContext({});

function setWithExpiry(key, value) {
  const now = new Date();
  const item = {
    value: value,
    expiry: now.getTime() + 24 * 60 * 60 * 1000, // 24 horas a partir de agora
  };
  window.localStorage.setItem(key, JSON.stringify(item));
}

function getWithExpiry(key) {
  const itemStr = window.localStorage.getItem(key);

  if (!itemStr) {
    return null;
  }

  const item = JSON.parse(itemStr);
  const now = new Date();

  if (now.getTime() > item.expiry) {
    window.localStorage.removeItem(key);
    return null;
  }
  return item.value;
}

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(() => {
    return getWithExpiry("user");
  });

  useEffect(() => {
    if (user) {
      setWithExpiry("user", user);
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
