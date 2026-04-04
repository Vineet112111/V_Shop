import { useContext, useEffect, useState } from "react";
import { ShopContext } from "../context/ShopContext";
import Title from "./Title";
import ProductItem from "./ProductItem";

const BestSeller = () => {
  const { products ,darkMode } = useContext(ShopContext);
  const [bestSeller, setBestSeller] = useState([]);

  useEffect(() => {
    const bestProducts = products.filter((item) => item.bestSeller);
    setBestSeller(bestProducts.slice(0, 5));
  }, [products]);

  return (
    <div className={` px-4 pb-4 sm:px-6 transition-colors duration-300 ${darkMode
          ? "bg-zinc-950 text-white"
          : "bg-gray-100 text-gray-900"
        }`}>

      {/* HEADER */}
      <div className="text-center py-10 text-3xl">
        <Title text1={"BEST"} text2={"SELLERS"} />

        <p className="w-3/4 m-auto mt-3 text-xs sm:text-sm md:text-base text-zinc-500 dark:text-zinc-400 transition-colors duration-300">
          Our most-loved pieces — trusted by thousands and flying off the
          shelves. Grab yours before they&apos;re gone.
        </p>

        {/* Decorative divider */}
        <div className="flex items-center justify-center gap-3 mt-6">
          <span className="h-px w-16 bg-zinc-200 dark:bg-zinc-700 transition-colors duration-300" />
          <span className="w-2 h-2 rounded-full bg-amber-500 dark:bg-amber-400 transition-colors duration-300" />
          <span className="h-px w-16 bg-zinc-200 dark:bg-zinc-700 transition-colors duration-300" />
        </div>
      </div>

      {/* PRODUCT GRID */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-8">
        {bestSeller.map((item, i) => (
          <div
            key={i}
            className="relative group rounded-sm overflow-hidden
              bg-zinc-50 dark:bg-zinc-900
              border border-zinc-200 dark:border-zinc-700
              hover:border-amber-500 dark:hover:border-amber-400
              hover:shadow-md dark:hover:shadow-black
              transition-all duration-300"
          >
            {/* Badge */}
            <span className="absolute top-2 left-2 z-10
              bg-amber-500 dark:bg-amber-400
              text-white dark:text-zinc-950
              text-[9px] font-bold tracking-widest uppercase
              px-2 py-0.5 rounded-sm shadow">
              🔥 Top Pick
            </span>

            <ProductItem
              id={item._id}
              image={item.image}
              name={item.name}
              price={item.price}
            />
          </div>
        ))}
      </div>

      {/* VIEW ALL BUTTON */}
      <div className="flex justify-center mt-10">
        <button className="px-8 py-2.5 text-xs tracking-widest uppercase font-medium rounded-sm transition-all duration-300
          border border-zinc-300 dark:border-zinc-600
          text-zinc-700 dark:text-zinc-300
          hover:bg-amber-500 hover:border-amber-500 hover:text-white
          dark:hover:bg-amber-400 dark:hover:border-amber-400 dark:hover:text-zinc-950">
          View All
        </button>
      </div>
    </div>
  );
};


export default BestSeller;