// src/components/settings/ProfileSection.tsx
"use client";
import { FiUser } from "react-icons/fi";
import { useAuth } from "@/lib/authContext";
import { useState } from "react";
import { updateProfile } from "firebase/auth";
import { auth } from "@/lib/firebase";

export function ProfileSection() {
  const { user } = useAuth();
  const [name, setName] = useState(user?.displayName || "");
  const [isEditing, setIsEditing] = useState(false);

  const handleSave = async () => {
    if (user && name !== user.displayName) {
      await updateProfile(user, { displayName: name });
    }
    setIsEditing(false);
  };

  return (
    <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm">
      <h2 className="font-medium text-lg mb-4">Profile</h2>
      
      <div className="flex items-center gap-4">
        <div className="bg-indigo-100 dark:bg-indigo-900 p-3 rounded-full">
          <FiUser className="text-indigo-600 dark:text-indigo-300" size={24} />
        </div>
        
        <div className="flex-1">
          {isEditing ? (
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full p-2 border rounded-lg dark:bg-gray-700 dark:border-gray-600"
            />
          ) : (
            <h3 className="font-medium">{name || "No name set"}</h3>
          )}
          <p className="text-sm text-gray-500 dark:text-gray-400">
            {user?.email}
          </p>
        </div>
        
        {isEditing ? (
          <button
            onClick={handleSave}
            className="px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700"
          >
            Save
          </button>
        ) : (
          <button
            onClick={() => setIsEditing(true)}
            className="px-4 py-2 border rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700"
          >
            Edit
          </button>
        )}
      </div>
    </div>
  );
}