import { assets } from "../assets/assets";
import { useContext } from "react";
import { ShopContext } from "../context/ShopContext";

const OurPolicy = () => {

  const { darkMode } = useContext(ShopContext);

  
  return (
    <div
      className={`
        flex
        flex-col
        sm:flex-row
        justify-around
        gap-10
        sm:gap-4
        text-center
        py-16
        px-4
        transition-colors
        duration-300
        ${
          darkMode
            ? "bg-zinc-950 text-white"
            : "bg-gray-100 text-gray-800"
        }
      `}
    >


      {/* 1 */}
      <div
        className={`
          p-6
          rounded-md
          transition
          duration-300
          ${
            darkMode
              ? "bg-zinc-900 hover:bg-zinc-800"
              : "bg-white hover:shadow-md"
          }
        `}
      >
        <img
          src={assets.exchange_icon}
          className="w-12 m-auto mb-4"
        />

        <p className="font-semibold">
          Easy Exchange Policy
        </p>

        <p
          className={`mt-1 ${
            darkMode ? "text-zinc-400" : "text-gray-500"
          }`}
        >
          We offer hassle free exchange policy.
        </p>
      </div>


      {/* 2 */}
      <div
        className={`
          p-6
          rounded-md
          transition
          duration-300
          ${
            darkMode
              ? "bg-zinc-900 hover:bg-zinc-800"
              : "bg-white hover:shadow-md"
          }
        `}
      >
        <img
          src={assets.quality_icon}
          className="w-12 m-auto mb-4"
        />

        <p className="font-semibold">
          7 Days Return Policy
        </p>

        <p
          className={`mt-1 ${
            darkMode ? "text-zinc-400" : "text-gray-500"
          }`}
        >
          We provide 7 days free return policy.
        </p>
      </div>


      {/* 3 */}
      <div
        className={`
          p-6
          rounded-md
          transition
          duration-300
          ${
            darkMode
              ? "bg-zinc-900 hover:bg-zinc-800"
              : "bg-white hover:shadow-md"
          }
        `}
      >
        <img
          src={assets.support_img}
          className="w-12 m-auto mb-4"
        />

        <p className="font-semibold">
          Best Customer Support
        </p>

        <p
          className={`mt-1 ${
            darkMode ? "text-zinc-400" : "text-gray-500"
          }`}
        >
          We provide 24/7 customer support.
        </p>
      </div>

    </div>
  );
};

export default OurPolicy;