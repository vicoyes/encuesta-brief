import { useState } from 'react'
import { sections } from '../data/sections'
import Modal from './Modal'

const SECTION_STYLES = [
  { border: 'bg-slate-500', icon: '📋', iconBg: 'bg-slate-100 dark:bg-slate-800', iconColor: 'text-slate-600 dark:text-slate-400' },
  { border: 'bg-primary', icon: '🧬', iconBg: 'bg-blue-50 dark:bg-blue-900/30', iconColor: 'text-primary' },
  { border: 'bg-emerald-500', icon: '🎨', iconBg: 'bg-emerald-50 dark:bg-emerald-900/30', iconColor: 'text-emerald-600 dark:text-emerald-400' },
  { border: 'bg-amber-500', icon: '📦', iconBg: 'bg-amber-50 dark:bg-amber-900/30', iconColor: 'text-amber-600 dark:text-amber-400' },
  { border: 'bg-indigo-500', icon: '📐', iconBg: 'bg-indigo-50 dark:bg-indigo-900/30', iconColor: 'text-indigo-600 dark:text-indigo-400' },
  { border: 'bg-slate-600', icon: '⚙️', iconBg: 'bg-slate-100 dark:bg-slate-800', iconColor: 'text-slate-600 dark:text-slate-400' },
]

function Summary({ responses, onSend, onStartOver, sending, sendError, sendSuccess }) {
  const [showConfirmSend, setShowConfirmSend] = useState(false)

  const handleConfirmSend = () => {
    setShowConfirmSend(false)
    onSend()
  }

  return (
    <div className="flex flex-1 py-8 px-4 sm:px-6 lg:px-8">
      {showConfirmSend && (
        <Modal
          title="Confirmar envío"
          message="Revisa que todo esté correcto en el resumen de arriba. Al confirmar, se enviarán tus respuestas a nuestro equipo."
          onClose={() => setShowConfirmSend(false)}
          confirmText="Sí, enviar"
          onConfirm={handleConfirmSend}
        />
      )}
      {sendSuccess && (
        <Modal
          variant="success"
          title="¡Brief enviado!"
          message="Brief enviado correctamente. ¡Gracias! Será procesado y revisado por nuestro equipo. Pronto nos comunicaremos con usted."
          buttonText="Cerrar"
          onClose={onStartOver}
        />
      )}
      <div className="mx-auto w-full max-w-5xl">
        {/* Page Header */}
        <div className="mb-10">
          <h1 className="text-3xl font-black tracking-tight text-slate-900 dark:text-white sm:text-4xl mb-2">
            Resumen de tu brief
          </h1>
          <p className="text-lg text-slate-500 dark:text-slate-400 max-w-2xl">
            Revisa tus respuestas por sección. Si todo está bien, envía el brief al final.
          </p>
        </div>

        {/* Section Cards */}
        <div className="space-y-8">
          {sections.map((section, sectionIndex) => {
            const answers = section.questions.filter(
              (q) => responses[section.id]?.[q.id] != null && String(responses[section.id][q.id]).trim() !== ''
            )
            if (answers.length === 0) return null

            const style = SECTION_STYLES[sectionIndex % SECTION_STYLES.length]
            return (
              <div
                key={section.id}
                className="group relative overflow-hidden rounded-2xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 shadow-sm transition-shadow hover:shadow-md"
              >
                {/* Left accent bar */}
                <div className={`absolute top-0 left-0 w-1.5 h-full ${style.border}`} />
                <div className="pl-6 sm:pl-8 pr-6 sm:pr-8 pt-6 sm:pt-8 pb-6 sm:pb-8">
                  {/* Card header */}
                  <div className="flex items-center gap-4 mb-6">
                    <div
                      className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-xl text-2xl ${style.iconBg} ${style.iconColor}`}
                    >
                      {style.icon}
                    </div>
                    <div>
                      <h2 className="text-xl font-bold text-slate-900 dark:text-white">
                        {section.title}
                      </h2>
                      <p className="text-sm text-slate-500 dark:text-slate-400">
                        {section.objective}
                      </p>
                    </div>
                  </div>
                  {/* Content: Q&A blocks */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {section.questions.map((q) => {
                      const val = responses[section.id]?.[q.id]
                      if (val == null || String(val).trim() === '') return null
                      return (
                        <div
                          key={q.id}
                          className="rounded-xl bg-slate-50 dark:bg-slate-800/50 p-5 border border-slate-100 dark:border-slate-700"
                        >
                          <p className="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-2">
                            {q.text}
                          </p>
                          <p className="text-sm text-slate-900 dark:text-slate-100 leading-relaxed whitespace-pre-wrap">
                            {val}
                          </p>
                        </div>
                      )
                    })}
                  </div>
                </div>
              </div>
            )
          })}
        </div>

        {/* Footer action */}
        <div className="mt-12 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4 border-t border-slate-200 dark:border-slate-700 pt-6">
          <div className="order-3 sm:order-1 flex flex-col gap-2">
            {sendError && (
              <p className="text-sm text-red-600 dark:text-red-400 font-medium" role="alert">
                {sendError}
              </p>
            )}
            {sendSuccess && (
              <p className="text-sm text-green-600 dark:text-green-400 font-medium flex items-center gap-2" role="status">
                <span className="inline-block w-2 h-2 rounded-full bg-green-500" />
                {sendSuccess}
              </p>
            )}
          </div>
          <div className="order-1 sm:order-2 flex flex-wrap items-center gap-3">
            <button
              type="button"
              onClick={onStartOver}
              className="inline-flex items-center justify-center rounded-xl border border-slate-300 dark:border-slate-600 px-6 py-3 text-sm font-medium text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2"
            >
              Volver a comenzar
            </button>
            <button
            type="button"
            onClick={() => setShowConfirmSend(true)}
            disabled={sending}
            aria-busy={sending}
            className="order-1 sm:order-2 inline-flex items-center justify-center rounded-xl bg-slate-900 dark:bg-white px-8 py-3 text-sm font-semibold text-white dark:text-slate-900 shadow-lg shadow-slate-200 dark:shadow-slate-800 hover:bg-slate-800 dark:hover:bg-slate-100 focus:outline-none focus:ring-2 focus:ring-slate-500 focus:ring-offset-2 transition-all disabled:opacity-60 disabled:cursor-not-allowed"
          >
            {sending ? 'Enviando…' : 'Enviar brief'}
          </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Summary
