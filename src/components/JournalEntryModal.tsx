// src/components/JournalEntryModal.tsx
"use client";
import { useState } from "react";
import { MoodSelector } from "./MoodSelector";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

type JournalEntryModalProps = {
  isOpen: boolean;
  onClose: () => void;
};

export function JournalEntryModal({ isOpen, onClose }: JournalEntryModalProps) {
  const [content, setContent] = useState("");
  const [mood, setMood] = useState<string | null>(null);
  const [title, setTitle] = useState("");

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
      <div className="bg-white rounded-xl p-6 w-full max-w-2xl max-h-[90vh] flex flex-col">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-bold">New Journal Entry</h2>
          <button onClick={onClose} className="text-gray-500 hover:text-gray-700">
            ✕
          </button>
        </div>
        
        <input
          type="text"
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="mb-4 p-2 border rounded-lg"
        />
        
        <MoodSelector selectedMood={mood} onSelect={setMood} />
        
        <div className="flex-1 overflow-y-auto my-4">
          <ReactQuill
            theme="snow"
            value={content}
            onChange={setContent}
            placeholder="Write your thoughts..."
            className="h-[300px]"
          />
        </div>
        
        <div className="flex justify-end gap-3 pt-4 border-t">
          <button
            onClick={onClose}
            className="px-4 py-2 text-gray-600 hover:bg-gray-100 rounded-lg"
          >
            Cancel
          </button>
          <button
            onClick={() => {
              // Save logic here
              onClose();
            }}
            className="px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700"
          >
            Save Entry
          </button>
        </div>
      </div>
    </div>
  );
}