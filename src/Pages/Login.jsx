import React from "react";
import { useNavigate } from "react-router-dom";
import { Link, Element } from "react-scroll";
import { FaMobileAlt } from "react-icons/fa";
import { MdFitnessCenter } from "react-icons/md";
import { AiOutlineMail } from "react-icons/ai";
import { AiOutlineLock } from "react-icons/ai";
import { AiOutlineUser } from "react-icons/ai";
import { AiOutlineCheckCircle } from "react-icons/ai";

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
<nav className="fixed top-0 left-0 w-full bg-black bg-opacity-80 backdrop-blur-md z-50 shadow-lg">
  <div className="container mx-auto py-3 px-6 flex justify-between items-center">
    <Link
      to="welcome"
      smooth={true}
      duration={500}
      className="text-xl md:text-2xl font-bold text-green-400 hover:text-green-300 transition-colors"
    >
      🥗 NutriAI
    </Link>
    <ul className="flex space-x-8 text-sm md:text-base font-medium">
      <li>
        <Link
          to="welcome"
          smooth={true}
          duration={500}
          className="cursor-pointer text-gray-300 hover:text-green-400 transition-colors relative after:absolute after:bottom-[-3px] after:left-0 after:w-0 after:h-[2px] after:bg-green-400 after:transition-all after:duration-300 hover:after:w-full"
        >
          Home
        </Link>
      </li>
      <li>
        <Link
          to="features"
          smooth={true}
          duration={500}
          className="cursor-pointer text-gray-300 hover:text-green-400 transition-colors relative after:absolute after:bottom-[-3px] after:left-0 after:w-0 after:h-[2px] after:bg-green-400 after:transition-all after:duration-300 hover:after:w-full"
        >
          Features
        </Link>
      </li>
      <li>
        <Link
          to="pricing"
          smooth={true}
          duration={500}
          className="cursor-pointer text-gray-300 hover:text-green-400 transition-colors relative after:absolute after:bottom-[-3px] after:left-0 after:w-0 after:h-[2px] after:bg-green-400 after:transition-all after:duration-300 hover:after:w-full"
        >
          Pricing
        </Link>
      </li>
      <li>
        <Link
          to="login"
          smooth={true}
          duration={500}
          className="cursor-pointer text-green-400 hover:text-green-300 transition-colors relative after:absolute after:bottom-[-3px] after:left-0 after:w-0 after:h-[2px] after:bg-green-400 after:transition-all after:duration-300 hover:after:w-full"
        >
          Login
        </Link>
      </li>
    </ul>
  </div>
</nav>

{/* Welcome Section */}
<Element name="welcome" className="h-screen flex items-center justify-center bg-gradient-to-br from-black via-gray-900 to-gray-800 text-white relative pt-16 md:pt-0 px-6 overflow-hidden">
  {/* Background Overlays */}
  <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
    {/* Subtle Grain Texture */}
    <div
      className="absolute top-0 left-0 w-full h-full bg-[url('https://images.unsplash.com/photo-1540420773420-3366772f4999?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGhlYWx0aHklMjBmb29kfGVufDB8fDB8fHww')] opacity-15 animate-pulse"
    ></div>
    {/* Radial Gradient Overlay - Adjusted */}
    <div className="absolute top-0 left-0 w-full h-full bg-radial-gradient from-transparent via-gray-900/70 to-black/90"></div>
  </div>

  {/* Animated Shape Background - More Subtle */}
  <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-gradient-to-br from-green-300 to-lime-300 rounded-full blur-xl opacity-20 animate-float translate-x-[-10%] translate-y-[-5%]"></div>
  <div className="absolute bottom-1/3 right-1/4 w-48 h-48 bg-gradient-to-tr from-teal-300 to-green-300 rounded-full blur-xl opacity-20 animate-float animation-delay-150 translate-x-[5%] translate-y-[10%]"></div>
  <div className="absolute top-1/3 right-1/3 w-24 h-24 bg-gradient-to-br from-lime-300 to-teal-300 rounded-full blur-xl opacity-15 animate-float animation-delay-300 translate-x-[8%] translate-y-[-8%]"></div>

  <div className="z-10 max-w-6xl text-center relative flex flex-col items-center">
    {/* Illustration - Different Image & Subtle Hover */}
    <div className="relative w-48 h-48 md:w-64 md:h-64 rounded-full overflow-hidden shadow-xl mb-6 md:mb-8 animate-zoom-in transition-transform duration-300 hover:scale-105">
      <img
        src="https://img.freepik.com/premium-photo/robot-hand-future-concept-technology-food-science-apple-flower-green-industry-ai-generative_921540-14709.jpg?ga=GA1.1.883676252.1744470863&semt=ais_hybrid&w=740"
        alt="Healthy Food Illustration"
        className="w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-lime-400 opacity-10 rounded-full blur-xl animate-pulseSlow"></div>
    </div>

    {/* Heading & Description */}
    <h1 className="text-3xl md:text-5xl lg:text-6xl font-extrabold leading-tight bg-gradient-to-r from-green-300 via-lime-300 to-teal-300 bg-clip-text text-transparent drop-shadow-lg animate-slide-down">
      🌿 Fuel Your Well-being with <span className="underline decoration-lime-200 decoration-4">NutriAI</span>
    </h1>
    <p className="text-lg md:text-xl lg:text-2xl text-gray-300 mt-4 font-light max-w-3xl mx-auto animate-slide-up delay-100">
      Your smart nutrition assistant for personalized meal tracking, insightful analysis, and a healthier you.
    </p>

    {/* CTA Buttons */}
    <div className="mt-8 flex justify-center gap-4 md:gap-6 flex-wrap animate-fade-in delay-200">
      <Link
        to="signup" // Assuming you have a signup section
        smooth={true}
        duration={500}
        className="relative overflow-hidden bg-green-400 hover:bg-green-500 text-white px-6 py-3 rounded-full font-semibold shadow-md hover:shadow-green-400/50 transition-all duration-300 group"
      >
        <span className="absolute left-0 top-0 w-0 h-0 transition-all duration-500 ease-out bg-lime-300 group-hover:w-full group-hover:h-full rounded-full opacity-20"></span>
        <span className="relative">Start Your Journey</span>
      </Link>
      <Link
        to="features"
        smooth={true}
        duration={500}
        className="relative overflow-hidden border border-gray-400 hover:border-green-300 px-6 py-3 rounded-full text-gray-300 hover:text-green-300 font-medium transition-all duration-300 group"
      >
        <span className="absolute left-0 top-0 w-0 h-0 transition-all duration-500 ease-out bg-green-300 group-hover:w-full group-hover:h-full rounded-full opacity-20"></span>
        <span className="relative">Explore Features</span>
      </Link>
    </div>

    {/* Subtle Visual Element */}
    <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 text-gray-500 text-sm animate-bounceSlow mt-10">
      Discover More ↓
    </div>
  </div>
</Element>

 {/* Features Section */}
<Element name="features" className="bg-gray-900 px-4 py-16">
  <div className="container mx-auto px-6">
    <h2 className="text-4xl font-semibold text-center text-green-400 mb-10">✨ Features</h2>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
      {[
        {
          title: "Calorie Counter & Food Search",
          img: "https://media.istockphoto.com/id/1259984250/photo/calories-counting-diet-food-control-and-weight-loss-concept-calorie-counter-application-on.jpg?s=612x612&w=0&k=20&c=j7fE9RwdkjWNQWDG9Y_yNAz_rLkDbvrz0Pmn5yp1mww=",
          desc: "Effortlessly track your daily calorie intake and search for a vast database of food items.",
        },
        {
          title: "Barcode & Image Scanner",
          img: "https://media.istockphoto.com/id/171572460/photo/man-scanning-voucher-code-in-supermarket.jpg?s=612x612&w=0&k=20&c=QvW8yOqmr04Okup-QminftHDmG2czLWvv3eKS6K-Iek=",
          desc: "Quickly log meals by scanning product barcodes or uploading food images for instant recognition.",
        },
        {
          title: "AI-Powered Nutrition Chatbot",
          img: "https://images.prismic.io//intuzwebsite/f33654ec-6168-471d-b16f-a30b2df85eda_Banner%402x.png?w=2400&q=80&auto=format,compress&fm=png8",
          desc: "Get personalized nutrition advice, healthy recipe suggestions, and answers to your dietary queries from our intelligent chatbot.",
        },
        {
          title: "Daily Calorie Logs & Stats",
          img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-4JVyAfNzVLk28gF86jm_nVMqRjXI8RPKWA&s",
          desc: "Monitor your progress with detailed daily, weekly, and monthly calorie logs and insightful statistical charts.",
        },
        {
          title: "Recipe Recommendations",
          img: "https://images.unsplash.com/photo-1466637574441-749b8f19452f?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cmVjaXBlfGVufDB8fDB8fHww",
          desc: "Discover healthy and delicious recipes tailored to your dietary preferences and nutritional goals.",
        },
        {
          title: "Progress Visualization & Goal Setting",
          img: "https://img.freepik.com/free-vector/trying-reach-target_530521-1783.jpg?semt=ais_hybrid&w=740",
          desc: "Set personalized health goals and track your progress visually with intuitive charts and summaries.",
        },
      ].map(({ title, img, desc }) => (
        <div
          key={title}
          className="bg-gray-800 p-6 rounded-xl transform hover:scale-[1.02] hover:shadow-xl transition-all duration-300 flex flex-col"
        >
          <img src={img} alt={title} className="w-full h-40 object-cover rounded-lg mb-4" />
          <h3 className="text-xl font-bold mb-2 text-white">{title}</h3>
          <p className="text-gray-300 text-sm">{desc}</p>
        </div>
      ))}
    </div>
  </div>
</Element>
      {/* Pricing Section */}
<Element
  name="pricing"
  className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white px-6 py-20 flex flex-col items-center justify-center"
>
  <div className="text-center mb-16">
    <h2 className="text-4xl md:text-5xl font-bold text-green-400 mb-6">Choose Your Perfect Plan</h2>
    <p className="text-gray-400 text-lg">
      Start with our <span className="text-green-300 font-semibold">30-day free trial</span>. Experience all premium features!
    </p>
  </div>

  <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-xl w-full">
    {/* Free Trial */}
    <div className="bg-gray-800 p-8 rounded-2xl shadow-xl flex flex-col items-center text-center space-y-6 hover:shadow-2xl transition-shadow duration-300">
      <div className="w-16 h-16 rounded-full bg-green-400 flex items-center justify-center text-white text-3xl">🎉</div>
      <h3 className="text-2xl font-semibold text-white">Free 30-Day Trial</h3>
      <p className="text-gray-300">Explore all premium features for a full month.</p>
      <ul className="text-sm text-gray-400 space-y-2">
        <li><AiOutlineCheckCircle className="inline-block mr-1" /> Full access to all features</li>
        <li><AiOutlineCheckCircle className="inline-block mr-1" /> Smart AI food scanner</li>
        <li><AiOutlineCheckCircle className="inline-block mr-1" /> Personalized nutrition chatbot</li>
        <li><AiOutlineCheckCircle className="inline-block mr-1" /> Detailed daily stats & tracking</li>
      </ul>
      <button className="bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-full font-semibold transition-colors duration-300">
        Start Free Trial
      </button>
      <span className="text-sm text-gray-500">No credit card required</span>
    </div>

    {/* Premium Plan */}
    <div className="bg-zinc-900 p-8 rounded-2xl shadow-xl flex flex-col items-center text-center space-y-6 border border-green-400 hover:shadow-2xl transition-shadow duration-300">
      <div className="w-16 h-16 rounded-full bg-green-500 flex items-center justify-center text-white text-3xl">⭐</div>
      <h3 className="text-2xl font-semibold text-green-300">Premium Plan</h3>
      <p className="text-gray-300">Continue your progress after the trial for just:</p>
      <p className="text-4xl font-bold text-green-400">₹99/month</p>
      <ul className="text-sm text-gray-400 space-y-2">
        <li><AiOutlineCheckCircle className="inline-block mr-1" /> All free trial features</li>
        <li><AiOutlineCheckCircle className="inline-block mr-1" /> Personalized nutrition insights</li>
        <li><AiOutlineCheckCircle className="inline-block mr-1" /> Advanced progress tracking & reminders</li>
        <li><AiOutlineCheckCircle className="inline-block mr-1" /> Exclusive premium content</li>
        <li><AiOutlineCheckCircle className="inline-block mr-1" /> Priority customer support</li>
      </ul>
      <button className="bg-green-500 hover:bg-green-600 text-white px-8 py-3 rounded-full font-semibold transition-colors duration-300">
        Upgrade to Premium
      </button>
      <div className="mt-4">
        <h4 className="text-sm text-gray-300 font-medium mb-2">Payment Options:</h4>
        <div className="flex flex-wrap items-center justify-center gap-3">
          <img src="https://cdn-icons-png.flaticon.com/512/349/349221.png" alt="UPI" className="w-7 h-7" />
          <img src="https://cdn-icons-png.flaticon.com/512/179/179457.png" alt="Credit Card" className="w-7 h-7" />
          <img src="https://cdn-icons-png.flaticon.com/512/196/196566.png" alt="Debit Card" className="w-7 h-7" />
          <img src="https://cdn-icons-png.flaticon.com/512/39/39223.png" alt="Netbanking" className="w-7 h-7" />
          <img src="https://cdn-icons-png.flaticon.com/512/5968/5968773.png" alt="Paytm" className="w-7 h-7" />
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
  <div className="bg-gray-800 rounded-3xl shadow-2xl border border-gray-700 max-w-md w-full p-8 md:p-12">
    <div className="text-center mb-10">
      <img
        src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png"
        alt="Login Icon"
        className="w-16 h-16 mx-auto mb-6 animate-pulse"
      />
      <h2 className="text-3xl md:text-4xl font-extrabold text-green-400 tracking-tight">
        Welcome Back!
      </h2>
      <p className="text-gray-400 mt-2 text-sm md:text-base font-light">Sign in to continue your health journey</p>
    </div>
    <form onSubmit={handleLogin} className="space-y-6">
      <div>
        <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">Email Address</label>
        <div className="relative rounded-md shadow-sm">
          <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
            <AiOutlineMail className="text-gray-400" />
          </div>
          <input
            type="email"
            id="email"
            required
            placeholder="you@example.com"
            className="appearance-none block w-full pl-10 pr-3 py-2 border border-gray-600 rounded-md bg-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500 sm:text-sm"
          />
        </div>
      </div>
      <div>
        <label htmlFor="password" className="block text-sm font-medium text-gray-300 mb-2">Password</label>
        <div className="relative rounded-md shadow-sm">
          <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
            <AiOutlineLock className="text-gray-400" />
          </div>
          <input
            type="password"
            id="password"
            required
            placeholder="********"
            className="appearance-none block w-full pl-10 pr-3 py-2 border border-gray-600 rounded-md bg-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500 sm:text-sm"
          />
        </div>
      </div>
      <button
        type="submit"
        className="w-full bg-green-500 hover:bg-green-600 transition-all py-3 rounded-md text-white font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2"
      >
        Sign In
      </button>
      <div className="flex items-center justify-between text-gray-500 text-xs md:text-sm">
        <div className="flex items-center">
          <input type="checkbox" className="form-checkbox h-4 w-4 text-green-500 focus:ring-green-500 border-gray-600 rounded" />
          <span className="ml-2">Remember me</span>
        </div>
        <Link to="/forgot-password" className="hover:underline focus:outline-none focus:ring-2 focus:ring-green-500">
          Forgot password?
        </Link>
      </div>
      <div className="relative">
        <div className="absolute inset-0 flex items-center">
          <div className="w-full border-t border-gray-600" />
        </div>
        <div className="relative flex justify-center text-sm">
          <span className="px-3 bg-gray-800 text-gray-500">Or</span>
        </div>
      </div>
      <button
        type="button"
        onClick={handleGuestAccess}
        className="w-full bg-gray-600 hover:bg-gray-500 transition-all py-3 rounded-md text-white font-medium flex items-center justify-center gap-2 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2"
      >
        <AiOutlineUser /> Use App as Guest
      </button>
      <div className="text-sm text-gray-400 text-center mt-4">
        Don't have an account? <Link to="/signup" className="text-green-400 hover:underline focus:outline-none focus:ring-2 focus:ring-green-500">Sign up</Link>
      </div>
    </form>
    <p className="text-xs text-center text-gray-500 mt-8">
      Your data is secure with us.
    </p>
  </div>
</Element>
<footer className="text-center text-sm text-gray-500 mt-12 py-6 border-t border-gray-800">
  <p className="mb-1">
    Built with <span className="text-green-400">💚</span> for Hackathons
  </p>
  <p className="mb-3">
    Eat smart. Live better.
  </p>
  <p className="text-xs mt-2">
    <Link href="/privacy" className="hover:underline mr-4">Privacy Policy</Link>
    <Link href="/terms" className="hover:underline">Terms of Service</Link>
  </p>
  <p className="text-xs mt-2">
    © {new Date().getFullYear()} NutriAI. All rights reserved.
  </p>
</footer>
    </div>
  );
};

export default Login;
