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

  const data = { user, setUser };
  return <Context.Provider value={data}>{children}</Context.Provider>;
}
