import DaftarCatatan from "@/components/DaftarCatatan";
import FormCatatan from "@/components/FormCatatan";

export default function HalamanKelolaCatatan() {
  return (
    <div className="max-w-2xl">
      <h1 className="text-2xl font-bold mb-4">Kelola Catatan</h1>

      <FormCatatan />
      <DaftarCatatan />
    </div>
  );
}
