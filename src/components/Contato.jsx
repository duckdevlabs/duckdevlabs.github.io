function Contato() {
  return (
    <section id="contato" className="section section--alt">
      <div className="container grid-2">
        <div>
          <h2>Vamos criar algo juntos?</h2>
          <p>Conte um pouco do seu projeto e retornamos com um plano direto e prático.</p>
          <ul className="socials">
            <li><a href="mailto:hello@duckdevlabs.dev">hello@duckdevlabs.dev</a></li>
            <li><a href="https://www.instagram.com" target="_blank" rel="noopener">Instagram</a></li>
            <li><a href="https://www.youtube.com" target="_blank" rel="noopener">YouTube</a></li>
            <li><a href="https://www.linkedin.com" target="_blank" rel="noopener">LinkedIn</a></li>
          </ul>
        </div>
        <div className="card card--retro">
          <h3>Manifesto rápido</h3>
          <p>Menos buzzword, mais entrega. Código limpo, testes e observabilidade. Conteúdo honesto que ajuda devs a crescer na prática.</p>
        </div>
      </div>
    </section>
  )
}

export default Contato

