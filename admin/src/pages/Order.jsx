import { useEffect, useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import { backendUrl, currency } from "../App";
import { assets } from "../assets/assets";

const Order = ({ token }) => {
  const [orders, setOrders] = useState([]);

  const fetchAllOrders = async () => {
    if (!token) return;

    try {
      const res = await axios.post(
        backendUrl + "/api/order/list",
        {},
        { headers: { token } }
      );

      if (res.data.success) {
        setOrders(res.data.orders.reverse());
      } else {
        toast.error(res.data.message);
      }
    } catch (error) {
      console.log(error);
      toast.error(error.message);
    }
  };

  const statusHandler = async (e, orderId) => {
    try {
      const res = await axios.post(
        backendUrl + "/api/order/status",
        { orderId, status: e.target.value },
        { headers: { token } }
      );

      if (res.data.success) {
        await fetchAllOrders();
        toast.success(res.data.message);
      }
    } catch (error) {
      console.log(error);
      toast.error(error.message);
    }
  };

  useEffect(() => {
    fetchAllOrders();
  }, [token]);

  return (
    <div className="w-full text-gray-800 dark:text-gray-200">
      <h3 className="text-xl font-semibold mb-4">Order Page</h3>

      <div className="flex flex-col gap-4">
        {orders.map((order, i) => (
          <div
            key={i}
            className="
              grid grid-cols-1 
              sm:grid-cols-[0.5fr_2fr_1fr] 
              lg:grid-cols-[0.5fr_2fr_1fr_1fr_1fr] 
              gap-4 items-start
              
              bg-white dark:bg-zinc-800
              border border-gray-200 dark:border-zinc-700
              
              p-4 sm:p-6 rounded-lg shadow-sm
              text-xs sm:text-sm
            "
          >
            {/* ICON */}
            <img src={assets.parcel_icon} className="w-12" alt="" />

            {/* ORDER ITEMS + ADDRESS */}
            <div>
              <div>
                {order.items.map((item, idx) => (
                  <p key={idx} className="py-0.5">
                    {item.name} x {item.quantity}{" "}
                    <span className="text-gray-500 dark:text-gray-400">
                      {item.size}
                    </span>
                    {idx !== order.items.length - 1 && ","}
                  </p>
                ))}
              </div>

              <p className="mt-3 font-medium">
                {order.address.firstName} {order.address.lastName}
              </p>

              <div className="text-gray-600 dark:text-gray-400">
                <p>{order.address.street},</p>
                <p>
                  {order.address.city}, {order.address.state},{" "}
                  {order.address.country}, {order.address.zipcode}
                </p>
              </div>

              <p className="mt-1">{order.address.phone}</p>
            </div>

            {/* ORDER INFO */}
            <div className="text-gray-700 dark:text-gray-300">
              <p>Items : {order.items.length}</p>
              <p className="mt-2">Method : {order.paymentMethod}</p>
              <p>
                Payment :{" "}
                <span
                  className={
                    order.payment
                      ? "text-green-600"
                      : "text-red-500"
                  }
                >
                  {order.payment ? "Done" : "Pending"}
                </span>
              </p>
              <p className="mt-1">
                {new Date(order.date).toLocaleString()}
              </p>
            </div>

            {/* AMOUNT */}
            <p className="font-semibold text-sm sm:text-base">
              {currency} {order.amount}
            </p>

            {/* STATUS DROPDOWN */}
            <select
              value={order.status}
              onChange={(e) => statusHandler(e, order._id)}
              className="
                p-2 rounded-md font-semibold
                
                bg-white dark:bg-zinc-900
                text-gray-800 dark:text-white
                
                border border-gray-300 dark:border-zinc-700
                outline-none
              "
            >
              <option value="Order Placed">Order Placed</option>
              <option value="Packing">Packing</option>
              <option value="Shipped">Shipped</option>
              <option value="Out for delivery">Out for delivery</option>
              <option value="Delivered">Delivered</option>
            </select>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Order;