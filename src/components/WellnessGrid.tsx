// src/components/WellnessGrid.tsx
import Link from "next/link";
import { FiBook, FiHeart, FiActivity, FiCloud } from "react-icons/fi";

const cards = [
  {
    title: "Vessel Labs",
    icon: <FiBook className="text-indigo-400" size={28} />,
    href: "/journal",
    description: "Personal thought synchronization",
  },
  {
    title: "Core Vitals",
    icon: <FiHeart className="text-pink-400" size={28} />,
    href: "/mood",
    description: "Emotional state telemetry",
  },
  {
    title: "Kinetic Flow",
    icon: <FiActivity className="text-emerald-400" size={28} />,
    href: "/activity",
    description: "Physical optimization tracking",
  },
  {
    title: "Neural Void",
    icon: <FiCloud className="text-purple-400" size={28} />,
    href: "/meditation",
    description: "Consciousness recalibration",
  },
];

export function WellnessGrid() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {cards.map((card) => (
        <Link
          key={card.title}
          href={card.href}
          className="glass-card p-8 rounded-[2rem] shadow-sm transition-all duration-300 hover:scale-[1.02] hover:bg-white/10 flex flex-col items-start justify-center space-y-4 min-h-[180px] border-none group"
        >
          <div className="p-4 bg-white/5 rounded-2xl group-hover:scale-110 transition-transform duration-500">
            {card.icon}
          </div>
          <div>
            <h3 className="font-black text-slate-800 dark:text-white uppercase tracking-widest text-xs mb-1">{card.title}</h3>
            <p className="text-[10px] text-gray-500 font-medium leading-tight">{card.description}</p>
          </div>
        </Link>
      ))}
    </div>
  );
}