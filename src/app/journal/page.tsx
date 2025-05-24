// src/app/journal/page.tsx
import { JournalEntryList } from "@/components/JournalEntryList";
import { NewEntryButton } from "@/components/NewEntryButton";

export default function JournalPage() {
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold">Your Journal</h1>
        <NewEntryButton />
      </div>
      <JournalEntryList />
    </div>
  );
}