// src/components/JournalEntryList.tsx
"use client";
import { FiEdit2, FiTrash2 } from "react-icons/fi";

const mockEntries = [
  {
    id: "1",
    title: "A Great Day",
    date: "2023-05-15",
    mood: "happy",
    preview: "Today was wonderful! I accomplished so much and felt really productive...",
  },
  {
    id: "2",
    title: "Feeling Stressed",
    date: "2023-05-14",
    mood: "sad",
    preview: "Work has been overwhelming lately. Need to find better ways to cope...",
  },
];

export function JournalEntryList() {
  return (
    <div className="space-y-4">
      {mockEntries.map((entry) => (
        <div key={entry.id} className="bg-white p-4 rounded-xl shadow-sm border">
          <div className="flex justify-between items-start">
            <div>
              <h3 className="font-medium text-black">{entry.title}</h3>
              <p className="text-sm text-black">{entry.date}</p>
            </div>
            <div className="flex gap-2">
              <button className="text-gray-400 hover:text-indigo-600">
                <FiEdit2 />
              </button>
              <button className="text-gray-400 hover:text-red-600">
                <FiTrash2 />
              </button>
            </div>
          </div>
          <p className="mt-2 text-gray-600 line-clamp-2">{entry.preview}</p>
          <div className="mt-3 flex justify-between items-center">
            <span className="px-3 py-1 bg-blue-100 text-blue-800 text-xs rounded-full">
              {entry.mood}
            </span>
            <button className="text-sm text-indigo-600 hover:underline">
              Read more
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}