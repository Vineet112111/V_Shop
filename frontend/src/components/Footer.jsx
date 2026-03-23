import { assets } from "../assets/assets";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { ShopContext } from "../context/ShopContext";

const Footer = () => {

  const { darkMode } = useContext(ShopContext);

  return (
    <div
      className={`
        transition-colors duration-300
        ${darkMode
          ? "bg-zinc-950 text-white"
          : "bg-gray-100 text-gray-800"
        }
      `}
    >

      {/* TOP */}

      <div
        className="
          flex
          flex-col
          sm:grid
          grid-cols-[3fr_1fr_1fr]
          gap-12
          px-6
          md:px-16
          py-16
          text-sm
        "
      >

        {/* LEFT */}
        <div>
          <Link to={"/"}>
            <div className="flex flex-col leading-tight">
              <span className="text-2xl font-bold tracking-widest">
                V<span className="text-amber-400">_</span>Shop
              </span>
              <span className="text-[9px] tracking-[0.3em] opacity-60 uppercase">
                Curated Fashion
              </span>
            </div>
          </Link>

          <p
            className={`
              w-full md:w-2/3 pt-3
              ${darkMode
                ? "text-zinc-400"
                : "text-gray-600"
              }
            `}
          >
            Discover the best fashion collections with premium quality
            and modern design. We bring you the latest trends with the
            best prices.
          </p>
        </div>


        {/* COMPANY */}
        <div>
          <p className="text-lg font-semibold mb-5 tracking-wide">
            COMPANY
          </p>

          <div
            className={`flex flex-col gap-2 ${darkMode ? "text-zinc-400" : "text-gray-600"
              }`}
          >
            <Link
              to={"/"}
              className="hover:text-amber-500 cursor-pointer"
            >
              Home
            </Link>

            <Link
              to=""
              className="hover:text-amber-500 cursor-pointer"
            >
              About Us
            </Link>

            <Link
              to=""
              className="hover:text-amber-500 cursor-pointer"
            >
              Delivery
            </Link>

            <Link
              to=""
              className="hover:text-amber-500 cursor-pointer"
            >
              Privacy Policy
            </Link>
          </div>
        </div>


        {/* CONTACT */}
        <div>
          <p className="text-lg font-semibold mb-5 tracking-wide">
            GET IN TOUCH
          </p>

          <div
            className={`flex flex-col gap-2 ${darkMode ? "text-zinc-400" : "text-gray-600"
              }`}
          >
            <a
              href="tel:+916386177635"
              className="hover:text-amber-500 cursor-pointer"
            >
              +91-6386177635
            </a>

            <a
              href="mailto:vineetyadav8429@gmail.com"
              className="hover:text-amber-500 cursor-pointer"
            >
              vineetyadav8429@gmail.com
            </a>

            <Link
              to="/support"
              className="hover:text-amber-500 cursor-pointer"
            >
              Support available 24/7
            </Link>
          </div>
        </div>

      </div>


      {/* BOTTOM */}

      <div
        className={`
          border-t
          text-center
          text-sm
          py-5
          ${darkMode
            ? "border-zinc-800 text-zinc-400"
            : "border-gray-300 text-gray-600"
          }
        `}
      >
        Copyright 2026 © V_Shop.com — All Rights Reserved.
      </div>

    </div>
  );
};

export default Footer;