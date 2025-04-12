import React, { useState } from "react";
import { motion } from "framer-motion";

const mockCalorieData = {
  banana: { calories: 96, protein: 1.3, carbs: 27, fat: 0.3 },
  apple: { calories: 52, protein: 0.3, carbs: 14, fat: 0.2 },
  rice: { calories: 130, protein: 2.7, carbs: 28, fat: 0.3 },
  bread: { calories: 265, protein: 9, carbs: 49, fat: 3.2 },
  milk: { calories: 42, protein: 3.4, carbs: 5, fat: 1 },
  oreo: { calories: 483, protein: 4.9, carbs: 72, fat: 19 },
  maggi: { calories: 402, protein: 8.5, carbs: 60, fat: 16 },
};

const Scanner = () => {
  const [image, setImage] = useState(null);
  const [foodName, setFoodName] = useState('');
  const [calories, setCalories] = useState(null);
  const [step, setStep] = useState(1);
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResult, setSearchResult] = useState(null);

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (!file) return;

    setImage(URL.createObjectURL(file));
    setFoodName("banana"); // Simulated detection
    setStep(2);
  };

  const handleCalorieCheck = () => {
    const result = mockCalorieData[foodName.toLowerCase()];
    setCalories(result || "Not found in database");
    setStep(3);
  };

  const handleSearch = () => {
    const result = mockCalorieData[searchTerm.toLowerCase()];
    setSearchResult(result || null);
  };

  return (
    <div className="min-h-screen px-6 pt-28 pb-16 bg-white dark:bg-zinc-900 text-gray-900 dark:text-gray-100 transition-colors duration-300">
      <div className="max-w-4xl mx-auto text-center space-y-12">
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-4xl sm:text-5xl font-extrabold text-green-700 dark:text-green-400">
            🍱 Food Scanner & Nutrition Finder
          </h1>
          <p className="text-gray-600 dark:text-gray-400 mt-2 text-base sm:text-lg">
            Upload an image or search for any food to get calorie and macronutrient details.
          </p>
        </motion.div>

        {/* 🔍 Search Section */}
        <motion.div
          className="bg-zinc-50 dark:bg-zinc-800 rounded-2xl p-8 shadow-md space-y-6"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          <h2 className="text-2xl font-semibold text-green-700 dark:text-green-300">Search Food</h2>
          <div className="flex flex-col sm:flex-row gap-4 items-center justify-center">
            <input
              type="text"
              placeholder="e.g. Apple, Rice, Oreo..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="flex-1 p-3 rounded-xl border border-gray-300 dark:border-zinc-600 bg-white dark:bg-zinc-900 text-lg"
            />
            <button
              onClick={handleSearch}
              className="px-6 py-3 rounded-xl font-medium transition duration-300 bg-green-600 hover:bg-green-700 text-white dark:bg-green-500 dark:hover:bg-green-600"
            >
              Search
            </button>
          </div>

          {searchResult && (
            <div className="text-left mt-4 text-green-800 dark:text-green-300 space-y-1">
              <p className="text-lg font-semibold capitalize">{searchTerm}</p>
              <p>Calories: <strong>{searchResult.calories} kcal</strong></p>
              <p>Protein: {searchResult.protein} g</p>
              <p>Carbs: {searchResult.carbs} g</p>
              <p>Fat: {searchResult.fat} g</p>
            </div>
          )}
          {searchResult === null && searchTerm && (
            <p className="text-red-500 mt-2">Food not found in database.</p>
          )}
        </motion.div>

        {/* 📷 Scanner Section */}
        <motion.div
          className="bg-green-50 dark:bg-zinc-800 rounded-2xl p-8 shadow-md space-y-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-2xl font-semibold text-green-700 dark:text-green-300">Scan a Food Image</h2>

          {step === 1 && (
            <div className="space-y-4">
              <input
                type="file"
                accept="image/*"
                onChange={handleImageUpload}
                className="block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-green-100 file:text-green-700 hover:file:bg-green-200"
              />
              <p className="text-gray-500 dark:text-gray-400 text-sm">
                Upload a photo of the food you want to analyze.
              </p>
            </div>
          )}

          {step >= 2 && image && (
            <>
              <img
                src={image}
                alt="Preview"
                className="mx-auto w-48 h-48 object-cover rounded-xl shadow-md"
              />
              <div className="text-left mt-4">
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                  Detected Food Name (editable):
                </label>
                <input
                  type="text"
                  value={foodName}
                  onChange={(e) => setFoodName(e.target.value)}
                  className="mt-2 p-3 w-full border border-gray-300 dark:border-zinc-600 rounded-xl bg-white dark:bg-zinc-900 text-lg"
                />
              </div>
              <button
                onClick={handleCalorieCheck}
                className="mt-4 bg-green-600 text-white px-6 py-2 rounded-xl hover:bg-green-700 transition text-lg"
              >
                Get Calorie Info
              </button>
            </>
          )}

          {step === 3 && calories !== null && (
            <motion.div
              className="mt-6 text-lg font-semibold text-green-700 dark:text-green-300"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
            >
              🍽 {foodName} contains approx.{" "}
              <span className="text-2xl">{calories.calories || calories} kcal</span> per 100g
              {calories.protein && (
                <div className="mt-2 text-sm text-left">
                  Protein: {calories.protein}g | Carbs: {calories.carbs}g | Fat: {calories.fat}g
                </div>
              )}
            </motion.div>
          )}
        </motion.div>

        <p className="text-sm text-gray-400 dark:text-gray-500">
          * This feature is demo-only and uses simulated data.
        </p>
      </div>
    </div>
  );
};

export default Scanner;
