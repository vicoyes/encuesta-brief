import { sections } from '../data/sections'

function Summary({ responses, onSend, sending, sendError, sendSuccess }) {
  return (
    <div className="flex flex-1 justify-center py-8 px-4 sm:px-6">
      <div className="w-full max-w-[640px] flex flex-col gap-6">
        <div>
          <h1 className="text-xl font-semibold text-slate-800 dark:text-slate-200 mb-1">
            Resumen de tu brief
          </h1>
          <p className="text-sm text-slate-500 dark:text-slate-400">
            Revisa y envía cuando quieras.
          </p>
        </div>
        <div className="space-y-6">
          {sections.map((section) => (
            <div key={section.id}>
              <h2 className="text-sm font-semibold text-slate-600 dark:text-slate-400 mb-3">
                {section.title}
              </h2>
              <dl className="space-y-2 text-sm">
                {section.questions.map((q) => {
                  const val = responses[section.id]?.[q.id]
                  if (val == null || String(val).trim() === '') return null
                  return (
                    <div key={q.id}>
                      <dt className="text-slate-500 dark:text-slate-500 mb-0.5">{q.text}</dt>
                      <dd className="text-slate-800 dark:text-slate-200 leading-relaxed whitespace-pre-wrap">{val}</dd>
                    </div>
                  )
                })}
              </dl>
            </div>
          ))}
        </div>
        <div className="pt-4 space-y-3">
          {sendError && (
            <p className="text-sm text-red-600 dark:text-red-400" role="alert">{sendError}</p>
          )}
          {sendSuccess && (
            <p className="text-sm text-green-600 dark:text-green-400" role="status">{sendSuccess}</p>
          )}
          <button
            type="button"
            onClick={onSend}
            disabled={sending}
            aria-busy={sending}
            className="px-5 py-2.5 rounded-md bg-primary text-white text-sm font-medium hover:opacity-90 disabled:opacity-60"
          >
            {sending ? 'Enviando…' : 'Enviar brief'}
          </button>
        </div>
      </div>
    </div>
  )
}

export default Summary
