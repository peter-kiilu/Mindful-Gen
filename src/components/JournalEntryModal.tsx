"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { MoodSelector } from "./MoodSelector";
import { RichTextEditor } from "./RichTextEditor";
import { supabase } from "@/lib/supabase";
import { useAuth } from "@/lib/authContext";

type JournalEntryModalProps = {
  isOpen: boolean;
  onClose: () => void;
  onSuccess?: () => void;
  initialData?: {
    id: string;
    title: string;
    content: string;
    mood: string | null;
  };
};

export function JournalEntryModal({ isOpen, onClose, onSuccess, initialData }: JournalEntryModalProps) {
  const { user, loading: authLoading } = useAuth();
  const router = useRouter();
  const [content, setContent] = useState("");
  const [mood, setMood] = useState<string | null>(null);
  const [title, setTitle] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (initialData) {
      setTitle(initialData.title);
      setContent(initialData.content);
      setMood(initialData.mood);
    } else {
      setTitle("");
      setContent("");
      setMood(null);
    }
  }, [initialData, isOpen]);

  if (!isOpen) return null;

  const handleSave = async () => {
    if (!user) {
      alert("Please sign in to save your reflections.");
      router.push("/login");
      return;
    }
    
    setLoading(true);

    try {
      const entryData = {
        user_id: user.id,
        title,
        content,
        mood,
        date: initialData ? undefined : new Date().toISOString().split('T')[0],
      };

      const { error } = initialData 
        ? await supabase.from("journals").update(entryData).eq('id', initialData.id)
        : await supabase.from("journals").insert([entryData]);

      if (error) {
        console.error("Supabase error:", error);
        throw error;
      }
      
      onSuccess?.();
      onClose();
    } catch (error) {
      console.error("Error saving entry:", error);
      alert("Failed to save entry. Check console for details.");
    } finally {
      setLoading(false);
    }
  };

  if (authLoading) return null; // Or a small loader

  return (
    <div className="fixed inset-0 bg-slate-950/60 backdrop-blur-sm flex items-center justify-center p-4 z-50">
      <div className="glass-card rounded-3xl p-8 w-full max-w-2xl max-h-[90vh] flex flex-col shadow-2xl border-white/10">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-black text-gradient">
            {initialData ? "Vessel Synchronization" : "New Cosmic Reflection"}
          </h2>
          <button onClick={onClose} className="p-2 hover:bg-white/10 rounded-full transition-colors text-gray-400">
            ✕
          </button>
        </div>

        <input
          type="text"
          placeholder="Title of your journey..."
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="mb-6 p-4 bg-white/5 border border-white/10 rounded-2xl text-lg font-medium focus:ring-2 focus:ring-indigo-500 outline-none placeholder:text-gray-500"
        />

        <MoodSelector selectedMood={mood} onSelect={setMood} />

        <div className="flex-1 overflow-y-auto my-6 min-h-[200px] bg-white/5 rounded-2xl border border-white/10 p-2">
          <RichTextEditor value={content} onChange={setContent} />
        </div>

        <div className="flex justify-end gap-4 pt-6 mt-auto border-t border-white/10">
          <button
            onClick={onClose}
            className="px-6 py-3 text-gray-400 hover:text-white transition-colors"
          >
            Cancel
          </button>
          <button
            onClick={handleSave}
            disabled={loading || !title || !content}
            className="px-8 py-3 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-2xl font-bold hover:scale-[1.05] active:scale-[0.95] transition-all shadow-lg shadow-indigo-500/25 disabled:opacity-50 disabled:scale-100"
          >
            {loading ? "Syncing..." : "Save to Timeline"}
          </button>
        </div>
      </div>
    </div>
  );
}
