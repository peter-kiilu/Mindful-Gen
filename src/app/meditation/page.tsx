// src/app/meditation/page.tsx
import { MeditationPlayer } from "@/components/MeditationPlayer";
import { MeditationList } from "@/components/MeditationList";

export default function MeditationPage() {
  return (
    <div className="space-y-8">
      <h1 className="text-2xl font-bold">Meditation</h1>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2">
          <MeditationPlayer />
        </div>
        <div>
          <MeditationList />
        </div>
      </div>
    </div>
  );
}