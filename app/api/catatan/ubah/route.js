import { koneksiDatabase } from "@/lib/koneksi";

export async function POST(request) {
    const { id_catatan, judul, isi } = await request.json();

    const db = await koneksiDatabase();
    await db.execute(
        "UPDATE catatan SET judul=?, isi=? WHERE id_catatan=?",
        [judul, isi, id_catatan]
    );

    return new Response(JSON.stringify({ pesan: "Catatan diubah!" }), {
        status: 200,
    });
}
