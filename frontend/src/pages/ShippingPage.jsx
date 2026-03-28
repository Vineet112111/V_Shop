import { useContext } from "react";
import { ShopContext } from "../context/ShopContext";
import Title from "../components/Title";

const Shipping = () => {
  const { darkMode } = useContext(ShopContext);

  return (
    <div className={`min-h-screen px-6 py-12 ${darkMode ? "bg-zinc-950 text-white" : "bg-white text-gray-800"}`}>
      <div className="text-center text-3xl  mb-10">
        <Title text1="SHIPPING" text2="INFO" />
      </div>

      <div className="max-w-3xl mx-auto space-y-4">
        <p>🚚 Orders are processed within 1–2 business days.</p>
        <p>📦 Delivery time: 3–7 days across India.</p>
        <p>💸 Free shipping on orders above ₹999.</p>
        <p>🌍 International shipping coming soon.</p>
      </div>
    </div>
  );
};

export default Shipping;