function Sobre() {
  return (
    <section id="sobre" className="section">
      <div className="container grid-2">
        <div>
          <h2>Quem somos</h2>
          <p>Somos um estúdio de engenharia focado em <strong>software de alta qualidade</strong> e em <strong>educação técnica</strong>. Nosso diferencial é unir prática de mercado (arquitetura, DevOps, mobile, backend) com uma comunicação direta, acessível e divertida.</p>
          <ul className="bullets">
            <li>Arquiteturas modernas (Flutter, Rust, Node, Docker, PostgreSQL).</li>
            <li>Conteúdo técnico no YouTube e meetups presenciais/online.</li>
            <li>Reviews de hardware, periféricos e otimização de setup.</li>
          </ul>
        </div>
        <div className="card card--retro">
          <h3>Nossa stack favorita</h3>
          <div className="tags">
            <span>Flutter</span><span>Dart</span><span>Rust</span><span>Node.js</span><span>PostgreSQL</span><span>Docker</span><span>gRPC/REST</span>
          </div>
          <p className="muted">Mas a melhor stack é a que resolve o seu problema com clareza e performance.</p>
        </div>
      </div>
    </section>
  )
}

export default Sobre

