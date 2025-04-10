import React from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';

const Navbar = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const currentPath = location.pathname;

  const isActive = (path) =>
    currentPath === path
      ? 'text-green-500 font-bold underline underline-offset-4'
      : 'text-gray-200 hover:text-green-300 transition duration-300';

  const handleLogout = () => {
    localStorage.clear();
    navigate('/');
  };

  return (
    <nav className="backdrop-blur-lg bg-black/60 shadow-md px-8 py-5 flex justify-between items-center fixed top-0 left-0 right-0 z-50">
      <Link
        to="/home"
        className="text-3xl font-extrabold text-green-400 hover:scale-105 transform transition duration-300"
      >
        🍽️ Nutrition Tracker
      </Link>

      <div className="flex items-center gap-8 text-lg font-medium">
        <Link to="/home" className={isActive('/home')}>
          Home
        </Link>
        <Link to="/search" className={isActive('/search')}>
          Calorie Search
        </Link>
        <Link to="/scanner" className={isActive('/scanner')}>
          Scanner
        </Link>
        <Link to="/chatbot" className={isActive('/chatbot')}>
          AI Assistant
        </Link>
        <Link to="/profile" className={isActive('/profile')}>
          Profile
        </Link>

        <button
          onClick={handleLogout}
          className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-xl transition duration-300 text-sm shadow-md"
        >
          Logout
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
