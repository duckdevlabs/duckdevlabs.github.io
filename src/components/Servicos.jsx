function Servicos({ onScroll }) {
  return (
    <section id="servicos" className="section section--alt">
      <div className="container">
        <h2>Software &amp; Serviços</h2>
        <div className="cards-3">
          <article className="card">
            <h3>Produtos de ponta a ponta</h3>
            <p>Descoberta, arquitetura, desenvolvimento e publicação. Mobile, web e backend com observabilidade e CI/CD.</p>
          </article>
          <article className="card">
            <h3>Consultoria técnica</h3>
            <p>Modularização, micro‑frontends no mobile, performance, pipelines, segurança e revisão de arquitetura.</p>
          </article>
          <article className="card">
            <h3>Workshops &amp; treinamentos</h3>
            <p>Mãos‑na‑massa para times: Flutter avançado, DevOps prático, testes, clean architecture e mais.</p>
          </article>
        </div>
        <div className="cta-box">
          <a className="btn btn--primary" href="#contato" onClick={(e) => onScroll(e, '#contato')}>Fale com a gente</a>
          <p className="muted">Projetos por escopo e pacotes sob demanda.</p>
        </div>
      </div>
    </section>
  )
}

export default Servicos

