"use client";
import { FiActivity, FiZap } from "react-icons/fi";
import Link from "next/link";

export function ActivitySummary() {
  return (
    <div className="glass-card p-6 rounded-3xl shadow-sm border-none">
      <div className="flex justify-between items-center mb-6">
        <h2 className="font-black text-lg text-slate-800 dark:text-white flex items-center gap-2">
          <FiActivity className="text-emerald-500" /> Stats
        </h2>
        <Link href="/activity" className="text-[10px] font-black uppercase tracking-widest text-indigo-500 hover:text-indigo-400 transition-colors">
          Optimize →
        </Link>
      </div>
      <div className="space-y-5">
        <div>
          <div className="flex justify-between text-[10px] font-black uppercase tracking-widest text-gray-400 mb-2">
            <span className="flex items-center gap-1"><FiZap className="text-amber-500" /> Kinetic Energy</span>
            <span className="text-slate-700 dark:text-gray-300">8,432 / 10k</span>
          </div>
          <div className="w-full bg-slate-100 dark:bg-white/5 rounded-full h-1.5 overflow-hidden">
            <div
              className="bg-gradient-to-r from-emerald-500 to-teal-500 h-full rounded-full"
              style={{ width: "84%" }}
            ></div>
          </div>
        </div>
        <div>
          <div className="flex justify-between text-[10px] font-black uppercase tracking-widest text-gray-400 mb-2">
            <span>Neural Focus</span>
            <span className="text-slate-700 dark:text-gray-300">45 / 60m</span>
          </div>
          <div className="w-full bg-slate-100 dark:bg-white/5 rounded-full h-1.5 overflow-hidden">
            <div
              className="bg-gradient-to-r from-indigo-500 to-blue-500 h-full rounded-full"
              style={{ width: "75%" }}
            ></div>
          </div>
        </div>
      </div>
    </div>
  );
}