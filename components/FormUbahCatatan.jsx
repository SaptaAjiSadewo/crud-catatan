"use client";
import { useState } from "react";

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
    });

    setelahUbah();
    tutup(); // menutup form
  }

  return (
    <div className="fixed inset-0 bg-black bg-opacity-40 flex justify-center items-center">
      <div className=" p-6 rounded w-96">
        <h2 className="text-xl font-semibold mb-4">Ubah Catatan</h2>

        <input
          className="border p-2 w-full mb-2"
          value={judul}
          onChange={(e) => setJudul(e.target.value)}
        />

        <textarea
          className="border p-2 w-full mb-2"
          value={isi}
          onChange={(e) => setIsi(e.target.value)}
        ></textarea>

        <div className="flex justify-end gap-2 mt-4">
          <button onClick={tutup} className="px-3 py-1 border rounded">
            Batal
          </button>

          <button
            onClick={ubahCatatan}
            className="bg-green-600  px-4 py-2 rounded"
          >
            Simpan Perubahan
          </button>
        </div>
      </div>
    </div>
  );
}
