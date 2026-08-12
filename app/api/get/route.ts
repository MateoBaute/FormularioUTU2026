import { NextResponse } from "next/server";
import pool from "@/lib/db";

export async function GET() {
    try {
        const [rows] = await pool.query("SELECT * FROM inscriptos");
        return NextResponse.json({ rows, success: true }, { status: 200 });
    } catch (error) {
        console.error("Error fetching inscriptos:", error);
        return NextResponse.json({ error: "Failed to fetch inscriptos" }, { status: 500 });
    }
}