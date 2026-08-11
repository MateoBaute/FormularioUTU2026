"use client";

import React, { useEffect, useState } from "react";
import tallesData, { Talles } from "../types/talles";

interface Inscripto {
  id: number;
  nombre: string;
  cedula: string;
  email: string;
  numero: string;
  edad: number;
  ciudad: string;
  talle: string;
}

export default function Home() {
  const [form, setForm] = useState({
    nombre: "",
    cedula: "",
    email: "",
    telefono: "",
    edad: 0,
    ciudad: "",
    nuevaCiudad: "",
    talle: "",
  });
  const [optionsOpen, setOptionsOpen] = useState(false);
  const [nuevaCiudad, setNuevaCiudad] = useState<String>('');
  const [loading, setLoading] = useState(false);
  const [inscriptos, setInscriptos] = useState<Inscripto[]>([]);
  const [showPrizeModal, setShowPrizeModal] = useState(false);

  useEffect(() => {
    const fetchInscriptos = async () => {
      try {
        const response = await fetch("/api/get");
        const data = await response.json();

        if (!response.ok) {
          throw new Error(data.message || "Error al obtener inscriptos");
        }

        setInscriptos(Array.isArray(data.rows) ? data.rows : []);
      } catch (error) {
        console.error("Error al obtener inscriptos:", error);
      }
    };

    fetchInscriptos();
  }, []);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (loading) return;

    console.log("Pre-inscripción:", form);
    ingresarCorredor();
  };

  async function ingresarCorredor() {
    setLoading(true);

    try {
      const response = await fetch("/api/inserts", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...form,
          nuevaCiudad:
            form.ciudad === "Otra"
              ? form.nuevaCiudad
              : null,
        }),
      });

      const data = await response.json();
      if (!response.ok) {
        throw new Error(data.message || "Error al realizar la inscripción");
      }

      if (data.success) {
        const totalInscriptos = inscriptos.length + 1;

        if (totalInscriptos <= 50) {
          setShowPrizeModal(true);
        } else {
          alert("Inscripción realizada correctamente");
        }

        const responseInscriptos = await fetch("/api/get");
        const updatedData = await responseInscriptos.json();

        if (responseInscriptos.ok && Array.isArray(updatedData.rows)) {
          setInscriptos(updatedData.rows);
        }
      }
    } catch (error) {
      console.error("Error al realizar la inscripción:", error);

      alert("Ocurrió un error al realizar la inscripción.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <main className="page">
      <div className="container">

    <header className="site-header">
      <h1>Pre-inscripción — Correcaminata</h1>

      <p className="lead">
        Sumate a la correcaminata de la UTU de Nueva Palmira,
        asegurá tu lugar y seleccioná el talle de tu remera.
      </p>
    </header>

    <div className="layout">

      <section className="card form-card">
        <form onSubmit={handleSubmit} className="form-grid" aria-busy={loading}>

          <div className="full">
            <label htmlFor="nombre">
              Nombre completo
            </label>

            <input
              id="nombre"
              name="nombre"
              type="text"
              placeholder="Ingresá tu nombre completo"
              value={form.nombre}
              onChange={handleChange}
              required
            />
          </div>

          <div>
            <label htmlFor="cedula">
              Cédula
            </label>

            <input
              id="cedula"
              name="cedula"
              type="text"
              placeholder="Ej. 12345678"
              value={form.cedula}
              onChange={handleChange}
              required
            />
          </div>

          <div>
            <label htmlFor="email">
              Email
            </label>

            <input
              id="email"
              name="email"
              type="email"
              placeholder="tu@email.com"
              value={form.email}
              onChange={handleChange}
              required
            />
          </div>

          <div>
            <label htmlFor="telefono">
              Número de teléfono
            </label>

            <input
              id="telefono"
              name="telefono"
              type="text"
              placeholder="Ej. 099 123 456"
              value={form.telefono}
              onChange={handleChange}
              required
            />
          </div>

          <div>
            <label htmlFor="edad">
              Edad
            </label>

            <input
              id="edad"
              name="edad"
              type="number"
              min="0"
              placeholder="Ej. 18"
              value={form.edad}
              onChange={handleChange}
              required
            />
          </div>

          <div>
            <label htmlFor="ciudad">
              Ciudad
            </label>

            <select
              id="ciudad"
              name="ciudad"
              value={form.ciudad}
              onChange={handleChange}
              required
            >
              <option value=''>Seleccioná tu ciudad</option>
              <option value='Nueva Palmira'>Nueva Palmira</option>
              <option value='Carmelo'>Carmelo</option>
              <option value='Mercedes'>Mercedes</option>
              <option value='Otra'>Otra</option>
            </select>
          </div>

          {form.ciudad === 'Otra' && (
            <div>
              <label htmlFor="nuevaCiudad">
                Ingresá tu ciudad
              </label>

              <input
                id="nuevaCiudad"
                name="nuevaCiudad"
                type="text"
                placeholder="Ej. Montevideo"
                value={form.nuevaCiudad}
                onChange={handleChange}
                required
              />
            </div>
          )}

          <div className="full">
            <label htmlFor="talle">
              Talle de remera
            </label>

            <select
              id="talle"
              name="talle"
              value={form.talle}
              onChange={handleChange}
              required
            >

              {optionsOpen ? (
                <option value="">
                  Seleccioná un talle
                </option>
              ) : (tallesData.map((t: Talles) => (
                <option key={t.id} value={t.id}>
                  {t.nombre}
                </option>
              )))
              }
            </select>
          </div>

          <div className="actions">
            <button
              type="submit"
              className="btn-primary"
              disabled={loading}
              aria-live="polite"
            >
              {loading ? (
                <>
                  <span className="spinner" aria-hidden="true" />
                  Enviando inscripción...
                </>
              ) : (
                "Enviar pre-inscripción"
              )}
            </button>
          </div>

          {loading && (
            <div className="loading-message" role="status" aria-live="polite">
              <span className="spinner small" aria-hidden="true" />
              Estamos cargando tu inscripción...
            </div>
          )}

        </form>
      </section>

      <aside className="card table-card">
        <h2>Talles y medidas</h2>

        <table>
          <thead>
            <tr>
              <th>Talle</th>
              <th>Pecho</th>
              <th>Cintura</th>
              <th>Largo</th>
            </tr>
          </thead>

          <tbody>
            {tallesData.map((t: Talles) => (
              <tr key={t.id}>
                <td>{t.nombre}</td>
                <td>{t.medidas.pechoCm} cm</td>
                <td>
                  {t.medidas.cinturaCm
                    ? `${t.medidas.cinturaCm} cm`
                    : "-"}
                </td>
                <td>
                  {t.medidas.largoCm
                    ? `${t.medidas.largoCm} cm`
                    : "-"}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </aside>

    </div>
      </div>

      {showPrizeModal && (
        <div className="modal-backdrop" role="dialog" aria-modal="true">
          <div className="winner-modal">
            <button
              type="button"
              className="modal-close"
              onClick={() => setShowPrizeModal(false)}
              aria-label="Cerrar modal"
            >
              ×
            </button>

            <div className="winner-icon" aria-hidden="true">🏆</div>
            <h3>Felicidades</h3>
            <p>
              Has sido uno de los primeros 50 en incribirte. Te has ganado una remera.
            </p>

            <button
              type="button"
              className="btn-primary modal-btn"
              onClick={() => setShowPrizeModal(false)}
            >
              ¡Gracias!
            </button>
          </div>
        </div>
      )}
    </main>
  );
}
