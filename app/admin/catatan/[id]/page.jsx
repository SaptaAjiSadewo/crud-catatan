"use client";

import { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";
import FormUbahCatatan from "@/components/FormUbahCatatan";
import TombolAksiCatatan from "@/components/admin/TombolAksiCatatan";

export default function DetailCatatan() {
  const { id } = useParams();
  const router = useRouter();

  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [modalUbah, setModalUbah] = useState(false);

  async function ambilDetail() {
    const res = await fetch(`/api/catatan/detail/${id}`);
    const hasil = await res.json();
    setData(hasil);
    setLoading(false);
  }

  async function hapusCatatan() {
    if (!confirm("Yakin ingin menghapus catatan ini?")) return;

    await fetch("/api/catatan/hapus", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ id_catatan: id }),
    });

    router.push("/admin/catatan");
  }

  useEffect(() => {
    ambilDetail();
  }, []);

  if (loading) return <p className="text-gray-500">Memuat detail...</p>;
  if (!data) return <p>Data tidak ditemukan.</p>;

  return (
    <div className="max-w-auto">
      <div className="flex items-center justify-between mb-4">
        <h1 className="text-3xl font-bold text-black">{data.judul}</h1>
      </div>

      <div
        className="prose max-w-none border p-4 rounded text-black"
        dangerouslySetInnerHTML={{ __html: data.isi }}
      />

      {/* Tombol Bawah: Kembali + Ubah + Hapus */}
      <TombolAksiCatatan
        onKembali={() => router.back()}
        onUbah={() => setModalUbah(true)}
        onHapus={hapusCatatan}
      />

      {/* Modal Ubah */}
      {modalUbah && (
        <FormUbahCatatan
          dataCatatan={data}
          setelahUbah={() => {
            setModalUbah(false);
            ambilDetail(); // refres data setelah update
          }}
          tutup={() => setModalUbah(false)}
        />
      )}
    </div>
  );
}
