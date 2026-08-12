export const metadata = {
  title: 'Deslinde de responsabilidad',
}

export default function DeslindePage() {
  return (
    <main className="deslinde-page">
      <div className="container">
        <article className="deslinde-card">
          <header className="deslinde-header">
            <div className="deslinde-icon" aria-hidden="true">⚠️</div>
            <div>
              <h1>Deslinde de responsabilidad</h1>
              <p className="muted">Leé con atención antes de confirmar tu inscripción</p>
            </div>
          </header>

          <section className="deslinde-body">
            <p className="lead">
              Al inscribirme a la <strong>Correcaminata organizada por la UTU de Nueva Palmira</strong>, declaro
              que me encuentro en buen estado de salud y que estoy apto para participar en la distancia
              seleccionada (4KM u 8KM).
            </p>

            <div className="disclaimer-text">
              <p>
                Entiendo y acepto que <strong>la UTU de Nueva Palmira no se hace responsable</strong> por
                lesiones, accidentes, daños o perjuicios que puedan ocurrirme antes, durante o después de la
                correcaminata. La participación es voluntaria y bajo mi propia responsabilidad.
              </p>

              <ul>
                <li>Confirmo que no presento condiciones médicas que contraindiquen mi participación.</li>
                <li>Acepto seguir las indicaciones de seguridad y a los organizadores durante el evento.</li>
                <li>Comprendo que la organización, sus miembros y patrocinadores están exentos de responsabilidad legal por incidentes personales.</li>
              </ul>

              <p>
                Al continuar con la inscripción, confirmo que he leído, entendido y aceptado este deslinde.
              </p>
            </div>

            <footer className="deslinde-footer">
              <div className="disclaimer-sign">
                <small>UTU · Correcaminata — Nueva Palmira</small>
              </div>

              <div>
                <a className="btn-secondary" href="/">Volver al formulario</a>
              </div>
            </footer>
          </section>
        </article>
      </div>
    </main>
  )
}
