"use client";

import { useEffect, useState } from "react";
import FormUbahCatatan from "./FormUbahCatatan";

export default function DaftarCatatan() {
  const [data, setData] = useState([]);
  const [dataUbah, setDataUbah] = useState(null); // untuk menampung catatan yang akan diubah

  async function ambilData() {
    const res = await fetch("/api/catatan/daftar");
    const json = await res.json();
    setData(json);
  }

  async function hapusCatatan(id) {
    await fetch("/api/catatan/hapus", {
      method: "POST",
      body: JSON.stringify({ id_catatan: id }),
    });

    window.location.reload();
  }

  useEffect(() => {
    ambilData();
  }, []);

  return (
    <div>
      <h2 className="text-lg font-semibold mb-2">Daftar Catatan</h2>

      {data.map((c) => (
        <div key={c.id_catatan} className="border p-3 rounded mb-2">
          <div
            className="prose max-w-none"
            dangerouslySetInnerHTML={{ __html: c.judul }}
          ></div>{" "}
          <div
            className="prose max-w-none"
            dangerouslySetInnerHTML={{ __html: c.isi }}
          ></div>
          <div className="flex gap-2 mt-2">
            {/* Tombol Ubah */}
            <button
              onClick={() => setDataUbah(c)}
              className="bg-yellow-500 text-white px-3 py-1 rounded"
            >
              Ubah
            </button>

            {/* Tombol Hapus */}
            <button
              onClick={() => hapusCatatan(c.id_catatan)}
              className="bg-red-500 text-white px-3 py-1 rounded"
            >
              Hapus
            </button>
          </div>
        </div>
      ))}

      {/* Popup Form Ubah */}
      {dataUbah !== null && (
        <FormUbahCatatan
          dataCatatan={dataUbah}
          setelahUbah={ambilData}
          tutup={() => setDataUbah(null)}
        />
      )}
    </div>
  );
}
