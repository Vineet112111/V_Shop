import { NavLink } from "react-router-dom";
import { assets } from "../assets/assets";

const SideBar = () => {
  return (
    <div className="w-[18%] min-h-screen 
      bg-white dark:bg-zinc-900 
      border-r border-gray-200 dark:border-zinc-700
      transition-colors duration-300"
    >
      <div className="flex flex-col gap-4 pt-6 pl-[20%] text-[15px]">

        {/* ADD ITEMS */}
        <NavLink
          to="/add"
          className={({ isActive }) =>
            `flex items-center gap-3 px-3 py-2 rounded-md border border-r-0
            transition-all duration-200
            ${
              isActive
                ? "bg-amber-100 dark:bg-amber-500/20 border-amber-400 text-amber-600 dark:text-amber-400"
                : "border-gray-300 dark:border-zinc-700 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-zinc-800"
            }`
          }
        >
          <img className="w-5 h-5" src={assets.add_icon} alt="" />
          <p className="hidden md:block">Add Items</p>
        </NavLink>

        {/* LIST ITEMS */}
        <NavLink
          to="/list"
          className={({ isActive }) =>
            `flex items-center gap-3 px-3 py-2 rounded-md border border-r-0
            transition-all duration-200
            ${
              isActive
                ? "bg-amber-100 dark:bg-amber-500/20 border-amber-400 text-amber-600 dark:text-amber-400"
                : "border-gray-300 dark:border-zinc-700 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-zinc-800"
            }`
          }
        >
          <img className="w-5 h-5" src={assets.order_icon} alt="" />
          <p className="hidden md:block">List Items</p>
        </NavLink>

        {/* ORDERS */}
        <NavLink
          to="/order"
          className={({ isActive }) =>
            `flex items-center gap-3 px-3 py-2 rounded-md border border-r-0
            transition-all duration-200
            ${
              isActive
                ? "bg-amber-100 dark:bg-amber-500/20 border-amber-400 text-amber-600 dark:text-amber-400"
                : "border-gray-300 dark:border-zinc-700 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-zinc-800"
            }`
          }
        >
          <img className="w-5 h-5" src={assets.order_icon} alt="" />
          <p className="hidden md:block">Orders</p>
        </NavLink>

      </div>
    </div>
  );
};

export default SideBar;