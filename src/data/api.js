/**
 * api.js — shared GAS fetch utility for BC_Website.
 *
 * All data modules (machines, subs, blog, faq) call fetchSheet(sheet).
 * Results are module-level cached for CACHE_TTL ms so navigating between
 * pages doesn't trigger duplicate requests.
 *
 * Returns null on any error so callers can fall back to hardcoded data.
 */

const API_URL  = import.meta.env.VITE_BUTLER_API_URL || ''
const CACHE_TTL = 15 * 60 * 1000 // 15 minutes

const _cache = {}  // { [sheet]: { data, ts } }

/**
 * Fetch all rows from a given sheet name.
 * Returns an array of objects, or null if unavailable.
 */
export async function fetchSheet(sheet) {
  if (!API_URL) return null

  const hit = _cache[sheet]
  if (hit && Date.now() - hit.ts < CACHE_TTL) return hit.data

  try {
    const res  = await fetch(`${API_URL}?sheet=${sheet}`, { redirect: 'follow' })
    const json = await res.json()
    if (!json.ok) return null
    const data = Array.isArray(json.data) ? json.data : []
    _cache[sheet] = { data, ts: Date.now() }
    return data
  } catch {
    return null
  }
}

/** Force-clear the cache for a sheet (call after a push from the DB). */
export function invalidateSheet(sheet) {
  delete _cache[sheet]
}
