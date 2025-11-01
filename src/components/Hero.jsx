function Hero({ onScroll }) {
  return (
    <section className="hero" aria-label="Introdução">
      <div className="hero__bg">
        <img src="/assets/duckdev-banner.jpeg" alt="" aria-hidden="true" />
      </div>
      <div className="hero__content">
        <h1>Software bem feito. Conteúdo sem enrolação.</h1>
        <p>Construímos produtos digitais e compartilhamos o processo: vídeos, artigos e meetups sobre programação, hardware e o lifestyle de quem vive do código.</p>
        <div className="hero__ctas">
          <a className="btn btn--primary" href="#servicos" onClick={(e) => onScroll(e, '#servicos')}>Construir produto</a>
          <a className="btn btn--ghost" href="#conteudo" onClick={(e) => onScroll(e, '#conteudo')}>Assistir conteúdo</a>
        </div>
      </div>
      <div className="hero__badge">8‑bit vibes</div>
    </section>
  )
}

export default Hero

