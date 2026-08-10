export const formatTime = (seconds) => {
  const h = Math.floor(seconds / 3600);
  const m = Math.floor((seconds % 3600) / 60);
  const s = seconds % 60;
  return {
    hours: String(h).padStart(2, '0'),
    minutes: String(m).padStart(2, '0'),
    seconds: String(s).padStart(2, '0'),
    formatted: `${String(h).padStart(2, '0')}:${String(m).padStart(2, '0')}:${String(s).padStart(2, '0')}`,
    short: h > 0 ? `${h}h ${m}m` : `${m}m ${s}s`
  };
};

export const calculateStats = (timers) => {
  const total = timers.length;
  const totalTime = timers.reduce((acc, t) => acc + t.duration, 0);
  const averageTime = total > 0 ? Math.round(totalTime / total) : 0;
  const mostUsed = timers.reduce((acc, t) => {
    acc[t.name] = (acc[t.name] || 0) + 1;
    return acc;
  }, {});
  const mostPopular = Object.keys(mostUsed).reduce((a, b) => 
    mostUsed[a] > mostUsed[b] ? a : b, ''
  );

  return { total, totalTime, averageTime, mostPopular };
};

export const getTimeRemaining = (targetDate) => {
  const now = new Date().getTime();
  const difference = targetDate - now;
  
  if (difference <= 0) return null;
  
  return {
    days: Math.floor(difference / (1000 * 60 * 60 * 24)),
    hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
    minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
    seconds: Math.floor((difference % (1000 * 60)) / 1000)
  };
};