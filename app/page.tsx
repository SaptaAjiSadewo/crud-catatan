"use client";

import Image from "next/image";
import DaftarCatatan from "../components/DaftarCatatan";
import FormCatatan from "../components/FormCatatan";

export default function Home() {
  return (
    <main className="max-w-xl mx-auto mt-10">
      <FormCatatan />
      <DaftarCatatan />
    </main>
  );
}
