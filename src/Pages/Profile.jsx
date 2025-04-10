import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const Profile = () => {
  const [email, setEmail] = useState('');
  const [startDate, setStartDate] = useState('');
  const [daysLeft, setDaysLeft] = useState(30);
  const [calorieLogs, setCalorieLogs] = useState([]);

  useEffect(() => {
    const userEmail = localStorage.getItem('userEmail');
    let trialStart = localStorage.getItem('trialStart');
    const logs = JSON.parse(localStorage.getItem('calorieLogs')) || [];

    if (!trialStart) {
      const today = new Date().toISOString();
      localStorage.setItem('trialStart', today);
      trialStart = today;
    }

    setEmail(userEmail);
    setStartDate(new Date(trialStart).toDateString());
    setCalorieLogs(logs);

    const msInDay = 1000 * 60 * 60 * 24;
    const elapsed = Math.floor((Date.now() - new Date(trialStart)) / msInDay);
    setDaysLeft(Math.max(0, 30 - elapsed));
  }, []);

  return (
    <div className="min-h-screen px-6 pt-28 pb-12 bg-gray-50 dark:bg-zinc-900 text-gray-900 dark:text-gray-100 transition-colors duration-300">
      <motion.div
        className="max-w-xl mx-auto bg-white dark:bg-zinc-800 p-6 rounded-2xl shadow-lg"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-3xl font-bold mb-6 text-green-600 dark:text-green-400 text-center">
          My Profile
        </h2>

        <div className="text-lg space-y-4 mb-8">
          <p>
            <strong>Email:</strong>{' '}
            <span className="text-gray-700 dark:text-gray-200">
              {email || 'Not logged in'}
            </span>
          </p>
          <p>
            <strong>Trial Started:</strong>{' '}
            <span className="text-gray-700 dark:text-gray-200">{startDate}</span>
          </p>
          <p>
            <strong>Days Left in Free Trial:</strong>{' '}
            <span
              className={`font-semibold ${
                daysLeft <= 5 ? 'text-red-500' : 'text-green-600 dark:text-green-300'
              }`}
            >
              {daysLeft} day(s)
            </span>
          </p>
        </div>

        <h3 className="text-xl font-semibold mb-3 text-gray-800 dark:text-gray-100">
          📝 Calorie Log
        </h3>

        {calorieLogs.length > 0 ? (
          <ul className="space-y-2">
            {calorieLogs.map((log, index) => (
              <li
                key={index}
                className="border border-gray-200 dark:border-zinc-700 rounded-xl p-3 bg-gray-100 dark:bg-zinc-700"
              >
                <strong>{log.food}</strong> – {log.calories} cal on{' '}
                <span className="text-sm text-gray-600 dark:text-gray-300">
                  {new Date(log.date).toLocaleDateString()}
                </span>
              </li>
            ))}
          </ul>
        ) : (
          <p className="text-gray-500 dark:text-gray-400">No meals logged yet.</p>
        )}
      </motion.div>
    </div>
  );
};

export default Profile;
