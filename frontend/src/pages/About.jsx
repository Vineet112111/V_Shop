import { useContext } from "react";
import { ShopContext } from "../context/ShopContext";
import Title from "../components/Title";
import { assets } from "../assets/assets";
import NewsletterBox from "../components/NewsletterBox";

const About = () => {

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
      <div className="text-2xl text-center pt-8 border-t border-zinc-300 dark:border-zinc-800">
        <Title text1={"ABOUT"} text2={"US"} />
      </div>

      {/* ABOUT SECTION */}
      <div className="my-12 flex flex-col md:flex-row gap-12 items-center">

        {/* IMAGE */}
        <img
          src={assets.about_img}
          className="w-full md:max-w-[450px] rounded-md shadow-md"
          alt=""
        />

        {/* TEXT */}
        <div
          className={`flex flex-col justify-center gap-5 md:w-2/4 ${
            darkMode ? "text-zinc-400" : "text-gray-600"
          }`}
        >

          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor
            quidem culpa sapiente necessitatibus similique, quaerat nisi fugiat
            at officiis tempora laboriosam ipsam iusto.
          </p>

          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta a
            doloremque vitae consectetur, quas earum voluptatum nobis itaque.
          </p>

          <b className={darkMode ? "text-white" : "text-gray-800"}>
            Our Mission
          </b>

          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit
            eius officia fugit sequi libero possimus temporibus commodi.
          </p>

        </div>

      </div>

      {/* WHY CHOOSE US */}
      <div className="text-xl py-6 text-center">
        <Title text1={"WHY"} text2={"CHOOSE US"} />
      </div>

      {/* CARDS */}
      <div className="flex flex-col md:flex-row gap-6 mb-20">

        {/* CARD 1 */}
        <div
          className={`flex-1 p-6 md:p-10 rounded-md border transition ${
            darkMode
              ? "bg-zinc-900 border-zinc-700"
              : "bg-white border-gray-200 hover:shadow-md"
          }`}
        >
          <b>Quality Assurance:</b>
          <p className={`mt-2 ${
            darkMode ? "text-zinc-400" : "text-gray-600"
          }`}>
            We meticulously select and vet each product to ensure it meets our
            stringent quality standard.
          </p>
        </div>

        {/* CARD 2 */}
        <div
          className={`flex-1 p-6 md:p-10 rounded-md border transition ${
            darkMode
              ? "bg-zinc-900 border-zinc-700"
              : "bg-white border-gray-200 hover:shadow-md"
          }`}
        >
          <b>Convenience:</b>
          <p className={`mt-2 ${
            darkMode ? "text-zinc-400" : "text-gray-600"
          }`}>
            With our user-friendly interface and hassle-free ordering process,
            shopping has never been easier.
          </p>
        </div>

        {/* CARD 3 */}
        <div
          className={`flex-1 p-6 md:p-10 rounded-md border transition ${
            darkMode
              ? "bg-zinc-900 border-zinc-700"
              : "bg-white border-gray-200 hover:shadow-md"
          }`}
        >
          <b>Exceptional Customer Service:</b>
          <p className={`mt-2 ${
            darkMode ? "text-zinc-400" : "text-gray-600"
          }`}>
            Our team of dedicated professionals is here to assist you anytime,
            ensuring your satisfaction is our top priority.
          </p>
        </div>

      </div>

      {/* NEWSLETTER */}
      <NewsletterBox />

    </div>
  );
};

export default About;