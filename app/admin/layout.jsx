import SidebarAdmin from "@/components/SidebarAdmin";

export default function LayoutAdmin({ children }) {
  return (
    <div className="flex">
      {/* Sidebar kiri */}
      <SidebarAdmin />

      {/* Konten kanan */}
      <div className="flex-1 p-6 min-h-screen bg-white">{children}</div>
    </div>
  );
}
