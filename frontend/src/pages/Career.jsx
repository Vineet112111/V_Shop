import { useContext } from "react";
import { ShopContext } from "../context/ShopContext";
import Title from "../components/Title";

const Career = () => {
  const { darkMode } = useContext(ShopContext);

  return (
    <div
      className={`min-h-screen transition-colors duration-300 px-6 md:px-16 py-12 ${
        darkMode ? "bg-zinc-950 text-white" : "bg-white text-gray-800"
      }`}
    >
      {/* HERO */}
      <div className="text-center max-w-3xl mx-auto">
        <h1 className="text-3xl md:text-5xl font-bold">
          <Title text1={"Join Our"} text2={"Team "} />
        </h1>
        <p
          className={`mt-4 ${
            darkMode ? "text-zinc-400" : "text-gray-600"
          }`}
        >
          Be a part of V_Shop and help us redefine fashion with innovation,
          creativity, and passion.
        </p>
      </div>

      {/* JOB LIST */}
      <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {/* CARD */}
        {[
          {
            role: "Backend Developer",
            type: "Full Time",
            location: "Remote",
          },
          {
            role: "UI/UX Designer",
            type: "Internship",
            location: "Remote",
          },
          {
            role: "Digital Marketing",
            type: "Part Time",
            location: "Hybrid",
          },
        ].map((job, i) => (
          <div
            key={i}
            className={`p-6 rounded-2xl shadow-md transition hover:scale-105 ${
              darkMode
                ? "bg-zinc-900 border border-zinc-800"
                : "bg-gray-100"
            }`}
          >
            <h2 className="text-xl font-semibold">{job.role}</h2>
            <p
              className={`mt-2 ${
                darkMode ? "text-zinc-400" : "text-gray-600"
              }`}
            >
              {job.type} • {job.location}
            </p>

            <button
              className="mt-4 px-4 py-2 rounded-lg bg-amber-500 text-black font-medium hover:opacity-90"
            >
              Apply Now
            </button>
          </div>
        ))}
      </div>

      {/* WHY JOIN US */}
      <div className="mt-20 text-center">
        <h2 className="text-2xl md:text-3xl font-bold">
          Why Work With Us?
        </h2>

        <div className="grid md:grid-cols-3 gap-6 mt-10">
          {[
            "Flexible Work Environment",
            "Growth Opportunities",
            "Creative Freedom",
          ].map((item, i) => (
            <div
              key={i}
              className={`p-6 rounded-xl ${
                darkMode
                  ? "bg-zinc-900 border border-zinc-800"
                  : "bg-gray-100"
              }`}
            >
              <p className="font-medium">{item}</p>
            </div>
          ))}
        </div>
      </div>

      {/* CTA */}
      <div className="mt-20 text-center">
        <h2 className="text-xl font-semibold">
          Didn’t find a suitable role?
        </h2>
        <p
          className={`mt-2 ${
            darkMode ? "text-zinc-400" : "text-gray-600"
          }`}
        >
          Send your resume to
        </p>
        <p className="text-amber-500 mt-1 font-medium">
          careers@vshop.com
        </p>
      </div>
    </div>
  );
};

export default Career;