import React from 'react';
import { Link } from 'react-router-dom';
import { FaSearch, FaBarcode, FaRobot, FaUser } from 'react-icons/fa';

const Home = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-gray-800 px-6 py-20 text-white">
      <div className="max-w-6xl mx-auto text-center">
        <h1 className="text-5xl md:text-6xl font-extrabold text-green-400 mb-6 drop-shadow-lg">
          Your Personal Health Companion 🍽️
        </h1>
        <p className="text-gray-300 text-lg md:text-xl max-w-3xl mx-auto mb-12">
          Discover, track, and improve your nutrition with powerful tools like AI,
          calorie search, and scanning – all in one seamless experience.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          <Link
            to="/search"
            className="bg-gradient-to-br from-green-500 to-green-700 hover:scale-105 hover:shadow-2xl transition-transform duration-300 rounded-3xl p-6 flex flex-col items-center justify-center text-white"
          >
            <FaSearch size={36} className="mb-4 animate-pulse" />
            <h3 className="text-2xl font-bold mb-2">Calorie Search</h3>
            <p className="text-sm text-center opacity-80">
              Instantly check calories in any food or meal.
            </p>
          </Link>

          <Link
            to="/scanner"
            className="bg-gradient-to-br from-purple-500 to-purple-700 hover:scale-105 hover:shadow-2xl transition-transform duration-300 rounded-3xl p-6 flex flex-col items-center justify-center text-white"
          >
            <FaBarcode size={36} className="mb-4 animate-bounce" />
            <h3 className="text-2xl font-bold mb-2">Food Scanner</h3>
            <p className="text-sm text-center opacity-80">
              Scan barcodes or photos to reveal nutrition info.
            </p>
          </Link>

          <Link
            to="/chatbot"
            className="bg-gradient-to-br from-blue-500 to-blue-700 hover:scale-105 hover:shadow-2xl transition-transform duration-300 rounded-3xl p-6 flex flex-col items-center justify-center text-white"
          >
            <FaRobot size={36} className="mb-4 animate-spin-slow" />
            <h3 className="text-2xl font-bold mb-2">AI Assistant</h3>
            <p className="text-sm text-center opacity-80">
              Ask nutrition questions and get instant answers.
            </p>
          </Link>

          <Link
            to="/profile"
            className="bg-gradient-to-br from-pink-500 to-pink-700 hover:scale-105 hover:shadow-2xl transition-transform duration-300 rounded-3xl p-6 flex flex-col items-center justify-center text-white"
          >
            <FaUser size={36} className="mb-4 animate-fade" />
            <h3 className="text-2xl font-bold mb-2">My Profile</h3>
            <p className="text-sm text-center opacity-80">
              Manage your goals, data, and subscription.
            </p>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
