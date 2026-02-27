function ProgressBar({ currentSection, totalSections, currentQuestion, totalQuestionsInSection }) {
  const sectionProgress = totalSections > 0 ? ((currentSection + (currentQuestion / Math.max(1, totalQuestionsInSection))) / totalSections) * 100 : 0

  return (
    <div className="progress" role="progressbar" aria-valuenow={Math.round(sectionProgress)} aria-valuemin={0} aria-valuemax={100} aria-label="Progreso del cuestionario">
      <div className="progress__text">
        Sección {currentSection + 1} de {totalSections}
        {totalQuestionsInSection > 0 && (
          <span className="progress__sub"> — Pregunta {currentQuestion + 1} de {totalQuestionsInSection}</span>
        )}
      </div>
      <div className="progress__bar">
        <div className="progress__fill" style={{ width: `${sectionProgress}%` }} />
      </div>
    </div>
  )
}

export default ProgressBar
