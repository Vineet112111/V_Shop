import { useContext } from "react";
import { ShopContext } from "../context/ShopContext";
import { assets } from "../assets/assets";
import NewsletterBox from "../components/NewsletterBox";
import Title from "../components/Title";

const Contact = () => {

  const { darkMode } = useContext(ShopContext);

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
          className="w-full md:max-w-[480px] rounded-md shadow-md"
          alt=""
        />

        {/* CONTENT */}
        <div className="flex flex-col justify-center items-start gap-6">

          <p className={`font-semibold text-xl ${
            darkMode ? "text-white" : "text-gray-700"
          }`}>
            Our Store
          </p>

          <p className={`${darkMode ? "text-zinc-400" : "text-gray-500"}`}>
            54709 Willms Station <br /> Suite 350, Washington, USA
          </p>

          <p className={`${darkMode ? "text-zinc-400" : "text-gray-500"}`}>
            Tel: (415) 666-0132 <br />
            Email: admin@forever.com
          </p>

          <p className={`font-semibold text-xl ${
            darkMode ? "text-white" : "text-gray-700"
          }`}>
            Careers at Forever
          </p>

          <p className={`${darkMode ? "text-zinc-400" : "text-gray-500"}`}>
            Learn more about our teams and job openings.
          </p>

          {/* BUTTON */}
          <button
            className="
              px-8 py-3 text-sm tracking-wide rounded-md
              border border-zinc-400 dark:border-zinc-600
              hover:bg-amber-500 hover:border-amber-500 hover:text-white
              dark:hover:bg-amber-400 dark:hover:text-zinc-950
              transition-all duration-300
            "
          >
            Explore Jobs
          </button>

        </div>

      </div>

      {/* NEWSLETTER */}
      <NewsletterBox />

    </div>
  );
};

export default Contact;