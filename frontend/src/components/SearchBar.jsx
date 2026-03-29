import { useContext, useEffect, useState } from "react";
import { ShopContext } from "../context/ShopContext";
import { assets } from "../assets/assets";
import { useLocation } from "react-router-dom";

const SearchBar = () => {
  const { search, setSearch, showSearch, setShowSearch } = useContext(ShopContext);

  const [visible, setVisible] = useState(false);
  const location = useLocation();

  useEffect(() => {
    if (location.pathname.includes("collection")) {
      setVisible(true);
    } else {
      setVisible(false);
    }
  }, [location]);

  return showSearch && visible ? (
    <div className="w-full border-t border-b 
      bg-gray-50 dark:bg-zinc-900 
      border-gray-200 dark:border-zinc-700 
      transition-all duration-300">

      <div className="flex items-center justify-center gap-3 py-5 px-4">

        {/* SEARCH BOX */}
        <div className="flex items-center w-full sm:w-1/2 
          bg-white dark:bg-zinc-800
          border border-gray-300 dark:border-zinc-600
          rounded-full px-5 py-2 shadow-sm
          focus-within:ring-2 focus-within:ring-amber-400 transition">

          <input
            type="text"
            placeholder="Search for products..."
            className="flex-1 outline-none bg-transparent 
              text-sm text-gray-700 dark:text-gray-200 
              placeholder-gray-400"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />

          <img
            src={assets.search_icon}
            className="w-4 opacity-60 dark:invert"
            alt=""
          />
        </div>

        {/* CLOSE BUTTON */}
        <button
          onClick={() => setShowSearch(false)}
          className="p-2 rounded-full 
            hover:bg-gray-200 dark:hover:bg-zinc-700 
            transition"
        >
          <img
            src={assets.cross_icon}
            className="w-3 opacity-70 dark:invert"
            alt=""
          />
        </button>

      </div>
    </div>
  ) : null;
};

export default SearchBar;