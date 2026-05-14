import { useTranslation } from 'react-i18next'

function Hero({ onScroll }) {
  const { t } = useTranslation()

  return (
    <section className="hero" aria-label={t('hero.ariaLabel')}>
      <div className="hero__bg">
        <img src="/assets/duckdev-banner.jpeg" alt="" aria-hidden="true" />
      </div>
      <div className="hero__content">
        <h1>{t('hero.title')}</h1>
        <p>{t('hero.description')}</p>
        <div className="hero__ctas">
          <a className="btn btn--primary" href="#servicos" onClick={(e) => onScroll(e, '#servicos')}>{t('hero.ctaPrimary')}</a>
          {/* <a className="btn btn--ghost" href="#conteudo" onClick={(e) => onScroll(e, '#conteudo')}>{t('hero.ctaGhost')}</a> */}
        </div>
      </div>
      <div className="hero__badge">{t('hero.badge')}</div>
    </section>
  )
}

export default Hero
