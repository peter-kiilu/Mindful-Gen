// src/components/MoodCalendar.tsx
"use client";
import { useState } from "react";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

const moods = {
  happy: "bg-green-100 text-green-800",
  neutral: "bg-yellow-100 text-yellow-800",
  sad: "bg-red-100 text-red-800",
  energetic: "bg-purple-100 text-purple-800",
};

export function MoodCalendar() {
  const [currentDate, setCurrentDate] = useState(new Date());
  
  // Mock data - replace with real data from Firebase
  const moodData = {
    "2023-06-15": "happy",
    "2023-06-16": "neutral",
    "2023-06-17": "sad",
    "2023-06-18": "energetic",
  };

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
    <div className="bg-blue p-6 rounded-xl shadow-sm">
      <div className="flex justify-between items-center mb-4">
        <h2 className="font-medium text-lg">Mood Calendar</h2>
        <div className="flex items-center gap-4">
          <button onClick={() => setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() - 1, 1))}>
            <FiChevronLeft />
          </button>
          <span className="font-medium">
            {currentDate.toLocaleString("default", { month: "long", year: "numeric" })}
          </span>
          <button onClick={() => setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 1))}>
            <FiChevronRight />
          </button>
        </div>
      </div>
      
      <div className="grid grid-cols-7 gap-2">
        {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map((day) => (
          <div key={day} className="text-center font-medium text-sm py-2">
            {day}
          </div>
        ))}
        
        {Array.from({ length: firstDayOfMonth }).map((_, index) => (
          <div key={`empty-${index}`} className="h-10" />
        ))}
        
        {Array.from({ length: daysInMonth }).map((_, index) => {
          const day = index + 1;
          const dateKey = `${currentDate.getFullYear()}-${String(currentDate.getMonth() + 1).padStart(2, "0")}-${String(day).padStart(2, "0")}`;
          const mood = moodData[dateKey];
          
          return (
            <div
              key={day}
              className={`h-10 flex items-center justify-center rounded-full ${
                mood ? moods[mood] : "bg-black-500"
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