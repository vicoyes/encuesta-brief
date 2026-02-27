import { useState, useEffect, useCallback } from 'react'

const STORAGE_KEYS = {
  responses: 'brief_responses',
  currentSection: 'brief_current_section',
  currentQuestion: 'brief_current_question',
  startedAt: 'brief_started_at',
}

export function getStoredState() {
  try {
    const responses = localStorage.getItem(STORAGE_KEYS.responses)
    const currentSection = localStorage.getItem(STORAGE_KEYS.currentSection)
    const currentQuestion = localStorage.getItem(STORAGE_KEYS.currentQuestion)
    const startedAt = localStorage.getItem(STORAGE_KEYS.startedAt)
    if (!responses && currentSection == null) return null
    return {
      responses: responses ? JSON.parse(responses) : {},
      currentSection: currentSection != null ? parseInt(currentSection, 10) : 0,
      currentQuestion: currentQuestion != null ? parseInt(currentQuestion, 10) : 0,
      startedAt: startedAt || null,
    }
  } catch {
    return null
  }
}

export function saveStateToStorage({ responses, currentSection, currentQuestion, startedAt }) {
  try {
    if (responses != null) localStorage.setItem(STORAGE_KEYS.responses, JSON.stringify(responses))
    if (currentSection != null) localStorage.setItem(STORAGE_KEYS.currentSection, String(currentSection))
    if (currentQuestion != null) localStorage.setItem(STORAGE_KEYS.currentQuestion, String(currentQuestion))
    if (startedAt != null) localStorage.setItem(STORAGE_KEYS.startedAt, startedAt)
  } catch (_) {}
}

export function clearStoredState() {
  try {
    Object.values(STORAGE_KEYS).forEach((key) => localStorage.removeItem(key))
  } catch (_) {}
}

/**
 * Hook para persistir respuestas y paso actual en localStorage.
 * @param {Object} state - { responses, currentSection, currentQuestion, startedAt }
 */
export function useLocalStorage(state) {
  const { responses, currentSection, currentQuestion, startedAt } = state

  useEffect(() => {
    saveStateToStorage({
      responses,
      currentSection,
      currentQuestion,
      startedAt,
    })
  }, [responses, currentSection, currentQuestion, startedAt])
}
