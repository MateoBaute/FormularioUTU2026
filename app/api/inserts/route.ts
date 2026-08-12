import { NextResponse } from "next/server";
import pool from "@/lib/db";

export async function POST(request: Request) {
  try {
    const data = await request.json();

    const {
      nombre,
      cedula,
      email,
      telefono,
      edad,
      ciudad,
      nuevaCiudad,
      talle,
    } = data;

    const ciudadFinal = ciudad === "Otra" ? nuevaCiudad : ciudad;

    const [rows]: any = await pool.query(
      `SELECT COUNT(*) as total FROM inscriptos`
    );
    const totalActual = rows[0].total;

    const esGanador = totalActual < 50;

    await pool.query(
      `INSERT INTO inscriptos
      (nombre, cedula, email, numero, edad, ciudad, talle, ganador_remera)
      VALUES (?, ?, ?, ?, ?, ?, ?, ?)`,
      [nombre, cedula, email, telefono, edad, ciudadFinal, talle, esGanador ? 1 : 0]
    );

    return NextResponse.json(
      {
        success: true,
        message: "Inscripción exitosa",
        ganador: esGanador,
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error al insertar inscripción:", error);

    return NextResponse.json(
      { success: false, message: "Error al insertar inscripción" },
      { status: 500 }
    );
  }
}