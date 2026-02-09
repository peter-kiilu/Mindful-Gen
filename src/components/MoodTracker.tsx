// src/components/MoodTracker.tsx
"use client";
import { useState } from "react";
import { FiSmile, FiMeh, FiFrown, FiZap } from "react-icons/fi";
import { supabase } from "@/lib/supabase";
import { useAuth } from "@/lib/authContext";

const moods = [
  { icon: <FiZap size={28} />, label: "Peak Performance", value: "energetic", color: "text-purple-500", glow: "shadow-purple-500/20" },
  { icon: <FiSmile size={28} />, label: "High Frequency", value: "happy", color: "text-indigo-500", glow: "shadow-indigo-500/20" },
  { icon: <FiMeh size={28} />, label: "Balanced", value: "neutral", color: "text-cyan-500", glow: "shadow-cyan-500/20" },
  { icon: <FiFrown size={28} />, label: "Recalibrating", value: "sad", color: "text-pink-500", glow: "shadow-pink-500/20" },
];

export function MoodTracker() {
  const { user } = useAuth();
  const [selectedMood, setSelectedMood] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const handleMoodSelect = async (mood: string) => {
    if (!user) return;
    setSelectedMood(mood);
    setLoading(true);

    try {
      const { error } = await supabase.from("moods").upsert({
        user_id: user.id,
        mood: mood,
        date: new Date().toISOString().split('T')[0],
      }, { onConflict: 'user_id,date' });

      if (error) throw error;
    } catch (err) {
      console.error("Error saving mood:", err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="glass-card p-8 rounded-[2.5rem] shadow-xl border-none relative overflow-hidden group">
      <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-20 transition-opacity">
        <FiZap size={80} className="text-indigo-500 rotate-12" />
      </div>
      
      <h2 className="font-black text-2xl mb-8 tracking-tight text-slate-800 dark:text-white">
        Current <span className="text-indigo-500">Frequency?</span>
      </h2>
      
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {moods.map((mood) => (
          <button
            key={mood.value}
            disabled={loading}
            onClick={() => handleMoodSelect(mood.value)}
            className={`flex flex-col items-center p-6 rounded-3xl transition-all duration-500 border-2 ${
              selectedMood === mood.value 
                ? `bg-white dark:bg-slate-800 border-indigo-500 shadow-2xl ${mood.glow} scale-105` 
                : "bg-white/5 border-transparent hover:bg-white/10"
            }`}
          >
            <span className={`${selectedMood === mood.value ? mood.color : "text-gray-400"} mb-3 transition-colors duration-500`}>
              {mood.icon}
            </span>
            <span className={`text-[10px] font-black uppercase tracking-widest ${selectedMood === mood.value ? "text-slate-800 dark:text-white" : "text-gray-500"}`}>
              {mood.label}
            </span>
          </button>
        ))}
      </div>
      {selectedMood && (
        <p className="mt-6 text-xs font-bold text-indigo-500 animate-pulse uppercase tracking-[0.2em]">
          Frequency Synchronized
        </p>
      )}
    </div>
  );
}