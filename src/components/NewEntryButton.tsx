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
        className="flex items-center gap-2 bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-6 py-3 rounded-2xl font-black uppercase tracking-widest text-xs hover:scale-[1.05] active:scale-95 transition-all shadow-lg shadow-indigo-500/25"
      >
        <FiPlus size={18} /> New Flow
      </button>
      <JournalEntryModal 
        isOpen={isOpen} 
        onClose={() => setIsOpen(false)} 
        onSuccess={() => {
          // You could add a signal here to refresh lists if needed
          window.location.reload(); // Simple way to refresh state across components
        }}
      />
    </>
  );
}