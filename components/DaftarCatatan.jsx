"use client";

import { useEffect, useState } from "react";
import FormUbahCatatan from "./FormUbahCatatan";
import Link from "next/link";

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
      <h2 className="text-lg font-semibold mb-2 text-black">Daftar Catatan</h2>

      {data.map((c) => (
        <div
          key={c.id_catatan}
          className="border border-black  p-3 rounded mb-2"
        >
          <div
            className="prose max-w-none text-black"
            dangerouslySetInnerHTML={{ __html: c.judul }}
          ></div>{" "}
          <div
            className="prose max-w-none text-black"
            dangerouslySetInnerHTML={{ __html: c.isi }}
          ></div>
          <div className="flex gap-2 mt-2">
            {/* Tombol Ubah */}
            <button
              onClick={() => setDataUbah(c)}
              className="bg-amber-500 text-white px-3 py-1 rounded cursor-pointer hover:bg-amber-600 transition"
              title="Anda Yakin ingin mengubah catatan ini?"
            >
              Ubah
            </button>

            {/* Tombol Hapus */}
            <button
              onClick={() => hapusCatatan(c.id_catatan)}
              className="bg-red-500 text-white px-3 py-1 rounded cursor-pointer hover:bg-red-600 transition"
              title="Anda Yakin ingin menghapus catatan ini?"
            >
              Hapus
            </button>

            {/* Tombol Lihat Detail */}
            <Link
              href={`/admin/catatan/${c.id_catatan}`}
              className="text-white  bg-blue-500 px-3 py-1 rounded cursor-pointer hover:bg-blue-600 transition"
            >
              Lihat Detail
            </Link>
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
