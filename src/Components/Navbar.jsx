import React from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';

const Navbar = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const currentPath = location.pathname;

  const isActive = (path) =>
    currentPath === path ? 'text-green-600 font-bold' : 'text-gray-700';

  const handleLogout = () => {
    localStorage.clear();
    navigate('/');
  };

  return (
    <nav className="bg-white shadow-md px-6 py-4 flex justify-between items-center">
      <Link to="/home" className="text-2xl font-bold text-green-600">
        🍽️ Nutrition Tracker
      </Link>

      <div className="flex items-center space-x-6 text-md">
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
          className="bg-red-500 text-white px-3 py-1 rounded-xl hover:bg-red-600 transition text-sm"
        >
          Logout
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
