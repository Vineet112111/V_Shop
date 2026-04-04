import { useContext } from "react";
import { ShopContext } from "../context/ShopContext";

const Title = ({ text1, text2 }) => {
  const { darkMode } = useContext(ShopContext);

  
  return (
    <div className="inline-flex gap-2 items-center mb-2">
      
      <p
        className={`${
          darkMode ? "text-zinc-400" : "text-gray-500"
        }`}
      >
        {text1}{" "}
        <span
          className={`font-medium ${
            darkMode ? "text-white" : "text-gray-700"
          }`}
        >
          {text2}
        </span>
      </p>


      <p
        className={`w-8 sm:w-12 h-[1px] sm:h-[2px] ${
          darkMode ? "bg-zinc-600" : "bg-gray-700"
        }`}
      ></p>

    </div>
  );
};

export default Title;