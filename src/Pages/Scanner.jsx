import React, { useState } from 'react';
import foodData from '../Data/food';

const Scanner = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [detectedFood, setDetectedFood] = useState(null);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setSelectedImage(URL.createObjectURL(file));

    // Simulate detection: random food from mock data
    const randomFood = foodData[Math.floor(Math.random() * foodData.length)];
    setTimeout(() => setDetectedFood(randomFood), 1000); // simulate delay
  };

  return (
    <div className="min-h-screen px-6 py-10 bg-gray-50 text-gray-800">
      <h2 className="text-3xl font-bold mb-6 text-center text-green-600">
        Scan a Food Item
      </h2>

      <div className="max-w-md mx-auto text-center">
        <input
          type="file"
          accept="image/*"
          onChange={handleImageChange}
          className="mb-6"
        />

        {selectedImage && (
          <img
            src={selectedImage}
            alt="Scanned food"
            className="mx-auto w-60 h-60 object-cover rounded-xl border"
          />
        )}

        {detectedFood && (
          <div className="mt-6 bg-white p-6 rounded-xl shadow-md text-left">
            <h3 className="text-xl font-semibold mb-2">{detectedFood.name}</h3>
            <p><strong>Calories:</strong> {detectedFood.calories} kcal</p>
            <p><strong>Protein:</strong> {detectedFood.protein} g</p>
            <p><strong>Fat:</strong> {detectedFood.fat} g</p>
            <p><strong>Carbs:</strong> {detectedFood.carbs} g</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Scanner;
