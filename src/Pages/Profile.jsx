import React, { useEffect, useState } from 'react';

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
    <div className="min-h-screen bg-gray-50 p-8 text-gray-800">
      <div className="max-w-xl mx-auto bg-white p-6 rounded-2xl shadow-lg">
        <h2 className="text-3xl font-bold mb-4 text-green-600 text-center">
          My Profile
        </h2>

        <div className="text-lg space-y-3 mb-6">
          <p>
            <strong>Email:</strong> {email || 'Not logged in'}
          </p>
          <p>
            <strong>Trial Started:</strong> {startDate}
          </p>
          <p>
            <strong>Days Left in Free Trial:</strong>{' '}
            <span className={daysLeft <= 5 ? 'text-red-500' : 'text-green-600'}>
              {daysLeft} day(s)
            </span>
          </p>
        </div>

        <h3 className="text-xl font-semibold mb-2 text-gray-700">Calorie Log</h3>
        {calorieLogs.length > 0 ? (
          <ul className="space-y-2">
            {calorieLogs.map((log, index) => (
              <li
                key={index}
                className="border border-gray-200 rounded-xl p-3 bg-gray-100"
              >
                <strong>{log.food}</strong> - {log.calories} cal on{' '}
                {new Date(log.date).toLocaleDateString()}
              </li>
            ))}
          </ul>
        ) : (
          <p className="text-gray-500">No meals logged yet.</p>
        )}
      </div>
    </div>
  );
};

export default Profile;
