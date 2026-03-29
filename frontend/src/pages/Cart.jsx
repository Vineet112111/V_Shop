import { useContext, useEffect, useState } from "react";
import { ShopContext } from "../context/ShopContext";
import Title from "../components/Title";
import { assets } from "../assets/assets";
import CartTotal from "../components/CartTotal";

const Cart = () => {
  const {
    products,
    currency,
    cartItems,
    updateQuantity,
    navigate,
    darkMode, // ✅ context
  } = useContext(ShopContext);

  const [cartData, setCartData] = useState([]);

  useEffect(() => {
    if (products.length > 0) {
      const tempData = [];
      for (const items in cartItems) {
        for (const item in cartItems[items]) {
          if (cartItems[items][item] > 0) {
            tempData.push({
              _id: items,
              size: item,
              quantity: cartItems[items][item],
            });
          }
        }
      }
      setCartData(tempData);
    }
  }, [cartItems, products]);

  return (
    <div
      className={`py-14 px-4 sm:px-6 min-h-screen transition
        ${
          darkMode
            ? "bg-zinc-950 text-white border-zinc-800"
            : "bg-gray-100 text-gray-900 border-gray-300"
        }`}
    >
      {/* TITLE */}
      <div className="text-2xl mb-6">
        <Title text1={"YOUR"} text2={"CART"} />
      </div>

      {/* CART ITEMS */}
      <div className="space-y-4">
        {cartData.map((item, i) => {
          const productsData = products.find(
            (product) => product._id === item._id
          );

          return (
            <div
              key={i}
              className={`grid grid-cols-[4fr_1fr_0.5fr] sm:grid-cols-[4fr_2fr_0.5fr] items-center gap-4 p-4 rounded-md border transition
                ${
                  darkMode
                    ? "bg-zinc-900 border-zinc-700"
                    : "bg-white border-gray-200"
                }`}
            >
              {/* LEFT */}
              <div className="flex items-start gap-5">
                <div className="w-16 h-16 sm:w-20 sm:h-20 overflow-hidden rounded-md bg-gray-100">
                  <img
                    src={productsData.image[0]}
                    className="w-full h-full object-cover"
                    alt=""
                  />
                </div>

                <div>
                  <p className="text-sm sm:text-lg font-medium">
                    {productsData.name}
                  </p>

                  <div className="flex items-center gap-4 mt-2 text-sm">
                    <p>
                      {currency}
                      {productsData.price}
                    </p>

                    <span
                      className={`px-2 py-0.5 rounded text-xs border
                        ${
                          darkMode
                            ? "bg-zinc-800 border-zinc-600"
                            : "bg-gray-100 border-gray-300"
                        }`}
                    >
                      {item.size}
                    </span>
                  </div>
                </div>
              </div>

              {/* QUANTITY */}
              <input
                type="number"
                min={1}
                defaultValue={item.quantity}
                onChange={(e) =>
                  e.target.value === "" || e.target.value === "0"
                    ? null
                    : updateQuantity(
                        item._id,
                        item.size,
                        Number(e.target.value)
                      )
                }
                className={`w-14 sm:w-20 px-2 py-1 rounded border outline-none
                  ${
                    darkMode
                      ? "bg-zinc-800 border-zinc-600 text-white"
                      : "bg-white border-gray-300 text-black"
                  }`}
              />

              {/* DELETE */}
              <img
                src={assets.bin_icon}
                className="w-4 sm:w-5 cursor-pointer hover:scale-110 transition"
                alt=""
                onClick={() => updateQuantity(item._id, item.size, 0)}
              />
            </div>
          );
        })}
      </div>

      {/* EMPTY STATE */}
      {cartData.length === 0 && (
        <div className="text-center py-20 text-zinc-400">
          🛒 Your cart is empty
        </div>
      )}

      {/* CART TOTAL */}
      {cartData.length > 0 && (
        <div className="flex justify-end my-16">
          <div className="w-full sm:w-[420px] space-y-4">


            <div
              className={`p-5 rounded-md border
                ${
                  darkMode
                    ? "bg-zinc-900 border-zinc-700"
                    : "bg-white border-gray-200"
                }`}
            >
              <CartTotal />
            </div>

            <div className="text-end">
              <button
                onClick={() => navigate("/place-order")}
                className="px-8 py-3 text-sm rounded-md bg-amber-500 hover:bg-amber-600 text-white transition"
              >
                PROCEED TO CHECKOUT
              </button>
            </div>

          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;