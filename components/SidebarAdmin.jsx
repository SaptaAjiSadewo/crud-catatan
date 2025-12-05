"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function SidebarAdmin() {
  const path = usePathname();

  const menu = [
    { nama: "Dashboard", url: "/admin" },
    { nama: "Kelola Catatan", url: "/admin/catatan" },
  ];

  return (
    <div className="w-64 min-h-screen bg-gray-900 text-white p-4">
      <h2 className="text-xl font-bold mb-6">Admin Panel</h2>

      <ul className="space-y-2">
        {menu.map((m) => (
          <li key={m.url}>
            <Link
              href={m.url}
              className={`block p-2 rounded 
                ${path === m.url ? "bg-gray-700" : "hover:bg-gray-800"}
              `}
            >
              {m.nama}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
