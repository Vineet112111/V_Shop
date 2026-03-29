import { Link } from "react-router-dom";
import { useContext } from "react";
import { ShopContext } from "../context/ShopContext";

const ProductItem = ({ id, image, name, price }) => {
  const { darkMode } = useContext(ShopContext);

  const imgSrc = Array.isArray(image) ? image[0] : image;

  return (
    <Link to={`/product/${id}`}>

      <div
        className={`p-2 transition duration-300 ${
          darkMode
            ? "bg-zinc-900 text-white"
            : "bg-white text-gray-800"
        }`}
      >
        {/* IMAGE BOX SAME SIZE */}
        <div className="w-full aspect-square overflow-hidden border">

          <img
            src={imgSrc}
            alt=""
            className="w-full h-full object-center"
          />

        </div>

        {/* TEXT */}
        <p className="pt-2 text-sm">{name}</p>

        <p className="text-sm font-medium">
          ${price}
        </p>
      </div>

    </Link>
  );
};

export default ProductItem;