function Header({ isNavOpen, setIsNavOpen, onScroll }) {
  const handleScroll = (e) => {
    onScroll(e, '#top')
  }

  return (
    <header className="site-header">
      <a className="brand" href="#top" aria-label="DuckDevLabs Home" onClick={handleScroll}>
        <img src="/assets/duck-avatar.jpeg" alt="Logotipo do DuckDevLabs — pato pixel art com laptop" className="brand__logo" />
        <span className="brand__name">DuckDev<span className="brand__accent">Labs</span></span>
      </a>
      <button 
        className="nav-toggle" 
        aria-expanded={isNavOpen} 
        aria-controls="site-nav"
        onClick={() => setIsNavOpen(!isNavOpen)}
      >
        <span className="nav-toggle__bar"></span>
        <span className="nav-toggle__bar"></span>
        <span className="nav-toggle__bar"></span>
        <span className="sr-only">Abrir menu</span>
      </button>
      <nav id="site-nav" className={`site-nav ${isNavOpen ? 'open' : ''}`}>
        <a href="#sobre" onClick={(e) => onScroll(e, '#sobre')}>Sobre</a>
        <a href="#servicos" onClick={(e) => onScroll(e, '#servicos')}>Software</a>
        <a href="#conteudo" onClick={(e) => onScroll(e, '#conteudo')}>Conteúdo</a>
        <a href="#agenda" onClick={(e) => onScroll(e, '#agenda')}>Meetups</a>
        <a href="#setup" onClick={(e) => onScroll(e, '#setup')}>Setups</a>
        <a href="#contato" onClick={(e) => onScroll(e, '#contato')}>Contato</a>
      </nav>
    </header>
  )
}

export default Header

