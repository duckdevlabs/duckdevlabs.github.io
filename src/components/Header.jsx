import { useEffect, useRef } from 'react'
import { useTranslation } from 'react-i18next'
import LanguageSwitcher from './LanguageSwitcher'

function Header({ isNavOpen, setIsNavOpen, onScroll }) {
  const { t } = useTranslation()
  const navRef = useRef(null)
  const toggleRef = useRef(null)

  const handleScroll = (e) => {
    onScroll(e, '#top')
  }

  const handleNavClick = (e, targetId) => {
    onScroll(e, targetId)
    setIsNavOpen(false)
  }

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
      <a className="brand" href="#top" aria-label={t('header.home')} onClick={handleScroll}>
        <img src="/assets/duck-avatar.jpeg" alt={t('header.logoAlt')} className="brand__logo" />
        <span className="brand__name">DuckDev<span className="brand__accent">Labs</span></span>
      </a>
      <LanguageSwitcher />
      <button 
        ref={toggleRef}
        className="nav-toggle" 
        aria-expanded={isNavOpen} 
        aria-controls="site-nav"
        aria-label={isNavOpen ? t('header.closeMenu') : t('header.openMenu')}
        onClick={() => setIsNavOpen(!isNavOpen)}
      >
        <span className="nav-toggle__bar"></span>
        <span className="nav-toggle__bar"></span>
        <span className="nav-toggle__bar"></span>
        <span className="sr-only">{isNavOpen ? t('header.closeMenu') : t('header.openMenu')}</span>
      </button>
      <nav ref={navRef} id="site-nav" className={`site-nav ${isNavOpen ? 'open' : ''}`}>
        <a href="#sobre" onClick={(e) => handleNavClick(e, '#sobre')}>{t('header.nav.about')}</a>
        <a href="#servicos" onClick={(e) => handleNavClick(e, '#servicos')}>{t('header.nav.software')}</a>
        <a href="#conteudo" onClick={(e) => handleNavClick(e, '#conteudo')}>{t('header.nav.content')}</a>
        <a href="#agenda" onClick={(e) => handleNavClick(e, '#agenda')}>{t('header.nav.meetups')}</a>
        <a href="#setup" onClick={(e) => handleNavClick(e, '#setup')}>{t('header.nav.setups')}</a>
        <a href="#contato" onClick={(e) => handleNavClick(e, '#contato')}>{t('header.nav.contact')}</a>
      </nav>
    </header>
  )
}

export default Header
