// src/components/MoodStats.tsx
"use client";
import { FiPieChart } from "react-icons/fi";

export function MoodStats() {
  const stats = [
    { mood: "High Vibe", value: 12, color: "bg-indigo-500" },
    { mood: "Balanced", value: 8, color: "bg-cyan-500" },
    { mood: "Low Battery", value: 3, color: "bg-pink-500" },
    { mood: "Ascending", value: 5, color: "bg-purple-500" },
  ];

  const total = stats.reduce((sum, item) => sum + item.value, 0);

  return (
    <div className="glass-card p-6 rounded-3xl shadow-sm border-none">
      <h2 className="font-black text-lg mb-6 flex items-center gap-2 text-slate-800 dark:text-white">
        <FiPieChart className="text-indigo-500" /> Emotional Spectrum
      </h2>
      <div className="space-y-5">
        {stats.map((item) => (
          <div key={item.mood}>
            <div className="flex justify-between text-[10px] font-black uppercase tracking-widest mb-2 text-gray-500">
              <span>{item.mood}</span>
              <span className="text-slate-700 dark:text-gray-300">{Math.round((item.value / total) * 100)}%</span>
            </div>
            <div className="w-full bg-slate-100 dark:bg-white/5 rounded-full h-1.5 overflow-hidden">
              <div
                className={`${item.color} h-full rounded-full shadow-[0_0_10px_rgba(0,0,0,0.1)] transition-all duration-1000`}
                style={{ width: `${(item.value / total) * 100}%` }}
              ></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}