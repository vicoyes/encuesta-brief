function Intro({ onStart, onContinue, hasSavedProgress }) {
  return (
    <div className="flex flex-1 justify-center py-12 px-4 sm:px-6">
      <div className="w-full max-w-lg flex flex-col gap-8">
        <div>
          <h1 className="text-2xl font-semibold text-slate-800 dark:text-slate-200 mb-2">
            Cuéntanos sobre tu proyecto
          </h1>
          <p className="text-slate-600 dark:text-slate-400 text-[15px] leading-relaxed">
            Con tus respuestas armamos un brief claro: esencia de tu marca, imagen, servicios y cómo quieres que funcione tu web. Tiempo aproximado: 15–20 min. Puedes guardar y continuar después.
          </p>
        </div>
        <div className="flex flex-wrap gap-2">
          {hasSavedProgress && (
            <button
              type="button"
              onClick={onContinue}
              className="px-4 py-2.5 rounded-md text-slate-600 dark:text-slate-400 text-sm font-medium hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
              aria-label="Continuar donde lo dejaste"
            >
              Continuar donde lo dejaste
            </button>
          )}
          <button
            type="button"
            onClick={onStart}
            className="px-5 py-2.5 rounded-md bg-primary text-white text-sm font-medium hover:opacity-90 transition-opacity"
            aria-label={hasSavedProgress ? 'Comenzar de nuevo' : 'Comenzar'}
          >
            {hasSavedProgress ? 'Comenzar de nuevo' : 'Comenzar'}
          </button>
        </div>
      </div>
    </div>
  )
}

export default Intro
