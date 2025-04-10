import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-white border-t mt-12 py-4 text-center text-sm text-gray-600">
      <p>
        © {new Date().getFullYear()} Nutrition Tracker — Built with 💚 at a Hackathon by team VORTEX
      </p>
      <p className="mt-1">
        Free trial for 30 days • ₹99/month after
      </p>
    </footer>
  );
};

export default Footer;
