"use client";

import { BookOpenIcon } from "@heroicons/react/24/outline";

export default function StatCard({
  title,
  value,
  subtitle,
  icon,
  color = "blue",
}) {
  return (
    <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 flex justify-between items-center relative overflow-hidden group hover:shadow-md transition-shadow max-w-xs w-full">
      <div className="z-10">
        <h2 className={`text-4xl font-extrabold text-${color}-600 mb-1`}>
          {value}
        </h2>

        <p className="text-sm font-medium text-gray-500 uppercase tracking-wider">
          {title}
        </p>

        <p className="text-xs text-gray-400 mt-1">{subtitle}</p>
      </div>

      <div
        className={`w-16 h-16 bg-${color}-50 rounded-lg flex items-center justify-center group-hover:bg-${color}-100 transition-colors`}
      >
        {icon}
      </div>
    </div>
  );
}
