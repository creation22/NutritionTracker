import React, { useState } from "react";
import { motion } from "framer-motion";

const mockCalorieData = {
  banana: 96,
  apple: 52,
  rice: 130,
  bread: 265,
  milk: 42,
  oreo: 483,
  maggi: 402,
};

const Scanner = () => {
  const [image, setImage] = useState(null);
  const [foodName, setFoodName] = useState('');
  const [calories, setCalories] = useState(null);
  const [step, setStep] = useState(1);

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (!file) return;

    setImage(URL.createObjectURL(file));
    setFoodName("banana"); // Simulated detection
    setStep(2);
  };

  const handleCalorieCheck = () => {
    const cals = mockCalorieData[foodName.toLowerCase()];
    setCalories(cals || "Not found in database");
    setStep(3);
  };

  return (
    <div className="min-h-screen px-6 pt-28 pb-12 bg-white dark:bg-zinc-900 text-gray-900 dark:text-gray-100 transition-colors duration-300">
      <div className="max-w-3xl mx-auto text-center space-y-8">
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-4xl font-bold text-green-700 dark:text-green-400">📷 Food Scanner</h1>
          <p className="text-gray-600 dark:text-gray-400">
            Upload a food image or barcode to estimate calories
          </p>
        </motion.div>

        <motion.div
          className="bg-green-50 dark:bg-zinc-800 rounded-xl p-6 shadow-md space-y-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          {step === 1 && (
            <div className="space-y-3">
              <input
                type="file"
                accept="image/*"
                onChange={handleImageUpload}
                className="block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-green-100 file:text-green-700 hover:file:bg-green-200"
              />
              <p className="text-gray-500 dark:text-gray-400 text-sm">
                Upload a food photo or barcode
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
              <div className="text-left">
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
                className="bg-green-600 text-white px-6 py-2 rounded-xl hover:bg-green-700 transition text-lg"
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
              <span className="text-2xl">{calories} kcal</span> per 100g
            </motion.div>
          )}
        </motion.div>

        <p className="text-sm text-gray-400 dark:text-gray-500">
          * Scanner is currently mock-based for demo purposes.
        </p>
      </div>
    </div>
  );
};

export default Scanner;
