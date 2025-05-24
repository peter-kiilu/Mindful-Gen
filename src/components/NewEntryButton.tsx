// src/components/NewEntryButton.tsx
"use client";
import { useState } from "react";
import { JournalEntryModal } from "./JournalEntryModal";
import { FiPlus } from "react-icons/fi";

export function NewEntryButton() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <button
        onClick={() => setIsOpen(true)}
        className="flex items-center gap-2 bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700 transition-colors"
      >
        <FiPlus /> New Entry
      </button>
      <JournalEntryModal isOpen={isOpen} onClose={() => setIsOpen(false)} />
    </>
  );
}