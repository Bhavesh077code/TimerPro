// src/components/QuickPresets.jsx
import React, { useContext } from 'react';
import { TimerContext } from '../context/TimerContext';

const PRESETS = [
  { name: 'Quick Break', duration: 300, icon: '☕', color: 'from-emerald-500 to-green-500' },
  { name: 'Focus', duration: 900, icon: '🎯', color: 'from-purple-500 to-indigo-500' },
  { name: 'Deep Work', duration: 1800, icon: '📚', color: 'from-blue-500 to-cyan-500' },
  { name: 'Workout', duration: 3600, icon: '💪', color: 'from-red-500 to-rose-500' },
  { name: 'Movie', duration: 7200, icon: '🎬', color: 'from-amber-500 to-orange-500' },
  { name: 'Sleep', duration: 28800, icon: '😴', color: 'from-indigo-500 to-purple-500' },
  { name: 'Cooking', duration: 2700, icon: '🍳', color: 'from-orange-500 to-red-500' },
  { name: 'Meditate', duration: 600, icon: '🧘', color: 'from-teal-500 to-emerald-500' },
];

function QuickPresets() {
  const { addTimer } = useContext(TimerContext);

  // ✅ Safe add timer with error handling
  const handleAddTimer = (name, duration, type) => {
    try {
      addTimer(name, duration, type);
    } catch (error) {
      console.warn('Failed to add timer:', error);
    }
  };

  return (
    <div>
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-lg font-bold text-white flex items-center gap-2">
          <span>⚡</span> Quick Start
          <span className="text-xs font-normal text-gray-500 ml-2 hidden sm:inline">Click to start</span>
        </h2>
        <span className="text-xs text-gray-500 bg-white/5 px-2 py-1 rounded-full sm:hidden">
          Tap to start
        </span>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-2 sm:gap-3">
        {PRESETS.map((preset) => (
          <button
            key={preset.name}
            onClick={() => handleAddTimer(preset.name, preset.duration, 'preset')}
            className="group relative overflow-hidden rounded-xl bg-white/5 hover:bg-white/10 border border-white/5 p-3 sm:p-4 text-center transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-purple-500/20 active:scale-95 touch-manipulation"
            aria-label={`Start ${preset.name} timer`}
          >
            {/* Background gradient on hover */}
            <div className={`absolute inset-0 bg-gradient-to-br ${preset.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}></div>
            
            <div className="relative z-10">
              <div className="text-2xl sm:text-3xl mb-1 group-hover:scale-110 transition-transform duration-300">
                {preset.icon}
              </div>
              <div className="text-white text-[10px] sm:text-xs font-medium leading-tight">
                {preset.name}
              </div>
              <div className="text-purple-400 text-[8px] sm:text-[10px] font-mono mt-0.5">
                {preset.duration >= 3600 
                  ? `${Math.floor(preset.duration / 3600)}h ${Math.floor((preset.duration % 3600) / 60)}m`
                  : `${Math.floor(preset.duration / 60)}m`
                }
              </div>
            </div>
          </button>
        ))}
      </div>
    </div>
  );
}

export default QuickPresets;