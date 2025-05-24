// src/components/settings/AccountSection.tsx
"use client";
import { FiLock, FiTrash2 } from "react-icons/fi";
import { signOut } from "firebase/auth";
import { auth } from "@/lib/firebase";
import { useRouter } from "next/navigation";

export function AccountSection() {
  const router = useRouter();

  const handleSignOut = async () => {
    await signOut(auth);
    router.push("/login");
  };

  return (
    <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm">
      <h2 className="font-medium text-lg mb-4">Account</h2>
      
      <div className="space-y-4">
        <button className="w-full flex items-center gap-3 p-3 text-left hover:bg-gray-50 dark:hover:bg-gray-700 rounded-lg transition-colors">
          <div className="bg-red-100 dark:bg-red-900 p-2 rounded-full">
            <FiLock className="text-red-600 dark:text-red-300" />
          </div>
          <div>
            <h3 className="font-medium">Change Password</h3>
            <p className="text-sm text-gray-500 dark:text-gray-400">
              Update your login credentials
            </p>
          </div>
        </button>
        
        <button 
          onClick={handleSignOut}
          className="w-full flex items-center gap-3 p-3 text-left hover:bg-gray-50 dark:hover:bg-gray-700 rounded-lg transition-colors"
        >
          <div className="bg-gray-100 dark:bg-gray-700 p-2 rounded-full">
            <FiLock className="text-gray-600 dark:text-gray-300" />
          </div>
          <div>
            <h3 className="font-medium">Sign Out</h3>
            <p className="text-sm text-gray-500 dark:text-gray-400">
              Log out of your account
            </p>
          </div>
        </button>
        
        <button className="w-full flex items-center gap-3 p-3 text-left hover:bg-red-50 dark:hover:bg-red-900 rounded-lg transition-colors text-red-600 dark:text-red-400">
          <div className="bg-red-100 dark:bg-red-800 p-2 rounded-full">
            <FiTrash2 />
          </div>
          <div>
            <h3 className="font-medium">Delete Account</h3>
            <p className="text-sm">
              Permanently remove your account and data
            </p>
          </div>
        </button>
      </div>
    </div>
  );
}