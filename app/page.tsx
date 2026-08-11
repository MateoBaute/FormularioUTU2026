"use client";

import React, { useState } from "react";
import tallesData, { Talles } from "../types/talles";

export default function Home() {
const [form, setForm] = useState({
nombre: "",
cedula: "",
email: "",
telefono: "",
edad: "",
ciudad: "",
talle: "",
});

const handleChange = (
e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
) => {
setForm({ ...form, [e.target.name]: e.target.value });
};

const handleSubmit = (e: React.FormEvent) => {
e.preventDefault();


console.log("Pre-inscripción:", form);

alert("Pre-inscripción enviada (demo). Revisa la consola.");


};

return ( <main className="page"> <div className="container">

    <header className="site-header">
      <h1>Pre-inscripción — Correcaminata</h1>

      <p className="lead">
        Sumate a la correcaminata de la UTU de Nueva Palmira,
        asegurá tu lugar y seleccioná el talle de tu remera.
      </p>
    </header>

    <div className="layout">

      <section className="card form-card">
        <form onSubmit={handleSubmit} className="form-grid">

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
            />
          </div>

          <div>
            <label htmlFor="ciudad">
              Ciudad
            </label>

            <input
              id="ciudad"
              name="ciudad"
              type="text"
              placeholder="Ej. Nueva Palmira"
              value={form.ciudad}
              onChange={handleChange}
            />
          </div>

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
              <option value="">
                Seleccioná un talle
              </option>

              {tallesData.map((t: Talles) => (
                <option key={t.id} value={t.id}>
                  {t.nombre}
                </option>
              ))}
            </select>
          </div>

          <div className="actions">
            <button
              type="submit"
              className="btn-primary"
            >
              Enviar pre-inscripción
            </button>
          </div>

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
</main>


);
}
