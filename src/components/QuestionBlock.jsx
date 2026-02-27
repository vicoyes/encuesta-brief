function QuestionBlock({ question, value, onChange }) {
  const { id, text, type, placeholder, required } = question
  const isTextarea = type === 'textarea'

  return (
    <div className="bg-white dark:bg-[#15202b] rounded-xl border border-slate-200 dark:border-slate-800 overflow-hidden focus-within:ring-2 focus-within:ring-primary/20 focus-within:border-primary/50 transition-all">
      <div className="p-4 sm:p-5 border-b border-slate-100 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-900/50">
        <label htmlFor={id} className="block text-sm font-semibold text-slate-800 dark:text-slate-200">
          {text}
          {required && <span className="text-red-500 dark:text-red-400 ml-1" aria-label="obligatorio">*</span>}
        </label>
        {placeholder && (
          <p className="mt-1 text-xs text-slate-500 dark:text-slate-400">{placeholder}</p>
        )}
      </div>
      <div className="p-4 sm:p-5">
        {isTextarea ? (
          <textarea
            id={id}
            className="w-full min-h-[120px] px-3 py-2.5 text-sm bg-white dark:bg-slate-900 border border-slate-300 dark:border-slate-600 rounded-lg focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary text-slate-800 dark:text-slate-200 placeholder:text-slate-400 resize-y"
            value={value ?? ''}
            onChange={(e) => onChange(id, e.target.value)}
            placeholder={placeholder}
            rows={4}
          />
        ) : (
          <input
            type="text"
            id={id}
            className="w-full px-3 py-2.5 text-sm bg-white dark:bg-slate-900 border border-slate-300 dark:border-slate-600 rounded-lg focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary text-slate-800 dark:text-slate-200 placeholder:text-slate-400"
            value={value ?? ''}
            onChange={(e) => onChange(id, e.target.value)}
            placeholder={placeholder}
          />
        )}
      </div>
    </div>
  )
}

export default QuestionBlock
