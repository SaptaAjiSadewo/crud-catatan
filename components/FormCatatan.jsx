"use client";

import { useState } from "react";
import EditorQuill from "./EditorQuill";

export default function FormCatatan({ setelahTambah }) {
  const [judul, setJudul] = useState("");
  const [isi, setIsi] = useState("");

  async function tambahCatatan() {
    await fetch("/api/catatan/tambah", {
      method: "POST",
      body: JSON.stringify({ judul, isi }),
      headers: { "Content-Type": "application/json" },
    });

    setJudul("");
    setIsi("");
    setelahTambah && setelahTambah();

    window.location.reload();
  }

  return (
    <div className="p-4 border rounded mb-4">
      <h2 className="text-lg font-semibold mb-2">Tambah Catatan</h2>

      <input
        className="border p-2 w-full mb-2"
        placeholder="Judul catatan"
        value={judul}
        onChange={(e) => setJudul(e.target.value)}
      />

      {/* editor custom */}
      <EditorQuill
        nilai={isi}
        onChange={(val) => setIsi(val)}
        className="mb-3"
      />

      <button
        onClick={tambahCatatan}
        className="bg-blue-500 text-white px-4 py-2 rounded"
      >
        Simpan
      </button>
    </div>
  );
}
