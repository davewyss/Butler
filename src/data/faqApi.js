/**
 * faqApi.js — fetches FAQ entries from the Google Apps Script backend.
 *
 * Uses the same GAS endpoint as the rest of the site data (set
 * VITE_BUTLER_API_URL in .env.local). The GAS script needs a "faq" sheet
 * handler — your partner will add this.
 *
 * Until the backend is ready, this returns an empty array gracefully so
 * the website falls back to hardcoded FAQ content.
 *
 * Each FAQ entry shape:
 *   { id, question_en, answer_en, question_es, answer_es, sort_order, visible }
 */

const API_URL = import.meta.env.VITE_BUTLER_API_URL || '';

const CACHE_TTL = 10 * 60 * 1000; // 10 minutes
let _cache     = null;
let _cacheTime = 0;

/**
 * Returns visible FAQ entries sorted by sort_order.
 * Falls back to [] if the API is unavailable or the sheet doesn't exist yet.
 */
export async function getFaqs() {
  if (!API_URL) return [];
  if (_cache && Date.now() - _cacheTime < CACHE_TTL) return _cache;

  try {
    const res  = await fetch(`${API_URL}?sheet=faq`, { redirect: 'follow' });
    const json = await res.json();
    if (!json.ok) return [];

    const entries = (Array.isArray(json.data) ? json.data : [])
      .filter(f => f.visible !== false && f.visible !== 'false')
      .sort((a, b) => Number(a.sort_order) - Number(b.sort_order));

    _cache     = entries;
    _cacheTime = Date.now();
    return entries;
  } catch {
    return [];
  }
}

export function invalidateFaqCache() {
  _cache     = null;
  _cacheTime = 0;
}
