import { useContext, useEffect, useState } from "react";
import { ShopContext } from "../context/ShopContext";
import Title from "./Title";
import ProductItem from "./ProductItem";

const LatestCollection = () => {
  const { products, darkMode } = useContext(ShopContext);
  const [latestProduct, setLatestProduct] = useState([]);

  useEffect(() => {
    setLatestProduct(products.slice(0, 10));
  }, [products]);

  return (
    <div
      className={`px-4 pb-4 sm:px-6 transition-colors duration-300 ${darkMode
          ? "bg-zinc-950 text-white"
          : "bg-gray-100 text-gray-900"
        }`}
    >
      {/* HEADER */}

      <div className="text-center py-10 text-3xl">

        <Title text1={"LATEST"} text2={"COLLECTION"} />

        <p
          className={`w-3/4 m-auto text-xs sm:text-sm md:text-base ${darkMode ? "text-zinc-400" : "text-gray-600"
            }`}
        >
          Discover our newest arrivals with modern style and premium quality.
        </p>

      </div>

      {/* GRID */}

      <div className="flex justify-center">

  <div
    className="
    grid
    gap-1
    w-full
    max-w-6xl
    [grid-template-columns:repeat(auto-fit,minmax(180px,1fr))]
    justify-items-center
  "
  >
    {latestProduct.map((item, index) => (

      <div
        key={index}
        className={`
          w-full
          max-w-[200px]
          rounded-md
          overflow-hidden
          border
          transition
          duration-300
          hover:shadow-lg
          ${
            darkMode
              ? "bg-zinc-900 border-zinc-700"
              : "bg-white border-gray-300"
          }
        `}
      >

        <ProductItem
          id={item._id}
          image={item.image}
          name={item.name}
          price={item.price}
        />

      </div>

    ))}
  </div>

</div>

    </div>
  );
};

export default LatestCollection;