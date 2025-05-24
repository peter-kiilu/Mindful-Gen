// src/components/MoodSelector.tsx
"use client";
import { FiSmile, FiMeh, FiFrown, FiZap } from "react-icons/fi";

const moods = [
  { icon: <FiSmile />, label: "Happy", value: "happy", color: "text-green-500" },
  { icon: <FiMeh />, label: "Neutral", value: "neutral", color: "text-yellow-500" },
  { icon: <FiFrown />, label: "Sad", value: "sad", color: "text-red-500" },
  { icon: <FiZap />, label: "Energetic", value: "energetic", color: "text-purple-500" },
];

export function MoodSelector({
  selectedMood,
  onSelect,
}: {
  selectedMood: string | null;
  onSelect: (mood: string) => void;
}) {
  return (
    <div className="flex gap-2 mb-4">
      {moods.map((mood) => (
        <button
          key={mood.value}
          onClick={() => onSelect(mood.value)}
          className={`flex items-center gap-2 px-3 py-2 rounded-full text-sm ${
            selectedMood === mood.value
              ? `${mood.color} bg-opacity-20 ${mood.color.replace('text', 'bg')}`
              : "bg-gray-100 hover:bg-gray-200"
          }`}
        >
          <span className={mood.color}>{mood.icon}</span>
          {mood.label}
        </button>
      ))}
    </div>
  );
}