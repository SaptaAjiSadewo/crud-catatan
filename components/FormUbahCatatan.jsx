"use client";

import { useState } from "react";
import EditorQuill from "./EditorQuill";

export default function FormUbahCatatan({ dataCatatan, setelahUbah, tutup }) {
  const [judul, setJudul] = useState(dataCatatan.judul);
  const [isi, setIsi] = useState(dataCatatan.isi);

  async function ubahCatatan() {
    await fetch("/api/catatan/ubah", {
      method: "POST",
      body: JSON.stringify({
        id_catatan: dataCatatan.id_catatan,
        judul,
        isi,
      }),
      headers: { "Content-Type": "application/json" },
    });

    setelahUbah && setelahUbah();
    tutup && tutup();
  }

  return (
    <div className="fixed inset-0 bg-black/40 backdrop-blur-sm flex justify-center items-center p-4">
      <div className="bg-white/95 border border-white/30 shadow-xl rounded-2xl w-full max-w-xl p-6">
        <h2 className="text-xl font-semibold mb-4 text-black">Ubah Catatan</h2>

        <input
          className="border border-gray-300 p-2 w-full rounded mb-3 focus:outline-none focus:border-blue-500 text-black"
          value={judul}
          onChange={(e) => setJudul(e.target.value)}
        />

        <EditorQuill
          nilai={isi}
          onChange={(v) => setIsi(v)}
          className="mb-4 text-black"
        />

        <div className="flex justify-end gap-2 mt-4">
          <button
            onClick={tutup}
            className="px-3 py-1 border rounded-lg hover:bg-red-700 transition bg-red-600 cursor-pointer"
          >
            Batal
          </button>

          <button
            onClick={ubahCatatan}
            className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition cursor-pointer"
          >
            Simpan Perubahan
          </button>
        </div>
      </div>
    </div>
  );
}
