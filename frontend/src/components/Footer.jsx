import { useContext } from "react";
import { Link } from "react-router-dom";
import { ShopContext } from "../context/ShopContext";

const Footer = () => {
  const { darkMode } = useContext(ShopContext);

  return (
    <div
      className={`
        transition-all duration-300
        ${darkMode
          ? "bg-gradient-to-b from-zinc-900 to-black text-white"
          : "bg-gradient-to-b from-gray-100 to-gray-200 text-gray-800"}
      `}
    >
      {/* TOP */}
      <div className="px-6 md:px-16 py-16 grid gap-12 sm:grid-cols-2 lg:grid-cols-4">

        {/* BRAND */}
        <div>
          <Link to="/">
            <h1 className="text-3xl font-bold tracking-widest mb-2">
              V<span className="text-amber-400">_</span>Shop
            </h1>
          </Link>

          <p className={`text-sm leading-relaxed ${darkMode ? "text-zinc-400" : "text-gray-600"
            }`}>
            Elevate your style with curated fashion. Premium quality,
            modern trends, and unbeatable prices.
          </p>

          {/* SOCIAL ICONS */}
          <div className="flex gap-4 mt-5 text-xl">
            <span className="hover:text-amber-400 cursor-pointer">🌐</span>
            <span className="hover:text-amber-400 cursor-pointer">📸</span>
            <span className="hover:text-amber-400 cursor-pointer">🐦</span>
          </div>
        </div>

        {/* COMPANY */}
        <div>
          <p className="text-lg font-semibold mb-4">Company</p>
          <ul className={`space-y-2 ${darkMode ? "text-zinc-400" : "text-gray-600"
            }`}>
            <li><Link to="/" className="hover:text-amber-400">Home</Link></li>
            <li><Link to="/about" className="hover:text-amber-400">About</Link></li>
            <li><Link to="/collection" className="hover:text-amber-400">Shop</Link></li>
            <li><Link to="/career" className="hover:text-amber-400">Careers</Link></li>
          </ul>
        </div>

        {/* SUPPORT */}
        <div>
          <p className="text-lg font-semibold mb-4">Support</p>
          <ul className={`space-y-2 ${darkMode ? "text-zinc-400" : "text-gray-600"
            }`}>

            <li><Link className="hover:text-amber-400 cursor-pointer" to="/help">Help Center</Link></li>
            <li><Link className="hover:text-amber-400 cursor-pointer" to="/shipping">Shipping</Link></li>
            <li><Link className="hover:text-amber-400 cursor-pointer" to="/returns">Returns</Link></li>
            <li><Link className="hover:text-amber-400 cursor-pointer" to="/privacy">Privacy Policy</Link></li>
          </ul>
        </div>

        {/* CONTACT */}
        <div>
          <p className="text-lg font-semibold mb-4">Contact</p>

          <div className={`space-y-2 ${darkMode ? "text-zinc-400" : "text-gray-600"
            }`}>
            <p className="hover:text-amber-400 cursor-pointer">
              📞 +91-6386177635
            </p>
            <p className="hover:text-amber-400 cursor-pointer">
              📧 vineetyadav8429@gmail.com
            </p>
            <p className="hover:text-amber-400 cursor-pointer">
              📍 India
            </p>
          </div>

          {/* NEWSLETTER */}
          <div className="mt-5">
            <input
              type="email"
              placeholder="Subscribe..."
              className={`
                w-full px-3 py-2 text-sm rounded-md outline-none
                ${darkMode
                  ? "bg-zinc-800 text-white border border-zinc-700"
                  : "bg-white border border-gray-300"}
              `}
            />
          </div>
        </div>

      </div>

      {/* BOTTOM */}
      <div className={`
        border-t text-center text-sm py-4
        ${darkMode
          ? "border-zinc-800 text-zinc-400"
          : "border-gray-300 text-gray-600"}
      `}>
        © 2026 V_Shop — Made with ❤️ by Vineet
      </div>
    </div>
  );
};

export default Footer;