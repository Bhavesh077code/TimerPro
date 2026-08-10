import React, { useContext, useState } from 'react';
import { TimerContext } from '../context/TimerContext';
import TimerDashboard from '../components/TimerDashboard';
import QuickPresets from '../components/QuickPresets';
import CustomTimer from '../components/CustomTimer';
import StatsCard from '../components/StatsCard';
import { formatTime } from '../utils/timerHelpers';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';

function Home() {
  const { activeTimers, completedTimers, totalStats } = useContext(TimerContext);

  const getTodayStats = () => {
    const today = new Date().toDateString();
    const todayTimers = completedTimers.filter(t => 
      new Date(t.completedAt).toDateString() === today
    );
    return {
      count: todayTimers.length,
      time: todayTimers.reduce((acc, t) => acc + t.duration, 0)
    };
  };

  const todayStats = getTodayStats();

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0a0a0a] via-[#1a0a2e] to-[#0a0a0a]">
      {/* Animated Background */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-purple-600/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-pink-600/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-blue-600/5 rounded-full blur-3xl animate-pulse delay-2000"></div>
      </div>

      {/* Navigation */}
      <Navbar />

      {/* Main Content */}
      <main className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Stats Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          <StatsCard
            icon="⏱️"
            title="Active Timers"
            value={activeTimers.length}
            subtitle={`${activeTimers.filter(t => t.status === 'running').length} running`}
            color="purple"
          />
          <StatsCard
            icon="✅"
            title="Completed"
            value={completedTimers.length}
            subtitle={`${todayStats.count} today`}
            color="green"
          />
          <StatsCard
            icon="⏰"
            title="Total Time"
            value={`${Math.floor(totalStats.totalTime / 3600)}h`}
            subtitle={`${Math.floor((totalStats.totalTime % 3600) / 60)}m tracked`}
            color="blue"
          />
          <StatsCard
            icon="🏆"
            title="Presets Used"
            value={totalStats.presetsUsed || 0}
            subtitle={`${totalStats.customsCreated || 0} custom`}
            color="yellow"
          />
        </div>

        <div className="space-y-8">
          <QuickPresets />
          <CustomTimer />
          <TimerDashboard />
        </div>

        {/* Footer */}
        <footer className="mt-16 pt-8 border-t border-white/5">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex items-center gap-4 text-sm text-gray-500">
              <span>⏱️ TimerPro v1.0</span>
              <span className="hidden sm:inline">•</span>
              <span>❤️ Made with React</span>
              <span className="hidden sm:inline">•</span>
              <span>💾 Local Storage</span>
            </div>
            <div className="text-xs text-gray-600">
              © {new Date().getFullYear()} TimerPro. All rights reserved.
            </div>
          </div>
        </footer>
      </main>
    </div>
  );
}

export default Home;