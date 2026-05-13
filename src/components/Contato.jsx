import { useTranslation } from 'react-i18next'

function Contato() {
  const { t } = useTranslation()

  return (
    <section id="contato" className="section section--alt">
      <div className="container grid-2">
        <div>
          <h2>{t('contact.title')}</h2>
          <p>{t('contact.description')}</p>
          <ul className="socials">
            <li><a href="mailto:hello@duckdevlabs.dev">hello@duckdevlabs.dev</a></li>
            <li><a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">Instagram</a></li>
            <li><a href="https://www.youtube.com" target="_blank" rel="noopener noreferrer">YouTube</a></li>
            <li><a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">LinkedIn</a></li>
          </ul>
        </div>
        <div className="card card--retro">
          <h3>{t('contact.manifestoTitle')}</h3>
          <p>{t('contact.manifesto')}</p>
        </div>
      </div>
    </section>
  )
}

export default Contato
