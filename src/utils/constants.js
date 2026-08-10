export const TIMER_PRESETS = [
  { name: 'Quick Break', duration: 300, icon: '☕', color: '#10b981' },
  { name: 'Focus Session', duration: 900, icon: '🎯', color: '#8b5cf6' },
  { name: 'Deep Work', duration: 1800, icon: '📚', color: '#3b82f6' },
  { name: 'Workout', duration: 3600, icon: '💪', color: '#ef4444' },
  { name: 'Movie Time', duration: 7200, icon: '🎬', color: '#f59e0b' },
  { name: 'Sleep Timer', duration: 28800, icon: '😴', color: '#6366f1' },
  { name: 'Cooking', duration: 2700, icon: '🍳', color: '#f97316' },
  { name: 'Meditation', duration: 600, icon: '🧘', color: '#14b8a6' },
];

export const STORAGE_KEYS = {
  TIMERS: 'timerpro_timers',
  HISTORY: 'timerpro_history',
  STATS: 'timerpro_stats',
  SETTINGS: 'timerpro_settings'
};

export const SOUNDS = {
  TICK: '/sounds/tick.mp3',
  COMPLETE: '/sounds/complete.mp3',
  ALERT: '/sounds/alert.mp3'
};