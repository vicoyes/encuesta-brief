import { useState, useEffect } from 'react'
import { sections } from './data/sections'
import { getStoredState, useLocalStorage, clearStoredState } from './hooks/useLocalStorage'
import { sendToWebhook } from './utils/sendToWebhook'
import Header from './components/Header'
import Intro from './components/Intro'
import ProgressBar from './components/ProgressBar'
import SectionIntro from './components/SectionIntro'
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
      setHasSavedProgress((stored.currentSection ?? 0) > 0)
    }
  }, [])

  useLocalStorage({
    responses: step === STEP_INTRO ? undefined : responses,
    currentSection: step === STEP_INTRO ? undefined : currentSection,
    currentQuestion: 0,
    startedAt,
  })

  const section = sections[currentSection]
  const totalSections = sections.length
  const sectionResponses = responses[section?.id] ?? {}

  const handleStart = (fromContinue = false) => {
    if (!fromContinue) {
      setResponses(getInitialResponses())
      setCurrentSection(0)
      setStartedAt(new Date().toISOString())
      setStep(0)
    } else {
      const stored = getStoredState()
      if (stored) {
        const idx = Math.min(stored.currentSection ?? 0, sections.length - 1)
        setCurrentSection(idx)
        if (stored.startedAt) setStartedAt(stored.startedAt)
        setStep(idx)
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
    if (currentSection < totalSections - 1) {
      setCurrentSection((s) => s + 1)
    } else {
      setStep(STEP_SUMMARY)
    }
  }

  const goPrev = () => {
    if (currentSection > 0) {
      setCurrentSection((s) => s - 1)
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
      <div className="layout-container flex h-full min-h-screen flex-col bg-background-light dark:bg-background-dark">
        <Header />
        <main className="flex flex-1 flex-col">
          <Intro onStart={() => handleStart(false)} onContinue={handleContinue} hasSavedProgress={hasSavedProgress} />
        </main>
      </div>
    )
  }

  if (step === STEP_SUMMARY) {
    return (
      <div className="layout-container flex h-full min-h-screen flex-col bg-background-light dark:bg-background-dark">
        <Header />
        <main className="flex flex-1 flex-col">
          <Summary
            responses={responses}
            onSend={handleSendBrief}
            sending={sending}
            sendError={sendError}
            sendSuccess={sendSuccess}
          />
        </main>
      </div>
    )
  }

  const nextLabel =
    currentSection < totalSections - 1
      ? `Siguiente: ${sections[currentSection + 1]?.shortLabel ?? sections[currentSection + 1]?.title ?? 'Siguiente'}`
      : 'Ver resumen'

  return (
    <div className="layout-container flex h-full min-h-screen flex-col bg-background-light dark:bg-background-dark">
      <Header />
      <main className="flex flex-1 flex-col py-6 sm:py-8 px-4 sm:px-6 lg:px-8">
        <div className="w-full max-w-[960px] mx-auto flex flex-col gap-8">
          <ProgressBar currentSection={currentSection} totalSections={totalSections} />

          <SectionIntro
            title={section.title}
            objective={section.objective}
            proTip={section.proTip}
          />

          <div className="flex flex-col gap-6 pb-4">
            {section.questions.map((q) => (
              <QuestionBlock
                key={q.id}
                question={q}
                value={sectionResponses[q.id]}
                onChange={setAnswer}
              />
            ))}
          </div>

          <nav
            className="flex items-center justify-between pt-6 border-t border-slate-200 dark:border-slate-700"
            aria-label="Navegación"
          >
            <button
              type="button"
              onClick={goPrev}
              className="flex items-center gap-2 px-5 py-2.5 rounded-lg text-slate-600 dark:text-slate-400 text-sm font-medium hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
            >
              Anterior
            </button>
            <button
              type="button"
              onClick={goNext}
              className="flex items-center gap-2 px-6 py-2.5 rounded-lg bg-primary text-white text-sm font-medium hover:opacity-90 transition-opacity"
            >
              {nextLabel}
            </button>
          </nav>
        </div>
      </main>
    </div>
  )
}

export default App
