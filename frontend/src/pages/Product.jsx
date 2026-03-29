import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ShopContext } from "../context/ShopContext";
import { assets } from "../assets/assets";
import RelatedProduct from "../components/RelatedProduct";

const Product = () => {
  const { productId } = useParams();

  const { products, currency, addToCart, darkMode } =
    useContext(ShopContext);

  const [productData, setProductData] = useState(false);
  const [image, setImage] = useState("");
  const [size, setSize] = useState("");

  useEffect(() => {
    const item = products.find((p) => p._id === productId);
    if (item) {
      setProductData(item);
      setImage(item.image[0]);
    }
  }, [productId, products]);

  
  return productData ? (
    <div
      className={`py-10 px-4 sm:px-6 transition
        ${darkMode ? "bg-zinc-950 text-white" : "bg-gray-100 text-gray-900"}
      `}
    >
      {/* MAIN SECTION */}
      <div className="flex flex-col lg:flex-row gap-10">

        {/* IMAGES */}
        <div className="flex-1 flex flex-col-reverse sm:flex-row gap-4">

          {/* THUMBNAILS */}
          <div className="flex sm:flex-col gap-2 overflow-x-auto sm:overflow-y-auto sm:w-[20%]">
            {productData.image.map((item, i) => (
              <img
                key={i}
                src={item}
                onClick={() => setImage(item)}
                className={`w-20 h-20 object-cover rounded cursor-pointer border transition
                  ${
                    image === item
                      ? "border-amber-500"
                      : darkMode
                      ? "border-zinc-700"
                      : "border-gray-300"
                  }`}
              />
            ))}
          </div>

          {/* MAIN IMAGE */}
          <div
            className={`w-full sm:w-[80%] rounded-md overflow-hidden border
              ${
                darkMode
                  ? "border-zinc-700 bg-zinc-900"
                  : "border-gray-200 bg-white"
              }`}
          >
            <img
              src={image}
              className="w-full h-[400px] sm:h-[500px] object-cover hover:scale-105 transition duration-300"
              alt=""
            />
          </div>
        </div>

        {/* PRODUCT INFO */}
        <div className="flex-1 flex flex-col gap-4">

          <h1 className="text-2xl sm:text-3xl font-semibold">
            {productData.name}
          </h1>

          {/* RATING */}
          <div className="flex items-center gap-1 text-sm">
            {[...Array(4)].map((_, i) => (
              <img key={i} className="w-4" src={assets.star_icon} />
            ))}
            <img className="w-4" src={assets.star_dull_icon} />
            <span className="ml-2 text-zinc-400">(122 reviews)</span>
          </div>

          {/* PRICE */}
          <p className="text-3xl font-bold text-amber-500">
            {currency}
            {productData.price}
          </p>

          {/* DESCRIPTION */}
          <p
            className={`text-sm leading-relaxed max-w-lg
              ${darkMode ? "text-zinc-400" : "text-gray-600"}
            `}
          >
            {productData.description}
          </p>

          {/* SIZE */}
          <div>
            <p className="mb-2 font-medium">Select Size</p>
            <div className="flex gap-2">
              {productData.sizes.map((item, i) => (
                <button
                  key={i}
                  onClick={() => setSize(item)}
                  className={`px-4 py-2 text-sm rounded border transition
                    ${
                      item === size
                        ? "bg-amber-500 text-white border-amber-500"
                        : darkMode
                        ? "bg-zinc-800 border-zinc-600 hover:bg-zinc-700"
                        : "bg-gray-100 border-gray-300 hover:bg-gray-200"
                    }`}
                >
                  {item}
                </button>
              ))}
            </div>
          </div>

          {/* ADD TO CART */}
          <button
            onClick={() => addToCart(productData._id, size)}
            className="mt-4 px-8 py-3 rounded-md bg-amber-500 hover:bg-amber-600 text-white transition"
          >
            ADD TO CART
          </button>

          {/* EXTRA INFO */}
          <div
            className={`text-sm mt-6 space-y-1
              ${darkMode ? "text-zinc-400" : "text-gray-600"}
            `}
          >
            <p>✔ 100% Original Product</p>
            <p>✔ Cash on delivery available</p>
            <p>✔ 7 days easy return & exchange</p>
          </div>
        </div>
      </div>

      {/* DESCRIPTION SECTION */}
      <div className="mt-16">
        <div className="flex gap-2">
          <button
            className={`px-5 py-2 text-sm border rounded-t
              ${
                darkMode
                  ? "bg-zinc-900 border-zinc-700"
                  : "bg-white border-gray-300"
              }`}
          >
            Description
          </button>
          <button
            className={`px-5 py-2 text-sm border rounded-t
              ${
                darkMode
                  ? "border-zinc-700 text-zinc-400"
                  : "border-gray-300 text-gray-500"
              }`}
          >
            Reviews (122)
          </button>
        </div>

        <div
          className={`p-5 border rounded-b text-sm
            ${
              darkMode
                ? "bg-zinc-900 border-zinc-700 text-zinc-400"
                : "bg-white border-gray-200 text-gray-600"
            }`}
        >
          <p>
            Premium quality product designed for comfort and durability. Perfect
            for everyday wear with modern styling.
          </p>
        </div>
      </div>

      {/* RELATED PRODUCTS */}
      <div className="mt-16 mb-5">
        <RelatedProduct
          category={productData.category}
          subCategory={productData.subCategory}
        />
      </div>
    </div>
  ) : (
    <div className="opacity-0"></div>
  );
};

export default Product;