'use client';
import { useState, useEffect } from 'react';
import { FiChevronLeft, FiChevronRight, FiCalendar } from 'react-icons/fi';
import { supabase } from '@/lib/supabase';
import { useAuth } from '@/lib/authContext';

const moods = {
  peak: 'bg-gradient-to-br from-purple-500 to-indigo-600 text-white shadow-lg shadow-purple-500/20',
  happy: 'bg-gradient-to-br from-indigo-400 to-blue-500 text-white shadow-lg shadow-indigo-500/20',
  neutral: 'bg-gradient-to-br from-cyan-400 to-teal-500 text-white shadow-lg shadow-cyan-500/20',
  sad: 'bg-gradient-to-br from-pink-400 to-rose-500 text-white shadow-lg shadow-pink-500/20',
  energetic: 'bg-gradient-to-br from-amber-400 to-orange-500 text-white shadow-lg shadow-amber-500/20',
};

type Mood = keyof typeof moods;

export function MoodCalendar() {
  const { user } = useAuth();
  const [currentDate, setCurrentDate] = useState(new Date());
  const [moodData, setMoodData] = useState<Record<string, Mood>>({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchMoods() {
      if (!user) return;
      
      const firstDay = new Date(currentDate.getFullYear(), currentDate.getMonth(), 1).toISOString();
      const lastDay = new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 0).toISOString();

      try {
        const { data, error } = await supabase
          .from("moods")
          .select("date, mood")
          .eq("user_id", user.id)
          .gte("date", firstDay.split('T')[0])
          .lte("date", lastDay.split('T')[0]);

        if (error) throw error;

        const mapped = (data || []).reduce((acc, curr) => {
          acc[curr.date] = curr.mood as Mood;
          return acc;
        }, {} as Record<string, Mood>);

        setMoodData(mapped);
      } catch (err) {
        console.error("Error fetching moods:", err);
      } finally {
        setLoading(false);
      }
    }
    fetchMoods();
  }, [user, currentDate]);

  const daysInMonth = new Date(
    currentDate.getFullYear(),
    currentDate.getMonth() + 1,
    0
  ).getDate();

  const firstDayOfMonth = new Date(
    currentDate.getFullYear(),
    currentDate.getMonth(),
    1
  ).getDay();

  return (
    <div className="glass-card p-8 rounded-[2rem] shadow-sm text-slate-800 dark:text-white relative overflow-hidden border-none">
      <div className="flex justify-between items-center mb-8">
        <h2 className="font-black text-xl flex items-center gap-2">
          <FiCalendar className="text-indigo-500" /> Timeline
        </h2>
        <div className="flex items-center gap-6">
          <button
            onClick={() =>
              setCurrentDate(
                new Date(currentDate.getFullYear(), currentDate.getMonth() - 1, 1)
              )
            }
            className="p-2 hover:bg-white/10 rounded-full transition-colors text-gray-400"
          >
            <FiChevronLeft size={20} />
          </button>
          <span className="font-black uppercase tracking-[0.2em] text-xs">
            {currentDate.toLocaleString('default', {
              month: 'long',
              year: 'numeric',
            })}
          </span>
          <button
            onClick={() =>
              setCurrentDate(
                new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 1)
              )
            }
            className="p-2 hover:bg-white/10 rounded-full transition-colors text-gray-400"
          >
            <FiChevronRight size={20} />
          </button>
        </div>
      </div>

      <div className="grid grid-cols-7 gap-3">
        {['S', 'M', 'T', 'W', 'T', 'F', 'S'].map((day, idx) => (
          <div
            key={`${day}-${idx}`}
            className="text-center font-black text-[10px] text-gray-400 py-2"
          >
            {day}
          </div>
        ))}

        {Array.from({ length: firstDayOfMonth }).map((_, index) => (
          <div key={`empty-${index}`} className="h-10" />
        ))}

        {Array.from({ length: daysInMonth }).map((_, index) => {
          const day = index + 1;
          const dateKey = `${currentDate.getFullYear()}-${String(
            currentDate.getMonth() + 1
          ).padStart(2, '0')}-${String(day).padStart(2, '0')}`;
          const mood = moodData[dateKey];

          return (
            <div
              key={day}
              className={`h-10 w-10 mx-auto flex items-center justify-center rounded-2xl text-[10px] font-black transition-all duration-300 ${
                mood ? moods[mood] : 'bg-white/5 text-gray-500 hover:bg-white/10'
              }`}
            >
              {day}
            </div>
          );
        })}
      </div>
    </div>
  );
}
