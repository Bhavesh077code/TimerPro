// src/context/TimerContext.jsx
import React, { createContext, useState, useEffect, useCallback, useRef } from 'react';

export const TimerContext = createContext();

export const TimerProvider = ({ children }) => {
  const [activeTimers, setActiveTimers] = useState([]);
  const [completedTimers, setCompletedTimers] = useState([]);
  const [totalStats, setTotalStats] = useState({
    totalTimers: 0,
    totalTime: 0,
    presetsUsed: 0,
    customsCreated: 0
  });

  // ✅ Ref to prevent duplicate saves
  const isSavingRef = useRef(false);

  // ✅ Load from localStorage on mount
  useEffect(() => {
    try {
      const savedData = localStorage.getItem('timerproData');
      if (savedData) {
        const data = JSON.parse(savedData);
        setCompletedTimers(data.completed || []);
        setTotalStats(data.stats || { totalTimers: 0, totalTime: 0, presetsUsed: 0, customsCreated: 0 });
        
        // ✅ Restore active timers with correct remaining time
        const savedActive = data.activeTimers || [];
        if (savedActive.length > 0) {
          const restoredTimers = savedActive.map(t => {
            // ✅ Calculate remaining based on startTime
            const elapsed = Math.floor((Date.now() - (t.startTime || Date.now())) / 1000);
            const remaining = Math.max(0, (t.duration || 0) - elapsed);
            return {
              ...t,
              remaining: remaining,
              status: remaining > 0 ? 'running' : 'completed',
              isPaused: t.isPaused || false,
              startTime: t.startTime || Date.now()
            };
          });
          setActiveTimers(restoredTimers);
        }
      }
    } catch (error) {
      console.warn('Failed to load data from localStorage:', error);
    }
  }, []);

  // ✅ Save to localStorage whenever state changes
  useEffect(() => {
    if (isSavingRef.current) return;
    isSavingRef.current = true;

    try {
      const dataToSave = {
        completed: completedTimers,
        stats: totalStats,
        activeTimers: activeTimers.map(t => ({
          id: t.id,
          name: t.name,
          duration: t.duration,
          type: t.type,
          status: t.status,
          startTime: t.startTime,
          createdAt: t.createdAt,
          isPaused: t.isPaused || false
        }))
      };
      localStorage.setItem('timerproData', JSON.stringify(dataToSave));
    } catch (error) {
      console.warn('Failed to save data to localStorage:', error);
    } finally {
      isSavingRef.current = false;
    }
  }, [completedTimers, totalStats, activeTimers]);

  // ✅ Add timer with startTime
  const addTimer = useCallback((name, duration, type) => {
    if (!duration || duration <= 0) {
      console.warn('Invalid duration:', duration);
      return;
    }

    const newTimer = {
      id: Date.now(),
      name: name || `${type} Timer`,
      duration,
      remaining: duration,
      type: type || 'custom',
      status: 'running',
      startTime: Date.now(),
      createdAt: new Date().toISOString(),
      isPaused: false
    };
    
    setActiveTimers(prev => [...prev, newTimer]);
    
    if (type === 'preset') {
      setTotalStats(prev => ({ ...prev, presetsUsed: (prev.presetsUsed || 0) + 1 }));
    } else {
      setTotalStats(prev => ({ ...prev, customsCreated: (prev.customsCreated || 0) + 1 }));
    }
  }, []);

  // ✅ Update timer remaining
  const updateTimer = useCallback((timerId, newRemaining, isComplete = false, isPaused = false) => {
    if (!timerId) return;

    setActiveTimers(prev => {
      let completedTimer = null;
      const updatedTimers = prev.map(t => {
        if (t.id === timerId) {
          // ✅ If timer is complete
          if (isComplete || newRemaining <= 0) {
            completedTimer = {
              ...t,
              remaining: 0,
              completedAt: new Date().toISOString(),
              status: 'completed'
            };
            return null;
          }
          
          // ✅ Update remaining and pause state
          const safeRemaining = Math.max(0, newRemaining);
          return {
            ...t,
            remaining: safeRemaining,
            status: safeRemaining > 0 ? 'running' : 'completed',
            isPaused: isPaused || false,
            startTime: isPaused ? t.startTime : Date.now() - (t.duration - safeRemaining) * 1000
          };
        }
        return t;
      }).filter(t => t !== null);

      // ✅ If timer completed, add to completed list
      if (completedTimer) {
        setCompletedTimers(prevCompleted => [...prevCompleted, completedTimer]);
        setTotalStats(prevStats => ({
          ...prevStats,
          totalTimers: (prevStats.totalTimers || 0) + 1,
          totalTime: (prevStats.totalTime || 0) + completedTimer.duration
        }));
      }

      return updatedTimers;
    });
  }, []);

  // ✅ Complete timer
  const completeTimer = useCallback((timerId) => {
    if (!timerId) return;

    setActiveTimers(prev => {
      const timer = prev.find(t => t.id === timerId);
      if (timer) {
        setCompletedTimers(prevCompleted => [...prevCompleted, {
          ...timer,
          remaining: 0,
          completedAt: new Date().toISOString(),
          status: 'completed'
        }]);
        setTotalStats(prevStats => ({
          ...prevStats,
          totalTimers: (prevStats.totalTimers || 0) + 1,
          totalTime: (prevStats.totalTime || 0) + timer.duration
        }));
        return prev.filter(t => t.id !== timerId);
      }
      return prev;
    });
  }, []);

  // ✅ Remove timer
  const removeTimer = useCallback((timerId) => {
    if (!timerId) return;
    setActiveTimers(prev => prev.filter(t => t.id !== timerId));
  }, []);

  // ✅ Clear all history
  const clearHistory = useCallback(() => {
    setCompletedTimers([]);
    setTotalStats({
      totalTimers: 0,
      totalTime: 0,
      presetsUsed: 0,
      customsCreated: 0
    });
  }, []);

  // ✅ Reset timer
  const resetTimer = useCallback((timerId) => {
    if (!timerId) return;
    
    setActiveTimers(prev => 
      prev.map(t => {
        if (t.id === timerId) {
          return {
            ...t,
            remaining: t.duration,
            startTime: Date.now(),
            status: 'running',
            isPaused: false
          };
        }
        return t;
      })
    );
  }, []);

  // ✅ Get timer by ID
  const getTimer = useCallback((timerId) => {
    if (!timerId) return null;
    return activeTimers.find(t => t.id === timerId) || null;
  }, [activeTimers]);

  // ✅ Get running timers count
  const getRunningCount = useCallback(() => {
    return activeTimers.filter(t => t.status === 'running' && !t.isPaused).length;
  }, [activeTimers]);

  // ✅ Get total active time
  const getTotalActiveTime = useCallback(() => {
    return activeTimers.reduce((acc, t) => acc + t.remaining, 0);
  }, [activeTimers]);

  // ✅ Cleanup completed timers from active (safety)
  useEffect(() => {
    const hasCompleted = activeTimers.some(t => t.status === 'completed');
    if (hasCompleted) {
      setActiveTimers(prev => prev.filter(t => t.status !== 'completed'));
    }
  }, [activeTimers]);

  return (
    <TimerContext.Provider value={{
      activeTimers,
      completedTimers,
      totalStats,
      addTimer,
      completeTimer,
      removeTimer,
      clearHistory,
      updateTimer,
      resetTimer,
      getTimer,
      getRunningCount,
      getTotalActiveTime
    }}>
      {children}
    </TimerContext.Provider>
  );
};