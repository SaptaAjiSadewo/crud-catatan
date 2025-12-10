"use client";

export default function TombolAksiCatatan({ onKembali, onUbah, onHapus }) {
  return (
    <div className="mt-3 flex items-center gap-3">
      <button
        onClick={onKembali}
        className="px-4 py-2 bg-gray-500 text-white rounded cursor-pointer hover:bg-gray-900 transition"
      >
        Kembali
      </button>

      <button
        onClick={onUbah}
        className="px-4 py-2 bg-yellow-500 text-white rounded hover:bg-yellow-900 transition cursor-pointer"
      >
        Ubah
      </button>

      <button
        onClick={onHapus}
        className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-900 transition cursor-pointer"
      >
        Hapus
      </button>
    </div>
  );
}
