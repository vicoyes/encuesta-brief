/**
 * Envía las respuestas del brief al webhook configurado en VITE_WEBHOOK_URL.
 * @param {Object} payload - { responses, completedAt, metadata }
 * @returns {Promise<{ ok: boolean, error?: string }>}
 */
export async function sendToWebhook(payload) {
  const url = import.meta.env.VITE_WEBHOOK_URL
  if (!url || url.trim() === '') {
    return { ok: false, error: 'No se ha configurado la URL del webhook (VITE_WEBHOOK_URL).' }
  }

  try {
    const res = await fetch(url, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload),
    })
    if (!res.ok) {
      const text = await res.text()
      return { ok: false, error: text || `Error ${res.status}` }
    }
    return { ok: true }
  } catch (err) {
    return { ok: false, error: err.message || 'Error de conexión' }
  }
}
