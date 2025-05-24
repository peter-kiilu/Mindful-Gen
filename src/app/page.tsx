import { WellnessGrid } from "@/components/WellnessGrid";
import { UserGreeting } from "@/components/UserGreeting";
import { MoodTracker } from "@/components/MoodTracker";
import { RecentJournalEntries } from "@/components/RecentJournalEntries";
import { ActivitySummary } from "@/components/ActivitySummary";

export default function HomePage() {
  return (
    <div className="space-y-8">
      <UserGreeting />
      <MoodTracker />
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2">
          <WellnessGrid />
        </div>
        <div className="space-y-6">
          <RecentJournalEntries />
          <ActivitySummary />
        </div>
      </div>
    </div>
  );
}