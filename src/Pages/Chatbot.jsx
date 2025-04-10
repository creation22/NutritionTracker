import React, { useState } from 'react';

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
        : "I'm still learning! Please try asking about calories, protein, fat, or carbs.",
    };

    setTimeout(() => {
      setMessages((prev) => [...prev, botReply]);
    }, 800);

    setInput('');
  };

  return (
    <div className="min-h-screen px-6 py-10 bg-gray-50 text-gray-800 flex flex-col items-center">
      <h2 className="text-3xl font-bold mb-6 text-green-600 text-center">
        AI Nutrition Assistant 🤖
      </h2>

      <div className="bg-white w-full max-w-xl rounded-xl shadow-lg p-4 flex flex-col h-[500px] overflow-y-auto mb-4">
        {messages.map((msg, index) => (
          <div
            key={index}
            className={`my-2 max-w-[80%] p-3 rounded-xl ${
              msg.sender === 'user'
                ? 'bg-green-100 ml-auto text-right'
                : 'bg-gray-200 mr-auto text-left'
            }`}
          >
            {msg.text}
          </div>
        ))}
      </div>

      <div className="flex w-full max-w-xl">
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Ask a nutrition question..."
          className="flex-1 border border-gray-300 rounded-l-xl px-4 py-2"
        />
        <button
          onClick={handleSend}
          className="bg-green-500 text-white px-6 py-2 rounded-r-xl hover:bg-green-600"
        >
          Send
        </button>
      </div>
    </div>
  );
};

export default Chatbot;
