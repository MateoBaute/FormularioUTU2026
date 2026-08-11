import { NextResponse } from "next/server";
import pool from "@/lib/db";

export async function POST(request: Request) {
  try {
    const data = await request.json();

    console.log("Datos recibidos en el servidor:", data);

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

    // Si seleccionó "Otra", usamos la ciudad que ingresó manualmente.
    const ciudadFinal =
      ciudad === "Otra" ? nuevaCiudad : ciudad;

    console.log("Datos individuales:", {
      nombre,
      cedula,
      email,
      telefono,
      edad,
      ciudad,
      nuevaCiudad,
      ciudadFinal,
      talle,
    });

    await pool.query(
      `INSERT INTO inscriptos
      (nombre, cedula, email, numero, edad, ciudad, talle)
      VALUES (?, ?, ?, ?, ?, ?, ?)`,
      [
        nombre,
        cedula,
        email,
        telefono,
        edad,
        ciudadFinal,
        talle,
      ]
    );

    return NextResponse.json(
      {
        success: true,
        message: "Inscripción exitosa",
      },
      { status: 200 }
    );

  } catch (error) {
    console.error("Error al insertar inscripción:", error);

    return NextResponse.json(
      {
        success: false,
        message: "Error al insertar inscripción",
      },
      { status: 500 }
    );
  }
}