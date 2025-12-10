"use client";

import React, { useEffect, useState } from "react";
import {
  PlusIcon,
  BookOpenIcon,
  ArrowRightIcon,
} from "@heroicons/react/24/outline";
import Link from "next/link";
import StatCard from "./StatCard";

export default function DashboardAdmin() {
  const [daftarCatatan, setDaftarCatatan] = useState([]);
  const [loading, setLoading] = useState(true);

  // Mengambil data dari API
  useEffect(() => {
    async function ambilData() {
      try {
        const respon = await fetch("/api/catatan/daftar");
        if (respon.ok) {
          const data = await respon.json();
          setDaftarCatatan(data);
        }
      } catch (error) {
        console.error("Gagal mengambil catatan:", error);
      } finally {
        setLoading(false);
      }
    }

    ambilData();
  }, []);

  return (
    <div className="font-sans">
      {/* 1. Header Section */}
      <div className="flex justify-between items-center mb-6">
        <div>
          <h1 className="text-3xl font-bold text-gray-800">Dashboard</h1>
          <p className="text-gray-600 mt-1 text-sm">
            Ringkasan aktivitas aplikasi catatan Anda hari ini.
          </p>
        </div>

        {/* Tombol Buat Baru */}
        <Link href="/admin/catatan">
          <button
            className="flex items-center justify-center w-12 h-12 bg-blue-600 text-white rounded-full shadow-lg hover:bg-blue-700 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 cursor-pointer"
            aria-label="Buat Catatan Baru"
          >
            <PlusIcon className="w-6 h-6" />
          </button>
        </Link>
      </div>

      {/* 2. Statistik Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <StatCard
          title="Total Catatan"
          value={loading ? "..." : daftarCatatan.length}
          subtitle="Dokumen tersimpan"
          icon={<BookOpenIcon className="w-8 h-8 text-blue-500" />}
          color="blue"
        />
      </div>

      {/* 3. Daftar Catatan Terbaru */}
      <div>
        <h3 className="text-lg font-bold text-gray-800 mb-4 flex items-center gap-2">
          <span className="w-2 h-6 bg-blue-500 rounded-sm inline-block"></span>
          Catatan Baru Dibuat
        </h3>

        <div className="bg-white border border-gray-200 rounded-xl overflow-hidden shadow-sm">
          {loading ? (
            <div className="p-8 text-center text-gray-500 animate-pulse">
              Memuat data ringkasan...
            </div>
          ) : daftarCatatan.length === 0 ? (
            <div className="p-8 text-center text-gray-500 flex flex-col items-center">
              <BookOpenIcon className="w-12 h-12 text-gray-300 mb-2" />
              <p>Belum ada catatan yang dibuat.</p>
            </div>
          ) : (
            <div className="divide-y divide-gray-100">
              {/* Ambil 3 data teratas */}
              {daftarCatatan.slice(0, 3).map((catatan, index) => (
                <div
                  key={catatan.id_catatan || index}
                  className="p-4 hover:bg-gray-50 transition-colors flex items-start gap-4"
                >
                  {/* Nomor Urut / Icon */}
                  <div className="mt-1 w-8 h-8 rounded-full bg-amber-100 flex items-center justify-center shrink-0 text-amber-600">
                    <span className="text-xs font-bold">{index + 1}</span>
                  </div>

                  <div className="flex-1 min-w-0">
                    {/* Judul dengan HTML Parsing */}
                    <div
                      className="font-semibold text-gray-800 text-sm truncate"
                      dangerouslySetInnerHTML={{
                        __html: catatan.judul || "Tanpa Judul",
                      }}
                    />

                    {/* Isi Ringkasan */}
                    <div
                      className="text-gray-500 text-xs mt-1 line-clamp-1 prose prose-sm max-w-none"
                      dangerouslySetInnerHTML={{
                        __html: catatan.isi || "Tidak ada konten...",
                      }}
                    />

                    <span className="text-[10px] text-gray-400 mt-1 block">
                      ID: #{catatan.id_catatan}
                    </span>
                  </div>

                  <span className="text-xs font-medium text-blue-600 bg-blue-50 px-2 py-1 rounded-md whitespace-nowrap">
                    Baru
                  </span>
                </div>
              ))}
            </div>
          )}

          {/* Footer Card */}
          <div className="bg-gray-50 p-3 text-center border-t border-gray-100 hover:bg-gray-100 transition-colors cursor-pointer">
            <a
              href="/admin/catatan"
              className="text-xs font-medium text-blue-600 flex items-center justify-center w-full gap-1"
            >
              Lihat Semua Catatan <ArrowRightIcon className="w-3 h-3" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
