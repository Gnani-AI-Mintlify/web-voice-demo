export type Session = {
  apiKey: string
  botId: string
  expiresAt: number
}

const STORAGE_KEY = 'session'

export const SIX_HOURS_MS = 6 * 60 * 60 * 1000

export function setSession(apiKey: string, botId: string, ttlMs: number = SIX_HOURS_MS) {
  const session: Session = {
    apiKey,
    botId,
    expiresAt: Date.now() + ttlMs,
  }
  localStorage.setItem(STORAGE_KEY, JSON.stringify(session))
}

export function getSession(): Session | null {
  const raw = localStorage.getItem(STORAGE_KEY)
  if (!raw) return null
  try {
    const parsed: Session = JSON.parse(raw)
    if (typeof parsed.expiresAt !== 'number' || Date.now() > parsed.expiresAt) {
      localStorage.removeItem(STORAGE_KEY)
      return null
    }
    return parsed
  } catch {
    localStorage.removeItem(STORAGE_KEY)
    return null
  }
}

export function clearSession() {
  localStorage.removeItem(STORAGE_KEY)
}

