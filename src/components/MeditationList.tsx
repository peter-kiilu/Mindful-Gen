// src/components/MeditationList.tsx
"use client";
import { FiHeadphones } from "react-icons/fi";

const meditations = [
  { id: 1, title: "Morning Calm", duration: "5 min", category: "Focus" },
  { id: 2, title: "Anxiety Relief", duration: "10 min", category: "Relaxation" },
  { id: 3, title: "Deep Sleep", duration: "15 min", category: "Sleep" },
  { id: 4, title: "Quick Break", duration: "3 min", category: "Focus" },
];

export function MeditationList() {
  return (
    <div className="bg-blue p-6 rounded-xl shadow-sm">
      <h2 className="font-medium text-lg mb-4">Guided Meditations</h2>
      <div className="space-y-3">
        {meditations.map((meditation) => (
          <div
            key={meditation.id}
            className="flex items-center gap-3 p-3 hover:bg-purple-50 rounded-lg cursor-pointer transition-colors"
          >
            <div className="bg-purple-100 p-2 rounded-full text-purple-600">
              <FiHeadphones />
            </div>
            <div className="flex-1">
              <h3 className="font-medium">{meditation.title}</h3>
              <p className="text-sm text-gray-500">
                {meditation.duration} • {meditation.category}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}