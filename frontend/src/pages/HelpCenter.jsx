import { useContext } from "react";
import { ShopContext } from "../context/ShopContext";
import Title from "../components/Title";

const HelpCenter = () => {
  const { darkMode } = useContext(ShopContext);

  const faqs = [
    { q: "How can I place an order?", a: "Browse products, add to cart, and checkout securely." },
    { q: "How do I track my order?", a: "Go to Orders page after login to track your order." },
    { q: "What payment methods are available?", a: "We support COD, Stripe, and Razorpay." },
    { q: "Can I cancel my order?", a: "Yes, before it is shipped." },
  ];

  
  return (
    <div className={`min-h-screen px-6 py-12 ${darkMode ? "bg-zinc-950 text-white" : "bg-white text-gray-800"}`}>
      <div className="text-center text-3xl mb-10">
        <Title text1="HELP" text2="CENTER" />
      </div>

      <div className="max-w-3xl mx-auto space-y-6">
        {faqs.map((item, i) => (
          <div key={i} className={`p-5 rounded-lg ${darkMode ? "bg-zinc-900" : "bg-gray-100"}`}>
            <h3 className="font-semibold">{item.q}</h3>
            <p className={`${darkMode ? "text-zinc-400" : "text-gray-600"} mt-2`}>
              {item.a}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HelpCenter;