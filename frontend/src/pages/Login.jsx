import { useContext, useEffect, useState } from "react";
import { ShopContext } from "../context/ShopContext";
import axios from "axios";
import { toast } from "react-toastify";

const Login = () => {
  const { token, setToken, navigate, backendUrl, darkMode } =
    useContext(ShopContext);

  const [currentState, setCurrentState] = useState("Login");

  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");

  const onSubmitHandler = async (e) => {
    e.preventDefault();
    

    try {
      if (currentState === "Sign Up") {
        const res = await axios.post(backendUrl + "/api/user/register", {
          name,
          email,
          password,
        });

        if (res.data.success) {
          setToken(res.data.token);
          localStorage.setItem("token", res.data.token);
        } else {
          toast.error(res.data.message);
        }
      } else {
        const res = await axios.post(backendUrl + "/api/user/login", {
          email,
          password,
        });

        if (res.data.success) {
          setToken(res.data.token);
          localStorage.setItem("token", res.data.token);
        } else {
          toast.error(res.data.message);
        }
      }
    } catch (error) {
      toast.error(error.message);
    }
  };

  useEffect(() => {
    if (token) navigate("/");
  }, [token]);

  return (
    <div
      className={`min-h-screen flex items-center justify-center px-4 transition
        ${
          darkMode
            ? "bg-zinc-950 text-white"
            : "bg-gray-100 text-gray-900"
        }`}
    >
      {/* CARD */}
      <form
        onSubmit={onSubmitHandler}
        className={`w-full max-w-md p-8 rounded-md border space-y-5 transition
          ${
            darkMode
              ? "bg-zinc-900 border-zinc-700"
              : "bg-white border-gray-200"
          }`}
      >
        {/* TITLE */}
        <div className="text-center">
          <h2 className="text-2xl font-semibold tracking-wide">
            {currentState}
          </h2>
          <div className="w-10 h-[2px] bg-amber-500 mx-auto mt-2"></div>
        </div>

        {/* NAME */}
        {currentState === "Sign Up" && (
          <input
            type="text"
            placeholder="Full Name"
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
            className={`input-style ${darkMode && "dark-input"}`}
          />
        )}

        {/* EMAIL */}
        <input
          type="email"
          placeholder="Email Address"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className={`input-style ${darkMode && "dark-input"}`}
        />

        {/* PASSWORD */}
        <input
          type="password"
          placeholder="Password"
          required
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className={`input-style ${darkMode && "dark-input"}`}
        />

        {/* LINKS */}
        <div className="flex justify-between text-sm">
          <p className="cursor-pointer text-zinc-400 hover:text-amber-500 transition">
            Forgot password?
          </p>

          {currentState === "Login" ? (
            <p
              onClick={() => setCurrentState("Sign Up")}
              className="cursor-pointer text-amber-500 hover:underline"
            >
              Create account
            </p>
          ) : (
            <p
              onClick={() => setCurrentState("Login")}
              className="cursor-pointer text-amber-500 hover:underline"
            >
              Login here
            </p>
          )}
        </div>

        {/* BUTTON */}
        <button
          className="w-full py-3 rounded-md bg-amber-500 hover:bg-amber-600 text-white transition font-medium"
        >
          {currentState === "Login" ? "Sign In" : "Create Account"}
        </button>
      </form>
    </div>
  );
};

export default Login;