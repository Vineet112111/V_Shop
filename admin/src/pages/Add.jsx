import { useState, useContext } from "react";
import { assets } from "../assets/assets";
import axios from "axios";
import { backendUrl } from "../App";
import { toast } from "react-toastify";
import { ThemeContext } from "../context/ThemeContext";

const Add = ({ token }) => {
  const { theme } = useContext(ThemeContext);

  const [image1, setImage1] = useState(false);
  const [image2, setImage2] = useState(false);
  const [image3, setImage3] = useState(false);
  const [image4, setImage4] = useState(false);

  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [category, setCategory] = useState("Men");
  const [subCategory, setSubCategory] = useState("Topwear");
  const [bestseller, setBestseller] = useState(false);
  const [sizes, setSizes] = useState([]);

  const onSubmitHandler = async (e) => {
    e.preventDefault();
    try {
      const formData = new FormData();

      formData.append("name", name);
      formData.append("description", description);
      formData.append("price", price);
      formData.append("category", category);
      formData.append("subCategory", subCategory);
      formData.append("bestseller", bestseller);
      formData.append("sizes", JSON.stringify(sizes));

      image1 && formData.append("image1", image1);
      image2 && formData.append("image2", image2);
      image3 && formData.append("image3", image3);
      image4 && formData.append("image4", image4);

      const response = await axios.post(
        backendUrl + "/api/product/add",
        formData,
        { headers: { token } }
      );

      if (response.data.success) {
        toast.success(response.data.message);
        setName("");
        setDescription("");
        setImage1(false);
        setImage2(false);
        setImage3(false);
        setImage4(false);
        setPrice("");
      } else {
        toast.error(response.data.message);
      }
    } catch (error) {
      console.log(error);
      toast.error(error.message);
    }
  };

  return (
    <form
      onSubmit={onSubmitHandler}
      className="w-full max-w-4xl mx-auto p-6 rounded-xl
      bg-white dark:bg-zinc-900
      border border-gray-200 dark:border-zinc-700
      shadow-md transition-colors duration-300"
    >
      <h2 className="text-xl font-semibold mb-6 text-gray-800 dark:text-white">
        Add New Product
      </h2>

      {/* IMAGE UPLOAD */}
      <div className="mb-6">
        <p className="mb-2 text-gray-700 dark:text-gray-300">Upload Images</p>
        <div className="flex gap-3">
          {[image1, image2, image3, image4].map((img, index) => (
            <label key={index} htmlFor={`image${index}`}>
              <img
                src={!img ? assets.upload_area : URL.createObjectURL(img)}
                className="w-20 h-20 object-cover rounded border dark:border-zinc-700 cursor-pointer hover:scale-105 transition"
                alt=""
              />
              <input
                type="file"
                hidden
                id={`image${index}`}
                onChange={(e) => {
                  const file = e.target.files[0];
                  if (index === 0) setImage1(file);
                  if (index === 1) setImage2(file);
                  if (index === 2) setImage3(file);
                  if (index === 3) setImage4(file);
                }}
              />
            </label>
          ))}
        </div>
      </div>

      {/* NAME */}
      <div className="mb-4">
        <p className="mb-2 text-gray-700 dark:text-gray-300">Product Name</p>
        <input
          className="w-full px-3 py-2 rounded-md
          border border-gray-300 dark:border-zinc-600
          bg-white dark:bg-zinc-800
          text-gray-800 dark:text-white
          outline-none focus:ring-2 focus:ring-amber-400"
          type="text"
          placeholder="Type here"
          required
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>

      {/* DESCRIPTION */}
      <div className="mb-4">
        <p className="mb-2 text-gray-700 dark:text-gray-300">
          Product Description
        </p>
        <textarea
          className="w-full px-3 py-2 rounded-md
          border border-gray-300 dark:border-zinc-600
          bg-white dark:bg-zinc-800
          text-gray-800 dark:text-white
          outline-none focus:ring-2 focus:ring-amber-400"
          placeholder="Write content here"
          required
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
      </div>

      {/* CATEGORY + PRICE */}
      <div className="flex flex-wrap gap-4 mb-4">
        <select
          className="px-3 py-2 rounded-md border dark:border-zinc-600
          bg-white dark:bg-zinc-800 text-gray-800 dark:text-white"
          onChange={(e) => setCategory(e.target.value)}
        >
          <option>Men</option>
          <option>Women</option>
          <option>Kids</option>
        </select>

        <select
          className="px-3 py-2 rounded-md border dark:border-zinc-600
          bg-white dark:bg-zinc-800 text-gray-800 dark:text-white"
          onChange={(e) => setSubCategory(e.target.value)}
        >
          <option>Topwear</option>
          <option>Bottomwear</option>
          <option>Winterwear</option>
        </select>

        <input
          type="number"
          placeholder="Price"
          className="px-3 py-2 rounded-md border dark:border-zinc-600
          bg-white dark:bg-zinc-800 text-gray-800 dark:text-white"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
        />
      </div>

      {/* SIZES */}
      <div className="mb-4">
        <p className="mb-2 text-gray-700 dark:text-gray-300">
          Product Sizes
        </p>
        <div className="flex gap-3 flex-wrap">
          {["S", "M", "L", "XL", "XXL"].map((size) => (
            <button
              type="button"
              key={size}
              onClick={() =>
                setSizes((p) =>
                  p.includes(size)
                    ? p.filter((item) => item !== size)
                    : [...p, size]
                )
              }
              className={`px-4 py-1 rounded-md text-sm border
              ${
                sizes.includes(size)
                  ? "bg-amber-500 text-white border-amber-500"
                  : "bg-gray-200 dark:bg-zinc-800 text-gray-800 dark:text-white border-gray-300 dark:border-zinc-600"
              }`}
            >
              {size}
            </button>
          ))}
        </div>
      </div>

      {/* BESTSELLER */}
      <div className="flex items-center gap-2 mb-4">
        <input
          type="checkbox"
          checked={bestseller}
          onChange={() => setBestseller((p) => !p)}
        />
        <label className="text-gray-700 dark:text-gray-300">
          Add to Bestseller
        </label>
      </div>

      {/* BUTTON */}
      <button
        className="px-6 py-2 rounded-md text-sm font-medium
        bg-black text-white
        dark:bg-amber-500 dark:text-zinc-900
        hover:opacity-90 transition"
        type="submit"
      >
        Add Product
      </button>
    </form>
  );
};

export default Add;