"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FiHome, FiBook, FiActivity, FiCloud, FiTrendingUp, FiSettings, FiLogOut, FiMenu, FiX } from "react-icons/fi";
import { supabase } from "@/lib/supabase";
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
    try {
      const { error } = await supabase.auth.signOut();
      if (error) throw error;
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
          className="fixed z-50 top-2 left-2 p-1.5 rounded-md bg-transparent text-white shadow-md md:hidden"
        >
          {isMobileOpen ? <FiX size={20} /> : <FiMenu size={20} />}
        </button>
      )}

      {/* Sidebar */}
      <div
        className={`fixed md:relative z-40 w-64 h-full bg-white/40 dark:bg-slate-900/40 backdrop-blur-xl border-r border-slate-200/50 dark:border-slate-800/50 p-4 flex flex-col
        transition-all duration-300 ease-in-out
        ${isMobile ? (isMobileOpen ? 'left-0' : '-left-64') : 'left-0'}`}
      >
        <div className="mb-8 p-4">
          <h1 className="text-2xl font-black text-gradient">MindfulGenZ</h1>
        </div>

        <nav className="flex-1 space-y-1.5">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => isMobile && setIsMobileOpen(false)}
              className={`flex items-center p-3 rounded-xl transition-all duration-200 ${
                pathname === item.href
                  ? "bg-indigo-600/10 text-indigo-600 dark:text-indigo-400 font-medium scale-[1.02] shadow-sm"
                  : "text-gray-500 hover:bg-gray-100/50 dark:hover:bg-slate-800/50"
              }`}
            >
              <span className={`mr-3 ${pathname === item.href ? "text-indigo-600 dark:text-indigo-400" : "text-gray-400"}`}>
                {item.icon}
              </span>
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
