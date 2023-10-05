import { createContext, useState, useContext } from "react";
const Context = createContext();
export function authData() {
  return useContext(Context);
}
export function AuthContext({ children }) {
  const [user, setUser] = useState({
    email: "",
    password: "",
    isLoggedIn: false,
  });
  function login(email, password, isLoggedIn) {
    setUser((user) => ({ email, password, isLoggedIn: isLoggedIn }));
  }
  const data = { user, setUser, login };
  return <Context.Provider value={data}>{children}</Context.Provider>;
}
