import { authData } from "../context/AuthProvider";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { setUser } = authData();
  const redir = useNavigate();
  function handleSubmit(e) {
    e.preventDefault();
    setUser((user) => ({ email, password, isLoggedIn: true }));
    redir("/profile");
  }
  return (
    <>
      <form
        className="container p-4 xl:w-1/3 mx-auto space-y-4"
        onSubmit={(e) => handleSubmit(e)}
      >
        <h1 className="text-xl font-bold text-center">
          Sign in to your account
        </h1>
        <label
          htmlFor="name"
          className="relative block overflow-hidden border-b border-gray-200 bg-transparent pt-3 focus-within:border-blue-600"
        >
          <input
            type="text"
            id="name"
            placeholder="Email"
            className="peer h-8 w-full border-none bg-transparent p-0 placeholder-transparent focus:border-transparent focus:outline-none focus:ring-0 sm:text-sm cursor-pointer"
            name="email"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />

          <span className="absolute start-0 top-2 -translate-y-1/2 text-xs text-gray-700 transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-2 peer-focus:text-xs">
            Email
          </span>
        </label>
        <label
          htmlFor="pass"
          className="relative block overflow-hidden border-b border-gray-200 bg-transparent pt-3 focus-within:border-blue-600"
        >
          <input
            type="password"
            name="password"
            id="pass"
            placeholder="password"
            className="peer h-8 w-full  border-none bg-transparent p-0 placeholder-transparent focus:border-transparent focus:outline-none focus:ring-0 sm:text-sm cursor-pointer"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />

          <span className="absolute start-0 top-2 -translate-y-1/2 text-xs text-gray-700 transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-2 peer-focus:text-xs">
            Password
          </span>
        </label>
        <button
          type="submit"
          className="py-2 px-4 bg-[#FF8C39] text-white rounded w-full"
        >
          Sign in
        </button>
      </form>
    </>
  );
}

export default Login;
