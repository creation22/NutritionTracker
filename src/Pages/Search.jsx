import React, { useState } from 'react';

const mockFoodDatabase = {
  apple: { name: 'Apple', calories: 95 },
  banana: { name: 'Banana', calories: 105 },
  bread: { name: 'Bread Slice', calories: 80 },
  rice: { name: 'Rice (1 cup)', calories: 200 },
  egg: { name: 'Boiled Egg', calories: 70 },
};

const Search = () => {
  const [query, setQuery] = useState('');
  const [foodData, setFoodData] = useState(null);
  const [notFound, setNotFound] = useState(false);

  const handleSearch = () => {
    const food = mockFoodDatabase[query.toLowerCase()];
    if (food) {
      setFoodData(food);
      setNotFound(false);
    } else {
      setFoodData(null);
      setNotFound(true);
    }
  };

  const handleLogMeal = () => {
    const logs = JSON.parse(localStorage.getItem('calorieLogs')) || [];
    const newLog = {
      food: foodData.name,
      calories: foodData.calories,
      date: new Date().toISOString(),
    };
    logs.push(newLog);
    localStorage.setItem('calorieLogs', JSON.stringify(logs));
    alert('Meal logged!');
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center py-10 px-4">
      <h2 className="text-3xl font-bold text-green-600 mb-6">
        Calorie Search
      </h2>

      <div className="flex flex-col sm:flex-row gap-4 mb-6">
        <input
          type="text"
          placeholder="Enter food name"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="p-3 rounded-xl border border-gray-300 w-72"
        />
        <button
          onClick={handleSearch}
          className="bg-green-600 text-white px-4 py-2 rounded-xl"
        >
          Search
        </button>
      </div>

      {foodData && (
        <div className="bg-white p-6 rounded-xl shadow-md w-full max-w-md text-center">
          <h3 className="text-xl font-semibold">{foodData.name}</h3>
          <p className="text-gray-700 text-lg mb-4">
            {foodData.calories} calories
          </p>
          <button
            onClick={handleLogMeal}
            className="bg-blue-500 text-white px-4 py-2 rounded-xl hover:bg-blue-600"
          >
            Log this meal
          </button>
        </div>
      )}

      {notFound && (
        <p className="text-red-500 text-lg mt-4">
          Sorry, food not found in database.
        </p>
      )}
    </div>
  );
};

export default Search;
