"use client";
import { FiActivity } from "react-icons/fi";
import Link from "next/link";

export function ActivitySummary() {
  return (
    <div className="bg-white p-6 rounded-xl shadow-sm">
      <div className="flex justify-between items-center mb-4">
        <h2 className="font-medium text-lg flex items-center gap-2">
          <FiActivity /> Activity
        </h2>
        <Link href="/activity" className="text-sm text-indigo-600 hover:underline">
          Details
        </Link>
      </div>
      <div className="space-y-3">
        <div>
          <div className="flex justify-between text-sm mb-1">
            <span><p>Today&apos;s activity summary:</p></span>
            <span>8,432/10,000</span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2">
            <div
              className="bg-green-500 h-2 rounded-full"
              style={{ width: "84%" }}
            ></div>
          </div>
        </div>
        <div>
          <div className="flex justify-between text-sm mb-1">
            <span>Active Minutes</span>
            <span>45/60</span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2">
            <div
              className="bg-blue-500 h-2 rounded-full"
              style={{ width: "75%" }}
            ></div>
          </div>
        </div>
      </div>
    </div>
  );
}