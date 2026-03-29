import { useContext } from "react";
import { ShopContext } from "../context/ShopContext";
import Title from "../components/Title";

const Privacy = () => {
  const { darkMode } = useContext(ShopContext);

  return (
    <div className={`min-h-screen px-6 py-12 ${darkMode ? "bg-zinc-950 text-white" : "bg-white text-gray-800"}`}>
      <div className="text-center text-3xl  mb-10">
        <Title text1="PRIVACY" text2="POLICY" />
      </div>

      <div className="max-w-3xl mx-auto space-y-4 text-sm leading-relaxed">
        <p>
          We value your privacy. Your personal data is collected only to improve your shopping experience.
        </p>
        <p>
          We do not sell or share your information with third parties.
        </p>
        <p>
          Your payment details are securely processed through trusted payment gateways.
        </p>
        <p>
          By using our website, you agree to our privacy policy.
        </p>
      </div>
    </div>
  );
};

export default Privacy;
