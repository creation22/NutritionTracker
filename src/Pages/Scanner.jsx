import React, { useState } from "react";

const mockCalorieData = {
  'banana': 96,
  'apple': 52,
  'rice': 130,
  'bread': 265,
  'milk': 42,
  'oreo': 483,
  'maggi': 402,
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

    // Simulated AI result
    const simulatedName = "banana"; // You can randomize this for demo
    setFoodName(simulatedName);
    setStep(2);
  };

  const handleCalorieCheck = () => {
    const cals = mockCalorieData[foodName.toLowerCase()];
    setCalories(cals || "Not found in database");
    setStep(3);
  };

  return (
    <div className="min-h-screen bg-white px-6 py-10">
      <div className="max-w-3xl mx-auto text-center">
        <h1 className="text-4xl font-bold text-green-700 mb-4">📷 Food Scanner</h1>
        <p className="text-gray-600 mb-8">Upload a food image or barcode to estimate calories</p>

        <div className="bg-green-50 rounded-xl p-6 shadow-md">
          {step === 1 && (
            <div className="space-y-4">
              <input
                type="file"
                accept="image/*"
                onChange={handleImageUpload}
                className="block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-green-100 file:text-green-700 hover:file:bg-green-200"
              />
              <p className="text-gray-500 text-sm">Upload a food photo or barcode</p>
            </div>
          )}

          {step >= 2 && image && (
            <>
              <img src={image} alt="Preview" className="mx-auto mt-6 w-48 h-48 object-cover rounded-xl shadow" />
              <div className="mt-4">
                <label className="block text-sm font-medium text-gray-700">
                  Detected Food Name (editable):
                </label>
                <input
                  type="text"
                  value={foodName}
                  onChange={(e) => setFoodName(e.target.value)}
                  className="mt-1 p-2 w-full border rounded-xl"
                />
              </div>
              <button
                onClick={handleCalorieCheck}
                className="mt-4 bg-green-600 text-white px-6 py-2 rounded-xl hover:bg-green-700"
              >
                Get Calorie Info
              </button>
            </>
          )}

          {step === 3 && calories !== null && (
            <div className="mt-6 text-lg font-semibold text-green-700">
              🍽 {foodName} contains approx.{" "}
              <span className="text-2xl">{calories} kcal</span> per 100g
            </div>
          )}
        </div>

        <p className="text-sm text-gray-400 mt-10">* Scanner is currently mock-based for demo purposes.</p>
      </div>
    </div>
  );
};

export default Scanner;
