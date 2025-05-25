// src/app/settings/page.tsx
import { ProfileSection } from "@/components/settings/ProfileSection";
import { AppearanceSection } from "@/components/settings/AppearanceSection";
import { NotificationsSection } from "@/components/settings/NotificationsSection";
import { AccountSection } from "@/components/settings/AccountSection";

export default function SettingsPage() {
  return (
    <div className="space-y-6 p-4 sm:p-6">
      <h1 className="text-2xl font-bold">Settings</h1>
      
      <div className="space-y-5 max-w-3xl mx-auto">
        <ProfileSection />
        <AppearanceSection />
        <NotificationsSection />
        <AccountSection />
      </div>
    </div>
  );
}