import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';

import Login from './Pages/Login';
import Home from './Pages/Home';
import Search from './Pages/Search';
import Scanner from './Pages/Scanner';
import Chatbot from './Pages/Chatbot';
import Profile from './Pages/Profile';

const AppWrapper = () => {
  const location = useLocation();

  return (
    <>
      {location.pathname !== '/' && <Navbar />}

      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/home" element={<Home />} />
        <Route path="/search" element={<Search />} />
        <Route path="/scanner" element={<Scanner />} />
        <Route path="/chatbot" element={<Chatbot />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>

      {location.pathname !== '/' && <Footer />}
    </>
  );
};

const App = () => {
  return (
    <Router>
      <AppWrapper />
    </Router>
  );
};

export default App;
