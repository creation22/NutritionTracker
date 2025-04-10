import React from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    // You can add email logic later if backend is implemented
    navigate("/home");
  };

  const handleGuestAccess = () => {
    navigate("/home");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-100 to-white flex flex-col items-center justify-center px-4 py-10">
      <div className="max-w-3xl w-full bg-white rounded-3xl shadow-xl p-8 md:p-12">
        <h1 className="text-4xl font-bold text-green-700 text-center mb-4">
          Welcome to Nutrition Tracker 🌱
        </h1>
        <p className="text-center text-gray-600 mb-8 text-lg">
          Track your calories, scan food, ask our AI, and get personalized insights — all in one place.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
          <div className="space-y-4 text-gray-700">
            <h3 className="text-xl font-semibold text-green-600">✨ Features:</h3>
            <ul className="list-disc list-inside space-y-1">
              <li>🔍 Calorie Counter & Food Search</li>
              <li>📷 Barcode/Image Scanner</li>
              <li>🤖 AI Nutrition Chatbot</li>
              <li>📊 Calorie Log & Daily Stats</li>
            </ul>

            <h3 className="text-xl font-semibold mt-6 text-green-600">💰 Monetization:</h3>
            <p className="text-sm">
              Free 30-day trial for everyone. After that, just ₹99/month for full access.
            </p>
          </div>

          <form onSubmit={handleLogin} className="space-y-4 bg-gray-50 p-6 rounded-xl shadow-inner">
            <label className="block text-gray-700 text-sm font-medium">
              Email Address
              <input
                type="email"
                required
                placeholder="you@example.com"
                className="mt-1 w-full p-2 rounded-lg border border-gray-300"
              />
            </label>
            <button
              type="submit"
              className="w-full bg-green-600 text-white py-2 rounded-xl hover:bg-green-700 transition"
            >
              Continue with Email
            </button>

            <div className="text-center text-sm text-gray-500">or</div>

            <button
              type="button"
              onClick={handleGuestAccess}
              className="w-full bg-gray-200 hover:bg-gray-300 text-gray-700 py-2 rounded-xl transition"
            >
              Use App without Login
            </button>
          </form>
        </div>

        <p className="text-center text-xs text-gray-400 mt-6">
          Made for Hackathons 💚 • Track smart. Eat smarter.
        </p>
      </div>
    </div>
  );
};

export default Login;
