import { useTranslation } from 'react-i18next'

function Servicos({ onScroll }) {
  const { t } = useTranslation()
  const cards = t('services.cards', { returnObjects: true })

  return (
    <section id="servicos" className="section section--alt">
      <div className="container">
        <h2>{t('services.title')}</h2>
        <div className="cards-3">
          {cards.map((card, i) => (
            <article className="card" key={i}>
              <h3>{card.title}</h3>
              <p>{card.description}</p>
            </article>
          ))}
        </div>
        <div className="cta-box">
          <a className="btn btn--primary" href="#contato" onClick={(e) => onScroll(e, '#contato')}>{t('services.cta')}</a>
          <p className="muted">{t('services.note')}</p>
        </div>
      </div>
    </section>
  )
}

export default Servicos
