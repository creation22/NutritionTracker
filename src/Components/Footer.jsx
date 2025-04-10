import React from 'react';
import { motion } from 'framer-motion';

const Footer = () => {
  return (
    <motion.footer
      className="bg-gray-100 dark:bg-zinc-900 text-gray-700 dark:text-gray-300 border-t border-gray-300 dark:border-zinc-700 mt-20 py-10 px-4 text-center transition-colors duration-300"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
    >
      <div className="max-w-4xl mx-auto space-y-4">
        <p className="text-xl font-semibold text-green-700 dark:text-green-400">
          🥗 Nutrition Tracker — Fuel your goals, one meal at a time
        </p>
        <p className="text-base">
          Built with 💚 during a Hackathon by Team <span className="font-bold text-green-600 dark:text-green-400">VORTEX</span>
        </p>
        <p className="text-sm text-gray-600 dark:text-gray-400">
          Free 30-day trial • ₹99/month after • Cancel anytime
        </p>
        <p className="text-xs text-gray-500 dark:text-gray-500">
          © {new Date().getFullYear()} Nutrition Tracker — All rights reserved
        </p>
      </div>
    </motion.footer>
  );
};

export default Footer;
