import { useContext, useEffect, useState } from "react";
import { ShopContext } from "../context/ShopContext";
import { useSearchParams } from "react-router-dom";
import { toast } from "react-toastify";
import axios from "axios";

const Verify = () => {
  const {
    navigate,
    token,
    setCartItems,
    backendUrl,
    darkMode, // ✅ context
  } = useContext(ShopContext);

  const [searchParams] = useSearchParams();

  const success = searchParams.get("success");
  const orderId = searchParams.get("orderId");

  const [status, setStatus] = useState("loading"); // loading | success | failed

  const verifyPayment = async () => {
    try {
      if (!token) return;

      const res = await axios.post(
        backendUrl + "/api/order/verifystripe",
        { success, orderId },
        { headers: { token } }
      );

      if (res.data.success) {
        setCartItems({});
        setStatus("success");

        setTimeout(() => {
          navigate("/orders");
        }, 2000);
      } else {
        setStatus("failed");

        setTimeout(() => {
          navigate("/cart");
        }, 2000);
      }
    } catch (error) {
      toast.error(error.message);
      setStatus("failed");
    }
  };

  useEffect(() => {
    verifyPayment();
  }, [token]);

  return (
    <div
      className={`flex items-center justify-center min-h-screen transition
        ${
          darkMode
            ? "bg-zinc-950 text-white"
            : "bg-gray-100 text-gray-900"
        }`}
    >
      <div
        className={`p-8 rounded-md border text-center space-y-4 w-[90%] max-w-md
          ${
            darkMode
              ? "bg-zinc-900 border-zinc-700"
              : "bg-white border-gray-200"
          }`}
      >
        {/* LOADING */}
        {status === "loading" && (
          <>
            <div className="animate-spin w-10 h-10 border-4 border-amber-500 border-t-transparent rounded-full mx-auto"></div>
            <p className="text-sm">Verifying your payment...</p>
          </>
        )}

        {/* SUCCESS */}
        {status === "success" && (
          <>
            <div className="text-4xl">✅</div>
            <h2 className="text-xl font-semibold text-green-500">
              Payment Successful
            </h2>
            <p className="text-sm text-zinc-400">
              Redirecting to your orders...
            </p>
          </>
        )}

        {/* FAILED */}
        {status === "failed" && (
          <>
            <div className="text-4xl">❌</div>
            <h2 className="text-xl font-semibold text-red-500">
              Payment Failed
            </h2>
            <p className="text-sm text-zinc-400">
              Redirecting back to cart...
            </p>
          </>
        )}
      </div>
    </div>
  );
};

export default Verify;