function Modal({ title, message, onClose, variant = 'default', buttonText, confirmText, onConfirm }) {
  const isSuccess = variant === 'success'
  const hasConfirm = Boolean(confirmText && onConfirm)
  const label = buttonText ?? (isSuccess ? 'Cerrar' : 'Entendido')
  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/50"
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
      onClick={(e) => e.target === e.currentTarget && onClose()}
    >
      <div
        className={`bg-white dark:bg-slate-800 rounded-xl shadow-xl w-full border border-slate-200 dark:border-slate-700 ${
          isSuccess ? 'max-w-lg p-8' : 'max-w-md p-6'
        }`}
        onClick={(e) => e.stopPropagation()}
      >
        <h2
          id="modal-title"
          className={`font-bold text-slate-900 dark:text-white mb-4 whitespace-pre-line ${
            isSuccess ? 'text-2xl sm:text-3xl text-center' : 'text-lg mb-3'
          }`}
        >
          {title}
        </h2>
        <p
          className={`text-slate-600 dark:text-slate-300 leading-relaxed mb-6 whitespace-pre-line ${
            isSuccess ? 'text-lg sm:text-xl text-center' : 'text-sm mb-6'
          }`}
        >
          {message}
        </p>
        <div className={`flex gap-3 ${hasConfirm ? 'flex-col-reverse sm:flex-row sm:justify-end' : ''}`}>
          {hasConfirm && (
            <button
              type="button"
              onClick={onClose}
              className="w-full sm:w-auto py-2.5 px-4 rounded-lg border border-slate-300 dark:border-slate-600 text-slate-700 dark:text-slate-300 font-medium hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors"
            >
              Cancelar
            </button>
          )}
          <button
            type="button"
            onClick={hasConfirm ? onConfirm : onClose}
            className="w-full sm:w-auto py-3 px-4 rounded-lg bg-primary text-white font-medium hover:opacity-90 transition-opacity focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 dark:focus:ring-offset-slate-800"
          >
            {hasConfirm ? confirmText : label}
          </button>
        </div>
      </div>
    </div>
  )
}

export default Modal
