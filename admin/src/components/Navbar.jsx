import { Link } from "react-router-dom";
import { assets } from "../assets/assets";
import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";

const Navbar = ({ setToken }) => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <div className="w-full flex items-center justify-between 
      px-[4%] py-3 
      bg-white dark:bg-zinc-900 
      border-b border-gray-200 dark:border-zinc-700 
      transition-colors duration-300">

      {/* LOGO */}
      <Link to="/add">
        <div className="flex flex-col leading-tight">
          <span className="text-2xl font-bold tracking-widest text-gray-900 dark:text-white">
            V<span className="text-amber-400">_</span>Shop
          </span>
          <span className="text-[9px] tracking-[0.3em] text-gray-500 dark:text-gray-400 uppercase">
            Admin Panel
          </span>
        </div>
      </Link>

      {/* RIGHT SIDE */}
      <div className="flex items-center gap-4">

        {/* THEME TOGGLE */}
        <button
          onClick={toggleTheme}
          className="px-3 py-1.5 rounded-full text-xs sm:text-sm
            bg-gray-200 dark:bg-zinc-800
            text-gray-800 dark:text-white
            hover:scale-105 transition"
        >
          {theme === "light" ? "🌙 Dark" : "☀️ Light"}
        </button>

        {/* LOGOUT */}
        <button
          onClick={() => setToken("")}
          className="bg-gray-800 dark:bg-amber-500 
            text-white dark:text-zinc-900
            px-4 py-1.5 sm:px-6 sm:py-2 
            rounded-full text-xs sm:text-sm 
            hover:opacity-90 transition"
        >
          Logout
        </button>

      </div>
    </div>
  );
};

export default Navbar;