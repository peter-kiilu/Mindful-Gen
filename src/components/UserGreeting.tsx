// src/components/UserGreeting.tsx
"use client";
import { useAuth } from "@/lib/authContext";

export function UserGreeting() {
  const { user } = useAuth();
  
  return (
    <div className="space-y-1">
      <h1 className="text-2xl font-bold text-white-900">
        Hello, {user?.displayName || "Friend"} 👋
      </h1>
      <p className="text-blue-500">How are you feeling today?</p>
    </div>
  );
}