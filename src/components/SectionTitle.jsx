function SectionTitle({ title, objective }) {
  return (
    <div className="space-y-1">
      <h2 className="text-lg font-semibold text-slate-800 dark:text-slate-200">
        {title}
      </h2>
      {objective && (
        <p className="text-sm text-slate-500 dark:text-slate-400">
          {objective}
        </p>
      )}
    </div>
  )
}

export default SectionTitle
