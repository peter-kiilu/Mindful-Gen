// src/components/settings/NotificationsSection.tsx
"use client";
import { useState } from "react";
import { FiBell } from "react-icons/fi";
import { Switch } from "@/components/ui/Switch";

export function NotificationsSection() {
  const [notifications, setNotifications] = useState({
    dailyReminder: true,
    moodPrompt: true,
    weeklySummary: false,
  });

  const toggleNotification = (type: keyof typeof notifications) => {
    setNotifications((prev) => ({
      ...prev,
      [type]: !prev[type],
    }));
  };

  return (
    <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm">
      <h2 className="font-medium text-lg mb-4 flex items-center gap-2">
        <FiBell /> Notifications
      </h2>
      
      <div className="space-y-4">
        <div className="flex justify-between items-center">
          <div>
            <h3 className="font-medium">Daily Reminder</h3>
            <p className="text-sm text-gray-500 dark:text-gray-400">
              Remind me to journal each day
            </p>
          </div>
          <Switch
            checked={notifications.dailyReminder}
            onCheckedChange={() => toggleNotification("dailyReminder")}
          />
        </div>
        
        <div className="flex justify-between items-center">
          <div>
            <h3 className="font-medium">Mood Prompts</h3>
            <p className="text-sm text-gray-500 dark:text-gray-400">
              Ask how I'm feeling periodically
            </p>
          </div>
          <Switch
            checked={notifications.moodPrompt}
            onCheckedChange={() => toggleNotification("moodPrompt")}
          />
        </div>
        
        <div className="flex justify-between items-center">
          <div>
            <h3 className="font-medium">Weekly Summary</h3>
            <p className="text-sm text-gray-500 dark:text-gray-400">
              Send weekly insights email
            </p>
          </div>
          <Switch
            checked={notifications.weeklySummary}
            onCheckedChange={() => toggleNotification("weeklySummary")}
          />
        </div>
      </div>
    </div>
  );
}