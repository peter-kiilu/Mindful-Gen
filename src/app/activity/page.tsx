// src/app/activity/page.tsx
import { ActivityTracker } from "@/components/ActivityTracker";
import { ActivityGoals } from "@/components/ActivityGoals";

export default function ActivityPage() {
  return (
    <div className="space-y-8">
      <h1 className="text-2xl font-bold">Activity Tracker</h1>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2">
          <ActivityTracker />
        </div>
        <div>
          <ActivityGoals />
        </div>
      </div>
    </div>
  );
}