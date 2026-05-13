import { useTranslation } from 'react-i18next'

function Setup() {
  const { t } = useTranslation()
  const cards = t('setup.cards', { returnObjects: true })

  return (
    <section id="setup" className="section">
      <div className="container">
        <h2>{t('setup.title')}</h2>
        <p className="section-lead">{t('setup.lead')}</p>
        <div className="cards-3">
          {cards.map((card, i) => (
            <article className="card" key={i}>
              <h3>{card.title}</h3>
              <p>{card.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Setup
