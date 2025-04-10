import React, { useState } from 'react';
import { motion } from 'framer-motion';

const mockFoodData = {
  apple: 52,
  banana: 96,
  rice: 130,
  egg: 155,
  milk: 42,
};

const Search = () => {
  const [query, setQuery] = useState('');
  const [result, setResult] = useState(null);

  const [form, setForm] = useState({
    weight: '',
    height: '',
    age: '',
    gender: 'male',
    activity: 'sedentary',
    goal: 'maintain',
  });

  const [dailyCalories, setDailyCalories] = useState(null);

  const handleSearch = () => {
    const food = query.toLowerCase();
    const cal = mockFoodData[food];
    setResult(cal ? `${cal} kcal per 100g` : 'Food not found in database.');
  };

  const handleInputChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const calculateCalories = () => {
    const { weight, height, age, gender, activity, goal } = form;
    const w = parseFloat(weight);
    const h = parseFloat(height);
    const a = parseFloat(age);

    let bmr =
      gender === 'male'
        ? 10 * w + 6.25 * h - 5 * a + 5
        : 10 * w + 6.25 * h - 5 * a - 161;

    const activityFactors = {
      sedentary: 1.2,
      light: 1.375,
      moderate: 1.55,
      active: 1.725,
      very_active: 1.9,
    };

    let calories = bmr * activityFactors[activity];

    if (goal === 'lose') calories -= 500;
    if (goal === 'gain') calories += 300;

    setDailyCalories(Math.round(calories));
  };

  return (
    <div className="min-h-screen bg-white dark:bg-zinc-900 px-6 pt-28 pb-12 text-gray-900 dark:text-gray-100 transition-colors duration-300">
      <div className="max-w-5xl mx-auto space-y-16">
        {/* Food Search */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl font-bold text-green-700 dark:text-green-400 mb-6">
            🔍 Food Calorie Search
          </h2>
          <div className="flex flex-col sm:flex-row gap-4">
            <input
              type="text"
              placeholder="Search food (e.g. banana)"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              className="p-3 border border-gray-300 dark:border-zinc-600 bg-white dark:bg-zinc-800 rounded-xl w-full text-lg"
            />
            <button
              onClick={handleSearch}
              className="bg-green-600 text-white px-6 py-2 rounded-xl hover:bg-green-700 transition text-lg"
            >
              Search
            </button>
          </div>
          {result && (
            <p className="mt-4 text-xl dark:text-gray-300">
              🍽️ <span className="font-semibold">Result:</span> {result}
            </p>
          )}
        </motion.div>

        {/* Calorie Calculator */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <h2 className="text-4xl font-bold text-green-700 dark:text-green-400 mb-6">
            ⚖️ Calorie Requirement Calculator
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {['weight', 'height', 'age'].map((field) => (
              <input
                key={field}
                type="number"
                name={field}
                placeholder={`${field[0].toUpperCase() + field.slice(1)} ${
                  field === 'weight' ? '(kg)' : field === 'height' ? '(cm)' : ''
                }`}
                value={form[field]}
                onChange={handleInputChange}
                className="p-3 border border-gray-300 dark:border-zinc-600 bg-white dark:bg-zinc-800 rounded-xl text-lg"
              />
            ))}

            <select
              name="gender"
              value={form.gender}
              onChange={handleInputChange}
              className="p-3 border border-gray-300 dark:border-zinc-600 bg-white dark:bg-zinc-800 rounded-xl text-lg"
            >
              <option value="male">Male</option>
              <option value="female">Female</option>
            </select>

            <select
              name="activity"
              value={form.activity}
              onChange={handleInputChange}
              className="p-3 border border-gray-300 dark:border-zinc-600 bg-white dark:bg-zinc-800 rounded-xl text-lg"
            >
              <option value="sedentary">Sedentary (little or no exercise)</option>
              <option value="light">Lightly active</option>
              <option value="moderate">Moderately active</option>
              <option value="active">Very active</option>
              <option value="very_active">Extra active</option>
            </select>

            <select
              name="goal"
              value={form.goal}
              onChange={handleInputChange}
              className="p-3 border border-gray-300 dark:border-zinc-600 bg-white dark:bg-zinc-800 rounded-xl text-lg"
            >
              <option value="maintain">Maintain weight</option>
              <option value="lose">Lose weight</option>
              <option value="gain">Gain weight</option>
            </select>
          </div>

          <button
            onClick={calculateCalories}
            className="mt-8 bg-green-600 text-white px-8 py-3 rounded-xl hover:bg-green-700 transition text-lg"
          >
            Calculate My Daily Calories
          </button>

          {dailyCalories && (
            <motion.p
              className="mt-6 text-2xl text-green-700 dark:text-green-300 font-semibold"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              🧮 You need approx. {dailyCalories} kcal/day to{' '}
              <span className="underline">{form.goal}</span> your weight.
            </motion.p>
          )}
        </motion.div>
      </div>
    </div>
  );
};

export default Search;
