import { koneksiDatabase } from "@/lib/koneksi";

export async function GET() {
    const db = await koneksiDatabase();
    const [data] = await db.execute("SELECT * FROM catatan ORDER BY id_catatan DESC");

    return new Response(JSON.stringify(data), {
        status: 200,
    });
}
