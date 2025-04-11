import React, { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const currentPath = location.pathname;
  const [menuOpen, setMenuOpen] = useState(false);

  const isActive = (path) =>
    currentPath === path
      ? 'text-green-400 font-bold underline underline-offset-4'
      : 'text-gray-200 hover:text-green-300 transition duration-300';

  const handleLogout = () => {
    localStorage.clear();
    navigate('/');
  };

  return (
    <nav className="backdrop-blur-lg bg-black/60 shadow-md px-6 py-4 flex justify-between items-center fixed top-0 left-0 right-0 z-50">
      <Link
        to="/home"
        className="text-2xl md:text-3xl font-extrabold text-green-400 hover:scale-105 transform transition duration-300"
      >
        🍽️ NutriAI
      </Link>

      {/* Desktop menu */}
      <div className="hidden md:flex items-center gap-6 text-base md:text-lg font-medium">
        <Link to="/home" className={isActive('/home')}>
          Home
        </Link>
        <Link to="/search" className={isActive('/search')}>
          Calorie Count
        </Link>
        <Link to="/scanner" className={isActive('/scanner')}>
          Scanner & Search
        </Link>
        <Link to="/chatbot" className={isActive('/chatbot')}>
          AI Assistant
        </Link>
        <Link to="/profile" className={isActive('/profile')}>
          Profile
        </Link>
        <button
          onClick={handleLogout}
          className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-xl text-sm shadow-md transition"
        >
          Logout
        </button>
      </div>

      {/* Mobile hamburger icon */}
      <div className="md:hidden">
        <button onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <X className="text-white w-6 h-6" /> : <Menu className="text-white w-6 h-6" />}
        </button>
      </div>

      {/* Mobile dropdown menu */}
      {menuOpen && (
        <div className="absolute top-20 right-4 bg-zinc-800 rounded-xl shadow-lg text-white w-56 p-5 flex flex-col space-y-4 text-sm z-50">
          <Link to="/home" className={isActive('/home')} onClick={() => setMenuOpen(false)}>
            Home
          </Link>
          <Link to="/search" className={isActive('/search')} onClick={() => setMenuOpen(false)}>
            Calorie Count
          </Link>
          <Link to="/scanner" className={isActive('/scanner')} onClick={() => setMenuOpen(false)}>
            Scanner & Search
          </Link>
          <Link to="/chatbot" className={isActive('/chatbot')} onClick={() => setMenuOpen(false)}>
            AI Assistant
          </Link>
          <Link to="/profile" className={isActive('/profile')} onClick={() => setMenuOpen(false)}>
            Profile
          </Link>
          <button
            onClick={() => {
              handleLogout();
              setMenuOpen(false);
            }}
            className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-xl text-sm shadow-md transition"
          >
            Logout
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
