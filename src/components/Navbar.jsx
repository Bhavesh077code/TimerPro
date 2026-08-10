// src/components/Navbar.jsx
import React, { useContext, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { TimerContext } from '../context/TimerContext';
import { formatTime } from '../utils/timerHelpers';

const Navbar = () => {
  const location = useLocation();
  const { activeTimers, completedTimers } = useContext(TimerContext);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const getTodayStats = () => {
    try {
      const today = new Date().toDateString();
      const todayTimers = (completedTimers || []).filter(t => 
        t && new Date(t.completedAt).toDateString() === today
      );
      return {
        count: todayTimers.length,
        time: todayTimers.reduce((acc, t) => acc + (t.duration || 0), 0)
      };
    } catch (e) {
      return { count: 0, time: 0 };
    }
  };

  const todayStats = getTodayStats();

  const isActive = (path) => {
    return location.pathname === path 
      ? 'bg-gradient-to-r from-purple-500 to-pink-500 text-white shadow-lg shadow-purple-500/25' 
      : 'text-gray-400 hover:text-white hover:bg-white/5';
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <nav className="relative z-50 sticky top-0 backdrop-blur-2xl bg-black/40 border-b border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 cursor-pointer flex-shrink-0">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center text-xl shadow-lg shadow-purple-500/25">
              ⏱️
            </div>
            <div>
              <h1 className="text-xl font-bold bg-gradient-to-r from-purple-400 via-pink-400 to-purple-400 bg-clip-text text-transparent">
                TimerPro
              </h1>
              <p className="text-[10px] text-gray-500 tracking-wider hidden sm:block">PROFESSIONAL TIMER</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-1 bg-white/5 rounded-xl p-1">
            <Link to="/">
              <button className={`px-4 py-1.5 rounded-lg text-sm font-medium transition-all duration-300 ${isActive('/')}`}>
                <span className="flex items-center gap-2">
                  <span>📊</span> Home
                  {(activeTimers || []).length > 0 && (
                    <span className="bg-red-500 text-white text-[10px] px-1.5 py-0.5 rounded-full">
                      {(activeTimers || []).length}
                    </span>
                  )}
                </span>
              </button>
            </Link>
            
            <Link to="/history">
              <button className={`px-4 py-1.5 rounded-lg text-sm font-medium transition-all duration-300 ${isActive('/history')}`}>
                <span className="flex items-center gap-2">
                  <span>📜</span> History
                  {(completedTimers || []).length > 0 && (
                    <span className="bg-purple-500 text-white text-[10px] px-1.5 py-0.5 rounded-full">
                      {(completedTimers || []).length}
                    </span>
                  )}
                </span>
              </button>
            </Link>

            <Link to="/about">
              <button className={`px-4 py-1.5 rounded-lg text-sm font-medium transition-all duration-300 ${isActive('/about')}`}>
                <span className="flex items-center gap-2">
                  <span>ℹ️</span> About
                </span>
              </button>
            </Link>

            <Link to="/contact">
              <button className={`px-4 py-1.5 rounded-lg text-sm font-medium transition-all duration-300 ${isActive('/contact')}`}>
                <span className="flex items-center gap-2">
                  <span>✉️</span> Contact
                </span>
              </button>
            </Link>
          </div>

          {/* Right Side - Stats & Legal */}
          <div className="flex items-center gap-3">
            {/* Today Stats */}
            <div className="hidden lg:flex items-center gap-3 px-3 py-1 rounded-lg bg-white/5">
              <div className="text-center">
                <div className="text-xs text-gray-500">Today</div>
                <div className="text-sm font-bold text-white">{todayStats.count}</div>
              </div>
              <div className="w-px h-8 bg-white/10"></div>
              <div className="text-center">
                <div className="text-xs text-gray-500">Time</div>
                <div className="text-sm font-bold text-purple-400">{formatTime(todayStats.time).short}</div>
              </div>
            </div>

            {/* Legal Links */}
            <div className="hidden xl:flex items-center gap-2 text-xs">
              <Link to="/privacy" className={`text-gray-500 hover:text-purple-400 transition-colors px-2 py-1 ${location.pathname === '/privacy' ? 'text-purple-400' : ''}`}>
                Privacy
              </Link>
              <span className="text-gray-600">|</span>
              <Link to="/terms" className={`text-gray-500 hover:text-purple-400 transition-colors px-2 py-1 ${location.pathname === '/terms' ? 'text-purple-400' : ''}`}>
                Terms
              </Link>
            </div>

            {/* Mobile Stats */}
            <div className="flex lg:hidden items-center gap-2 px-2 py-1 rounded-lg bg-white/5">
              <div className="text-center">
                <div className="text-[8px] text-gray-500">Today</div>
                <div className="text-xs font-bold text-white">{todayStats.count}</div>
              </div>
              <div className="w-px h-6 bg-white/10"></div>
              <div className="text-center">
                <div className="text-[8px] text-gray-500">Time</div>
                <div className="text-xs font-bold text-purple-400">{formatTime(todayStats.time).short}</div>
              </div>
            </div>

            {/* Mobile Menu Button */}
            <button 
              onClick={toggleMobileMenu}
              className="md:hidden flex items-center justify-center w-10 h-10 rounded-lg text-gray-400 hover:text-white hover:bg-white/5 transition-all duration-300"
              aria-label="Toggle menu"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {isMobileMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Legal Links */}
        <div className="hidden md:hidden flex items-center justify-center gap-2 py-1 border-t border-white/5 text-[10px]">
          <Link to="/privacy" className={`text-gray-500 hover:text-purple-400 transition-colors ${location.pathname === '/privacy' ? 'text-purple-400' : ''}`}>
            Privacy
          </Link>
          <span className="text-gray-600">|</span>
          <Link to="/terms" className={`text-gray-500 hover:text-purple-400 transition-colors ${location.pathname === '/terms' ? 'text-purple-400' : ''}`}>
            Terms
          </Link>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      <div className={`md:hidden fixed inset-x-0 top-16 bg-black/90 backdrop-blur-2xl border-b border-white/5 transition-all duration-300 overflow-hidden ${
        isMobileMenuOpen ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'
      }`}>
        <div className="px-4 py-6 space-y-2">
          <Link to="/" onClick={closeMobileMenu}>
            <div className={`flex items-center justify-between px-4 py-3 rounded-xl transition-all duration-300 ${isActive('/')}`}>
              <span className="flex items-center gap-3">
                <span>📊</span> Home
              </span>
              {(activeTimers || []).length > 0 && (
                <span className="bg-red-500 text-white text-xs px-2 py-0.5 rounded-full">
                  {(activeTimers || []).length}
                </span>
              )}
            </div>
          </Link>

          <Link to="/history" onClick={closeMobileMenu}>
            <div className={`flex items-center justify-between px-4 py-3 rounded-xl transition-all duration-300 ${isActive('/history')}`}>
              <span className="flex items-center gap-3">
                <span>📜</span> History
              </span>
              {(completedTimers || []).length > 0 && (
                <span className="bg-purple-500 text-white text-xs px-2 py-0.5 rounded-full">
                  {(completedTimers || []).length}
                </span>
              )}
            </div>
          </Link>

          <Link to="/about" onClick={closeMobileMenu}>
            <div className={`flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-300 ${isActive('/about')}`}>
              <span>ℹ️</span> About
            </div>
          </Link>

          <Link to="/contact" onClick={closeMobileMenu}>
            <div className={`flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-300 ${isActive('/contact')}`}>
              <span>✉️</span> Contact
            </div>
          </Link>

          <div className="border-t border-white/5 my-2"></div>

          <Link to="/privacy" onClick={closeMobileMenu}>
            <div className={`flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-300 text-sm ${location.pathname === '/privacy' ? 'text-purple-400 bg-white/5' : 'text-gray-400'}`}>
              <span>🔒</span> Privacy Policy
            </div>
          </Link>

          <Link to="/terms" onClick={closeMobileMenu}>
            <div className={`flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-300 text-sm ${location.pathname === '/terms' ? 'text-purple-400 bg-white/5' : 'text-gray-400'}`}>
              <span>📋</span> Terms & Conditions
            </div>
          </Link>

          <div className="border-t border-white/5 my-2 pt-2">
            <div className="flex items-center justify-between px-4 py-2">
              <span className="text-gray-500 text-sm">Today</span>
              <div className="flex items-center gap-4">
                <span className="text-white font-bold">{todayStats.count} timers</span>
                <span className="text-purple-400 font-bold">{formatTime(todayStats.time).short}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;