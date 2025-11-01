function Conteudo({ onScroll, openVideo }) {
  const videos = [
    { id: 'dQw4w9WgXcQ', title: 'Arquitetura Flutter na prática!' },
    { id: 'M7lc1UVf-VE', title: 'CI/CD para apps móveis' },
    { id: 'aqz-KE-bpKQ', title: 'Rust + Flutter com FFI' },
  ]

  return (
    <section id="conteudo" className="section">
      <div className="container">
        <h2>Conteúdo Tech</h2>
        <p className="section-lead">Vídeos, lives e artigos sobre engenharia de software, carreira e bastidores de projetos reais.</p>
        <div className="video-grid" role="list">
          {videos.map((video, index) => (
            <button
              key={video.id}
              className="video-card"
              role="listitem"
              onClick={() => openVideo(video.id)}
              aria-label={`Assistir vídeo ${index + 1}`}
            >
              <span className="video-card__title">{video.title}</span>
            </button>
          ))}
        </div>
        <div className="cta-box">
          <a className="btn btn--ghost" href="https://www.youtube.com" target="_blank" rel="noopener noreferrer">Ir para o canal</a>
        </div>
      </div>
    </section>
  )
}

export default Conteudo

