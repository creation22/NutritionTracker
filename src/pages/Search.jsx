import React, { useState } from 'react';
import { motion } from 'framer-motion';

const MealLog = () => {
  const initialMeals = {
    breakfast: [],
    lunch: [],
    dinner: [],
    snacks: [],
  };

  const [meals, setMeals] = useState(initialMeals);
  const [current, setCurrent] = useState({ name: '', calories: '', mealType: 'breakfast' });
  const [waterIntake, setWaterIntake] = useState(0);

  const addFoodItem = () => {
    const { name, calories, mealType } = current;
    if (!name || !calories || isNaN(calories)) return;

    const newMealItems = [...meals[mealType], { name, calories: parseInt(calories) }];
    setMeals({ ...meals, [mealType]: newMealItems });

    setCurrent({ ...current, name: '', calories: '' });
  };

  const handleWaterAdd = (amount) => {
    setWaterIntake((prev) => prev + amount);
  };

  const getTotalCalories = () => {
    return Object.values(meals).flat().reduce((acc, item) => acc + item.calories, 0);
  };

  return (
    <div className="min-h-screen bg-white dark:bg-zinc-900 px-6 pt-28 pb-12 text-gray-900 dark:text-gray-100 transition-colors duration-300">
      <div className="max-w-4xl mx-auto space-y-12">
        {/* Input section */}
        <motion.div
          className="p-6 rounded-xl bg-green-50 dark:bg-zinc-800 shadow-md space-y-4"
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <h2 className="text-2xl font-bold text-green-700 dark:text-green-400">🍽 Add Meal Item</h2>
          <div className="flex flex-col md:flex-row items-center gap-4">
            <input
              type="text"
              placeholder="Food name"
              value={current.name}
              onChange={(e) => setCurrent({ ...current, name: e.target.value })}
              className="p-2 rounded-lg bg-white dark:bg-zinc-900 border border-gray-300 dark:border-zinc-600 w-full"
            />
            <input
              type="number"
              placeholder="Calories"
              value={current.calories}
              onChange={(e) => setCurrent({ ...current, calories: e.target.value })}
              className="p-2 rounded-lg bg-white dark:bg-zinc-900 border border-gray-300 dark:border-zinc-600 w-full"
            />
            <select
              value={current.mealType}
              onChange={(e) => setCurrent({ ...current, mealType: e.target.value })}
              className="p-2 rounded-lg bg-white dark:bg-zinc-900 border border-gray-300 dark:border-zinc-600 w-full"
            >
              <option value="breakfast">Breakfast</option>
              <option value="lunch">Lunch</option>
              <option value="dinner">Dinner</option>
              <option value="snacks">Snacks</option>
            </select>
            <button
              onClick={addFoodItem}
              className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg w-full md:w-auto"
            >
              Add
            </button>
          </div>
        </motion.div>

        {/* Meal display */}
        {Object.keys(meals).map((mealKey) => (
          <motion.div
            key={mealKey}
            className="bg-white dark:bg-zinc-800 rounded-xl p-5 shadow-sm"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <h3 className="text-xl font-semibold capitalize mb-3 text-green-700 dark:text-green-300">
              🍱 {mealKey}
            </h3>
            {meals[mealKey].length === 0 ? (
              <p className="text-sm text-gray-500 dark:text-gray-400">No items added yet.</p>
            ) : (
              <ul className="space-y-2">
                {meals[mealKey].map((item, idx) => (
                  <li key={idx} className="flex justify-between text-sm border-b border-dashed pb-1">
                    <span>{item.name}</span>
                    <span className="text-green-600 dark:text-green-400">{item.calories} kcal</span>
                  </li>
                ))}
              </ul>
            )}
          </motion.div>
        ))}

        {/* Water intake section */}
        <motion.div
          className="bg-blue-50 dark:bg-zinc-800 rounded-xl p-5"
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <h3 className="text-xl font-semibold text-blue-700 dark:text-blue-300 mb-3">💧 Water Intake</h3>
          <div className="flex gap-4 flex-wrap mb-4">
            {[250, 500, 750].map((amt) => (
              <button
                key={amt}
                onClick={() => handleWaterAdd(amt)}
                className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg"
              >
                +{amt}ml
              </button>
            ))}
          </div>
          <p className="text-lg text-blue-800 dark:text-blue-400 font-medium">
            Total Water Consumed: {waterIntake} ml
          </p>
        </motion.div>

        {/* Daily Summary */}
        <motion.div
          className="text-center text-xl font-bold text-green-800 dark:text-green-300 mt-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          🔥 Total Calories Consumed Today: {getTotalCalories()} kcal
        </motion.div>
      </div>
    </div>
  );
};

export default MealLog;
