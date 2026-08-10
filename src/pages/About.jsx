// src/Pages/About.jsx
import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";

function About() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0a0a0a] via-[#1a0a2e] to-[#0a0a0a]">
      
      {/* Navbar */}
      <Navbar />

      {/* Animated Background */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-purple-600/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-pink-600/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-blue-600/5 rounded-full blur-3xl animate-pulse delay-2000"></div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 py-6 sm:py-10">
        
        {/* Back Button */}
        <button
          onClick={() => window.history.back()}
          className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors mb-4 sm:mb-6 group"
        >
          <span className="text-lg sm:text-xl group-hover:-translate-x-1 transition-transform">←</span>
          <span className="text-sm sm:text-base">Back</span>
        </button>

        {/* Header */}
        <div className="text-center mb-8 sm:mb-10">
          <div className="inline-block p-3 sm:p-4 bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl sm:rounded-3xl shadow-2xl shadow-purple-500/25 mb-3 sm:mb-4">
            <span className="text-4xl sm:text-6xl">⏱️</span>
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold bg-gradient-to-r from-purple-400 via-pink-400 to-purple-400 bg-clip-text text-transparent">
            About CountdownPro
          </h1>
          <p className="text-gray-400 mt-2 text-sm sm:text-base md:text-lg">
            A simple and beautiful countdown timer for your special moments
          </p>
        </div>

        {/* Content Sections */}
        <div className="space-y-4 sm:space-y-6">
          
          {/* What is CountdownPro */}
          <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-xl sm:rounded-2xl p-4 sm:p-6 hover:shadow-2xl hover:shadow-purple-500/10 transition-all duration-300">
            <h2 className="text-xl sm:text-2xl font-bold text-white flex items-center gap-3 mb-3">
              <span>❓</span> What is CountdownPro?
            </h2>
            <p className="text-gray-300 leading-relaxed text-sm sm:text-base">
              CountdownPro ek <span className="text-purple-400 font-semibold">simple aur beautiful countdown application</span> hai 
              jo React aur Tailwind CSS ke saath banaya gaya hai. Iska purpose aapko kisi bhi important event ke liye 
              real-time countdown create karne ki facility dena hai. Birthday, wedding, anniversary, New Year, exam, vacation 
              ya kisi bhi special event ke liye aap easily countdown bana sakte hain.
            </p>
          </div>

          {/* Our Mission */}
          <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-xl sm:rounded-2xl p-4 sm:p-6 hover:shadow-2xl hover:shadow-purple-500/10 transition-all duration-300">
            <h2 className="text-xl sm:text-2xl font-bold text-white flex items-center gap-3 mb-3">
              <span>🎯</span> Our Mission
            </h2>
            <p className="text-gray-300 leading-relaxed text-sm sm:text-base">
              Hamara mission simple hai: important moments ko aur exciting banana. CountdownPro ke through users bina 
              registration ke seconds mein ek beautiful countdown create kar sakte hain aur usse apne friends aur family 
              ke saath share kar sakte hain.
            </p>
          </div>

          {/* Key Features */}
          <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-xl sm:rounded-2xl p-4 sm:p-6 hover:shadow-2xl hover:shadow-purple-500/10 transition-all duration-300">
            <h2 className="text-xl sm:text-2xl font-bold text-white flex items-center gap-3 mb-4">
              <span>⭐</span> Key Features
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
              <div className="bg-white/5 rounded-xl p-3 sm:p-4 border border-white/5 hover:bg-white/10 hover:border-purple-500/30 transition-all">
                <div className="text-2xl sm:text-3xl mb-2">⏰</div>
                <h3 className="text-white font-semibold text-sm sm:text-base">Easy to Create</h3>
                <p className="text-gray-400 text-xs sm:text-sm">Kuch simple details enter karke seconds mein apna countdown create karein.</p>
              </div>
              <div className="bg-white/5 rounded-xl p-3 sm:p-4 border border-white/5 hover:bg-white/10 hover:border-purple-500/30 transition-all">
                <div className="text-2xl sm:text-3xl mb-2">🔗</div>
                <h3 className="text-white font-semibold text-sm sm:text-base">Shareable Links</h3>
                <p className="text-gray-400 text-xs sm:text-sm">Apne countdown ka link friends aur family ke saath easily share karein.</p>
              </div>
              <div className="bg-white/5 rounded-xl p-3 sm:p-4 border border-white/5 hover:bg-white/10 hover:border-purple-500/30 transition-all">
                <div className="text-2xl sm:text-3xl mb-2">📱</div>
                <h3 className="text-white font-semibold text-sm sm:text-base">Mobile Friendly</h3>
                <p className="text-gray-400 text-xs sm:text-sm">Phone, tablet aur desktop sabhi devices par responsive design.</p>
              </div>
              <div className="bg-white/5 rounded-xl p-3 sm:p-4 border border-white/5 hover:bg-white/10 hover:border-purple-500/30 transition-all">
                <div className="text-2xl sm:text-3xl mb-2">🎨</div>
                <h3 className="text-white font-semibold text-sm sm:text-base">Beautiful Design</h3>
                <p className="text-gray-400 text-xs sm:text-sm">Modern glassmorphism design aur smooth animations ke saath attractive interface.</p>
              </div>
              <div className="bg-white/5 rounded-xl p-3 sm:p-4 border border-white/5 hover:bg-white/10 hover:border-purple-500/30 transition-all">
                <div className="text-2xl sm:text-3xl mb-2">🌍</div>
                <h3 className="text-white font-semibold text-sm sm:text-base">Worldwide</h3>
                <p className="text-gray-400 text-xs sm:text-sm">Duniya ke kisi bhi location se countdown create aur share kar sakte hain.</p>
              </div>
              <div className="bg-white/5 rounded-xl p-3 sm:p-4 border border-white/5 hover:bg-white/10 hover:border-purple-500/30 transition-all">
                <div className="text-2xl sm:text-3xl mb-2">💰</div>
                <h3 className="text-white font-semibold text-sm sm:text-base">Completely Free</h3>
                <p className="text-gray-400 text-xs sm:text-sm">Countdown create karne ke liye koi registration ya payment required nahi hai.</p>
              </div>
            </div>
          </div>

          {/* How It Works */}
          <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-xl sm:rounded-2xl p-4 sm:p-6 hover:shadow-2xl hover:shadow-purple-500/10 transition-all duration-300">
            <h2 className="text-xl sm:text-2xl font-bold text-white flex items-center gap-3 mb-4">
              <span>🔄</span> How It Works?
            </h2>
            <div className="space-y-3 sm:space-y-4">
              <div className="flex items-start gap-3 sm:gap-4 bg-purple-500/10 rounded-xl p-3 sm:p-4 border border-purple-500/20">
                <div className="bg-gradient-to-r from-purple-500 to-pink-500 text-white font-bold rounded-full w-8 h-8 sm:w-9 sm:h-9 flex items-center justify-center flex-shrink-0 text-sm sm:text-base">1</div>
                <div>
                  <h4 className="text-white font-semibold text-sm sm:text-base">Enter Event Details</h4>
                  <p className="text-gray-400 text-xs sm:text-sm">Event ka naam, date aur time enter karein.</p>
                </div>
              </div>
              <div className="flex items-start gap-3 sm:gap-4 bg-pink-500/10 rounded-xl p-3 sm:p-4 border border-pink-500/20">
                <div className="bg-gradient-to-r from-pink-500 to-purple-500 text-white font-bold rounded-full w-8 h-8 sm:w-9 sm:h-9 flex items-center justify-center flex-shrink-0 text-sm sm:text-base">2</div>
                <div>
                  <h4 className="text-white font-semibold text-sm sm:text-base">Create Countdown</h4>
                  <p className="text-gray-400 text-xs sm:text-sm">Create Countdown button par click karein aur aapka countdown instantly generate ho jayega.</p>
                </div>
              </div>
              <div className="flex items-start gap-3 sm:gap-4 bg-blue-500/10 rounded-xl p-3 sm:p-4 border border-blue-500/20">
                <div className="bg-gradient-to-r from-blue-500 to-cyan-500 text-white font-bold rounded-full w-8 h-8 sm:w-9 sm:h-9 flex items-center justify-center flex-shrink-0 text-sm sm:text-base">3</div>
                <div>
                  <h4 className="text-white font-semibold text-sm sm:text-base">Watch the Timer</h4>
                  <p className="text-gray-400 text-xs sm:text-sm">Days, hours, minutes aur seconds ka live countdown screen par continuously update hota rahega.</p>
                </div>
              </div>
              <div className="flex items-start gap-3 sm:gap-4 bg-green-500/10 rounded-xl p-3 sm:p-4 border border-green-500/20">
                <div className="bg-gradient-to-r from-green-500 to-emerald-500 text-white font-bold rounded-full w-8 h-8 sm:w-9 sm:h-9 flex items-center justify-center flex-shrink-0 text-sm sm:text-base">4</div>
                <div>
                  <h4 className="text-white font-semibold text-sm sm:text-base">Share With Others</h4>
                  <p className="text-gray-400 text-xs sm:text-sm">Share button ka use karke countdown ko friends, family ya social media par share karein.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Who Can Use */}
          <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-xl sm:rounded-2xl p-4 sm:p-6 hover:shadow-2xl hover:shadow-purple-500/10 transition-all duration-300">
            <h2 className="text-xl sm:text-2xl font-bold text-white flex items-center gap-3 mb-4">
              <span>👥</span> Who Can Use CountdownPro?
            </h2>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 sm:gap-3">
              <div className="text-center bg-blue-500/10 rounded-xl p-3 sm:p-4 border border-blue-500/20 hover:bg-blue-500/20 transition-all">
                <div className="text-2xl sm:text-3xl mb-1">🎓</div>
                <div className="text-white text-xs sm:text-sm font-semibold">Students</div>
                <div className="text-gray-500 text-[10px] sm:text-xs">Exams & events</div>
              </div>
              <div className="text-center bg-purple-500/10 rounded-xl p-3 sm:p-4 border border-purple-500/20 hover:bg-purple-500/20 transition-all">
                <div className="text-2xl sm:text-3xl mb-1">💼</div>
                <div className="text-white text-xs sm:text-sm font-semibold">Professionals</div>
                <div className="text-gray-500 text-[10px] sm:text-xs">Work events</div>
              </div>
              <div className="text-center bg-pink-500/10 rounded-xl p-3 sm:p-4 border border-pink-500/20 hover:bg-pink-500/20 transition-all">
                <div className="text-2xl sm:text-3xl mb-1">🎉</div>
                <div className="text-white text-xs sm:text-sm font-semibold">Event Planners</div>
                <div className="text-gray-500 text-[10px] sm:text-xs">Special events</div>
              </div>
              <div className="text-center bg-orange-500/10 rounded-xl p-3 sm:p-4 border border-orange-500/20 hover:bg-orange-500/20 transition-all">
                <div className="text-2xl sm:text-3xl mb-1">👨‍👩‍👧‍👦</div>
                <div className="text-white text-xs sm:text-sm font-semibold">Families</div>
                <div className="text-gray-500 text-[10px] sm:text-xs">Celebrations</div>
              </div>
            </div>
          </div>

          {/* Privacy & Simplicity */}
          <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-xl sm:rounded-2xl p-4 sm:p-6 hover:shadow-2xl hover:shadow-purple-500/10 transition-all duration-300">
            <h2 className="text-xl sm:text-2xl font-bold text-white flex items-center gap-3 mb-3">
              <span>🔒</span> Privacy & Simplicity
            </h2>
            <p className="text-gray-300 leading-relaxed text-sm sm:text-base">
              CountdownPro ko simple rakhne ke liye countdown information URL parameters ke through share ki jaati hai. 
              Users ko countdown create karne ke liye account banane ki zaroorat nahi hoti.
            </p>
          </div>

          {/* Technology */}
          <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-xl sm:rounded-2xl p-4 sm:p-6 hover:shadow-2xl hover:shadow-purple-500/10 transition-all duration-300">
            <h2 className="text-xl sm:text-2xl font-bold text-white flex items-center gap-3 mb-3">
              <span>🛠️</span> Technology Used
            </h2>
            <div className="flex flex-wrap gap-2 sm:gap-3">
              <span className="px-3 sm:px-4 py-1.5 sm:py-2 bg-blue-500/20 text-blue-400 rounded-full text-xs sm:text-sm border border-blue-500/20">⚛️ React</span>
              <span className="px-3 sm:px-4 py-1.5 sm:py-2 bg-purple-500/20 text-purple-400 rounded-full text-xs sm:text-sm border border-purple-500/20">🎨 Tailwind CSS</span>
              <span className="px-3 sm:px-4 py-1.5 sm:py-2 bg-green-500/20 text-green-400 rounded-full text-xs sm:text-sm border border-green-500/20">⚡ Vite</span>
              <span className="px-3 sm:px-4 py-1.5 sm:py-2 bg-pink-500/20 text-pink-400 rounded-full text-xs sm:text-sm border border-pink-500/20">📱 Responsive</span>
            </div>
          </div>

          {/* Why CountdownPro */}
          <div className="bg-gradient-to-br from-purple-500/10 to-pink-500/10 border border-purple-500/20 rounded-xl sm:rounded-2xl p-4 sm:p-6">
            <h2 className="text-xl sm:text-2xl font-bold text-white flex items-center gap-3 mb-4">
              <span>💡</span> Why CountdownPro?
            </h2>
            <div className="grid sm:grid-cols-2 gap-3 sm:gap-4">
              <div className="flex items-start gap-3 bg-white/5 rounded-xl p-3 sm:p-4">
                <span className="text-green-400 text-lg sm:text-xl">✅</span>
                <div>
                  <h4 className="text-white font-semibold text-sm sm:text-base">Free to Use</h4>
                  <p className="text-gray-400 text-xs sm:text-sm">Countdown create karna simple aur free hai.</p>
                </div>
              </div>
              <div className="flex items-start gap-3 bg-white/5 rounded-xl p-3 sm:p-4">
                <span className="text-green-400 text-lg sm:text-xl">✅</span>
                <div>
                  <h4 className="text-white font-semibold text-sm sm:text-base">No Registration</h4>
                  <p className="text-gray-400 text-xs sm:text-sm">Account create karne ki zaroorat nahi.</p>
                </div>
              </div>
              <div className="flex items-start gap-3 bg-white/5 rounded-xl p-3 sm:p-4">
                <span className="text-green-400 text-lg sm:text-xl">✅</span>
                <div>
                  <h4 className="text-white font-semibold text-sm sm:text-base">Easy Sharing</h4>
                  <p className="text-gray-400 text-xs sm:text-sm">Countdown link ko easily share karein.</p>
                </div>
              </div>
              <div className="flex items-start gap-3 bg-white/5 rounded-xl p-3 sm:p-4">
                <span className="text-green-400 text-lg sm:text-xl">✅</span>
                <div>
                  <h4 className="text-white font-semibold text-sm sm:text-base">Modern Design</h4>
                  <p className="text-gray-400 text-xs sm:text-sm">Clean, modern aur responsive interface.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Call To Action */}
          <div className="text-center pt-4 sm:pt-6 pb-4">
            <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-white mb-2 sm:mb-3">
              Ready to Start Counting Down?
            </h2>
            <p className="text-gray-400 text-sm sm:text-base mb-4 sm:mb-6">
              Apne next special moment ke liye abhi countdown create karein.
            </p>
            <Link to="/create">
              <button className="px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-purple-500 to-pink-500 text-white font-bold rounded-xl sm:rounded-2xl hover:shadow-2xl hover:shadow-purple-500/25 transform hover:scale-105 transition-all duration-300 text-sm sm:text-base">
                🚀 Create Countdown
              </button>
            </Link>
            <p className="text-gray-500 text-xs sm:text-sm mt-4 sm:mt-6">
              Made with ❤️ by CountdownPro Team • © {new Date().getFullYear()}
            </p>
          </div>

        </div>
      </div>
    </div>
  );
}

export default About;