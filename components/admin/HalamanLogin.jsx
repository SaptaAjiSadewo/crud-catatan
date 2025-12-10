"use client";

import React, { useState } from "react";
// import Image from "next/image"; // Dihapus karena next/image tidak didukung di sini

export default function HalamanLogin() {
  const [formData, setFormData] = useState({
    email: "admin@gmail.com",
    password: "admin",
  });
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    // Simulasi login (Ganti dengan logika API Anda)
    setTimeout(() => {
      console.log("Login data:", formData);
      alert("Login berhasil (Simulasi)");
      setLoading(false);
      window.location.href = "/admin"; // Redirect jika berhasil
    }, 1500);
  };

  return (
    <div className="min-h-screen flex bg-white">
      {/* 1. BAGIAN KIRI: Formulir Login */}
      <div className="w-full md:w-1/2 flex items-center justify-center p-8 sm:p-12 lg:p-16">
        <div className="w-full max-w-md space-y-8">
          {/* Header Formulir */}
          <div className="text-center md:text-left">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900">
              Selamat Datang Kembali
            </h2>
            <p className="mt-2 text-sm text-gray-600">
              Silakan masukkan detail akun Anda untuk melanjutkan.
            </p>
          </div>

          <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
            <div className="space-y-4">
              {/* Input Email */}
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700"
                >
                  Alamat Email
                </label>
                <div className="mt-1">
                  <input
                    id="email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    required
                    className="block w-full px-4 py-3 rounded-lg border border-gray-300 bg-gray-50 text-gray-900 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
                    placeholder="nama@email.com"
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                  />
                </div>
              </div>

              {/* Input Password */}
              <div>
                <div className="flex items-center justify-between">
                  <label
                    htmlFor="password"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Kata Sandi
                  </label>
                  <div className="text-sm">
                    <a
                      href="#"
                      className="font-medium text-blue-600 hover:text-blue-500"
                    >
                      Lupa sandi?
                    </a>
                  </div>
                </div>
                <div className="mt-1">
                  <input
                    id="password"
                    name="password"
                    type="password"
                    autoComplete="current-password"
                    required
                    className="block w-full px-4 py-3 rounded-lg border border-gray-300 bg-gray-50 text-gray-900 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
                    placeholder="••••••••"
                    value={formData.password}
                    onChange={(e) =>
                      setFormData({ ...formData, password: e.target.value })
                    }
                  />
                </div>
              </div>
            </div>

            {/* Tombol Login */}
            <div>
              <button
                type="submit"
                disabled={loading}
                className="group relative w-full flex justify-center py-3 px-4 border border-transparent text-sm font-semibold rounded-lg text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors disabled:opacity-70 disabled:cursor-not-allowed"
              >
                {loading ? (
                  <span className="flex items-center gap-2">
                    <svg
                      className="animate-spin h-5 w-5 text-white"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <circle
                        className="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="4"
                      ></circle>
                      <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                      ></path>
                    </svg>
                    Memproses...
                  </span>
                ) : (
                  "Masuk"
                )}
              </button>
            </div>

            {/* Divider atau Footer */}
            <div className="text-center text-sm text-gray-500">
              Belum punya akun?{" "}
              <a
                href="/daftar"
                className="font-medium text-blue-600 hover:text-blue-500"
              >
                Daftar sekarang
              </a>
            </div>
          </form>
        </div>
      </div>

      {/* 2. BAGIAN KANAN: Gambar / Placeholder */}
      <div className="hidden md:block md:w-1/2 relative bg-gray-900">
        {/* Menggunakan tag img standar sebagai pengganti Next.js Image */}
        <img
          src="https://images.unsplash.com/photo-1497294815431-9365093b7331?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80"
          alt="Office Workspace"
          className="absolute inset-0 w-full h-full object-cover opacity-90"
        />

        {/* Overlay Text (Opsional) */}
        <div className="absolute inset-0 bg-linear-to-t from-black/60 via-transparent to-transparent flex flex-col justify-end p-12">
          <blockquote className="text-white">
            <p className="text-lg font-medium">
              "Aplikasi catatan ini telah mengubah cara tim kami bekerja. Sangat
              intuitif dan efisien."
            </p>
            <footer className="mt-4">
              <p className="text-base font-semibold">Sarah Tan</p>
              <p className="text-sm text-gray-300">Product Manager</p>
            </footer>
          </blockquote>
        </div>
      </div>
    </div>
  );
}
