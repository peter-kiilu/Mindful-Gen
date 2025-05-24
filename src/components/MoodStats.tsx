// src/components/MoodStats.tsx
"use client";
import { FiPieChart } from "react-icons/fi";

export function MoodStats() {
  const stats = [
    { mood: "Happy", value: 12, color: "bg-green-500" },
    { mood: "Neutral", value: 8, color: "bg-yellow-500" },
    { mood: "Sad", value: 3, color: "bg-red-500" },
    { mood: "Energetic", value: 5, color: "bg-purple-500" },
  ];

  const total = stats.reduce((sum, item) => sum + item.value, 0);

  return (
    <div className="bg-blue p-6 rounded-xl shadow-sm">
      <h2 className="font-medium text-lg mb-4 flex items-center gap-2">
        <FiPieChart /> Mood Statistics
      </h2>
      <div className="space-y-4">
        {stats.map((item) => (
          <div key={item.mood}>
            <div className="flex justify-between text-sm mb-1">
              <span>{item.mood}</span>
              <span>{Math.round((item.value / total) * 100)}%</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2">
              <div
                className={`${item.color} h-2 rounded-full`}
                style={{ width: `${(item.value / total) * 100}%` }}
              ></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}