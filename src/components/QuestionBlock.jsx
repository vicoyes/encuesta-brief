function QuestionBlock({ question, value, onChange }) {
  const { id, text, type, placeholder } = question
  const isTextarea = type === 'textarea'

  return (
    <div className="question-block">
      <label htmlFor={id} className="question-block__label">
        {text}
      </label>
      {isTextarea ? (
        <textarea
          id={id}
          className="question-block__input question-block__input--textarea"
          value={value ?? ''}
          onChange={(e) => onChange(id, e.target.value)}
          placeholder={placeholder}
          rows={4}
          aria-describedby={placeholder ? `${id}-hint` : undefined}
        />
      ) : (
        <input
          type="text"
          id={id}
          className="question-block__input"
          value={value ?? ''}
          onChange={(e) => onChange(id, e.target.value)}
          placeholder={placeholder}
          aria-describedby={placeholder ? `${id}-hint` : undefined}
        />
      )}
      {placeholder && (
        <span id={`${id}-hint`} className="question-block__hint">
          {placeholder}
        </span>
      )}
    </div>
  )
}

export default QuestionBlock
