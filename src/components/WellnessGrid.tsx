// src/components/WellnessGrid.tsx
import Link from "next/link";
import { FiBook, FiHeart, FiActivity, FiCloud } from "react-icons/fi";

const cards = [
  {
    title: "Journal",
    icon: <FiBook className="text-blue-500" size={24} />,
    href: "/journal",
    color: "bg-blue-50 hover:bg-blue-100",
  },
  {
    title: "Mood Tracker",
    icon: <FiHeart className="text-pink-500" size={24} />,
    href: "/mood",
    color: "bg-pink-50 hover:bg-pink-100",
  },
  {
    title: "Activity",
    icon: <FiActivity className="text-green-500" size={24} />,
    href: "/activity",
    color: "bg-green-50 hover:bg-green-100",
  },
  {
    title: "Meditation",
    icon: <FiCloud className="text-purple-500" size={24} />,
    href: "/meditation",
    color: "bg-purple-50 hover:bg-purple-100",
  },
];

export function WellnessGrid() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {cards.map((card) => (
        <Link
          key={card.title}
          href={card.href}
          className={`${card.color} p-6 rounded-xl shadow-sm transition-all duration-200 flex flex-col items-center justify-center space-y-3 min-h-[150px]`}
        >
          {card.icon}
          <h3 className="font-medium text-gray-800">{card.title}</h3>
        </Link>
      ))}
    </div>
  );
}