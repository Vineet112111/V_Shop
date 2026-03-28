import { useContext, useEffect, useState } from "react";
import { ShopContext } from "../context/ShopContext";
import Title from "../components/Title";
import axios from "axios";
import { toast } from "react-toastify";

const Orders = () => {
  const { backendUrl, token, currency, darkMode } = useContext(ShopContext);

  const [orderData, setOrderData] = useState([]);

  const loadOrderData = async () => {
    try {
      if (!token) return;

      const res = await axios.post(
        backendUrl + "/api/order/userorders",
        {},
        { headers: { token } }
      );

      if (res.data.success) {
        let allOrdersItem = [];

        res.data.orders.map((order) => {
          order.items.map((item) => {
            item["status"] = order.status;
            item["payment"] = order.payment;
            item["paymentMethod"] = order.paymentMethod;
            item["date"] = order.date;

            allOrdersItem.push(item);
          });
        });

        setOrderData(allOrdersItem.reverse());
      }
    } catch (error) {
      toast.error(error.message);
    }
  };

  useEffect(() => {
    loadOrderData();
  }, [token]);

  return (
    <div
      className={`border-t pt-12 px-4 sm:px-6 transition-colors duration-300 ${
        darkMode
          ? "bg-zinc-950 text-white border-zinc-800"
          : "bg-gray-100 text-gray-900 border-gray-300"
      }`}
    >
      {/* TITLE */}
      <div className="text-2xl mb-8">
        <Title text1={"MY"} text2={"ORDERS"} />
      </div>

      {/* ORDERS */}
      <div className="flex flex-col gap-6">

        {orderData.slice(0, 4).map((item, i) => (
          <div
            key={i}
            className={`
              flex flex-col md:flex-row md:items-center md:justify-between
              gap-5 p-5 rounded-md border transition
              ${
                darkMode
                  ? "bg-zinc-900 border-zinc-700"
                  : "bg-white border-gray-200 hover:shadow-md"
              }
            `}
          >

            {/* LEFT */}
            <div className="flex items-start gap-5">

              {/* IMAGE FIXED SIZE */}
              <div className="w-20 h-20 overflow-hidden rounded-md border">
                <img
                  src={item.image[0]}
                  className="w-full h-full object-cover"
                  alt=""
                />
              </div>

              {/* DETAILS */}
              <div className="text-sm">

                <p className="font-medium text-base">
                  {item.name}
                </p>

                <div
                  className={`flex flex-wrap gap-3 mt-1 ${
                    darkMode ? "text-zinc-400" : "text-gray-600"
                  }`}
                >
                  <p>{currency}{item.price}</p>
                  <p>Qty: {item.quantity}</p>
                  <p>Size: {item.size}</p>
                </div>

                <p className="mt-1 text-xs">
                  Date:{" "}
                  <span className={darkMode ? "text-zinc-500" : "text-gray-400"}>
                    {new Date(item.date).toDateString()}
                  </span>
                </p>

                <p className="text-xs">
                  Payment:{" "}
                  <span className={darkMode ? "text-zinc-500" : "text-gray-400"}>
                    {item.paymentMethod}
                  </span>
                </p>

              </div>

            </div>

            {/* RIGHT */}
            <div className="flex items-center justify-between md:justify-end gap-6">

              {/* STATUS */}
              <div className="flex items-center gap-2 text-sm">
                <span className="w-2 h-2 rounded-full bg-green-500"></span>
                <span className="capitalize">{item.status}</span>
              </div>

              {/* BUTTON */}
              <button
                onClick={loadOrderData}
                className="
                  px-4 py-2 text-xs rounded-md
                  border border-zinc-400 dark:border-zinc-600
                  hover:bg-amber-500 hover:border-amber-500 hover:text-white
                  dark:hover:bg-amber-400 dark:hover:text-zinc-950
                  transition-all duration-300
                "
              >
                Track Order
              </button>

            </div>

          </div>
        ))}

      </div>
    </div>
  );
};

export default Orders;