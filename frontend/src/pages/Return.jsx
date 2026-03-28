import { useContext } from "react";
import { ShopContext } from "../context/ShopContext";
import Title from "../components/Title";

const Returns = () => {
  const { darkMode } = useContext(ShopContext);

  return (
    <div className={`min-h-screen px-6 py-12 ${darkMode ? "bg-zinc-950 text-white" : "bg-white text-gray-800"}`}>
      <div className="text-center text-3xl  mb-10">
        <Title text1="RETURNS" text2="POLICY" />
      </div>

      <div className="max-w-3xl mx-auto space-y-4">
        <p>🔄 Easy returns within 7 days of delivery.</p>
        <p>📦 Product must be unused and in original packaging.</p>
        <p>💰 Refund processed within 5–7 business days.</p>
        <p>❌ No returns on sale items.</p>
      </div>
    </div>
  );
};

export default Returns;