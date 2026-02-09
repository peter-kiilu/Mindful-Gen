"use client";
import { JournalEntryList } from "@/components/JournalEntryList";
import { NewEntryButton } from "@/components/NewEntryButton";
import { useAuth } from "@/lib/authContext";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function JournalPage() {
  const { user, loading } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (!loading && !user) {
      router.push("/login");
    }
  }, [user, loading, router]);

  if (loading || !user) {
    return (
      <div className="flex items-center justify-center min-h-[60vh]">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-indigo-500"></div>
      </div>
    );
  }

  return (
    <div className="space-y-8 p-2 rounded-3xl">
      <div className="flex justify-between items-center mb-4">
        <div>
          <h1 className="text-3xl font-black text-gradient">Your Sacred Flows</h1>
          <p className="text-gray-500 text-sm mt-1 uppercase tracking-widest font-bold">Chronological Synchronization</p>
        </div>
        <NewEntryButton />
      </div>
      <JournalEntryList />
    </div>
  );
}