import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [email, setEmail] = useState('');
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();

    // Simulate storing user session in localStorage
    localStorage.setItem('userEmail', email);
    navigate('/home'); // Redirect to Home page
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-green-100 to-white">
      <div className="bg-white p-10 rounded-2xl shadow-lg w-full max-w-md">
        <h2 className="text-3xl font-bold text-green-600 mb-4 text-center">
          Welcome to Nutrition Tracker 🥗
        </h2>
        <p className="text-gray-600 mb-6 text-center">
          Start your <strong>30-day free trial</strong> now!
        </p>

        <form onSubmit={handleLogin} className="flex flex-col gap-4">
          <input
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
            className="border border-gray-300 rounded-xl px-4 py-2"
          />
          <button
            type="submit"
            className="bg-green-500 text-white py-2 rounded-xl hover:bg-green-600 transition"
          >
            Get Started
          </button>
        </form>

        <p className="text-center text-sm text-gray-500 mt-4">
          No card required. ₹99/month after trial.
        </p>
      </div>
    </div>
  );
};

export default Login;
