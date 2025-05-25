// src/components/MoodTracker.tsx
"use client";
import { useState } from "react";
import { FiSmile, FiMeh, FiFrown } from "react-icons/fi";

const moods = [
  { icon: <FiSmile size={24} />, label: "Good", value: "good", color: "text-green-500" },
  { icon: <FiMeh size={24} />, label: "Okay", value: "okay", color: "text-yellow-500" },
  { icon: <FiFrown size={24} />, label: "Bad", value: "bad", color: "text-red-500" },
];

export function MoodTracker() {
  const [selectedMood, setSelectedMood] = useState<string | null>(null);

  return (
    <div className="bg-blue p-6 rounded-xl shadow-sm">
      <h2 className="font-medium text-lg mb-4"><p>How&apos;s your mood today?</p></h2>
      <div className="flex space-x-4">
        {moods.map((mood) => (
          <button
            key={mood.value}
            onClick={() => setSelectedMood(mood.value)}
            className={`flex flex-col items-center p-4 rounded-lg ${
              selectedMood === mood.value ? "bg-green-100" : "hover:bg-black-50"
            } transition-colors`}
          >
            <span className={`${mood.color} mb-2`}>{mood.icon}</span>
            <span className="text-sm text-black-500">{mood.label}</span>
          </button>
        ))}
      </div>
    </div>
  );
}