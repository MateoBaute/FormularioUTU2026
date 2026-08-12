"use client";

import { useEffect, useState } from "react";

interface Inscripto {
    id: number;
    nombre: string;
    cedula: string;
    email: string;
    numero: string;
    edad: number;
    ciudad: string;
    talle: string;
    ganador_remera: number; // 0 = no ganó, 1 = ganó
}

export default function InscriptosPage() {
    const [users, setUsers] = useState<Inscripto[]>([]);
    const [loading, setLoading] = useState(true);

    // Filtros
    const [nombreFiltro, setNombreFiltro] = useState("");
    const [cedulaFiltro, setCedulaFiltro] = useState("");
    const [ciudadFiltro, setCiudadFiltro] = useState("");
    const [ganadorFiltro, setGanadorFiltro] = useState("");

    useEffect(() => {
        const fetchUsers = async () => {
            try {
                const response = await fetch("/api/get");
                const data = await response.json();

                if (data.success) {
                    setUsers(data.rows);
                } else {
                    console.error("Error al obtener los inscriptos:", data.message);
                }
            } catch (error) {
                console.error("Error fetching inscriptos:", error);
            } finally {
                setLoading(false);
            }
        };

        fetchUsers();
    }, []);

    // Ciudades disponibles
    const ciudades = Array.from(
        new Set(users.map((user) => user.ciudad))
    ).sort();

    // Aplicar filtros
    const filteredUsers = users.filter((user) => {
        const nombreCoincide = user.nombre
            .toLowerCase()
            .includes(nombreFiltro.toLowerCase());

        const cedulaCoincide = user.cedula
            .toLowerCase()
            .includes(cedulaFiltro.toLowerCase());

        const ciudadCoincide =
            ciudadFiltro === "" ||
            user.ciudad === ciudadFiltro;

        const ganadorCoincide =
            ganadorFiltro === "" ||
            (ganadorFiltro === "ganadores" && Number(user.ganador_remera) === 1) ||
            (ganadorFiltro === "no-ganadores" && Number(user.ganador_remera) !== 1);

        return (
            nombreCoincide &&
            cedulaCoincide &&
            ciudadCoincide &&
            ganadorCoincide
        );
    });

    // Contador de ganadores sobre el total filtrado
    const totalGanadores = filteredUsers.filter(
        (user) => Number(user.ganador_remera) === 1
    ).length;

    // Limpiar filtros
    const limpiarFiltros = () => {
        setNombreFiltro("");
        setCedulaFiltro("");
        setCiudadFiltro("");
        setGanadorFiltro("");
    };

    return (
        <main className="inscriptos-page">
            <div className="inscriptos-container">
                {/* HEADER */}
                <header className="inscriptos-header">
                    <div>
                        <span className="inscriptos-badge">
                            UTU · Correcaminata
                        </span>
                        <h1>Inscriptos</h1>
                        <p>
                            Gestioná y consultá las personas
                            pre-inscriptas a la correcaminata.
                        </p>
                    </div>

                    <div className="inscriptos-counter">
                        <strong>{filteredUsers.length}</strong>
                        <span>
                            {filteredUsers.length === 1
                                ? "resultado"
                                : "resultados"}
                        </span>
                        <span className="inscriptos-counter-sub">
                            {totalGanadores} con premio
                        </span>
                    </div>
                </header>

                {/* FILTROS */}
                <section className="filters-card">
                    <div className="filters-header">
                        <div>
                            <h2>Buscar inscriptos</h2>
                            <p>
                                Utilizá uno o varios filtros para encontrar
                                rápidamente una persona.
                            </p>
                        </div>

                        <button
                            type="button"
                            className="clear-filters"
                            onClick={limpiarFiltros}
                        >
                            Limpiar filtros
                        </button>
                    </div>

                    <div className="filters-grid">
                        {/* NOMBRE */}
                        <div className="filter-group">
                            <label htmlFor="nombreFiltro">
                                Nombre
                            </label>
                            <input
                                id="nombreFiltro"
                                type="text"
                                placeholder="Buscar por nombre..."
                                value={nombreFiltro}
                                onChange={(e) =>
                                    setNombreFiltro(e.target.value)
                                }
                            />
                        </div>

                        {/* CÉDULA */}
                        <div className="filter-group">
                            <label htmlFor="cedulaFiltro">
                                Cédula
                            </label>
                            <input
                                id="cedulaFiltro"
                                type="text"
                                placeholder="Buscar por cédula..."
                                value={cedulaFiltro}
                                onChange={(e) =>
                                    setCedulaFiltro(e.target.value)
                                }
                            />
                        </div>

                        {/* CIUDAD */}
                        <div className="filter-group">
                            <label htmlFor="ciudadFiltro">
                                Ciudad
                            </label>
                            <select
                                id="ciudadFiltro"
                                value={ciudadFiltro}
                                onChange={(e) =>
                                    setCiudadFiltro(e.target.value)
                                }
                            >
                                <option value="">
                                    Todas las ciudades
                                </option>
                                {ciudades.map((ciudad) => (
                                    <option
                                        key={ciudad}
                                        value={ciudad}
                                    >
                                        {ciudad}
                                    </option>
                                ))}
                            </select>
                        </div>

                        {/* GANADOR */}
                        <div className="filter-group">
                            <label htmlFor="ganadorFiltro">
                                Premio
                            </label>
                            <select
                                id="ganadorFiltro"
                                value={ganadorFiltro}
                                onChange={(e) =>
                                    setGanadorFiltro(e.target.value)
                                }
                            >
                                <option value="">Todos</option>
                                <option value="ganadores">Ganadores</option>
                                <option value="no-ganadores">No ganadores</option>
                            </select>
                        </div>

                    </div>

                </section>

                {/* TABLA */}
                <section className="inscriptos-table-card">
                    {loading ? (
                        <div className="table-message">
                            <div className="loader"></div>
                            <p>Cargando inscriptos...</p>
                        </div>
                    ) : filteredUsers.length === 0 ? (
                        <div className="table-message">
                            <h3>No se encontraron inscriptos</h3>
                            <p>
                                Probá modificando o limpiando los filtros.
                            </p>
                        </div>

                    ) : (

                        <div className="table-wrapper">
                            <table className="inscriptos-table">
                                <thead>
                                    <tr>
                                        <th>Nombre</th>
                                        <th>Cédula</th>
                                        <th>Email</th>
                                        <th>Teléfono</th>
                                        <th>Edad</th>
                                        <th>Ciudad</th>
                                        <th>Talle</th>
                                        <th>Premio</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {filteredUsers.map((user) => (
                                        <tr key={user.id}>
                                            <td className="user-name">
                                                {user.nombre}
                                            </td>
                                            <td>
                                                {user.cedula}
                                            </td>
                                            <td>
                                                {user.email}
                                            </td>
                                            <td>
                                                {user.numero}
                                            </td>
                                            <td>
                                                {user.edad}
                                            </td>
                                            <td>
                                                <span className="city-badge">
                                                    {user.ciudad}
                                                </span>
                                            </td>
                                            <td>
                                                <span className="size-badge">
                                                    {user.talle}
                                                </span>
                                            </td>
                                            <td>
                                                {Number(user.ganador_remera) === 1 ? (
                                                    <span className="winner-badge">
                                                        <svg
                                                            width="13"
                                                            height="13"
                                                            viewBox="0 0 24 24"
                                                            fill="none"
                                                            stroke="currentColor"
                                                            strokeWidth="2"
                                                            strokeLinecap="round"
                                                            strokeLinejoin="round"
                                                        >
                                                            <polygon points="12 2 15.09 8.63 22 9.24 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.24 8.91 8.63 12 2" />
                                                        </svg>
                                                        Ganador
                                                    </span>
                                                ) : (
                                                    <span className="no-winner-badge">
                                                        Sin premio
                                                    </span>
                                                )}
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    )}
                </section>
            </div>
        </main>
    );
}