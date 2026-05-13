import { useTranslation, Trans } from 'react-i18next'

function Sobre() {
  const { t } = useTranslation()
  const bullets = t('about.bullets', { returnObjects: true })

  return (
    <section id="sobre" className="section">
      <div className="container grid-2">
        <div>
          <h2>{t('about.title')}</h2>
          <p><Trans i18nKey="about.description" /></p>
          <ul className="bullets">
            {bullets.map((item, i) => (
              <li key={i}>{item}</li>
            ))}
          </ul>
        </div>
        <div className="card card--retro">
          <h3>{t('about.stackTitle')}</h3>
          <div className="tags">
            <span>Flutter</span><span>Dart</span><span>Rust</span><span>Node.js</span><span>PostgreSQL</span><span>Docker</span><span>gRPC/REST</span>
          </div>
          <p className="muted">{t('about.stackNote')}</p>
        </div>
      </div>
    </section>
  )
}

export default Sobre
