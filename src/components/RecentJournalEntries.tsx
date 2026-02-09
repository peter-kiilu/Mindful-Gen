// src/components/RecentJournalEntries.tsx
"use client";
import Link from "next/link";
import { FiBook, FiArrowRight } from "react-icons/fi";
import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabase";
import { useAuth } from "@/lib/authContext";

type Entry = {
  id: string;
  title: string;
  date: string;
  content: string;
};

export function RecentJournalEntries() {
  const { user } = useAuth();
  const [entries, setEntries] = useState<Entry[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchRecent() {
      if (!user) return;
      try {
        const { data, error } = await supabase
          .from("journals")
          .select("id, title, date, content")
          .eq("user_id", user.id)
          .order("date", { ascending: false })
          .limit(3);

        if (error) throw error;
        setEntries(data || []);
      } catch (err) {
        console.error("Error:", err);
      } finally {
        setLoading(false);
      }
    }
    fetchRecent();
  }, [user]);

  return (
    <div className="glass-card p-6 rounded-3xl shadow-sm border-none">
      <div className="flex justify-between items-center mb-6">
        <h2 className="font-black text-lg text-slate-800 dark:text-white flex items-center gap-2">
          <FiBook className="text-indigo-500" /> Recent Flows
        </h2>
        <Link href="/journal" className="text-xs font-bold text-indigo-500 hover:text-indigo-400 uppercase tracking-widest flex items-center gap-1">
          History <FiArrowRight />
        </Link>
      </div>

      <div className="space-y-4">
        {loading ? (
          [1, 2].map(i => <div key={i} className="h-20 bg-white/5 animate-pulse rounded-2xl" />)
        ) : entries.length === 0 ? (
          <p className="text-xs text-gray-500 italic">Static in the transmission. No entries yet.</p>
        ) : (
          entries.map((entry) => (
            <Link
              key={entry.id}
              href={`/journal`}
              className="group block p-4 hover:bg-white/5 rounded-2xl transition-all duration-300 border border-transparent hover:border-white/10"
            >
              <h3 className="font-bold text-slate-700 dark:text-gray-200 group-hover:text-indigo-400 transition-colors">{entry.title}</h3>
              <p className="text-xs text-gray-500 line-clamp-1 mt-1">{entry.content}</p>
              <p className="text-[10px] font-bold text-gray-400 uppercase tracking-tighter mt-2">{entry.date}</p>
            </Link>
          ))
        )}
      </div>
    </div>
  );
}