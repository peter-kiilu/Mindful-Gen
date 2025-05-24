// src/components/ActivityGoals.tsx
"use client";
import { FiTarget } from "react-icons/fi";

export function ActivityGoals() {
  const goals = [
    { name: "Daily Steps", current: 8432, target: 10000 },
    { name: "Active Minutes", current: 45, target: 60 },
    { name: "Workouts", current: 3, target: 5 },
  ];

  return (
    <div className="bg-blue p-6 rounded-xl shadow-sm">
      <h2 className="font-medium text-lg mb-4 flex items-center gap-2">
        <FiTarget /> Your Goals
      </h2>
      <div className="space-y-4">
        {goals.map((goal) => (
          <div key={goal.name}>
            <div className="flex justify-between text-sm mb-1">
              <span>{goal.name}</span>
              <span>
                {goal.current}/{goal.target}
              </span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2">
              <div
                className="bg-blue-500 h-2 rounded-full"
                style={{
                  width: `${Math.min(100, (goal.current / goal.target) * 100)}%`,
                }}
              ></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}