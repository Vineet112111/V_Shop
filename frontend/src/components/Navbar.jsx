import { Link, NavLink } from "react-router-dom";
import { assets } from "../assets/assets";
import { useContext, useState } from "react";
import { ShopContext } from "../context/ShopContext";

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);
  const [mobileMenu, setMobileMenu] = useState(false);

  const {
    setShowSearch,
    getCartCount,
    navigate,
    token,
    setToken,
    setCartItems,
    darkMode,
    setDarkMode,
  }=useContext(ShopContext);

  const logout = () => {
    navigate("/login");
    localStorage.removeItem("token");
    setToken("");
    setCartItems({});
  };

  const links = [
    { path: "/", name: "Home" },
    { path: "/collection", name: "Collection" },
    { path: "/about", name: "About" },
    { path: "/contact", name: "Contact" },
  ];

  return (
    <div
      className={`flex items-center justify-between py-4 px-6 font-medium sticky top-0 z-50 transition-all duration-300 backdrop-blur-md ${darkMode
        ? "bg-zinc-950/90 text-white border-b border-zinc-800"
        : "bg-white/90 text-black border-b border-gray-300"
        }`}
    >
      {/* LOGO */}
      <Link to="/">
        <div className="flex flex-col leading-tight">
          <span className="text-2xl font-bold tracking-widest">
            V<span className="text-amber-400">_</span>Shop
          </span>
          <span className="text-[9px] tracking-[0.3em] opacity-60 uppercase">
            Curated Fashion
          </span>
        </div>
      </Link>

      {/* DESKTOP LINKS */}
      <ul className="hidden sm:flex gap-8 text-xs tracking-widest uppercase">
        {links.map((link, i) => (
          <NavLink
            key={i}
            to={link.path}
            className={({ isActive }) =>
              `transition duration-200 ${isActive
                ? "text-amber-400"
                : darkMode
                  ? "text-zinc-400 hover:text-white"
                  : "text-gray-600 hover:text-black"
              }`
            }
          >
            {link.name}
          </NavLink>
        ))}
      </ul>

      {/* RIGHT ICONS */}
      <div className="flex items-center gap-5">
        {/* Theme Toggle */}
        <button
          onClick={() => setDarkMode(!darkMode)}
          className={`px-2 py-1 rounded text-xs border ${darkMode
            ? "border-zinc-600 hover:bg-zinc-800"
            : "border-gray-400 hover:bg-gray-200"
            }`}
        >
          {darkMode ? "Light" : "Dark"}
        </button>

        {/* Search */}
        <img
          src={assets.search_icon}
          className={`w-5 cursor-pointer ${darkMode ? "invert" : ""}`}
          onClick={() => setShowSearch(true)}
        />

        {/* Profile */}
        <div className="relative">
          <img
            src={assets.profile_icon}
            className={`w-5 cursor-pointer ${darkMode ? "invert" : ""}`}
            onClick={() => {
              if (!token) navigate("/login");
              else setShowMenu(!showMenu);
            }}
          />

          {token && showMenu && (
            <div className="absolute right-0 mt-3 z-50">
              <div
                className={`w-44 p-3 rounded-lg shadow-2xl backdrop-blur-md text-xs uppercase tracking-widest ${darkMode
                  ? "bg-zinc-900/90 border border-zinc-700 text-zinc-300"
                  : "bg-white/90 border border-gray-300 text-gray-700"
                  }`}
              >
                <p className="py-1 cursor-pointer hover:text-amber-400">
                  My Profile
                </p>
                <p
                  onClick={() => {
                    navigate("/orders");
                    setShowMenu(false);
                  }}
                  className="py-1 cursor-pointer hover:text-amber-400"
                >
                  Orders
                </p>
                <hr className="my-2 opacity-30" />
                <p
                  onClick={() => {
                    logout();
                    setShowMenu(false);
                  }}
                  className="py-1 cursor-pointer text-red-400"
                >
                  Logout
                </p>
              </div>
            </div>
          )}
        </div>

        {/* Cart */}
        <Link to="/cart" className="relative">
          <img src={assets.cart_icon} className={`w-5 ${darkMode ? "invert" : ""}`} />
          <p className="absolute -right-2 -bottom-2 w-4 h-4 flex items-center justify-center text-[8px] rounded-full bg-amber-400 text-black">
            {getCartCount()}
          </p>
        </Link>

        {/* MOBILE MENU ICON */}
        <img
          src={assets.menu_icon}
          className={`w-5 sm:hidden cursor-pointer ${darkMode ? "invert" : ""}`}
          onClick={() => setMobileMenu(true)}
        />
      </div>

      {/* MOBILE MENU PANEL */}
      <div
        className={`fixed inset-0 z-50 transition-all duration-300 ${mobileMenu ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}`}
        onClick={() => setMobileMenu(false)}
      >
        {/* Backdrop */}
        <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" />

        {/* Drawer */}
        <div
          className={`relative w-64 max-w-[80%] h-screen p-6 bg-white dark:bg-zinc-900 shadow-2xl flex flex-col gap-6 transform transition-transform duration-300
      ${mobileMenu ? "translate-x-0" : "translate-x-full"}
    `}
          onClick={(e) => e.stopPropagation()} // prevent closing when clicking inside
          style={{ zIndex: 51 }}
        >
          {/* Header */}
          <div className="flex justify-between items-center border-b border-zinc-200 dark:border-zinc-700 pb-2">
            <span className="text-lg font-bold">Menu</span>
            <button
              onClick={() => setMobileMenu(false)}
              className="text-2xl font-bold hover:text-amber-400 transition-colors duration-200"
            >
              ×
            </button>
          </div>

          {/* Links */}
          <nav className="flex-1 flex flex-col gap-4 mt-4 overflow-y-auto">
            {links.map((link, i) => (
              <NavLink
                key={i}
                to={link.path}
                onClick={() => setMobileMenu(false)}
                className={({ isActive }) =>
                  `uppercase text-sm font-medium py-2 px-2 rounded-md transition-all duration-200 ${isActive
                    ? "bg-amber-100 dark:bg-amber-900 text-amber-500"
                    : darkMode
                      ? "text-zinc-300 hover:bg-zinc-800 hover:text-white"
                      : "text-gray-700 hover:bg-gray-200 hover:text-black"
                  }`
                }
              >
                {link.name}
              </NavLink>
            ))}
          </nav>

          {/* Optional Login/Signup */}
          {!token && (
            <div className="mt-auto flex flex-col gap-3">
              <Link
                to="/login"
                onClick={() => setMobileMenu(false)}
                className="text-center py-2 px-4 bg-amber-500 text-white rounded-md uppercase text-sm font-semibold hover:bg-amber-600 transition-all duration-200"
              >
                Login
              </Link>
              <Link
                to="/signup"
                onClick={() => setMobileMenu(false)}
                className="text-center py-2 px-4 border border-amber-500 text-amber-500 rounded-md uppercase text-sm font-semibold hover:bg-amber-500 hover:text-white transition-all duration-200"
              >
                Sign Up
              </Link>
            </div>
          )}
        </div>
      </div>


    </div>
  );
};

export default Navbar;
