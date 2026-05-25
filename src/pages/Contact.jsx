import { useState } from 'react'
import { Link } from 'react-router-dom'
import { useLang } from '../context/LangContext'
import Layout from '../components/Layout'
import './Contact.css'

export default function Contact() {
  const { lang } = useLang()
  const isEs = lang === 'es'

  const [form, setForm] = useState({ name: '', email: '', company: '', topic: 'subscription', message: '' })
  const [sent, setSent] = useState(false)

  const handleChange = e => setForm(f => ({ ...f, [e.target.name]: e.target.value }))
  const handleSubmit = e => {
    e.preventDefault()
    // TODO: wire to EmailJS / Formspree / backend
    setSent(true)
  }

  const topics = isEs ? [
    { value: 'subscription', label: 'Suscripción de café' },
    { value: 'machine',      label: 'Máquinas de café' },
    { value: 'bundle',       label: 'Pack máquina + suscripción' },
    { value: 'other',        label: 'Otro' },
  ] : [
    { value: 'subscription', label: 'Coffee subscription' },
    { value: 'machine',      label: 'Coffee machines' },
    { value: 'bundle',       label: 'Machine + subscription bundle' },
    { value: 'other',        label: 'Something else' },
  ]

  return (
    <Layout>

      {/* ── PAGE HERO ─────────────────────────────────────────────────────── */}
      <section className="page-hero">
        <div className="wrap">
          <div className="page-hero__eyebrow">
            <Link to="/" className="page-hero__back">
              {isEs ? '← Volver al inicio' : '← Back to home'}
            </Link>
            <span className="badge">{isEs ? 'Contacto' : 'Contact'}</span>
          </div>
          <h1 className="page-hero__title">
            {isEs ? <>Hablemos <em>del café.</em></> : <>Let's talk <em>coffee.</em></>}
          </h1>
          <p className="page-hero__sub">
            {isEs
              ? 'Ya sea para elegir un nivel de suscripción, configurar tu oficina o simplemente curiosidad — estamos aquí.'
              : "Whether it's picking a subscription tier, setting up your office, or just curiosity — we're here."}
          </p>
        </div>
      </section>

      {/* ── CONTACT LAYOUT ────────────────────────────────────────────────── */}
      <section className="section">
        <div className="wrap">
          <div className="contact-layout">

            {/* Form */}
            <div className="contact-form-wrap">
              {sent ? (
                <div className="contact-success">
                  <div className="contact-success__icon">✅</div>
                  <h2>{isEs ? '¡Mensaje enviado!' : 'Message sent!'}</h2>
                  <p>{isEs ? 'Te respondemos en menos de 1 día laborable.' : "We'll be back in touch within 1 business day."}</p>
                  <button className="btn btn--ghost btn--sm" onClick={() => setSent(false)}>
                    {isEs ? 'Enviar otro mensaje' : 'Send another message'}
                  </button>
                </div>
              ) : (
                <form className="contact-form" onSubmit={handleSubmit}>
                  <div className="contact-form__row">
                    <div className="form-group">
                      <label htmlFor="name">{isEs ? 'Nombre' : 'Name'}</label>
                      <input
                        id="name" name="name" type="text" required
                        placeholder={isEs ? 'Tu nombre' : 'Your name'}
                        value={form.name} onChange={handleChange}
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="email">Email</label>
                      <input
                        id="email" name="email" type="email" required
                        placeholder="you@company.com"
                        value={form.email} onChange={handleChange}
                      />
                    </div>
                  </div>
                  <div className="form-group">
                    <label htmlFor="company">{isEs ? 'Empresa (opcional)' : 'Company (optional)'}</label>
                    <input
                      id="company" name="company" type="text"
                      placeholder={isEs ? 'Tu empresa' : 'Your company'}
                      value={form.company} onChange={handleChange}
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="topic">{isEs ? '¿Sobre qué?' : "What's this about?"}</label>
                    <select id="topic" name="topic" value={form.topic} onChange={handleChange}>
                      {topics.map(t => <option key={t.value} value={t.value}>{t.label}</option>)}
                    </select>
                  </div>
                  <div className="form-group">
                    <label htmlFor="message">{isEs ? 'Mensaje' : 'Message'}</label>
                    <textarea
                      id="message" name="message" required
                      placeholder={isEs
                        ? 'Cuéntanos un poco sobre tu espacio, equipo o necesidades de café...'
                        : 'Tell us about your workspace, team, or coffee needs...'}
                      value={form.message} onChange={handleChange}
                    />
                  </div>
                  <button type="submit" className="btn btn--yellow btn--full btn--lg">
                    {isEs ? 'Enviar mensaje' : 'Send message'}
                  </button>
                  <p className="contact-form__note">
                    {isEs
                      ? 'Respondemos en menos de 1 día laborable. Sin spam.'
                      : "We reply within 1 business day. No spam, ever."}
                  </p>
                </form>
              )}
            </div>

            {/* Info sidebar */}
            <div className="contact-sidebar">
              <div className="contact-info-card">
                <h3>{isEs ? 'Información de contacto' : 'Contact info'}</h3>
                <div className="contact-info-item">
                  <span className="contact-info-icon">📧</span>
                  <div>
                    <div className="contact-info-label">Email</div>
                    <a href="mailto:hola@butler.coffee" className="contact-info-val">hola@butler.coffee</a>
                  </div>
                </div>
                <div className="contact-info-item">
                  <span className="contact-info-icon">📍</span>
                  <div>
                    <div className="contact-info-label">{isEs ? 'Base' : 'Based in'}</div>
                    <div className="contact-info-val">Madrid, Spain</div>
                  </div>
                </div>
                <div className="contact-info-item">
                  <span className="contact-info-icon">⏱️</span>
                  <div>
                    <div className="contact-info-label">{isEs ? 'Tiempo de respuesta' : 'Response time'}</div>
                    <div className="contact-info-val">{isEs ? '< 1 día laborable' : '< 1 business day'}</div>
                  </div>
                </div>
              </div>

              <div className="contact-info-card">
                <h3>{isEs ? '¿Prefieres explorar?' : 'Rather explore first?'}</h3>
                <p>{isEs ? 'Echa un vistazo a nuestros niveles y máquinas antes de contactar.' : 'Check out our tiers and machines before getting in touch.'}</p>
                <div className="contact-sidebar-links">
                  <Link to="/subs" className="btn btn--ghost btn--sm btn--full">
                    {isEs ? 'Ver suscripciones →' : 'View subscriptions →'}
                  </Link>
                  <Link to="/machines" className="btn btn--ghost btn--sm btn--full">
                    {isEs ? 'Ver máquinas →' : 'View machines →'}
                  </Link>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

    </Layout>
  )
}
