import React, { useContext } from 'react';
import { TimerContext } from '../context/TimerContext';
import TimerHistory from '../components/TimerHistory';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';


function History() {
  const { completedTimers } = useContext(TimerContext);

  return (
    < div className="min-h-screen bg-gradient-to-br from-[#0a0a0a] via-[#1a0a2e] to-[#0a0a0a]" >
        <Navbar />
      
    <div className="min-h-screen bg-gradient-to-br from-[#0a0a0a] via-[#1a0a2e] to-[#0a0a0a]">
      {/* Animated Background */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-purple-600/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-pink-600/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>


      {/* Main Content */}
      <main className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <TimerHistory />
      </main>
    </div>
    </div>
  );
}

export default History;