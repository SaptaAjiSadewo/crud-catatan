import { koneksiDatabase } from "@/lib/koneksi";

export async function POST(request) {
    const { judul, isi } = await request.json();

    const db = await koneksiDatabase();
    await db.execute(
        "INSERT INTO catatan (judul, isi) VALUES (?, ?)",
        [judul, isi]
    );

    return new Response(JSON.stringify({ pesan: "Catatan berhasil ditambah" }), {
        status: 201,
    });
}
