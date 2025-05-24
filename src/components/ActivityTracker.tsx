// src/components/ActivityTracker.tsx
"use client";
import { FiTrendingUp } from "react-icons/fi";

export function ActivityTracker() {
  const activityData = [
    { day: "Mon", steps: 8432 },
    { day: "Tue", steps: 10234 },
    { day: "Wed", steps: 7563 },
    { day: "Thu", steps: 8921 },
    { day: "Fri", steps: 11345 },
    { day: "Sat", steps: 5678 },
    { day: "Sun", steps: 12456 },
  ];

  const maxSteps = Math.max(...activityData.map((item) => item.steps));

  return (
    <div className="bg-blue p-6 rounded-xl shadow-sm">
      <div className="flex justify-between items-center mb-6">
        <h2 className="font-medium text-lg">Weekly Steps</h2>
        <div className="flex items-center gap-2 text-green-500">
          <FiTrendingUp /> 12% increase
        </div>
      </div>
      
      <div className="flex items-end justify-between h-40">
        {activityData.map((item) => (
          <div key={item.day} className="flex flex-col items-center">
            <div
              className="bg-green-400 w-8 rounded-t-sm hover:bg-green-500 transition-colors"
              style={{
                height: `${(item.steps / maxSteps) * 100}%`,
              }}
            />
            <span className="text-xs mt-2">{item.day}</span>
          </div>
        ))}
      </div>
    </div>
  );
}