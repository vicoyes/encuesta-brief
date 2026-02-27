import { sections } from '../data/sections'

function Summary({ responses, onSend, sending, sendError, sendSuccess }) {
  return (
    <section className="summary" aria-label="Resumen del brief">
      <h2 className="summary__title">Resumen de tu brief</h2>
      <p className="summary__intro">Revisa tus respuestas. Si todo está bien, envía el brief.</p>
      <div className="summary__content">
        {sections.map((section) => (
          <div key={section.id} className="summary__section">
            <h3 className="summary__section-title">{section.title}</h3>
            <dl className="summary__list">
              {section.questions.map((q) => {
                const val = responses[section.id]?.[q.id]
                if (val == null || String(val).trim() === '') return null
                return (
                  <div key={q.id} className="summary__item">
                    <dt className="summary__term">{q.text}</dt>
                    <dd className="summary__value">{val}</dd>
                  </div>
                )
              })}
            </dl>
          </div>
        ))}
      </div>
      <div className="summary__actions">
        {sendError && <p className="summary__error" role="alert">{sendError}</p>}
        {sendSuccess && <p className="summary__success" role="status">{sendSuccess}</p>}
        <button
          type="button"
          className="btn btn--primary"
          onClick={onSend}
          disabled={sending}
          aria-busy={sending}
        >
          {sending ? 'Enviando…' : 'Enviar brief'}
        </button>
      </div>
    </section>
  )
}

export default Summary
