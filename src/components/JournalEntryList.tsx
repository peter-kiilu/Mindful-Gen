// src/components/JournalEntryList.tsx
"use client";
import { FiEdit2, FiTrash2, FiClock, FiMaximize2 } from "react-icons/fi";
import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabase";
import { useAuth } from "@/lib/authContext";
import { JournalEntryModal } from "./JournalEntryModal";

type Entry = {
  id: string;
  title: string;
  date: string;
  mood: string;
  content: string;
};

export function JournalEntryList() {
  const { user } = useAuth();
  const [entries, setEntries] = useState<Entry[]>([]);
  const [loading, setLoading] = useState(true);
  const [editingEntry, setEditingEntry] = useState<Entry | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const fetchEntries = async () => {
    if (!user) return;
    try {
      const { data, error } = await supabase
        .from("journals")
        .select("*")
        .eq("user_id", user.id)
        .order("date", { ascending: false });

      if (error) throw error;
      setEntries(data || []);
    } catch (error) {
      console.error("Error fetching entries:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (id: string) => {
    if (!confirm("Are you sure you want to delete this reflection? it will be lost in the void forever.")) return;
    
    try {
      const { error } = await supabase.from("journals").delete().eq("id", id);
      if (error) throw error;
      setEntries(entries.filter(e => e.id !== id));
    } catch (error) {
      console.error("Delete error:", error);
      alert("Failed to delete entry.");
    }
  };

  const handleEdit = (entry: Entry) => {
    setEditingEntry(entry);
    setIsModalOpen(true);
  };

  useEffect(() => {
    fetchEntries();
  }, [user]);

  if (loading) {
    return (
      <div className="space-y-4">
        {[1, 2, 3].map((i) => (
          <div key={i} className="glass-card p-6 h-32 animate-pulse rounded-2xl" />
        ))}
      </div>
    );
  }

  return (
    <div className="space-y-6">
      {entries.length === 0 ? (
        <div className="glass-card p-12 text-center rounded-3xl">
          <p className="text-gray-400 font-medium">No reflections found in your 2026 timeline yet.</p>
          <p className="text-xs text-gray-500 mt-2">Create your first entry to start your journey.</p>
        </div>
      ) : (
        entries.map((entry) => (
          <div key={entry.id} className="glass-card p-6 rounded-3xl shadow-sm border-none hover:translate-x-1 transition-transform group">
            <div className="flex justify-between items-start">
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-1">
                  <span className="p-1.5 bg-indigo-500/10 rounded-lg">
                    <FiClock className="text-indigo-400" size={14} />
                  </span>
                  <p className="text-[10px] font-bold uppercase tracking-widest text-gray-400">{entry.date}</p>
                </div>
                <h3 className="text-xl font-black text-slate-800 dark:text-white mb-2">{entry.title}</h3>
              </div>
              <div className="flex gap-2">
                <button 
                  onClick={() => handleEdit(entry)}
                  className="p-2 text-gray-400 hover:text-indigo-400 hover:bg-indigo-400/10 rounded-xl transition-all"
                >
                  <FiEdit2 size={18} />
                </button>
                <button 
                  onClick={() => handleDelete(entry.id)}
                  className="p-2 text-gray-400 hover:text-pink-400 hover:bg-pink-400/10 rounded-xl transition-all"
                >
                  <FiTrash2 size={18} />
                </button>
              </div>
            </div>
            <p className="mt-3 text-gray-500 dark:text-gray-400 line-clamp-3 text-sm leading-relaxed whitespace-pre-wrap">
              {entry.content}
            </p>
            <div className="mt-5 flex justify-between items-center">
              <span className={`px-4 py-1.5 bg-indigo-500/5 backdrop-blur-md text-[10px] font-black rounded-full border border-indigo-500/10 uppercase tracking-widest text-indigo-500`}>
                {entry.mood}
              </span>
              <button 
                onClick={() => handleEdit(entry)}
                className="text-xs font-black uppercase tracking-widest text-indigo-400 hover:text-indigo-300 transition-colors flex items-center gap-1"
              >
                Open Vessel <FiMaximize2 size={14} />
              </button>
            </div>
          </div>
        ))
      )}
      
      {isModalOpen && (
        <JournalEntryModal 
          isOpen={isModalOpen}
          onClose={() => {
            setIsModalOpen(false);
            setEditingEntry(null);
          }}
          onSuccess={fetchEntries}
          initialData={editingEntry || undefined}
        />
      )}
    </div>
  );
}