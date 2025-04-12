import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { SendHorizonal } from 'lucide-react';

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
    <div className="min-h-screen pt-32 px-4 md:px-8 bg-gradient-to-br from-green-100 to-white dark:from-gray-900 dark:to-gray-800 transition-all duration-300">
      <h2 className="text-5xl font-bold text-center text-green-600 dark:text-green-400 mb-8 tracking-tight">
        NutriChat AI 🤖
      </h2>

      <div className="max-w-3xl mx-auto w-full backdrop-blur-md bg-white/30 dark:bg-gray-900/40 border border-gray-200 dark:border-gray-700 shadow-xl rounded-3xl p-6 flex flex-col h-[500px] overflow-y-auto space-y-3 scrollbar-thin scrollbar-thumb-green-400 scrollbar-track-transparent">
        {messages.map((msg, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            className={`max-w-[75%] px-5 py-3 rounded-2xl text-sm md:text-base shadow-md ${
              msg.sender === 'user'
                ? 'bg-green-500 text-white ml-auto text-right'
                : 'bg-gray-200 dark:bg-gray-700 text-gray-900 dark:text-gray-100 mr-auto text-left'
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
          placeholder="Ask about nutrition, calories, protein..."
          className="flex-1 border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-white rounded-l-xl px-5 py-3 focus:outline-none placeholder-gray-500 dark:placeholder-gray-400"
        />
        <button
          onClick={handleSend}
          className="bg-green-600 hover:bg-green-700 text-white px-5 py-3 rounded-r-xl flex items-center gap-2 transition"
        >
          <SendHorizonal size={18} />
          Send
        </button>
      </div>
    </div>
  );
};

export default Chatbot;
