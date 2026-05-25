import { useState } from 'react'
import { Link, useParams, Navigate } from 'react-router-dom'
import { useLang } from '../context/LangContext'
import { getTierBySlug, TIERS } from '../data/tiers'
import Layout from '../components/Layout'
import './SubTier.css'

export default function SubTier() {
  const { tier: slug } = useParams()
  const { lang, t } = useLang()
  const tier = getTierBySlug(slug)
  const isEs = lang === 'es'

  const [size, setSize] = useState(() => tier?.sizes[0].label || '')

  if (!tier) return <Navigate to="/subs" replace />

  const currentSize = tier.sizes.find(s => s.label === size) || tier.sizes[0]
  const stripeLink  = tier.stripeLinks[size] || '#'
  const tierIndex   = TIERS.findIndex(t => t.id === tier.id)
  const prevTier    = tierIndex > 0 ? TIERS[tierIndex - 1] : null
  const nextTier    = tierIndex < TIERS.length - 1 ? TIERS[tierIndex + 1] : null

  return (
    <Layout>

      {/* ── HERO ────────────────────────────────────────────────────────── */}
      <section className={`tier-hero ${tier.featured ? 'tier-hero--feat' : ''}`}>
        <div className="wrap">
          <div className="page-hero__eyebrow">
            <Link to="/subs" className="page-hero__back">{t('back_subs')}</Link>
            <span className="badge">{tier.tier}</span>
          </div>

          <div className="tier-hero__layout">
            <div className="tier-hero__text">
              <div className="tier-hero__emoji">{tier.emoji}</div>
              <h1 className="tier-hero__name">{tier.name}</h1>
              <p className="tier-hero__tagline">{tier.tagline}</p>
              <div className="tier-hero__pills">
                {tier.pills.map(p => <span key={p} className="tier__pill">{p}</span>)}
              </div>
              <p className="tier-hero__desc">{tier.detail[lang]}</p>
            </div>

            <div className="tier-hero__buy">
              <div className="tier-buy-card">
                {tier.featured && (
                  <div className="tier-buy-card__pop">{tier.popularLabel?.[lang] || 'Most Popular'}</div>
                )}

                {/* Taste profile */}
                <div className="tier-buy-card__profile">
                  <div className="profile-row">
                    <span>{isEs ? 'Sabor' : 'Taste'}</span>
                    <span>{tier.taste[lang]}</span>
                  </div>
                  <div className="profile-row">
                    <span>{isEs ? 'Proceso' : 'Process'}</span>
                    <span>{tier.process[lang]}</span>
                  </div>
                  <div className="profile-row">
                    <span>{isEs ? 'Tueste' : 'Roast'}</span>
                    <span>{tier.roast[lang]}</span>
                  </div>
                  <div className="profile-row">
                    <span>{isEs ? 'Ideal para' : 'Ideal for'}</span>
                    <span>{tier.ideal[lang]}</span>
                  </div>
                </div>

                <hr className="tier-buy-card__rule" />

                {/* Size picker */}
                <div className="tier__size-lbl">{isEs ? 'Elige el tamaño' : 'Select size'}</div>
                <div className="tier__sizes tier-buy-card__sizes">
                  {tier.sizes.map(s => (
                    <button
                      key={s.label}
                      className={`sz ${size === s.label ? 'on' : ''}`}
                      onClick={() => setSize(s.label)}
                    >
                      <span className="sz-label">{s.label}</span>
                      <span className="sz-price">€{s.price}</span>
                    </button>
                  ))}
                </div>

                {/* Price */}
                <div className="tier-buy-card__price">
                  <span className="tier-buy-card__price-from">{isEs ? 'desde' : 'from'}</span>
                  <span className="tier-buy-card__price-num">€{currentSize.price}</span>
                  <span className="tier-buy-card__price-per">{isEs ? '/ mes' : '/ mo.'}</span>
                </div>
                <p className="tier-buy-card__note">
                  {isEs ? `bolsa de ${size}` : `${size} bag`}
                  {' · '}{isEs ? 'suscripción mensual' : 'monthly subscription'}
                </p>

                <a href={stripeLink} className={`btn btn--full ${tier.featured ? 'btn--yellow' : 'btn--ghost'}`} style={{ marginTop: 4 }}>
                  {t('start_sub')}
                </a>
                <p className="tier-buy-card__legal">
                  {isEs ? 'Sin compromiso. Cancela cuando quieras.' : 'No commitment. Cancel any time.'}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── WHAT'S INCLUDED ─────────────────────────────────────────────── */}
      <section className="section surf-section">
        <div className="wrap">
          <div className="sh sh--center">
            <span className="badge">{isEs ? 'Qué incluye' : "What's included"}</span>
            <h2 className="section-title">
              {isEs ? 'Lo que obtienes cada mes.' : 'What you get every month.'}
            </h2>
          </div>
          <div className="tier-features-grid">
            {tier.features[lang].map((f, i) => (
              <div className="tier-feature" key={i}>
                <span className="tier-feature__check">✓</span>
                <span>{f}</span>
              </div>
            ))}
            {[
              { en: 'Free shipping over €30', es: 'Envío gratis a partir de 30€' },
              { en: 'Cancel any time via Portal', es: 'Cancela cuando quieras desde el Portal' },
              { en: 'Freshness guaranteed', es: 'Frescura garantizada' },
              { en: 'Whole bean or ground', es: 'Grano entero o molido' },
            ].map((f, i) => (
              <div className="tier-feature" key={`extra-${i}`}>
                <span className="tier-feature__check">✓</span>
                <span>{f[lang] || f.en}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── OTHER TIERS ─────────────────────────────────────────────────── */}
      <section className="section">
        <div className="wrap">
          <div className="sh sh--center">
            <span className="badge">{isEs ? 'Explorar' : 'Explore'}</span>
            <h2 className="section-title">
              {isEs ? 'Otros niveles.' : 'Other tiers.'}
            </h2>
          </div>
          <div className="tier-nav-grid">
            {TIERS.filter(t => t.id !== tier.id).map(other => (
              <Link key={other.id} to={`/subs/${other.slug}`} className="tier-nav-card">
                <span className="tier-nav-card__emoji">{other.emoji}</span>
                <div>
                  <div className="tier-nav-card__tier">{other.tier}</div>
                  <div className="tier-nav-card__name">{other.name}</div>
                  <div className="tier-nav-card__price">
                    {isEs ? 'desde' : 'from'} €{other.price}/{other.unit}
                  </div>
                </div>
                <span className="tier-nav-card__arrow">→</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

    </Layout>
  )
}
