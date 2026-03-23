import React, { useContext } from "react";
import { assets } from "../assets/assets";
import Title from "./Title";
import { ShopContext } from "../context/ShopContext";

const Hero = () => {
  const { darkMode, navigate } = useContext(ShopContext);

  return (
    <div
      className={`flex flex-col sm:flex-row items-center justify-between
      px-6 sm:px-10 lg:px-16 py-10 sm:py-14
      transition-all duration-300
      ${
        darkMode
         ? "bg-zinc-950 text-white"
          : "bg-gray-100 text-gray-900"
      }`}
    >
      {/* LEFT */}
      <div className="w-full sm:w-1/2 flex items-center justify-center">

        <div className="max-w-md space-y-5">

          {/* small title */}
          <div className="flex items-center gap-3">

            <span
              className={`h-[2px] w-10 ${
                darkMode ? "bg-amber-400" : "bg-black"
              }`}
            />

            <p className="tracking-widest uppercase opacity-70 text-3xl">
             <Title text1={"New"} text2={"Stock"} />
            </p>

          </div>

          {/* main title */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-semibold leading-tight">

            Latest  
            <span className="text-amber-500"> Arrivals</span>

          </h1>

          {/* description */}
          <p
            className={`text-sm sm:text-base ${
              darkMode ? "text-zinc-400" : "text-gray-600"
            }`}
          >
            Discover the newest fashion trends with our premium collection.
            Designed for comfort, style, and confidence.
          </p>

          {/* button */}
          <button
            onClick={() => navigate("/collection")}
            className="mt-3 px-8 py-3 text-xs tracking-widest uppercase
            bg-amber-500 hover:bg-amber-600
            text-white rounded-md
            transition duration-300 shadow-md"
          >
            Shop Now
          </button>

        </div>

      </div>

      {/* RIGHT IMAGE */}
      <div className="w-full sm:w-1/2 mt-10 sm:mt-0 flex justify-center">

        <img
          src={assets.hero_img}
          alt=""
          className="w-full max-w-md sm:max-w-lg
          rounded-lg
          shadow-xl
          hover:scale-105
          transition duration-500"
        />

      </div>
    </div>
  );
};

export default Hero;