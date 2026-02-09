// src/components/MoodSelector.tsx
"use client";
import { FiSmile, FiMeh, FiFrown, FiZap } from "react-icons/fi";

const moods = [
  { icon: <FiZap size={18} />, label: "Peak", value: "energetic", color: "text-purple-500", bg: "bg-purple-500/10" },
  { icon: <FiSmile size={18} />, label: "High", value: "happy", color: "text-indigo-500", bg: "bg-indigo-500/10" },
  { icon: <FiMeh size={18} />, label: "Level", value: "neutral", color: "text-cyan-500", bg: "bg-cyan-500/10" },
  { icon: <FiFrown size={18} />, label: "Low", value: "sad", color: "text-pink-500", bg: "bg-pink-500/10" },
];

export function MoodSelector({
  selectedMood,
  onSelect,
}: {
  selectedMood: string | null;
  onSelect: (mood: string) => void;
}) {
  return (
    <div className="flex flex-wrap gap-3 mb-6">
      {moods.map((mood) => (
        <button
          key={mood.value}
          type="button"
          onClick={() => onSelect(mood.value)}
          className={`flex items-center gap-2 px-4 py-2.5 rounded-2xl text-[10px] font-black uppercase tracking-widest transition-all duration-300 border ${
            selectedMood === mood.value
              ? `${mood.color} ${mood.bg} border-${mood.color.split('-')[1]}-500/30 scale-105 shadow-lg shadow-indigo-500/5`
              : "bg-white/5 border-transparent text-gray-500 hover:bg-white/10"
          }`}
        >
          <span className={selectedMood === mood.value ? mood.color : "text-gray-400"}>
            {mood.icon}
          </span>
          {mood.label}
        </button>
      ))}
    </div>
  );
}