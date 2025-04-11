import React from 'react';
import { motion } from 'framer-motion';

const Footer = () => {
  return (
    <motion.footer
      className="bg-gray-100 dark:bg-zinc-900 text-gray-700 dark:text-gray-300 border-t border-gray-300 dark:border-zinc-700 mt-20 py-12 px-6 transition-colors duration-300"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
    >
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 text-left">
        {/* Brand */}
        <div>
          <h3 className="text-2xl font-bold text-green-700 dark:text-green-400 mb-2">🥗 NutriAI</h3>
          <p className="text-sm">
            Fuel your goals, one meal at a time. Track meals, scan food, and manage health with smart AI insights.
          </p>
        </div>

        {/* About */}
        <div>
          <h4 className="text-lg font-semibold text-green-700 dark:text-green-400 mb-2">About Us</h4>
          <ul className="space-y-1 text-sm">
            <li>Built during a Hackathon by <span className="font-medium">Team GRAVITY</span></li>
            <li>Driven by a mission to make nutrition simple and smart.</li>
            <li>AI-powered insights tailored to your lifestyle.</li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h4 className="text-lg font-semibold text-green-700 dark:text-green-400 mb-2">Contact</h4>
          <ul className="space-y-1 text-sm">
            <li>Email: support@nutri-ai.app</li>
            <li>Phone: +91 98765 43210</li>
            <li>Location: Bengaluru, India</li>
          </ul>
        </div>

        {/* Product Info */}
        <div>
          <h4 className="text-lg font-semibold text-green-700 dark:text-green-400 mb-2">Product</h4>
          <ul className="space-y-1 text-sm">
            <li>🧠 AI Food Scanner</li>
            <li>📊 Personalized Calorie Goals</li>
            <li>💧 Hydration Reminders</li>
            <li>🧾 Meal Logs & History</li>
          </ul>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="mt-10 text-center text-sm text-gray-600 dark:text-gray-500 space-y-1">
        <p>Free 30-day trial • ₹99/month after • Cancel anytime</p>
        <p>© {new Date().getFullYear()} NutriAI by Team GRAVITY — All rights reserved</p>
      </div>
    </motion.footer>
  );
};

export default Footer;
