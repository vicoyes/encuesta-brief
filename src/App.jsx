import { useState, useEffect } from 'react'
import { sections } from './data/sections'
import { getStoredState, useLocalStorage, clearStoredState } from './hooks/useLocalStorage'
import { sendToWebhook } from './utils/sendToWebhook'
import Intro from './components/Intro'
import ProgressBar from './components/ProgressBar'
import SectionTitle from './components/SectionTitle'
import QuestionBlock from './components/QuestionBlock'
import Summary from './components/Summary'
import './App.css'

const STEP_INTRO = 'intro'
const STEP_SUMMARY = 'summary'

function getInitialResponses() {
  return sections.reduce((acc, s) => {
    acc[s.id] = {}
    s.questions.forEach((q) => { acc[s.id][q.id] = '' })
    return acc
  }, {})
}

function mergeStoredResponses(empty, stored) {
  if (!stored || typeof stored !== 'object') return empty
  const next = { ...empty }
  sections.forEach((section) => {
    if (stored[section.id] && typeof stored[section.id] === 'object') {
      next[section.id] = { ...next[section.id], ...stored[section.id] }
    }
  })
  return next
}

function App() {
  const [step, setStep] = useState(STEP_INTRO)
  const [currentSection, setCurrentSection] = useState(0)
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [responses, setResponses] = useState(getInitialResponses)
  const [startedAt, setStartedAt] = useState(null)
  const [hasSavedProgress, setHasSavedProgress] = useState(false)
  const [sending, setSending] = useState(false)
  const [sendError, setSendError] = useState(null)
  const [sendSuccess, setSendSuccess] = useState(null)

  useEffect(() => {
    const stored = getStoredState()
    if (stored) {
      setResponses((prev) => mergeStoredResponses(prev, stored.responses))
      setHasSavedProgress(
        stored.currentSection > 0 || (stored.currentSection === 0 && stored.currentQuestion > 0)
      )
    }
  }, [])

  useLocalStorage({
    responses: step === STEP_INTRO ? undefined : responses,
    currentSection: step === STEP_INTRO ? undefined : currentSection,
    currentQuestion: step === STEP_INTRO ? undefined : currentQuestion,
    startedAt,
  })

  const section = sections[currentSection]
  const totalSections = sections.length
  const questions = section?.questions ?? []
  const totalQuestionsInSection = questions.length
  const question = questions[currentQuestion]
  const sectionResponses = responses[section?.id] ?? {}

  const handleStart = (fromContinue = false) => {
    if (!fromContinue) {
      setResponses(getInitialResponses())
      setCurrentSection(0)
      setCurrentQuestion(0)
      setStartedAt(new Date().toISOString())
      setStep(0)
    } else {
      const stored = getStoredState()
      if (stored) {
        const sectionIdx = Math.min(stored.currentSection ?? 0, sections.length - 1)
        const section = sections[sectionIdx]
        const questionIdx = Math.min(stored.currentQuestion ?? 0, section ? section.questions.length - 1 : 0)
        setCurrentSection(sectionIdx)
        setCurrentQuestion(questionIdx)
        if (stored.startedAt) setStartedAt(stored.startedAt)
        setStep(sectionIdx)
      } else {
        setStep(0)
      }
    }
  }

  const handleContinue = () => handleStart(true)

  const setAnswer = (questionId, value) => {
    setResponses((prev) => ({
      ...prev,
      [section.id]: {
        ...prev[section.id],
        [questionId]: value,
      },
    }))
  }

  const goNext = () => {
    if (currentQuestion < totalQuestionsInSection - 1) {
      setCurrentQuestion((q) => q + 1)
    } else if (currentSection < totalSections - 1) {
      setCurrentSection((s) => s + 1)
      setCurrentQuestion(0)
    } else {
      setStep(STEP_SUMMARY)
    }
  }

  const goPrev = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion((q) => q - 1)
    } else if (currentSection > 0) {
      setCurrentSection((s) => s - 1)
      const prevSection = sections[currentSection - 1]
      setCurrentQuestion(prevSection.questions.length - 1)
    } else {
      setStep(STEP_INTRO)
    }
  }

  const handleSendBrief = async () => {
    setSendError(null)
    setSendSuccess(null)
    setSending(true)
    const payload = {
      responses,
      completedAt: new Date().toISOString(),
      metadata: {
        userAgent: typeof navigator !== 'undefined' ? navigator.userAgent : '',
        language: typeof navigator !== 'undefined' ? navigator.language : '',
      },
    }
    const result = await sendToWebhook(payload)
    setSending(false)
    if (result.ok) {
      setSendSuccess('Brief enviado correctamente. ¡Gracias!')
      clearStoredState()
    } else {
      setSendError(result.error || 'Error al enviar. Intenta de nuevo.')
    }
  }

  if (step === STEP_INTRO) {
    return (
      <main className="app">
        <Intro onStart={() => handleStart(false)} onContinue={handleContinue} hasSavedProgress={hasSavedProgress} />
      </main>
    )
  }

  if (step === STEP_SUMMARY) {
    return (
      <main className="app">
        <Summary
          responses={responses}
          onSend={handleSendBrief}
          sending={sending}
          sendError={sendError}
          sendSuccess={sendSuccess}
        />
      </main>
    )
  }

  return (
    <main className="app">
      <ProgressBar
        currentSection={currentSection}
        totalSections={totalSections}
        currentQuestion={currentQuestion}
        totalQuestionsInSection={totalQuestionsInSection}
      />
      <div className="survey">
        <SectionTitle title={section.title} objective={section.objective} />
        {question && (
          <QuestionBlock
            question={question}
            value={sectionResponses[question.id]}
            onChange={setAnswer}
          />
        )}
        <nav className="survey__nav" aria-label="Navegación del cuestionario">
          <button type="button" className="btn btn--secondary" onClick={goPrev}>
            Anterior
          </button>
          <button type="button" className="btn btn--primary" onClick={goNext}>
            {currentQuestion < totalQuestionsInSection - 1 || currentSection < totalSections - 1
              ? 'Siguiente'
              : 'Ver resumen'}
          </button>
        </nav>
      </div>
    </main>
  )
}

export default App
