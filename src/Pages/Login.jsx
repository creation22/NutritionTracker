import React from "react";
import { useNavigate } from "react-router-dom";
import { Link, Element } from "react-scroll";

const Login = () => {
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    navigate("/home");
  };

  const handleGuestAccess = () => {
    navigate("/home");
  };

  return (
    <div className="min-h-screen bg-black text-white overflow-y-auto scroll-smooth">
      {/* Navbar */}
{/* Navbar */}
<nav className="fixed top-0 left-0 w-full bg-black bg-opacity-70 backdrop-blur-md z-50 shadow-md">
  <ul className="flex justify-center space-x-10 py-5 px-6 text-base md:text-lg font-medium tracking-wide">
    <li>
      <Link
        to="welcome"
        smooth={true}
        duration={500}
        className="cursor-pointer text-gray-200 hover:text-green-400 hover:underline underline-offset-4 transition-all"
      >
        Welcome
      </Link>
    </li>
    <li>
      <Link
        to="features"
        smooth={true}
        duration={500}
        className="cursor-pointer text-gray-200 hover:text-green-400 hover:underline underline-offset-4 transition-all"
      >
        Features
      </Link>
    </li>
    <li>
      <Link
        to="pricing"
        smooth={true}
        duration={500}
        className="cursor-pointer text-gray-200 hover:text-green-400 hover:underline underline-offset-4 transition-all"
      >
        Pricing
      </Link>
    </li>
    <li>
      <Link
        to="login"
        smooth={true}
        duration={500}
        className="cursor-pointer text-gray-200 hover:text-green-400 hover:underline underline-offset-4 transition-all"
      >
        Login
      </Link>
    </li>
  </ul>
</nav>


      {/* Welcome Section */}
      <Element name="welcome" className="h-screen flex items-center justify-center bg-gradient-to-br from-black via-gray-900 to-gray-800 text-white relative pt-24 px-6 overflow-hidden">
  {/* Floating Background Elements */}
  <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
    <img
      src="https://www.transparenttextures.com/patterns/stardust.png"
      alt="Background texture"
      className="w-full h-full object-cover"
    />
  </div>

  <div className="z-10 max-w-4xl text-center">
    {/* Heading & Description */}
    <h1 className="text-6xl md:text-7xl font-extrabold leading-tight bg-gradient-to-r from-green-400 via-lime-400 to-teal-400 bg-clip-text text-transparent drop-shadow-xl animate-fade-in-down">
      🌱 Welcome to NutriAI
    </h1>
    <p className="text-xl md:text-2xl text-gray-300 mt-6 font-light max-w-2xl mx-auto animate-fade-in-up">
      Track calories, scan meals, and get smart health insights with our all-in-one nutrition assistant.
    </p>

    {/* CTA Buttons */}
    <div className="mt-10 flex justify-center gap-4 flex-wrap animate-fade-in-up">
      <Link
        to="login"
        smooth={true}
        duration={500}
        className="cursor-pointer bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-xl font-semibold shadow-lg hover:shadow-green-500/40 transition-all duration-300"
      >
        🚀 Get Started Now
      </Link>
      <Link
        to="features"
        smooth={true}
        duration={500}
        className="cursor-pointer border border-gray-500 hover:border-green-400 px-6 py-3 rounded-xl text-gray-300 hover:text-green-300 font-medium transition-all duration-300"
      >
        Learn More ↓
      </Link>
    </div>


  </div>
</Element>



      {/* Features Section */}
      <Element name="features" className="min-h-screen bg-gray-900 px-4 py-20">
        <h2 className="text-4xl font-semibold text-center text-green-400 mb-12">✨ Features</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {[
            {
              title: "Calorie Counter & Food Search",
              img: "https://media.istockphoto.com/id/1259984250/photo/calories-counting-diet-food-control-and-weight-loss-concept-calorie-counter-application-on.jpg?s=612x612&w=0&k=20&c=j7fE9RwdkjWNQWDG9Y_yNAz_rLkDbvrz0Pmn5yp1mww=",
              desc: "Easily track your daily calorie intake and search for food items.",
            },
            {
              title: "Barcode & Image Scanner",
              img: "https://media.istockphoto.com/id/171572460/photo/man-scanning-voucher-code-in-supermarket.jpg?s=612x612&w=0&k=20&c=QvW8yOqmr04Okup-QminftHDmG2czLWvv3eKS6K-Iek=",
              desc: "Scan food items using barcode or image recognition for quick logging.",
            },
            {
              title: "AI-Powered Nutrition Chatbot",
              img: "https://images.prismic.io//intuzwebsite/f33654ec-6168-471d-b16f-a30b2df85eda_Banner%402x.png?w=2400&q=80&auto=format,compress&fm=png8",
              desc: "Get personalized nutrition advice from our intelligent chatbot.",
            },
            {
              title: "Daily Calorie Logs & Stats",
              img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-4JVyAfNzVLk28gF86jm_nVMqRjXI8RPKWA&s",
              desc: "Monitor your progress with detailed logs and statistics.",
            },
          ].map(({ title, img, desc }) => (
            <div
              key={title}
              className="bg-gray-800 p-6 rounded-xl transform hover:scale-[1.02] hover:shadow-xl transition-all duration-300"
            >
              <img src={img} alt={title} className="w-full h-48 object-cover rounded-lg mb-4" />
              <h3 className="text-2xl font-bold mb-2">{title}</h3>
              <p className="text-gray-300">{desc}</p>
            </div>
          ))}
        </div>
      </Element>

      {/* Pricing Section */}
      <Element
      name="pricing"
      className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white px-6 py-20 flex flex-col items-center justify-center"
    >
      <div className="text-center mb-12">
        <h2 className="text-5xl font-bold text-green-400 mb-4">💰 Pricing Plans</h2>
        <p className="text-gray-400 text-lg">
          Start your journey with our <span className="text-green-300 font-semibold">30-day free demo</span>. No credit card needed!
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-5xl w-full">
        {/* Free Trial */}
        <div className="bg-gray-800 p-8 rounded-2xl shadow-xl flex flex-col items-center text-center space-y-4">
          <img
            src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png"
            alt="Free Trial Icon"
            className="w-20 h-20 mb-4"
          />
          <h3 className="text-2xl font-semibold text-white">🎉 30-Day Demo</h3>
          <p className="text-gray-300">Try all features with no limits for 30 days.</p>
          <ul className="text-sm text-gray-400 space-y-2">
            <li>✅ Full access to logging</li>
            <li>✅ Smart AI food scanner</li>
            <li>✅ Nutrition chatbot</li>
            <li>✅ Daily stats and tracking</li>
          </ul>
          <span className="text-lg text-green-300 font-semibold mt-2">No card required</span>
        </div>

        {/* Paid Plan */}
        <div className="bg-zinc-900 p-8 rounded-2xl shadow-xl flex flex-col items-center text-center space-y-4 border border-green-400">
          <img
            src="https://cdn-icons-png.flaticon.com/512/3135/3135789.png"
            alt="Premium Plan Icon"
            className="w-20 h-20 mb-4"
          />
          <h3 className="text-2xl font-semibold text-green-300">🌟 Premium Plan</h3>
          <p className="text-gray-300">After your trial, continue for only</p>
          <p className="text-4xl font-bold text-green-400">₹99/month</p>
          <ul className="text-sm text-gray-400 space-y-2">
            <li>💡 Personalized nutrition insights</li>
            <li>📈 Advanced tracking & reminders</li>
            <li>📦 Access to premium features</li>
            <li>🛡️ Priority support</li>
          </ul>

          <div className="mt-4">
            <h4 className="text-sm text-gray-300 font-medium mb-2">Payment Options:</h4>
            <div className="flex flex-wrap items-center justify-center gap-4">
              <img src="https://cdn-icons-png.flaticon.com/512/349/349221.png" alt="UPI" className="w-8 h-8" />
              <img src="https://cdn-icons-png.flaticon.com/512/179/179457.png" alt="Credit Card" className="w-8 h-8" />
              <img src="https://cdn-icons-png.flaticon.com/512/196/196566.png" alt="Debit Card" className="w-8 h-8" />
              <img src="https://cdn-icons-png.flaticon.com/512/39/39223.png" alt="Netbanking" className="w-8 h-8" />
              <img src="https://cdn-icons-png.flaticon.com/512/5968/5968773.png" alt="Paytm" className="w-8 h-8" />
            </div>
          </div>
        </div>
      </div>

      <p className="text-xs text-gray-500 mt-10 text-center max-w-md">
        Upgrade anytime from your profile page. Your health, your way — smarter, simpler, better.
      </p>
    </Element>

      {/* Login Section */}
      <Element name="login" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 via-gray-800 to-black px-4 py-24">
  <div className="bg-gray-800 rounded-3xl shadow-2xl border border-gray-700 max-w-md w-full p-10">
    <div className="text-center mb-8">
      <img
        src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png"
        alt="Login Icon"
        className="w-16 h-16 mx-auto mb-4 animate-bounce"
      />
      <h2 className="text-4xl font-extrabold text-green-400 font-sans tracking-tight">
        Welcome Back!
      </h2>
      <p className="text-gray-400 mt-2 text-sm font-light">Sign in to continue your health journey</p>
    </div>
    <form onSubmit={handleLogin} className="space-y-6">
      <div>
        <label className="block text-sm font-medium text-gray-300 mb-1">Email Address</label>
        <div className="relative">
          <span className="absolute inset-y-0 left-3 flex items-center text-gray-400">
            📧
          </span>
          <input
            type="email"
            required
            placeholder="you@example.com"
            className="w-full pl-10 pr-3 py-2 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-500"
          />
        </div>
      </div>
      <button
        type="submit"
        className="w-full bg-green-500 hover:bg-green-600 transition-all py-3 rounded-xl text-white font-semibold shadow-md hover:shadow-green-600/50"
      >
        Continue with Email
      </button>
      <div className="flex items-center justify-center text-gray-500 text-xs gap-2">
        <span className="h-px w-10 bg-gray-600" />
        or
        <span className="h-px w-10 bg-gray-600" />
      </div>
      <button
        type="button"
        onClick={handleGuestAccess}
        className="w-full bg-gray-600 hover:bg-gray-500 transition-all py-3 rounded-xl text-white font-medium flex items-center justify-center gap-2"
      >
        👤 Use App without Login
      </button>
    </form>
    <p className="text-xs text-center text-gray-500 mt-8">
      Your data stays safe and private. We never share your info.
    </p>
  </div>
</Element>

      <footer className="text-center text-xs text-gray-500 mt-10 pb-10">
        Built with 💚 for Hackathons — Eat smart. Live better.
      </footer>
    </div>
  );
};

export default Login;
