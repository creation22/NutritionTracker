import React from 'react';
import { Link } from 'react-router-dom';
import { FaSearch, FaBarcode, FaRobot, FaUser } from 'react-icons/fa';

const Home = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-white px-6 py-10">
      <div className="max-w-5xl mx-auto text-center">
        <h1 className="text-4xl md:text-5xl font-bold text-green-700 mb-4">
          Welcome to Nutrition Tracker 🌱
        </h1>
        <p className="text-gray-600 text-lg max-w-xl mx-auto mb-10">
          Track your calories, scan food items, ask questions to our AI assistant,
          and manage your nutrition effortlessly.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <Link
            to="/search"
            className="bg-white border hover:shadow-xl transition rounded-2xl p-6 flex flex-col items-center justify-center text-green-700"
          >
            <FaSearch size={32} className="mb-3" />
            <h3 className="text-xl font-semibold mb-1">Calorie Search</h3>
            <p className="text-sm text-gray-500 text-center">
              Look up calories in your favorite foods instantly.
            </p>
          </Link>

          <Link
            to="/scanner"
            className="bg-white border hover:shadow-xl transition rounded-2xl p-6 flex flex-col items-center justify-center text-green-700"
          >
            <FaBarcode size={32} className="mb-3" />
            <h3 className="text-xl font-semibold mb-1">Food Scanner</h3>
            <p className="text-sm text-gray-500 text-center">
              Scan barcodes or images to get accurate nutrition info.
            </p>
          </Link>

          <Link
            to="/chatbot"
            className="bg-white border hover:shadow-xl transition rounded-2xl p-6 flex flex-col items-center justify-center text-green-700"
          >
            <FaRobot size={32} className="mb-3" />
            <h3 className="text-xl font-semibold mb-1">AI Assistant</h3>
            <p className="text-sm text-gray-500 text-center">
              Ask anything about nutrition, health, or food tips.
            </p>
          </Link>

          <Link
            to="/profile"
            className="bg-white border hover:shadow-xl transition rounded-2xl p-6 flex flex-col items-center justify-center text-green-700"
          >
            <FaUser size={32} className="mb-3" />
            <h3 className="text-xl font-semibold mb-1">My Profile</h3>
            <p className="text-sm text-gray-500 text-center">
              View your details, calorie log, and trial status.
            </p>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
