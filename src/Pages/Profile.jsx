import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const Profile = () => {
  const [email, setEmail] = useState('');
  const [startDate, setStartDate] = useState('');
  const [daysLeft, setDaysLeft] = useState(30);
  const [calorieLogs, setCalorieLogs] = useState([]);
  const [userGoals, setUserGoals] = useState({ weight: '', goal: '' });

  useEffect(() => {
    const userEmail = localStorage.getItem('userEmail');
    let trialStart = localStorage.getItem('trialStart');
    const logs = JSON.parse(localStorage.getItem('calorieLogs')) || [];
    const goalData = JSON.parse(localStorage.getItem('userGoals')) || { weight: 0, goal: 'Maintain' };

    if (!trialStart) {
      const today = new Date().toISOString();
      localStorage.setItem('trialStart', today);
      trialStart = today;
    }

    setEmail(userEmail);
    setStartDate(new Date(trialStart).toDateString());
    setCalorieLogs(logs);
    setUserGoals(goalData);

    const msInDay = 1000 * 60 * 60 * 24;
    const elapsed = Math.floor((Date.now() - new Date(trialStart)) / msInDay);
    setDaysLeft(Math.max(0, 30 - elapsed));
  }, []);

  const totalCalories = calorieLogs.reduce((sum, log) => sum + parseInt(log.calories), 0);

  return (
    <div className="min-h-screen px-6 pt-28 pb-12 bg-gray-50 dark:bg-zinc-900 text-gray-900 dark:text-gray-100 transition-colors duration-300">
      <motion.div
        className="max-w-5xl mx-auto bg-white dark:bg-zinc-800 p-6 rounded-2xl shadow-lg space-y-10"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-4xl font-bold text-center text-green-600 dark:text-green-400">
          👤 My Profile
        </h2>

        {/* Info Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-lg">
          <div className="bg-gray-100 dark:bg-zinc-700 p-5 rounded-xl space-y-3">
            <p><strong>Email:</strong> {email || 'Not logged in'}</p>
            <p><strong>Trial Started:</strong> {startDate}</p>
            <p>
              <strong>Trial Left:</strong>{' '}
              <span className={`${daysLeft <= 5 ? 'text-red-500' : 'text-green-600 dark:text-green-300'} font-semibold`}>
                {daysLeft} day(s)
              </span>
            </p>
            <p><strong>Subscription:</strong> {daysLeft > 0 ? 'Free Trial Active' : 'Expired'}</p>
          </div>

          <div className="bg-gray-100 dark:bg-zinc-700 p-5 rounded-xl space-y-3">
            <p><strong>Current Weight:</strong> {userGoals.weight} kg</p>
            <p><strong>Goal:</strong> {userGoals.goal}</p>
            <p><strong>Total Calories Logged:</strong> {totalCalories} kcal</p>
            <p><strong>Meals Logged:</strong> {calorieLogs.length} meals</p>
          </div>
        </div>

        {/* Logs Section */}
        <div>
          <h3 className="text-2xl font-bold mb-4 text-green-600 dark:text-green-400">
            📝 Calorie Log
          </h3>
          {calorieLogs.length > 0 ? (
            <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {calorieLogs.map((log, index) => (
                <li
                  key={index}
                  className="border border-gray-200 dark:border-zinc-600 rounded-xl p-4 bg-gray-100 dark:bg-zinc-700 text-base"
                >
                  <strong>{log.food}</strong> — {log.calories} kcal
                  <br />
                  <span className="text-sm text-gray-500 dark:text-gray-300">
                    {new Date(log.date).toLocaleDateString()}
                  </span>
                </li>
              ))}
            </ul>
          ) : (
            <p className="text-gray-500 dark:text-gray-400">No meals logged yet.</p>
          )}
        </div>

        {/* CTA */}
        {daysLeft === 0 && (
          <motion.div
            className="bg-red-100 dark:bg-red-800 text-red-700 dark:text-red-200 p-4 rounded-xl text-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            Your free trial has ended. <strong>Upgrade</strong> now to continue tracking!
          </motion.div>
        )}
      </motion.div>
    </div>
  );
};

export default Profile;
