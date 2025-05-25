"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FiHome, FiBook, FiActivity, FiCloud, FiTrendingUp, FiSettings, FiLogOut, FiMenu, FiX } from "react-icons/fi";
import { signOut } from "firebase/auth";
import { auth } from "@/lib/firebase";
import { useState, useEffect } from "react";

export function Sidebar() {
  const pathname = usePathname();
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    handleResize(); // Set initial value
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

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
    <>
      {/* Mobile toggle button */}
      {isMobile && (
        <button
          onClick={() => setIsMobileOpen(!isMobileOpen)}
          className="fixed z-50 top-4 left-4 p-2 rounded-lg bg-white border border-gray-200 shadow-sm md:hidden"
        >
          {isMobileOpen ? <FiX size={24} /> : <FiMenu size={24} />}
        </button>
      )}

      {/* Sidebar */}
      <div
        className={`fixed md:relative z-40 w-64 h-full bg-white border-r border-gray-200 p-4 flex flex-col
        transition-all duration-300 ease-in-out
        ${isMobile ? (isMobileOpen ? 'left-0' : '-left-64') : 'left-0'}`}
      >
        <div className="mb-8 p-4">
          <h1 className="text-xl font-bold text-indigo-600">MindfulGenZ</h1>
        </div>

        <nav className="flex-1 space-y-2">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => isMobile && setIsMobileOpen(false)}
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

      {/* Overlay for mobile */}
      {isMobile && isMobileOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-30 md:hidden"
          onClick={() => setIsMobileOpen(false)}
        />
      )}
    </>
  );
}