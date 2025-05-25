"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {FiHome, FiBook, FiActivity, FiCloud, FiTrendingUp, FiSettings, FiLogOut,} from "react-icons/fi";
import { signOut } from "firebase/auth";
import { auth } from "@/lib/firebase";

export function Sidebar() {
  const pathname = usePathname();

  const navItems = [
    { href: "/", icon: <FiHome size={20} />, label: "Home" },
    { href: "/journal", icon: <FiBook size={20} />, label: "Journal" },
    { href: "/mood", icon: <FiTrendingUp size={20} />, label: "Mood" },
    { href: "/activity", icon: <FiActivity size={20} />, label: "Activity" },
    { href: "/meditation", icon: <FiCloud size={20} />, label: "Meditation" },
    { href: "/settings", icon: <FiSettings size={20} />, label: "Settings" },
  ];

  const handleSignOut = async () => {
    if (!auth) {
      console.error("Firebase not initialized. Cannot sign out.");
      return;
    }

    try {
      await signOut(auth);
    } catch (error) {
      console.error("Sign out error:", error);
    }
  };

  return (
    <div className="w-64 bg-white border-r border-gray-200 p-4 flex flex-col">
      <div className="mb-8 p-4">
        <h1 className="text-xl font-bold text-indigo-600">MindfulGenZ</h1>
      </div>

      <nav className="flex-1 space-y-2">
        {navItems.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className={`flex items-center p-3 rounded-lg ${
              pathname === item.href
                ? "bg-indigo-50 text-indigo-600"
                : "text-gray-600 hover:bg-gray-100"
            }`}
          >
            <span className="mr-3">{item.icon}</span>
            {item.label}
          </Link>
        ))}
      </nav>

      <button
        onClick={handleSignOut}
        className="flex items-center p-3 rounded-lg text-gray-600 hover:bg-gray-100 mt-auto"
      >
        <span className="mr-3">
          <FiLogOut size={20} />
        </span>
        Sign Out
      </button>
    </div>
  );
}
