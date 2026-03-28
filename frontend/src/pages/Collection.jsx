import { useContext, useEffect, useState } from "react";
import { ShopContext } from "../context/ShopContext";
import { assets } from "../assets/assets";
import Title from "../components/Title";
import ProductItem from "../components/ProductItem";

const Collection = () => {
  const { products, search, showSearch, darkMode } = useContext(ShopContext);

  const [showFilter, setShowFilter] = useState(false);
  const [filterProducts, setFilterProducts] = useState([]);
  const [category, setCategory] = useState([]);
  const [subCategory, setSubCategory] = useState([]);
  const [sortType, setSortType] = useState("relevant");

  const toggleCategory = (e) => {
    if (category.includes(e.target.value)) {
      setCategory((p) => p.filter((item) => item !== e.target.value));
    } else {
      setCategory((p) => [...p, e.target.value]);
    }
  };

  const toggleSubCategory = (e) => {
    if (subCategory.includes(e.target.value)) {
      setSubCategory((p) => p.filter((item) => item !== e.target.value));
    } else {
      setSubCategory((p) => [...p, e.target.value]);
    }
  };

  const applyFilter = () => {
    let productsCopy = products.slice();

    if (showSearch && search) {
      productsCopy = productsCopy.filter((item) =>
        item.name.toLowerCase().includes(search.toLowerCase())
      );
    }

    if (category.length > 0) {
      productsCopy = productsCopy.filter((item) =>
        category.includes(item.category)
      );
    }

    if (subCategory.length > 0) {
      productsCopy = productsCopy.filter((item) =>
        subCategory.includes(item.subCategory)
      );
    }

    setFilterProducts(productsCopy);
  };

  const sortProduct = () => {
    let fpCopy = filterProducts.slice();

    switch (sortType) {
      case "low-high":
        setFilterProducts(fpCopy.sort((a, b) => a.price - b.price));
        break;

      case "high-low":
        setFilterProducts(fpCopy.sort((a, b) => b.price - a.price));
        break;

      default:
        applyFilter();
        break;
    }
  };

  useEffect(() => {
    applyFilter();
  }, [category, subCategory, search, showSearch, products]);

  useEffect(() => {
    sortProduct();
  }, [sortType]);

  return (
    <div
      className={`flex flex-col sm:flex-row gap-6 sm:gap-10 pt-10 px-4 sm:px-6 border-t transition-colors duration-300 ${
        darkMode
          ? "bg-zinc-950 text-white border-zinc-800"
          : "bg-gray-100 text-gray-900 border-gray-300"
      }`}
    >

      {/* FILTER OPTIONS */}
      <div className="min-w-60">

        <p
          onClick={() => setShowFilter(!showFilter)}
          className="my-2 text-lg font-medium flex items-center cursor-pointer gap-2"
        >
          FILTERS
          <img
            src={assets.dropdown_icon}
            className={`h-3 sm:hidden ${showFilter ? "rotate-90" : ""} ${
              darkMode ? "invert" : ""
            }`}
          />
        </p>

        {/* CATEGORY */}
        <div
          className={`rounded-md p-4 mt-4 border  ${
            showFilter ? "" : "hidden"
          } sm:block ${
            darkMode
              ? "bg-zinc-900 border-zinc-700"
              : "bg-white border-gray-300"
          }`}
        >
          <p className="mb-3 text-sm font-semibold">CATEGORIES</p>

          <div className="flex flex-col gap-2 text-sm">
            {["Men", "Women", "Kids"].map((item) => (
              <label key={item} className="flex gap-2 cursor-pointer">
                <input
                  type="checkbox"
                  value={item}
                  onChange={toggleCategory}
                />
                {item}
              </label>
            ))}
          </div>
        </div>

        {/* SUBCATEGORY */}
        <div
          className={`rounded-md p-4 mt-5 border ${
            showFilter ? "" : "hidden"
          } sm:block ${
            darkMode
              ? "bg-zinc-900 border-zinc-700"
              : "bg-white border-gray-300"
          }`}
        >
          <p className="mb-3 text-sm font-semibold">TYPE</p>

          <div className="flex flex-col gap-2 text-sm">
            {["Topwear", "Bottomwear", "Winterwear"].map((item) => (
              <label key={item} className="flex gap-2 cursor-pointer">
                <input
                  type="checkbox"
                  value={item}
                  onChange={toggleSubCategory}
                />
                {item}
              </label>
            ))}
          </div>
        </div>

      </div>

      {/* RIGHT SIDE */}
      <div className="flex-1">

        <div className="flex justify-between items-center mb-5">

          <Title text1={"ALL"} text2={"COLLECTIONS"} />

          {/* SORT */}
          <select
            onChange={(e) => setSortType(e.target.value)}
            className={`px-3 py-1 text-sm border rounded ${
              darkMode
                ? "bg-zinc-900 border-zinc-700 text-white"
                : "bg-white border-gray-300 text-gray-700"
            }`}
          >
            <option value="relevant">Sort by: Relevant</option>
            <option value="low-high">Low to High</option>
            <option value="high-low">High to Low</option>
          </select>

        </div>

        {/* PRODUCTS */}
        <div className="grid grid-cols-2  md:grid-cols-3 lg:grid-cols-4 gap-5">

          {filterProducts.map((item, i) => (
            <div
              key={i}
              className={`rounded-md overflow-hidden border ${
                darkMode
                  ? "bg-zinc-900 border-zinc-700"
                  : "bg-white border-gray-200"
              }`}
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

export default Collection;