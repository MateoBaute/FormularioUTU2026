import { NextResponse } from "next/server";
import pool from "@/lib/db";

export async function POST(request: Request) {
  const connection = await pool.getConnection();

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
      categoria,
      talle,
    } = data;

    const ciudadFinal = ciudad === "Otra" ? nuevaCiudad : ciudad;
    const edadFinal = parseInt(edad, 10);

    await connection.beginTransaction();

    const [rows]: any = await connection.query(
      `SELECT COUNT(*) as total FROM inscriptos FOR UPDATE`
    );
    const totalActual = rows[0].total;

    const esGanador = totalActual < 50;

    await connection.query(
      `INSERT INTO inscriptos
      (nombre, cedula, email, numero, edad, ciudad, categoria, talle, ganador_remera)
      VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)`,
      [nombre, cedula, email, telefono, edadFinal, ciudadFinal, categoria, talle, esGanador ? 1 : 0]
    );

    await connection.commit();

    return NextResponse.json(
      {
        success: true,
        message: "Inscripción exitosa",
        ganador: esGanador,
      },
      { status: 200 }
    );
  } catch (error) {
    await connection.rollback();
    console.error("Error al insertar inscripción:", error);

    return NextResponse.json(
      { success: false, message: "Error al insertar inscripción" },
      { status: 500 }
    );
  } finally {
    connection.release();
  }
}