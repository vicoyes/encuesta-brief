import { sections } from '../data/sections'

function ProgressBar({ currentSection, totalSections }) {
  const progress = totalSections > 0 ? ((currentSection + 1) / totalSections) * 100 : 0

  return (
    <div
      className="flex flex-col gap-4 bg-white dark:bg-[#15202b] p-5 sm:p-6 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm"
      role="progressbar"
      aria-valuenow={Math.round(progress)}
      aria-valuemin={0}
      aria-valuemax={100}
      aria-label="Progreso por sección"
    >
      <div className="flex justify-between items-end">
        <div>
          <p className="text-primary font-bold text-xs uppercase tracking-wider mb-1">
            Paso {currentSection + 1} de {totalSections}
          </p>
          <h1 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white">
            {sections[currentSection]?.title ?? ''}
          </h1>
        </div>
        <span className="text-slate-500 dark:text-slate-400 text-sm font-medium hidden sm:block">
          {Math.round(progress)}% completado
        </span>
      </div>
      <div className="relative pt-1">
        <div className="overflow-hidden h-2 mb-2 text-xs flex rounded-full bg-slate-100 dark:bg-slate-800">
          <div
            className="flex flex-col justify-center bg-primary transition-all duration-500 ease-out rounded-full"
            style={{ width: `${progress}%` }}
          />
        </div>
        <div className="flex justify-between text-xs text-slate-400 dark:text-slate-500 px-0.5">
          {sections.map((s, i) => (
            <span
              key={s.id}
              className={i <= currentSection ? 'text-primary font-medium' : ''}
            >
              {s.shortLabel ?? s.title}
            </span>
          ))}
        </div>
      </div>
    </div>
  )
}

export default ProgressBar
