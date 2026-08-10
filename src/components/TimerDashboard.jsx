// src/components/TimerDashboard.jsx
import React, { useContext, useState } from 'react';
import { TimerContext } from '../context/TimerContext';
import TimerCard from './TimerCard';
import FullScreenTimer from './FullScreenTimer';

function TimerDashboard() {
  const { activeTimers, completeTimer, removeTimer } = useContext(TimerContext);
  const [fullScreenTimer, setFullScreenTimer] = useState(null);

  const handleFullScreen = (timer) => {
    setFullScreenTimer(timer);
  };

  const handleCloseFullScreen = () => {
    setFullScreenTimer(null);
  };

  // ✅ Count running timers
  const runningCount = activeTimers.filter(t => t.status === 'running').length;

  // ✅ Animation for empty state
  const emptyIcons = ['⏰', '⌛', '⏱️', '🕐', '🕒', '🕔'];

  if (activeTimers.length === 0) {
    return (
      <div className="text-center py-16 md:py-24 animate-fade-in">
        <div className="relative inline-block">
          <div className="text-8xl md:text-9xl mb-6 animate-bounce-slow">
            {emptyIcons[Math.floor(Math.random() * emptyIcons.length)]}
          </div>
          <div className="absolute -top-2 -right-2 w-6 h-6 bg-purple-500 rounded-full animate-ping opacity-75"></div>
          <div className="absolute -bottom-2 -left-2 w-4 h-4 bg-pink-500 rounded-full animate-ping opacity-75 delay-500"></div>
        </div>
        
        <h3 className="text-3xl md:text-4xl font-bold text-white mb-3 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
          No Active Timers
        </h3>
        
        <p className="text-gray-400 text-lg max-w-md mx-auto">
          Start a timer using the <span className="text-purple-400 font-semibold">presets</span> or 
          <span className="text-pink-400 font-semibold"> custom options</span> above!
        </p>
        
        <div className="mt-6 flex flex-wrap justify-center gap-2">
          <span className="px-3 py-1.5 bg-purple-500/10 text-purple-300 rounded-full text-sm border border-purple-500/20">
            ☕ Quick Break
          </span>
          <span className="px-3 py-1.5 bg-purple-500/10 text-purple-300 rounded-full text-sm border border-purple-500/20">
            🎯 Focus
          </span>
          <span className="px-3 py-1.5 bg-purple-500/10 text-purple-300 rounded-full text-sm border border-purple-500/20">
            💪 Workout
          </span>
          <span className="px-3 py-1.5 bg-purple-500/10 text-purple-300 rounded-full text-sm border border-purple-500/20">
            📚 Deep Work
          </span>
        </div>
        
        <div className="mt-8 text-sm text-gray-500">
          💡 Tip: Try a <span className="text-purple-400">5-minute break</span> or 
          <span className="text-blue-400"> 25-minute focus</span> session
        </div>
      </div>
    );
  }

  return (
    <div className="animate-slide-up">
      {/* ✅ Full Screen Timer */}
      {fullScreenTimer && (
        <FullScreenTimer 
          timer={fullScreenTimer} 
          onClose={handleCloseFullScreen}
        />
      )}

      {/* ✅ Dashboard Header */}
      <div className="flex flex-wrap items-center justify-between mb-6 gap-3">
        <div className="flex items-center gap-3">
          <div className="relative">
            <div className="text-2xl">🕐</div>
            {runningCount > 0 && (
              <span className="absolute -top-1 -right-1 w-2.5 h-2.5 bg-green-400 rounded-full animate-pulse"></span>
            )}
          </div>
          <h2 className="text-xl md:text-2xl font-bold text-white">
            Active Timers
          </h2>
          <span className="text-sm font-normal bg-purple-500/20 text-purple-300 px-3 py-1 rounded-full border border-purple-500/30">
            {activeTimers.length}
          </span>
        </div>
        
        <div className="flex items-center gap-3 text-sm">
          <div className="flex items-center gap-2 bg-white/5 px-3 py-1.5 rounded-full">
            <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
            <span className="text-gray-400">
              <span className="text-white font-medium">{runningCount}</span> running
            </span>
          </div>
          {activeTimers.length > 1 && (
            <span className="text-gray-500 text-xs hidden sm:inline">
              {activeTimers.length - runningCount} paused
            </span>
          )}
        </div>
      </div>

      {/* ✅ Timer Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 md:gap-6">
        {activeTimers.map((timer, index) => (
          <div key={timer.id} className={`animate-slide-up`} style={{ animationDelay: `${index * 0.1}s` }}>
            <TimerCard
              timer={timer}
              onFullScreen={handleFullScreen}
            />
          </div>
        ))}
      </div>

      {/* ✅ Footer Tip */}
      {activeTimers.length > 2 && (
        <div className="mt-8 text-center text-xs text-gray-500 border-t border-white/5 pt-6">
          💡 You have <span className="text-purple-400 font-medium">{activeTimers.length}</span> active timers. 
          Click <span className="text-purple-400">⛶ Full Screen</span> for focus mode!
        </div>
      )}
    </div>
  );
}

export default TimerDashboard;