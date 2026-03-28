import React, { useContext, useState } from "react";
import Title from "../components/Title";
import CartTotal from "../components/CartTotal";
import { assets } from "../assets/assets";
import { ShopContext } from "../context/ShopContext";
import axios from "axios";
import { toast } from "react-toastify";

const PlaceOrder = () => {
  const {
    products,
    delivery_fee,
    cartItems,
    getCartAmount,
    navigate,
    backendUrl,
    token,
    setCartItems,
    darkMode, // ✅ USING CONTEXT
  } = useContext(ShopContext);

  const [method, setMethod] = useState("cod");

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    zipcode: "",
    phone: "",
    state: "",
    street: "",
    country: "",
    city: "",
  });

  const onChangeHandler = (e) => {
    const { name, value } = e.target;
    setFormData((p) => ({ ...p, [name]: value }));
  };

  const onSubmitHandler = async (e) => {
    e.preventDefault();

    try {
      const orderItems = [];

      for (const items in cartItems) {
        for (const item in cartItems[items]) {
          if (cartItems[items][item] > 0) {
            const itemInfo = structuredClone(
              products.find((product) => product._id === items)
            );

            if (itemInfo) {
              itemInfo.size = item;
              itemInfo.quantity = cartItems[items][item];
              orderItems.push(itemInfo);
            }
          }
        }
      }

      let orderData = {
        address: formData,
        items: orderItems,
        amount: getCartAmount() + delivery_fee,
      };

      if (method === "cod") {
        const res = await axios.post(
          backendUrl + "/api/order/place",
          orderData,
          { headers: { token } }
        );

        if (res.data.success) {
          setCartItems({});
          navigate("/orders");
        } else {
          toast.error(res.data.message);
        }
      }
    } catch (error) {
      toast.error(error.message);
    }
  };

  return (
    <form
      onSubmit={onSubmitHandler}
      className={`flex flex-col lg:flex-row gap-8 pt-10 px-4 sm:px-6 min-h-[80vh] border-t transition
        ${
          darkMode
            ? "bg-zinc-950 text-white border-zinc-800"
            : "bg-gray-100 text-gray-900 border-gray-300"
        }`}
    >
      {/* LEFT SIDE */}
      <div
        className={`flex flex-col gap-4 w-full lg:max-w-[480px] p-5 rounded-md border
        ${
          darkMode
            ? "bg-zinc-900 border-zinc-700"
            : "bg-white border-gray-200"
        }`}
      >
        <div className="text-xl sm:text-2xl mb-2">
          <Title text1={"DELIVERY"} text2={"INFORMATION"} />
        </div>

        <div className="flex gap-3">
          <input type="text" name="firstName" placeholder="First name"
            value={formData.firstName} onChange={onChangeHandler}
            className={`input-style ${darkMode && "dark-input"}`} required />
          <input type="text" name="lastName" placeholder="Last name"
            value={formData.lastName} onChange={onChangeHandler}
            className={`input-style ${darkMode && "dark-input"}`} required />
        </div>

        <input type="email" name="email" placeholder="Email"
          value={formData.email} onChange={onChangeHandler}
          className={`input-style ${darkMode && "dark-input"}`} required />

        <input type="text" name="street" placeholder="Street"
          value={formData.street} onChange={onChangeHandler}
          className={`input-style ${darkMode && "dark-input"}`} required />

        <div className="flex gap-3">
          <input name="city" placeholder="City"
            value={formData.city} onChange={onChangeHandler}
            className={`input-style ${darkMode && "dark-input"}`} />
          <input name="state" placeholder="State"
            value={formData.state} onChange={onChangeHandler}
            className={`input-style ${darkMode && "dark-input"}`} />
        </div>

        <div className="flex gap-3">
          <input name="zipcode" placeholder="Zipcode"
            value={formData.zipcode} onChange={onChangeHandler}
            className={`input-style ${darkMode && "dark-input"}`} />
          <input name="country" placeholder="Country"
            value={formData.country} onChange={onChangeHandler}
            className={`input-style ${darkMode && "dark-input"}`} />
        </div>

        <input name="phone" placeholder="Phone"
          value={formData.phone} onChange={onChangeHandler}
          className={`input-style ${darkMode && "dark-input"}`} />
      </div>

      {/* RIGHT SIDE */}
      <div className="flex-1">

        {/* CART */}
        <div
          className={`p-5 rounded-md border mb-6 ${
            darkMode
              ? "bg-zinc-900 border-zinc-700"
              : "bg-white border-gray-200"
          }`}
        >
          <CartTotal />
        </div>

        {/* PAYMENT */}
        <div
          className={`p-5 rounded-md border ${
            darkMode
              ? "bg-zinc-900 border-zinc-700"
              : "bg-white border-gray-200"
          }`}
        >
          <Title text1={"PAYMENT"} text2={"METHOD"} />

          <div className="flex flex-col gap-3 mt-4">
            {["stripe", "razorpay", "cod"].map((m) => (
              <div
                key={m}
                onClick={() => setMethod(m)}
                className={`flex items-center justify-between p-3 rounded-md border cursor-pointer transition
                  ${
                    method === m
                      ? "border-amber-500"
                      : darkMode
                      ? "border-zinc-700"
                      : "border-gray-300"
                  }`}
              >
                <div className="flex items-center gap-3">
                  <span className={`w-3 h-3 rounded-full border ${method === m ? "bg-green-400" : ""}`}></span>

                  {m === "cod" ? (
                    <p>CASH ON DELIVERY</p>
                  ) : (
                    <img
                      src={m === "stripe" ? assets.stripe_logo : assets.razorpay_logo}
                      className="h-5"
                    />
                  )}
                </div>
              </div>
            ))}
          </div>

          <div className="text-end mt-6">
            <button
              className="px-10 py-3 text-sm rounded-md bg-amber-500 hover:bg-amber-600 text-white transition"
              type="submit"
            >
              PLACE ORDER
            </button>
          </div>
        </div>
      </div>
    </form>
  );
};

export default PlaceOrder;