function Intro({ onStart, onContinue, hasSavedProgress }) {
  return (
    <section className="intro" aria-label="Introducción al cuestionario">
      <h1 className="intro__title">Cuéntanos sobre tu proyecto</h1>
      <p className="intro__text">
        Este cuestionario nos ayuda a conocerte mejor: la esencia de tu marca, tu imagen, tus servicios y cómo quieres que funcione tu presencia en la web. Con tus respuestas armamos un brief claro para que tu sitio no solo se vea bien, sino que venda y conecte.
      </p>
      <p className="intro__time">Tiempo aproximado: <strong>15–20 minutos</strong>. Puedes guardar y continuar después.</p>
      <div className="intro__actions">
        {hasSavedProgress && (
          <button type="button" className="btn btn--secondary" onClick={onContinue} aria-label="Continuar donde lo dejaste">
            Continuar donde lo dejaste
          </button>
        )}
        <button type="button" className="btn btn--primary" onClick={onStart} aria-label="Comenzar el cuestionario">
          {hasSavedProgress ? 'Comenzar de nuevo' : 'Comenzar'}
        </button>
      </div>
    </section>
  )
}

export default Intro
