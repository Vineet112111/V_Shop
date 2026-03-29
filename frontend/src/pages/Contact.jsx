import { useContext } from "react";
import { ShopContext } from "../context/ShopContext";
import { assets } from "../assets/assets";
import NewsletterBox from "../components/NewsletterBox";
import Title from "../components/Title";
import { useNavigate } from "react-router-dom";

const Contact = () => {
  const { darkMode } = useContext(ShopContext);
  const navigate = useNavigate();

  
  return (
    <div
      className={`px-4 sm:px-6 transition-colors duration-300 ${
        darkMode
          ? "bg-zinc-950 text-white"
          : "bg-gray-100 text-gray-900"
      }`}
    >
      {/* HEADER */}
      <div className="text-center text-2xl pt-10 border-t border-zinc-300 dark:border-zinc-800">
        <Title text1={"CONTACT"} text2={"US"} />
      </div>

      {/* MAIN SECTION */}
      <div className="my-12 flex flex-col md:flex-row gap-12 justify-center items-center">

        {/* IMAGE */}
        <img
          src={assets.contact_img}
          className="w-full md:max-w-[480px] rounded-xl shadow-lg hover:scale-105 transition"
          alt=""
        />

        {/* CONTENT */}
        <div className="flex flex-col justify-center items-start gap-6 max-w-md">

          {/* STORE */}
          <p className="font-semibold text-xl">
            Our Office
          </p>

          <p className={`${darkMode ? "text-zinc-400" : "text-gray-600"}`}>
            IIIT Sonepat <br />
            Haryana, India
          </p>

          {/* CONTACT */}
          <p className={`${darkMode ? "text-zinc-400" : "text-gray-600"}`}>
            📞 +91-6386177635 <br />
            📧 vineetyadav8429@gmail.com
          </p>

          {/* CAREER */}
          <p className="font-semibold text-xl">
            Careers at V_Shop
          </p>

          <p className={`${darkMode ? "text-zinc-400" : "text-gray-600"}`}>
            Want to work with us? Join our growing team and build something amazing 🚀
          </p>

          {/* BUTTON */}
          <button
            onClick={() => navigate("/career")}
            className="
              px-8 py-3 text-sm tracking-wide rounded-md
              bg-black text-white
              dark:bg-amber-500 dark:text-black
              hover:scale-105 transition-all duration-300
            "
          >
            Explore Jobs
          </button>

        </div>
      </div>

      {/* EXTRA SECTION (NEW ✨) */}
      <div className="text-center my-16">
        <h2 className="text-2xl font-semibold">We’d love to hear from you 💬</h2>
        <p className={`mt-3 ${darkMode ? "text-zinc-400" : "text-gray-600"}`}>
          Whether you have a question about products, pricing, or anything else —
          our team is ready to answer all your questions.
        </p>
      </div>

      {/* NEWSLETTER */}
      <NewsletterBox />
    </div>
  );
};

export default Contact;