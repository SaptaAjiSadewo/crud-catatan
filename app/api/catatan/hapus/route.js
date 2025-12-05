import { koneksiDatabase } from "@/lib/koneksi";

export async function POST(request) {
    const { id_catatan } = await request.json();

    const db = await koneksiDatabase();
    await db.execute("DELETE FROM catatan WHERE id_catatan = ?", [id_catatan]);

    return new Response(JSON.stringify({ pesan: "Catatan dihapus!" }), {
        status: 200,
    });
}
