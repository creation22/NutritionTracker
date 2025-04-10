import React from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    navigate("/home");
  };

  const handleGuestAccess = () => {
    navigate("/home");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white px-4 py-10 flex items-center justify-center">
      <div className="w-full max-w-4xl rounded-3xl bg-gray-950 shadow-2xl p-8 md:p-12 border border-gray-800 transition-all duration-300 animate-fade-in">
        <h1 className="text-4xl font-bold text-center mb-4 animate-slide-up">🌱 Welcome to Nutrition Tracker</h1>
        <p className="text-center text-gray-300 mb-10 text-lg">
          Track your calories, scan food items, get smart nutrition advice — all in one place.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {/* Left Section - Info */}
          <div className="space-y-6 text-gray-300">
            <div>
              <h2 className="text-2xl font-semibold text-green-400">✨ Features</h2>
              <ul className="mt-2 space-y-2 text-sm">
                <li className="hover:text-white transition duration-200">🔍 Calorie Counter & Food Search</li>
                <li className="hover:text-white transition duration-200">📷 Barcode & Image Scanner</li>
                <li className="hover:text-white transition duration-200">🤖 AI-Powered Nutrition Chatbot</li>
                <li className="hover:text-white transition duration-200">📊 Daily Calorie Logs & Stats</li>
              </ul>
            </div>

            <div className="mt-6">
              <h2 className="text-2xl font-semibold text-green-400">💰 Monetization</h2>
              <p className="text-sm mt-2">
                Enjoy a free 30-day trial. Afterwards, continue your journey for just <span className="text-green-300 font-semibold">₹99/month</span>.
              </p>
            </div>
          </div>

          {/* Right Section - Login */}
          <form
            onSubmit={handleLogin}
            className="bg-gray-900 p-6 rounded-2xl space-y-6 border border-gray-800 animate-fade-in-down"
          >
            <label className="block">
              <span className="text-gray-300 text-sm">Email Address</span>
              <input
                type="email"
                required
                placeholder="you@example.com"
                className="w-full mt-2 p-2 bg-gray-800 border border-gray-700 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-green-500 transition"
              />
            </label>
            <button
              type="submit"
              className="w-full bg-green-500 hover:bg-green-600 transition-all py-2 rounded-xl text-white font-semibold shadow-lg hover:shadow-green-600/50"
            >
              Continue with Email
            </button>

            <div className="text-center text-sm text-gray-500">or</div>

            <button
              type="button"
              onClick={handleGuestAccess}
              className="w-full bg-gray-700 hover:bg-gray-600 transition-all py-2 rounded-xl text-white font-medium"
            >
              Use App without Login
            </button>
          </form>
        </div>

        <p className="text-center text-xs text-gray-500 mt-10">
          Built with 💚 for Hackathons — Eat smart. Live better.
        </p>
      </div>
    </div>
  );
};

export default Login;
