"use client";

import { useState } from "react";

export default function FormCatatan() {
  const [judul, setJudul] = useState("");
  const [isi, setIsi] = useState("");

  async function tambahCatatan() {
    await fetch("/api/catatan/tambah", {
      method: "POST",
      body: JSON.stringify({ judul, isi }),
    });

    // reset input
    setJudul("");
    setIsi("");

    // refresh halaman
    window.location.reload();
  }

  return (
    <div className="border p-4 mb-4 rounded">
      <h2 className="font-bold mb-2">Tambah Catatan</h2>

      <input
        className="border p-2 w-full mb-2"
        placeholder="Judul"
        value={judul}
        onChange={(e) => setJudul(e.target.value)}
      />

      <textarea
        className="border p-2 w-full mb-2"
        placeholder="Isi catatan"
        value={isi}
        onChange={(e) => setIsi(e.target.value)}
      ></textarea>

      <button
        onClick={tambahCatatan}
        className="bg-blue-600 text-black px-4 py-2 rounded"
      >
        Simpan
      </button>
    </div>
  );
}
