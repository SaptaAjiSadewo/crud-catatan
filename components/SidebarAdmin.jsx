"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

// Heroicons
import {
  HomeIcon,
  DocumentTextIcon,
  Bars3Icon,
  XMarkIcon,
} from "@heroicons/react/24/outline";

export default function SidebarAdmin() {
  const path = usePathname();
  const [isOpen, setIsOpen] = useState(true);

  const menu = [
    {
      nama: "Dashboard",
      url: "/admin",
      icon: <HomeIcon className="h-6 w-6" />,
    },
    {
      nama: "Kelola Catatan",
      url: "/admin/catatan",
      icon: <DocumentTextIcon className="h-6 w-6" />,
    },
  ];

  return (
    <div
      className={`${
        isOpen ? "w-64" : "w-20"
      } min-h-screen bg-gray-900 text-white p-4 transition-all duration-300`}
    >
      {/* Tombol toggle */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="mb-6 p-2 bg-gray-800 rounded hover:bg-gray-700 transition"
      >
        {isOpen ? (
          <XMarkIcon className="h-6 w-6 cursor-pointer" />
        ) : (
          <Bars3Icon className="h-6 w-6 cursor-pointer" />
        )}
      </button>

      {/* Header hanya tampil jika sidebar terbuka */}
      {isOpen && (
        <h2 className="text-xl font-bold mb-6 text-center">Admin Panel</h2>
      )}

      <ul className="space-y-2">
        {menu.map((m) => {
          const aktif = path === m.url;
          return (
            <li key={m.url}>
              <Link
                href={m.url}
                className={`flex items-center gap-2 p-2 rounded transition 
                  ${aktif ? "bg-gray-700" : "hover:bg-gray-800"}
                `}
              >
                <span>{m.icon}</span>

                {/* Teks hanya tampil ketika sidebar terbuka */}
                {isOpen && <span>{m.nama}</span>}
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
