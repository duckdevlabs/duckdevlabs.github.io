import { useEffect, useRef } from 'react'

function Header({ isNavOpen, setIsNavOpen, onScroll }) {
  const navRef = useRef(null)
  const toggleRef = useRef(null)

  const handleScroll = (e) => {
    onScroll(e, '#top')
  }

  const handleNavClick = (e, targetId) => {
    onScroll(e, targetId)
    setIsNavOpen(false)
  }

  // Fechar menu ao clicar fora ou ao pressionar ESC
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        isNavOpen &&
        navRef.current &&
        !navRef.current.contains(event.target) &&
        toggleRef.current &&
        !toggleRef.current.contains(event.target)
      ) {
        setIsNavOpen(false)
      }
    }

    const handleEscape = (event) => {
      if (event.key === 'Escape' && isNavOpen) {
        setIsNavOpen(false)
      }
    }

    if (isNavOpen) {
      document.addEventListener('mousedown', handleClickOutside)
      document.addEventListener('touchstart', handleClickOutside)
      document.addEventListener('keydown', handleEscape)
      // Prevenir scroll do body quando menu está aberto
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
      document.removeEventListener('touchstart', handleClickOutside)
      document.removeEventListener('keydown', handleEscape)
      document.body.style.overflow = ''
    }
  }, [isNavOpen])

  return (
    <header className="site-header">
      <a className="brand" href="#top" aria-label="DuckDevLabs Home" onClick={handleScroll}>
        <img src="/assets/duck-avatar.jpeg" alt="Logotipo do DuckDevLabs — pato pixel art com laptop" className="brand__logo" />
        <span className="brand__name">DuckDev<span className="brand__accent">Labs</span></span>
      </a>
      <button 
        ref={toggleRef}
        className="nav-toggle" 
        aria-expanded={isNavOpen} 
        aria-controls="site-nav"
        aria-label={isNavOpen ? 'Fechar menu' : 'Abrir menu'}
        onClick={() => setIsNavOpen(!isNavOpen)}
      >
        <span className="nav-toggle__bar"></span>
        <span className="nav-toggle__bar"></span>
        <span className="nav-toggle__bar"></span>
        <span className="sr-only">{isNavOpen ? 'Fechar menu' : 'Abrir menu'}</span>
      </button>
      <nav ref={navRef} id="site-nav" className={`site-nav ${isNavOpen ? 'open' : ''}`}>
        <a href="#sobre" onClick={(e) => handleNavClick(e, '#sobre')}>Sobre</a>
        <a href="#servicos" onClick={(e) => handleNavClick(e, '#servicos')}>Software</a>
        <a href="#conteudo" onClick={(e) => handleNavClick(e, '#conteudo')}>Conteúdo</a>
        <a href="#agenda" onClick={(e) => handleNavClick(e, '#agenda')}>Meetups</a>
        <a href="#setup" onClick={(e) => handleNavClick(e, '#setup')}>Setups</a>
        <a href="#contato" onClick={(e) => handleNavClick(e, '#contato')}>Contato</a>
      </nav>
    </header>
  )
}

export default Header

