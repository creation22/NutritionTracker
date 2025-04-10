import React, { useState } from 'react';
import { motion } from 'framer-motion';

const mockReplies = {
  protein: 'Protein helps in muscle building and repair. Great for post-workout meals!',
  calories: 'Calories are units of energy. Balance your intake based on your goals.',
  fat: 'Healthy fats like omega-3 are essential for brain and heart health.',
  carbs: 'Carbohydrates are your body’s main source of energy.',
  diet: 'A balanced diet includes proteins, carbs, fats, vitamins, and minerals.',
};

const Chatbot = () => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');

  const handleSend = () => {
    if (!input.trim()) return;

    const userMsg = { sender: 'user', text: input };
    setMessages((prev) => [...prev, userMsg]);

    const keyword = Object.keys(mockReplies).find((key) =>
      input.toLowerCase().includes(key)
    );

    const botReply = {
      sender: 'bot',
      text: keyword
        ? mockReplies[keyword]
        : "I'm still learning! Try asking about calories, protein, fat, or carbs.",
    };

    setTimeout(() => {
      setMessages((prev) => [...prev, botReply]);
    }, 600);

    setInput('');
  };

  return (
    <div className="min-h-screen pt-32 px-4 md:px-8 bg-gradient-to-br from-green-50 to-white dark:from-gray-900 dark:to-gray-800 text-gray-800 dark:text-gray-100 transition-all duration-300">
      <h2 className="text-4xl font-bold text-center text-green-600 dark:text-green-400 mb-6">
        AI Nutrition Assistant 🤖
      </h2>

      <div className="max-w-3xl mx-auto w-full bg-white dark:bg-gray-900 shadow-2xl rounded-3xl p-6 flex flex-col h-[500px] overflow-y-auto space-y-2">
        {messages.map((msg, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            className={`max-w-[80%] px-4 py-3 rounded-xl shadow-md ${
              msg.sender === 'user'
                ? 'bg-green-100 dark:bg-green-700 ml-auto text-right'
                : 'bg-gray-200 dark:bg-gray-700 mr-auto text-left'
            }`}
          >
            {msg.text}
          </motion.div>
        ))}
      </div>

      <div className="flex mt-6 max-w-3xl mx-auto w-full">
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => e.key === 'Enter' && handleSend()}
          placeholder="Ask a nutrition question..."
          className="flex-1 border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 rounded-l-xl px-4 py-3 focus:outline-none"
        />
        <button
          onClick={handleSend}
          className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-r-xl transition"
        >
          Send
        </button>
      </div>
    </div>
  );
};

export default Chatbot;
