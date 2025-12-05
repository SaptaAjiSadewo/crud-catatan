import mysql from "mysql2/promise";

export async function koneksiDatabase() {
    const koneksi = await mysql.createConnection({
        host: "localhost",
        user: "root",
        password: "",
        database: "db_catatan",
    });

    return koneksi;
}
