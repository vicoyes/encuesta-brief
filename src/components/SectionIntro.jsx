function SectionIntro({ title, objective, proTip }) {
  return (
    <div className="flex flex-col md:flex-row gap-6 items-start">
      <div className="flex-1 min-w-0">
        <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white mb-2 tracking-tight">
          {title}
        </h2>
        <p className="text-slate-600 dark:text-slate-300 text-base sm:text-lg leading-relaxed">
          {objective}
        </p>
      </div>
      {proTip && (
        <div className="hidden md:flex w-full md:max-w-[350px] shrink-0 p-4 bg-blue-50 dark:bg-blue-900/20 text-primary rounded-lg gap-3 items-start border border-blue-100 dark:border-blue-800/50">
          <span className="text-xl shrink-0" aria-hidden>💡</span>
          <div>
            <p className="font-bold text-sm mb-1 text-slate-800 dark:text-slate-200">Consejo</p>
            <p className="text-sm text-slate-700 dark:text-slate-300 leading-relaxed">{proTip}</p>
          </div>
        </div>
      )}
    </div>
  )
}

export default SectionIntro
