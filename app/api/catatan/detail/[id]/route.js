import { koneksiDatabase } from "@/lib/koneksi";

export async function GET(req, context) {
    const { id } = await context.params; // <- ini yang benar!

    if (!id) {
        return new Response(JSON.stringify({ error: "ID tidak valid" }), {
            status: 400,
            headers: { "Content-Type": "application/json" },
        });
    }

    try {
        const db = await koneksiDatabase();
        const [data] = await db.execute(
            "SELECT * FROM catatan WHERE id_catatan = ? LIMIT 1",
            [id]
        );

        if (!data.length) {
            return new Response(JSON.stringify({ error: "Data tidak ditemukan" }), {
                status: 404,
                headers: { "Content-Type": "application/json" },
            });
        }

        return new Response(JSON.stringify(data[0]), {
            status: 200,
            headers: { "Content-Type": "application/json" },
        });

    } catch (err) {
        console.error("ERROR DETAIL CATATAN:", err);

        return new Response(JSON.stringify({ error: "Server error" }), {
            status: 500,
            headers: { "Content-Type": "application/json" },
        });
    }
}
