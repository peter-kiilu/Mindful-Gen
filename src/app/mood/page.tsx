// src/app/mood/page.tsx
import { MoodCalendar } from "@/components/MoodCalendar";
import { MoodStats } from "@/components/MoodStats";

export default function MoodPage() {
  return (
    <div className="space-y-8">
      <h1 className="text-2xl font-bold">Mood Tracker</h1>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2">
          <MoodCalendar />
        </div>
        <div>
          <MoodStats />
        </div>
      </div>
    </div>
  );
}