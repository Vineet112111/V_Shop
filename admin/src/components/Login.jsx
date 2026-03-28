import { useState, useContext } from "react";
import axios from "axios";
import { backendUrl } from "../App";
import { toast } from "react-toastify";
import { ThemeContext } from "../context/ThemeContext";

const Login = ({ setToken }) => {
  const { theme } = useContext(ThemeContext);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onSubmitHandler = async (e) => {
    try {
      e.preventDefault();

      const response = await axios.post(backendUrl + "/api/user/admin", {
        email,
        password,
      });

      if (response.data.success) {
        setToken(response.data.token);
      } else {
        toast.error(response.data.message);
      }
    } catch (error) {
      console.log(error);
      toast.error(error.message);
    }
  };

  return (
    <div
      className="min-h-screen flex items-center justify-center w-full
      bg-gray-100 dark:bg-zinc-950
      transition-colors duration-300"
    >
      <div
        className="shadow-lg rounded-xl px-8 py-6 w-[90%] sm:max-w-md
        bg-white dark:bg-zinc-900
        border border-gray-200 dark:border-zinc-700
        transition-colors duration-300"
      >
        <h1 className="text-2xl font-bold mb-6 text-gray-800 dark:text-white text-center">
          Admin Panel Login
        </h1>

        <form onSubmit={onSubmitHandler}>
          {/* EMAIL */}
          <div className="mb-4">
            <p className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              Email Address
            </p>
            <input
              className="rounded-md w-full px-3 py-2 
              border border-gray-300 dark:border-zinc-600
              bg-white dark:bg-zinc-800
              text-gray-800 dark:text-white
              outline-none focus:ring-2 focus:ring-amber-400"
              type="email"
              placeholder="your@email.com"
              required
              onChange={(e) => setEmail(e.target.value)}
              value={email}
            />
          </div>

          {/* PASSWORD */}
          <div className="mb-4">
            <p className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              Password
            </p>
            <input
              className="rounded-md w-full px-3 py-2 
              border border-gray-300 dark:border-zinc-600
              bg-white dark:bg-zinc-800
              text-gray-800 dark:text-white
              outline-none focus:ring-2 focus:ring-amber-400"
              type="password"
              placeholder="Enter your password"
              required
              onChange={(e) => setPassword(e.target.value)}
              value={password}
            />
          </div>

          {/* BUTTON */}
          <button
            className="mt-3 w-full py-2.5 px-4 rounded-md text-sm font-medium
            bg-black text-white
            dark:bg-amber-500 dark:text-zinc-900
            hover:opacity-90 transition-all duration-300"
            type="submit"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;