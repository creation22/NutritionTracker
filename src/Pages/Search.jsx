import React, { useState } from 'react';

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
    <div className="min-h-screen bg-white px-6 py-10">
      <div className="max-w-5xl mx-auto space-y-12">
        <div>
          <h2 className="text-3xl font-bold text-green-700 mb-4">🔍 Food Calorie Search</h2>
          <div className="flex gap-3">
            <input
              type="text"
              placeholder="Search food (e.g. banana)"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              className="p-2 border rounded-xl w-full"
            />
            <button
              onClick={handleSearch}
              className="bg-green-600 text-white px-4 rounded-xl hover:bg-green-700 transition"
            >
              Search
            </button>
          </div>
          {result && <p className="mt-4 text-lg text-gray-700">Result: {result}</p>}
        </div>

        <div>
          <h2 className="text-3xl font-bold text-green-700 mb-6">⚖️ Calorie Requirement Calculator</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <input
              type="number"
              name="weight"
              placeholder="Weight (kg)"
              value={form.weight}
              onChange={handleInputChange}
              className="p-2 border rounded-xl"
            />
            <input
              type="number"
              name="height"
              placeholder="Height (cm)"
              value={form.height}
              onChange={handleInputChange}
              className="p-2 border rounded-xl"
            />
            <input
              type="number"
              name="age"
              placeholder="Age"
              value={form.age}
              onChange={handleInputChange}
              className="p-2 border rounded-xl"
            />

            <select
              name="gender"
              value={form.gender}
              onChange={handleInputChange}
              className="p-2 border rounded-xl"
            >
              <option value="male">Male</option>
              <option value="female">Female</option>
            </select>

            <select
              name="activity"
              value={form.activity}
              onChange={handleInputChange}
              className="p-2 border rounded-xl"
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
              className="p-2 border rounded-xl"
            >
              <option value="maintain">Maintain weight</option>
              <option value="lose">Lose weight</option>
              <option value="gain">Gain weight</option>
            </select>
          </div>

          <button
            onClick={calculateCalories}
            className="mt-6 bg-green-600 text-white px-6 py-2 rounded-xl hover:bg-green-700 transition"
          >
            Calculate My Daily Calories
          </button>

          {dailyCalories && (
            <p className="mt-4 text-lg text-green-700 font-semibold">
              🧮 You need approx. {dailyCalories} kcal/day to {form.goal} your weight.
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Search;
