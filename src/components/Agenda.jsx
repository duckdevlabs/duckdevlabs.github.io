import { useState } from 'react'
import { useTranslation } from 'react-i18next'

function Agenda() {
  const { t } = useTranslation()
  const [email, setEmail] = useState('')
  const [status, setStatus] = useState('')
  const [isSubmitting, setIsSubmitting] = useState(false)
  const topics = t('agenda.topics', { returnObjects: true })

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)

    await new Promise(resolve => setTimeout(resolve, 500))

    setStatus(t('agenda.success'))
    setEmail('')
    setIsSubmitting(false)

    setTimeout(() => setStatus(''), 5000)
  }

  return (
    <section id="agenda" className="section section--alt">
      <div className="container grid-2">
        <div>
          <h2>{t('agenda.title')}</h2>
          <p>{t('agenda.description')}</p>
          <form id="newsletter" className="form" onSubmit={handleSubmit}>
            <label className="sr-only" htmlFor="email">{t('agenda.emailLabel')}</label>
            <input
              id="email"
              type="email"
              placeholder={t('agenda.emailPlaceholder')}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <button
              className="btn btn--primary"
              type="submit"
              disabled={isSubmitting}
              aria-busy={isSubmitting}
            >
              {isSubmitting ? t('agenda.submitting') : t('agenda.submit')}
            </button>
            {status && (
              <small className="muted" id="form-status" role="status" aria-live="polite">{status}</small>
            )}
          </form>
        </div>
        <div className="card card--retro">
          <h3>{t('agenda.topicsTitle')}</h3>
          <ul className="bullets">
            {topics.map((topic, i) => (
              <li key={i}>{topic}</li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}

export default Agenda
