// src/components/settings/AppearanceSection.tsx
"use client";
import { useTheme } from "@/context/ThemeContext";
import { FiMoon, FiSun } from "react-icons/fi";

export function AppearanceSection() {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm">
      <h2 className="font-medium text-lg mb-4">Appearance</h2>
      
      <div className="space-y-4">
        <div className="flex justify-between items-center">
          <div>
            <h3 className="font-medium">Theme</h3>
            <p className="text-sm text-gray-500 dark:text-gray-400">
              Customize how MindfulGen looks
            </p>
          </div>
          <button
            onClick={toggleTheme}
            className="relative inline-flex h-6 w-11 items-center rounded-full bg-gray-200 dark:bg-gray-600"
          >
            <span
              className={`${
                theme === "dark" ? "translate-x-6" : "translate-x-1"
              } inline-block h-4 w-4 transform rounded-full bg-white transition`}
            />
            <span className="sr-only">Toggle dark mode</span>
          </button>
        </div>

        <div className="flex justify-between items-center">
          <div>
            <h3 className="font-medium">Accent Color</h3>
            <p className="text-sm text-gray-500 dark:text-gray-400">
              Choose your preferred color
            </p>
          </div>
          <div className="flex gap-2">
            {["indigo", "pink", "emerald", "amber"].map((color) => (
              <button
                key={color}
                className={`h-6 w-6 rounded-full bg-${color}-500`}
                aria-label={`${color} theme`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}