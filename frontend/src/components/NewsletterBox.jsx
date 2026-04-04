import { useContext } from "react";
import { ShopContext } from "../context/ShopContext";

const NewsletterBox = () => {

  const { darkMode } = useContext(ShopContext);

  const onSubmitHandler = (e) => {
    e.preventDefault();
  };

  
  return (
    <div
      className={`text-center py-12 px-4 transition-colors duration-300 ${
        darkMode
          ? "bg-zinc-950 text-white"
          : "bg-gray-100 text-gray-900"
      }`}
    >
      {/* TITLE */}

      <p
        className={`text-2xl font-medium ${
          darkMode ? "text-white" : "text-gray-800"
        }`}
      >
        Subscribe now & get 20% off
      </p>

      <p
        className={`mt-3 text-sm ${
          darkMode ? "text-zinc-400" : "text-gray-500"
        }`}
      >
        Get updates about new products and special offers.
      </p>

      {/* FORM */}

      <form
        onSubmit={onSubmitHandler}
        className={`
          w-full
          sm:w-1/2
          mx-auto
          my-6
          flex
          items-center
          overflow-hidden
          rounded-md
          border
          ${
            darkMode
              ? "border-zinc-700 bg-zinc-900"
              : "border-gray-300 bg-white"
          }
        `}
      >

        <input
          type="email"
          placeholder="Enter your email"
          required
          className={`
            flex-1
            px-3
            py-3
            outline-none
            bg-transparent
            ${
              darkMode
                ? "text-white placeholder-zinc-500"
                : "text-gray-800 placeholder-gray-400"
            }
          `}
        />

        <button
          type="submit"
          className="
            px-5
            py-3
            text-xs
            tracking-widest
            bg-amber-500
            hover:bg-amber-600
            text-white
            transition
          "
        >
          SUBSCRIBE
        </button>


      </form>
    </div>
  );
};

export default NewsletterBox;