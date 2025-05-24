"use client";
import Link from "next/link";
import { FiBook } from "react-icons/fi";

export function RecentJournalEntries() {
  const entries = [
    { id: 1, title: "Today's Reflection", preview: "I felt really productive today...", date: "2h ago" },
    { id: 2, title: "Morning Thoughts", preview: "Woke up feeling anxious but...", date: "1d ago" },
  ];

  return (
    <div className="bg-white p-6 rounded-xl shadow-sm">
      <div className="flex justify-between items-center mb-4">
        <h2 className="font-medium text-lg">Recent Journal Entries</h2>
        <Link href="/journal" className="text-sm text-indigo-600 hover:underline">
          View All
        </Link>
      </div>
      <div className="space-y-4">
        {entries.map((entry) => (
          <Link
            key={entry.id}
            href={`/journal/${entry.id}`}
            className="block p-3 hover:bg-gray-50 rounded-lg transition-colors"
          >
            <h3 className="font-medium">{entry.title}</h3>
            <p className="text-sm text-gray-500 line-clamp-1">{entry.preview}</p>
            <p className="text-xs text-gray-400 mt-1">{entry.date}</p>
          </Link>
        ))}
      </div>
    </div>
  );
}