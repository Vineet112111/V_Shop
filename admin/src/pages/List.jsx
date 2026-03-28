import axios from "axios";
import { useEffect, useState, useContext } from "react";
import { backendUrl, currency } from "../App";
import { toast } from "react-toastify";
import { ThemeContext } from "../context/ThemeContext";

const List = ({ token }) => {
  const { theme } = useContext(ThemeContext);

  const [list, setList] = useState([]);

  const fetchList = async () => {
    try {
      const response = await axios.get(backendUrl + "/api/product/list");
      if (response.data.success) {
        setList(response.data.products);
      } else {
        toast.error(response.data.message);
      }
    } catch (error) {
      console.log(error);
      toast.error(error.message);
    }
  };

  const removeProduct = async (id) => {
    try {
      const response = await axios.post(
        backendUrl + "/api/product/remove",
        { id },
        { headers: { token } }
      );

      if (response.data.success) {
        toast.success(response.data.message);
        fetchList();
      } else {
        toast.error(response.data.message);
      }
    } catch (error) {
      console.log(error);
      toast.error(error.message);
    }
  };

  useEffect(() => {
    fetchList();
  }, []);

  return (
    <div className="w-full">
      <h2 className="text-xl font-semibold mb-4 text-gray-800 dark:text-white">
        All Products
      </h2>

      <div
        className="rounded-xl overflow-hidden
        border border-gray-200 dark:border-zinc-700
        bg-white dark:bg-zinc-900
        transition-colors duration-300"
      >
        {/* HEADER */}
        <div className="hidden md:grid grid-cols-[1fr_3fr_1fr_1fr_1fr] 
          items-center px-4 py-3 text-sm font-medium
          bg-gray-100 dark:bg-zinc-800
          text-gray-700 dark:text-gray-300"
        >
          <p>Image</p>
          <p>Name</p>
          <p>Category</p>
          <p>Price</p>
          <p className="text-center">Action</p>
        </div>

        {/* LIST */}
        {list.map((item, i) => (
          <div
            key={i}
            className="grid grid-cols-[1fr_3fr_1fr] md:grid-cols-[1fr_3fr_1fr_1fr_1fr]
            items-center gap-3 px-4 py-3 text-sm
            border-t border-gray-200 dark:border-zinc-700
            text-gray-700 dark:text-gray-300
            hover:bg-gray-50 dark:hover:bg-zinc-800
            transition"
          >
            {/* IMAGE */}
            <img
              className="w-12 h-12 object-cover rounded-md border dark:border-zinc-600"
              src={item.image[0]}
              alt=""
            />

            {/* NAME */}
            <p className="font-medium">{item.name}</p>

            {/* CATEGORY */}
            <p className="hidden md:block">{item.category}</p>

            {/* PRICE */}
            <p className="hidden md:block">
              {currency}
              {item.price}
            </p>

            {/* DELETE */}
            <button
              onClick={() => removeProduct(item._id)}
              className="text-center text-xs px-3 py-1 rounded-md
              bg-red-100 text-red-600
              dark:bg-red-500/20 dark:text-red-400
              hover:bg-red-200 dark:hover:bg-red-500/30
              transition"
            >
              Delete
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default List;