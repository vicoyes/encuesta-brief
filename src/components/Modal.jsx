function Modal({ title, message, onClose }) {
  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/50"
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
      onClick={(e) => e.target === e.currentTarget && onClose()}
    >
      <div
        className="bg-white dark:bg-slate-800 rounded-xl shadow-xl max-w-md w-full p-6 border border-slate-200 dark:border-slate-700"
        onClick={(e) => e.stopPropagation()}
      >
        <h2 id="modal-title" className="text-lg font-bold text-slate-900 dark:text-white mb-3">
          {title}
        </h2>
        <p className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed mb-6 whitespace-pre-line">
          {message}
        </p>
        <button
          type="button"
          onClick={onClose}
          className="w-full py-2.5 px-4 rounded-lg bg-primary text-white font-medium hover:opacity-90 transition-opacity focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 dark:focus:ring-offset-slate-800"
        >
          Entendido
        </button>
      </div>
    </div>
  )
}

export default Modal
